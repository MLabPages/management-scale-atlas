const relationRows = AtlasRelations.rows(ATLAS_DATA);
const relationConcepts = new Map(ATLAS_DATA.concepts.map((c) => [c.id, c]));
const relationScales = new Map(ATLAS_DATA.scales.map((s) => [s.id, s]));
let relationLimit = 20;
const relationRank = { synthesis: 0, multiple: 1, single: 2, unreviewed: 3 };

function relationNames(row) {
  return row.conceptIds.map((id) => relationConcepts.get(id).nameJa);
}

function filteredRelations() {
  const focus = $("#relation-focus").value;
  const domain = $("#relation-domain").value;
  const kind = $("#relation-kind").value;
  const status = $("#relation-status").value;
  const query = $("#relation-query").value.trim().toLowerCase();
  return relationRows.filter((row) => {
    const text = [row.summary, row.caveat, ...row.conceptIds.flatMap((id) => {
      const c = relationConcepts.get(id);
      return [c.nameJa, c.nameEn];
    }), ...row.scaleIds.map((id) => relationScales.get(id).name)].join(" ").toLowerCase();
    return (!focus || row.conceptIds.includes(focus)) && (!domain || row.conceptIds.some((id) => relationConcepts.get(id).domain === domain)) && (!kind || row.kind === kind) && (!status || row.status === status) && (!query || text.includes(query));
  }).sort((a, b) => relationRank[a.status] - relationRank[b.status] || a.id.localeCompare(b.id));
}

function relationBadge(row) {
  return `<span class="relation-badge relation-${row.status}">${AtlasRelations.symbols[row.status]} ${esc(AtlasRelations.statuses[row.status])}</span>`;
}

function renderRelationMatrix(rows) {
  const focus = $("#relation-focus").value;
  const weights = new Map();
  rows.forEach((row) => row.conceptIds.forEach((id) => weights.set(id, (weights.get(id) || 0) + (row.status === "unreviewed" ? 1 : 100))));
  const ids = [...weights.keys()].sort((a, b) => (a === focus ? -1 : b === focus ? 1 : weights.get(b) - weights.get(a)));
  const selected = ids.slice(0, 10);
  const pairs = new Map();
  rows.forEach((row) => {
    const key = AtlasRelations.pairKey(row.conceptIds);
    if (!pairs.has(key)) pairs.set(key, row);
  });
  $("#relation-matrix-note").textContent = rows.length ? `現在の条件から${selected.length}概念を表示${ids.length > 10 ? `（対象${ids.length}概念の一部。概念を選ぶとその周辺を表示）` : ""}。記号を押すと出典を確認できます。同じ概念内の版比較は対角線に表示します。` : "条件に合う関係はありません。絞り込み条件を調整してください。";
  $("#relation-matrix").innerHTML = selected.length ? `<table class="relation-matrix"><caption class="visually-hidden">概念の組合せと登録済みの根拠の状況</caption><thead><tr><th scope="col">概念</th>${selected.map((id, i) => `<th scope="col" title="${esc(relationConcepts.get(id).nameJa)}">${i + 1}</th>`).join("")}</tr></thead><tbody>${selected.map((id, i) => `<tr><th scope="row">${i + 1}. ${esc(relationConcepts.get(id).nameJa)}</th>${selected.map((otherId) => {
    const row = pairs.get(AtlasRelations.pairKey([id, otherId]));
    if (!row) return `<td><span class="relation-empty" aria-label="関係未整理">—</span></td>`;
    const label = `${relationNames(row).join("・")}：${AtlasRelations.kinds[row.kind]}、${AtlasRelations.statuses[row.status]}`;
    return `<td><button type="button" class="relation-cell relation-${row.status}" data-relation="${esc(row.id)}" title="${esc(label)}" aria-label="${esc(label)}">${AtlasRelations.symbols[row.status]}</button></td>`;
  }).join("")}</tr>`).join("")}</tbody></table>` : "";
}

function renderRelations() {
  const rows = filteredRelations();
  const counts = Object.keys(AtlasRelations.statuses).map((status) => `<div><strong>${rows.filter((r) => r.status === status).length}</strong><span>${esc(AtlasRelations.statuses[status])}</span></div>`);
  $("#relation-summary").innerHTML = counts.join("");
  renderRelationMatrix(rows);
  $("#relation-result-count").textContent = `${rows.length}関係・調査候補中、${Math.min(rows.length, relationLimit)}件を表示。登録論文数は同じDOI・URLを重複除去。独立追試数ではありません。`;
  $("#relation-list").innerHTML = rows.slice(0, relationLimit).map((row) => `<article class="relation-card"><div>${relationBadge(row)}<span class="badge">${esc(AtlasRelations.kinds[row.kind])}</span><span class="badge">${row.level === "scale" ? "特定の尺度版" : "概念の関係・版の対応は限定"}</span></div><h4>${esc(relationNames(row).join(" × "))}</h4><p>${esc(row.summary)}</p><div class="relation-card-foot"><small>${row.paperCount ? `登録根拠 ${row.paperCount}論文` : "検索範囲・検証結果をこれから確認"}</small><button type="button" class="text-button" data-relation="${esc(row.id)}">根拠・調査候補を見る</button></div></article>`).join("") || `<p class="empty-state">条件に合う関係がありません。</p>`;
  $("#relation-more").hidden = rows.length <= relationLimit;
  $$('[data-relation]').forEach((button) => (button.onclick = () => openRelation(button.dataset.relation)));
}

function openRelation(id) {
  const row = relationRows.find((r) => r.id === id);
  const query = AtlasRelations.searchQuery(ATLAS_DATA, row);
  const sourceHtml = row.sources.map((source) => {
    const scale = relationScales.get(source.scaleId);
    const origin = source.url === (scale.doi ? `https://doi.org/${scale.doi}` : "") ? scale.sourceTitle : "";
    return `<article class="relation-source"><h4>${esc(source.title || origin || source.label)}</h4><p class="sub">${esc(source.authors || "")}${source.year ? `・${source.year}年` : ""}</p>${source.sample ? `<p><strong>標本：</strong>${esc(source.sample)}</p>` : ""}${source.context ? `<p><strong>文脈：</strong>${esc(source.context)}</p>` : ""}${source.adaptation ? `<p><strong>使用版：</strong>${esc(source.adaptation)}</p>` : ""}${source.methods ? `<p><strong>検証方法：</strong>${esc(source.methods)}</p>` : ""}<p><strong>登録済みの結果：</strong>${esc(source.result || source.summary)}</p><p class="sub">記録元：${esc(scale.name)}。${source.verifiedAt ? `本文確認：${esc(source.verifiedAt)}。${esc(source.sourceLocator || "")}` : "原文の新たな再確認は未実施。"}</p><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">根拠文献を開く</a></article>`;
  }).join("");
  $("#detail-body").innerHTML = `<p class="sub">関係の根拠と追加調査</p><h2 class="detail-title">${esc(relationNames(row).join(" × "))}</h2><p>${relationBadge(row)} <span class="badge">${esc(AtlasRelations.kinds[row.kind])}</span></p><p>${esc(row.summary)}</p><div class="sample-notice"><strong>確認範囲と限界：</strong>${esc(row.caveat)}</div><div class="detail-section"><h3>尺度版の対応</h3><p>${row.level === "scale" ? "次の特定の尺度版に限定した根拠です。" : "概念の関係の記録です。両側の特定尺度版の検証とは限りません。"}</p>${row.scaleIds.map((scaleId) => `<p><button type="button" class="text-button" data-relation-scale="${esc(scaleId)}">${esc(relationScales.get(scaleId).name)}</button></p>`).join("") || "<p>対応する尺度版はまだ確認していません。</p>"}</div><div class="detail-section"><h3>出典と登録済みの結果</h3>${sourceHtml || "<p>関係の根拠論文は未整理です。網羅検索は未実施です。</p>"}</div><div class="detail-section"><h3>次に調べること</h3><p>同一の尺度版を使った独立追試、対象集団・文化、測定不変性、効果量と信頼区間、反対の結果を確認します。関係の実証と弁別妥当性の検証は別に記録します。</p><a href="https://scholar.google.com/scholar?q=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">この組合せをGoogle Scholarで調べる</a><p class="sub">検索語：${esc(query)}。これは検索へのリンクで、検索済みの結果ではありません。</p></div>`;
  $$('[data-relation-scale]').forEach((button) => (button.onclick = () => openScale(button.dataset.relationScale)));
  if (!$("#detail-dialog").open) $("#detail-dialog").showModal();
}

function relationExportRecords() {
  return filteredRelations().map((row) => ({
    id: row.id, concept_ids: row.conceptIds.join("; "), concepts: relationNames(row).join("; "), kind: AtlasRelations.kinds[row.kind], evidence_status: AtlasRelations.statuses[row.status], scope: row.level,
    scale_ids: row.scaleIds.join("; "), registered_paper_count: row.paperCount, summary: row.summary, limitations: row.caveat,
    source_urls: [...new Set(row.sources.map((e) => e.url))].join("; "), source_pointers: JSON.stringify((ATLAS_DATA.relations || []).find((r) => r.id === row.id)?.sources || []),
    source_verifications: JSON.stringify(row.sources.map((e) => ({ url: e.url, verified_at: e.verifiedAt || "", locator: e.sourceLocator || "" }))),
    search_query: AtlasRelations.searchQuery(ATLAS_DATA, row), search_status: "systematic-search-not-performed", search_databases: "", search_period: "", searched_at: "", assembled_at: row.assembledAt || "",
  }));
}

function initRelations() {
  ATLAS_DATA.concepts.forEach((c) => $("#relation-focus").insertAdjacentHTML("beforeend", `<option value="${esc(c.id)}">${esc(c.nameJa)}</option>`));
  [...new Set(ATLAS_DATA.concepts.map((c) => c.domain))].forEach((domain) => $("#relation-domain").insertAdjacentHTML("beforeend", `<option>${esc(domain)}</option>`));
  ["relation-focus", "relation-domain", "relation-kind", "relation-status", "relation-query"].forEach((id) => $("#" + id).addEventListener(id === "relation-query" ? "input" : "change", () => { relationLimit = 20; renderRelations(); }));
  $("#relation-reset").onclick = () => { $$(".relation-controls select, .relation-controls input").forEach((el) => (el.value = "")); relationLimit = 20; renderRelations(); };
  $("#relation-more").onclick = () => { relationLimit += 20; renderRelations(); };
  $("#relation-export-json").onclick = () => downloadFile("atlas-relations.json", JSON.stringify({ atlas_version: ATLAS_DATA.meta.version, interpretation: "登録根拠と調査候補。未検証・因果性・網羅性の認定ではない。", records: relationExportRecords() }, null, 2), "application/json;charset=utf-8");
  $("#relation-export-csv").onclick = () => {
    const records = relationExportRecords();
    const columns = Object.keys(records[0] || { id: "", concepts: "", evidence_status: "" });
    const quote = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
    downloadFile("atlas-relations.csv", "\uFEFF" + [columns.map(quote).join(","), ...records.map((r) => columns.map((c) => quote(r[c])).join(","))].join("\r\n"), "text/csv;charset=utf-8");
  };
  renderRelations();
}

initRelations();
