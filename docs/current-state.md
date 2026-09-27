# Current state

最終更新: 2026-09-26

## 現在の状態

- ビルド不要の静的 Web アプリで、概念・尺度・略称・対象者・研究領域から検索できる。
- 概念詳細、尺度詳細、最大 8 尺度の比較、回答負荷、研究設計アシスタント、CSV/JSON 出力がある。
- 収録データは **v0.73.0**、**68 概念**、**103 尺度**、個別の尺度使用研究 **161 件**、日本語未確認 **52 尺度**（2026-09-26）。従業員の発言行動（Van Dyne–LePine Voice 6項目）を追加し、SL-7 に Svensson, Jones, & Kang の使用研究を1件追加した。GitHub Pages への公開は本変更では行っていない。main へのマージもしていない。
- 原版、短縮版、翻訳版、後続研究の使用例、日本語情報、利用条件、測定根拠を分けて表示する。
- `HANDOFF.md` に、データ拡充の優先順位と研究上の注意点がまとまっている。
- エージェント向け入口は `AGENTS.md`。Codex（ローカル main）と Grok Bot / Cursor Cloud（ブランチ→PR）の併用ルールを記載している。

## Git の状態（2026-09-26）

- 作業開始時の `main` は origin/main の v0.72.0（`c19a446`。倫理的リーダーシップ ELS-10。PR #28 の squash）と一致していた。
- v0.73.0 はブランチ上の追加であり、`main` へは未マージ。GitHub Pages は公開していない。
- 以前あった「リモート強制更新による分岐・merge/rebase 未実施」は解消済み。
- `.wrangler/` はローカル生成物として保持し、リポジトリには含めない（`.gitignore`）。

## 既知の注意点

- 研究データは出典確認が前提で、未集計・未確認は「ゼロ」「利用不可」を意味しない。
- 日本語の「関連版」と尺度そのものの日本語検証を混同しない。
- `verify-data.mjs` は `data.js` を評価するため、取得元を確認していない外部ファイルを対象に実行しない。
- GitHub Pages の公開状態とローカルのデータ状態を分けて確認する。
- Brand Affect 3・OBE-4 の日本語根拠は長期 HOLD（英語 usage はあるが JP 運用未確認）。
- CX Scale 18（`customer-experience-scale-gahler-18`）の第2 usage、Williams–Anderson OCBI/OCBO の usage、Brand Affect 3 と OBE-4 の日本語は v0.73.0 でも見送り（HOLD）。CX Scale 18 の使用研究は Gao & Jiang の1件のまま。
- ELS-10 は MLQ（変革型・商用）、サーバント・リーダーシップの倫理的行動次元、研究内の6項目短縮、本橋の約8項目和訳とは別物。日本語状況は未確認。
- Van Dyne–LePine Voice 6項目は、同一論文の Helping 7項目、Liang の促進的／抑制的発言、Farh の発言尺度、Williams–Anderson OCBI/OCBO とは別物。日本語状況は未確認。開発論文は使用研究に入れていない。
- SL-7 の使用研究は Svensson らのフル7項目・7件法のみ。Liden et al.（2015）の開発論文は使用研究に入れていない。SL-28 のレコードは変えていない。

## 次に確認すること

- データ追加・変更後は `node verify-data.mjs` と `node --check data.js` を実行する。
- `node --check app.js`、`git diff --check`、検索・比較・設計・出力の主要操作を確認する。
- 公開前は原典・DOI、日本語版根拠、利用条件、項目掲載根拠、測定検証を再確認する。
- クラウド作業前は最新 `main` からブランチを切る。ローカル作業前は status / fetch / `HEAD..origin/main` を確認する。
