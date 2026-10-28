# v0.113.0 定時拡充（AIAS-4、使用研究）

日付: 2026-10-28

## 追加

- 既存概念 `attitudes-toward-ai` に尺度 `grassini-aias-4`（AIAS-4）を追加。新概念は作っていない。`usageStudies` を1件追加した。概念135、尺度185、使用研究221、選択ガイド71、関係16。版は v0.112.0 から v0.113.0。`meta.updated` は 2026-10-28。`meta.scope` は `135概念・185尺度`
- Grassini, S.（2023）。Development and validation of the AI attitude scale (AIAS-4): a brief measure of general attitude toward artificial intelligence。Frontiers in Psychology, 14, 1191628。DOI `10.3389/fpsyg.2023.1191628`。Crossref で著者・題名・巻・論文番号が一致。公開 2023-07-24。CC BY 4.0。`sourceUrl` は DOI のみ。PMC や ResearchGate の URL は使わない。Zenodo DOI `10.5281/zenodo.7757534`（採点説明つき）は notes に記すだけで、`sourceUrl` にはしない
- 呼称は AI Attitude Scale。略称は AIAS-4。Wang & Wang の AI Anxiety Scale（AIAS）とは別尺度。`versionType` は `original`。`parentScaleId` は空。`recordStatus` は `verified-metadata`。`verifiedAt` は 2026-10-28
- 4項目・単一因子。10件法（1＝Not at all～10＝Completely Agree）。最終4項目に逆転項目はない。初期5項目の逆転項目（項目4、AI の人類への脅威）は Study 1 で削除し、残ったのは原番号1・2・3・5。`reverseItems` は空。単一因子の総合得点（得点が高いほど肯定的態度）。合計か平均かの具体的な採点規則は本文では確認していない。補足資料と Zenodo に採点説明がある。推測しない。GAAIS・ATAI・TAI とは合算しない
- Study 1（EFA）は英国 Prolific N=230。初期5項目、最尤法・oblimin、KMO .827 で2因子（F1 α .892・ω .892、F2 α .496・ω .504、5項目全体 α .830・ω .860）。4項目で KMO .83、負荷 .892/.856/.821/.778、α .902・ω .904、M 5.48・SD 1.99。Study 2（CFA）は米国 Prolific N=300。χ²(2)=2.49、p=.289、CFI .999、TLI .998、RMSEA .0285（90% CI 0–.122）、標準化負荷 .941/.838/.757/.839。Study 2 の α は「良好で Study 1 と同程度」と記載されるのみで、数値は書いていない。収束的妥当性は MTUAS の肯定的態度と r=.484（S1）/.535（S2）、否定的態度と −.301/−.353、不安と .245/.144。女性の得点が低い。倫理審査は現地法により不要と記載。対象は英国・米国の成人（Prolific のオンライン標本）。言語は English。`psychometricEvidence` は開発論文の2件。`url` は DOI のみ
- `usagePermission` は `open`。論文は CC BY 4.0。尺度は補足資料と Zenodo で公開され、論文を引用すれば自由に使えると著者が明記。`itemPublicationStatus` は `source-open`。項目本文は転載しない。`items` は空。開発論文は使用研究に入れない。日本語は `unconfirmed`。`japaneseStatusNote` は「日本語は未確認。」
- 使用研究は Talik, W.（2026）の1件。The mediating role of positive orientation in the relationship between personality traits and attitudes towards artificial intelligence。PLOS One, 21(3), e0342317。DOI `10.1371/journal.pone.0342317`。Crossref で著者 Wiesław Talik・題名・21(3) e0342317・CC BY 4.0・2026-03-11 が一致。`url` は DOI のみ。`fullTextUrl` は付けない。PMC12978485 は URL にしない。`sourceLocator` は Measures 節と Table 1
- 原版4項目。10件法（1–10）。合計得点（4項目の和、高いほど肯定的）。ポーランドの代表性標本（年齢・性別・居住地・学歴）。Pollster Research Institute のパネルで CAWI。外れ値102件除外後 N=922（18–83歳、M 48.45、SD 16.82、女性 478名 51.8%）。データ取得 2023-12-20。この標本の Cronbach α=.93。合計 M 22.49・SD 8.51。肯定的志向と r=.15（p<.001）、神経症傾向と r=−.11（p<.001）、外向性・開放性・協調性・誠実性とは有意な関連なし。肯定的志向による媒介は部分的に支持。`language` は「未記載（ポーランドの調査。AIAS-4 の翻訳手続きは本文に記載なし）」。ポーランド語とは断定しない。開発者 Grassini は著者に含まれない。開発論文・検証研究ではない。旗艦の採点（合計か平均かは開発論文本文では未確認）は変えない。使用研究の `verifiedAt` は 2026-10-28
- `attitudes-toward-ai` の decisionGuide.choices に AIAS-4 の choice を1つ追加した。label は「4項目・単一因子で一般的態度を短く測るとき」。reason に、10件法、Study 1 の α .902、CFA は良好、逆転項目なし、CC BY で引用すれば自由に使える、ATAI・GAAIS とは合算しない、Wang & Wang の AIAS とは別尺度、と書いた。caution に「Grassini の AIAS-4 は単一因子4項目で、ATAI・GAAIS とは合算しない。Wang & Wang の AI 不安尺度（AIAS）とは別物」を追記した。他の caution の文言は変えていない。概念の references に DOI `10.3389/fpsyg.2023.1191628` を足した。選択ガイド数は増えない。`relatedConcepts` と relations は変えていない。GAAIS と ATAI の旗艦値・`verifiedAt`・notes は変えていない
- 日本語の検証済みは26のまま。関連版は14のまま。未確認は112から113（追加した AIAS-4 が `unconfirmed`）。日本語使用例は18のまま。言語的妥当性確認は2、翻訳・因子構造等の検討は5、日本語で独自開発は6、開発論文内の日本語検証は1のまま。登録版そのものが3・4項目の尺度は29から30（AIAS-4 は4項目）。使用研究側の3・4項目は27から28（追加した使用研究は4項目）

## 見送り

- ATAI 日本語版 Hitsuwari & Takano（2025）。VOR 本文取得不可、かつ preprint 内の項目割当が食い違うため HOLD
- TAI の独立使用研究は見つからず。Cai（2023）は中国語版の検証研究。Zhu（2026）は TAI と AI 不安尺度の混成5項目のため、TAI の使用研究にしない
- テクノストレス Ragu-Nathan（2008）。原典本文未確認で HOLD
- ペルー・スペイン語版とトルコ語版の AIAS-4 検証研究。存在は notes に記し、数値は載せず、使用研究にも入れない
- 既存 HOLD は変更していない。CSR-17、Aad-3、UTAUT-SI、UTAUT-FC、P–O fit-3、RC-3、Price Consciousness 5

## 重複確認

作業開始時の tip は `3bdf542`（v0.112.0。135概念・184尺度・220使用研究・71選択ガイド・16関係）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の DOI と ID で検索した。`10.3389/fpsyg.2023.1191628`、`10.1371/journal.pone.0342317`、`grassini-aias-4`、`AIAS`。追加前は未登録だった。既存 ID は概念 `attitudes-toward-ai`、尺度 `schepman-rodway-gaais-20`、`sindermann-atai-5`。関係レコードは追加していない。`relatedConcepts` は変えていない。

## 根拠として確認したこと

- 数値と書誌は指定された文言だけを使った。指定にない係数・人数・言語・アンカー・採点方法は作っていない。Study 2 の α の数値、開発論文の合計か平均か、Talik 論文の実施言語（ポーランド語という断定）は書いていない
- AIAS-4 の書誌、4項目、単一因子、10件法、逆転項目の削除、Study 1 と Study 2 の係数、収束的妥当性、女性の得点、倫理審査、CC BY 4.0、Zenodo の採点説明、引用すれば自由に使えるという著者の明記は指定の範囲
- Talik（2026）の書誌、4項目、10件法の合計、標本、α、平均、相関、媒介の部分的支持、翻訳手続きの記載なし、開発者が著者に含まれないことは指定の範囲。旗艦の採点は変えていない
- URL は DOI。`fullTextUrl` は付けていない。ResearchGate、第三者 PDF、PMC、Zenodo の URL は使っていない
- 使用研究のフィールド順は既存の Tuncer と Tuncer（2024）と同じ。`title`、`authors`、`year`、`context`、`sample`、`itemCount`、`responseFormat`、`language`、`adaptation`、`result`、`doi`、`url`、`sourceLocator`、`verifiedAt`
- ヘッダの版表示は `app.js` が `data.js` の `meta.version` を読む。スキーマは変えていないため、`app.js` と `index.html` は変更していない
- `docs/decisions.md`、`HANDOFF.md`、`AGENTS.md` は変えていない。同じ概念内の choice 追加で選択ガイド数が増えない扱いは、v0.109.0 の ATAI と同じ

## 採否

- 項目本文は転載しない。`itemPublicationStatus` は `source-open`。論文が CC BY 4.0 で項目を公開していても、アトラスには転載しない
- 開発論文（Grassini 2023）は `usageStudies` に入れない
- Talik（2026）は開発者 Grassini が著者に含まれないので使用研究に入れる。合計得点はこの研究の採点であり、旗艦の「合計か平均かは本文未確認」は変えない
- ペルー・スペイン語版とトルコ語版は検証研究なので使用研究にしない
- AIAS-4 の日本語は未確認。GAAIS の日本語（`validated`）と ATAI の日本語（`unconfirmed`）は変えていない
- 他の尺度・概念・relations・items・既存の usageStudies は変えていない。HOLD 中の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5 には触れていない

## 入れなかったもの

- AIAS-4 と Talik（2026）の項目本文
- Study 2 の α の数値、開発論文の合計か平均かの採点規則
- Zenodo、PMC、ResearchGate の URL
- ペルー・スペイン語版とトルコ語版の数値
- ATAI 日本語版 Hitsuwari & Takano（2025）、TAI の独立使用（Cai 2023、Zhu 2026）、テクノストレス Ragu-Nathan（2008）
- 既存 HOLD
- `app.js`、`index.html`、`styles.css`、`relations.js`、`verify-data.mjs`、`AGENTS.md`、`HANDOFF.md`、`docs/decisions.md`。`.wrangler/` などの生成物

## 次回候補

- ATAI の査読済み日本語版。Hitsuwari & Takano（2025）は VOR 本文と preprint の項目割当が揃うまで HOLD
- TAI の、開発者チーム以外によるフル12項目の独立使用。中国語版の検証研究と、AI 不安尺度との混成項目は混ぜない
- テクノストレス（Ragu-Nathan 2008）は原典本文が確認できるまで HOLD
- AIAS-4 のペルー・スペイン語版とトルコ語版は、検証研究として数値を載せる場合も使用研究にはしない
- GAAIS-10 は未登録のまま。GAAIS-J の19項目を原版20項目と混ぜないこと
- 引き続き HOLD の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check` は通過した。`package.json` はリポジトリにない。検証スクリプトはリポジトリルートの `verify-data.mjs`。

`verify-data.mjs` の件数は、概念135、尺度185、使用研究221、選択ガイド71、関係16。登録版そのものが3・4項目は30。個別使用研究で3・4項目版を確認済みは28。日本語は検証済み26、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認113。v0.112.0 からの想定（概念135、尺度185、使用研究221、選択ガイド71、関係16、検証済み26、関連版14、未確認113、日本語使用例18、登録3・4項目30、使用研究側3・4項目28）と一致した。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.113.0 実データ版`、件数は `135概念・185尺度・個別使用研究221件`、フッタは `v0.113.0`。コンソールエラーはなかった。キーワード「AIAS-4」は1件。カードは4項目、掲載・利用可、使用先行研究1件。詳細は最終確認日 2026-10-28、10件法、Study 1 の α .902、Study 2 の α は数値が未確認、Talik の α=.93 と合計 22.49、原著で公開、項目本文の列挙はない。原文リンクは DOI `10.3389/fpsyg.2023.1191628` と使用研究 DOI `10.1371/journal.pone.0342317`。ResearchGate、PMC、Zenodo の URL はない。空の検索語「存在しない尺度zzzz」は該当なし。「登録尺度そのものが3・4項目」は30件で AIAS-4 を含む。利用条件「掲載・利用可」にも出る。概念一覧の「一般的態度」は1概念、3尺度。判断ガイドは3択で、AIAS-4 の choice と、Wang & Wang の AIAS とは別物という caution が出る。関連概念に AIの脅威知覚 が残る。研究設計に AIAS-4 と GAAIS を入れると合計24項目（4+20）。ブラウザ内の保存は再読み込み後も2件のまま。検索結果の CSV と JSON に AIAS-4、DOI、Talik の題名または DOI が出て、`items` は空。キーワード「GAAIS」は4件（GAAIS、ATAI、AIAS-4、TAI。applicationEvidence が GAAIS に触れるため）。設計アシスタントの既定（根拠と負担のバランス）は GAAIS のまま、別候補に AIAS-4 と ATAI が出る。回答負担を最優先にすると AIAS-4 が候補になる。幅390pxでは詳細ダイアログは `position: fixed`、幅352px、左19px、ページの横溢れなし。
