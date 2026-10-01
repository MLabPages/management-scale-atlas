/* 関係の整理をブラウザと収集キューで共用する。登録件数は品質スコアではない。 */
(function (root) {
  const kinds = { association: "概念間の関連", discriminant: "弁別妥当性", convergent: "収束・版比較", comparison: "尺度比較", neighbor: "関連概念・調査待ち" };
  const statuses = { synthesis: "レビュー・メタ分析あり", multiple: "複数論文の根拠あり", single: "1論文の根拠あり", unreviewed: "文献調査待ち" };
  const symbols = { synthesis: "M", multiple: "R", single: "S", unreviewed: "?" };
  const pairKey = (ids) => [...ids].sort().join("|");
  const paperKey = (source) => {
    const urlDoi = source.url?.match(/^https?:\/\/(?:dx\.)?doi\.org\/(.+)$/i)?.[1];
    const doi = source.doi || (urlDoi ? decodeURIComponent(urlDoi) : "");
    return doi ? `doi:${doi.trim().toLowerCase()}` : source.url?.replace(/\/$/, "").toLowerCase();
  };
  function resolveSources(atlas, relation) {
    return (relation.sources || []).map((pointer) => {
      const scale = atlas.scales.find((s) => s.id === pointer.scaleId);
      const evidence = scale?.[pointer.collection]?.find((e) => e.url === pointer.sourceUrl && (!pointer.sourceLabel || (e.label || e.title) === pointer.sourceLabel));
      return evidence ? { ...evidence, scaleId: scale.id, collection: pointer.collection, sourceUrl: pointer.sourceUrl } : null;
    }).filter(Boolean);
  }
  function rows(atlas) {
    const known = (atlas.relations || []).map((relation) => {
      const sources = resolveSources(atlas, relation);
      const paperCount = new Set(sources.map(paperKey)).size;
      const synthesis = sources.some((e) => ["meta-analysis", "systematic-review"].includes(e.evidenceType));
      return { ...relation, sources, paperCount, status: synthesis ? "synthesis" : paperCount > 1 ? "multiple" : "single" };
    });
    const registeredPairs = new Set(known.map((r) => pairKey(r.conceptIds)));
    const conceptIds = new Set(atlas.concepts.map((c) => c.id));
    const candidates = new Map();
    for (const concept of atlas.concepts) {
      for (const otherId of concept.relatedConcepts || []) {
        if (otherId === concept.id || !conceptIds.has(otherId)) continue;
        const ids = [concept.id, otherId].sort();
        const key = pairKey(ids);
        if (registeredPairs.has(key) || candidates.has(key)) continue;
        candidates.set(key, {
          id: `neighbor:${key}`, conceptIds: ids, kind: "neighbor", level: "concept", scaleIds: [], sources: [], paperCount: 0, status: "unreviewed",
          summary: "既存の関連概念リンクに基づく調査候補。近さの数値評価や未検証の判定は行っていない。",
          caveat: "関係の論文調査は未実施。研究が存在しないという意味ではない。概念定義・測定対象の一致を確認してから文献検索する。",
        });
      }
    }
    return [...known, ...candidates.values()];
  }
  function searchQuery(atlas, row) {
    if (["convergent", "comparison"].includes(row.kind) && row.level === "scale") {
      return row.scaleIds.map((id) => atlas.scales.find((s) => s.id === id)).map((s) => `"${s.abbreviation || s.name}"`).join(" ");
    }
    return row.conceptIds.map((id) => atlas.concepts.find((c) => c.id === id)?.nameEn || id).map((name) => `"${name}"`).join(" ");
  }
  const api = { kinds, statuses, symbols, pairKey, paperKey, resolveSources, rows, searchQuery };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.AtlasRelations = api;
})(globalThis);
