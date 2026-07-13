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
  "permission-required": "申請が必要", original: "原版", short: "短縮版",
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
const state = { compare: new Set() };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const scholarUrl = (s) => `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${s.name}" ${s.authors.join(" ")} ${s.year}`)}`;
const doiUrl = (s) => (s.doi ? `https://doi.org/${encodeURIComponent(s.doi.trim())}` : "");

function usageSummary(s) {
  const evidence = (s.usageEvidence || []).find((e) => e.kind === "systematic-review-count");
  return evidence ? `レビュー内 ${evidence.count}研究` : "利用研究数は未集計";
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

function init() {
  [...new Set(ATLAS_DATA.concepts.map((c) => c.domain))].forEach((d) => $("#domain-filter").insertAdjacentHTML("beforeend", `<option>${esc(d)}</option>`));
  ["query", "domain-filter", "japanese-filter", "permission-filter", "items-filter", "usage-sort"].forEach((id) => $("#" + id).addEventListener(id === "query" ? "input" : "change", renderScales));
  $("#clear-filters").onclick = () => { $("#query").value = ""; $$(".filters select").forEach((x) => (x.value = "")); renderScales(); };
  $$(".tab").forEach((b) => (b.onclick = () => showView(b.dataset.view)));
  $(".dialog-close").onclick = () => $("#detail-dialog").close();
  $("#detail-dialog").onclick = (e) => { if (e.target === $("#detail-dialog")) $("#detail-dialog").close(); };
  renderScales(); renderConcepts(); renderCompare();
}

function showView(name) {
  $$(".tab").forEach((x) => x.classList.toggle("active", x.dataset.view === name));
  $$(".view").forEach((x) => x.classList.toggle("active", x.id === `view-${name}`));
}

function filtered() {
  const q = $("#query").value.trim().toLowerCase();
  const domain = $("#domain-filter").value;
  const jp = $("#japanese-filter").value;
  const permission = $("#permission-filter").value;
  const max = Number($("#items-filter").value || Infinity);
  const scales = ATLAS_DATA.scales.filter((s) => {
    const c = concepts.get(s.conceptId);
    const evidenceText = (s.japaneseEvidence || []).map((e) => [e.label, e.title, e.authors].join(" ")).join(" ");
    const hay = [s.name, s.abbreviation, ...s.authors, ...s.targetPopulation, c.nameJa, c.nameEn, s.japaneseStatusNote, evidenceText].join(" ").toLowerCase();
    const japaneseMatch = !jp || (jp === "available" ? s.japaneseVersionStatus !== "unconfirmed" : jp === "verified" ? verifiedJapaneseStatuses.has(s.japaneseVersionStatus) : s.japaneseVersionStatus === jp);
    const permissionMatch = !permission || (permission === "research" ? s.usagePermission === "research-use" : permission === "permission" ? s.usagePermission === "permission-required" : s.usagePermission === permission);
    return (!q || hay.includes(q)) && (!domain || c.domain === domain) && japaneseMatch && permissionMatch && s.itemCount <= max;
  });
  if ($("#usage-sort").value === "usage") scales.sort((a, b) => ((b.usageEvidence || [])[0]?.count || -1) - ((a.usageEvidence || [])[0]?.count || -1));
  if ($("#usage-sort").value === "year-new") scales.sort((a, b) => b.year - a.year);
  if ($("#usage-sort").value === "year-old") scales.sort((a, b) => a.year - b.year);
  return scales;
}

function scaleCard(s) {
  const c = concepts.get(s.conceptId);
  const selected = state.compare.has(s.id);
  const evidenceCount = (s.japaneseEvidence || []).length;
  const usageKnown = (s.usageEvidence || []).length > 0;
  return `<article class="scale-card"><p class="sub">${esc(c.nameJa)} / ${esc(c.nameEn)}</p><h3>${esc(s.name)}</h3><p class="sub">${esc(s.abbreviation)} ・ ${s.year}年 ・ 書誌確認済み</p><div class="badges"><span class="badge">${s.itemCount}項目</span><span class="badge">${esc(labels[s.versionType])}</span><span class="badge">${esc(labels[s.japaneseVersionStatus])}</span><span class="badge warn">${esc(labels[s.usagePermission])}</span></div><p class="usage-summary ${usageKnown ? "known" : ""}">${esc(usageSummary(s))}${usageKnown ? "（対象レビュー内）" : ""}</p><p class="jp-summary">日本語情報：${esc(labels[s.japaneseVersionStatus])}${evidenceCount ? `（根拠${evidenceCount}件）` : ""}</p>${sourceLinks(s)}<div class="card-actions"><button class="detail-button" data-scale="${s.id}">詳細を見る</button><button class="compare-button ${selected ? "selected" : ""}" data-compare="${s.id}">${selected ? "比較から外す" : "比較に追加"}</button></div></article>`;
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
  $("#detail-body").innerHTML = `<p class="sub">尺度詳細・書誌確認済み</p><h2 class="detail-title">${esc(s.name)}</h2><p>${esc(c.nameJa)} / ${esc(c.nameEn)}</p><div class="sample-notice"><strong>確認範囲：</strong>原典、DOI、項目数、下位次元を確認しています。日本語情報と利用実績は、根拠の強さと確認範囲を区別して表示します。</div><div class="detail-section detail-grid"><div><strong>略称</strong>${esc(s.abbreviation)}</div><div><strong>開発年</strong>${s.year}</div><div><strong>項目数</strong>${s.itemCount}</div><div><strong>回答形式</strong>${esc(s.responseFormat)}</div><div><strong>下位次元</strong>${esc(s.dimensions.join("、"))}</div><div><strong>対象者</strong>${esc(s.targetPopulation.join("、"))}</div><div><strong>日本語の状況</strong>${esc(labels[s.japaneseVersionStatus])}</div><div><strong>利用条件</strong>${esc(labels[s.usagePermission])}</div></div>${usageEvidenceHtml(s)}${japaneseEvidenceHtml(s)}<div class="detail-section"><h3>原典・文献情報</h3><p><strong>${esc(s.sourceTitle || "原典タイトル未登録")}</strong><br><span class="sub">${esc(s.authors.join("、"))}（${s.year}）${s.journal ? `・${esc(s.journal)}` : ""}</span></p>${sourceLinks(s)}</div><div class="detail-section"><h3>尺度項目</h3><p>掲載していません。利用条件と原典を確認してください。</p>${s.notes ? `<p class="sub">${esc(s.notes)}</p>` : ""}</div>`;
  $("#detail-dialog").showModal();
}

function openConcept(id) {
  const c = concepts.get(id);
  const related = c.relatedConcepts.map((x) => concepts.get(x)?.nameJa).filter(Boolean);
  $("#detail-body").innerHTML = `<p class="sub">概念詳細・書誌確認済み</p><h2 class="detail-title">${esc(c.nameJa)}</h2><p class="sub">${esc(c.nameEn)}</p><div class="detail-section"><h3>定義</h3><p>${esc(c.definitionJa)}</p></div><div class="detail-section"><h3>関連概念</h3><p>${esc(related.join("、") || "未登録")}</p></div><div class="detail-section"><h3>関連尺度</h3>${ATLAS_DATA.scales.filter((s) => s.conceptId === id).map((s) => `<p><button class="text-button" data-modal-scale="${s.id}">${esc(s.name)}（${s.itemCount}項目）</button></p>`).join("")}</div>`;
  $("#detail-dialog").showModal();
  $$("[data-modal-scale]").forEach((b) => (b.onclick = () => openScale(b.dataset.modalScale)));
}

function toggleCompare(id) {
  if (state.compare.has(id)) state.compare.delete(id);
  else if (state.compare.size < 4) state.compare.add(id);
  else return alert("比較できる尺度は最大4件です。");
  renderScales(); renderCompare();
}

function renderCompare() {
  const scales = [...state.compare].map((id) => ATLAS_DATA.scales.find((s) => s.id === id));
  $("#compare-count").textContent = scales.length;
  $("#compare-empty").hidden = !!scales.length;
  $("#compare-table-wrap").hidden = !scales.length;
  if (!scales.length) return;
  const rows = [["概念", (s) => concepts.get(s.conceptId).nameJa], ["利用研究数", (s) => usageSummary(s)], ["項目数", (s) => s.itemCount], ["下位次元", (s) => s.dimensions.join("、")], ["回答件法", (s) => s.responseFormat], ["対象者", (s) => s.targetPopulation.join("、")], ["日本語の状況", (s) => labels[s.japaneseVersionStatus]], ["利用条件", (s) => labels[s.usagePermission]], ["版", (s) => labels[s.versionType]]];
  $("#compare-table").innerHTML = `<thead><tr><th>比較項目</th>${scales.map((s) => `<th>${esc(s.name)}<br><button class="text-button" data-remove="${s.id}">外す</button></th>`).join("")}</tr></thead><tbody>${rows.map(([label, value]) => `<tr><th>${label}</th>${scales.map((s) => `<td>${esc(value(s))}</td>`).join("")}</tr>`).join("")}</tbody>`;
  $$("[data-remove]").forEach((b) => (b.onclick = () => toggleCompare(b.dataset.remove)));
}

init();
