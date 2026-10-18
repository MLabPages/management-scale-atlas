# v0.101.0 定時拡充（CPC-12R、PCQ-24 と REQ-16 の使用研究）

日付: 2026-10-18

## 追加

- 新概念は作らない。既存概念 `psychological-capital` に尺度 `dudasova-cpc-12r`（CPC-12R）を1件追加。Dudasova, L., Prochazka, J., Vaculik, M., & Lorenz, T.（2021）。PLoS ONE, 16(3), e0247114。DOI `10.1371/journal.pone.0247114`。公開 2021-03-03。CC BY 4.0（PMC8508554）。`sourceUrl` は DOI のみ
- `versionType` は `original`。親の CPC-12（Lorenz, Beer, Pütz, & Heinitz 2016, PLoS ONE 11(4): e0152892, DOI 10.1371/journal.pone.0152892）は未登録なので `parentScaleId` は空。notes に「CPC-12 の改訂版。CPC-12 の9項目を残し、レジリエンスの3項目を新項目に置き換えた。CPC-12 は別レコードとして未登録」と書いた
- 12項目・4次元×3（Hope 3、Self-efficacy 3、Resilience 3 は新項目、Optimism 3）。高次因子は PsyCap。Study 3 は二次因子モデルを推奨（4相関因子モデルとほぼ同等の適合で、パラメータが少なく理論に合うため）。6件法 Likert（1＝strongly disagree～6＝strongly agree）
- `reverseItems` は空。Lorenz ら（2022）Table 1 の英独12項目はすべて正方向の文で、逆転項目の記述はない、と notes に書いた
- 開発標本（Study 3）はチェコの就業者 n=333（女性68%、平均35.74歳）。オンライン・SNS 募集。調査はチェコ語。英語版とチェコ語版は S1 Appendix。予備分析は13項目で、負荷が最も低い第13項目（λ=.534）を除外して12項目
- 信頼性（Table 8、Study 3）の α は Hope .761、Optimism .793、Resilience .701、Self-efficacy .891、PsyCap 全体 .902。ω は .771／.806／.729／.895／全体 .905。適合（Table 9）の二次因子は χ²(50)=110.394、CFI .963、TLI .951、RMSEA .060 [.045, .075]、SRMR .043。4相関因子は χ²(48)=104.679、CFI .965。標準化負荷はすべて λ≥.669。Study 1（チェコの教員 n=282）と Study 2（独データ n=321・n=202 の再分析）は CPC-12R の係数に使わない
- `psychometricEvidence` の2件目は Lorenz, Hagitte, & Prasath（2022）。DOI `10.3389/fpsyg.2022.1075031`（2022-12-22、CC BY 4.0、PMC9815509）。米国 n=385（MTurk、英語）、ドイツ n=202（ドイツ語）。α は独 .91、米 .90。ω_t は独 .94、米 .92。scalar invariance まで成立、residual invariance は不成立。使用研究にしない
- `usagePermission` は `open`。無償で利用可（free-to-use。Dudasova ら 2021 と Lorenz ら 2022 は freely available）。原典は CC BY 4.0。改変可否は原典の確認範囲にないため書かない。`itemPublicationStatus` は `source-open`。`items` は空。`japaneseVersionStatus` は `validated`。`recordStatus` は `verified-metadata`。`usageStudies` は空
- 日本語根拠は池田・波多野・田中・中原（2023）。DOI `10.3389/fpsyg.2022.1053601`（2023-01-18、CC BY 4.0、PMC9896786）。kind は `psychometric-validation`。N=1,000。二次因子 χ²=217.617、df=50、RMSEA .077、CFI .960、SRMR .043。α は PsyCap 0.93（Table 4 は 0.933）、Hope .790、Optimism .868、Resilience .779、Self-efficacy .792。ω_ho .904。就業者のみで職務満足 r=.435、ワーク・エンゲイジメント r=.537。回答形式の「five-point」と「1～6」の食い違い、翻訳1名＋逆翻訳1名は japaneseStatusNote に書いた。検証論文は使用研究に入れない
- 概念 `psychological-capital` の decisionGuide に choice を1つ追加（scaleId `dudasova-cpc-12r`）。question は2択に合わせて最小限で直した。caution は、CPC-12R が別レコードとして登録済みであることと、PCQ-24 の日本語検証ではないことを残した。選択ガイドの件数は64のまま
- 既存 `luthans-pcq-24` の notes と japaneseStatusNote を「CPC-12R は別レコード `dudasova-cpc-12r` として登録。PCQ-12、CPC-12、PCQJ は未登録」に直した。同じ文が applicationEvidence の summary にもあったため、同じ趣旨に直した。scoring の「合算しない」は残した。PCQ-24 の日本語状態は `unconfirmed` のまま
- 既存 `luthans-pcq-24` に `usageStudies` を1件追加。それまで空。Wang, Y., Chen, Y., & Zhu, Y.（2021）。Frontiers in Psychology, 11, 598090。DOI `10.3389/fpsyg.2020.598090`（2021-01-12、CC BY 4.0、PMC7835524）。フル24項目。中国南部。リーダー81名（男性58.0%）と部下342名。回収率はリーダー84.4%、部下81.8%。中国語（翻訳・逆翻訳）。5件法への変更は adaptation。旗艦の6件法は変えない。α=0.89（Table 2 対角とも一致）。参考文献の Luthans ら（2007a）の DOI 誤記（10.1136/bmjqs-2017-006847）は adaptation に残した。同一論文は TPS-7 の使用研究としても登録済み
- 既存 `sonnentag-req-16` に `usageStudies` を1件追加。それまで空。Rus ら（2022）。Frontiers in Psychology, 13, 718422。DOI `10.3389/fpsyg.2022.718422`（2022-03-14、CC BY 4.0、PMC8963943）。Brief Research Report。フル16項目。5件法は原版と同じ。α は心理的距離 0.93、リラックス 0.90、熟達 0.93、コントロール 0.94。ルーマニア・データ、就業者217名（医療職44名、その他173名）、20～63歳（平均31.69歳）、女性133名。Procedure と抄録のロックダウン時期の食い違いは notes に残した。実施言語は本文に明記がない。旗艦の α・回答形式、REQ-J、日本語の状態は変えていない
- 概念128、尺度176、使用研究201、選択ガイド64、関係16。版は v0.100.0 から v0.101.0。日本語の検証済みは23から24。関連版は14のまま。未確認は107のまま。日本語使用例は17のまま。登録3・4項目は29のまま。使用研究側の3・4項目は27のまま

## 見送り

- Ayase 2026 の LAWS usage。逆転項目の不一致が残るため、未確認のまま
- KSS-7 の別 usage、BAT-23 の独立 usage、PLB-22 の Li 2020 は今回未着手

## 重複確認

作業開始時の tip は `bf7917c`（v0.100.0、128概念・175尺度・199使用研究・64選択ガイド・16関係、日本語は検証済み23・関連版14・未確認107・日本語使用例17）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の文字列で検索した。`10.1371/journal.pone.0247114`、`10.1371/journal.pone.0152892`、`10.3389/fpsyg.2022.1075031`、`10.3389/fpsyg.2022.718422`、`dudasova-cpc-12r`。追加対象の尺度と、REQ-16 の使用研究は未登録だった。`10.3389/fpsyg.2022.1053601` は PCQ-24 の notes と概念 caution に、PCQ の日本語根拠にしない旨として既にあった。尺度レコードとしては未登録だった。`10.3389/fpsyg.2020.598090` は TPS-7 の使用研究として既登録で、PCQ-24 には無かった。

既存 ID は、概念 `psychological-capital`、尺度 `luthans-pcq-24`、尺度 `sonnentag-req-16`、尺度 `edmondson-tps-7` を確認して使った。

## 根拠として確認したこと

- 数値は 2026-10-18 の作業指示に書かれた値だけを使った。指示にない係数・人数・言語・アンカーは作っていない
- CPC-12R の書誌、12項目と4次元、6件法、Study 3 の標本、Table 8 と Table 9、Lorenz ら（2022）、池田ら（2023）、利用条件、項目非転載、開発論文と検証論文を使用研究にしないことは指示の範囲
- 著者の名は指示がイニシャルのため、フルネームは補わない
- Wang らの5件法と中国語化は adaptation。旗艦の `responseFormat` は変えない。参考文献の DOI 誤記は残す
- Rus らの実施言語は本文に明記がない。ルーマニア・データであることをもって言語は書かない。ロックダウン時期の食い違いは解消しない
- URL は DOI と出版社ページ（PLoS は DOI、Frontiers の full ページ）。第三者 PDF サイトの URL は保存しない

## 採否

- 項目本文は転載しない。CPC-12R の `itemPublicationStatus` は `source-open`（原典 S1 Appendix、Lorenz ら 2022 Table 1、池田ら 2023 Appendix に項目がある）。`items` は空
- 開発論文（Dudasova ら 2021）、Lorenz ら（2022）、池田ら（2023）は `usageStudies` に入れない
- `psychometricEvidence` は開発論文と Lorenz ら（2022）の2件。日本語の係数は `japaneseEvidence` と `japaneseStatusNote` に書く
- 選択ガイドは同じ概念内の追加なので件数は64のまま。既存概念への逆リンクは足さない。関係レコードは追加しない
- Wang らの中国語と、言語未記載の Rus らは、日本語の `usage-example` にしない
- PCQ-24 の商用区分、REQ-16 の旗艦 α と回答形式、REQ-J は変えない

## 入れなかったもの

- CPC-12R、PCQ-24、REQ-16 の項目本文
- CPC-12、PCQ-12、PCQJ の新規レコード。Dudasova ら（2021）、Lorenz ら（2022）、池田ら（2023）を使用研究に入れること
- 日本語版 CPC-12R の回答件数の断定。改変可否など原典にない利用条件
- Rus らの実施言語の推測。REQ-16 の旗艦 α・回答形式・REQ-J・日本語状態の変更
- Ayase 2026 の LAWS usage。KSS-7 の別 usage。BAT-23 の独立 usage。PLB-22 の Li 2020
- 既存 HOLD。CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、Brand Affect 3／OBE-4 の日本語、Mitchell–Ambrose 5、CX Scale 18 の第2使用、Frontiers 2020 の JIS、PSI-18、PCQ-24 の Su & Hahn 2023、KSS-7 の Al-Rjoub 2024、Nagano 2024 日本語版 LAWS
- 観光ドメイン。`app.js`、`index.html`、`styles.css`。`.wrangler/` などの生成物。`docs/decisions.md`（判断の新設なし）

## 検証

- `node verify-data.mjs` 成功。概念128、尺度176、使用研究201、登録3・4項目29、使用研究側の3・4項目27、選択ガイド64、関係16。日本語は検証済み24、言語的妥当性確認2、日本語使用例17、翻訳・因子構造等の検討5、関連版の日本語根拠14、日本語で独自開発6、開発論文内の日本語検証1、未確認107
- `node verify-data.mjs --self-test` 成功
- `node --check data.js` 成功
- `node --check app.js` 成功（`app.js` は変更していない）
- `git diff --check` 成功
- ブラウザはローカルの `index.html`（http://127.0.0.1:8765）を headless Chrome で開いた。コンソールエラーとページエラーはなし。版表示は v0.101.0。390×844 では横はみ出しはなかった（scrollWidth 390、clientWidth 390）
- 検索「CPC-12R」は2件。CPC-12R 本体と、既存 PCQ-24。PCQ-24 の `japaneseStatusNote` は、依頼どおり CPC-12R を別レコードと書く文を含み、変更前から「CPC-12R 日本語版」と書いていた。尺度検索の対象には `japaneseStatusNote` と `applicationEvidence.summary` が入り、`notes` は入らない。`app.js` は変更していない。CPC-12R のカードは12項目、原版、検証済み日本語版、掲載・利用可、測定情報2件。使用先行研究のバッジはない
- CPC-12R の詳細は、日本語が検証済み（Ikeda ら、DOI 10.3389/fpsyg.2022.1053601）、心理測定根拠が2件（Dudasova ら DOI 10.1371/journal.pone.0247114 と Lorenz ら DOI 10.3389/fpsyg.2022.1075031）。使用先行研究は「登録準備中」。項目本文は転載していない。リンクに第三者 PDF サイトはない
- PCQ-24 の詳細に使用先行研究1件。Wang ら（2021）は中国語、5件法、α=0.89。旗艦の回答形式は6件法のまま。日本語は未確認のまま
- REQ-16 の詳細に使用先行研究1件。Rus ら（2022）は16項目、原版と同じ5件法、実施言語は未記載、α は 0.93／0.90／0.93／0.94。ロックダウン時期の食い違いは標本欄に残っている。ルーマニア語とは書いていない
- 概念「心理的資本」の選択ガイドは2択（商用の PCQ-24、無償の CPC-12R）。caution は CPC-12R が別レコードであることと、PCQ-24 の日本語検証ではないことを残している
