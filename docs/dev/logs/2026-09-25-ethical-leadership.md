# v0.72.0 倫理的リーダーシップ（ELS-10）

日付: 2026-09-25

## 追加

- 概念 `ethical-leadership`（倫理的リーダーシップ）
- 尺度 `brown-els-10`。Brown, Treviño, & Harrison（2005）, Organizational Behavior and Human Decision Processes, 97(2), 117–134。DOI `10.1016/j.obhdp.2005.03.002`。10項目、単一次元、5件法、部下による直属上司評定

## 日本語

- 状況は `unconfirmed`
- 渡辺幹代（2009）産組心大会の ELS-J は J-GLOBAL `200902268158493009` を `context-reference` にした。全文と項目数は未確認のため検証済みにしない
- 本橋（2020）の6項目、本橋（2021）の8項目和訳（出典表記は Brown and Trevino 2006）、本橋（2023）の書籍はフル ELS-10 ではない

## 入れなかったもの

- 開発論文の usageStudies。使用研究は空
- Williams–Anderson OCBI/OCBO の usage、CX Scale 18 の第2 usage、Brand Affect 3 と OBE-4 の日本語（HOLD）
- 項目本文
- OCB、CX、サーバント・リーダーシップの既存レコード

## 検証

- 作業開始時の main は `3aad9de`（v0.71.0）
- `node verify-data.mjs` 成功。概念67、尺度102、使用研究160、日本語未確認51。翻訳・因子構造等の検討4、関連版13。登録版そのものが3・4項目22、使用研究での3・4項目25、目的別ガイド9
- `node verify-data.mjs --self-test` 成功
- `node --check data.js`、`node --check app.js`、`git diff --check` 成功
