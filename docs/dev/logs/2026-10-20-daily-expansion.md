# v0.103.0 定時拡充（コーリング、QQS-9 と BAT-12 の使用研究）

日付: 2026-10-20

## 追加

- 概念 `calling`（コーリング（天職感） / Calling）と尺度 `dobrow-calling-12`（CS-12）を追加。Dobrow, S. R., & Tosti-Kharas, J.（2011）。Calling: The development of a scale measure。Personnel Psychology, 64(4), 1001–1049。DOI `10.1111/j.1744-6570.2011.01234.x`。Crossref のオンライン公開は 2011-11-20。Wiley の通常著作権（CC ではない）。`sourceUrl` は DOI のみ
- 原典の呼称は calling scale。レコードの略称は CS-12（項目数を示す）。`versionType` は `original`。`parentScaleId` は空。`recordStatus` は `verified-metadata`
- 定義は「a consuming, meaningful passion people experience toward a domain」（ある領域に向けて人が経験する、没頭的で意味のある情熱）。原典 Abstract と定義節
- 12項目・単一次元。EFA と CFA で一次元を支持。7件法（1＝strongly disagree～7＝strongly agree）。`reverseItems` は空（付録の12項目に逆転の指定なし）。項目は対象領域（music／art／business／being a manager 等）を書き換えて使う設計。項目本文は転載しない
- 開発標本（Phase 2）は計1,500名・2,278回の調査。S1 米国の夏期音楽プログラムの高校生（7年4波、N=590）、S2 芸術系（N=98）、S3 米東海岸3大学のビジネス学生（571名）、S4 フルタイム管理職（部下3名以上、241名）
- 信頼性（Results「Reliability」）は S1 .88、S2 .90、S3 .90、S4 .94（S4 は Table 5 対角 .94 と一致）。旗艦の代表 α は範囲 .88–.94。内訳は `psychometricEvidence` の1件。CFA は CFI .87–.91、SRMR .06–.07、負荷 .43–.86。再検査（S1）は6週 r=.83、3.5年 r=.41、7年 r=.38。S4 でワーク・エンゲイジメント r=.58、職務関与 r=.68（Table 5）
- 版元本文（VOR）は有料で未開封。値は LSE Research Online の著者受理稿（eprint 50023、Accepted for publication 表記）で確認した。頁番号は受理稿の頁で、VOR の頁ではない。受理稿の URL は載せない。実施言語は確認した値にないため未確認
- `usagePermission` は `research-use`。著者サイト（https://shasadobrow.com/calling-scale/）は、研究目的で使用または改変できること、Dobrow & Tosti-Kharas（2011）の引用を記載する。商用利用の条件は未確認。`itemPublicationStatus` は `source-open`（原典付録と著者サイトに12項目が公開）。`items` は空
- `psychometricEvidence` は開発論文の1件。`usageStudies` は空。開発論文は使用研究に入れない
- 日本語は `unconfirmed`。`japaneseStatusNote` に、柏木（2014）経営行動科学 27(3), 209–224（DOI 10.5651/jaas.27.209）が Dobrow & Tosti-Kharas から7項目を逆翻訳つきで和訳して使用（日本の学部生275名、7件法、α=0.842）したことだけを書く。部分項目のため12項目の日本語版検証・使用例にはしない
- `relatedConcepts` は存在する `meaningful-work`、`work-engagement`、`workaholism`、`flow`、`organizational-commitment`、`job-satisfaction`。2026-10-07 の判断どおり、既存概念への逆リンクは足さない。`typicalAntecedents` と `typicalOutcomes` は空。decisionGuide は CS-12 の1択。選択ガイドは65から66。関係レコードは追加しない
- 既存 `galanis-qqs-9` に `usageStudies` を1件追加。それまで空。Xu, Yu, Fan, Wu, Wang, Zou, Hu, & Zhang（2025）。Frontiers in Psychology, 16, 1616354。DOI `10.3389/fpsyg.2025.1616354`（2025-09-03、CC BY 4.0、PMC12442560）。フル9項目。湖北省の貧困脱却モデル県の全11プライマリ・ヘルスケア機関、有効520名。本文は全項目を同意形式の5件法と記載する。原版では2項目が頻度形式であり、その変更は adaptation。旗艦の responseFormat は変えない。中国語版 QQS（Zhang ら 2025）は引用していない。この標本の Cronbach's α=0.787。Table 2 対角の 0.746 は AVE で α ではない。考察のカットオフ 2.06 は採用しない。実施言語・翻訳手続きは本文に記載がない。notes の「usageStudies は空」は件数に合わせて直した。旗艦の項目数・回答形式・α・利用条件・日本語状態は変えていない
- 既存 `hadzibajramovic-bat-12` に `usageStudies` を1件追加。それまで空。Kleine, Kohnen, Campione, & Busse（2026）。BMC Nursing, 25, 569。DOI `10.1186/s12912-026-04953-w`（2026-06-29、Open access、CC BY、PMC13317338）。フル12項目。Magnet4Europe ドイツ支部の急性期病院18施設の登録看護師、全項目回答1,502名。この標本の Cronbach's α=0.90。本文に回答形式と BAT の使用言語の記載はない。旗艦の responseFormat・usagePermission・日本語状態は変えていない。開発論文の PSI は書き換えていない。開発者3名は著者に入っていない。Magnet4Europe の謝辞に Schaufeli と De Witte が載る。notes の「使用研究は空」は件数に合わせて直した
- 概念130、尺度178、使用研究205、選択ガイド66、関係16。版は v0.102.0 から v0.103.0。日本語の検証済みは24のまま。関連版は14のまま。未確認は108から109。日本語使用例は17のまま。登録3・4項目は29のまま。使用研究側の3・4項目は27のまま

## 見送り

- BAT-12 の Pederson & Slowiak（2026）。BAT-12 の出典に de Beer らを引用し、Hadžibajramović ら（2022）の12項目との同一性を照合できない。Izdebski ら（2023）と同じ扱いで HOLD。登録しない
- QQS の Galanis チーム後続研究。独立著者を優先し、今回の usage にはしない
- 新規候補 EmpRes、SPOQ、FoMO、WLB。原典本文を確認できず。登録しない
- DUBS。受理稿にたどり着けず。登録しない
- QQS-9 の日本語は `unconfirmed` のまま。J-STAGE で「quiet quitting」「静かな退職」「クワイエット・クイッティング」を検索し、尺度の検証・使用は見つからず
- QQS-9 の翻訳版の数は書き換えない。既存の japaneseStatusNote は言語名を列挙しており、ポルトガル語も既に入っている。「8言語」のような件数の記述はない。2026-10-20 の著者サイト確認は検索結果の抜粋で、直接アクセスはタイムアウトだったため、迷った箇所は触らない
- BAT-12 の Kleine らと同じ論文の他の尺度（エンゲージング・リーダーシップ等）は登録しない
- 既存 HOLD は変更していない

## 重複確認

作業開始時の tip は `ca9ac22`（v0.102.0、PR #56。129概念・177尺度・203使用研究・65選択ガイド・16関係。日本語は検証済み24・関連版14・未確認108）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の文字列で検索した。`10.1111/j.1744-6570.2011.01234.x`、`10.3389/fpsyg.2025.1616354`、`10.1186/s12912-026-04953-w`、`calling`、`dobrow-calling-12`、`CS-12`、Xu、Kleine。追加対象は未登録だった。

既存 ID は、概念 `meaningful-work`、`work-engagement`、`workaholism`、`flow`、`organizational-commitment`、`job-satisfaction`、尺度 `galanis-qqs-9`、尺度 `hadzibajramovic-bat-12` を確認して使った。逆リンクは足していない。

## 根拠として確認したこと

- 数値は 2026-10-20 の作業指示に書かれた値だけを使った。指示にない係数・人数・言語・アンカーは作っていない
- CS-12 の書誌、12項目・単一次元、7件法、逆転なし、開発標本、α の範囲と内訳、CFA、再検査、S4 の相関、著者サイトの利用条件、受理稿での確認範囲、項目非転載、開発論文を使用研究にしないことは指示の範囲
- 実施言語は確認した値にない。英語とも断定しない
- Xu らの同意形式5件法は adaptation。旗艦の `responseFormat` は変えない。0.746 は AVE。カットオフ 2.06 は採用しない
- Kleine らの α=0.90 はこの使用研究の値であり、BAT-12 開発論文の PSI に置き換えない。旗艦の `responseFormat` は変えない
- URL は DOI と出版社ページ。第三者 PDF サイトの URL は保存しない。LSE Research Online の受理稿 URL も保存せず、eprint 50023 とだけ書く

## 採否

- 項目本文は転載しない。CS-12 の `itemPublicationStatus` は `source-open`（原典付録と著者サイトに12項目がある）。`items` は空
- 開発論文（Dobrow & Tosti-Kharas 2011）は `usageStudies` に入れない
- `psychometricEvidence` は開発論文の1件。使用研究が空の尺度で測定根拠を分けると、カード要約が「複数環境・日本語での検証根拠あり」になる
- 選択ガイドは新概念内だけで1件増える。既存概念への逆リンクは足さない。関係レコードは追加しない
- 柏木（2014）の7項目は日本語の `usage-example` にも `validated` にもしない
- 中国の QQS 使用とドイツの BAT-12 使用は、日本語の `usage-example` にしない
- QQS-9 と BAT-12 の旗艦の項目数、回答形式、信頼性、利用条件、日本語状態は変えない

## 入れなかったもの

- CS-12、QQS-9、BAT-12 の項目本文
- CS-12 の実施言語の断定。商用利用の条件。VOR の頁番号。受理稿の URL
- 柏木（2014）を12項目の日本語検証・使用例にすること
- Xu らのカットオフ 2.06。Table 2 対角 0.746 を α にすること
- Kleine らの α で BAT-12 の PSI を書き換えること。同じ論文の他尺度
- QQS-9 の翻訳版一覧の件数の書き換え
- Pederson & Slowiak（2026）。Galanis チームの後続研究。EmpRes、SPOQ、FoMO、WLB。DUBS
- 既存 HOLD。CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3 の usage、RC-3 の usage、Price Consciousness 5、Brand Affect 3・OBE-4 の日本語、CX Scale 18 の第2 usage、Mitchell–Ambrose 5、Brand Hate-18 の usage、PSI-18、Frontiers 2020 の JIS、LEB-10 の Khan、Voice-6 の Chen、LAWS の Ayase／Nagano、観光ドメイン、Kantur & Iseri-Say（2015）、BAT-12 の Izdebski ら（2023）
- `app.js`、`index.html`、`styles.css`、`relations.js`。`.wrangler/` などの生成物。`HANDOFF.md`、`AGENTS.md`、`docs/decisions.md`（判断の新設なし）

## 次回候補

- 引き続き HOLD の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、Brand Affect 3／OBE-4 の日本語、Mitchell–Ambrose 5、CX Scale 18 の第2使用、Brand Hate-18 の使用、Frontiers 2020 の JIS、LEB-10 の Khan、Voice-6 の Chen、PSI-18、LAWS の Ayase／Nagano
- Pederson & Slowiak（2026）は、Hadžibajramović ら（2022）の12項目と同一セットか本文で確定できるまで usage にしない
- EmpRes、SPOQ、FoMO、WLB は原典本文を確認できるまで登録しない。DUBS は受理稿にたどり着くまで登録しない
- CS-12 の独立した使用研究（開発論文以外、フル12項目）と、12項目の日本語版
- QQS-9 の、Galanis チーム以外の独立した使用研究

## 検証

`node --check data.js`、`node --check app.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check` は通過した。

`verify-data.mjs` の件数は、概念130、尺度178、使用研究205、選択ガイド66、関係16。登録版そのものが3・4項目は29。個別使用研究で3・4項目版を確認済みは27。日本語は検証済み24、言語的妥当性確認2、日本語使用例17、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認109。v0.102.0 からの想定（概念130、尺度178、使用研究205、選択ガイド66、関係16、未確認109、検証済み24、関連版14、日本語使用例17、登録3・4項目29、使用研究側3・4項目27）と一致した。

ローカルの `index.html` をブラウザで開いた確認では、ヘッダは `v0.103.0 実データ版`、件数は `130概念・178尺度・個別使用研究205件`。キーワード「コーリング」で CS-12 が1件出る。詳細は12項目・7件法・研究利用可・日本語未確認・使用研究なしで、項目本文は載らない。概念一覧の「コーリング」は1概念。QQS-9 の詳細に Xu ら（α=0.787）が出る。BAT-12 の詳細に Kleine ら（α=0.90）が出て、開発論文の PSI の記述も残る。比較に CS-12・QQS-9・BAT-12 を入れると合計33項目。設計アシスタントの概念検索にコーリングが出る。幅390pxでも CS-12 のカードが出る。

`data.js` を読み込んだ確認では、`meta.version` は `0.103.0`、`meta.updated` は `2026-10-20`、`meta.scope` は `130概念・178尺度`。`dobrow-calling-12` は `itemPublicationStatus` が `source-open`、`items` は空、`usageStudies` は空、`psychometricEvidence` は1件、`reverseItems` は空、`japaneseVersionStatus` は `unconfirmed`、`usagePermission` は `research-use`、`language` は未確認。`calling` への逆リンクはない。`galanis-qqs-9` の旗艦は5件法・9項目・`research-use`・`unconfirmed`・`source-open`・`verifiedAt` `2026-10-19` のまま、usage は DOI `10.3389/fpsyg.2025.1616354` の1件。`hadzibajramovic-bat-12` の旗艦は5件法の頻度・12項目・`open`・`unconfirmed`・`not-published`・`verifiedAt` `2026-10-17`・親 `schaufeli-bat-23` のまま、usage は DOI `10.1186/s12912-026-04953-w` の1件。
