# v0.123.0 定時拡充（SLAW-3、PELS、GAAIS の使用研究）

日付: 2026-11-06

## 追加

- 既存概念 `workplace-loneliness` に尺度 `ayase-slaw-3`（SLAW-3）を追加した
- 既存概念 `empowering-leadership` に尺度 `schermuly-pels-24`（PELS）を追加した
- `schepman-rodway-gaais-20` の `usageStudies` を1件追加した（4件から5件）
- 概念144、尺度196、使用研究237、選択ガイド80、関係16。版は v0.122.0 から v0.123.0。`meta.updated` は 2026-11-06。`meta.scope` は `144概念・196尺度`
- 開発論文は `usageStudies` に入れていない
- 既存概念への逆リンクは足していない。選択ガイドは、既存の2概念に choice を1つずつ足した。ガイドの件数は増えない

## 本文から確認した値

### SLAW-3

- Crossref。著者 Izumi Ayase、Akihito Shimazu、Masahito Tokita、Kentaro Sakamaki、Norito Kawakami。Journal of Occupational Health, 68(1)。DOI `10.1093/joccuh/uiaf068`。オンライン 2025-11-27。印刷 2026-01-06。VOR は CC BY 4.0。登録年は印刷年。Europe PMC の全文 XML（PMC13057720）を 2026-11-06 に開いた。出版社の HTML は 403 で、URL にはしていない
- 題名は Development and validation of brief measures of workplace loneliness。受理は 2025-11-20。著作権表示は 2025
- SLAW-3 は Hughes らの Three-Item Loneliness Scale とその日本語版を基に、職場の文脈を足した3項目。LAWS-16 の16項目から抜いた短縮版ではない。`parentScaleId` は空
- 5件法（1＝Never～5＝Often/Almost always）。極性は揃える。α=.91。第1主成分は分散の85.2%。負荷は 0.88、0.94、0.94
- 分析標本は1,228名（男性670、女性558、平均年齢44.80、SD 10.29）。第12波、2024年12月。招待2,400名、完了1,380名から正社員または公務員
- 採点式の明示はない。Table 2 の Total 平均 7.82（SD 3.13）は、項目平均 2.80、2.48、2.55 の和と一致する。合計とは断定しない
- LAWS とのポリコリック相関は社会的交友 0.64、情緒的剥奪 0.46。同じ論文の LAWS は、`wright-laws-16` の使用研究に足していない
- Waite と Igarashi への謝辞は、元の3項目を改める許諾。SLAW-3 の利用許諾の文ではない。`usagePermission` は `unknown`
- 方法節と Table 2 に英語の項目がある。項目本文は転載していない。`itemPublicationStatus` は `source-open`。`items` は空
- 実施言語の明記はない。日本語は `unconfirmed`
- 同じ論文の SLAW-1 は登録していない

### PELS

- Crossref。著者 Carsten C. Schermuly、Mona Algner、Timo Lorenz。Frontiers in Psychology, 16, 1539085。DOI `10.3389/fpsyg.2025.1539085`。2025-07-22。VOR は CC BY 4.0。Europe PMC の全文 XML（PMC12321827）を 2026-11-06 に開いた
- 24項目。6次元×各4（sense making、coaching、participation、transfer of power、competence development、leading by example）。初期64項目を7件法（1＝I do not agree at all～7＝I fully agree）で評定し、ドイツ標本の遺伝的アルゴリズムで24項目に絞った。米国標本で検証した。最終24項目のアンカーの再記述はない
- Study 1 はドイツ362名（注意確認で9名、2.4%を除外）、米国290名（除外なし）。適合はドイツが CFI 0.96、TLI 0.96、RMSEA 0.053、SRMR 0.039、米国が CFI 0.96、TLI 0.96、RMSEA 0.065、SRMR 0.040。配置不変とメトリック不変は採択。スカラー不変は borderline accepted（ΔCFI=−0.010）。厳密不変は棄却
- Study 1 の全体 α は本文にない。Table 1 の sense making の α は 89/0.95 と印刷されている。0.89 には直さない。ω は 0.90/0.95
- Study 2 は時点1が348名、6週後が264名、照合後175名。全体 α は t1 0.96、t2 0.97。ωt も同じ。再検査相関は r=0.83。実施国は参加者節に明記がない
- 採点（合計か平均か）の明示はない。Ahearne の LEB-10 は論文が引用していない。別尺度として扱う。Arnold の ELQ は論文が38項目の別尺度として扱う
- 論文は CC BY 4.0。尺度の利用許諾の明記はない。`usagePermission` は `unknown`。Table 1 の項目は転載していない。`itemPublicationStatus` は `source-open`。`items` は空
- 日本語は `unconfirmed`。`psychometricEvidence` は1件。複数件に分けると、使用研究が空の画面が「複数環境・日本語での検証根拠あり」になる

### GAAIS の使用研究

- Crossref。著者 Jenna Bergdahl、Rita Latikka、Magdalena Celuch、Iina Savolainen、Eerik Soares Mantere、Nina Savela、Atte Oksanen。Telematics and Informatics, 82, 102013。DOI `10.1016/j.tele.2023.102013`。issued 2023-08。VOR は CC BY-NC-ND 4.0。出版社の HTML は取得できなかった。ヘルシンキ大学リポジトリにある、Elsevier の組版 PDF（電子リプリント。頁の組版は原版と違う可能性がある、と表紙が書く）を 2026-11-06 に開いた。登録の `url` はそのリポジトリにしていない。DOI のみ
- 出版 PDF は Available online 29 June 2023
- Study 2 だけ。フル20項目（肯定12、否定8）。7件法（1–7）。両端の言葉は Study 2 の節にない。合計したうえで 1–7 に戻す。旗艦の5件法と項目平均からの変更は adaptation
- McDonald ω は T1 が肯定 0.92、否定 0.88、T2 が肯定 0.93、否定 0.88。表が文を分断している。係数αはこの節にない
- T1 は 2021年5–6月、N=1,226（18–80歳、平均50.30、SD 16.67、女性51.15%）。回答率30.81%。T2 は 2022年5–6月、N=828。T1 の67.55%を維持。Norstat Finland。倫理は 29/2021
- Study 2 の実施言語の明記はない。Study 1 がフィンランド語と書いたことは転用していない
- 同じ論文の Study 1 は短縮8項目（肯定4、否定4）。この使用研究にしない
- Schepman と Rodway は著者に含まれない。項目本文は転載していない
- 旗艦の5件法、項目平均、`usagePermission`、`itemPublicationStatus` は変えていない。心理測定根拠の `verifiedAt` は 2026-10-24 のまま。既存4件の `verifiedAt` は変えていない

## 見送り

- SLAW-1
- Ayase らの論文が基準として使った LAWS を、`wright-laws-16` の使用研究に足すこと
- Bergdahl らの Study 1 の短縮8項目
- PELS の初期64項目
- 前回までの HOLD

## 採否

- 項目本文は転載しない。SLAW-3 と PELS の `items` は空。GAAIS の `itemPublicationStatus` は `not-published` のまま
- `usagePermission` は、SLAW-3 と PELS が `unknown`。新しい列挙値は作らない
- 第三者サイトの URL は `data.js` に入れてない。`sourceUrl` と使用研究の `url` は DOI
- 値を創作していない。sense making の α の 89、Study 2 の実施国、SLAW-3 の合計採点、GAAIS の Study 2 の両端の言葉と実施言語は、本文にないので書いていない
- `app.js`、`index.html`、`.wrangler/` は変えていない

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test` は通過した。`verify-data.mjs` の件数は、概念144、尺度196、使用研究237、選択ガイド80、関係16。登録版そのものが3・4項目は31。個別使用研究で3・4項目版を確認済みは28。日本語は検証済み27、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認123。追加分の URL に `researchgate.net` はない。`git diff --check` は指摘なし。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.123.0 実データ版`、件数は `144概念・196尺度・個別使用研究237件`、フッタは `v0.123.0`。コンソールエラーはなかった。キーワード「SLAW」は1件。詳細は最終確認日 2026-11-06、3項目、5件法（1＝Never～5＝Often/Almost always）、利用条件未確認、使用先行研究は未登録、DOI `10.1093/joccuh/uiaf068`。項目本文は出ない。概念「職場の孤独感」の判断ガイドは LAWS と SLAW-3 の2択で、SLAW-3 は16項目からの短縮ではないと出る。キーワード「GAAIS」のカードは使用先行研究5件。詳細の旗艦は5件法のまま。Bergdahl ほか（2023）の20項目、7件法、T1 N=1,226、T2 N=828、Study 1 の短縮8項目は含めない、DOI `10.1016/j.tele.2023.102013` が出る。PELS の詳細は24項目、7件法（1＝I do not agree at all～7＝I fully agree）、全体の 0.96、DOI `10.3389/fpsyg.2025.1539085`。概念「エンパワーリング・リーダーシップ」の判断ガイドは LEB と PELS の2択。キーワード「存在しない尺度zzzz」は該当なし。検索結果の JSON 出力は `0.123.0` を含む。研究設計に SLAW-3 と PELS を入れると合計27項目、選択は2件。再読み込み後も選択は2件のまま。幅390pxでは詳細ダイアログは幅352px、左19px、概念カードは幅358px、左16px、ページの横溢れなし。幅1280pxでは詳細ダイアログは幅720px、横溢れなし。
