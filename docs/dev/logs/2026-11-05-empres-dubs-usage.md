# v0.122.0 定時拡充（従業員レジリエンス、DUBS の使用研究）

日付: 2026-11-05

## 追加

- 概念 `employee-resilience`（従業員レジリエンス）と尺度 `naswall-empres-9`（EmpRes）を追加した
- `naswall-empres-9` の `usageStudies` を1件追加した（0件から1件）
- `reijseger-dubs-6` の `usageStudies` を1件追加した（0件から1件）
- 概念144、尺度194、使用研究236、選択ガイド80、関係16。版は v0.121.0 から v0.122.0。`meta.updated` は 2026-11-05。`meta.scope` は `144概念・194尺度`
- 開発論文と技術報告は `usageStudies` に入れていない
- 既存概念への逆リンクは足していない

## 本文から確認した値

### EmpRes

- 公式 PDF。https://www.resorgs.org.nz/wp-content/uploads/2019/08/Resilient_Organisations_2015-04_Employee_Resilience_Scale.pdf 。2026-11-05 に開いた。Resilient Organisations Research Report 2015/04。ISSN 1178-7279。August 2015。DOI はない
- 表紙の題は Employee Resilience Scale (EmpRes) Measurement Properties。引用指定は Näswall, K., Kuntz, J., and Malinen, S. (2015) Employee Resilience Scale (EmpRes): Technical Report
- 著者は表紙と引用指定が Katharina Näswall、Joana Kuntz、Sanna Malinen。掲載ページの HTML は開いていない
- 定義は 1.1。組織が支え、促進する従業員の能力で、困難な状況でも資源を用いて適応し続け、仕事で栄える。安定した特性ではなく行動
- 2013年の初版（Näswall, Kuntz, Hodliffe, & Malinen。Research Report 2013/06）は、2つの相関因子が問題になり、行動への焦点に合わない項目があった。項目を削り、一部の文言を直し、アンカーを頻度にした。2013年の項目数と α は、この技術報告からは特定しない。同じレコードにしない
- 9項目。探索的因子分析は主軸因子法、direct oblimin。残す基準は負荷 0.3 超、かつ交差負荷がないこと
- 送付363、回答302（本文は応答率83%）、listwise 後の有効標本295。ニュージーランドの白カラー従業員。初版と同じ組織。全国の事業所
- 方法節は7件法（1＝Never～7＝Almost always）。導入は Never～Always。旗艦は方法節
- 本文は1因子、分散の54%、Table 2 と書く。表題は Table 1。分散は 54.07。固有値は 4.87。一致しないので、どちらにも寄せない
- 信頼性は .91。α を計算した人数の別記はない
- 採点（合計か平均か）の明示はない
- 2.2 は、使う人に当該報告の引用と、匿名化データの提供を求め、詳細は著者へ連絡するよう書く。有償ライセンスや、使用前の許可審査とは書いていない
- 表に英語の項目がある。項目本文は転載していない
- 査読版は Crossref。Näswall、Malinen、Kuntz、Hodliffe。Journal of Managerial Psychology, 34(5), 353–367。DOI `10.1108/jmp-02-2018-0102`。issued 2019-07-01。ライセンス欄は Emerald の tdm。表の α と N は旗艦にしない

### EmpRes の使用研究

- Crossref。著者 Yanhui Mao、Yao Lai、Yuxi Zhai、Mei Xie、Junkai Yu、Qiutong Wang、Shaokai Lu、Jianhong Ma、Marino Bonaiuto。Frontiers in Psychology, 13, 901085。DOI `10.3389/fpsyg.2022.901085`。2022-07-01。VOR は CC BY 4.0
- 出版社ページの Participants and Procedure、Measures、Employee Resilience を開いた
- 9項目。Näswall et al.（2015）。中国語。Brislin（1970）の翻訳・逆翻訳
- フロー以外は5件法（1＝strongly disagree～5＝strongly agree）。旗艦の頻度7件法からの変更は adaptation
- この標本の α は 0.949。本文の 0.85 は Zhu ら（2019）の参照値
- 900名に接触。不注意回答を除いた最終884名。本文は女性224、男性640。合計は864で、884と一致しない。年齢は18–60歳、Mean = 32.35、SD = 0.857。62.2%が現在の会社で3年超。2020年12月
- 倫理は筆頭著者の大学の現地倫理委員会。承認番号の明記はない
- 引用文献の2015年は Hodliffe を含む4名と題名 Measurement Properties。技術報告の引用指定は3名の Technical Report。どちらにも寄せない
- 例示項目が本文にある。項目本文は転載していない
- 開発者は著者に含まれない

### DUBS の使用研究

- Crossref。著者 Agnes E. van den Berg、Femke Beute。Journal of Environmental Psychology, 76, 101641。DOI `10.1016/j.jenvp.2021.101641`。issued 2021-08。VOR は CC BY 4.0
- 6項目・単一因子。1＝never～7＝always。6項目の平均。α=.91 は3波の平均。N=40。オランダ。バーンアウトまたはストレス関連。女性31
- 旗艦の Sample 1 は 0＝never～6＝always。1–7 は adaptation。旗艦は変えていない
- 開発者は著者に含まれない。項目本文は転載していない
- 質問紙の言語は、確認した範囲では指定がない。オランダ語とは断定していない

## 見送り

- FSSB-SF、FSSB-14／FSSB-J
- EmpRes の日本語。大会抄録のみで、査読済みの検証ではない
- EmpRes の JMP 2019。書誌は一致するが、表の α と N は未確認。旗艦にしない
- Ojică 2022、Spanouli（別尺度）
- WCS のポルトガル語検証
- EWWS の Fatemi ら（2024）
- DUBS。Li, Kaltiainen, & Hakanen（2024、DOI `10.1186/s12889-024-18430-z`）は6項目から3項目を抜いている。6項目版の使用研究にしない
- 感情労働の ELS、テクノストレスの原典、MQQS
- 前回までの HOLD は変更していない

## 採否

- 項目本文は転載しない。EmpRes の `itemPublicationStatus` は `not-published`。`items` は空。表に項目があっても、画面の「原著で公開」にはしない
- `usagePermission` は `research-use`。引用と匿名化データの依頼がある。`permission-required` は、NAQ のように使用前の許可が条件のときに使う。技術報告は許可審査とは書いていない。学術無料・商業は事前許諾、とも書いていない。その違いは notes に残した。新しい列挙値は作らない
- 第三者サイトの URL は使っていない。EmpRes の `sourceUrl` は公式 PDF。使用研究の `url` は DOI
- 値を創作していない。54% と 54.07、Table 1 と Table 2、Never～Always と Almost always、女性224＋男性640と最終884、Mao の引用と技術報告の引用指定は、どちらにも寄せていない
- `app.js`、`index.html`、`.wrangler/` は変えていない

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test` は通過した。`verify-data.mjs` の件数は、概念144、尺度194、使用研究236、選択ガイド80、関係16。登録版そのものが3・4項目は30。個別使用研究で3・4項目版を確認済みは28。日本語は検証済み27、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認121。追加分の URL に `researchgate.net` はない。`git diff --check` は指摘なし。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.122.0 実データ版`、件数は `144概念・194尺度・個別使用研究236件`、フッタは `v0.122.0`。コンソールエラーはなかった。キーワード「EmpRes」は1件。使用先行研究は1件。詳細は最終確認日 2026-11-05、係数α .91、Mao ほかの題名、DOI `10.3389/fpsyg.2022.901085`、5件法の strongly disagree、公式 PDF の resorgs.org.nz、研究利用可、匿名化データの依頼、JMP の DOI `10.1108/jmp-02-2018-0102`。項目本文（I effectively collaborate など）は出ない。キーワード「DUBS」は1件。詳細に Walk it off、DOI `10.1016/j.jenvp.2021.101641`、旗艦の 0＝never、使用研究の 1＝never、最終確認日 2026-11-05 と心理測定根拠の 2026-11-03 が出る。概念「従業員レジリエンス」の詳細は、9項目の EmpRes、α .91、心理的資本、ワーク・エンゲイジメント、職場での繁栄、バーンアウト、合算しない。キーワード「存在しない尺度zzzz」は該当なし。研究設計に EmpRes と DUBS を入れると合計15項目、選択は2件。再読み込み後も選択は2件のまま。検索結果の JSON 出力は `0.122.0` を含む。幅390pxでは詳細ダイアログは幅352px、左19px、概念カードは幅358px、左16px、ページの横溢れなし。幅1280pxでは詳細ダイアログは幅720px、左280px、横溢れなし。
