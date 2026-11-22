# 2026-11-22 DAI（Chavez Sosa）の使用研究

- セマンティック版は v0.140.0。概念164、尺度217、使用研究259、選択ガイド100、関係16。`app.js`、`items.js`、`index.html`、CSS、`relations.js`、`relation-model.js`、`verify-data.mjs` は変えていない。項目本文は載せていない（15尺度・166項目のまま）。
- DAI の使用研究は Chavez Sosa と Huancahuire-Vega（2026）。DOI `10.2196/82667`。Crossref は 2026-05-05、JMIR Formative Research、10巻、e82667。著者は Janett V. Chavez Sosa、Salomon Huancahuire-Vega。論文は CC BY 4.0。ペルー（リマ）の私立大学の医学部生 N=187。原版 DAI-5 を改変せず。5件法（1＝Totally false to me～5＝Describes me perfectly）、合計 5–25。この標本の α=.859。DASS-21 の不安（ρ=.336）・抑うつ（ρ=.316）・ストレス（ρ=.277）と正の関連。実施言語は本文で未確認のため推測しない。開発者は著者に含まれない。旗艦の件法・日本語・usagePermission は変えていない。既存の Korkmaz と Toraman（2026）は残した。
- 見送り。指定の HOLD は変更していない。
- 確認は `node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check`。
