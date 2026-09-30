# Decisions

## 2026-09-30: マーケ典型概念Bは旗艦4件。Wiedmann の48項目は原典本文で確定

- セマンティック版は v0.78.0。概念は83から87、尺度は118から122。使用研究は165件のまま。開発論文は `usageStudies` に入れない。項目本文は空、`itemPublicationStatus` は `not-published`、`japaneseVersionStatus` は `unconfirmed`、`versionType` は `original`、`recordStatus` は `verified-metadata`。
- 強迫購買 `compulsive-buying` / `ridgway-rcbs-6` は Ridgway, Kukar-Kinney, & Monroe（2008）の RCBS／CBI、6項目・2次元（DOI `10.1086/591108`）。`buying-impulsiveness` とは別。Faber & O'Guinn（1992、DOI `10.1086/209315`）の7項目臨床スクリーナは登録しない。臨床カットオフは原典の表を開いていないため採用しない。
- グリーン消費価値 `green-consumption-values` / `haws-green-6` は Haws らの GREEN、6項目・単一次元（DOI `10.1016/j.jcps.2013.11.002`）。印刷年は2014。`perceived-csr` と `materialism` とは別。GREEN-J の学会発表は査読付きDOIが未確認のため `translation-study` にしない。
- 説得知識 `persuasion-knowledge` / `bearden-persuasion-knowledge-6` は Bearden, Hardesty, & Rose（2001）の CSC 下位6項目（DOI `10.1086/321951`）。`advertising-skepticism` とは別。Friestad & Wright（1994、DOI `10.1086/209380`）は理論であり尺度本体にしない。PTPK とスポンサーコンテンツ特化尺度は登録しない。
- ラグジュアリー価値知覚 `luxury-value-perception` / `wiedmann-lvp-48` は登録する。Wiedmann, Hennigs, & Siebels（2009、DOI `10.1002/mar.20292`）の本文が、10因子構造・KMO 0.906・48項目、5件法（1＝strongly disagree～5＝strongly agree）を述べる。初期案の150項目ではない。財務次元は残った10因子に含まれない。二次の20項目主張は採用しない。Hennigs ら（2012、DOI `10.1002/mar.20583`）の短縮版は項目数未確定のため登録しない。Vigneron & Johnson の BLI も登録しない。`status-consumption`、`materialism`、`consumer-need-for-uniqueness`、`perceived-value`、`willingness-to-pay-premium` とは decisionGuide と relatedConcepts で分ける。

## 2026-09-30: マーケ典型概念は旗艦11件、自己一致性と Tax の公正は HOLD

- セマンティック版は v0.77.0。概念は72から83、尺度は107から118。使用研究は165件のまま。開発論文は `usageStudies` に入れない。項目本文は空、`itemPublicationStatus` は `not-published`、`japaneseVersionStatus` は `unconfirmed`、`versionType` は `original`、`recordStatus` は `verified-metadata`。
- 広告態度 `attitude-toward-the-ad` / `mackenzie-lutz-aad-3` は、MacKenzie–Lutz 系の通例3項目意味微分を主版にする。代表 DOI は `10.1177/002224378602300205`。構造的先行要因の DOI `10.1177/002224298905300204` は併記するが、1989年論文の項目数としては登録しない。4–6項目版は別項目セット。`brand-attitude` と `advertising-skepticism` とは別。
- 快楽的・功利的態度は Voss らの HED/UT 10項目（DOI `10.1509/jmkr.40.3.310.19238`）。`shopping-value` とは別。
- CSII は Bearden らの12項目（DOI `10.1086/209186`）。認知欲求は Cacioppo, Petty, & Kao（1984）の NFC-18（DOI `10.1207/s15327752jpa4803_13`）。神山・藤原（1991）の日本語15項目は NFC-18 の標準日本語版にしない。1982年の34項目原版は登録しない。
- 情報源信頼性は Ohanian（1990）の15項目（DOI `10.1080/00913367.1990.10673191`）。`brand-credibility` とは対象が異なる。
- 知覚CSRの旗艦は Turker（2009）の17項目（DOI `10.1007/s10551-008-9780-6`）。Pérez 系（DOI `10.1007/s11628-012-0171-9`）は登録しない。
- 関係的コミットメントは Morgan & Hunt（1994）の通例3項目（DOI `10.1177/002224299405800302`）。`organizational-commitment` と `brand-loyalty` とは定義で分ける。Likert の件数は未確定のまま記す。
- 顧客市民行動は Yi & Gong（2013）の市民行動側16項目（DOI `10.1016/j.jbusres.2012.02.026`）。共創全体29項目と参加側は登録しない。`organizational-citizenship-behavior` とは別。回答形式の件数は未確定。
- 原産国イメージは Parameswaran & Pisharodi（1994）（DOI `10.1080/00913367.1994.10673430`）。`itemCount` 40（GCA 12 / GPA 18 / SPA 10）と10件法は、Pereira, Hsu, & Kundu（2005。DOI `10.1016/S0148-2963(02)00479-4`）が原版として記した記述に依る。原典の表は未開封。24項目・6次元の改訂と Roth & Romeo（1992。DOI `10.1057/palgrave.jibs.8490276`）は登録しない。`consumer-ethnocentrism`、`perceived-brand-globalness`、`brand-local-iconness` とは別。
- UTAUT は方針a。`social-influence` と `facilitating-conditions` を別概念にする（各通例4項目。DOI `10.2307/30036540`）。単一の UTAUT 概念は作らない。パフォーマンス期待と努力期待は既存の知覚有用性・知覚容易性のため追加しない。UTAUT2（DOI `10.2307/41410412`）の快楽動機・価格価値・習慣は今回入れない。
- 自己一致性は HOLD。Sirgy 系は直接法が中核で、固定多項目の旗艦として `exact itemCount` を確定できない。`self-brand-connection` と `consumer-brand-identification` に近接する。
- サービス・リカバリー公正（Tax, Brown, & Chandrashekaran 1998。DOI `10.1177/002224299806200205`）は HOLD。3次元であることは確認できたが、原典PDFを開いておらず、二次文献の項目数（計18項目の例と各3項目の適応、手続・相互作用各5項目と分配の複数ルール採点）が一致しない。`itemCount` を推測で置かない。`organizational-justice` とは別概念のまま未登録。Smith ら（1999）も登録しない。

## 2026-09-28: ブランド・ヘイトは Zarantonello の18項目、Voice-6 と AS-15 の使用研究は各1件

- 概念 `brand-hate` と尺度 `zarantonello-brand-hate-18` を追加する。原典は Zarantonello, Romani, Grappi, & Bagozzi（2016）, Journal of Product & Brand Management, 25(1), 11–25。DOI は `10.1108/JPBM-01-2015-0799`。
- ブランド・ヘイトは、能動的負感情と受動的負感情の集合であり、ブランド・ラブの単純な欠如ではない。既存の `brand-love` とは related で結ぶ。
- 項目数18と6一次元（anger、contempt/disgust、fear、disappointment、shame、dehumanization。active は前2、passive は後4）は、同一著者の総説（DOI `10.1146/annurev-psych-010419-051008`）の要約に依る。原典の表は未開封のため、αと回答形式は記さない。
- Hegner らの6項目単一次元、Kucuk 系、Fetscherin の Sternberg 適応、Romani, Grappi, & Dalli（2012）の NEB 18項目は別尺度であり、登録しない。
- 日本語状況は `unconfirmed`。項目本文は収録しない。開発論文は `usageStudies` に入れない。
- `van-dyne-lepine-voice-6` には Kalenychenko, Mozalov, Petukhova, & Yevchenko（2023）の使用研究を1件だけ追加する。公開PDFで、Van Dyne & LePine（1998）の6項目、自己評定への主語適応、5件法（1＝almost never～5＝almost always）、有効356名を確認した。DOI は `10.33844/ijol.2023.60355`。本文α=.84 と Table 1 対角 .74 は不一致のため両方を残す。Helping、Liang、Farh、OCBI/OCBO は使っていない。開発論文は使用研究にしない。
- `tepper-abusive-supervision-15` には Wu & Cao（2015）の使用研究を1件だけ追加する。DOI `10.4236/jhrss.2015.34023` の論文題は Abusive Supervision and Work-Family Conflict: The Mediating Role of Emotional Exhaustion である。公開PDFで、Tepper（2000）の15項目、5件法（1＝never～5＝very often）、α=.97、有効339名、部下の自己報告を確認した。Mitchell & Ambrose（2007）の5項目短縮は使用していない。開発論文は使用研究にしない。
- CX Scale 18 の第2 usage、Brand Affect 3 と OBE-4 の日本語、Mitchell & Ambrose（2007）の5項目短縮は HOLD のまま。

## 2026-09-27: 虐待的監督は Tepper の15項目、ELS-10 と OCBI/OCBO の使用研究は各1件

- 概念 `abusive-supervision` と尺度 `tepper-abusive-supervision-15` を追加する。原典は Tepper（2000）, Academy of Management Journal, 43(2), 178–190。DOI は `10.2307/1556375`。Crossref は `10.5465/1556375` を別名として返す。
- 登録するのは15項目の原版だけである。Mitchell & Ambrose（2007）の5項目短縮は別尺度であり、今回は登録しない。ELS-10、Liden らの Behaving ethically、LMX、Van Dyne–LePine Voice とも同一視しない。
- 定義は、部下が知覚する持続的な敵意的な言語的・非言語的行動で、身体的接触を含まない。項目数・5件法・時点1の712名は、Tepper ら（2007, DOI `10.5465/amj.2007.20159918`）が2000年調査を再分析した方法記述に依る。α=.91 はその再分析の相関表（n=342）である。原典の表そのものは開いていない。
- 日本語状況は `unconfirmed`。項目本文は収録しない。開発論文は `usageStudies` に入れない。
- `brown-els-10` には Mayer, Kuenzi, & Greenbaum（2010）の使用研究を1件だけ追加する。公開PDF（https://davemayer.me/wp-content/uploads/sites/11/2019/07/Mayer-Kuenzi-Greenbaum-JBE-2010.pdf）で、部下が Brown et al.（2005）の10項目をフル使用し、α=.97、測定モデルの ELS 指標が10であることを確認した。誌面は Journal of Business Ethics, 95(S1), 7–16。DOI は `10.1007/s10551-011-0794-0`。標本は従業員1,525名と監督者の300 work units。Brown et al.（2005）の開発論文は使用研究にしない。日本語状況は `unconfirmed` のまま。
- `williams-anderson-ocbi-ocbo` には Carlson, Kacmar, Grzywacz, Tepper, & Whitten（2013）の使用研究を1件だけ追加する。公開PDFで、Williams & Anderson（1991）の OCBI 7（α=.88）と OCBO 6（α=.79）を監督者が評定したことを確認した。標本は dyad 205。DOI は `10.21818/001c.17924`。誌面は Journal of Behavioral and Applied Management, 14(2), 87–106。IRB は含めない。Lee & Allen、Podsakoff らの24項目、田中の33項目、Ibrahim の OCBO 7 ではない。方法節は頻度の文言を示すが、件数は明示しない。
- CX Scale 18 の第2 usage、Brand Affect 3 と OBE-4 の日本語、Mitchell & Ambrose（2007）の5項目短縮は HOLD。

## 2026-09-26: 従業員の発言行動は Van Dyne–LePine の Voice 6項目、SL-7 の使用研究は Svensson のみ

- 概念 `employee-voice` と尺度 `van-dyne-lepine-voice-6` を追加する。原典は Van Dyne & LePine（1998）, Academy of Management Journal, 41(1), 108–119。DOI は `10.2307/256902`。Crossref は `10.5465/256902` を別名として返す。
- 登録するのは voice の6項目だけである。同一論文の Helping は7項目であり、別尺度としても登録しない。組織市民行動、Liang らの促進的／抑制的発言、Farh らの発言尺度、Williams–Anderson の OCBI/OCBO とも同一視しない。
- 公開抄録で確認できるのは、従業員597名の現場研究で、上司・同僚・本人が役割内と役割外、および helping と voice を区別したことである。voice のα .82～.96 と CFA の識別は、原典を引用する尺度解説の要約であり、原典の表の個別適合度は記さない。
- 日本語状況は `unconfirmed`。項目本文は収録しない。開発論文は `usageStudies` に入れない。
- `liden-sl-7` には Svensson, Jones, & Kang の使用研究を1件だけ追加する。公開PDF（https://jsfd.org/wp-content/uploads/2022/02/svensson.servant.leadership.sfd_.pdf）で、Liden et al.（2015）の SL-7、非管理職100名によるリーダー評定、7件法、α=.89 を確認した。誌面は Journal of Sport for Development, 10(1), November 2021, 17–24。引用年は公開PDFに合わせ 2022 とする。Crossref の DOI は見つからなかった。
- Liden et al.（2015）の開発論文（DOI `10.1016/j.leaqua.2014.12.002`）は使用研究にしない。項目を削った使用（Kumari et al. 2022）と、対応が曖昧な Yuan et al.（2020）は追加しない。Zong et al.（2026）は本PRでは一次資料を再確認していないため追加しない。SL-28 のレコードは変えない。
- Williams–Anderson OCBI/OCBO の usage、CX Scale 18 の第2 usage、Brand Affect 3 と OBE-4 の日本語は HOLD。

## 2026-09-25: 倫理的リーダーシップは Brown らの ELS-10 として登録する

- 概念 `ethical-leadership` と尺度 `brown-els-10` を追加する。原典は Brown, Treviño, & Harrison（2005）, Organizational Behavior and Human Decision Processes, 97(2), 117–134。DOI `10.1016/j.obhdp.2005.03.002`。10項目、単一次元、5件法、部下による直属上司評定。
- 変革型リーダーシップの MLQ（商用）とその理想化影響、Liden らの SL における Behaving ethically 次元、研究内の6項目短縮は別物として注記し、別レコードにはしない。
- 日本語状況は `unconfirmed`。渡辺幹代（2009）の産組心大会「ELS-J」は全文と項目数が未確認のため、`japaneseEvidence` の `context-reference` に留め、`validated` や `translation-study` にはしない。
- 本橋（2020）の6項目と本橋（2021）の8項目和訳（出典表記は Brown and Trevino 2006）、および本橋（2023）『人と組織がいきる倫理マネジメント』はフル ELS-10 ではない。使用研究にも日本語の検証済み版にもしない。
- 開発論文は `usageStudies` に入れない。使用研究は空のままにする。
- Williams–Anderson OCBI/OCBO の usage、CX Scale 18 の第2 usage、Brand Affect 3 と OBE-4 の日本語は HOLD。

## 2026-09-24: サーバント・リーダーシップは Liden の SL-28 と SL-7 として登録する

- 概念 `servant-leadership` に、尺度 `liden-sl-28`（原版、28項目、7次元×4）と `liden-sl-7`（`validated-short-form`、`parentScaleId` は `liden-sl-28`）を追加する。SL-7 は各次元1項目のグローバル短縮であり、任意の7項目抜粋ではない。
- Ehrhart（2004）、van Dierendonck 系の小林ら SLS-J、劉培（2013）神戸大学ワーキングペーパーの24項目は別尺度として注記し、レコードにはしない。
- SLJ-28 の根拠は日本心理学会第84回大会の発表要旨（DOI 10.4992/pacjpa.84.0_pq-018）である。7因子 CFA と増分関連は要旨にあるが、査読誌の検証論文ではない。`liden-sl-28` の日本語状況は `validated` ではなく `translation-study` とする。
- ResearchGate の尺度資料（DOI 10.13140/RG.2.2.33531.59683）は SLJ-28 と SLJ-7 を併記する。要旨が検証対象とするのは SLJ-28 なので、`liden-sl-7` の日本語状況は `related-version` とする。
- 開発論文と日本語版の大会発表は `usageStudies` に入れない。日本語のフル使用が本文で確定できていないため、使用研究は空のままにする。
- Williams–Anderson OCBI/OCBO の usage、CX Scale 18 の第2 usage、Brand Affect 3 と OBE-4 の日本語は HOLD。

## 2026-09-23: OCB は Williams–Anderson の OCBI/OCBO 13項目として登録する

- 概念 `organizational-citizenship-behavior` と尺度 `williams-anderson-ocbi-ocbo` を追加する。項目数は APA PsycTests の最終 Performance Measure 20（OCBI 7＋OCBO 6＋IRB 7）から IRB を除いた 13。二次資料の OCBO 7・計21とは同一視しない。
- IRB は役割内行動であり、今回は別尺度にしない。Organ、Podsakoff らの24項目、環境向け OCB（OCBE）、田中（2002）の日本版33項目・5因子は別物。日本語状況は `unconfirmed` のままにする。
- Ibrahim（2016）は PO-Org-7 の使用研究として登録する（組織対象7項目、アラビア語の翻訳・逆翻訳、有効 N=276、5件法、α=.84）。DOI は未確認のため URL のみ。同論文は OCBO を7項目と書くため、OCB 尺度の使用研究にはしない。開発論文は使用研究に入れない。
- CX Scale 18 の usage、Brand Affect 3、OBE-4 の日本語は HOLD。山本（2023）DOI 10.7222/marketing.2023.032 は概念レビューであり、PO-Org-7 の日本語使用にしない。

## 2026-09-23: Codex とクラウドの非対称レーン

- ローカル Codex は、条件付きで `main` へ commit / push してよい（force-push 禁止。開始時は status / fetch / 差分確認。dirty や履歴分岐時は自動 pull/rebase/merge しない）。
- Grok Bot / Cursor Cloud はブランチ → PR → レビュー → マージ。マージ前にユーザー確認。
- 文書は関係分だけ同じ変更セットで更新する。`.wrangler/` は共有しない。
- 未マージ作業と同じ論理機能・依存ファイルを同時に触らない。`data.js` と `app.js` のスキーマ変更は事前共有。
- 詳細手順はリポジトリ外スキル「Cloud and local git sync」および本リポジトリ `AGENTS.md` を正とする。

## 2026-08-20: HANDOFF と Codex 引き継ぎを分ける

- 既存の `HANDOFF.md` は研究データの詳細、優先ロードマップ、公開手順を正とする。
- `AGENTS.md` は入口と変更時の不変条件、`current-state.md` は現状、`dev/logs/` は個別作業に絞る。
- `README.md` は利用者向けの機能・データ追加手順を正とする。

## 既存機能として維持する判断

- 原版・短縮版・翻訳版・研究内改変版を別レコードまたは別根拠として扱う。
- 日本語版は「検証済み」「言語的妥当性」「使用例」「翻訳研究」「関連版」「未確認」を区別する。
- 利用研究数はレビュー等が実使用を確認した件数だけを登録し、引用数や検索件数を代用しない。
- 尺度項目本文は公開・転載の根拠が確認できる場合だけ掲載し、利用条件未確認は `unknown` のままにする。
- 研究設計の保存はブラウザ内とし、出力は利用者が明示的に行う。
