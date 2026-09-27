# v0.74.0 虐待的監督（AS-15）と ELS-10／OCBI-OCBO の使用研究

日付: 2026-09-27

## 追加

- 概念 `abusive-supervision`（虐待的監督）
- 尺度 `tepper-abusive-supervision-15`。Tepper（2000）, Academy of Management Journal, 43(2), 178–190。DOI `10.2307/1556375`（Crossref の別名 `10.5465/1556375`）。15項目、5件法（頻度）。使用研究は空。日本語状況は `unconfirmed`
- `brown-els-10` の使用研究1件。Mayer, Kuenzi, & Greenbaum（2010）。Journal of Business Ethics, 95(S1), 7–16。DOI `10.1007/s10551-011-0794-0`。URL `https://davemayer.me/wp-content/uploads/sites/11/2019/07/Mayer-Kuenzi-Greenbaum-JBE-2010.pdf`
- `williams-anderson-ocbi-ocbo` の使用研究1件。Carlson, Kacmar, Grzywacz, Tepper, & Whitten（2013）。Journal of Behavioral and Applied Management, 14(2), 87–106。DOI `10.21818/001c.17924`

## 根拠として確認したこと

- Crossref: DOI `10.2307/1556375` は Academy of Management Journal, 43(2), 178–190、2000年4月。別名に `10.5465/1556375`
- Tepper ら（2007, DOI `10.5465/amj.2007.20159918`）の公開PDF: 2000年調査の時点1は有効712名。15項目、5件法（両端を記載）。再分析の相関表（n=342）で虐待的監督のα=.91。原典の表は開いていない
- Mayer らの公開PDF: 従業員1,525名と監督者、300 units。部下が Brown et al.（2005）の10項目を使用（α=.97）。測定モデルは ELS の指標10を含む23指標
- Carlson らの公開PDF: dyad 205。Williams and Anderson（1991）の OCBI 7（α=.88）と OCBO 6（α=.79）。方法節は頻度の文言を示すが、件数は明示しない

## 入れなかったもの

- Mitchell & Ambrose（2007）の5項目短縮
- Tepper（2000）の開発論文を usageStudies に入れること
- Brown et al.（2005）の開発論文を使用研究に入れること
- OCBI/OCBO への IRB、Lee & Allen、Podsakoff 24、田中33、Ibrahim の OCBO 7
- CX Scale 18 の第2 usage、Brand Affect 3 と OBE-4 の日本語（HOLD）
- 項目本文

## 検証

- 作業開始時の origin/main は `9389805`（v0.73.0）
- `node verify-data.mjs` 成功。概念69、尺度104、使用研究163、日本語未確認53。翻訳・因子構造等の検討4、関連版13。登録版そのものが3・4項目22、使用研究での3・4項目25、目的別ガイド9
- `node verify-data.mjs --self-test` 成功
- `node --check data.js`、`node --check app.js`、`git diff --check` 成功
- ローカルの静的サーバと headless Chrome で、見出しが v0.74.0・69概念・104尺度・使用研究163件になることを確認した。虐待的監督の検索は AS-15 の1件で、使用先行研究バッジはなく、詳細に項目本文はない。ELS-10 の詳細に Mayer らの使用研究1件（α=.97）、OCBI/OCBO の詳細に Carlson らの使用研究1件（OCBI α=.88、OCBO α=.79）が出る。3尺度を研究設計に入れると合計38項目。設計CSV、根拠CSV、検索CSV、検索JSONに新尺度と2件の使用研究DOIが入る。概念一覧に虐待的監督が出る。CX Scale 18 は使用先行研究1件のまま、ブランド感情は未確認のまま。幅390pxでも詳細ダイアログは画面内の固定表示だった
