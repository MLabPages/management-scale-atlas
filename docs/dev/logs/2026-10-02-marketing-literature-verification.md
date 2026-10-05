# マーケティング・消費者行動の本文確認（2026-10-02、日本時間）

## 変更と件数

v0.85.0：106概念・148尺度・180個別尺度使用研究・40選択ガイド・16関係。v0.84.0から2尺度・5使用記録・1ガイド・2関係を追加した。新規概念は0。使用記録5件は論文3本、関係2件は同じメタ分析1本に基づく。日本語区分は検証済み16・使用例15のまま、未確認90。日本語の正式検証を新たに認定していない。

`codex/scale-literature-batch-2026-10-02`の既存HEAD `280bbae`から続行。開始時のtracked変更はなく、既存の無視対象`collection/`・`.wrangler/`を保持した。通常のfetchはsandbox内のschannel資格情報エラーで失敗したが、既存認証を用いるローカルfetchが成功し、HEADと同名remote branchは0/0。認証設定を変更せず、pull・reset・rebase・merge・force-pushは行わない。PR #38はマージ済みのため、継続中の同じPR #39を更新する。

## 収集スクリプトと接続

`collect-literature.mjs`で6対象を各20件のCrossref関連度検索にかけ、全て成功した。前回282から累計402 DOI候補、25から31実行ログ（過去の失敗5件も保持）。書誌120候補の増分は本文確認済み120件を意味しない。

```sh
node collect-literature.mjs --search --limit 1 --id scale:ohanian-source-credibility-15 --output collection/candidates.json
node collect-literature.mjs --search --limit 1 --id scale:mackenzie-lutz-aad-3 --output collection/candidates.json
node collect-literature.mjs --search --limit 1 --id scale:voss-hed-ut-10 --output collection/candidates.json
node collect-literature.mjs --search --limit 1 --id target:personal-involvement-inventory --output collection/candidates.json
node collect-literature.mjs --search --limit 1 --id target:sponsored-content-persuasion-knowledge --output collection/candidates.json
node collect-literature.mjs --search --limit 1 --id target:influencer-marketing-review --output collection/candidates.json
```

`scale:revised-personal-involvement-inventory-10`は以前の区分・使用研究2件によって自動キュー対象外だったため、指定IDなしで終了した。検索0件・根拠なしとは扱わず、関与の明示的な調査対象を追加して検索した。優先対象は従来12件を保持してマーケティング3件を加え15件。更新後キューは15対象＋123尺度根拠＋277関係＝415件。書誌スナップショットとキューの`searchStatus`は本文検証の完了認定ではない。

SFU著者公式（PII原版・改訂版）、Amsterdam大学（PKS-SC、2025使用候補）、J-STAGE（日本語関与・スポーツ研究）、ドイツ国立図書館（Panレビュー）、SciELO（Luo研究）の公開PDFはローカルHTTP 200。MDPIの別使用候補はローカル403／Web429で本文未取得。和歌山大学の観光関与論文はローカル接続拒否。KoayはWebツールで著者公開の掲載論文本文・方法・表を確認した。接続失敗を文献の不存在と解釈せず、アクセス制限・認証を変更していない。

PDF・抽出テキスト・目視照合画像は無視対象`collection/marketing-2026-10-02/`へ保存した。論文全文・尺度項目本文をコミットしない。

## 採用：主要尺度と版の訂正

| 尺度 | 一次本文・箇所 | 確認結果と限界 |
| --- | --- | --- |
| PII-20原版 | [Zaichkowsky (1985)](https://doi.org/10.1086/208520)、[著者公式PDF](https://www.sfu.ca/~zaichkow/JCR%2085.pdf)。Scale Construction and Reliability pp.343–345、Appendices A–B pp.349–351。採点・再検査・付録を目視照合 | 20組・7段階、左右の極性を揃え合計20～140。4製品のα=.95～.97、3週再検査r=.88/.89/.88/.93。原著の分布N=751は同一回答者の複数製品評定を含む。低中高の区分を汎用カットオフとしない。原版をRPIIの認知／感情各5項目構造へ遡って変更しない。 |
| RPII-10既存版の補充 | [Zaichkowsky (1994)](https://doi.org/10.1080/00913367.1943.10673459)、[著者公式PDF](https://www.sfu.ca/~zaichkow/JA%2094.pdf)。Scale Reduction and Revision、Tables 2–3 pp.60–64 | 正式な削減・改訂10項目。αは広告.91～.95、製品.94～.96。3週再検査47名で.77/.84/.73。認知・感情各5は関連しており、独立した別構成概念とは認定しない。原版を親に設定。DOIの1943という文字列は刊行年ではなく、1994年と区別。既存使用研究2件を保持。 |
| PKS-SC INTENT-6 | [Boerman et al. (2018)](https://doi.org/10.1080/02650487.2018.1470485)、[大学公開PDF](https://pure.uva.nl/ws/files/33392274/PKS_SC.pdf)。Phase 3のSample/Measures/Results、Tables 1, 4 pp.678–686、Discussion pp.691–693を目視照合 | 9成分のうち販売・説得意図理解の最終6項目を登録。7件法で正しい6文の平均。フィラーは得点に入れず、6項目は全質問負担ではない。英国614名、同一人の5週再検査293名。α=.89、H=.60、誤差共分散2組を許すCFAのCFI=.99/TLI=.97/RMSEA=.05（90% CI [.03,.08]）、Spearman再検査ρ=.58。独立標本の最終版再検証、予測・法則的妥当性は原著の課題。 |

PKS-SCの47質問を一律の47項目総合尺度や、その全体の6項目短縮版として登録しない。9成分全体の親尺度レコードが未登録なので、INTENTの`parentScaleId`はnull。Bearden CSCの主観的な説得知識の自信、状況的活性化、広告懐疑とは区別し、既存概念の定義・選択ガイドを補った。論文のCC BY-NC-NDを尺度の翻訳・改変・項目転載の包括許諾と解釈せず、利用条件は未確認のまま。

### 日本語根拠の誤帰属

[増地・瀧川（1999）](https://doi.org/10.4992/jjpsy.70.285)の正式題名は「リスク認知とリスクの受容におけるメッセージの効果と関与性の役割」。既存RPII-10には短い誤題名でPII使用例が付いていた。[J-STAGE PDF](https://www.jstage.jst.go.jp/article/jjpsy1926/70/4/70_4_285/_pdf)の方法p.286に1985年20項目と自著日本語訳、合計20～140が明記されている。出典を削除せず、新しいPII-20へ正しい書誌・確認箇所と共に移し、RPII-10は未確認へ訂正した。

本研究は日本語使用例であり、標準翻訳の正式心理測定検証とは認定しない。結果pp.289–290・考察pp.291–292で14＋4＋2の3因子を報告し、著者は第3因子が生じた理由として訳の不適切さの可能性を挙げる。20項目を投与した事実と、原版因子の等価性を分ける。原著の主因子解をCFAと呼ばない。

## 採用：使用研究5記録、3論文

| 登録先 | 本文と確認箇所 | 版・使用結果 |
| --- | --- | --- |
| PII-20、1記録 | 増地・瀧川1999、方法p.286、結果・考察pp.289–292 | 札幌の社会人87＋学生165＝252名。20項目・7段階。運転頻度r=.52、事故の起きにくさr=−.20、探索的3因子。独立CFA・再検査・研究自身のαは確認できず。 |
| Ohanian-15、1記録 | [Koay et al.](https://doi.org/10.1108/EBR-02-2021-0032)、[Koay著者公開全文](https://www.researchgate.net/publication/351269353_Social_media_influencer_marketing_The_moderating_role_of_materialism)。Sections 3.1–3.2、Tables 2, 4–5 | 巻号は2022（オンライン2021）。Instagram利用者191名、予備30名は加算しない。Ohanian1991を引用、魅力・専門性・信頼各5の15項目をTable 2で確認。原版意味微分から7件法同意へ変更。α=.894/.944/.930。Model 1の購買意向への信頼β=.345、専門性.408は有意、魅力−.003は非有意。実施言語は本文で明示を確認できず。 |
| Ohanian-15、SKEP-9、PI-5、3記録 | [Luo & Wan Hussain (2026)](https://doi.org/10.32870/myn.vi58.8091)、[公開掲載PDF](https://www.scielo.org.mx/pdf/myn/v27n58/2594-0163-myn-27-58-89.pdf)。Sampling and Data Collection、Measurement Instruments、Tables 1, 4–5, 8 pp.97–105を目視照合 | 中国Credamoで350名（400配布・387回収・37除外）、予備50名を加算しない。Tables 1, 5で15／9／5項目を明示、英語→中国語翻訳・逆翻訳の報告。全項目7件法同意と、Ohanianの意味微分という説明が不整合。実提示形式・項目対照は確定できず。Ohanianのαは専門性.85・信頼.87・魅力.83・全体.91、SKEP.84、PI.89。rは信頼性–PI .52、懐疑–PI −.44、信頼性–懐疑−.47。横断媒介を因果効果としない。 |

Luo論文の使用は、中国語・対象変更の実使用記録で、正式翻訳の等価性や研究全体の品質を認定したものではない。SKEPの広告一般を推奨コンテンツへ変更したこと、逆転採点・全項目対照未確認を併記する。15＋9＋5の3登録は同じ論文・同じ350名で、独立研究3本ではない。

Koayの購買意向はDodds系3項目、物質主義は5項目で、SpearsのPI-5やMVS-9へ引用だけで登録しない。Table 5の後続モデルにはt値・有意性とCIが整合しない箇所があり、整合するModel 1を記録した。Ohanian1990原著の項目表自体は今回再確認しておらず、後続使用の本文確認と区別して旧留保を残す。

## 採用：1メタ分析から2概念間関係

[Pan, Blut, Ghiassaleh, & Lee](https://doi.org/10.1007/s11747-024-01052-7), *Influencer marketing effectiveness: A meta-analytic review*, Journal of the Academy of Marketing Science, 53(1), 52–78（2025、オンライン2024）。[国立図書館公開PDF](https://d-nb.info/1352413256/34)のMethod、Table 4 continued（PDF pp.13–16）を本文・画像で確認した。

- EBSCO、ProQuest、CNKI、Scopusでinfluencer*/blogger*/vlog*等を検索。Google Scholar、引用追跡、未刊行研究の照会も使用。効果量を変換できる定量研究を対象とし、伝統的セレブリティ推奨を除外する。
- 251論文、279独立標本、1,531効果量、延べ2,009,314名・27か国。240 journal／39 conference-dissertationという数は著者の標本単位の説明で、251論文に加算しない。同一標本の複数効果を平均し過大重みを防ぐ。
- ランダム効果、測定誤差補正（α欠測は平均信頼性を代入）、Fisher-z、逆分散加重。r欠測時のβ・t・Fからの変換もあり、全てが原研究で直接報告されたrではない。
- 信頼性と購買意向：rcw=.51、95% CI [.47,.56]、k=86、N=39,132、I²=97%。
- 説得知識と購買意向：rcw=−.17、95% CI [−.36,.03]、k=16、N=5,138、I²=98%。CIが0を含むため有意な平均的負の関連とは認定しない。
- kは効果量数で、独立論文数とは異なる。いずれも尺度混在の概念水準で、Ohanian-15／INTENT-6／Bearden PK-6とPI-5の特定版ペアの効果ではない。`itemCounts: []`を維持する。同じ1レビューの2結果を独立レビュー2本と数えない。
- 本文では検索期間の始点・終点、一律の言語制限を確定できなかった。文献の2024オンライン日を検索終点と推測しない。補足資料の全収録尺度リストの逐項目確認は未完了。出版バイアス検討の実施を「バイアスなし」とせず、高い異質性・主に横断調査という限界を残す。

研究の空白候補は、同じ項目セットによる独立再検証、日本語・英中の不変性、主観的自信と意図理解・状況的活性化の弁別、実購買・縦断・実験における再検証。これは今回読んだ範囲の課題で、未調査の全関係を「根拠なし」と認定しない。

## 限定検索、本文検証未完了、未調査

検索日2026-10-02。Crossrefは上記6対象の関連度上位20件、年制限なし。Web索引の日本語・英語、期間制限なしで題名・DOI・著者の公開資料を探索。全件検索・系統的レビューとは認定しない。

| 対象・検索語 | 判定と次の作業 |
| --- | --- |
| `"PKS-SC" 日本語 妥当性`、原題＋`Japanese validation` | 今回の検索範囲内ではINTENT最終6項目の日本語翻訳・正式検証を一次本文で確認できず。未確認。不存在とはしない。独立使用・他国検証の網羅探索は未実施。 |
| `Zaichkowsky 10項目 日本語 関与 尺度`、PII原題・原著 | 日本語20項目使用は採用。観光関与の10項目（1985引用）、博士論文の10項目、2024年研究の2項目候補が見つかったが、1994年最終10項目との一致・標準翻訳の本文検証は未完了。RPIIの根拠へ流用しない。 |
| [観光地関与の論文](https://repository.center.wakayama-u.ac.jp/files/public/0/3868/20210528131418938849/AA12438820.22.51.pdf) | 索引で10項目とCFAの記載は見つかったが、ローカル接続拒否。項目セット・題名書誌・表の照合が未完了のためHOLD。10という数だけでRPII-10としない。 |
| [van Berlo & Breves (2025)](https://pure.uva.nl/ws/files/246518004/Disclosing_the_virtual_nature_of_virtual_influencers.pdf)、MethodsとTable 1 | 大学公開本文は取得済み。Ohanian／Spearsの引用とαはあるが、使用項目数が本文で確定できずHOLD。購買意向は単項目でありPI-5へ登録しない。PKS-SCの引用もINTENT-6実使用ではない。 |
| [スポーツ選手の推奨研究 (2010)](https://www.jstage.jst.go.jp/article/jjsm/2/1/2_1_19/_pdf/-char/en)、尺度選定・Table 1・Study 2 | 選手の魅力は独自14項目・4因子でOhanian-15ではない。広告態度3項目はMacKenzie–Lutzとの同一セット・出典連鎖を確認できず、同数だけでAad-3の日本語検証にしない。 |
| [Voss et al. (2003)](https://doi.org/10.1509/jmkr.40.3.310.19238)、HED/UT、CIP・MPII | HED/UTは収集対象として書誌・著者公開本文の一部を確認。今回の採用に必要な版別関係・独立使用の最終照合を完了していない。CIP/MPIIの原著方法・項目表の検証は未着手であり「検索範囲内で根拠なし」としない。 |

未調査261組の関係は文献調査待ちのまま。今回本文で確認した非有意なメタ分析結果、限定検索で日本語検証を確認できなかった対象、未着手対象を区別する。

次はPKS-SC INTENTの独立使用・日本語検証、RPIIの日本語候補の逐項目対照、CIP/MPII、Aad・HED/UTの使用研究、既存HOLDの自己一致性・サービスリカバリー公正を優先。組織能力等の従来12対象も保持する。

## 検証

- `node verify-data.mjs`：106概念・148尺度・180使用研究・40ガイド・16関係で成功。データ・アプリ・関係表示・収集スクリプトの構文検査、`git diff --check`も成功。検証器・表示ロジック・依存は変更していない。
- `HEAD:data.js`との構造比較：既存146尺度、全175使用記録、14関係、心理測定根拠を保持。日本語根拠の変更はRPIIの誤帰属をPII-20へ移した訂正のみ。既存の他尺度の日本語根拠を保持。新規2尺度は項目本文空・利用条件未確認。
- ローカルHTTP、既存Chrome・同梱Playwrightの隔離ブラウザで、148尺度の検索、PII・INTENTの詳細、PII原版／改訂の親表示、Ohanianの2使用例・形式の留保、レビュー絞り込みを確認。
- 3尺度の比較は登録版の得点項目20＋6＋10＝36。PIIの版と日本語区分、INTENTの詳細にフィラーの注意を表示。比較画面の概算負担は登録得点項目に基づき、実際のフィラー等の質問負担を含む完全な所要時間ではない。
- 検索・研究設計・関係のCSV/JSONを取得して内容を確認。新規2関係が同じ1 DOIであること、非有意なCI、本文確認日2026-10-02とTable 4の位置が詳細・JSONに保持されることを確認。全体のレビュー関係は7件／3 DOI、未調査261件を維持。
- 1365×900・375×812で比較・関係・詳細画像を目視確認。スマートフォン幅でページの横はみ出しなし、詳細は画面内に表示。ブラウザ警告・エラー・例外0。
- 最初の検証補助コードは任意の`usageStudies`が未定義の旧記録に対応しておらず修正した。UI検証の2箇所は、比較表にない採点注記を期待した指定と、マトリクス／リスト共通IDの未限定指定を修正した。アプリの失敗ではなく検証コードの指定ミスで、修正後の全チェックが成功した。

専門家の選定合意、実機スマートフォン、全尺度の網羅性、PRのマージ・公開反映は未検証。
