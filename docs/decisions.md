# Decisions

## 2026-09-23: OCB は Williams–Anderson の OCBI/OCBO 13項目として登録する

- 概念 `organizational-citizenship-behavior` と尺度 `williams-anderson-ocbi-ocbo` を追加する。項目数は APA PsycTests の最終 Performance Measure 20（OCBI 7＋OCBO 6＋IRB 7）から IRB を除いた 13。二次資料の OCBO 7・計21とは同一視しない。
- IRB は役割内行動であり、今回は別尺度にしない。Organ、Podsakoff らの24項目、環境向け OCB（OCBE）、田中（2002）の日本版33項目・5因子は別物。日本語状況は `unconfirmed` のままにする。
- Ibrahim（2016）は PO-Org-7 の使用研究として登録する（組織対象7項目、アラビア語の翻訳・逆翻訳、有効 N=276、5件法、α=.84）。DOI は未確認のため URL のみ。同論文は OCBO を7項目と書くため、OCB 尺度の使用研究にはしない。開発論文は使用研究に入れない。
- CX Scale 18 の usage、Brand Affect 3、OBE-4 の日本語は HOLD。山本（2023）DOI 10.7222/marketing.2023.032 は概念レビューであり、PO-Org-7 の日本語使用にしない。

## 2026-09-23: Codex とクラウドの非対称レーン

- ローカル Codex は、条件付きで `main` へ commit / push してよい（force-push 禁止。開始時は status / fetch / 差分確認。dirty や履歴分岐時は自動 pull/rebase/merge しない）。
- Grok Bot / Cursor Cloud はブランチ → PR → レビュー → マージ。マージ前にユーザー確認。
- 文書は関係分だけ同じ変更セットで更新する。`.wrangler/` は共有しない。
- 未マージ作業と同じ論理機能・依存ファイルを同時に触らない。`data.js` と `app.js` のスキーマ変更は事前共有。
- 詳細手順はリポジトリ外スキル「Cloud and local git sync」および本リポジトリ `AGENTS.md` を正とする。

## 2026-08-20: HANDOFF と Codex 引き継ぎを分ける

- 既存の `HANDOFF.md` は研究データの詳細、優先ロードマップ、公開手順を正とする。
- `AGENTS.md` は入口と変更時の不変条件、`current-state.md` は現状、`dev/logs/` は個別作業に絞る。
- `README.md` は利用者向けの機能・データ追加手順を正とする。

## 既存機能として維持する判断

- 原版・短縮版・翻訳版・研究内改変版を別レコードまたは別根拠として扱う。
- 日本語版は「検証済み」「言語的妥当性」「使用例」「翻訳研究」「関連版」「未確認」を区別する。
- 利用研究数はレビュー等が実使用を確認した件数だけを登録し、引用数や検索件数を代用しない。
- 尺度項目本文は公開・転載の根拠が確認できる場合だけ掲載し、利用条件未確認は `unknown` のままにする。
- 研究設計の保存はブラウザ内とし、出力は利用者が明示的に行う。
