# v0.86.0 職の不安定性（JIS-4）の使用研究1件

日付: 2026-10-05

## 追加

- 既存尺度 `vander-elst-jis-4` の `usageStudies` に1件。Sultana ら（2022）。BMC Psychology, 10, 265。DOI `10.1186/s40359-022-00974-7`
- De Witte 系のフル4項目。1項目逆転。5件法（1 = strongly disagree～5 = strongly agree）。平均点
- バングラデシュ・コックスバザールの人道支援従事者。466名配布、有効445名。2021年4–5月のオンライン調査。確認した Methods に実施言語はない
- この標本の α は 0.62。引用された 0.82 は原英語版の値であり、この使用研究の α ではない
- 分析では 4–5点を不安定ありとし、insecure / not insecure に分けている
- 概念107、尺度149のまま。使用研究は182から183。版は v0.86.0 のまま。日本語未確認は90のまま。`japaneseVersionStatus` は `unconfirmed`

## 根拠として確認したこと

- 週次メモ（2026-10-05）が開いた PMC 全文。Methods の Study design and participants と Outcome variables（Job insecurity scale）
- Crossref の書誌。筆頭は Naznin Sultana。BMC Psychology, 10(1)。発行日は 2022-11-14。ユーザー指定の 10:265 は記事番号

## 入れなかったもの

- Richter, Vander Elst, & De Witte（2020）の1項目を JIS-4 の使用研究にすること
- 0.82 を、この使用研究の標本αとして書くこと
- Vander Elst ら（2014）の心理測定論文を `usageStudies` に入れること
- JCQ／Karasek 系の日本語4項目を `japaneseEvidence` にすること
- 4項目の項目文を `items[]` に転記すること
- Price Consciousness
- Global JE-7 の概念・尺度・Allen ら（2016）の記録を変えること

## 検証

- 同じ未マージの draft PR 上で追加。`origin/main` は `46679eb`（v0.85.1）
- `node verify-data.mjs` 成功。概念107、尺度149、使用研究183、選択ガイド41、関係16。日本語未確認90、使用例16。使用研究で3・4項目版を確認済みは26
- `node verify-data.mjs --self-test`、`node --check data.js`、`node --check app.js`、`git diff --check` 成功
- ローカル静的サーバと headless Chrome で、見出しが 107概念・149尺度・使用研究183件になることを確認した。「職の不安定性」の検索は1件。JIS-4 の詳細に Sultana ら（2022）、DOI `10.1186/s40359-022-00974-7`、有効445名、この標本のα=0.62、0.82は原英語版、insecure / not insecure、項目は「掲載していません」。日本語は未確認。Frontiers 2020 の DOI は出てこない
- 研究設計でこの使用研究を選ぶと、先行研究CSVに当該 DOI、445名、0.62、4項目が出る。Global JE-7 の検索は1件のまま。幅390pxの詳細ダイアログは幅352pxで画面内に収まった
