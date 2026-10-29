# v0.114.0 定時拡充（AI不安、AIAS-4 の使用研究）

日付: 2026-10-29

## 追加

- 概念 `ai-anxiety`（AI不安）と尺度 `wang-wang-aias-21`（表示略称 AIAS-21。原典略称は AIAS）を追加。`grassini-aias-4` の `usageStudies` を2件追加した。概念136、尺度186、使用研究223、選択ガイド72、関係16。版は v0.113.0 から v0.114.0。`meta.updated` は 2026-10-29。`meta.scope` は `136概念・186尺度`
- Wang, Y.-Y., & Wang, Y.-S.（2022）。Development and validation of an artificial intelligence anxiety scale: an initial application in predicting motivated learning behavior。Interactive Learning Environments, 30(4), 619–634。DOI `10.1080/10494820.2019.1674887`。`sourceUrl` は DOI のみ。登録年は巻の年 2022。オンライン 2019-10-14、印刷 2022-04。論文はオープンアクセス、CC BY-NC-ND 4.0。ResearchGate や第三者 PDF の URL は使わない
- 原典の略称は AIAS。レコードの `abbreviation` は AIAS-21（Grassini の AIAS-4 と表示上区別する）。`versionType` は `original`。`parentScaleId` は空。`recordStatus` は `verified-metadata`。`verifiedAt` は 2026-10-29
- 21項目・4次元（Table 2）。学習 Learning 8項目、雇用代替 Job replacement 6項目、社会技術的盲目 Sociotechnical blindness 4項目、AIの構成 AI configuration 3項目。7件法（Likert型・同意の程度。両端の言葉は原典に明記なし）。採点は21項目の合計点。原典の規準値は最小21・最大136・M 91.409・SD 26.570・中央値 88。指定値をそのまま記録し、21×7 などの再計算では置き換えない。`reverseItems` は空。逆転項目は指定範囲にないため記録しない
- 信頼性は全体 α .964、学習 .974、雇用代替 .917、社会技術的盲目 .917、AI構成 .961。基準関連 r = .864。学習意欲行動と r = .190（p<.01）。因子間相関 .494–.725。EFA のみで CFA は未実施（著者が今後の課題と明記）。基準関連の相手尺度名は指定にないため書かない。標本は台湾のオンライン調査 N=301、非無作為抽出。実施言語は指定範囲にないため推測しない。`language` は「本文に実施言語の明記なし（台湾のオンライン調査。実施言語は推測しない）」
- `usagePermission` は `unknown`。論文は CC BY-NC-ND 4.0 だが、尺度の利用許諾の明記はない。`itemPublicationStatus` は `not-published`。GAAIS（同じく CC BY-NC-ND 4.0）と同じ扱いで、`source-open`（画面上「原著で公開」）にはしない。項目本文は転載しない。`items` は空。開発論文は使用研究に入れない。`usageStudies` は空。日本語は `unconfirmed`。ドイツ語版・インドネシア語版・トルコ語版の検証研究はあるが、数値は載せず、使用研究にも入れない。検証研究の DOI は指定にないため足さない
- 定義は、AI に対する不安。AI一般への評価的態度（`attitudes-toward-ai`）や、特定領域での AI 機能への脅威知覚（`perceived-ai-threat`、TAI）とは別概念で、得点は合算しない。分野は「技術受容・情報システム」。`relatedConcepts` は存在する `attitudes-toward-ai`、`perceived-ai-threat`、`technology-readiness`。3つとも既存 ID だった
- 相互リンクは、すでに互いを指している `attitudes-toward-ai` と `perceived-ai-threat` に `ai-anxiety` を足した。`technology-readiness` は AI 態度から片方向のままなので、逆リンクは足していない（`docs/decisions.md` の 2026-10-07。関連概念は対称である必要はない）。関係レコードは追加しない。選択ガイドは新概念に1件（選択肢1つ）で、71から72
- `attitudes-toward-ai` の AIAS-4 の choice reason と caution、`grassini-aias-4` の `applicationEvidence.summary` と notes にある「Wang & Wang の AI 不安尺度とは別」は、登録済みの `wang-wang-aias-21`（AIAS-21）を指す文言に最小限だけ直した。旗艦の α、10件法、採点、`usagePermission`、項目数、Talik（2026）の中身は変えていない
- AIAS-4 の使用研究は1件から3件。既存の Talik（2026）の後ろに追加した。尺度の `verifiedAt` は 2026-10-29。心理測定根拠と Talik の `verifiedAt` は 2026-10-28 のまま。notes の使用研究件数は3件に合わせた
- Türk, N., Batuk, B., Kaya, A., & Yıldırım, O.（2025）。What makes university students accept generative artificial intelligence? A moderated mediation model。BMC Psychology, 13, 1257。DOI `10.1186/s40359-025-03559-2`。`url` は DOI のみ。`fullTextUrl` は付けない。`verifiedAt` は 2026-10-29。生成AI受容の予測モデル（AIリテラシー・AI自己効力感・AI学習不安と同時測定）。トルコの大学生 N=356（女性74.4%、18–46歳、M 22.71）。4項目・10件法（1 = not at all〜10 = completely agree、原版どおり）。言語はトルコ語。検証済みトルコ語版ではなく、本研究内で専門家4名が翻訳・逆翻訳。α = .89、ω = .89。CFA は χ²/df 2.52、RMSEA .06、CFI .99、TLI .99。合計点 M 26.64、SD 7.81。生成AI受容 r = .57、AI自己効力感 .23、AIリテラシー .12、AI学習不安 −.18。開発者 Grassini は著者に含まれない。開発論文・検証研究ではない
- Adiyan, N. N., & Lule, N. O.（2026）。Attitudes toward artificial intelligence tools in university students: associations with body appreciation and e-healthy diet literacy — implications for digital health education。BMC Medical Education, 26, 1162。DOI `10.1186/s12909-026-09506-y`。`url` は DOI のみ。`fullTextUrl` は付けない。`verifiedAt` は 2026-10-29。デジタル健康教育（BAS、e-HDL との関連）。トルコ Gaziantep 大学の学生 N=440（18–30歳、女性70.5%、平均 21.20）。4項目・10件法（strongly disagree〜strongly agree）。言語はトルコ語。Arslan らの検証済みトルコ語版を原著者の許諾のもと使用。項目の削除・改変なし。両端の言葉が原版と異なる点と、平均点で採点した点は adaptation。α = .949。M 5.47、SD 2.62。BAS r = .356、e-HDL r = .326。男性が高い（5.93 vs 5.28, p = .027）。回帰は BAS β = .325、e-HDL β = .247、BMI β = .107。開発者 Grassini は著者に含まれない
- 日本語の検証済みは26のまま。関連版は14のまま。未確認は113から114。日本語使用例は18のまま。言語的妥当性確認は2、翻訳・因子構造等の検討は5、日本語で独自開発は6、開発論文内の日本語検証は1のまま。登録版そのものが3・4項目の尺度は30のまま（AIAS-21 は21項目）。使用研究側の3・4項目は28のまま（追加はどちらも4項目で、AIAS-4 は既に Talik の4項目使用があるため、尺度数は増えない）

## 見送り

- AIAS-21 のドイツ語版・インドネシア語版・トルコ語版の検証研究。存在は notes に記し、数値も DOI も載せず、使用研究にも入れない
- AIAS-4 のペルー・スペイン語版の検証研究。従来どおり数値を載せず、使用研究にも入れない。今回追加した Türk ら（2025）と Adiyan と Lule（2026）は検証研究そのものではない
- 既存 HOLD は変更していない。CSR-17、Aad-3、UTAUT-SI、UTAUT-FC、P–O fit-3、RC-3、Price Consciousness 5

## 重複確認

作業開始時の tip は `4664d55`（v0.113.0。135概念・185尺度・221使用研究・71選択ガイド・16関係）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の DOI と ID で検索した。`10.1080/10494820.2019.1674887`、`10.1186/s40359-025-03559-2`、`10.1186/s12909-026-09506-y`、`ai-anxiety`、`wang-wang-aias-21`。追加前は未登録だった。`technology-readiness`、`attitudes-toward-ai`、`perceived-ai-threat` は既存 ID。関係レコードは追加していない。

## 根拠として確認したこと

- 数値と書誌は指定された文言だけを使った。指定にない係数、言語、アンカー、採点方法、検証研究の DOI は作っていない。実施言語、基準関連の相手尺度名、逆転項目の有無、EFA の抽出法は書いていない
- 原典の規準値の最大136は、21項目×7件法の算術とは別に、指定値のまま記録した
- URL は DOI。`fullTextUrl` は付けていない。ResearchGate、第三者 PDF の URL は使っていない
- 使用研究のフィールド順は既存の Talik（2026）と同じ。`title`、`authors`、`year`、`context`、`sample`、`itemCount`、`responseFormat`、`language`、`adaptation`、`result`、`doi`、`url`、`sourceLocator`、`verifiedAt`
- ヘッダの版表示は `app.js` が `data.js` の `meta.version` を読む。スキーマは変えていないため、`app.js` と `index.html` は変更していない
- `docs/decisions.md` と `AGENTS.md` は変えていない。新しい選択ガイドで件数が増える扱いは、v0.112.0 の TAI と同じ

## 採否

- 項目本文は転載しない。`itemPublicationStatus` は `not-published`
- 開発論文（Wang と Wang 2022）は `usageStudies` に入れない
- Türk ら（2025）と Adiyan と Lule（2026）は開発者 Grassini が著者に含まれないので、AIAS-4 の使用研究に入れる。平均点採点と両端の言葉の違いは adaptation であり、旗艦の値は変えない
- AIAS-21 の日本語は未確認。GAAIS の日本語（`validated`）と ATAI・AIAS-4・TAI の日本語（`unconfirmed`）は変えていない
- 他の尺度の旗艦値、relations、items、Talik の usage 本文は変えていない。HOLD 中の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5 には触れていない

## 入れなかったもの

- AIAS-21、Türk ら（2025）、Adiyan と Lule（2026）の項目本文
- 実施言語、基準関連の相手尺度、逆転項目、EFA の抽出法、検証研究の DOI
- 規準値最大136の再計算
- ResearchGate と第三者 PDF の URL
- `technology-readiness` への逆リンク、関係レコード
- `app.js`、`index.html`、`styles.css`、`relations.js`、`verify-data.mjs`、`AGENTS.md`、`docs/decisions.md`。`.wrangler/` などの生成物

## 次回候補

- AIAS-21 の、開発論文以外のフル21項目の独立使用。ドイツ語版・インドネシア語版・トルコ語版は検証研究なので使用研究に混ぜない
- AIAS-21 の査読済み日本語版
- AIAS-4 のペルー・スペイン語版は、検証研究として数値を載せる場合も使用研究にはしない
- 引き続き HOLD の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test` は通過した。`package.json` はリポジトリにない。検証スクリプトはリポジトリルートの `verify-data.mjs` だけ。

`verify-data.mjs` の件数は、概念136、尺度186、使用研究223、選択ガイド72、関係16。登録版そのものが3・4項目は30。個別使用研究で3・4項目版を確認済みは28。日本語は検証済み26、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認114。想定（概念136、尺度186、使用研究223、選択ガイド72）と一致した。3・4項目の尺度数と使用研究側の尺度数が増えない理由は、AIAS-21 が21項目であることと、追加した使用研究が既に4項目使用のある AIAS-4 に付くこと。`git diff --check` は通過した。`data.js` に `researchgate.net` はない。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.114.0 実データ版`、件数は `136概念・186尺度・個別使用研究223件`、フッタは `v0.114.0`。コンソールエラーはなかった。キーワード「AIAS-21」は2件（AIAS-4 の注記が AIAS-21 を指すためと、AIAS-21 本体）。AIAS-21 のカードは21項目、利用条件未確認、使用先行研究の表示はない。詳細は最終確認日 2026-10-29、7件法、全体 α .964、規準値の最大136、DOI `10.1080/10494820.2019.1674887`。項目欄は「掲載していません」で、項目本文の列挙はない。原文リンクは DOI のみ。概念一覧の「AI不安」は1概念、1尺度。判断ガイドは1択で、AIAS-21 と、一般的態度・TAI とは合算しない、と出る。関連概念は AIに対する一般的態度、AIの脅威知覚、技術レディネス。一般的態度と脅威知覚の詳細には AI不安 が出る。技術レディネスの詳細には出ない。キーワード「AIAS-4」のカードは使用先行研究3件。詳細の旗艦は10件法（1＝Not at all～10＝Completely Agree）のまま。Talik、Türk、Adiyan の3件があり、リンクは DOI `10.1371/journal.pone.0342317`、`10.1186/s40359-025-03559-2`、`10.1186/s12909-026-09506-y`。ResearchGate のリンクはない。注記の「ResearchGate の URL は使わない」は従来の文で、URL ではない。空の検索語「存在しない尺度zzzz」は該当なし。「登録尺度そのものが3・4項目」に AIAS-4 は入り、AIAS-21 は入らない。利用条件「未確認」で AIAS-21 は1件。検索結果の CSV と JSON に AIAS-21 と DOI が出て、`items` は空。研究設計に AIAS-21 と AIAS-4 を入れると合計25項目（21+4）。ブラウザ内の保存は再読み込み後も2件、合計25項目のまま。幅390pxでは詳細ダイアログは `position: fixed`、幅352px、左19px、ページの横溢れなし。
