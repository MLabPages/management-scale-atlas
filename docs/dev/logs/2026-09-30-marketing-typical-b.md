# v0.78.0 マーケ典型概念B（旗艦4尺度）

日付: 2026-09-30

## 追加

- 概念4、尺度4。`meta.version` は `0.78.0`。使用研究は空。日本語状況はすべて `unconfirmed`。項目本文は空
- `compulsive-buying` / `ridgway-rcbs-6`。6項目・2次元。DOI `10.1086/591108`。既存 `buying-impulsiveness` と弁別
- `green-consumption-values` / `haws-green-6`。6項目・単一次元。DOI `10.1016/j.jcps.2013.11.002`。印刷年2014、オンライン公開2013-11-13。`perceived-csr` と `materialism` と別
- `persuasion-knowledge` / `bearden-persuasion-knowledge-6`。CSC下位6項目。DOI `10.1086/321951`。`advertising-skepticism` と弁別
- `luxury-value-perception` / `wiedmann-lvp-48`。48項目・10因子・5件法。DOI `10.1002/mar.20292`。原典本文（方法・結果）で itemCount を確定。`status-consumption`、`materialism`、`consumer-need-for-uniqueness`、`perceived-value`、`willingness-to-pay-premium` と decisionGuide／relatedConcepts で区別

## 入れなかったもの

- Faber & O'Guinn（1992）の7項目臨床スクリーナ（DOI `10.1086/209315`）
- Friestad & Wright（1994）を尺度本体にすること（理論。DOI `10.1086/209380`）。PTPK（DOI `10.1016/j.jretai.2006.06.003`）とスポンサーコンテンツ特化の知識尺度
- Dunlap らの NEP、GREEN-J を検証済み日本語版にすること（査読付きDOIは未確認）
- Hennigs ら（2012、DOI `10.1002/mar.20583`）の短縮版。項目数は原典で確定していない。Vigneron & Johnson の BLI
- Wiedmann の初期質問紙150項目。二次文献の20項目主張
- 開発論文を usageStudies に入れること
- 項目本文

## 検証

- 作業開始時の origin/main は `7fb2e27`（v0.77.0。PR #33）
- `node verify-data.mjs` 成功。概念87、尺度122、使用研究165、日本語未確認71。登録版そのものが3・4項目26、使用研究での3・4項目25、目的別ガイド21
- `node verify-data.mjs --self-test` 成功
- `node --check data.js`、`node --check app.js`、`git diff --check` 成功
- ローカルの静的サーバと headless Chrome で、見出しが v0.78.0・87概念・122尺度・使用研究165件になることを確認した。強迫購買・グリーン消費・説得知識の検索は各1件。ラグジュアリー検索には LVP-48 が含まれる。Faber と Friestad の検索は、それぞれ RCBS と PK-6 の注記にヒットし、別尺度は出ない。RCBS の詳細は項目本文「掲載していません」、使用先行研究は未登録、DOI `10.1086/591108`。ラグジュアリー価値知覚の概念詳細は、関連概念にステータス消費・物質主義・知覚価値があり、48項目と財務次元の注意がある。RCBS・GREEN・PK-6 を研究設計に入れると合計18項目・概念数3。GREEN を含む絞り込みの出力行は DOI `10.1016/j.jcps.2013.11.002`、項目本文0、使用研究0。幅390pxでも説得知識の詳細ダイアログは `position: fixed` で画面内に収まった
