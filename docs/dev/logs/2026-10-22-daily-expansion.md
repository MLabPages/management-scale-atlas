# v0.106.0 定時拡充（職場のソーシャル・キャピタル、NAQ-R と ACAP-14 の使用研究）

日付: 2026-10-22

## 追加

- 概念 `workplace-social-capital`（職場のソーシャル・キャピタル / Workplace Social Capital）と尺度 `kouvonen-wsc-8`（WSC-8）を追加。Kouvonen, A., Kivimäki, M., Vahtera, J., Oksanen, T., Elovainio, M., Cox, T., Virtanen, M., Pentti, J., Cox, S. J., & Wilkinson, R. G.（2006）。Psychometric evaluation of a short measure of social capital at work。BMC Public Health, 6, 251。DOI `10.1186/1471-2458-6-251`。Crossref の公開日は 2006-10-13。CC BY 2.0。PMC1618843。`sourceUrl` は DOI のみ
- 原典に略称はない。論文の呼称は 8-item measure of social capital at work。レコード略称 WSC-8 は項目数を示す。`versionType` は `original`。`parentScaleId` は空。`recordStatus` は `verified-metadata`。`verifiedAt` は 2026-10-22。実施言語は本文に明記がない（フィンランドの調査）。言語は推測しない
- 定義は、職場における社会関係資本。8項目は認知的側面（項目3, 5, 8）と構造的側面（項目1, 2, 4, 6, 7）。補足分類は bonding（項目3, 4, 5）、bridging（項目6, 7）、linking（項目1, 2, 8）。上司に関する項目（1, 2, 8）を含む。心理的安全性、上司への信頼、組織的公正、知覚組織支援とは区別する
- 8項目。5件法。Table 1 注は 1＝fully disagree～5＝fully agree。項目7のみ 1＝very little～5＝very much。本文 Methods は Likert-scaled items（range of scales 1–5）。採点は全項目の合計（summary score）。高いほど社会関係資本が高い。職場単位（3名以上）で平均した集計値も作成する。`reverseItems` は空。逆転項目の記載はない。カットオフはない。項目本文は転載しない
- 標本は Finnish Public Sector Study（2000–2002）。10町と21病院の全職員 N=70,961 に郵送、回答 48,592（市職員 32,293＋病院 16,299、81%女性、17–65歳、回答率68%）。Table 1 は女性 38,914・男性 9,337。信頼性の Table 2 は女性 N=36,779・男性 N=8,792。α=0.88（女性）、0.88（男性）。項目-全体相関 .58–.69、項目間相関 .28–.80。抄録では r_wg=0.88。本文は平均偏差の説明で 0.88 と記述する。表記の揺れとして残し、どちらかに直さない。ICC=21%。妥当性は手続き的公正 β=0.53（女性）／0.65（男性）、仕事のコントロール 0.28／0.29、努力-報酬不均衡 −0.23／−0.25。特性不安（訂正後）−0.19／−0.22。主観的健康不良の OR は最低四分位で 2.42（女性）／2.99（男性）（Table 4）。職場単位の集計でも 1.19／1.79（Table 5）。`psychometricEvidence` は開発論文の1件
- 訂正は Correction 2007, BMC Public Health, 7, 90（DOI `10.1186/1471-2458-7-90`、PMC1888701）。特性不安の符号化のみ（特性不安の α 0.88→0.85、Table 3 の特性不安 β 女性 −0.07→−0.19、男性 −0.14→−0.22、文言修正）。WSC の項目・α・件数は変わらない。notes に記した
- `usagePermission` は `unknown`。論文は CC BY 2.0 だが、尺度の利用許諾について原典に記載はない。`itemPublicationStatus` は `source-open`。原典 Table 1 に英文項目がある。`items` は空
- 開発論文は使用研究に入れない。日本語は `usage-example`。Hori ら（2019）が Kouvonen らの8項目を日本の就業者に使用した。回答者は日本語版か英語版を選べた。日本語版の根拠として Odagiri ら（2010、産業衛生学雑誌 52 Suppl:631、学会抄録）を引用する。抄録は未確認なので `validated` にしない。`japaneseEvidence` は1件（kind は `usage-example`）。同じ論文を `usageStudies` にも1件登録する
- `relatedConcepts` は存在する `psychological-safety`、`trust-in-supervisor`、`organizational-justice`、`perceived-organizational-support`。2026-10-07 の判断どおり、既存概念への逆リンクは足さない。`typicalAntecedents` と `typicalOutcomes` は空。decisionGuide は WSC-8 の1択。NBJSQ の3項目 WSC（Inoue et al. 2016。bonding 3項目を4件法に改変）、Eguchi ら（2017）の bonding WSC、Norikoshi（2020）の看護師用関係的 WSC、Fujikawa ら（2023）の研修医版は別レコードにしない旨を caution に書いた。選択ガイドは67から68。関係レコードは追加しない
- WSC-8 の使用研究は Hori, D., Takao, S., Kawachi, I., Ohtaki, Y., Andrea, C.-S., Takahashi, T., Shiraki, N., Ikeda, T., Ikeda, Y., Doki, S., Oi, Y., Sasahara, S., & Matsuzaki, I.（2019）。BMC Public Health, 19, 919。DOI `10.1186/s12889-019-7244-9`（2019-07-09、CC BY 4.0、PMC6617579）。フル8項目。5件法（1＝totally disagree～5＝totally agree。1項目のみ 1＝very little～5＝very much）。8項目の平均（1.00–5.00）。四分位で4群（low ≤3.125 等。他の分点は根拠メモに数値がない）。α は男性 0.940、女性 0.935。つくばサイエンスシティ（TSCN 加盟機関）の就業者。2017年2–3月のウェブ調査。19,481名中 7,255名回答、分析 6,325名（男4,030、女2,295）。研究者・技術者・事務。低 WSC は過去1年の自殺念慮と関連（男性 OR 2.57、95%CI 1.72–3.83、女性 OR 1.75、95%CI 1.15–2.66、粗モデル）。倫理は筑波大学医学医療系倫理委員会（No. 1374）。開発者は著者に入っていない。旗艦の合計と responseFormat は変えない。`url` は DOI。`fullTextUrl` は BMC の記事ページ
- 既存 `einarsen-naq-r-22` に `usageStudies` を1件追加。それまで空。Galanis, P., Moisoglou, I., Katsiroumpa, A., & Sourtzi, P.（2024）。AIMS Public Health, 11(2), 614–627。DOI `10.3934/publichealth.2024031`（CC BY 4.0、PMC11252585。Received 2024-02-24、Accepted 2024-04-12）。フル22項目。5件法 1（never）～5（daily）、過去6か月、合計 22–110。行為者を上司と同僚に限定（患者などは除外）した点は adaptation。この標本の α=0.963。NAQ-R 平均 51.5（SD 20.5）。ギリシャの病院勤務看護職 450名（便宜標本、2024年1–2月。女性 86.7%、平均 39.1歳）。単一項目バーンアウトへの adjusted β=0.031（95%CI 0.023–0.039）、離職意向の adjusted OR=1.057（95%CI 1.043–1.071）。倫理はアテネ大学看護学部（No. 479、2024-01-10）。ギリシャ語版の妥当性として Kakoulakis et al. 2015（NAQ、ギリシャの教員）を引用する。これは NAQ-R の検証論文として登録しない。著者は QQS-9 の開発チームだが NAQ-R の開発者ではない。`url` は DOI。`fullTextUrl` は AIMS の記事ページ。旗艦の項目数、回答形式、`usagePermission`、日本語状態、`verifiedAt`（2026-10-21）は変えていない。notes の「usageStudies は空」は件数に合わせて直した
- 既存 `flatten-acap-14` に `usageStudies` を1件追加。それまで空。Yang, Y., Zheng, Y., Xie, G., & Tian, Y.（2022）。Frontiers in Psychology, 13, 818844。DOI `10.3389/fpsyg.2022.818844`（2022-05-30、CC BY、PMC9189394）。フル14項目（獲得3・同化4・変換4・活用3）。Table 2 の負荷は 0.684–0.885。全尺度共通の5件法 Likert。原版7件法からの変更は adaptation。旗艦の responseFormat は変えない。この標本の α=0.920（Table 3、AC 全体）。CR 0.955、AVE 0.612。中国・珠江デルタの新興企業（創業8年以内）。2021年6–8月。500票配布、回収256、有効214（42.80%）。単一回答者（企業単位）。学習志向→AC β=0.394、AC→新規事業成果の直接効果 0.197、AC→革新能力 0.249。実施言語は本文に明記がない。本文の「some negatively worded items」は質問票全体の記述で尺度を特定できないため、逆転の有無は書かない。Flatten らは著者に入っていない。`url` は DOI。`fullTextUrl` は Frontiers の記事ページ。旗艦の項目数、回答形式、α、利用条件、日本語状態、`verifiedAt`（2026-10-09）は変えていない。notes の「使用研究は空」は件数に合わせて直した
- 概念132、尺度180、使用研究210、選択ガイド68、関係16。版は v0.105.0 から v0.106.0。`meta.updated` は 2026-10-22。`meta.scope` は `132概念・180尺度`。日本語の検証済みは25のまま。関連版は14のまま。未確認は109のまま。日本語使用例は17から18。登録3・4項目は29のまま。使用研究側の3・4項目は27のまま

## 見送り

- ACAP-14 の Hernández-Perlines & Xu（2018、Front Psychol 9:102）。14項目・3/4/4/3 は確認できたが、α は2次合成 ACAP と下位次元のみ（PLS）で、参照文献に Flatten et al. 2011 EMJ が含まれるか確認しきれない。今回は Yang 2022 を優先し、登録しない
- ACAP-14 の Sancho-Zamora（2022、IJERPH）。引用先が Flatten, Greve, & Brettel（2011）EMR で別論文。不採用
- NAQ-R の Peng（2025、BMC Nurs）と Du（2026、Front Public Health）。Xun らの中国語改訂版で、次元構成が原版と異なる（組織的不公正因子）。別版扱いの判断が要るため不採用
- NBJSQ の3項目 WSC（Inoue 2016）。4件法の3項目改変版で、本尺度のフル使用ではない。使用研究にしない。別レコードにもしない
- Odagiri ら（2010）の学会抄録。本文未確認のため `validated` にしない
- 既存 HOLD は変更していない。CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、S-NAQ、KSS-7 の SAGE Open Nursing 2024、Kantur & Iseri-Say（2015）、BAT-12 の Izdebski 2023／Pederson & Slowiak、Ayase 2026 LAWS、Kinnunen 2020 REQ、DC-14 ほか current-state.md 記載分

## 重複確認

作業開始時の tip は `dffa316`（v0.105.0、PR #59。131概念・179尺度・207使用研究・67選択ガイド・16関係）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の文字列で検索した。`10.1186/1471-2458-6-251`、`10.1186/s12889-019-7244-9`、`10.3934/publichealth.2024031`、`10.3389/fpsyg.2022.818844`、`workplace-social-capital`、`kouvonen-wsc-8`。追加対象は未登録だった。

既存 ID は、概念 `psychological-safety`、`trust-in-supervisor`、`organizational-justice`、`perceived-organizational-support`、尺度 `einarsen-naq-r-22`、尺度 `flatten-acap-14` を確認して使った。逆リンクは足していない。

## 根拠として確認したこと

- 数値は 2026-10-22 の確認済み根拠メモに書かれた値だけを使った。メモにない係数・人数・言語・アンカーは作っていない
- WSC-8 の書誌、8項目、認知的／構造的の項目番号、bonding／bridging／linking の補足分類、5件法、合計採点、逆転の記載なし、カットオフなし、標本、α、妥当性、訂正の範囲、利用条件、項目非転載、開発論文を使用研究にしないことはメモの範囲
- 特性不安の α 0.88→0.85 は訂正が触れた特性不安の値であり、WSC の α ではない。WSC の α は女性 0.88、男性 0.88 のまま
- 実施言語は本文に明記がない。フィンランドの調査であることをもって言語を書かない。中国の ACAP 使用も同じ
- Hori らの平均点と totally disagree のアンカーは使用研究側に残し、旗艦の合計と fully disagree は変えない
- Galanis らの行為者限定は adaptation。旗艦の5件法頻度、`permission-required`、日本語 `validated` は変えない
- Yang らの5件法は adaptation。旗艦の7件法は変えない。α=0.920 はこの使用研究の値であり、旗艦の下位 α（.73／.85／.93／.80）に置き換えない
- URL は DOI と、出版社の記事ページ（BMC、AIMS、Frontiers）。ResearchGate や第三者 PDF は使っていない。`sourceUrl` は DOI のみ
- ヘッダの版表示は `app.js` が `data.js` の `meta.version` を読む。`index.html` に版の固定文字列はなかったため、`index.html` は変更していない

## 採否

- 項目本文は転載しない。WSC-8 の `itemPublicationStatus` は `source-open`（原典 Table 1 に英文がある）。`items` は空。NAQ-R は `not-published` のまま。ACAP-14 は `not-published` のまま
- 開発論文（Kouvonen ら 2006）は `usageStudies` に入れない。Hori らは開発者ではないので使用研究に入れる。同じ論文を日本語の `usage-example` にも置く（Global JE-7 の Allen ら、LAWS の Sasaki らと同じ併記）
- `psychometricEvidence` は開発論文の1件。Hori らの α は使用研究と `japaneseEvidence` に置く
- 選択ガイドは新概念内だけで1件増える。既存概念への逆リンクは足さない。関係レコードは追加しない
- ギリシャの NAQ-R 使用と中国の ACAP-14 使用は、日本語の `usage-example` にしない
- NAQ-R と ACAP-14 の旗艦の項目数、回答形式、信頼性、利用条件、日本語状態は変えない
- NBJSQ の3項目、Eguchi 2017、Norikoshi 2020、Fujikawa 2023 は別レコードにしない

## 入れなかったもの

- WSC-8、NAQ-R、ACAP-14 の項目本文
- WSC-8 と Yang ら（2022）の実施言語の断定
- Odagiri ら（2010）を検証済み日本語版にすること。Hori らの四分位の、low ≤3.125 以外の分点
- 特性不安の訂正後 α で WSC の α を書き換えること
- Galanis らの α や合計範囲で NAQ-R の旗艦を書き換えること。Kakoulakis et al. 2015 を NAQ-R の検証論文にすること
- Yang らの5件法で ACAP-14 の7件法を書き換えること。質問票全体の「some negatively worded items」を ACAP-14 の逆転項目にすること
- Hernández-Perlines & Xu 2018、Sancho-Zamora 2022、Peng 2025、Du 2026、NBJSQ 3項目 WSC
- 既存 HOLD。CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3 の usage、RC-3 の usage、Price Consciousness 5、S-NAQ、KSS-7 の SAGE Open Nursing 2024、Kantur & Iseri-Say（2015）、BAT-12 の Izdebski ら（2023）と Pederson & Slowiak、Ayase 2026 LAWS、Kinnunen 2020 REQ、DC-14
- `app.js`、`index.html`、`styles.css`、`relations.js`、`verify-data.mjs`、`AGENTS.md`。`.wrangler/` などの生成物。`HANDOFF.md`、`docs/decisions.md`（判断の新設なし。HANDOFF の先頭は v0.102.0 のままなので、今回の件数で書き換えていない）

## 次回候補

- WSC-8 の、学会抄録ではない日本語8項目の検証
- NAQ-R の、行為者を限定しないフル22項目の独立使用
- ACAP-14 の、原版7件法を保った使用研究
- S-NAQ の原典確認（α と回答件数）
- 引き続き HOLD の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、S-NAQ、KSS-7 の SAGE Open Nursing 2024、Kantur & Iseri-Say（2015）、BAT-12 の Izdebski／Pederson

## 検証

`node --check data.js`、`node --check app.js`、`node --check verify-data.mjs`、`node --check relation-model.js`、`node --check relations.js`、`node --check collect-literature.mjs`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check` は通過した。`package.json` はリポジトリにない。

`verify-data.mjs` の件数は、概念132、尺度180、使用研究210、選択ガイド68、関係16。登録版そのものが3・4項目は29。個別使用研究で3・4項目版を確認済みは27。日本語は検証済み25、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認109。v0.105.0 からの想定（概念132、尺度180、使用研究210、選択ガイド68、関係16、検証済み25、関連版14、未確認109、日本語使用例18、登録3・4項目29、使用研究側3・4項目27）と一致した。他の日本語区分も不変だった。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.106.0 実データ版`、件数は `132概念・180尺度・個別使用研究210件`、フッタは `v0.106.0`。コンソールエラーはなかった。キーワード「WSC-8」で1件、「職場のソーシャル」で概念カードが1件。詳細は8項目、5件法、利用条件未確認、日本語は使用・翻訳例、使用研究は Hori ら（α 男性 0.940）、項目本文は「原著で公開」で転載していない。原文リンクは DOI。キーワード「NAQ-R」で1件。詳細は旗艦の過去6か月の5件法（Never～Daily）、申請が必要、日本語は検証済みのまま、Galanis ら（α=0.963）が出る。キーワード「ACAP-14」は2件で、もう1件は既存の DC-14 が申請根拠の文に ACAP-14 を含むため。ACAP-14 の詳細は旗艦の7件法のまま、Yang ら（α=0.920、5件法）が出る。比較に WSC-8・NAQ-R・ACAP-14 を入れると合計44項目。回答件法の行は旗艦の5件法、過去6か月の5件法、7件法のまま。概念一覧の「ソーシャル」に職場のソーシャル・キャピタルが出る（職場の孤独感も、定義にソーシャル・サポートがあるため同じ語に掛かる）。設計アシスタントの概念検索に職場のソーシャル・キャピタルが出る。検索結果の CSV／JSON、研究設計の CSV／JSON、先行研究一覧 CSV に WSC-8 が出る。幅390pxでは WSC-8 のカード幅358px、左16px、ページの横溢れなし。

`data.js` を読み込んだ確認では、`meta.version` は `0.106.0`、`meta.updated` は `2026-10-22`、`meta.scope` は `132概念・180尺度`。`kouvonen-wsc-8` は `itemPublicationStatus` が `source-open`、`items` は空、`usageStudies` は1件、`japaneseEvidence` は1件、`japaneseVersionStatus` は `usage-example`、`usagePermission` は `unknown`、`parentScaleId` は空、`verifiedAt` は `2026-10-22`。`workplace-social-capital` への逆リンクはない。`einarsen-naq-r-22` の旗艦は22項目・`permission-required`・`validated`・`not-published`・`verifiedAt` `2026-10-21` のまま、usage は DOI `10.3934/publichealth.2024031` の1件。`flatten-acap-14` の旗艦は7件法・14項目・`unknown`・`unconfirmed`・`not-published`・`verifiedAt` `2026-10-09` のまま、usage は DOI `10.3389/fpsyg.2022.818844` の1件。`researchgate.net` は `data.js` にない。
