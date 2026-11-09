# v0.126.0 定時拡充（取り残されることへの恐れ、EWWS の使用研究）

日付: 2026-11-09

## 追加

- 概念 `fear-of-missing-out`（取り残されることへの恐れ）と尺度 `przybylski-fomo-10`（FoMO）を追加した
- `bartels-ewws-8` の `usageStudies` を1件追加した（1件から2件）
- 概念147、尺度199、使用研究241、選択ガイド83、関係16。版は v0.125.0 から v0.126.0。`meta.updated` は 2026-11-09。`meta.scope` は `147概念・199尺度`
- 開発論文は `usageStudies` に入れていない
- 既存概念への逆リンクは足していない。関係レコードは追加していない

## 本文から確認した値

### FoMO

- Crossref。著者 Andrew K. Przybylski、Kou Murayama、Cody R. DeHaan、Valerie Gladwell。Computers in Human Behavior, 29(4), 1841–1848。DOI `10.1016/j.chb.2013.02.014`。issued は 2013-07。ライセンスは Elsevier の tdm
- 2026-11-09 に、頁番号 1841–1848 と誌名ヘッダがある出版版の組版を開いた。Available online は 9 April 2013。ScienceDirect の HTML は開いていない。第三者サイトの URL は保存していない
- 定義は、他者が自分のいないところで報酬となる経験をしているかもしれない、という蔓延した不安。他者が何をしているかとつながり続けたい欲求を特徴とする
- 論文の尺度名は Fear of Missing Out scale。呼称は FoMOs。表示略称は FoMO
- 10項目・単一次元。初期32項目。確認的因子分析で25項目。段階反応モデルで10項目
- 25項目の確認的因子分析は χ²(275)=1778.1、p<.01、RMSEA=.073、SRMR=.056。10項目の適合度としては書いていない
- 5件法（1＝Not at all true of me、2＝Slightly true of me、3＝Moderately true of me、4＝Very true of me、5＝Extremely true of me）
- 得点は10項目の平均。Study 1 の潜在特性得点と素点平均の相関は r=.95
- 旗艦の係数αは Study 1 の .87。平均 2.56（SD 0.82）。歪度 0.27、尖度 −0.48
- Study 1 は MTurk。男性672、女性341、n=1,013。18–62歳、M=28.5、SD=8.55。英語に流暢。米国41.1%、インド35.9%、オーストラリア5.6%、カナダ3.9%、英国3.2%、その他10.3%。報酬は0.30ドル
- Study 2 の α は .90。平均 1.89（SD 0.75）。英国の労働年齢成人2,079名（男性1,040、女性1,039）。22–65歳、M=43.21、SD=11.49。2011年9月下旬の2週間。旗艦の α にはしていない
- Study 3 の α は .89。平均 2.37（SD 0.84）。大学1年87名（男性20、女性67）。18–33歳、M=20.00、SD=2.96。旗艦の α にはしていない
- 逆転の指示は、方法と付録にない
- `usagePermission` は `unknown`。出版版は 2013 Elsevier Ltd. All rights reserved。尺度の利用許諾の明記はない
- `itemPublicationStatus` は `not-published`。`items` は空。付録 A の項目は転載していない
- `japaneseVersionStatus` は `unconfirmed`。開発論文の3研究は使用研究に入れない
- `relatedConcepts` は空。衝動購買、物質主義、知覚楽しさは開発論文が測っていない
- `verifiedAt` は 2026-11-09

### EWWS の使用研究

- Karaca, G.（2023）。Enhancing Workplace Well-Being: Employee Perspective。Eastern Mediterranean University、Institute of Graduate Studies and Research。Doctor of Philosophy in Business Administration。June 2023。Gazimağusa, North Cyprus。指導は Cem Tanova
- DOI はない。`url` は https://hdl.handle.net/11129/6296 。2026-11-09 にリポジトリの論文ページと PDF を開いた。Crossref のレコードはない
- Bartels ら（2019）の EWW Scale。8項目。5件法（1＝strongly disagree～5＝strongly agree）。中間のアンカーは EWW の節にない
- 質問紙はトルコ語。Brislin（1970）のバックトランスレーション。表注は Beck Translated と印刷する。back には直さない。表の英語はバックトランスレーション
- この標本の係数αは 0.904。仮説1–8の Table 2 は合成信頼性 0.924、AVE 0.608。仮説9–19の Table 8 は α 0.904、rho_A 0.910、rho_C 0.924、AVE 0.605。どちらにも寄せない
- Table 4 の Well-being は平均 3.42（SD 1.00）。Table 9 の Wellbeing は平均 3.413（SD 0.996）。どちらにも寄せない。合計か平均かは本文にない
- Q7 の外的負荷は 0.611（t=12.099）、Q8 は 0.599（t=13.303）。本文は 0.70 を超えることを有意と呼び、この2つを例外と書く。項目は除いていない
- 回収368名。全項目に答えていない68名を除き、分析300名。男性113（37.7%）、女性187（62.3%）。年齢19–58、平均34歳。30歳未満152（50.7%）、30歳超148（49.3%）。保健部門で1年以上。私的・公的な病院と診療所。目的抽出とスノーボール。オンラインの自記式。抄録は COVID-19 の期間と書く。収集月の明記はない
- 倫理は Eastern Mediterranean University の Scientific Research and Publication Ethics Board。reference no: ETK00-2021-0013。同意を取得
- 開発者（Bartels、Peterson、Reina）は著者に含まれない。題名は検証研究ではない
- 項目本文は転載していない。`verifiedAt` は 2026-11-09
- 旗艦の5件法、項目数、`usagePermission`、日本語は変えていない。心理測定根拠の `verifiedAt` は 2026-11-02 のまま。de Vries らの `verifiedAt` は 2026-11-04 のまま。尺度の `verifiedAt` は 2026-11-09

## 見送り

- WCS のポルトガル語検証。Martins、Bartolo、Palmeira、& Matos。Psychological Test Adaptation and Development, 6, 238–247。DOI `10.1027/2698-1866/a000113`。2025。CC BY 4.0。題名が検証。12項目と α=.91（結合 N=455）は本文にある。回答は 1＝strongly disagree～7＝strongly agree で、旗艦の Almost never true～Almost always true とは違う。使用研究にしない
- Rohaeni、Siddiq、Hanifa、Tembo、Haslina（2026）。Jurnal Ragam Pengabdian。DOI `10.62710/ajx3rs87`。有効239名。職場のコンパッションは Mandliya と Pandey（2023）を引用するが、指標は X1_1 から X1_6 の6つ。5件法（strongly disagree～strongly agree）。教師の場面に文言を合わせたと書く。12項目・7件法の WCS としては登録しない。同じ論文の感情知能は12指標で、Wong と Law の16項目そのものではない
- Febrina と Salendu（2023）。Empathy Jurnal Fakultas Psikologi。DOI `10.12928/empathy.v6i2.27360`。2023-12-16。参加者232名。EWWS は8項目、5件法（1＝strongly disagree～5＝strongly agree）と書く。α=0.89 は引用 [4]（Bartels ら）の値。続く 0.83 は「適応した測定具」の係数で、この232名の係数とは書いていない。推測でこの標本の α にしない
- Satmaz と Adıyaman（2026）。Frontiers in Psychology。DOI `10.3389/fpsyg.2026.1946898`。態度尺度は Çakan と Akın（2024）のトルコ語12項目・5件法。Sindermann らの ATAI 5項目ではない
- インドネシア語版 EWWS の適応（DOI `10.24036/rapun.v13i2.117090`）は前回の見送りのまま。検証研究
- 英語の WFES、Kacmar 2014、Wayne 2004、Komlenac 2022、FSSB-14、Kawasumi、Luo 2022、Yang 2023、SLAW-1、GAAIS 短縮8項目、DUBS の Li 2024、DAI の後続、MAILS の使用研究、ELS、LMWB、GWQ-12、CS-12 日本語7項目、ATAI 日本語版、GAAIS Atalla 2024、GAAIS ハンガリー語版は変更していない
- SLAW-3 と PELS は、開いたオープンアクセスの引用に、フル項目の独立使用で α まで読める論文がなかった。PELS のドイツ語紹介は開発者の論文なので使用研究にしない

## 採否

- 項目本文は転載しない。FoMO の `items` は空。`itemPublicationStatus` は `not-published`。EWWS の `itemPublicationStatus` は `source-open` のまま
- `usagePermission` は FoMO が `unknown`。EWWS は `unknown` のまま。新しい列挙値は作らない
- 第三者サイトの URL は `data.js` に入れていない。FoMO の `sourceUrl` と心理測定の `url` は DOI。Karaca の `url` は大学リポジトリのハンドル
- 値を創作していない。25項目の適合度、Study 2 と Study 3 の α、AVE の 0.608 と 0.605、平均の 3.42 と 3.413、表注の Beck は、本文のまま残している
- `app.js`、`index.html`、`.wrangler/` は変えていない

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test` は通過した。`verify-data.mjs` の件数は、概念147、尺度199、使用研究241、選択ガイド83、関係16。登録版そのものが3・4項目は32。個別使用研究で3・4項目版を確認済みは29。日本語は検証済み28、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認125。追加分の URL に `researchgate.net` はない。`git diff --check` は指摘なし。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.126.0 実データ版`、件数は `147概念・199尺度・個別使用研究241件`、フッタは `v0.126.0`。コンソールエラーはなかった。キーワード「FoMO」は1件。詳細は最終確認日 2026-11-09、10項目、使用先行研究は未登録、項目本文は「掲載していません」。付録の項目文は出ない。概念「取り残される」の詳細は、判断ガイド1択、関連概念は未登録、10項目のリンクが出る。キーワード「EWWS」の詳細は Karaca と 0.904、de Vries、使用先行研究は2件。キーワード「存在しない尺度zzzz」は0件。研究設計に FoMO と EWWS を入れると選択は2件。再読み込み後も選択は2件のまま。検索結果の JSON 出力は `0.126.0` と `przybylski-fomo-10` を含む。CSV 出力は FoMO と「取り残されることへの恐れ」を含む。幅390pxでは詳細ダイアログは幅352px、左19px、概念カードは幅358px、左16px、ページの横溢れなし。幅1280pxでは詳細ダイアログは幅720px、左280px、横溢れなし。
