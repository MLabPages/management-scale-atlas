# Codex context baseline

日付: 2026-08-20

## 目的

尺度アトラスの研究データ方針、根拠の分類、ブラウザ内研究設計、公開前検証を次回の Codex 作業へ引き継ぐ。

## 確認したこと

- `README.md`、`HANDOFF.md`、`app.js`、`data.js`、`verify-data.mjs` を確認した。
- `data.js` は v0.50.0 の概念・尺度・使用研究データを持ち、`app.js` が検索・比較・研究設計を担う。
- 作業前に `.wrangler/` の未追跡項目があったため保持した。
- GitHub 側が強制更新してローカルと分岐していたため、`git pull --ff-only` は失敗し、履歴を変える操作は行っていない。

## 変更

- ルート `AGENTS.md` と `docs/` 配下の引き継ぎ文書を追加した。
- `data.js`、`app.js`、`HANDOFF.md`、`.wrangler/` は変更していない。

## 検証

- 文書の配置を確認する。
- `node verify-data.mjs`
- `node --check data.js`
- `node --check app.js`
- `git diff --check`
