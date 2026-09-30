# 2026-10-01 ローカル文献収集・本文確認

対象：PR #38、`codex/scale-relation-evidence-map`。開始時の作業ツリーはclean、既存の無視対象 `.wrangler/` は保持。PRの実装・引き継ぎコミットを引き継ぎ、mainへマージしていない。

## 結果

- v0.82.0 → v0.83.0：104 → 105概念、140 → 143尺度、167 → 171個別使用研究。
- 新規尺度3件：Chivaらの組織学習能力14項目、日本語認知欲求15項目、Carlson系WFCS日本語18項目。
- 使用研究4件：上記3尺度に各1件、既存の英語NFC-18に1件。開発・再検証論文は使用研究に算入しない。
- 日本語検証済みレコード13 → 15。認知欲求では、原著に加え、Web調査で1因子を再現しない後続検証も収録。
- 関係9 → 12件。新規3関係は**同じ1本の縦断メタ分析**の結果。概念水準であり、特定の登録尺度版ペアの検証ではない。
- 関係の画面・CSV/JSONで出典ごとの本文確認日と箇所を表示。既存出典を再確認済みに変更していない。メタ分析を尺度検索のレビュー絞り込みに含め、レビュー件数はDOI／URLで重複排除。

## 接続と収集の再開

WindowsローカルのNode 24.14.0でCrossref・OpenAlex・J-STAGE・CiNii ResearchへHTTP 200。クラウドのCONNECT 403を再現せず、ネットワーク・認証設定は変更していない。PowerShellの一部TLS失敗とは分けて記録する。接続先トップページの成功は個別論文の取得成功を意味しない。

実装済み `collect-literature.mjs` から開始し、書誌候補をDOIで統合した。最終ログは21検索実行、16成功・5失敗（429）、14種類の対象、281件の重複排除後書誌候補。429の5対象は1件ずつ再試行し、全14対象の最新検索が成功。候補281件を本文確認済み論文数とは扱わない。更新後のキューは404件（追加候補12、尺度根拠118、関係274）。検索時期・検索語・API URL・成功／失敗は `collection/candidates.json` の `runs` に保持。

```sh
node collect-literature.mjs --output collection/queue.json
node collect-literature.mjs --search --limit 1 --id target:absorptive-capacity --output collection/candidates.json
node collect-literature.mjs --search --limit 1 --id target:learning-orientation --output collection/candidates.json
node collect-literature.mjs --search --limit 12 --output collection/candidates.json
node collect-literature.mjs --search --limit 1 --id scale:cacioppo-petty-kao-nfc-18 --output collection/candidates.json
node collect-literature.mjs --search --limit 1 --id 'neighbor:job-crafting|work-engagement' --output collection/candidates.json
```

429の再検索は `target:technology-readiness`、`target:self-congruity`、`target:carlson-wfc`、`target:jds`、`target:janssen-iwb` を個別指定。年・出版日による限定なし、各検索20候補。Crossrefのランキング上位のみで、網羅検索ではない。PDF・本文抽出・候補・一時スクリプトは無視対象 `collection/` に保存し、原文や尺度項目をGitへ収録していない。

## 採用した本文と確認箇所

| 出典 | 確認箇所・登録内容 | 限界・区別 |
| --- | --- | --- |
| Chiva, Alegre, & Lapiedra (2007), [10.1108/01437720710755227](https://doi.org/10.1108/01437720710755227)。[著者公開の全文](https://www.researchgate.net/publication/242026262_Measuring_organisational_learning_capability_among_the_workforce) | pp.231–232、Tables II／IV／V。14項目、5次元（2+2+3+4+3）、7件法。スペイン8社の現場作業者157名。α=.74–.89、合成信頼性=.65–.80。 | 掲載項目は英語、実施はスペイン語。リスクテイキングの合成信頼性=.65。弁別検定の一部は非有意で、他の組織学習尺度との等価性を認定しない。学習志向・吸収能力とは別概念。 |
| Grandia & Voncken (2019), [10.3390/su11195215](https://doi.org/10.3390/su11195215)、[公開PDF](https://mdpi-res.com/d_attachment/sustainability/sustainability-11-05215/article_deploy/sustainability-11-05215.pdf) | §§4.1–4.3、pp.6–9。オランダの公共調達調査、OLC全14項目を5件法で使用。Obliminで3成分（7+4+3）、KMO=.873、α=.830／.864／.893。 | 7件法・5次元の原版そのままの再現ではない。個人回答を組織集計した研究ではない。正確な有効Nと質問紙言語は今回の本文確認で未確定。 |
| 神山・藤原 (1991), [10.14966/jssp.KJ00003725148](https://doi.org/10.14966/jssp.KJ00003725148)、[J-STAGE PDF](https://www.jstage.jst.go.jp/article/jssp/6/3/6_KJ00003725148/_pdf/-char/ja) | pp.184–192の尺度構成・信頼性・再検査。45候補から15項目、1因子、7件法、逆方向項目を反転した項目平均。学生184名、次年度340名・再測定313名、一般166名。α=.86／.88／.87／.87、対応264名の1か月再検査r=.74。 | 4データセットを全て独立標本とは数えない。NFC-18の逐語訳や正式15項目短縮版ではない。原版候補プールは未登録のため親IDなし。 |
| 藤島・髙橋・江利川・山田 (2020), [大学リポジトリ本文](https://swu.repo.nii.ac.jp/records/7153) | pp.16–20、Tables 1–3。公募型Web調査N=1,138／1,338。15項目、7件法、最尤法・Promax。3因子、RMSEA=.06／.07。 | 正順／逆転項目が別因子となり原著の1因子を再現しない。回答選択肢は1991年と逆順。14項目2因子の追加分析を正式短縮版に登録せず、再検証は使用研究にも数えない。DOI未確定。 |
| 神山・藤原 (1994), [10.11194/acs1993.1.2_45](https://doi.org/10.11194/acs1993.1.2_45)、[J-STAGE PDF](https://www.jstage.jst.go.jp/article/acs1993/1/2/1_2_45/_pdf/-char/ja) | pp.45–61の予備調査・実験・結果。予備137名、実験23名。15項目の合計得点、中央値で高低群。広告評価の交互作用F(1,21)=4.44、p<.05。 | 原著の平均得点と採点が異なる。他の指標は非有意。視線追跡は視覚的検討で定量分析なし。α・効果量・CIは確認できず、関係の統合根拠にはしない。 |
| Lillard, Meyer, Vasc, & Fukuda (2021), [10.3389/fpsyg.2021.721943](https://doi.org/10.3389/fpsyg.2021.721943)、[出版社本文](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.721943/full) | Participants、Measures / Need for Cognition。米国・カナダ成人1,905名、18–81歳。英語NFC-18、5件法、合計得点、研究内α=.90。 | 回顧的な学校経験・自己選択による交絡を残す。教育介入の因果効果や測定不変性を認定しない。 |
| 渡井・錦戸・村嶋 (2006), [10.1539/sangyoeisei.48.71](https://doi.org/10.1539/sangyoeisei.48.71)、[J-STAGE PDF](https://www.jstage.jst.go.jp/article/sangyoeisei/48/3/48_3_71/_pdf) | pp.71–81、方法・Tables 1–4。Carlson系18項目、方向2×形態3×各3項目、5件法、次元別項目平均。翻訳・逆翻訳・原著者確認。427配布、有効180名。別の再検査34名、1週間。α=.77–.92、ICC=.76–.93、6因子CFA CFI=.95、RMSEA=.07。 | PCAでは行動次元がまとまり5因子。6因子が全分析で再現したとはしない。Netemeyer-10の翻訳ではない。翻訳許可の記述を第三者への無条件転載許可に転用しない。 |
| Maekawa & Saito (2024), [10.15078/jjphn.13.1_2](https://doi.org/10.15078/jjphn.13.1_2)、[J-STAGE本文](https://www.jstage.jst.go.jp/article/jjphn/13/1/13_2/_html) | II.6.2、III.1、Table 1。720世帯配布、有効127夫婦。日本語18項目・5件法を全て使用。加算で方向別45点、形態別30点満点。全体α=.90。 | 夫婦254名を独立した254標本と数えない。2006年の平均採点とは異なる。全体αのみから6因子構造や夫婦間不変性を認定しない。 |
| Silapurem, Slemp, & Jarden (2024), [10.1007/s41042-024-00159-0](https://doi.org/10.1007/s41042-024-00159-0)、[出版社本文](https://link.springer.com/article/10.1007/s41042-024-00159-0)、[Table 1](https://link.springer.com/article/10.1007/s41042-024-00159-0/tables/1) | Methods、Table 1のConsequencesと結果節。8データベース、開始年〜2020年4月、英語、最低1か月間隔の縦断研究。64研究・66独立標本・全体N=27,195。補正ρ／95% CI：エンゲイジメント.46 [.40,.52]（k14,N6,493）、職務満足.35 [.26,.43]（k10,N3,433）、バーンアウト−.22 [−.27,−.18]（k4,N1,523）。 | 異なる尺度系統を含み、総合クラフティングは妨害的要求度低減を除く。全体Nを各関係のNに転用しない。Table 3の逆方向や下位次元の違いを区別。3関係を3独立レビューと数えない。2024年刊でも検索終了は2020年。 |

J-STAGE等のPDFはテキスト抽出に加え、NCSの方法・表、WFCSの方法・表を画像でも照合。出版社のHTTP 200でチャレンジHTMLだけが返る場合があり、ステータスだけで本文取得と判定しない。MDPIは公開PDFで照合した。Springerの表ページも後続アクセスでチャレンジHTMLになったため、初回確認と本文結果節を区別する。

## 限定検索で根拠未確認とした範囲

検索日：2026-10-01 JST。公開Web検索を使用し、J-STAGE／CiNii Researchのページ索引も対象とした。各データベースの全レコードを直接・網羅的に検索したものではない。年制限なし、日本語・英語。対象集団は限定せず、日本語で同じ項目数・尺度系統を使用して心理測定結果を報告する一次本文を採用条件とした。

| 検索語 | 検索範囲内の判定 |
| --- | --- |
| `"Chiva" "日本語" "尺度"`、`"組織学習能力" "尺度" site:jstage.jst.go.jp OR site:cir.nii.ac.jp` | Chiva系14項目そのものの日本語検証の一次本文は根拠未確認。組織学習の別尺度を転用しない。 |
| `"Need for Cognition" "18" "日本語" 妥当性` | 英語NFC-18そのものの日本語検証は根拠未確認。確認した日本語15項目を別登録。 |
| `"Netemeyer" "日本語" "妥当性" ワーク ファミリー` | Netemeyer-10の日本語検証は根拠未確認。確認した渡井らの18項目を別登録。 |

これは研究不存在・日本語版不存在の認定ではない。上記の限定検索を行った3対象は「未調査」と区別して尺度の説明へ記載。未実施の他の日本語検索、関係マップの262調査候補は「未調査」のまま。Crossrefで書誌候補だけを検索した対象は「書誌検索済み／本文検証未完了」であり、根拠未確認の否定的結論へ格上げしない。

## 残った課題・次の順序

1. 吸収能力のFlatten原版：書誌確認・OpenAlex調査まで。原典の方法・項目表が未取得でHOLD。
2. 学習志向（Sinkula系等）は新規OLCと別の候補。ダイナミック・ケイパビリティ、TRI、一般性自己効力感、社会的望ましさ、JDS、Janssen IWB等の書誌候補を本文検証へ進める。
3. Carlson英語原版の方法・表を確認してから原版レコードと親子対応を追加。日本語18項目の根拠から英語原版の未確認数値を補わない。
4. Frederick & VanderWeele (2020) のジョブ・クラフティングレビュー（10.1080/23311908.2020.1746733）はPDF 403で本文未確認。Rudolphら (2017) のレビューも今回未確認。抄録の効果量だけで関係を増やさない。
5. OLCの第2独立使用例、日本語根拠、NCSのWebでの因子構造、WFCSの他職種・夫婦間測定不変性を追う。自己一致性・サービスリカバリー公正の既存HOLDも継続。

## 検証

- `node verify-data.mjs`：105概念・143尺度・171使用研究・39選択ガイド・12関係で成功。
- JavaScript構文検査、`git diff --check`：成功。既存IDの削除なし、既存の使用研究167件を保持、新規4件のみ増分。
- ローカルHTTP＋インストール済みChrome／同梱Playwright。Browser pluginは未提供。依存追加なし、隔離したブラウザプロファイル。
- 1365×900：追加3尺度とNFC-18の検索・詳細、メタ分析のレビュー絞り込み、3尺度47項目比較、検索・研究設計・関係のCSV/JSON、本文確認日・箇所、未調査候補表示を確認。3関係の出力は同一出典URLであることを確認。
- 375×812：関係画面のスクリーンショット確認、ページ全体の横はみ出しなし。コンソール警告・エラー／ページ例外0。
- 実機スマートフォン、専門家間の尺度選択合意、全文献の網羅性は今回未検証。公開ページへの反映はPRマージ・デプロイ後の別工程。
