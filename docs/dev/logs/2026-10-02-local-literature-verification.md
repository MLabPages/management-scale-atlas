# ローカル文献収集・本文確認（2026-10-02、日本時間）

## 変更と件数

v0.84.0：106概念・146尺度・175使用研究・39選択ガイド・14関係。今回の増分は1概念、3尺度、4使用研究、1メタ分析から2関係。既存105概念・143尺度・171使用研究・12関係を保持した。

PR #38は2026-10-01にマージ済み。`origin/main`の`02e1055`から`codex/scale-literature-batch-2026-10-02`を作成した。旧ブランチの履歴を再統合せず、既存の無視対象`collection/`・`.wrangler/`を保持。今回分のマージ・公開ページの反映確認は未実施。

## 収集スクリプト・接続

実装済み`collect-literature.mjs`のCrossref検索を、以下の4対象で各20候補に限定して再開した。全4実行成功、今回は429なし。累計25検索ログ（前回の失敗5件も保持）・282 DOI候補。書誌候補の増分は1件で、本文確認済みの増分とは異なる。UTCログの2026-10-01 15時台は日本時間2026-10-02。

```sh
node collect-literature.mjs --search --limit 1 --id target:carlson-wfc --output collection/candidates.json
node collect-literature.mjs --search --limit 1 --id target:general-self-efficacy --output collection/candidates.json
node collect-literature.mjs --search --limit 1 --id target:janssen-iwb --output collection/candidates.json
node collect-literature.mjs --search --limit 1 --id target:absorptive-capacity --output collection/candidates.json
```

J-STAGE、MDPIの公開PDF、PMCの全文、Groningen大学Pureの公開PDF、Meier著者サイトの公開PDFはローカルHTTP 200で取得できた。ResearchGateはローカル403だったがWebツールではCarlson著者公開の掲載論文本文（方法・表を含む）が読めた。ScispaceのPDFもローカル403だったため、Amstad論文は見つかった著者公式PDFを取得して表を目視確認した。接続不可を文献不存在と扱わず、認証・アクセス制限を変更していない。

PDF・抽出テキスト・照合画像・書誌ログはGit無視対象の`collection/batch-2026-10-02/`等へ保存。論文全文や尺度項目本文をコミットしない。

## 採用：原著の方法・表

| 登録 | 一次本文と確認箇所 | 確認結果・留保 |
| --- | --- | --- |
| Carlson WFCS-18 | [原著DOI](https://doi.org/10.1006/jvbe.1999.1713)、[Carlson著者公開全文](https://www.researchgate.net/publication/228079357_Construction_and_Initial_Validation_of_a_Multidimensional_Measure_of_Work-Family_Conflict)。Studies 1–3、Tables 2–7、pp.253–270 | 6次元各3項目、5件法。最終CFA標本225名、α=.78～.87、CFI=.95、RMSEA=.06。内容分類の学生も含む全1,211名を最終版の独立した投与標本と数えない。行動の両方向などの高い因子間相関と、全制約が不変ではないことを併記。Table 7の職務満足への非有意結果も保持。渡井日本語18項目の親を設定し、日本語根拠の前回確認日を保持。 |
| Janssen IWB-9 | [原著DOI](https://doi.org/10.1348/096317900167038)、[大学公開の掲載PDF](https://pure.rug.nl/ws/portalfiles/portal/1565274671/J_Occupat_Organ_Psyc_-_2010_-_Janssen_-_Job_demands_perceptions_of_effort_reward_fairness_and_innovative_work_behaviour.pdf)。Method、Measures p.292、Tables 1–3 | 生成・推進・実現各3、7件法。自己170名、対応上司評定110名、α=.95/.96。高い段階間相関を理由に原著は総合化し、独立した3因子のCFAとは扱わない。Scott–Bruce-6を基にした別9項目系統で、正式短縮・翻訳や未確認の項目対応を作らない。PDFファイル名の2010を刊行年に採らず2000年。 |
| 坂野・東條 GSES-J-16 | [原著DOI](https://doi.org/10.24468/jjbt.12.1_73)、[J-STAGE PDF](https://www.jstage.jst.go.jp/article/jjbt/12/1/12_KJ00008937421/_pdf/-char/ja)。調査I–III、Tables 2–5、pp.75–80。採点・項目構成・信頼性のページを目視確認 | 日本語独自16項目、7+5+4、Yes/No、高自己効力方向を1点とする0～16点。全てのYesを1点にしない。学生278名、対応再検査116名、約5か月r=.83、折半r=.84、KR-21=.74。折半やKR-21をαと表示しない。英語GSE-10・Sherer系と別。臨床群との比較を汎用診断カットオフとしない。 |

Carlsonの英語原版は今回の独立使用研究0件。開発論文を使用研究と数えず、日本語使用例を英語原版へ重複登録しない。利用・転載条件はいずれも未確認。

## 採用：尺度版を方法で確認した使用研究4件

| 尺度 | 研究・箇所 | 版と結果の確認 |
| --- | --- | --- |
| IWB-9 | [Stoffers, van der Heijden, & Schrijver (2020)](https://doi.org/10.3390/su12010159)、公開PDF、Sections 3.1–3.6、Tables 1–3、pp.7–14 | オランダ151社、従業員・上司487対応組。9項目・7件法、自己／上司評定比較。各段階αは自己.82/.85/.83、上司.90/.92/.90、対応相関.33/.28/.30。構造モデルのIWBは上司評定で下位尺度得点を指標にする。横断媒介を時間的媒介としない。2020巻、公開2019-12-24。 |
| IWB-9 | [Al-Taie & Khattak (2024)](https://doi.org/10.3389/fpsyg.2024.1401916)、[PMC全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC11240868/)、Sections 3.1–3.3、Tables 2, 5–6 | UAE教員359名、英語、9項目を6件法に変更。Table 2にIWB1–9、α=.931、CR=.932、AVE=.644。Table 5のPOS・人事施策との関連を確認。性別差のTable 6はp注記と直後の仮説番号が整合せず、性別差は確定的に採用しない。 |
| IWB-9 | [中村 (2022)](https://doi.org/10.50874/jmp.19.1_19)、[J-STAGE全文](https://www.jstage.jst.go.jp/article/jmp/19/1/19_19/_html/-char/ja)、4.1–4.3、5、Tables 1–2、付表4 | 日本国内会社員462名、9項目・7件法平均。現在と買収前の回想を1時点で評定し、縦断2波としない。α=.95/.95、CR=.95/.95、AVE=.71/.70、全構成概念CFAのCFI=.89。日本語使用例に分類し、翻訳手続き・独立再検査・不変性を認定しない。 |
| GSES-J-16 | [香川・山本 (2022)](https://doi.org/10.20719/japmhn.31.21-028)、[J-STAGE全文](https://www.jstage.jst.go.jp/article/japmhn/31/1/31_31.21-028/_html/-char/en)、III.5、IV、V.3、Tables 1–2、PDF pp.12–16 | 精神科5施設、配布350・回収304・有効242。16項目・7+5+4・2件法を明示、標準化得点を分析。逆方向処理の記述不足を記録。本文／抄録の関連なしと、表2の有意性記号は原PDFでも不一致だったため、有意／非有意の関係登録は保留。引用r=.84は研究自身のαではない。相手のUWESは17項目で、9項目版へ使用根拠を移さない。 |

## 採用：関係メタ分析1本から2関係

[Amstad, Meier, Fasel, Elfering, & Semmer (2011)](https://doi.org/10.1037/a0022170)、Journal of Occupational Health Psychology, 16(2), 151–169。[著者公式PDF](https://laurenzmeier.info/pdf/Amstad2011JOHP.pdf)のMethod（pp.155–157）、Tables 2–3（pp.158–159）を抽出・目視照合。

- PsycINFO、主要10誌の手検索、引用追跡。1999年1月～2006年9月の英語査読済み／印刷中論文を対象。方向不明・両方向混合、将来葛藤、肯定的促進のみ、相関を得られない研究を除外。
- 98論文・112標本・427相関。重複調査の同じ関係は大きい標本を採用。同一標本の従属相関を統合、調整分析では多水準モデル。355/427相関は横断研究で、縦断研究も可能な限りベースラインを採用。
- 信頼性を補正するランダム効果モデル、標本数加重相関。仕事→家庭／家庭→仕事を区別し、時間・ストレス反応・行動は統合。特定尺度版ペアや因果効果と扱わない。
- 職務満足：仕事→家庭−.26（95% CI [−.273, −.250]、k=54、N=25,114）、家庭→仕事−.13（[−.148, −.120]、k=35、N=19,180）。
- バーンアウト／消耗：仕事→家庭.38（[.361, .396]、k=15、N=9,177）、家庭→仕事.27（[.244, .292]、k=6、N=5,885）。kは効果量数で、独立論文数ではない。
- `applicationEvidence`2記録・関係2件は同じ1メタ分析。`itemCounts: []`と概念水準を維持。Carlson原版に関連資料を付けたが、全研究が18項目を使った意味ではない。確認日2026-10-02を刊行年や検索対象期間と混同しない。

## 限定検索・未調査・HOLD

検索日2026-10-02。Crossrefは関連度上位20件／対象、出版年制限なし。Web検索は日本語・英語、期間制限なし、Web索引に載る範囲。J-STAGE・CiNiiの対象検索を併用。これらは各データベースの全件検索や系統的レビューではない。

| 対象・検索語 | 範囲と判定 |
| --- | --- |
| `Janssen 9項目 革新的行動 日本語 妥当性`、`Janssen innovative work behaviour Japanese validation scale`（J-STAGE／CiNii対象を含む） | 中村2022の日本語9項目使用を本文で確認。翻訳・逆翻訳、独立再検査、測定不変性の一次本文は検索範囲内で根拠未確認。日本語版が不存在という結論ではない。 |
| `general self efficacy scale Japanese validation`、`一般性セルフ・エフィカシー 尺度 坂野 東條 16` | 1986原著と2022使用を確認。英語起源GSE-10等の全文検証は今回未完了で、GSES-16の根拠を転用しない。 |
| `Carlson Kacmar Williams work family conflict scale`、`Amstad Meier Fasel 2011 pdf` | 前回HOLDの英語原版とAmstadメタ分析の本文確認が完了。Carlson原版の独立使用、英日間不変性の網羅探索は未実施。 |
| `absorptive capacity scale Flatten`、原題／DOI・大学ポータルを確認 | DOI 10.1016/j.emj.2010.11.002の書誌は確認。Twenteの公開ポータルは書誌のみで原著方法・項目表未取得。HOLD。別の吸収能力尺度の本文から項目数を移さない。 |

中丸・大塚（2025）「Organizational Change Recipients’ Beliefs Scale 日本語版の作成および信頼性・妥当性の検討」（J-STAGE, 27(1), 1–13）はGSESの使用候補としてPDFを確認した。方法p.6の下位尺度名が原著GSES-16と食い違い、使用項目数を確定できなかったため使用研究へ追加しない。OCRBS日本語版自体の新規登録は今回未調査の別対象。

上の限定検索を実施した対象と、未着手の他対象・関係候補261組は区別する。書誌のみで止まった対象は「本文検証未完了」であり、関係マップの未調査候補を一括で「根拠なし」に変えない。

次はFlatten原著、Sinkula等の学習志向、ダイナミック・ケイパビリティ、TRI、社会的望ましさ、JDS、Carlson英語独立使用、IWBの日本語検証とScott–Bruce原典表を優先。消費者行動の自己一致性・サービスリカバリー公正の既存HOLDも継続。

## 検証

- `node verify-data.mjs`：106概念・146尺度・175使用研究・39ガイド・14関係で成功。
- `data.js`、`app.js`、`relations.js`、`collect-literature.mjs`の構文検査、`git diff --check`：成功。検証器・表示ロジック・依存は変更していない。
- `origin/main:data.js`との構造比較：既存143尺度の全使用研究171件、心理測定根拠、日本語根拠、既存12関係を保持。既存尺度の変更は渡井版の親リンク・注記のみ。新規3尺度の項目本文は空、利用条件は未確認のまま。
- 更新後の収集キュー生成成功：407件。これは調査キューで、407件の本文確認完了という意味ではない。
- ローカルHTTP＋既存Chrome／同梱Playwright、隔離プロファイルで検証。1365×900で3新規尺度の検索・詳細、GSES採点留保、WFCSの親子表示、レビュー絞り込み、3尺度43項目比較、検索／研究設計／関係のCSV・JSONを確認。
- レビュー絞り込みの5関係は2 DOIのメタ分析に由来。新規2関係の本文確認日2026-10-02・Table 2–3が出典詳細・JSONへ保存されること、未調査候補の表示を確認。
- 375×812で関係画面の横はみ出しなし。PC・スマートフォン幅の画像を目視確認。ブラウザの警告・エラー・例外0。
- 実機スマートフォン、専門家の選定合意、全尺度の網羅性、今回分の公開ページ反映は未検証。
