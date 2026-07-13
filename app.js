const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const concepts = new Map(ATLAS_DATA.concepts.map((c) => [c.id, c]));
const labels = {
  validated: "検証済み日本語版",
  "linguistic-validated": "言語的妥当性を確認済み",
  "usage-example": "日本語での使用・翻訳例あり",
  "translation-study": "日本語版の検討あり",
  "related-version": "関連版の日本語版あり",
  "original-japanese": "日本語で開発された尺度",
  unconfirmed: "日本語版・使用例を未確認",
  open: "掲載・利用可", research: "研究利用可", unknown: "利用条件未確認",
  permission: "申請が必要", "research-use": "研究利用可",
  "permission-required": "申請が必要", original: "原版", short: "短縮版", translated: "翻訳版",
};
const recordStatusLabels = {
  "verified-metadata": "書誌・基本情報確認済み",
};
const evidenceKinds = {
  "psychometric-validation": "信頼性・妥当性の検証",
  "linguistic-validation": "言語的妥当性の確認",
  "usage-example": "日本語での使用例",
  "translation-study": "日本語版の検討",
  "related-version": "関連版の根拠",
  "original-japanese": "日本語での開発・検証",
  "context-reference": "関連する日本語文献",
};
const verifiedJapaneseStatuses = new Set(["validated", "linguistic-validated", "original-japanese"]);
const MAX_COMPARE = 8;
const DESIGN_STORAGE_KEY = "management-scale-atlas-design-v1";
const roleLabels = {
  unset: "未設定",
  predictor: "説明変数",
  mediator: "媒介変数",
  moderator: "調整変数",
  outcome: "目的変数",
  control: "統制変数",
  other: "その他",
};

function loadDesignState() {
  try {
    const saved = JSON.parse(localStorage.getItem(DESIGN_STORAGE_KEY) || "{}");
    const validIds = new Set(ATLAS_DATA.scales.map((s) => s.id));
    const scaleIds = Array.isArray(saved.scaleIds) ? saved.scaleIds.filter((id) => validIds.has(id)).slice(0, MAX_COMPARE) : [];
    return { scaleIds, roles: saved.roles || {}, notes: saved.notes || {}, studyChoices: saved.studyChoices || {} };
  } catch {
    return { scaleIds: [], roles: {}, notes: {}, studyChoices: {} };
  }
}

const savedDesign = loadDesignState();
const state = {
  compare: new Set(savedDesign.scaleIds),
  roles: savedDesign.roles,
  notes: savedDesign.notes,
  studyChoices: savedDesign.studyChoices,
};
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const scholarUrl = (s) => `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${s.name}" ${s.authors.join(" ")} ${s.year}`)}`;
const doiUrl = (s) => (s.doi ? `https://doi.org/${encodeURIComponent(s.doi.trim())}` : "");

function usageSummary(s) {
  const evidence = (s.usageEvidence || []).find((e) => e.kind === "systematic-review-count");
  return evidence ? `レビュー内 ${evidence.count}研究` : "利用研究数は未集計";
}

function observedItemCounts(s) {
  return [...new Set([...(s.applicationEvidence || []).flatMap((e) => e.itemCounts || []), ...(s.usageStudies || []).map((e) => e.itemCount).filter(Boolean)])].sort((a, b) => a - b);
}

function shortFormProfile(s) {
  const isThreeOrFour = (count) => count === 3 || count === 4;
  const usageCounts = [...new Set([
    ...(s.usageStudies || []).map((e) => e.itemCount),
    ...(s.applicationEvidence || []).filter((e) => e.evidenceType === "usage-study").flatMap((e) => e.itemCounts || []),
  ].filter(isThreeOrFour))].sort((a, b) => a - b);
  const evidenceCounts = [...new Set((s.applicationEvidence || []).flatMap((e) => e.itemCounts || []).filter(isThreeOrFour))].sort((a, b) => a - b);
  return { registered: isThreeOrFour(s.itemCount), usageCounts, evidenceCounts };
}

function shortFormLabel(s) {
  const profile = shortFormProfile(s);
  if (profile.registered && profile.usageCounts.length) return `登録尺度が${s.itemCount}項目・使用研究あり`;
  if (profile.registered) return `登録尺度が${s.itemCount}項目`;
  if (profile.usageCounts.length) return `使用研究で${profile.usageCounts.join("・")}項目版あり`;
  if (profile.evidenceCounts.length) return `関連版・比較で${profile.evidenceCounts.join("・")}項目の根拠あり`;
  return "";
}

function shortFormScore(s) {
  const profile = shortFormProfile(s);
  return (profile.registered ? 10000 : 0) + profile.usageCounts.length * 1000 + profile.evidenceCounts.length * 100 + (s.usageStudies || []).length;
}

function practiceSummary(s) {
  const counts = observedItemCounts(s);
  if ((s.usageEvidence || []).length) return `${usageSummary(s)}・実使用数の根拠あり`;
  if ((s.usageStudies || []).length) return `使用先行研究 ${s.usageStudies.length}件を登録${counts.length ? `（${counts.join("・")}項目）` : ""}`;
  if ((s.applicationEvidence || []).some((e) => ["systematic-review", "systematic-review-count", "comparative-validation"].includes(e.evidenceType))) return `複数研究・版の比較根拠あり${counts.length ? `（${counts.join("・")}項目）` : ""}`;
  if ((s.applicationEvidence || []).length) return `実研究での使用版あり${counts.length ? `（${counts.join("・")}項目）` : ""}`;
  if ((s.psychometricEvidence || []).length > 1 || s.japaneseVersionStatus === "validated") return "複数環境・日本語での検証根拠あり";
  if ((s.psychometricEvidence || []).length) return "開発・検証根拠あり／実使用版は未整理";
  return "実使用・反復検証情報を調査中";
}

function practiceScore(s) {
  const directCount = (s.usageEvidence || [])[0]?.count || 0;
  const reviewEvidence = (s.applicationEvidence || []).filter((e) => e.evidenceType?.includes("review") || e.evidenceType === "comparative-validation").length;
  return (directCount ? 100000 + directCount : 0) + reviewEvidence * 10000 + (s.usageStudies || []).length * 2000 + (s.applicationEvidence || []).length * 1000 + (s.psychometricEvidence || []).length * 100 + (s.japaneseVersionStatus === "validated" ? 10 : 0);
}

function sourceLinks(s) {
  return `<div class="source-links"><a href="${scholarUrl(s)}" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>${s.doi ? `<a href="${doiUrl(s)}" target="_blank" rel="noopener noreferrer">DOI ↗</a>` : "<span>DOI未登録</span>"}</div>`;
}

function japaneseEvidenceHtml(s) {
  const entries = s.japaneseEvidence || [];
  const status = labels[s.japaneseVersionStatus] || "未分類";
  const links = entries.length
    ? `<ul class="evidence-list">${entries.map((e) => `<li><span class="evidence-kind">${esc(evidenceKinds[e.kind] || "根拠文献")}</span><strong>${esc(e.label || e.title)}</strong><br><span class="sub">${esc([e.authors, e.year].filter(Boolean).join("（") + (e.authors && e.year ? "）" : ""))}</span>${e.url ? ` <a href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">文献を開く ↗</a>` : ""}</li>`).join("")}</ul>`
    : "<p class=\"sub\">この尺度そのものについて、今回の確認範囲では日本語版・使用例の根拠文献を登録していません。</p>";
  return `<div class="detail-section japanese-evidence"><h3>日本語での利用・翻訳の状況</h3><p><span class="badge">${esc(status)}</span></p><p>${esc(s.japaneseStatusNote || "根拠の確認中です。")}</p>${links}</div>`;
}

function usageEvidenceHtml(s) {
  const entries = s.usageEvidence || [];
  if (!entries.length) return `<div class="detail-section usage-evidence"><h3>尺度の利用実績</h3><p><span class="badge neutral">未集計</span></p><p>この尺度を実際に使用した研究数は、まだ系統的に集計していません。「未集計」は利用例がないという意味ではありません。</p></div>`;
  return `<div class="detail-section usage-evidence"><h3>尺度の利用実績</h3><div class="usage-count">${esc(entries[0].count)}<span>研究</span></div><p><strong>${esc(entries[0].label)}</strong></p><p>${esc(entries[0].scope)}</p><p class="sub">確認日：${esc(entries[0].checkedAt)}。原著論文の引用数ではなく、レビュー著者が尺度使用を確認した研究数です。レビューの対象期間・領域外は含みません。</p><ul class="evidence-list">${entries.map((e) => `<li><span class="evidence-kind">利用数の根拠</span><strong>${esc(e.title)}</strong><br><span class="sub">${esc(e.year)}年${e.denominator ? `・レビュー内母数 ${esc(e.denominator)}研究` : ""}</span> <a href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">根拠文献を開く ↗</a></li>`).join("")}</ul></div>`;
}

function psychometricEvidenceHtml(s) {
  const entries = s.psychometricEvidence || [];
  if (!entries.length) return `<div class="detail-section psychometric-evidence"><h3>信頼性・妥当性</h3><p class="sub">標本・信頼性・妥当性の詳細情報は未登録です。原典を確認してください。</p></div>`;
  return `<div class="detail-section psychometric-evidence"><h3>信頼性・妥当性</h3><ul class="evidence-list">${entries.map((e) => `<li><span class="evidence-kind">${esc(e.label)}</span><strong>${esc(e.result)}</strong><br><span class="sub">標本：${esc(e.sample)}<br>検討：${esc(e.methods)}</span>${e.url ? ` <a href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">根拠を開く ↗</a>` : ""}</li>`).join("")}</ul></div>`;
}

function applicationEvidenceHtml(s) {
  const entries = s.applicationEvidence || [];
  const counts = observedItemCounts(s);
  if (!entries.length) return `<div class="detail-section application-evidence"><h3>実際の研究での使われ方</h3><p><span class="badge neutral">調査中</span></p><p>原版以外の項目数、反復利用、複数研究での再検証はまだ整理できていません。これは利用例がないという意味ではありません。</p></div>`;
  return `<div class="detail-section application-evidence"><h3>実際の研究での使われ方</h3><p><strong>確認できた項目数：</strong>${esc(counts.join("・"))}項目</p><p class="sub">原版、公式短縮版、翻訳版、研究ごとの抜粋・改変版を含みます。項目数が同じでも内容が同一とは限りません。</p><ul class="evidence-list">${entries.map((e) => `<li><span class="evidence-kind">実使用・版の根拠</span><strong>${esc(e.label)}</strong><br>${esc(e.summary)}<br><span class="sub">${esc(e.title)}${e.year ? `（${esc(e.year)}）` : ""}</span>${e.url ? ` <a href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">根拠を開く ↗</a>` : ""}</li>`).join("")}</ul></div>`;
}

function usageStudiesHtml(s) {
  const entries = s.usageStudies || [];
  if (!entries.length) return `<div class="detail-section usage-studies"><h3>この尺度を使った先行研究</h3><p><span class="badge neutral">登録準備中</span></p><p class="sub">個別の使用研究はまだ登録していません。利用研究がないという意味ではありません。</p></div>`;
  return `<div class="detail-section usage-studies"><h3>この尺度を使った先行研究 <span class="badge">${entries.length}件</span></h3><p class="sub">尺度開発論文の引用ではなく、本文・表・付録などで使用方法を確認できた研究です。研究文脈により項目表現や回答件法が異なる場合があります。</p><div class="study-list">${entries.map((e) => `<article class="study-card"><div class="study-card-head"><span class="evidence-kind">${esc(e.context || "利用研究")}</span><span class="badge">${esc(e.itemCount)}項目</span></div><h4>${esc(e.title)}</h4><p class="sub">${esc([e.authors, e.year].filter(Boolean).join("（") + (e.authors && e.year ? "）" : ""))}</p><dl><div><dt>対象・標本</dt><dd>${esc(e.sample || "本文を確認")}</dd></div><div><dt>回答・言語</dt><dd>${esc([e.responseFormat, e.language].filter(Boolean).join("・") || "本文を確認")}</dd></div><div><dt>使い方</dt><dd>${esc(e.adaptation || "原典に基づき使用")}</dd></div>${e.result ? `<div><dt>報告された測定情報</dt><dd>${esc(e.result)}</dd></div>` : ""}</dl>${e.url ? `<a href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">先行研究を開く ↗</a>` : ""}</article>`).join("")}</div></div>`;
}

function scaleRelationshipHtml(s) {
  const parent = s.parentScaleId ? ATLAS_DATA.scales.find((x) => x.id === s.parentScaleId) : null;
  const children = ATLAS_DATA.scales.filter((x) => x.parentScaleId === s.id);
  if (!parent && !children.length) return "";
  return `<div class="detail-section"><h3>版・派生関係</h3>${parent ? `<p>基になった尺度：<button class="text-button" data-related-scale="${esc(parent.id)}">${esc(parent.name)}（${parent.itemCount}項目）</button></p>` : ""}${children.length ? `<p>派生版：${children.map((x) => `<button class="text-button" data-related-scale="${esc(x.id)}">${esc(x.name)}（${x.itemCount}項目）</button>`).join(" ")}</p>` : ""}</div>`;
}

function init() {
  [...new Set(ATLAS_DATA.concepts.map((c) => c.domain))].forEach((d) => $("#domain-filter").insertAdjacentHTML("beforeend", `<option>${esc(d)}</option>`));
  ["query", "domain-filter", "japanese-filter", "practice-filter", "short-form-filter", "permission-filter", "items-filter", "usage-sort"].forEach((id) => $("#" + id).addEventListener(id === "query" ? "input" : "change", renderScales));
  $("#clear-filters").onclick = () => { $("#query").value = ""; $$(".filters select").forEach((x) => (x.value = "")); renderScales(); };
  $("#export-csv").onclick = exportCsv;
  $("#export-json").onclick = exportJson;
  $$(".tab").forEach((b) => (b.onclick = () => showView(b.dataset.view)));
  $(".dialog-close").onclick = () => $("#detail-dialog").close();
  $("#detail-dialog").onclick = (e) => { if (e.target === $("#detail-dialog")) $("#detail-dialog").close(); };
  renderScales(); renderConcepts(); renderCompare();
}

function downloadFile(filename, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

function saveDesignState() {
  try {
    localStorage.setItem(DESIGN_STORAGE_KEY, JSON.stringify({
      scaleIds: [...state.compare],
      roles: state.roles,
      notes: state.notes,
      studyChoices: state.studyChoices,
      savedAt: new Date().toISOString(),
    }));
  } catch {
    // 保存容量やブラウザ設定で失敗しても、画面上の比較は継続する。
  }
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function exportRows() {
  return filtered().map((s) => {
    const c = concepts.get(s.conceptId);
    return {
      id: s.id,
      concept_ja: c.nameJa,
      concept_en: c.nameEn,
      domain: c.domain,
      scale_name: s.name,
      abbreviation: s.abbreviation,
      authors: s.authors.join("; "),
      year: s.year,
      item_count: s.itemCount,
      dimensions: s.dimensions.join("; "),
      response_format: s.responseFormat,
      observed_item_counts: observedItemCounts(s).join("; "),
      practice_summary: practiceSummary(s),
      application_evidence_count: (s.applicationEvidence || []).length,
      individual_usage_studies_count: (s.usageStudies || []).length,
      individual_usage_study_titles: (s.usageStudies || []).map((e) => e.title).join("; "),
      japanese_status: labels[s.japaneseVersionStatus] || s.japaneseVersionStatus,
      usage_study_count: (s.usageEvidence || [])[0]?.count ?? "",
      source_title: s.sourceTitle,
      journal: s.journal,
      doi: s.doi,
      google_scholar_url: scholarUrl(s),
      record_status: s.recordStatus,
      verified_at: s.verifiedAt || ATLAS_DATA.meta.updated,
    };
  });
}

function exportCsv() {
  const rows = exportRows();
  if (!rows.length) return alert("出力できる検索結果がありません。");
  const headers = Object.keys(rows[0]);
  const csv = [headers.map(csvCell).join(","), ...rows.map((row) => headers.map((key) => csvCell(row[key])).join(","))].join("\r\n");
  downloadFile(`management-scale-atlas-${new Date().toISOString().slice(0, 10)}.csv`, `\uFEFF${csv}`, "text/csv;charset=utf-8");
}

function exportJson() {
  const scales = filtered();
  if (!scales.length) return alert("出力できる検索結果がありません。");
  const conceptIds = new Set(scales.map((s) => s.conceptId));
  const data = {
    meta: { ...ATLAS_DATA.meta, exportedAt: new Date().toISOString(), exportScope: "current-filtered-results" },
    concepts: ATLAS_DATA.concepts.filter((c) => conceptIds.has(c.id)),
    scales,
  };
  downloadFile(`management-scale-atlas-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(data, null, 2), "application/json;charset=utf-8");
}

function showView(name) {
  $$(".tab").forEach((x) => x.classList.toggle("active", x.dataset.view === name));
  $$(".view").forEach((x) => x.classList.toggle("active", x.id === `view-${name}`));
}

function filtered() {
  const q = $("#query").value.trim().toLowerCase();
  const domain = $("#domain-filter").value;
  const jp = $("#japanese-filter").value;
  const practice = $("#practice-filter").value;
  const permission = $("#permission-filter").value;
  const shortForm = $("#short-form-filter").value;
  const max = Number($("#items-filter").value || Infinity);
  const scales = ATLAS_DATA.scales.filter((s) => {
    const c = concepts.get(s.conceptId);
    const evidenceText = [...(s.japaneseEvidence || []), ...(s.applicationEvidence || []), ...(s.usageStudies || [])].map((e) => [e.label, e.title, e.authors, e.summary, e.context, e.sample].join(" ")).join(" ");
    const hay = [s.name, s.abbreviation, ...s.authors, ...s.targetPopulation, c.nameJa, c.nameEn, s.japaneseStatusNote, evidenceText].join(" ").toLowerCase();
    const japaneseMatch = !jp || (jp === "available" ? s.japaneseVersionStatus !== "unconfirmed" : jp === "verified" ? verifiedJapaneseStatuses.has(s.japaneseVersionStatus) : s.japaneseVersionStatus === jp);
    const permissionMatch = !permission || (permission === "research" ? s.usagePermission === "research-use" : permission === "permission" ? s.usagePermission === "permission-required" : s.usagePermission === permission);
    const practiceMatch = !practice || (practice === "documented" ? (s.applicationEvidence || []).length || (s.usageEvidence || []).length || (s.usageStudies || []).length : practice === "usage-studies" ? (s.usageStudies || []).length : practice === "review" ? (s.usageEvidence || []).length || (s.applicationEvidence || []).some((e) => e.evidenceType?.includes("review") || e.evidenceType === "comparative-validation") : practice === "jp-validated" ? s.japaneseVersionStatus === "validated" : true);
    const shortProfile = shortFormProfile(s);
    const shortFormMatch = !shortForm || (shortForm === "registered" ? shortProfile.registered : shortForm === "usage" ? shortProfile.usageCounts.length : shortProfile.registered || shortProfile.usageCounts.length || shortProfile.evidenceCounts.length);
    return (!q || hay.includes(q)) && (!domain || c.domain === domain) && japaneseMatch && practiceMatch && permissionMatch && shortFormMatch && s.itemCount <= max;
  });
  if ($("#usage-sort").value === "usage") scales.sort((a, b) => ((b.usageEvidence || [])[0]?.count || -1) - ((a.usageEvidence || [])[0]?.count || -1));
  if ($("#usage-sort").value === "year-new") scales.sort((a, b) => b.year - a.year);
  if ($("#usage-sort").value === "year-old") scales.sort((a, b) => a.year - b.year);
  if ($("#usage-sort").value === "practice") scales.sort((a, b) => practiceScore(b) - practiceScore(a));
  if ($("#usage-sort").value === "short") scales.sort((a, b) => shortFormScore(b) - shortFormScore(a));
  return scales;
}

function scaleCard(s) {
  const c = concepts.get(s.conceptId);
  const selected = state.compare.has(s.id);
  const evidenceCount = (s.japaneseEvidence || []).length;
  const psychometricCount = (s.psychometricEvidence || []).length;
  const usageKnown = (s.usageEvidence || []).length > 0;
  const shortLabel = shortFormLabel(s);
  return `<article class="scale-card"><p class="sub">${esc(c.nameJa)} / ${esc(c.nameEn)}</p><h3>${esc(s.name)}</h3><p class="sub">${esc(s.abbreviation)} ・ ${s.year}年 ・ 書誌確認済み</p><div class="badges"><span class="badge">登録版 ${s.itemCount}項目</span><span class="badge">${esc(labels[s.versionType])}</span><span class="badge">${esc(labels[s.japaneseVersionStatus])}</span><span class="badge warn">${esc(labels[s.usagePermission])}</span>${shortLabel ? `<span class="badge short-form-badge">${esc(shortLabel)}</span>` : ""}${(s.usageStudies || []).length ? `<span class="badge study-badge">使用先行研究 ${s.usageStudies.length}件</span>` : ""}</div><p class="practice-summary">${esc(practiceSummary(s))}</p><p class="usage-summary ${usageKnown ? "known" : ""}">${esc(usageSummary(s))}${usageKnown ? "（対象レビュー内）" : ""}</p><p class="jp-summary">日本語情報：${esc(labels[s.japaneseVersionStatus])}${evidenceCount ? `（根拠${evidenceCount}件）` : ""}${psychometricCount ? ` ／ 測定情報${psychometricCount}件` : ""}</p>${sourceLinks(s)}<div class="card-actions"><button class="detail-button" data-scale="${s.id}">詳細を見る</button><button class="compare-button ${selected ? "selected" : ""}" data-compare="${s.id}">${selected ? "比較から外す" : "比較に追加"}</button></div></article>`;
}

function bindCards() {
  $$("[data-scale]").forEach((b) => (b.onclick = () => openScale(b.dataset.scale)));
  $$("[data-compare]").forEach((b) => (b.onclick = () => toggleCompare(b.dataset.compare)));
}

function renderScales() {
  const scales = filtered();
  $("#result-count").textContent = `${scales.length}件（全${ATLAS_DATA.scales.length}件）`;
  $("#scale-list").innerHTML = scales.map(scaleCard).join("") || '<div class="empty-state">条件に合う尺度がありません。</div>';
  bindCards();
}

function renderConcepts() {
  $("#concept-list").innerHTML = ATLAS_DATA.concepts.map((c) => `<article class="concept-card" data-concept="${c.id}"><span class="badge">${esc(c.domain)}</span><h3>${esc(c.nameJa)}</h3><p class="sub">${esc(c.nameEn)}</p><p>${esc(c.definitionJa)}</p><p>${ATLAS_DATA.scales.filter((s) => s.conceptId === c.id).length}尺度</p></article>`).join("");
  $$("[data-concept]").forEach((x) => (x.onclick = () => openConcept(x.dataset.concept)));
}

function openScale(id) {
  const s = ATLAS_DATA.scales.find((x) => x.id === id);
  const c = concepts.get(s.conceptId);
  $("#detail-body").innerHTML = `<p class="sub">尺度詳細・${esc(recordStatusLabels[s.recordStatus] || s.recordStatus)}</p><h2 class="detail-title">${esc(s.name)}</h2><p>${esc(c.nameJa)} / ${esc(c.nameEn)}</p><div class="sample-notice"><strong>確認範囲：</strong>原典、DOI、登録版の項目数、下位次元を確認しています。実使用版、日本語情報、利用研究数、心理測定情報は根拠の強さを区別します。<br><span class="sub">最終確認日：${esc(s.verifiedAt || ATLAS_DATA.meta.updated)}</span></div><div class="detail-section detail-grid"><div><strong>略称</strong>${esc(s.abbreviation)}</div><div><strong>開発年</strong>${s.year}</div><div><strong>登録版項目数</strong>${s.itemCount}</div><div><strong>回答形式</strong>${esc(s.responseFormat)}</div><div><strong>下位次元</strong>${esc(s.dimensions.join("、"))}</div><div><strong>対象者</strong>${esc(s.targetPopulation.join("、"))}</div><div><strong>日本語の状況</strong>${esc(labels[s.japaneseVersionStatus])}</div><div><strong>利用条件</strong>${esc(labels[s.usagePermission])}</div></div>${scaleRelationshipHtml(s)}${usageStudiesHtml(s)}${applicationEvidenceHtml(s)}${usageEvidenceHtml(s)}${psychometricEvidenceHtml(s)}${japaneseEvidenceHtml(s)}<div class="detail-section"><h3>原典・文献情報</h3><p><strong>${esc(s.sourceTitle || "原典タイトル未登録")}</strong><br><span class="sub">${esc(s.authors.join("、"))}（${s.year}）${s.journal ? `・${esc(s.journal)}` : ""}</span></p>${sourceLinks(s)}</div><div class="detail-section"><h3>尺度項目</h3><p>掲載していません。利用条件と原典を確認してください。</p>${s.notes ? `<p class="sub">${esc(s.notes)}</p>` : ""}</div>`;
  $("#detail-dialog").showModal();
  $$('[data-related-scale]').forEach((b) => (b.onclick = () => openScale(b.dataset.relatedScale)));
}

function openConcept(id) {
  const c = concepts.get(id);
  const related = c.relatedConcepts.map((x) => concepts.get(x)?.nameJa).filter(Boolean);
  $("#detail-body").innerHTML = `<p class="sub">概念詳細・書誌確認済み</p><h2 class="detail-title">${esc(c.nameJa)}</h2><p class="sub">${esc(c.nameEn)}</p><div class="detail-section"><h3>定義</h3><p>${esc(c.definitionJa)}</p></div><div class="detail-section"><h3>関連概念</h3><p>${esc(related.join("、") || "未登録")}</p></div><div class="detail-section"><h3>関連尺度</h3>${ATLAS_DATA.scales.filter((s) => s.conceptId === id).map((s) => `<p><button class="text-button" data-modal-scale="${s.id}">${esc(s.name)}（${s.itemCount}項目）</button></p>`).join("")}</div>`;
  $("#detail-dialog").showModal();
  $$("[data-modal-scale]").forEach((b) => (b.onclick = () => openScale(b.dataset.modalScale)));
}

function toggleCompare(id) {
  if (state.compare.has(id)) {
    state.compare.delete(id);
    delete state.roles[id];
    delete state.notes[id];
    delete state.studyChoices[id];
  } else if (state.compare.size < MAX_COMPARE) {
    state.compare.add(id);
    state.roles[id] ||= "unset";
    state.studyChoices[id] ||= "original";
  } else return alert(`比較できる尺度は最大${MAX_COMPARE}件です。`);
  saveDesignState();
  renderScales(); renderCompare();
}

function burdenGuide(scales) {
  const items = scales.reduce((sum, s) => sum + s.itemCount, 0);
  const conceptsCount = new Set(scales.map((s) => s.conceptId)).size;
  const minutesMin = Math.max(1, Math.ceil(items * 10 / 60));
  const minutesMax = Math.max(1, Math.ceil(items * 20 / 60));
  const burden = items <= 20
    ? { label: "比較的軽い", className: "light" }
    : items <= 40
      ? { label: "中程度", className: "medium" }
      : items <= 60
        ? { label: "やや大きい", className: "high" }
        : { label: "大きい", className: "high" };
  return { items, conceptsCount, minutesMin, minutesMax, ...burden };
}

function renderShortOptions(scales) {
  const selectedIds = new Set(scales.map((s) => s.id));
  const selectedConceptIds = new Set(scales.map((s) => s.conceptId));
  const alternatives = ATLAS_DATA.scales.filter((s) => selectedConceptIds.has(s.conceptId) && [3, 4].includes(s.itemCount) && !selectedIds.has(s.id));
  const evidenceHints = scales.map((s) => {
    const counts = observedItemCounts(s).filter((count) => [3, 4].includes(count) && count !== s.itemCount);
    return counts.length ? { scale: s, counts } : null;
  }).filter(Boolean);
  const panel = $("#short-option-panel");
  panel.hidden = !alternatives.length && !evidenceHints.length;
  if (panel.hidden) return;
  const alternativeHtml = alternatives.length
    ? `<div><strong>同じ概念に登録済みの3・4項目尺度</strong><div class="short-option-list">${alternatives.map((s) => `<button data-add-alternative="${s.id}">${esc(concepts.get(s.conceptId).nameJa)}：${esc(s.abbreviation)}（${s.itemCount}項目）を追加</button>`).join("")}</div></div>`
    : "";
  const evidenceHtml = evidenceHints.length
    ? `<div><strong>短い使用版の根拠がある尺度</strong><ul>${evidenceHints.map(({ scale, counts }) => `<li>${esc(scale.abbreviation)}：${counts.join("・")}項目版の根拠あり — ${esc(shortFormLabel(scale))}（尺度詳細で確認）</li>`).join("")}</ul></div>`
    : "";
  panel.innerHTML = `<h3>短縮候補</h3><p>同じ概念でも測定範囲や下位次元が異なるため、項目数だけで置き換えず詳細を確認してください。</p>${alternativeHtml}${evidenceHtml}`;
  $$('[data-add-alternative]').forEach((b) => (b.onclick = () => toggleCompare(b.dataset.addAlternative)));
}

function selectedBasis(s) {
  const savedChoice = state.studyChoices[s.id];
  const choice = typeof savedChoice === "string" ? savedChoice : "original";
  if (choice.startsWith("study-")) {
    const index = Number(choice.slice(6));
    const study = (s.usageStudies || [])[index];
    if (study) return { type: "usage-study", ...study };
  }
  return {
    type: "original",
    title: s.sourceTitle,
    authors: s.authors.join("; "),
    year: s.year,
    itemCount: s.itemCount,
    responseFormat: s.responseFormat,
    language: s.language,
    doi: s.doi,
    url: doiUrl(s),
  };
}

function basisDetailHtml(s) {
  const basis = selectedBasis(s);
  const sourceUrl = basis.url || (basis.doi ? `https://doi.org/${basis.doi}` : "");
  const scholar = `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${basis.title}" ${basis.authors || ""}`)}`;
  const meta = [basis.year ? `${basis.year}年` : "", basis.itemCount ? `${basis.itemCount}項目` : "", basis.responseFormat || "", basis.language || ""].filter(Boolean).join(" ・ ");
  const context = [basis.context, basis.sample].filter(Boolean).join(" ／ ");
  return `<div class="design-basis-detail">
    <div><span class="basis-kind">${basis.type === "usage-study" ? "実使用研究" : "原典"}</span><strong>${esc(basis.title)}</strong></div>
    <p class="basis-meta">${esc(meta)}</p>
    ${context ? `<p>${esc(context)}</p>` : ""}
    ${basis.adaptation ? `<p><b>調整：</b>${esc(basis.adaptation)}</p>` : ""}
    ${basis.result ? `<p><b>測定結果：</b>${esc(basis.result)}</p>` : ""}
    <div class="basis-links">${sourceUrl ? `<a href="${esc(sourceUrl)}" target="_blank" rel="noopener noreferrer">${basis.doi ? `DOI ${esc(basis.doi)}` : "論文を開く"}</a>` : ""}<a href="${esc(scholar)}" target="_blank" rel="noopener noreferrer">Google Scholar</a></div>
  </div>`;
}

function designExportRows(scales) {
  return scales.map((s) => {
    const basis = selectedBasis(s);
    return {
      role: roleLabels[state.roles[s.id] || "unset"],
      concept_ja: concepts.get(s.conceptId).nameJa,
      concept_en: concepts.get(s.conceptId).nameEn,
      scale_name: s.name,
      abbreviation: s.abbreviation,
      registered_item_count: s.itemCount,
      observed_item_counts: observedItemCounts(s).join("・"),
      registered_usage_studies: (s.usageStudies || []).length,
      usage_count_evidence: usageSummary(s),
      japanese_status: labels[s.japaneseVersionStatus],
      usage_permission: labels[s.usagePermission],
      note: state.notes[s.id] || "",
      selected_basis_type: basis.type,
      selected_basis_title: basis.title || "",
      selected_basis_authors: basis.authors || "",
      selected_basis_year: basis.year || "",
      selected_basis_item_count: basis.itemCount || "",
      selected_basis_response_format: basis.responseFormat || "",
      selected_basis_language: basis.language || "",
      selected_basis_doi: basis.doi || "",
      selected_basis_url: basis.url || "",
      doi: s.doi || "",
      google_scholar: scholarUrl(s),
    };
  });
}

function evidenceExportRows(scales) {
  return scales.flatMap((s) => {
    const selectedChoice = state.studyChoices[s.id] || "original";
    const common = { concept_ja: concepts.get(s.conceptId).nameJa, scale_name: s.name, abbreviation: s.abbreviation };
    const original = {
      ...common,
      selected: selectedChoice === "original" ? "yes" : "",
      evidence_type: "original",
      title: s.sourceTitle,
      authors: s.authors.join("; "),
      year: s.year,
      context: "尺度開発・原典",
      sample: "",
      item_count: s.itemCount,
      response_format: s.responseFormat,
      language: s.language,
      adaptation: "原典",
      result: "",
      doi: s.doi || "",
      url: doiUrl(s),
    };
    const studies = (s.usageStudies || []).map((study, index) => ({
      ...common,
      selected: selectedChoice === `study-${index}` ? "yes" : "",
      evidence_type: "usage-study",
      title: study.title || "",
      authors: study.authors || "",
      year: study.year || "",
      context: study.context || "",
      sample: study.sample || "",
      item_count: study.itemCount || "",
      response_format: study.responseFormat || "",
      language: study.language || "",
      adaptation: study.adaptation || "",
      result: study.result || "",
      doi: study.doi || "",
      url: study.url || "",
    }));
    return [original, ...studies];
  });
}

function exportEvidencePack(scales) {
  const rows = evidenceExportRows(scales);
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const csv = [headers, ...rows.map((row) => headers.map((key) => row[key]))]
    .map((row) => row.map(csvCell).join(","))
    .join("\r\n");
  downloadFile("research-design-evidence.csv", `\uFEFF${csv}`, "text/csv;charset=utf-8");
}

function exportResearchDesign(scales, format) {
  const rows = designExportRows(scales);
  const guide = burdenGuide(scales);
  if (format === "json") {
    downloadFile("research-design.json", JSON.stringify({
      exportedAt: new Date().toISOString(),
      summary: {
        scales: scales.length,
        concepts: guide.conceptsCount,
        totalItems: guide.items,
        estimatedMinutes: `${guide.minutesMin}-${guide.minutesMax}`,
      },
      scales: rows,
      evidenceStudies: evidenceExportRows(scales),
    }, null, 2), "application/json");
    return;
  }
  const headers = Object.keys(rows[0]);
  const csv = [headers, ...rows.map((row) => headers.map((key) => row[key]))]
    .map((row) => row.map(csvCell).join(","))
    .join("\r\n");
  downloadFile("research-design.csv", `\uFEFF${csv}`, "text/csv;charset=utf-8");
}

function renderDesignBuilder(scales) {
  const builder = $("#design-builder");
  builder.hidden = false;
  builder.innerHTML = `
    <div class="design-toolbar">
      <div><h3>研究モデルを組み立てる</h3><p>各尺度の役割と採用理由を整理できます。入力内容はこのブラウザ内だけに自動保存されます。</p></div>
      <div class="design-actions">
        <button type="button" data-export-design="csv">設計をCSV出力</button>
        <button type="button" data-export-design="json">設計をJSON出力</button>
        <button type="button" data-export-evidence>先行研究一覧CSV</button>
        <button type="button" class="subtle-button" data-clear-design>設計をクリア</button>
      </div>
    </div>
    <div class="design-card-list">${scales.map((s) => `
      <article class="design-card">
        <div class="design-card-head">
          <div><span>${esc(concepts.get(s.conceptId).nameJa)}</span><strong>${esc(s.abbreviation)}（${s.itemCount}項目）</strong></div>
          <button type="button" class="text-button" data-design-detail="${s.id}">尺度詳細</button>
        </div>
        <div class="design-fields">
          <label>研究モデル上の役割
            <select data-design-role="${s.id}">${Object.entries(roleLabels).map(([value, label]) => `<option value="${value}"${(state.roles[s.id] || "unset") === value ? " selected" : ""}>${label}</option>`).join("")}</select>
          </label>
          <label>採用理由・注意点
            <textarea data-design-note="${s.id}" rows="2" placeholder="例：回答負荷を抑えるため3項目版を候補にする">${esc(state.notes[s.id] || "")}</textarea>
          </label>
        </div>
        <label class="design-basis">採用根拠にする文献
          <select data-design-study="${s.id}">
            <option value="original"${(state.studyChoices[s.id] || "original") === "original" ? " selected" : ""}>原典：${esc(s.sourceTitle)}（${s.itemCount}項目）</option>
            ${(s.usageStudies || []).map((study, index) => `<option value="study-${index}"${state.studyChoices[s.id] === `study-${index}` ? " selected" : ""}>使用研究：${esc(study.title)}（${study.itemCount}項目・${study.year}年）</option>`).join("")}
          </select>
          <span>${(s.usageStudies || []).length ? "実際の使用文脈・項目数を確認したうえで、最も近い研究を選んでください。" : "個別の使用研究は登録準備中です。原典を基準にします。"}</span>
        </label>
        ${basisDetailHtml(s)}
        <p class="design-evidence">${shortFormLabel(s) ? `${esc(shortFormLabel(s))}／` : ""}使用先行研究 ${(s.usageStudies || []).length}件登録／確認できた使用項目数 ${esc(observedItemCounts(s).join("・") || "未整理")}／${esc(labels[s.japaneseVersionStatus])}</p>
      </article>`).join("")}</div>`;
  $$('[data-design-role]').forEach((select) => (select.onchange = () => {
    state.roles[select.dataset.designRole] = select.value;
    saveDesignState();
    renderCompareTable(scales);
  }));
  $$('[data-design-note]').forEach((textarea) => (textarea.oninput = () => {
    state.notes[textarea.dataset.designNote] = textarea.value;
    saveDesignState();
  }));
  $$('[data-design-study]').forEach((select) => (select.onchange = () => {
    state.studyChoices[select.dataset.designStudy] = select.value;
    saveDesignState();
    renderDesignBuilder(scales);
    renderCompareTable(scales);
  }));
  $$('[data-design-detail]').forEach((button) => (button.onclick = () => openScale(button.dataset.designDetail)));
  $$('[data-export-design]').forEach((button) => (button.onclick = () => exportResearchDesign(scales, button.dataset.exportDesign)));
  $('[data-export-evidence]').onclick = () => exportEvidencePack(scales);
  $('[data-clear-design]').onclick = () => {
    if (!confirm("選択した尺度、役割、メモをすべて消しますか？")) return;
    state.compare.clear();
    state.roles = {};
    state.notes = {};
    state.studyChoices = {};
    saveDesignState();
    renderScales();
    renderCompare();
  };
}

function renderCompareTable(scales) {
  const rows = [["研究モデル上の役割", (s) => roleLabels[state.roles[s.id] || "unset"]], ["採用根拠にする文献", (s) => `${selectedBasis(s).title}（${selectedBasis(s).itemCount}項目）`], ["概念", (s) => concepts.get(s.conceptId).nameJa], ["実使用・検証", (s) => practiceSummary(s)], ["個別の使用先行研究", (s) => `${(s.usageStudies || []).length}件登録`], ["利用研究数", (s) => usageSummary(s)], ["登録版項目数", (s) => s.itemCount], ["確認できた使用項目数", (s) => observedItemCounts(s).join("・") || "未整理"], ["下位次元", (s) => s.dimensions.join("、")], ["回答件法", (s) => s.responseFormat], ["対象者", (s) => s.targetPopulation.join("、")], ["心理測定情報", (s) => (s.psychometricEvidence || []).length ? "根拠登録あり" : "詳細未登録"], ["日本語の状況", (s) => labels[s.japaneseVersionStatus]], ["利用条件", (s) => labels[s.usagePermission]], ["版", (s) => labels[s.versionType]], ["最終確認日", (s) => s.verifiedAt || ATLAS_DATA.meta.updated]];
  $("#compare-table").innerHTML = `<thead><tr><th>比較項目</th>${scales.map((s) => `<th>${esc(s.name)}<br><button class="text-button" data-remove="${s.id}">外す</button></th>`).join("")}</tr></thead><tbody>${rows.map(([label, value]) => `<tr><th>${label}</th>${scales.map((s) => `<td>${esc(value(s))}</td>`).join("")}</tr>`).join("")}</tbody>`;
  $$('[data-remove]').forEach((b) => (b.onclick = () => toggleCompare(b.dataset.remove)));
}

function renderCompare() {
  const scales = [...state.compare].map((id) => ATLAS_DATA.scales.find((s) => s.id === id));
  $("#compare-count").textContent = scales.length;
  $("#compare-empty").hidden = !!scales.length;
  $("#compare-table-wrap").hidden = !scales.length;
  $("#compare-summary").hidden = !scales.length;
  if (!scales.length) {
    $("#short-option-panel").hidden = true;
    $("#design-builder").hidden = true;
    return;
  }
  const guide = burdenGuide(scales);
  $("#compare-summary").innerHTML = `<div class="burden-metric"><span>選択尺度</span><strong>${scales.length}</strong></div><div class="burden-metric"><span>概念数</span><strong>${guide.conceptsCount}</strong></div><div class="burden-metric"><span>合計項目数</span><strong>${guide.items}</strong></div><div class="burden-metric"><span>概算回答時間</span><strong>${guide.minutesMin}～${guide.minutesMax}分</strong></div><div class="burden-level ${guide.className}"><span>項目数からみた負荷</span><strong>${guide.label}</strong></div><p>回答時間は1項目10～20秒とした単純目安です。教示、属性項目、自由記述、画面操作、対象者や設問の難しさは含みません。</p>`;
  renderShortOptions(scales);
  renderDesignBuilder(scales);
  renderCompareTable(scales);
}

init();
