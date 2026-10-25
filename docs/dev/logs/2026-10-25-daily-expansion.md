# v0.109.0 定時拡充（ATAI、GAAIS と UWES-9 の使用研究）

日付: 2026-10-25

## 追加

- 既存概念 `attitudes-toward-ai` に尺度 `sindermann-atai-5`（ATAI）を追加。新概念は作っていない。Sindermann, C., Sha, P., Zhou, M., Wernicke, J., Schmitt, H. S., Li, M., Sariyska, R., Stavrou, M., Becker, B., & Montag, C.（2021）。Assessing the Attitude Towards Artificial Intelligence: Introduction of a Short Measure in German, Chinese, and English Language。KI – Künstliche Intelligenz, 35(1), 109–118。DOI `10.1007/s13218-020-00689-0`。Crossref で著者・題名・巻号頁が一致。オンライン公開 2020-09-23、印刷 2021-03。登録年は印刷年。Crossref ライセンスは CC BY 4.0、Open Access（Projekt DEAL）。`sourceUrl` は DOI のみ
- 呼称は Attitude Towards Artificial Intelligence Scale。略称は ATAI。`versionType` は `original`。`parentScaleId` は空。`recordStatus` は `verified-metadata`。`verifiedAt` は 2026-10-25。5項目・2因子。Acceptance（受容）は項目02, 04。Fear（恐れ）は項目01, 03, 05。両因子は負の相関。項目はドイツ語で作成し、中国語・英語へ翻訳・逆翻訳（独・中・英の3言語版を同時開発）。言語は German / Chinese / English。対象は主に大学生・若年成人
- 11件法（0＝strongly disagree～10＝strongly agree）。採点（合計か平均か）は本文に明記なし。推測しない。逆転の明示はない。Fear は別下位尺度として扱う。`reverseItems` は空。PCA（oblimin）で2成分（固有値 独 2.26/1.06、中 2.38/1.20、英 2.31/1.11）、その後 CFA
- 開発標本はドイツ N=461（男116・女345、平均22.31歳、91%学生、Ulm）、中国 N=413（男268・女145、平均21.19歳、89%学生、UESTC 成都と北京建築大学）、英国 N=84（男19・女65、平均25.21歳、82%学生、Goldsmiths）。オンライン（SurveyCoder）。倫理は Ulm 大学・UESTC（Goldsmiths は別申請なし）
- α（Acceptance / Fear）は独 .65 / .66、中 .73 / .61、英 .64 / .65。CFA は独 CFI .976、TLI .940、RMSEA .075、SRMR .032。中 CFI .870、TLI .676、RMSEA .202、SRMR .079。英 CFI .933、TLI .833、RMSEA .127、SRMR .059。項目05（AIによる失業）の負荷は中 .23、独 .42、英 .29。著者は標本特性に応じて項目05 の採否を判断するよう述べる。配置不変・負荷等値は成立し、スカラー不変は不成立（国間平均比較は注意）。妥当性は、Acceptance が特定 AI 製品（自動運転車・Siri・Alexa・Pepper・Erica）の利用意向と正、Fear が負の偏順位相関（独・中）。`psychometricEvidence` は開発論文の1件。`url` は DOI のみ
- `usagePermission` は `unknown`。論文は CC BY 4.0 だが、尺度の利用許諾の明記はない。`itemPublicationStatus` は `source-open`。原典 Table 1 に独中英の項目があるが転載しない。`items` は空。開発論文は使用研究に入れない。`usageStudies` は空
- 日本語は `unconfirmed`。OSF に日本語版開発の登録（DOI `10.17605/osf.io/9u7et`）はあるが、査読済みの検証結果は未確認のため `japaneseEvidence` には入れない。URL は載せない。J-ATTARI-12（Fujikawa ら 2026, JMIR Med Educ）は別尺度（ATTARI-12）であり、ATAI の日本語版ではない
- `attitudes-toward-ai` の decisionGuide.choices に ATAI の choice を1つ追加した。5項目の短い測定が必要なとき。reason に、信頼性 α は .61–.73 と低め、項目05 の扱いに注意、GAAIS とは合算しない、と書いた。caution の「Sindermann らの ATAI … は別尺度で未登録」は、登録済みで GAAIS とは合算しない、に最小限修正した。GAAIS の実施言語についての文は、ATAI には3言語の記載があるため「GAAIS の実施言語」に限定した。GAAIS-10 と Kieslich らの TAI は未登録のまま。概念の references に ATAI の DOI を足した。選択ガイド数は増えない。関係レコードは追加しない
- 既存 `schepman-rodway-gaais-20` に `usageStudies` を1件追加。それまで空。旗艦の項目平均採点、5件法、`verifiedAt`（2026-10-24）、`notes`、`scoring`、`japaneseStatusNote` は変えていない
- Tuncer, G. Z., & Tuncer, M.（2024）。Investigation of nurses’ general attitudes toward artificial intelligence and their perceptions of ChatGPT usage and influencing factors。Digital Health, 10, 20552076241277025。DOI `10.1177/20552076241277025`（Crossref 一致、オンライン 2024-08-25、CC BY-NC 4.0、PMC11348479）。`url` は DOI のみ。PMC の URL は載せない。フル20項目（肯定12・否定8）。Kaya ら（2022）のトルコ語版。`language` は Turkish。トルコの看護師288名（Instagram の看護系アカウントのフォロワーから便宜抽出。306名がリンクをクリック、288名が回答完了）。2023年12月～2024年3月、Google Forms。学士以上で就業中の看護師。女性90.3%、平均年齢 29.4（SD 6.6）。5件法（1＝strongly disagree～5＝strongly agree）。否定項目は逆転すると記載（総得点範囲 20–100）。本文に「否定的態度下位尺度が低いほど肯定的」との記述もあり、方向の記述が一貫しない点は adaptation に記した。合計得点（GAAIS-p 41.89±11.24、GAAIS-n 25.64±6.91、全体 67.54±13.14）。旗艦の項目平均は変えない。この標本の α は肯定 .96、否定 .91、全体 .90。本文の .82/.84 は Kaya ら（2022）の参照値で、この標本の値にしない。AI プログラム使用者は非使用者より全体・肯定得点が高い（全体 73.81 vs 65.13）。大学院卒は全体得点が高い。倫理は大学の非介入研究倫理委員会。トルコ語版の著者から書面許諾。開発者（Schepman・Rodway）は著者に含まれない。使用研究の `verifiedAt` は 2026-10-25
- GAAIS の `applicationEvidence` の summary にあった「Sindermann らの ATAI … は未登録」は、詳細画面の「実際の研究での使われ方」に残るため、caution と同じ趣旨の一文だけ直した。`notes` は指示どおり変えていない。そのため notes には、v0.108.0 時点の「usageStudies は空」「ATAI は別尺度で未登録」が残る
- 既存 `uwes-9` に `usageStudies` を1件追加。それまで2件（Adi ら 2024、Fukuzaki & Iwata 2023）。旗艦の7件法頻度（0＝全くない～6＝いつも）、`japaneseVersionStatus`（`validated`）、`verifiedAt`（2026-09-11）、既存 notes は変えていない
- Sun, N., Liang, Y., Ni, Y., Zhang, R., Xing, Y., Bie, F., Song, D., & Cai, L.（2026）。Longitudinal Associations Among Workplace Social Capital, Career Calling and Work Engagement Among Nurses: A Three-Wave Cross-Lagged Panel Study。Healthcare, 14(20), 3514。DOI `10.3390/healthcare14203514`（Crossref 一致、公開 2026-10-19、CC BY 4.0）。v0.108.0 で WSC-8 と CS-12 の使用研究として登録済みの同じ論文。既存の WSC-8・CS-12 側エントリは変えていない。`url` は DOI。`fullTextUrl` は、同じ論文の既存エントリと同じ MDPI の記事ページ
- 中国河北省保定市の三級総合病院1施設（55以上の部署）。3時点（2024年3月・9月・2025年3月）のオンライン質問紙。ベースライン看護師470名（T2 461、T3 462）。女性96.6%、平均年齢 32.63（SD 6.65）。フル9項目（活力・熱意・没頭）。Schaufeli ら（2006）の UWES-9。5件法の同意形式（1＝completely disagree～5＝completely agree）、項目平均。原版の7件法頻度（0–6）からの変更は adaptation。著者も比較可能性の限界として言及。旗艦の回答形式は変えない。実施言語は本文に明記がなく、中国語版の出典も明記がない。`language` は「本文に明記なし」。推測しない
- この標本の α は T1 .956、T2 .935、T3 .948。標準化負荷 .766–.856。厳密な縦断的測定不変性を確認。T3 の WE 単独モデルは RMSEA .105 と著者が注記。T1 WSC→T2 WE β=0.227（p<.001）、T2→T3 は非有意。コーリング↔WE は両方向で有意（CC→WE β=0.213, 0.462；WE→CC β=0.215, 0.218）。WE→後続 WSC β=0.533, 0.276。倫理は Baoding No.4 Central Hospital（No. 2024007）。開発者（Schaufeli・Bakker・Salanova）は著者に含まれない。使用研究の `verifiedAt` は 2026-10-25
- 概念134、尺度183、使用研究217、選択ガイド70、関係16。版は v0.108.0 から v0.109.0。`meta.updated` は 2026-10-25。`meta.scope` は `134概念・183尺度`。日本語の検証済みは26のまま。関連版は14のまま。未確認は110から111。日本語使用例は18のまま。登録3・4項目は29のまま。使用研究側の3・4項目は27のまま

## 見送り

- GAAIS の Atalla ら（2024, BMC Nursing、DOI `10.1186/s12912-024-02143-0`）。「研究者が改変した」と記載され、改変内容が不明で、全体 α のみのため今回は見送り
- ハンガリー語版（Rózsa ら 2025, Frontiers in Psychology、DOI `10.3389/fpsyg.2025.1703750`）。検証研究なので使用研究にしない
- ATAI の日本語版。OSF 登録（DOI `10.17605/osf.io/9u7et`）のみで、査読済みの検証結果は未確認。`japaneseEvidence` には入れない。URL は載せない
- J-ATTARI-12（Fujikawa ら 2026, JMIR Med Educ）。別尺度（ATTARI-12）であり、ATAI の日本語版ではない
- GAAIS-10、Kieslich らの TAI は未登録のまま
- 既存 HOLD と前回見送り分は変更していない。CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、EmpRes、CS-12 の日本語版、ほか current-state.md 記載分

## 重複確認

作業開始時の tip は `32ea139`（v0.108.0。134概念・182尺度・215使用研究・70選択ガイド・16関係）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の文字列で検索した。`10.1007/s13218-020-00689-0`、`10.1177/20552076241277025`、`sindermann-atai`、`9u7et`、`J-ATTARI`。追加対象は未登録だった。Sun ら（2026）の DOI `10.3390/healthcare14203514` は WSC-8 と CS-12 に既登録で、UWES-9 にはなかった。尺度をまたぐ同一 DOI は検証が許す。

既存 ID は、概念 `attitudes-toward-ai`、尺度 `schepman-rodway-gaais-20`、`uwes-9` を確認して使った。逆リンクは足していない。関係レコードは追加していない。

## 根拠として確認したこと

- 数値は指定された値だけを使った。指定にない係数・人数・言語・アンカー・採点方法は作っていない
- ATAI の書誌、5項目、2因子の項目番号、11件法、3言語の同時開発、PCA の固有値、α、CFA、項目05 の負荷、測定不変性、開発標本、倫理、利用条件、項目非転載、開発論文を使用研究にしないことは指定の範囲
- Tuncer らの書誌、20項目、トルコ語版、5件法、合計 20–100、方向の記述の不一致、この標本の α、参照値 .82/.84、得点、結果の要点、倫理、書面許諾は指定の範囲。旗艦の項目平均は変えていない
- Sun らの UWES-9 は、同じ論文の既存 WSC-8・CS-12 エントリを変えずに追加した。実施言語は本文に明記がない。7件法頻度から5件法同意への変更は adaptation。旗艦の回答形式と `japaneseVersionStatus` は変えていない
- URL は DOI。Sun らの `fullTextUrl` だけ、同じ論文の既存エントリが既に使っている MDPI の記事ページを再利用した。ResearchGate、第三者 PDF、PMC の URL は使っていない。OSF の URL は載せていない
- ヘッダの版表示は `app.js` が `data.js` の `meta.version` を読む。スキーマは変えていないため、`app.js` と `index.html` は変更していない

## 採否

- 項目本文は転載しない。ATAI の `itemPublicationStatus` は `source-open`（原典 Table 1 に項目がある。論文は CC BY 4.0）。`items` は空
- 開発論文（Sindermann ら 2021）は `usageStudies` に入れない。OSF の日本語版登録は `japaneseEvidence` に入れない
- Tuncer らは GAAIS の開発者ではないので使用研究に入れる。合計得点と、否定下位尺度の方向の記述の不一致は adaptation。旗艦の scoring は変えない
- Sun らは UWES-9 の開発者ではないので使用研究に入れる。回答形式の変更は adaptation。旗艦の responseFormat は変えない。中国語版の出典が本文にないので、言語は「本文に明記なし」
- 選択ガイドは同じ概念内の choice 追加だけで、概念数は増えない。関係レコードは追加しない
- GAAIS の旗艦の項目数、回答形式、信頼性、利用条件、日本語状態、`verifiedAt`、`notes`、`scoring`、`japaneseStatusNote` は変えない。`applicationEvidence` の「未登録」の一文だけ直した
- UWES-9 の旗艦の項目数、回答形式、日本語状態、`verifiedAt`、既存 notes は変えない。WSC-8 と CS-12 の既存エントリ（「同論文の UWES-9 は登録しない」を含む）は変えない
- 追加した使用研究と ATAI の `verifiedAt` は 2026-10-25

## 入れなかったもの

- ATAI、GAAIS、UWES-9 の項目本文
- ATAI の採点（合計か平均か）の推測。OSF と PMC の URL
- Tuncer らの .82/.84 をこの標本の α にすること。旗艦の項目平均を合計採点へ書き換えること
- Sun らの実施言語の断定。UWES-9 の旗艦の7件法を5件法へ書き換えること
- GAAIS の既存 notes・scoring・japaneseStatusNote の書き換え。notes に残る「使用研究は空」「ATAI は未登録」は、この指示のため残した
- GAAIS-10、TAI、Atalla ら、Rózsa らのハンガリー語版
- 既存 HOLD
- `app.js`、`index.html`、`styles.css`、`relations.js`、`verify-data.mjs`、`AGENTS.md`、`docs/decisions.md`。`.wrangler/` などの生成物

## 次回候補

- GAAIS の、改変内容が分かるフル20項目の独立使用。Atalla ら（2024）は改変内容が不明なまま見送り
- GAAIS-J の19項目を原版20項目と混ぜないこと
- ATAI の査読済み日本語版。今回は OSF 登録のみ
- GAAIS-10 と Kieslich らの TAI
- EmpRes は本文が確認できるまで HOLD
- 引き続き HOLD の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5
- GAAIS の notes に残る v0.108.0 時点の「使用研究は空」「ATAI は未登録」。旗艦 notes を変えない指示のため今回は残した

## 検証

`node --check data.js`、`node --check app.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check` は通過した。`package.json` はリポジトリにない。検証スクリプトはリポジトリルートの `verify-data.mjs`。

`verify-data.mjs` の件数は、概念134、尺度183、使用研究217、選択ガイド70、関係16。登録版そのものが3・4項目は29。個別使用研究で3・4項目版を確認済みは27。日本語は検証済み26、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認111。v0.108.0 からの想定（概念134、尺度183、使用研究217、選択ガイド70、関係16、検証済み26、関連版14、未確認111、日本語使用例18、登録3・4項目29、使用研究側3・4項目27）と一致した。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.109.0 実データ版`、件数は `134概念・183尺度・個別使用研究217件`、フッタは `v0.109.0`。コンソールエラーはなかった。キーワード「ATAI」は2件（ATAI と、applicationEvidence に ATAI を書いた GAAIS）。ATAI の詳細は5項目、11件法、利用条件未確認、日本語は未確認、使用先行研究は未登録、最終確認日 2026-10-25、原文リンクは DOI `10.1007/s13218-020-00689-0`。`itemPublicationStatus` が `source-open` のため、項目欄は「原著で公開」で、項目本文の列挙はない。キーワード「GAAIS」は2件（GAAIS と、本文に GAAIS と書く ATAI）。GAAIS の詳細は旗艦の5件法の同意形式、項目平均、最終確認日 2026-10-24、使用先行研究1件、リンクは Tuncer らの DOI `10.1177/20552076241277025`、α は旗艦の肯定 .88・否定 .83。項目欄は「掲載していません」。キーワード「UWES-9」の詳細は使用先行研究3件、旗艦の7件法（0＝全くない～6＝いつも）、最終確認日 2026-09-11、日本語は検証済み。Sun らのリンクは DOI `10.3390/healthcare14203514`。この使用研究の言語は「本文に明記なし」、回答は5件法の同意形式。空の検索語「存在しない尺度zzzz」は該当なし。概念一覧の「一般的態度」は1概念。概念詳細に GAAIS と ATAI の2択があり、caution は ATAI を登録済みと書く。設計アシスタントの概念検索に「AIに対する一般的態度」が出る。比較に ATAI、GAAIS、UWES-9 を入れると合計34項目（5+20+9）。研究設計の採用根拠に ATAI の原典 DOI、GAAIS の Tuncer ら、UWES-9 の Sun らが出る。検索結果の CSV／JSON に ATAI が出る。研究設計の CSV／JSON と先行研究一覧 CSV に DOI `10.1007/s13218-020-00689-0`、`10.1177/20552076241277025`、`10.3390/healthcare14203514` が出る。researchgate.net は出力にない。幅390pxでは ATAI のカード幅358px、左16px、ページの横溢れなし。
