# v0.70.0 OCB（Williams–Anderson）と PO-Org-7 の使用研究

日付: 2026-09-23

## 追加

- 概念 `organizational-citizenship-behavior`（組織市民行動）
- 尺度 `williams-anderson-ocbi-ocbo`（OCBI 7＋OCBO 6＝13）。DOI `10.1177/014920639101700305`。項目数の根拠は APA PsycTests `10.1037/t09077-000`（最終20＝OCBI7＋OCBO6＋IRB7）
- `psychological-ownership-7` に Ibrahim（2016）の使用研究1件。組織対象7項目、アラビア語の翻訳・逆翻訳、有効 N=276、5件法、α=.84。DOI は未確認。URL は EJBM 8(9) の掲載ページ

## 入れなかったもの

- IRB の別尺度。OCB の usage（Ibrahim 2016 は OCBO を7項目と書く）
- 田中（2002）33項目・5因子の別レコード（日本語状況は unconfirmed のまま）
- 山本（2023）を PO の日本語使用にすること
- CX Scale 18 の usage、Brand Affect 3、OBE-4 の日本語（HOLD）
- 項目本文

## 検証

- `node verify-data.mjs` 成功。概念65、尺度99、使用研究160、日本語未確認50。3・4項目の登録尺度22、使用研究での3・4項目25、目的別ガイド8は変更なし
- `node verify-data.mjs --self-test` 成功
- `node --check data.js`、`node --check app.js`、`git diff --check` 成功
