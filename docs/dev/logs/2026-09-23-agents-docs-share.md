# AGENTS.md / docs 初回共有（整形後）

日付: 2026-09-23

## 目的

ローカルにあった未追跡の `AGENTS.md` と `docs/` を、Codex / Grok / Cursor 併用ルールと現状件数に合わせて整えたうえで GitHub に共有する。

## 変更範囲

- `AGENTS.md` … レーン規則、開始時の status/fetch、docs 更新方針を追加
- `docs/current-state.md` … v0.69.0 / 64概念 / 98尺度 / 159研究、履歴統合済みに更新
- `docs/architecture.md` … `data.js`/`app.js` 連動の注意を追記
- `docs/decisions.md` … 2026-09-23 レーン決定を追記
- `docs/dev/logs/2026-08-20-codex-context-baseline.md` … 初回追跡（8/20時点の記録として維持）
- `.gitignore` … `.wrangler/` を追加

含めない: `README.md`、`HANDOFF.md`、アプリ本体、`.wrangler/` 本体

## 前提

- main = `4b0d5d9`（ローカルと GitHub 一致）から文書のみ追加
