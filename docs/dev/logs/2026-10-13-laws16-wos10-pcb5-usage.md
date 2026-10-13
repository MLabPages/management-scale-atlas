# v0.94.0 職場の孤独感（LAWS）、WOS-10 と PCB-5 の使用研究

日付: 2026-10-13

## 追加

- 新概念 `workplace-loneliness`（職場の孤独感 / Workplace loneliness）。領域は組織行動・人的資源
- 新尺度 `wright-laws-16`（LAWS）。Wright, Burt, & Strongman（2006）。New Zealand Journal of Psychology, 35(2), 59–68。DOI は空。`sourceUrl` は出版元 PDF
- 16項目（情緒的剥奪9：項目1–9、社会的交友7：項目10–16）。逆転は 5, 6, 10, 11, 12, 14, 15, 16。7件法（1＝strongly disagree～7＝strongly agree）。この回答形式は60項目パイロット（p.61）の記述で、最終16項目の研究1・2では再記述されていない。研究1の得点範囲16–107（平均40.38、SD=17.09）と整合する
- 研究2の LAWS の α は未確認のため記さない。`usagePermission` は `unknown`。`itemPublicationStatus` は `not-published`。`items` は空。`japaneseVersionStatus` は `usage-example`。`versionType` は `original`。`recordStatus` は `verified-metadata`。`psychometricEvidence` は1件
- 既存 `ferris-wos-10` に `usageStudies` を1件追加。それまで空。Fiset, Al Hajj, & Vongas（2017）。Frontiers in Psychology, 8, 1528。DOI `10.3389/fpsyg.2017.01528`（CC BY）。研究2のみ
- 既存 `robinson-morrison-breach-5` に `usageStudies` を1件追加。それまで空。Shen, Schaubroeck, Zhao, & Wu（2019）。Frontiers in Psychology, 10, 67。DOI `10.3389/fpsyg.2019.00067`（CC BY）
- 概念118、尺度161、使用研究193、選択ガイド52、関係16。版は v0.93.0 から v0.94.0。日本語未確認は99のまま。検証済みレコードは18のまま。日本語使用例は16から17。登録3・4項目は29のまま。使用研究側の3・4項目は26のまま

## 根拠として確認したこと

- 作業開始時の tip は `46767c5`（v0.93.0、117概念・160尺度・190使用研究・51選択ガイド・16関係、日本語未確認99、検証済み18、日本語使用例16）
- LAWS の書誌は、著者 Sarah L. Wright、Christopher D. B. Burt、Kenneth T. Strongman。題名 Loneliness in the workplace: Construct definition and scale development。New Zealand Journal of Psychology, 35(2), 59–68。Crossref で DOI は該当なし
- 定義は p.60。一般的孤独感とは別に、職場という文脈に限定する
- 16項目と2下位、逆転8項目、研究1の標本・EFA・α・再検査、研究2の CFA と比較は、出版元 PDF の本文と Table 1・Table 2 で確認した範囲
- 7件法のアンカーは p.61 のパイロット。最終16項目の研究1・2では再記述されていない。研究1の得点範囲との整合を notes と `psychometricEvidence` に書いた
- 研究2の α は確認していないので書かない。RMSEA が基準をやや満たさないという著者の留保は残す
- Sasaki らの使用は Journal of Occupational Health, 67(1), uiaf009。DOI `10.1093/joccuh/uiaf009`。CC BY 4.0（OUP／日本産業衛生学会）。PMC11879050。フル16項目。日本の常勤従業員（E-COCO-J）。ベースライン在職かつ追跡回答の n=706。過去4週間。7件法。α=.932。得点範囲16–112。項目本文は写していない
- WOS-10 の使用は Frontiers 全文の研究2。フル10項目。過去6か月。7件法（1＝never～7＝always）。Table 4 対角の α=0.95（N=232）。研究1の1項目ビネットは含めない。実施言語は本文にない
- PCB-5 の使用は Frontiers 全文。フル5項目。中国語（翻訳・逆翻訳）。6件法。α=0.80（本文および Table 2 対角）。旗艦の回答形式は変えない

## 採否

- DOI がない旗艦の `sourceUrl` は、出版元（New Zealand Psychological Society）のジャーナルアーカイブ公開 PDF にする。DOI があるときの `sourceUrl` を DOI にする慣例とは分ける。アプリの「原文を開く」が `sourceUrl` を使うためである。UC Research Repository の handle http://hdl.handle.net/10092/2751 は notes に併記し、`sourceUrl` にはしない
- Sasaki らは逆転を9項目と書く。原典 Table 1 は8項目。食い違いは `japaneseStatusNote`、notes、使用研究の adaptation に残し、原典の `reverseItems` は変えない
- Nagano ら（2024）の ICP 抄録（Int J Psychol 59(S1), 424）は未開封。Sasaki らが信頼性・妥当性の報告として引用していても、`validated` にはしない。`usage-example` にとどめる
- Sasaki ら（2025）は `japaneseEvidence` と `usageStudies` の両方に置く。Global JE-7 の Allen らと同じ併記
- `psychometricEvidence` は研究1と研究2を1件にまとめる。2026-10-11 以降の新規尺度と同じ扱い
- ソーシャル・サポートは概念として未登録なので `relatedConcepts` に入れない。存在する職場排斥と心理的安全性だけを片方向で置く。逆リンクと関係レコードは足さない
- WOS-10 の旗艦 `responseFormat`（通例7件法の頻度 never–always）は変えない。Fiset らの6か月と never–always は adaptation
- PCB-5 の旗艦 `responseFormat`（件数は根拠ファイルで未確定）は、Shen らの6件法を根拠に変えない

## 関連概念

- 職場の孤独感の `relatedConcepts` は、存在する `workplace-ostracism`、`psychological-safety`
- 2026-10-07 の判断どおり、関連概念は対称である必要はない。相手側への逆リンクは足さない
- 登録済みの関係レコードは16のまま。関連概念リンクから作る文献調査待ちが増える。これは関係の追加ではない

## 入れなかったもの

- LAWS、WOS-10、PCB-5 の項目本文。出版元 PDF の Table 1 に LAWS の項目があっても転載しない
- Wright ら（2006）の開発論文を `usageStudies` に入れること。研究2の α を推測で書くこと
- 7件法を、最終16項目の研究1・2が再記述したかのように書くこと。パイロット段階の記述であることと、得点範囲との整合を分けて書く
- Nagano ら（2024）の抄録を、未開封のまま検証済み日本語版の根拠にすること
- Sasaki らの逆転9項目に合わせて、原典の `reverseItems` を変えること
- Fiset ら（2017）の研究1（1項目のビネット）を WOS-10 の使用研究に入れること。実施言語を英語と断定すること。旗艦の `responseFormat` を変えること
- Shen ら（2019）の6件法を根拠に、PCB-5 の旗艦 `responseFormat` を変えること
- 既存概念への逆リンク。新規の関係レコード
- CSR-17、Aad-3、UTAUT-SI／FC の使用、P–O fit-3 の使用、RC-3 の使用、Price Consciousness 5、Brand Affect 3／OBE-4 の日本語、Mitchell–Ambrose 5、CX Scale 18 の第2使用、Brand Hate-18 の使用、LEB-10 の Khan（2025）、Voice-6 の Chen（2023）、Frontiers 2020 の JIS、自己一致性（Sirgy）、サービス・リカバリー公正（Tax ら）、`ahearne-leb-10`。HOLD のまま
- CSE-3 の使用研究、DC-14、WAMI、パラドキシカル・リーダーシップ、PSI。今回は見送り

## 検証

- `node --check data.js` 成功
- `node --check app.js` 成功（`app.js` は変更していない）
- `node verify-data.mjs` 成功。概念118、尺度161、使用研究193、登録3・4項目29、使用研究側の3・4項目26、選択ガイド52、関係16。日本語は検証済み18、言語的妥当性確認2、日本語使用例17、翻訳・因子構造等の検討5、関連版の日本語根拠13、日本語で独自開発6、開発論文内の日本語検証1、未確認99
- `node verify-data.mjs --self-test` 成功
- `git diff --check` 成功
- 想定件数（118概念・161尺度・使用研究193・選択ガイド52・関係16・日本語未確認99・検証済み18）と一致した。日本語使用例は16から17。登録3・4項目が29のまま、使用研究側の3・4項目が26のままなのは、追加した使用研究が16項目、10項目、5項目だからである
- ローカル静的サーバと headless Chrome で、見出しが v0.94.0・118概念・161尺度・個別使用研究193件になることを確認した。検索「孤独」に LAWS が出る。カードは「利用条件未確認」「日本語での使用・翻訳例あり」「使用先行研究 1件」で、「複数環境・日本語での検証根拠あり」は出ない。原文リンクは出版元 PDF。詳細は16項目、7件法（1＝strongly disagree～7＝strongly agree）、DOI未登録、項目は「掲載していません」。パイロットの回答形式が最終16項目の研究1・2では再記述されていないこと、UC Research Repository の handle、Sasaki らの DOI `10.1093/joccuh/uiaf009`、α=.932、逆転9項目との食い違い、KMO=.96、RMSEA の留保がある。研究2の α は詳細にない。項目本文はない
- 検索「WOS」の WOS-10 は使用先行研究 1件。詳細の原典は通例7件法の頻度（never–always）のまま。Fiset らの α=0.95、過去6か月、DOI `10.3389/fpsyg.2017.01528` がある。実施言語は未記載。研究1は含めない
- 検索「PCB」の PCB-5 は、原典の回答形式が「件数は根拠ファイルで未確定」のまま。Shen らの6件法、中国語、α=0.80、DOI `10.3389/fpsyg.2019.00067` がある
- 比較表に LAWS、WOS、PCB の3尺度が出る。旗艦の回答形式はそれぞれの原典のまま
- 研究設計で3尺度の採用根拠を使用研究にすると、設計 JSON に DOI `10.1093/joccuh/uiaf009`、`10.3389/fpsyg.2017.01528`、`10.3389/fpsyg.2019.00067` がある。LAWS の旗艦 DOI は空。先行研究 CSV に Sasaki、Fiset、Shen がある。項目本文はない。検索結果 JSON の LAWS は `doi` が空、`sourceUrl` が出版元 PDF、`items` が空、`reverseItems` が 5, 6, 10, 11, 12, 14, 15, 16
- 概念詳細の職場の孤独感は、職場排斥と心理的安全性を関連に出す。職場排斥の関連概念に職場の孤独感はない
- 関係画面で職場の孤独感を中心にすると、職場排斥が出て文献調査待ちである。この概念のレビュー・メタ分析の根拠は出ない。根拠つき関係は16のまま
- 設計アシスタントは3概念を選ぶと、LAWS（16項目）、WOS-10（10項目、使用先行研究1件）、PCB-5、合計31項目
- 幅390pxの LAWS 詳細ダイアログは幅352px、左19px、右371pxで画面内に収まった
