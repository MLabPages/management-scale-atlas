# v0.79.0 組織行動 Priority-A（旗艦12概念）

日付: 2026-09-30

## 追加

- 概念12、尺度13。`meta.version` は `0.79.0`。使用研究は空。日本語状況はすべて `unconfirmed`。項目本文は空
- `transformational-leadership` / `bass-avolio-mlq-5x-short`。通例45項目。DOI `10.1037/t03624-000`。`usagePermission: commercial`。Mind Garden の Multi-rater / Rater / Self
- `authentic-leadership` / `walumbwa-alq-16`。16項目・4次元。DOI `10.1177/0149206307308913`。`usagePermission: commercial`
- `turnover-intention` / `bothma-roodt-tis-6`。6項目。DOI `10.4102/sajhrm.v11i1.507`。`validated-short-form`。15項目原版は未登録
- `workplace-deviance` / `bennett-robinson-deviance-19`。19項目（12+7）。DOI `10.1037/0021-9010.85.3.349`
- `person-organization-fit` / `cable-derue-po-fit-3`。P–O fit 3項目。DOI `10.1037/0021-9010.87.5.875`。`subscale`
- `work-family-conflict` / `netemeyer-wfc-10`。10項目。DOI `10.1037/0021-9010.81.4.400`
- `psychological-contract-breach` / `robinson-morrison-breach-5`。breach 5項目。SICI DOI
- `job-insecurity` / `vander-elst-jis-4`。4項目。DOI `10.1080/1359432X.2012.745989`
- `trust-in-supervisor` / `mcallister-trust-11`。11項目（6+5）。DOI `10.2307/256727`
- `proactive-personality` / `bateman-crant-pps-17`（原版）と `seibert-pps-10`（`short`、親は17項目）
- `role-ambiguity-role-conflict` / `rizzo-rc-ra-14`。1概念2次元、通例14項目。DOI `10.2307/2391486`
- `job-characteristics` / `morgeson-humphrey-wdq-77`。77項目・21特性。DOI `10.1037/0021-9010.91.6.1321`

## 入れなかったもの

- MLQ の Actual/Ought 90項目、Long 版、GTL、変革型だけの抜粋
- Mobley 系、Roodt（2004）の15項目、Kelloway らの3項目
- Spector らの CWB-C、Carlson らの WFC 18項目
- PFS の Needs–supplies と Demands–abilities（全体9項目）
- breach と対の violation、Rousseau 系の契約内容尺度
- Hellgren らの多次元な職不安定性、Mayer & Davis（1999）の ABI
- 役割過負荷、約29項目の原プールそのもの
- WDQ の自律性9項目抜粋、Hackman & Oldham の JDS
- 開発論文を usageStudies に入れること
- 項目本文
- Mind Garden の日本語一覧を検証済み版や使用例にすること（品質未保証、書誌未確定）

## 検証上の変更

- Robinson & Morrison（2000）の DOI は山括弧を含む。`verify-data.mjs` の DOI 文字クラスに `<>` を加えた
- `commercial` の表示ラベルと利用条件フィルタ、採用判断ガイドの注意を `app.js` と `index.html` に追加した

## 検証

- 作業開始時の origin/main は `6a60d21`（v0.78.0。PR #34）
- `node verify-data.mjs` 成功。概念99、尺度135、使用研究165、日本語未確認84。登録版そのものが3・4項目28、使用研究での3・4項目25、目的別ガイド33
- `node verify-data.mjs --self-test` 成功
- `node --check data.js`、`node --check app.js`、`git diff --check` を実行する
