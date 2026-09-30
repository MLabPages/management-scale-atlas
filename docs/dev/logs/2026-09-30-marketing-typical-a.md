# v0.77.0 マーケ典型概念バッチ（旗艦11尺度）

日付: 2026-09-30

## 追加

- 概念11、尺度11。`meta.version` は `0.77.0`。使用研究は空。日本語状況はすべて `unconfirmed`。項目本文は空
- `attitude-toward-the-ad` / `mackenzie-lutz-aad-3`。通例3項目意味微分。DOI `10.1177/002224378602300205`。構造 DOI `10.1177/002224298905300204`
- `hedonic-utilitarian-attitude` / `voss-hed-ut-10`。10項目。DOI `10.1509/jmkr.40.3.310.19238`
- `consumer-susceptibility-to-interpersonal-influence` / `bearden-csii-12`。12項目。DOI `10.1086/209186`
- `need-for-cognition` / `cacioppo-petty-kao-nfc-18`。18項目。DOI `10.1207/s15327752jpa4803_13`
- `source-credibility` / `ohanian-source-credibility-15`。15項目。DOI `10.1080/00913367.1990.10673191`
- `perceived-csr` / `turker-perceived-csr-17`。17項目。DOI `10.1007/s10551-008-9780-6`
- `relationship-commitment` / `morgan-hunt-relationship-commitment-3`。通例3項目。DOI `10.1177/002224299405800302`
- `customer-citizenship-behavior` / `yi-gong-ccb-16`。市民行動側16項目。DOI `10.1016/j.jbusres.2012.02.026`
- `country-of-origin-image` / `parameswaran-pisharodi-coi-40`。40項目。DOI `10.1080/00913367.1994.10673430`。内訳と10件法は Pereira ら（2005）DOI `10.1016/S0148-2963(02)00479-4`
- `social-influence` / `venkatesh-utaut-social-influence-4` と `facilitating-conditions` / `venkatesh-utaut-facilitating-conditions-4`。各通例4項目。DOI `10.2307/30036540`

## 入れなかったもの

- 自己一致性（Sirgy）。固定多項目の旗艦が弱く HOLD
- サービス・リカバリー公正（Tax et al. 1998。DOI `10.1177/002224299806200205`）。原典PDFで itemCount を確定できず HOLD。Smith et al.（1999）も未登録
- Pérez 系の知覚CSR、Roth & Romeo の原産国枠組み、COO の24項目改訂、共創全体29項目、NFC の34項目原版、神山・藤原の日本語15項目、UTAUT のパフォーマンス期待・努力期待、UTAUT2 の快楽動機・価格価値・習慣
- 開発論文を usageStudies に入れること
- 項目本文

## 検証

- 作業開始時の origin/main は `46d1b37`（v0.76.0。PR #32）
- `node verify-data.mjs` 成功。概念83、尺度118、使用研究165、日本語未確認67。登録版そのものが3・4項目26、使用研究での3・4項目25、目的別ガイド17
- `node verify-data.mjs --self-test` 成功
- `node --check data.js`、`node --check app.js`、`git diff --check` 成功
- ローカルの静的サーバと headless Chrome で、見出しが v0.77.0・83概念・118尺度・使用研究165件になることを確認した。広告態度の検索は Aad-3 の1件で、詳細は項目本文「掲載していません」、使用先行研究は未登録、ブランド態度との区別と4–6項目の揺れを表示する。自己一致性・リカバリー公正・service recovery の検索は0件。概念「社会的影響」の詳細は、関連概念が促進条件・知覚有用性・知覚容易性で、UTAUT2 と PE/EE を追加しない注意がある。Aad-3・UTAUT-SI・UTAUT-FC を研究設計に入れると合計11項目・概念数3。設計アシスタントは社会的影響と促進条件で合計8項目。HED/UT の絞り込み出力は1件、DOI `10.1509/jmkr.40.3.310.19238`、項目本文0、使用研究0。幅390pxでも原産国イメージの詳細ダイアログは画面内（position: fixed）に収まった
