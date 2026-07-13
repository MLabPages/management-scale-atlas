import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const JAPANESE_STATUSES = new Set([
  "validated",
  "linguistic-validated",
  "usage-example",
  "translation-study",
  "related-version",
  "original-japanese",
  "unconfirmed",
]);

const JAPANESE_STATUS_LABELS = {
  validated: "検証済み",
  "linguistic-validated": "言語的妥当性確認",
  "usage-example": "日本語使用例",
  "translation-study": "翻訳・因子構造等の検討",
  "related-version": "関連版の日本語根拠",
  "original-japanese": "日本語で独自開発",
  unconfirmed: "未確認",
};

const DOI_PATTERN = /^10\.\d{4,9}\/[\w.()/:;-]+$/i;

function lineAndColumn(source, index) {
  const lines = source.slice(0, index).split("\n");
  return { line: lines.length, column: lines.at(-1).length + 1 };
}

function readTokens(source) {
  const tokens = [];
  let index = 0;
  while (index < source.length) {
    const character = source[index];
    const next = source[index + 1];
    if (/\s/.test(character)) {
      index += 1;
      continue;
    }
    if (character === "/" && next === "/") {
      index = source.indexOf("\n", index + 2);
      if (index === -1) break;
      continue;
    }
    if (character === "/" && next === "*") {
      const end = source.indexOf("*/", index + 2);
      index = end === -1 ? source.length : end + 2;
      continue;
    }
    if (character === "'" || character === '"' || character === "`") {
      const quote = character;
      const start = index;
      let value = "";
      index += 1;
      while (index < source.length) {
        if (source[index] === "\\") {
          value += source.slice(index, index + 2);
          index += 2;
        } else if (source[index] === quote) {
          index += 1;
          break;
        } else {
          value += source[index];
          index += 1;
        }
      }
      tokens.push({ type: "string", value, start });
      continue;
    }
    if (/[A-Za-z_$]/.test(character)) {
      const start = index;
      index += 1;
      while (index < source.length && /[A-Za-z0-9_$]/.test(source[index])) index += 1;
      tokens.push({ type: "identifier", value: source.slice(start, index), start });
      continue;
    }
    tokens.push({ type: "punctuator", value: character, start: index });
    index += 1;
  }
  return tokens;
}

function findDuplicateObjectKeys(source) {
  const duplicates = [];
  const objectStack = [];
  const tokens = readTokens(source);
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    const currentObject = objectStack.at(-1);
    if (token.value === "{") {
      objectStack.push({ keys: new Map(), expectingKey: true });
      continue;
    }
    if (token.value === "}") {
      objectStack.pop();
      continue;
    }
    if (!currentObject) continue;
    if (token.value === ",") {
      currentObject.expectingKey = true;
      continue;
    }
    const next = tokens[index + 1];
    if (currentObject.expectingKey && (token.type === "identifier" || token.type === "string") && next?.value === ":") {
      if (currentObject.keys.has(token.value)) {
        const first = lineAndColumn(source, currentObject.keys.get(token.value));
        const duplicate = lineAndColumn(source, token.start);
        duplicates.push(`data.js:${duplicate.line}:${duplicate.column} のキー「${token.value}」は、${first.line}:${first.column}ですでに定義されています。`);
      } else {
        currentObject.keys.set(token.value, token.start);
      }
      currentObject.expectingKey = false;
    }
  }
  return duplicates;
}

function loadAtlas(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const duplicateErrors = findDuplicateObjectKeys(source);
  const context = Object.create(null);
  vm.runInNewContext(`${source}\n;globalThis.__ATLAS_DATA__ = ATLAS_DATA;`, context, { filename: filePath, timeout: 1_000 });
  return { atlas: context.__ATLAS_DATA__, duplicateErrors };
}

function isPositiveInteger(value) {
  return Number.isInteger(value) && value > 0;
}

function isNonEmptyText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function addUrlAndDoiErrors(value, fieldPath, errors) {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    value.forEach((item, index) => addUrlAndDoiErrors(item, `${fieldPath}[${index}]`, errors));
    return;
  }
  for (const [key, nestedValue] of Object.entries(value)) {
    const nestedPath = `${fieldPath}.${key}`;
    if (key === "doi" && nestedValue !== "" && nestedValue !== undefined) {
      if (!isNonEmptyText(nestedValue) || !DOI_PATTERN.test(nestedValue.trim())) {
        errors.push(`${nestedPath}: DOIは「10.」から始まる形式で指定してください。`);
      }
    }
    if (key === "url" && nestedValue !== "" && nestedValue !== undefined) {
      try {
        const url = new URL(nestedValue);
        if (!["http:", "https:"].includes(url.protocol)) throw new Error("unsupported protocol");
      } catch {
        errors.push(`${nestedPath}: http または https の有効なURLを指定してください。`);
      }
    }
    addUrlAndDoiErrors(nestedValue, nestedPath, errors);
  }
}

function validateAtlas(atlas, duplicateErrors = []) {
  const errors = [...duplicateErrors];
  if (!atlas || typeof atlas !== "object") return { errors: ["ATLAS_DATAがオブジェクトとして読み込めません。"], summary: null };
  if (!Array.isArray(atlas.concepts) || !Array.isArray(atlas.scales)) {
    return { errors: ["ATLAS_DATAにはconcepts配列とscales配列が必要です。"], summary: null };
  }

  const conceptIds = new Set();
  for (const [index, concept] of atlas.concepts.entries()) {
    const fieldPath = `concepts[${index}]`;
    if (!isNonEmptyText(concept?.id)) {
      errors.push(`${fieldPath}.id: 空でないIDが必要です。`);
    } else if (conceptIds.has(concept.id)) {
      errors.push(`${fieldPath}.id: ID「${concept.id}」が重複しています。`);
    }
    if (isNonEmptyText(concept?.id)) conceptIds.add(concept.id);
  }

  const scaleIds = new Set();
  for (const [index, scale] of atlas.scales.entries()) {
    const fieldPath = `scales[${index}]`;
    if (!isNonEmptyText(scale?.id)) {
      errors.push(`${fieldPath}.id: 空でないIDが必要です。`);
    } else if (scaleIds.has(scale.id)) {
      errors.push(`${fieldPath}.id: ID「${scale.id}」が重複しています。`);
    }
    if (isNonEmptyText(scale?.id)) scaleIds.add(scale.id);
  }

  for (const [index, scale] of atlas.scales.entries()) {
    const fieldPath = `scales[${index}]`;
    if (!conceptIds.has(scale.conceptId)) errors.push(`${fieldPath}.conceptId: 概念ID「${scale.conceptId}」が存在しません。`);
    if (scale.parentScaleId && !scaleIds.has(scale.parentScaleId)) errors.push(`${fieldPath}.parentScaleId: 親尺度ID「${scale.parentScaleId}」が存在しません。`);
    if (scale.parentScaleId === scale.id) errors.push(`${fieldPath}.parentScaleId: 自分自身を親尺度には指定できません。`);
    if (!isPositiveInteger(scale.itemCount)) errors.push(`${fieldPath}.itemCount: 正の整数が必要です。`);
    if (!JAPANESE_STATUSES.has(scale.japaneseVersionStatus)) errors.push(`${fieldPath}.japaneseVersionStatus: 許容されない値「${scale.japaneseVersionStatus}」です。`);
    if (scale.usageStudies !== undefined && !Array.isArray(scale.usageStudies)) {
      errors.push(`${fieldPath}.usageStudies: 配列で指定してください。`);
      continue;
    }
    const titles = new Set();
    const dois = new Set();
    for (const [studyIndex, study] of (scale.usageStudies ?? []).entries()) {
      const studyPath = `${fieldPath}.usageStudies[${studyIndex}]`;
      for (const field of ["title", "context", "sample", "responseFormat", "language", "adaptation", "url"]) {
        if (!isNonEmptyText(study?.[field])) errors.push(`${studyPath}.${field}: 空でない値が必要です。`);
      }
      if (!isNonEmptyText(study?.doi) && !isNonEmptyText(study?.url)) errors.push(`${studyPath}: DOIまたはURLの少なくとも一方が必要です。`);
      if (!Number.isInteger(study?.year) || study.year < 1900) errors.push(`${studyPath}.year: 西暦の整数が必要です。`);
      if (!isPositiveInteger(study?.itemCount)) errors.push(`${studyPath}.itemCount: 正の整数が必要です。`);
      const normalizedTitle = typeof study?.title === "string" ? study.title.trim().toLowerCase() : "";
      const normalizedDoi = typeof study?.doi === "string" ? study.doi.trim().toLowerCase() : "";
      if (normalizedTitle && titles.has(normalizedTitle)) errors.push(`${studyPath}.title: 同一尺度内で研究タイトルが重複しています。`);
      if (normalizedDoi && dois.has(normalizedDoi)) errors.push(`${studyPath}.doi: 同一尺度内でDOIが重複しています。`);
      if (normalizedTitle) titles.add(normalizedTitle);
      if (normalizedDoi) dois.add(normalizedDoi);
    }
  }

  addUrlAndDoiErrors(atlas, "ATLAS_DATA", errors);
  const statusCounts = Object.fromEntries([...JAPANESE_STATUSES].map((status) => [JAPANESE_STATUS_LABELS[status], atlas.scales.filter((scale) => scale.japaneseVersionStatus === status).length]));
  return {
    errors,
    summary: {
      conceptCount: atlas.concepts.length,
      scaleCount: atlas.scales.length,
      usageStudyCount: atlas.scales.reduce((count, scale) => count + (scale.usageStudies?.length ?? 0), 0),
      registeredShortScaleCount: atlas.scales.filter((scale) => [3, 4].includes(scale.itemCount)).length,
      usageShortScaleCount: atlas.scales.filter((scale) => scale.usageStudies?.some((study) => [3, 4].includes(study.itemCount))).length,
      statusCounts,
    },
  };
}

function runSelfTest() {
  const duplicateErrors = findDuplicateObjectKeys("const ATLAS_DATA = { meta: {}, meta: {}, concepts: [], scales: [] };");
  if (duplicateErrors.length !== 1) throw new Error("自己テスト失敗: 重複キーを検出できません。");
  const nestedDuplicateErrors = findDuplicateObjectKeys(`
    const ATLAS_DATA = {
      scales: [
        { details: { id: "first", id: "duplicate" }, note: "id: 文字列内" },
        { details: { id: "別オブジェクトでは同名キーを許可" } },
      ],
      // id: コメント内
    };
  `);
  if (nestedDuplicateErrors.length !== 1 || !nestedDuplicateErrors[0].includes("id")) {
    throw new Error("自己テスト失敗: ネストした重複キーを正しく検出できません。");
  }
  const invalidAtlas = {
    concepts: [{ id: "duplicate" }, { id: "duplicate" }],
    scales: [{
      id: "duplicate-scale", conceptId: "missing-concept", parentScaleId: "missing-scale", itemCount: 0, japaneseVersionStatus: "invalid-status",
      usageStudies: [
        { title: "Duplicate study", authors: "Tester", year: 2026, context: "test", sample: "test", itemCount: 0, responseFormat: "test", language: "test", adaptation: "test", result: "test", doi: "bad-doi", url: "ftp://invalid.example" },
        { title: "Duplicate study", authors: "Tester", year: 2026, context: "test", sample: "test", itemCount: 1, responseFormat: "test", language: "test", adaptation: "test", result: "test", doi: "bad-doi", url: "https://example.com" },
      ],
    }],
  };
  const errors = validateAtlas(invalidAtlas).errors;
  for (const expected of ["重複", "存在しません", "正の整数", "許容されない", "DOI", "有効なURL"]) {
    if (!errors.some((error) => error.includes(expected))) throw new Error(`自己テスト失敗: 「${expected}」に関するエラーを検出できません。`);
  }
  console.log("自己テスト: ルート・ネストした重複キー、ID・参照・形式エラーを検出できました。");
}

function printSummary(summary) {
  console.log(`概念数: ${summary.conceptCount}`);
  console.log(`尺度数: ${summary.scaleCount}`);
  console.log(`個別の尺度使用研究数: ${summary.usageStudyCount}`);
  console.log(`登録版そのものが3・4項目: ${summary.registeredShortScaleCount}`);
  console.log(`個別使用研究で3・4項目版を確認済み: ${summary.usageShortScaleCount}`);
  console.log("日本語情報:");
  for (const [label, count] of Object.entries(summary.statusCounts)) console.log(`  ${label}: ${count}`);
}

const argument = process.argv[2];
if (argument !== undefined && argument !== "--self-test") {
  console.error("検証対象はこのリポジトリのdata.jsに固定されています。指定できる引数は --self-test だけです。");
  process.exitCode = 1;
} else if (argument === "--self-test") {
  runSelfTest();
  process.exit(0);
} else {
  try {
    const { atlas, duplicateErrors } = loadAtlas(path.resolve("data.js"));
    const { errors, summary } = validateAtlas(atlas, duplicateErrors);
    if (errors.length > 0) {
      console.error(`データ検証に失敗しました（${errors.length}件）。`);
      for (const error of errors) console.error(`- ${error}`);
      process.exitCode = 1;
    } else {
      console.log("データ検証に成功しました。");
      printSummary(summary);
    }
  } catch (error) {
    console.error(`データ検証に失敗しました: ${error.message}`);
    process.exitCode = 1;
  }
}
