# v0.71.0 サーバント・リーダーシップ（SL-28 / SL-7）

日付: 2026-09-24

## 追加

- 概念 `servant-leadership`（サーバント・リーダーシップ）
- 尺度 `liden-sl-28`。Liden, Wayne, Zhao, & Henderson（2008）, The Leadership Quarterly, 19(2), 161–177。DOI `10.1016/j.leaqua.2008.01.006`。7次元×4＝28項目
- 尺度 `liden-sl-7`。Liden, Wayne, Meuser, Hu, Wu, & Liao（2015）, The Leadership Quarterly, 26(2), 254–269。DOI `10.1016/j.leaqua.2014.12.002`。7次元×各1項目。`parentScaleId` は `liden-sl-28`。版区分は `validated-short-form`

## 日本語

- SLJ-28: 木内・大崎（2020）日本心理学会第84回大会 PQ-018。DOI `10.4992/pacjpa.84.0_pq-018`。逆翻訳、533名、7因子 CFA（CFI=.951、RMSEA=.045、SRMR=.052）。査読誌ではないため `translation-study`
- SLJ-7: ResearchGate DOI `10.13140/RG.2.2.33531.59683` に SLJ-28 と併記。要旨の検証対象は SLJ-28 のみのため、SL-7 は `related-version`
- 劉培（2013）24項目、Ehrhart（2004）、小林ら SLS-J は別物として注記のみ

## 入れなかったもの

- 開発論文と大会発表の usageStudies。使用研究は空
- Williams–Anderson OCBI/OCBO の usage、CX Scale 18 の第2 usage、Brand Affect 3 と OBE-4 の日本語（HOLD）
- 項目本文

## 検証

- `node verify-data.mjs` 成功。概念66、尺度101、使用研究160、日本語未確認50。翻訳・因子構造等の検討4、関連版13。登録版そのものが3・4項目22、使用研究での3・4項目25、目的別ガイド9
- `node verify-data.mjs --self-test` 成功
- `node --check data.js`、`node --check app.js`、`git diff --check` 成功
