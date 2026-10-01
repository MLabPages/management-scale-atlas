// 書誌候補を集める。検索結果を尺度使用・検証の根拠として自動登録しない。
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import * as http from "node:http";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const model = require("./relation-model.js");
const args = process.argv.slice(2);
const flags = new Set(["--search", "--output", "--limit", "--since", "--id"]);
let search = false, output = "/tmp/scale-atlas-collection.json", limit = 5, since = "", selectedId = "";
for (let i = 0; i < args.length; i++) {
  if (!flags.has(args[i])) throw new Error(`不明な引数: ${args[i]}`);
  if (args[i] === "--search") { search = true; continue; }
  const key = args[i], value = args[++i];
  if (!value || value.startsWith("--")) throw new Error(`${key}の値が必要です。`);
  if (key === "--output") output = value;
  if (key === "--limit") limit = Number(value);
  if (key === "--since") since = value;
  if (key === "--id") selectedId = value;
}
if (!Number.isInteger(limit) || limit < 1 || limit > 50) throw new Error("limitは1〜50です。");
if (since && (!/^\d{4}-\d{2}-\d{2}$/.test(since) || new Date(`${since}T00:00:00Z`).toISOString().slice(0, 10) !== since)) throw new Error("sinceは実在するYYYY-MM-DD日付です。");
const context = {};
vm.runInNewContext(fs.readFileSync(path.join(root, "data.js"), "utf8") + ";this.data=ATLAS_DATA", context, { timeout: 1000 });
const atlas = context.data;
const targets = JSON.parse(fs.readFileSync(path.join(root, "collection-targets.json"), "utf8"));
const queue = [
  ...targets.targets.map((t) => ({ ...t, id: `target:${t.id}`, type: "coverage-target", searchStatus: "not-searched" })),
  ...atlas.scales.filter((s) => (s.usageStudies || []).length < 2 || s.japaneseVersionStatus === "unconfirmed").map((s) => ({
    id: `scale:${s.id}`, type: "scale-evidence", label: s.name, priority: (s.usageStudies || []).length < 2 ? "A" : "B",
    query: `"${s.name}" ${s.authors.join(" ")} validation`, japaneseQuery: `"${s.name}" 日本語 妥当性`,
    reason: `登録使用研究${(s.usageStudies || []).length}件／日本語区分:${s.japaneseVersionStatus}`, searchStatus: "not-searched",
  })),
  ...model.rows(atlas).map((r) => ({ id: r.id, type: "relation", label: r.conceptIds.map((id) => atlas.concepts.find((c) => c.id === id).nameJa).join(" × "), priority: r.status === "unreviewed" ? "B" : "A", query: model.searchQuery(atlas, r), reason: r.caveat, searchStatus: "not-searched" })),
];
const selected = selectedId ? queue.filter((q) => q.id === selectedId) : queue;
if (!selected.length) throw new Error("指定した調査IDがありません。");
const destination = path.resolve(output);
if (destination.startsWith(root + path.sep) && !destination.startsWith(path.join(root, "collection") + path.sep)) throw new Error("プロジェクト内の出力先はcollection/配下に限定します。");
const previous = fs.existsSync(destination) ? JSON.parse(fs.readFileSync(destination, "utf8")) : null;
if (previous && (!Array.isArray(previous.candidates) || !Array.isArray(previous.runs) || !Array.isArray(previous.queue))) throw new Error("出力先は既存の収集スナップショットではありません。");
const runs = [...(previous?.runs || [])], candidates = new Map((previous?.candidates || []).map((c) => [c.doi.toLowerCase(), c]));
let failed = false;
const proxyConfigured = Boolean(process.env.HTTP_PROXY || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.https_proxy);
if (search && proxyConfigured && typeof http.setGlobalProxyFromEnv === "function") http.setGlobalProxyFromEnv();
if (search) {
  for (const target of selected.slice(0, limit)) {
    const params = new URLSearchParams({ "query.bibliographic": target.query, rows: "20" });
    if (since) params.set("filter", `from-index-date:${since}`);
    const requestedAt = new Date().toISOString();
    const apiUrl = `https://api.crossref.org/works?${params}`;
    try {
      if (proxyConfigured && typeof http.setGlobalProxyFromEnv !== "function") throw new Error("環境のプロキシを使用するためNode 24.5以降が必要です。");
      const response = await fetch(apiUrl, { signal: AbortSignal.timeout(12000), headers: { "User-Agent": "ManagementScaleAtlas/0.82 (bibliographic candidate collection)" } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const body = await response.json();
      if (!Array.isArray(body.message?.items)) throw new Error("Crossrefの応答形式が不正です。");
      for (const item of body.message.items) {
        if (!item.DOI) continue;
        const key = item.DOI.toLowerCase();
        const previous = candidates.get(key);
        candidates.set(key, { doi: item.DOI, title: item.title?.[0] || "", authors: (item.author || []).map((a) => [a.given, a.family].filter(Boolean).join(" ")), year: item.published?.["date-parts"]?.[0]?.[0] || null, url: item.URL || `https://doi.org/${item.DOI}`, targetIds: [...new Set([...(previous?.targetIds || []), target.id])], verification: "bibliographic-candidate-only" });
      }
      runs.push({ targetId: target.id, database: "Crossref", query: target.query, sinceIndexDate: since || null, apiUrl, requestedAt, status: "completed-bibliographic-search", retrieved: body.message.items.length, limitation: "最大20件の関連度検索。全文・引用文献・日本語データベースを含む網羅検索ではない。0件でも未検証と判定しない。" });
      target.searchStatus = "completed-bibliographic-search";
    } catch (error) {
      failed = true;
      target.searchStatus = "blocked-or-failed";
      runs.push({ targetId: target.id, database: "Crossref", query: target.query, sinceIndexDate: since || null, apiUrl, requestedAt, status: "blocked-or-failed", error: error.message, limitation: "検索未完了。研究不存在・未検証とは判定しない。" });
    }
  }
}
const snapshot = { generatedAt: new Date().toISOString(), atlasVersion: atlas.meta.version, coverageDefinition: targets.interpretation, mode: search ? "bibliographic-search" : "offline-queue", queue: selected, runs, candidates: [...candidates.values()], reviewPolicy: "候補の方法・表・付録を確認し、原版・短縮版・翻訳版、対象集団、分析水準、効果量、独立性を整理した後に手動で登録。data.jsを自動変更しない。" };
fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.writeFileSync(destination + ".tmp", JSON.stringify(snapshot, null, 2) + "\n");
fs.renameSync(destination + ".tmp", destination);
console.log(`収集キュー${selected.length}件、検索実行${runs.length}件、書誌候補${candidates.size}件。出力: ${destination}`);
if (failed) process.exitCode = 1;
