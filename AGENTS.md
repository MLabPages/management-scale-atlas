# Management Scale Atlas project guide

## 入口

このリポジトリは、経営学・マーケティングの概念と測定尺度を検索・比較し、研究設計へつなげるビルド不要の静的 Web アプリです。利用者向け説明は `README.md`、詳細な開発引き継ぎは既存の `HANDOFF.md` を参照してください。

**Grok Bot / Cursor Cloud / Codex は、作業開始時に本ファイル（リポジトリルートの `AGENTS.md`）を正本として読む。**

作業開始時は、必要な範囲で次を確認します。

- `docs/current-state.md`：収録件数、検索・比較・研究設計の状態
- `docs/architecture.md`：`data.js`、`app.js`、ブラウザ保存、検証の境界
- `docs/decisions.md`：尺度版、根拠、日本語情報、利用条件、エージェント運用の判断
- `docs/dev/logs/`：関係する最近の作業記録
- `HANDOFF.md`：継続作業の優先順位と詳細な研究データ方針

## Codex / クラウド併用（レーン）

### ローカル Codex
- 条件付きで `main` 上の commit / push まで承認なしで進めてよい（ユーザーの standing 運用）。
- `main` への force-push は禁止。
- 作業開始時は次を確認する（毎回 `pull --ff-only` は必須にしない）:

```text
git status --short
git diff --stat
git fetch
git diff HEAD..origin/main
```

- `git pull --ff-only` は、作業ツリーが **clean** で、更新が **単純な fast-forward** のときだけ行う。
- 作業ツリーが dirty、履歴が分岐・無関係、または未追跡の重要ファイルがあるときは、fetch と差分確認までにとどめ、pull / rebase / merge を自動実行しない。統合方法を決めてから進める。
- push が拒否されたら自動 rebase しない。fetch して差分と共通祖先を確認し、通常の共通履歴なら必要に応じて rebase、無関係な履歴や force update なら統合計画を決めてから実施する。

### Grok Bot / Cursor Cloud
- ブランチ → PR → レビュー → マージ。`main` へ直接 push しない。
- マージはユーザー確認後のみ（そのマージの明示承認がある場合を除く）。
- 根拠確認つきデータ拡充・定型バッチ向き。

### 併用時
- 未マージの作業と、同じ論理機能・依存ファイルを同時に触らない（「同じ日」よりこちらを優先）。
- とくに `data.js` と `app.js` は連動する。UI とデータの分担でも、スキーマや項目形状を変えるときは事前共有する。
- Codex が `main` を進めたら、未マージのクラウド PR は最新 `main` へ追随してからマージする。

## 変更時の前提

- 原版、正式短縮版、翻訳版、後続研究内の項目削除・改変版を同じ尺度として扱わない。
- 「尺度の実使用研究数」と単なる被引用数や検索結果件数を混同しない。
- 日本語情報、項目本文の掲載可否、利用条件は根拠の段階を分けて表示する。
- `data.js` のID参照、DOI、`usageStudies`、日本語根拠の整合性を維持する。
- 項目本文や未確認の利用条件を推測で追加しない。研究データ変更後は `node verify-data.mjs` を実行する。

## 文書の更新

挙動や方針を変える変更では、**関係する文書だけ**を同じ変更セットで更新する（全部を毎回更新しない）。

| 役割 | パス |
|------|------|
| 永続ルール | `AGENTS.md` |
| 現在状態 | `docs/current-state.md` |
| 判断・設計決定 | `docs/decisions.md` |
| 作業記録 | `docs/dev/logs/` |
| 利用者向け機能説明 | `README.md` |
| 引き継ぎ | `HANDOFF.md` |

- `.wrangler/` など生成・キャッシュは文書変更に含めない（`.gitignore` 対象）。

## 検証と記録

- `node verify-data.mjs` と、必要に応じて `node verify-data.mjs --self-test` を実行する。
- 検索、詳細、比較、研究設計、CSV/JSON 出力、スマートフォン表示を確認する。
- 変更後は `git diff --check` を実行する。
- 意味のある変更では、関係する範囲で `docs/current-state.md` と `docs/dev/logs/` を更新する。
