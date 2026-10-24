# v0.108.0 定時拡充（AIに対する一般的態度、PLB-22・WSC-8・CS-12 の使用研究）

日付: 2026-10-24

## 追加

- 概念 `attitudes-toward-ai`（AIに対する一般的態度 / General Attitudes toward Artificial Intelligence）と尺度 `schepman-rodway-gaais-20`（GAAIS）を追加。Schepman, A., & Rodway, P.（2020）。Initial validation of the general attitudes towards Artificial Intelligence Scale。Computers in Human Behavior Reports, 1, 100014。DOI `10.1016/j.chbr.2020.100014`。Crossref の vor ライセンスは CC BY-NC-ND 4.0。`sourceUrl` は DOI のみ。PMC7231759 は notes に記し、URL にはしない
- 定義は、人工知能（AI）一般に対する肯定的・否定的な評価的態度。特定システムへの信念（知覚有用性など）や、特性的な技術受容準備性とは区別する。分野は技術レディネスと同じ「技術受容・情報システム」。`versionType` は `original`。`parentScaleId` は空。`recordStatus` は `verified-metadata`。`verifiedAt` は 2026-10-24。実施言語は本文に明記がない。言語は推測しない
- 20項目・2次元（肯定的態度 12項目、否定的態度 8項目）。5件法の同意形式（strongly/somewhat disagree、neutral、somewhat/strongly agree）。下位尺度ごとに項目平均で得点化する。否定項目は分析時に逆転する（Table 4 は「高いほど肯定的」に揃えた値）。項目番号は指定にないため `reverseItems` は空のまま、採点と notes に逆転の扱いを書いた。当初32項目から相関の低い7項目を除外し、25項目で EFA（minimum residuals、promax）。低負荷4項目と交差負荷1項目を除き最終20項目。KMO .86、Bartlett χ²=817、df=190、p<.001。因子間相関 .59。旗艦 α は肯定 .88、否定 .83（N=99）。2019年5月、Prolific、英国在住・非学生・18歳以上の就業者100名（男女各50）から、注意確認全不正解の1名を除外。平均年齢 36.15（SD 10.25、20–64）。倫理は著者所属校の School of Psychology Ethics Committee。収束・弁別は TRI（Lam et al. 2008 の18項目短縮版）。`psychometricEvidence` は開発論文の1件。`url` は DOI のみ
- `usagePermission` は `unknown`。Appendix B は「ready for use」として尺度を収録すると述べるが、明示的な利用許諾文言は確認していない。`itemPublicationStatus` は `not-published`。項目は Table 3 と Appendix にあるが転載しない。`items` は空。開発論文は使用研究に入れない。`usageStudies` は空
- Schepman & Rodway（2023）。International Journal of Human–Computer Interaction, 39(13), 2724–2741。DOI `10.1080/10447318.2022.2085400`。存在のみ notes に記し、数値は載せない。本文は未確認
- 日本語は `validated`。`japaneseEvidence` は kind `psychometric-validation`、label「検証済み日本語版（GAAIS-J、19項目）」、authors は Yamaguchi, Hashimoto, & Saito、year 2025、title は指定どおり。DOI `10.3390/bs15121668`。Behavioral Sciences, 15(12), 1668（2025-12-03 公開、CC BY 4.0、仙台大学）。翻訳・逆翻訳。2025年3月14–17日のウェブ調査、有効 3,689名（男性2,161、女性1,528、平均年齢51.65、SD 11.52）。原版20項目の2因子 CFA（MLR）は CFI .884、RMSEA .082、SRMR .102。負荷 .17 の Neg3（Organizations use AI unethically）を削除し、一部の誤差共分散を許した19項目（肯定12・否定7）で CFI .943、TLI .932、RMSEA .061、SRMR .07。McDonald ω=.937、Cronbach α=.924（全体値として報告）。否定因子の AVE は .50 未満（>.40）。倫理は仙台大学倫理委員会 2024-47(1)。19項目版であり原版20項目と同一ではない。本文と Table 4・5 の相関値に食い違いがあるため、妥当性相関の数値は載せない。検証論文は使用研究に入れない
- `relatedConcepts` は存在する `technology-readiness`、`perceived-usefulness`、`perceived-ease-of-use`、`perceived-enjoyment`、`social-influence`、`facilitating-conditions`。定義と caution が名指しする既存概念だけにした。2026-10-07 の判断どおり、既存概念への逆リンクは足さない。decisionGuide は GAAIS（20項目）の1択。選択ガイドは69から70。関係レコードは追加しない。短縮版 GAAIS-10、Sindermann らの ATAI、Kieslich らの TAI は未登録
- 既存 `zhang-plb-22` に `usageStudies` を1件追加。それまで2件（Stynen & Semeijn 2023、Meng ら 2023）。旗艦の頻度形式（0＝not at all～4＝a lot）と `verifiedAt`（2026-10-14）は変えていない
- Li, Xue, Liang, & Yan（2020）。The Impact of Paradoxical Leadership on Employee Voice Behavior: A Moderated Mediation Model。Frontiers in Psychology, 11, 537756。DOI `10.3389/fpsyg.2020.537756`（2020-09-24 公開、CC BY 4.0）。フル22項目（5次元）。中国（北京・杭州・武漢・安徽・鄭州・深圳・広州）の金融・通信・製造・教育・不動産のホワイトカラー。上司–部下ペアの紙質問紙。360ペア配布、有効268ペア（上司の男性63.3%、部下の男性51.1%）。部下が直属上司を評定。原版の頻度形式（0～4）から5件法の同意形式（1＝strongly disagree～5＝strongly agree）への変更は adaptation。実施言語は本文に明記がない。α=.897（本文「its Cronbach's α was 0.897」。原版 .94/.95 と異なり、論文内の各尺度で個別のα値を報告しているため本標本の値と判断）。7因子 CFA（Amos）は CMIN/df 1.489、RMSEA .043、CFI .976、TLI .971。`sourceLocator` は「Measures, Paradoxical Leadership」。倫理は大学の Research Ethics Committee。開発者（Zhang, Waldman, Han, Li Xiaobei）は著者に含まれない。使用研究の `verifiedAt` は 2026-10-24。notes の使用研究は3件
- 既存 `kouvonen-wsc-8` と `dobrow-calling-12` に、同じ Sun ら（2026）を各1件追加。Sun, Liang, Ni, Zhang, Xing, Bie, Song, & Cai（2026）。Longitudinal Associations Among Workplace Social Capital, Career Calling and Work Engagement Among Nurses: A Three-Wave Cross-Lagged Panel Study。Healthcare, 14(20), 3514。DOI `10.3390/healthcare14203514`（Crossref の公開日 2026-10-19、CC BY 4.0）。中国河北省保定市の三級総合病院1施設（55以上の部署）。3時点（2024年3月・9月・2025年3月）のオンライン質問紙。ベースライン看護師470名（T2 461、T3 462）。女性96.6%、平均年齢32.63。言語は Chinese。倫理は Baoding No.4 Central Hospital（No. 2024007）。いずれの尺度の開発者も著者に含まれない。T1 の WSC から T2 のキャリア・コーリングへの β=0.153、T1 の WSC から T2 のワーク・エンゲイジメントへの β=0.227。同論文の UWES-9 は登録しない。使用研究の `verifiedAt` は 2026-10-24。`url` は DOI。`fullTextUrl` は MDPI の記事ページ
- WSC-8 はそれまで3件（Hori ら 2019、Magnavita ら 2025、Mine ら 2026）。フル8項目（認知・構造）。Zhang ら（2014, Chinese Journal of Health Statistics, 31, 456–458）の中国語版。5件法（1＝completely disagree～5＝strongly agree）、項目平均。α=0.928（T1）、0.930（T2）、0.926（T3）。厳密な縦断的測定不変性を確認。負荷 .757–.822。`sourceLocator` は「2.4.3」。旗艦の5件法、合計採点、`usagePermission`、`itemPublicationStatus`、`japaneseVersionStatus`（`usage-example`）、`verifiedAt`（2026-10-22）は変えていない。notes の使用研究は4件。中国語使用は `japaneseEvidence` にしない
- CS-12 はそれまで1件（Ma ら 2025）。フル12項目（単一次元）。Pei & Zhao（2015, Management Science（中国）, 28, 103–114）の中国語版。原版7件法から5件法の同意形式へ変更し、項目平均。旗艦の7件法と `verifiedAt`（2026-10-20）は変えていない。α=0.963（T1）、0.958（T2）、0.961（T3）。負荷 .791–.846。`sourceLocator` は「2.4.4」。notes の使用研究は2件。日本語は `unconfirmed` のまま
- 概念134、尺度182、使用研究215、選択ガイド70、関係16。版は v0.107.0 から v0.108.0。`meta.updated` は 2026-10-24。`meta.scope` は `134概念・182尺度`。日本語の検証済みは25から26。関連版は14のまま。未確認は110のまま。日本語使用例は18のまま。登録3・4項目は29のまま。使用研究側の3・4項目は27のまま

## 見送り

- GWQ-12 の使用研究候補 El-Sayed ら（2025, Nursing Inquiry、DOI `10.1111/nin.12697`）。原版 α の引用のみ
- Farid ら（2024, Journal of Management & Organization、DOI `10.1017/jmo.2024.63`）。本文非公開で α 未確認
- ペルシア語版検証 Gheshlagh（2025）。検証研究かつ開発者が共著
- WSC-8 の Zhu（2026）は特定できず。Frontiers 2026 の介護施設研究（DOI `10.3389/fpsyg.2026.1822004`）は別の3項目尺度
- 従業員レジリエンス EmpRes（Näswall et al. 2019、DOI `10.1108/JMP-02-2018-0102`）。本文非公開で値未確認のため HOLD
- CS-12 の日本語版。新しい根拠なし
- GAAIS の開発論文と、Yamaguchi ら（2025）の日本語検証論文。使用研究にしない
- Schepman & Rodway（2023）の係数。本文未確認のため数値は載せない
- 同論文の UWES-9
- GAAIS-10、Sindermann らの ATAI、Kieslich らの TAI
- 既存 HOLD は変更していない。CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、S-NAQ、KSS-7 の SAGE Open Nursing 2024、Kantur & Iseri-Say（2015）、BAT-12 の Izdebski 2023／Pederson & Slowiak、Ayase 2026 LAWS、Kinnunen 2020 REQ、DC-14 ほか current-state.md 記載分

## 重複確認

作業開始時の tip は `03068e0`（v0.107.0。133概念・181尺度・212使用研究・69選択ガイド・16関係）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の文字列で検索した。`10.1016/j.chbr.2020.100014`、`10.3390/bs15121668`、`10.3389/fpsyg.2020.537756`、`10.3390/healthcare14203514`、`attitudes-toward-ai`、`schepman-rodway-gaais-20`。追加対象は未登録だった。Li ら（2020）の DOI は PLB-22 になく、Sun ら（2026）の DOI は WSC-8 にも CS-12 にもなかった。

既存 ID は、概念 `technology-readiness`、`perceived-usefulness`、`perceived-ease-of-use`、`perceived-enjoyment`、`social-influence`、`facilitating-conditions`、尺度 `zhang-plb-22`、`kouvonen-wsc-8`、`dobrow-calling-12` を確認して使った。逆リンクは足していない。

## 根拠として確認したこと

- 数値は指定された値だけを使った。指定にない係数・人数・言語・アンカーは作っていない
- GAAIS の書誌、20項目、2次元の項目数、5件法、開発過程、KMO、Bartlett、因子間相関、次元別 α、標本、倫理、TRI での収束・弁別、利用条件、項目非転載、開発論文を使用研究にしないことは指定の範囲。実施言語は本文に明記がない。公開日はデータに書いていない（Crossref の印刷 date-parts は 2020-01、ライセンス開始は 2020-04-29、created は 2020-05-18。日までの公開日は断定しない）
- Crossref で書誌を再確認した。Schepman は Astrid、Rodway は Paul。巻 1、記事 100014。vor のライセンスは CC BY-NC-ND 4.0。レコードの著者表記は既存どおりイニシャル
- Schepman & Rodway（2023）は Crossref で巻 39、号 13、2724–2741、オンライン 2022-06-14、印刷 2023-08-09、CC BY-NC-ND 4.0、題名は The General Attitudes towards Artificial Intelligence Scale (GAAIS): Confirmatory Validation and Associations with Personality, Corporate Distrust, and General Trust。本文は開いていない。notes の書誌は指定の行だけ
- Yamaguchi ら（2025）の Crossref 上の given name は Yasumasa、Chiaki、Nagayuki。`japaneseEvidence` の authors は指定どおり "Yamaguchi, Hashimoto, & Saito"。出版社ページは https://www.mdpi.com/2076-328X/15/12/1668 。`url` は DOI
- Li らの given name は Xiyuan、Ying、Hao、Dong。Xiaobei ではない。開発者の Li Xiaobei は著者に入っていない。`fullTextUrl` は Frontiers の記事ページ
- Sun らの given name は Niuniu、Yamei、Yang、Ruihong、Yu、Fengsai、Dongyu、Lin。`fullTextUrl` は https://www.mdpi.com/2227-9032/14/20/3514
- URL は DOI と、出版社の記事ページ（Frontiers、MDPI）。ResearchGate や第三者 PDF は使っていない。PMC の URL は載せていない。`sourceUrl` は DOI のみ
- ヘッダの版表示は `app.js` が `data.js` の `meta.version` を読む。スキーマは変えていないため、`app.js` と `index.html` は変更していない

## 採否

- 項目本文は転載しない。GAAIS の `itemPublicationStatus` は `not-published`。論文が CC BY-NC-ND 4.0 であることと、項目を転載しない指定に合わせた。`source-open` にはしない
- 開発論文（Schepman & Rodway 2020）と日本語検証（Yamaguchi ら 2025）は `usageStudies` に入れない。GAAIS-J は19項目なので、原版20項目の別レコードは作らない。同一でないことは caution、`japaneseStatusNote`、notes に書いた
- Li らは PLB-22 の開発者ではないので使用研究に入れる。頻度形式から同意形式への変更は adaptation。旗艦の responseFormat は変えない
- Sun らは WSC-8 と CS-12 の開発者ではないので、同じ論文を両尺度の使用研究に入れる。DOI の重複は尺度をまたぐため、検証は通る。WSC-8 の項目平均は旗艦の合計とは別の adaptation。CS-12 の5件法は旗艦の7件法とは別の adaptation。中国語使用は日本語根拠にしない
- 選択ガイドは新概念内だけで1件増える。既存概念への逆リンクは足さない。関係レコードは追加しない
- PLB-22、WSC-8、CS-12 の旗艦の項目数、回答形式、信頼性、利用条件、日本語状態、`verifiedAt` は変えない。追加した使用研究の `verifiedAt` は 2026-10-24

## 入れなかったもの

- GAAIS、GAAIS-J、Li ら、Sun らが掲載している項目本文
- GAAIS の実施言語の断定。Li らの実施言語の断定。2023年確認的論文の係数。GAAIS-J の妥当性相関
- GAAIS の公開日の断定
- GAAIS-10、ATAI、TAI、UWES-9
- 見送り節の GWQ-12 候補、Zhu（2026）、別の3項目尺度、EmpRes
- 旗艦の回答形式を使用研究の件数に合わせて書き換えること
- 既存 HOLD
- `app.js`、`index.html`、`styles.css`、`relations.js`、`verify-data.mjs`、`AGENTS.md`、`docs/decisions.md`。`.wrangler/` などの生成物

## 次回候補

- GAAIS の、開発論文と検証論文以外のフル20項目の独立使用
- GAAIS-J の19項目を原版20項目と混ぜないこと
- CS-12 の日本語根拠。今回は新しい根拠がなかった
- EmpRes は本文が確認できるまで HOLD
- 引き続き HOLD の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5

## 検証

`node --check data.js`、`node --check app.js`、`node --check verify-data.mjs`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check` は通過した。`package.json` はリポジトリにない。検証スクリプトはリポジトリルートの `verify-data.mjs`。

`verify-data.mjs` の件数は、概念134、尺度182、使用研究215、選択ガイド70、関係16。登録版そのものが3・4項目は29。個別使用研究で3・4項目版を確認済みは27。日本語は検証済み26、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認110。v0.107.0 からの想定（概念134、尺度182、使用研究215、選択ガイド70、関係16、検証済み26、関連版14、未確認110、日本語使用例18、登録3・4項目29、使用研究側3・4項目27）と一致した。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.108.0 実データ版`、件数は `134概念・182尺度・個別使用研究215件`、フッタは `v0.108.0`。コンソールエラーはなかった。キーワード「GAAIS」で1件。詳細は20項目、5件法の同意形式（strongly/somewhat disagree）、利用条件未確認、日本語は検証済み日本語版、項目本文は「掲載していません」、α は肯定 .88・否定 .83、使用先行研究は未登録、原文リンクは DOI。キーワード「ガスライティング」は1件のまま。空の検索語「存在しない尺度zzzz」は該当なし。概念一覧の「一般的態度」は1概念。概念詳細に判断ガイド（肯定・否定の両面）と、GAAIS-J は19項目という注意、関連の技術レディネスが出る。設計アシスタントの概念検索に「AIに対する一般的態度」が出る。比較に GAAIS と WSC-8 を入れると合計28項目。使用先行研究は 0件と 4件。回答件法の行は GAAIS の同意形式と、WSC-8 旗艦の fully disagree～fully agree のまま。WSC-8 の詳細は使用先行研究4件、最終確認日 2026-10-22、Sun らの DOI `10.3390/healthcare14203514`、α=0.928。PLB-22 の詳細は使用先行研究3件、旗艦の頻度形式（0＝not at all）、最終確認日 2026-10-14、Li らの DOI `10.3389/fpsyg.2020.537756`、α=.897。CS-12 の詳細は使用先行研究2件、旗艦の7件法、最終確認日 2026-10-20、日本語は未確認、Sun らの α=0.963。検索結果の CSV／JSON に GAAIS が出る。研究設計の CSV／JSON は登録版項目数の合計62（20+8+12+22）、使用研究件数は 0・4・2・3。先行研究一覧の使用研究行に Li らと Sun らの DOI が出る。GAAIS の開発 DOI は原典行に出る。researchgate.net は出力にない。幅390pxでは GAAIS のカード幅358px、左16px、ページの横溢れなし。

`data.js` を読み込んだ確認では、`meta.version` は `0.108.0`、`meta.updated` は `2026-10-24`、`meta.scope` は `134概念・182尺度`。`schepman-rodway-gaais-20` は `itemPublicationStatus` が `not-published`、`items` は空、`usageStudies` は空、`japaneseVersionStatus` は `validated`、`usagePermission` は `unknown`、`parentScaleId` は空、`verifiedAt` は `2026-10-24`。`attitudes-toward-ai` への逆リンクはない。`zhang-plb-22` の旗艦は頻度形式・`verifiedAt` `2026-10-14` のまま、usage の末尾は DOI `10.3389/fpsyg.2020.537756`。`kouvonen-wsc-8` の旗艦は8項目・5件法・`unknown`・`usage-example`・`verifiedAt` `2026-10-22` のまま、usage は4件で末尾が `10.3390/healthcare14203514`。`japaneseEvidence` は2件（いずれも `usage-example`）。`dobrow-calling-12` の旗艦は7件法・`unconfirmed`・`verifiedAt` `2026-10-20` のまま、usage は2件で末尾が同じ Healthcare の DOI。`researchgate.net` は `data.js` にない。
