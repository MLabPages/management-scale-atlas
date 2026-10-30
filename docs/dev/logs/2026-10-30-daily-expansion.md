# v0.115.0 定時拡充（AIAS-4 と AIAS-21 の使用研究）

日付: 2026-10-30

## 追加

- 新概念・新尺度・関係レコード・選択ガイドは追加していない。`grassini-aias-4` の `usageStudies` を1件追加した（3件から4件）。`wang-wang-aias-21` の `usageStudies` に初の1件を追加した（0件から1件）。概念136、尺度186、使用研究225、選択ガイド72、関係16。版は v0.114.0 から v0.115.0。`meta.updated` は 2026-10-30。`meta.scope` は `136概念・186尺度` のまま
- AIAS-4 の使用研究は3件から4件。既存の Talik（2026）、Türk ら（2025）、Adiyan と Lule（2026）の後ろに追加した。尺度の `verifiedAt` は 2026-10-30。心理測定根拠と Talik（2026）の `verifiedAt` は 2026-10-28 のまま。Türk ら（2025）と Adiyan と Lule（2026）の `verifiedAt` は 2026-10-29 のまま。notes の使用研究件数は4件に合わせ、Semerci Çakmak と Yılmaz（2026）は Arslan らのトルコ語版の使用で検証研究ではない旨を、既存の Türk・Adiyan の文に続けて足した。旗艦の採点（合計か平均かは開発論文本文では未確認）、回答形式、`usagePermission`、項目数は変えていない
- Semerci Çakmak, V., & Yılmaz, C.（2026）。Artificial Intelligence Literacy Levels and Attitudes Toward Artificial Intelligence Technology Among Intensive Care Nurses: A Cross‐Sectional Study。Journal of Evaluation in Clinical Practice, 32(4), e70498。DOI `10.1111/jep.70498`。`url` は DOI のみ。`fullTextUrl` は付けない。`sourceLocator` は Methods 2.3.3、Tables 3–4。`verifiedAt` は 2026-10-30。Crossref で著者 Vahide Semerci Çakmak・Cansu Yılmaz、オンライン 2026-06-16、CC BY-NC 4.0 が一致
- 集中治療室看護師のAIリテラシー（AILS）とAIへの態度の関連（横断研究）。トルコ中部黒海地方の2病院（公立1・教育研究病院1）の ICU 看護師 N=280（母集団321の87%、ICU 経験6か月以上、平均 33.47±7.12歳、女性63.9%、学士以上72.1%、96.4%がAI研修なし）。2025-06-01〜07-15 に対面で収集。4項目・10件法（1＝Strongly Disagree〜10＝Strongly Agree）。言語はトルコ語。Arslan・Esin・Ayyıldız のトルコ語版を使用。本文は 'Arslan et al. (2023)' と記すが、引用文献20は BMC Public Health 25, 1244（2025）、DOI `10.1186/s12889-025-22507-8` で年が食い違う（記録のみ。この DOI は使用研究の `doi` にはしない）。4項目の平均点で採点。両端の言葉は原版（Not at all〜Completely Agree）と異なる。α = .97（本標本。.93 は Arslan 版の参照値）。M 6.26、SD 2.74（1–10）。AILS（M 39.87±6.69、α .77）と r = .72（p<.05）。AIAS-4 を目的変数とする回帰は F = 100.383、R² = .647（調整 .640）、AILS β = .485、独身 β = .237、学士以上 β = .184、男性 β = .074、36歳以上 β = −.086。若い・男性・独身・高学歴の看護師で得点が高い。開発者 Grassini は著者に含まれない。開発論文・検証研究ではない。項目本文は転載しない
- AIAS-21 の使用研究は0件から1件。notes の「usageStudies は空。」は「使用研究は Wu と Wee（2026、中国の大学教員、中国語訳）の1件。」に直した。`applicationEvidence` の summary、caution、`japaneseStatusNote` に「使用研究なし」の記述はなかった。summary は「開発論文は使用研究にしない」のままで、検証研究を使用研究に入れない旨もそのまま残した。尺度の `verifiedAt` は 2026-10-30。心理測定根拠の `verifiedAt` は 2026-10-29 のまま。旗艦の採点、回答形式、規準値、`usagePermission`（`unknown`）、言語欄は変えていない
- Wu, H., & Wee, E. H.（2026）。AI self-efficacy and anxiety among university teachers。Scientific Reports, 16, 23881。DOI `10.1038/s41598-026-59141-2`。`url` は DOI のみ。`fullTextUrl` は付けない。`sourceLocator` は Methods（Participants・AIAS）、Tables 2・5。`verifiedAt` は 2026-10-30。Crossref で著者 Houyu Wu・Eng Hoe Wee、公開 2026-06-22、CC BY 4.0 が一致
- 大学教員のAI自己効力感（AISE、Wang & Chuang 2024）とAI不安の関連。中国四川省の公立師範大学の専任教員 N=350（配布370、教員母集団1,381、女性197・男性153、平均 41.90±8.42歳）。2025年9〜11月に収集。予備調査 n=120。21項目・7件法（Likert型）。言語は中国語。著者らが原著者の許諾を得て中国語に翻訳し、項目は改変なし。4次元（学習・雇用代替・社会技術的盲目・AI構成）をそのまま使用。予備調査（n=120）で α .88、KMO .84、4因子で分散の約62.5%。回帰では平均点を使用（記述統計は合計点）。本標本の α は全体 .85、学習 .79、雇用代替 .84、社会技術的盲目 .88、AI構成 .79。合計点 M 91.29、SD 17.92（範囲 35–131）。AISE 合計と r = −.59（p<.01）、年齢と r = −.16（学習は −.28）。開発者 Wang・Wang は著者に含まれない。開発論文・検証研究ではない。項目本文は転載しない
- 日本語の検証済みは26のまま。関連版は14のまま。未確認は114のまま。日本語使用例は18のまま。言語的妥当性確認は2、翻訳・因子構造等の検討は5、日本語で独自開発は6、開発論文内の日本語検証は1のまま。登録版そのものが3・4項目の尺度は30のまま。使用研究側の3・4項目は28のまま（追加した AIAS-4 の使用研究は4項目だが、AIAS-4 は既に4項目の使用研究がある。AIAS-21 の追加は21項目）

## 見送り

- 新規概念の候補は全て HOLD。AAAW（AIへの態度、Park・Woo・Kim 2024、JOOP 97(3), 920–951、DOI `10.1111/joop.12502`。出版版は購読制でプレプリントのみ確認、出版版未確認）。SNAIL（AIリテラシー、Laupichler ら 2023、Computers in Human Behavior Reports 12, 100338、本文取得不可）。AISES（AI自己効力感、Wang & Chuang 2024、購読制）。DAI（AI依存、Morales-García ら 2024、Frontiers in Education、医学生標本で経営学の範囲か要判断）
- AIAS-4 Han 2026 は特定できず見送り
- AIAS-21 Liu ら 2025（BMC Nursing）は原典の年・α の引用に食い違いがあり見送り
- AIAS-21 のトルコ語16項目5件法版（Akkaya 版）使用研究は改変版のため見送り
- 既存 HOLD は変更していない。CSR-17、Aad-3、UTAUT-SI、UTAUT-FC、P–O fit-3、RC-3 usage、Price Consciousness 5、ATAI 日本語版 Hitsuwari & Takano 2025、テクノストレス Ragu-Nathan 2008、EmpRes

## 重複確認

作業開始時の tip は `f5c9669`（v0.114.0。136概念・186尺度・223使用研究・72選択ガイド・16関係）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の DOI で検索した。`10.1111/jep.70498`、`10.1038/s41598-026-59141-2`。追加前は未登録だった。既存 ID は尺度 `grassini-aias-4`、`wang-wang-aias-21`。関係レコードは追加していない。

## 根拠として確認したこと

- 数値と書誌は指定された文言だけを使った。指定にない係数、アンカー、採点方法は作っていない
- URL は DOI。`fullTextUrl` は付けていない。ResearchGate、第三者 PDF の URL は使っていない
- 使用研究のフィールド順は既存の Talik（2026）と同じ。`title`、`authors`、`year`、`context`、`sample`、`itemCount`、`responseFormat`、`language`、`adaptation`、`result`、`doi`、`url`、`sourceLocator`、`verifiedAt`
- Semerci Çakmak と Yılmaz（2026）の引用年の食い違い（本文の 2023 と、引用文献20の 2025・DOI `10.1186/s12889-025-22507-8`）は adaptation に記録しただけで、別尺度にはしていない
- ヘッダの版表示は `app.js` が `data.js` の `meta.version` を読む。スキーマは変えていないため、`app.js` と `index.html` は変更していない
- `docs/decisions.md`、`HANDOFF.md`、`AGENTS.md` は変えていない。件数だけが増える扱いは、使用研究の追加で概念数・尺度数が変わらない v0.111.0 と同じ

## 採否

- 項目本文は転載しない
- Semerci Çakmak と Yılmaz（2026）は開発者 Grassini が著者に含まれないので、AIAS-4 の使用研究に入れる。平均点採点と両端の言葉の違いは adaptation であり、旗艦の値は変えない。検証研究ではない
- Wu と Wee（2026）は開発者 Wang・Wang が著者に含まれないので、AIAS-21 の使用研究に入れる。中国語訳は項目改変なし。回帰の平均点と記述統計の合計点の違いは adaptation であり、旗艦の合計採点は変えない。検証研究ではない
- 日本語の状態は変えていない
- 他の尺度の旗艦値、relations、items、既存3件の usage 本文は変えていない。HOLD 中の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3 usage、Price Consciousness 5、ATAI 日本語版 Hitsuwari & Takano 2025、テクノストレス Ragu-Nathan 2008、EmpRes には触れていない

## 入れなかったもの

- Semerci Çakmak と Yılmaz（2026）、Wu と Wee（2026）の項目本文
- 新規概念（AAAW、SNAIL、AISES、DAI）、新規尺度、関係レコード、選択ガイド
- AIAS-4 Han 2026、AIAS-21 Liu ら 2025、Akkaya 版（トルコ語16項目5件法）
- 旗艦の採点、回答形式、`usagePermission`、項目数、AIAS-21 の規準値と言語欄
- ResearchGate と第三者 PDF の URL
- `app.js`、`index.html`、`styles.css`、`relations.js`、`verify-data.mjs`、`AGENTS.md`、`docs/decisions.md`、`HANDOFF.md`。`.wrangler/` などの生成物

## 次回候補

- AIAS-21 の、開発論文以外のフル21項目の独立使用。ドイツ語版・インドネシア語版・トルコ語版の検証研究、および Akkaya 版（16項目・5件法）は使用研究に混ぜない
- AIAS-21 の査読済み日本語版
- AIAS-4 の Han 2026 が特定できたときのフル4項目の独立使用。ペルー・スペイン語版は、検証研究として数値を載せる場合も使用研究にはしない
- HOLD の AAAW（出版版未確認）、SNAIL（本文取得不可）、AISES（購読制）、DAI（経営学の範囲か要判断）
- 引き続き HOLD の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3 usage、Price Consciousness 5、ATAI 日本語版 Hitsuwari & Takano 2025、テクノストレス Ragu-Nathan 2008、EmpRes

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test` は通過した。`package.json` はリポジトリにない。検証スクリプトはリポジトリルートの `verify-data.mjs` だけ。

`verify-data.mjs` の件数は、概念136、尺度186、使用研究225、選択ガイド72、関係16。登録版そのものが3・4項目は30。個別使用研究で3・4項目版を確認済みは28。日本語は検証済み26、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認114。想定（概念136、尺度186、使用研究225、選択ガイド72、関係16）と一致した。使用研究側の3・4項目が28のままである理由は、追加した4項目使用が既に4項目使用のある AIAS-4 に付くことと、AIAS-21 の追加が21項目であること。`git diff --check` は通過した。`data.js` に `researchgate.net` はない。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.115.0 実データ版`、件数は `136概念・186尺度・個別使用研究225件`、フッタは `v0.115.0`。コンソールエラーはなかった。キーワード「AIAS-4」のカードは使用先行研究4件。詳細の旗艦は10件法（1＝Not at all～10＝Completely Agree）のまま。最終確認日は 2026-10-30。Talik、Türk、Adiyan、Semerci Çakmak の4件があり、リンクは DOI `10.1371/journal.pone.0342317`、`10.1186/s40359-025-03559-2`、`10.1186/s12909-026-09506-y`、`10.1111/jep.70498`。言語フィルタ「トルコ語」は3件、対象フィルタ「集中治療」は Semerci Çakmak と Yılmaz（2026）の1件。キーワード「AIAS-21」は2件（AIAS-4 の注記が AIAS-21 を指すためと、AIAS-21 本体）。AIAS-21 のカードは21項目、利用条件未確認、使用先行研究1件。詳細は最終確認日 2026-10-30、7件法、全体 α .964、規準値の最大136、Wu と Wee（2026）のリンクは DOI `10.1038/s41598-026-59141-2`。AIAS-21 の項目欄は「掲載していません」で、項目本文の列挙はない。AIAS-4 は `source-open` のまま「原著で公開」で、項目本文の列挙はない。原文リンクは DOI のみ。ResearchGate のリンクはない。概念一覧の「AI不安」は1概念、1尺度。判断ガイドは、一般的態度・TAI とは合算しない、と出る。関連概念は AIに対する一般的態度、AIの脅威知覚、技術レディネス。一般的態度と脅威知覚の詳細には AI不安 が出る。技術レディネスの詳細には出ない。空の検索語「存在しない尺度zzzz」は該当なし。「登録尺度そのものが3・4項目」に AIAS-4 は入り、AIAS-21 は入らない。利用条件「未確認」で AIAS-21 は入り、AIAS-4 は入らない。検索結果の CSV と JSON に両尺度と新しい DOI が出て、`items` は空。研究設計に AIAS-21 と AIAS-4 を入れると合計25項目（21+4）。ブラウザ内の保存は再読み込み後も2件、合計25項目のまま。幅390pxでは詳細ダイアログは `position: fixed`、幅352px、左19px、ページの横溢れなし。
