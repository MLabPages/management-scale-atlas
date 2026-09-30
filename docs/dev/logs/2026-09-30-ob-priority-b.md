# v0.80.0 組織行動 Priority-B（旗艦4概念）

日付: 2026-09-30

## 追加

- 概念4、尺度4。`meta.version` は `0.80.0`。使用研究は空。項目本文は空
- `workaholism` / `schaufeli-duwas-10`。10項目（働き過ぎ5＋強迫的働き5）。DOI `10.1177/1069397109337239`。`japaneseVersionStatus` は `validated-in-development-paper`。`usagePermission` は `research-use`
- `thriving-at-work` / `porath-thriving-10`。10項目（活力5＋学習5）。DOI `10.1002/job.756`。登録年は印刷の2012。日本語は `unconfirmed`
- `meaningful-work` / `steger-wami-10`。10項目・3次元。DOI `10.1177/1069072711436160`。日本語は `unconfirmed`。`usagePermission` は `research-use`
- `workplace-ostracism` / `ferris-wos-10`。10項目・単一次元。DOI `10.1037/a0012743`。日本語は津村（2025）WOS-J の `translation-study`。DOI 文字列 `10.14966/jssp.2023-033` は Crossref 未登録のため未保存

## 入れなかったもの

- 長尺 DUWAS（17／20項目系）、WART、WorkBAT
- Spreitzer ら（2005）の概念枠を尺度旗艦にすること
- Lips-Wiersma 系、Common Good の単項目運用
- 社会的陰謀（social undermining）を職場排斥の旗艦にすること
- 開発論文と WOS-J を `usageStudies` に入れること
- 項目本文
- PsycTESTS の尺度データセット DOI を旗艦 DOI にすること

## 検証上の変更

- `validated-in-development-paper` を `verify-data.mjs` の許容値と `app.js` の表示ラベルに追加した。`validated`（独立した後続の日本語検証）とは分け、フィルタ「検証・開発済み」には含める

## 検証

- 作業開始時の origin/main は `136de07`（v0.79.0。PR #35）
- `node verify-data.mjs` 成功。概念103、尺度139、使用研究165、日本語未確認86、開発論文内の日本語検証1、翻訳・因子構造等の検討5。登録版そのものが3・4項目28、使用研究での3・4項目25、目的別ガイド37
- `node verify-data.mjs --self-test` 成功
- `node --check data.js`、`node --check app.js`、`node --check verify-data.mjs`、`git diff --check` 成功
