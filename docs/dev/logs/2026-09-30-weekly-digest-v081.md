# v0.81.0 週次ダイジェスト（ACCEPT 3件）

日付: 2026-09-30

根拠は `weekly-evidence-2026-09-30`。ACCEPT のみ。項目本文は空。開発・検証論文は `usageStudies` に入れない。

## 追加

- `meta.version` は `0.81.0`。概念104、尺度140、使用研究167
- 新規 `empowering-leadership` / `ahearne-leb-10`。Ahearne, Mathieu, & Rapp（2005）。DOI `10.1037/0021-9010.90.5.945`。`itemCount` は 10（3+2+2+3）。合成α=.88。`japaneseVersionStatus` は `unconfirmed`。使用研究は空。回答形式の件数は原典 Methods で未確定
- `psychological-empowerment` の relatedConcepts に `empowering-leadership` を追加し、decisionGuide で Spreitzer の心理状態と Arnold ELQ を分ける
- `bothma-roodt-tis-6` に Els, Brouwers, & Lodewyk（2021）。DOI `10.4102/sajhrm.v19i0.1407`。英語・フル6・南アフリカ製造業従業員400名。本研究内のα=.90
- `haws-green-6` に Bailey, Mishra, & Tiamiyu（2018）。DOI `10.1002/mar.21140`。フル6（GREEN1–6）。3研究のα=.93/.91/.93。日本語は `unconfirmed` のまま

## 入れなかったもの

- Zhang & Bartol（2010）付録の12項目（DOI `10.5465/amj.2010.48037118`）を旗艦または使用研究にすること
- Arnold らの ELQ を尺度レコードにすること
- Ahearne ら（2005）、Bothma & Roodt（2013）、Haws らの開発論文、ハンガリー語 TIS-6 の心理測定検証を `usageStudies` に入れること
- 項目本文
- GitHub Pages への公開、`main` へのマージ

## 検証

- 作業開始時の origin/main は `149fb9c`（v0.80.0。PR #36）
- `node verify-data.mjs` 成功。概念104、尺度140、使用研究167、日本語未確認87。登録版そのものが3・4項目28、使用研究での3・4項目25、目的別ガイド38
- `node verify-data.mjs --self-test` 成功
- `node --check data.js`、`node --check app.js`、`node --check verify-data.mjs`、`git diff --check` 成功
- LEB の `items` は空、`usageStudies` は空。TIS-6 と GREEN の使用研究 DOI は Els と Bailey のみ。開発論文の DOI は使用研究に入っていない
