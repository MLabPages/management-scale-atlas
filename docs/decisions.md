# Decisions

## 2026-10-11: ダイナミック・ケイパビリティは DC-14。インクルーシブ・リーダーシップは IL-9。WIS-7 の使用研究は Gan ら

- セマンティック版は v0.91.0。概念は112から114、尺度は155から157。使用研究は185から186。選択ガイドは46から48。関係は16のまま。開発論文は `usageStudies` に入れない。DC-14 と IL-9 の項目本文は空、`itemPublicationStatus` は `not-published`。機能用とデータ用で版を分けない。
- 概念 `dynamic-capabilities`（ダイナミック・ケイパビリティ / Dynamic Capabilities）と尺度 `kump-dc-14`（DC-14）を追加する。原典は Kump, Engelmann, Kessler, & Schweiger（2019）, Industrial and Corporate Change, 28(5), 1149–1172。DOI は `10.1093/icc/dty054`。オンライン公開は2018-12-13、登録年は印刷年の2019。`itemCount` は14（感知5・捕捉4・変革5）。16項目の EFA で交差負荷の SE6・T6 を削除した（§4.3.2、Table 2）。6件法 Likert（1＝strongly disagree～6＝strongly agree、§4.2.1）。確認標本 n=307 の α は .84／.84／.87、全体 .91（Table 4）。開発標本 n=269 の α は .88／.83／.86、全体 .91（Table 3）。`versionType` は `original`、`recordStatus` は `verified-metadata`。
- 原典は © OUP、All rights reserved で、CC ライセンスはない。`usagePermission` は `unknown`。`sourceUrl` は DOI。項目本文は掲載しない。
- 数値は出版論文の Advance Access 版で確認した。第三者の文書共有サイトの URL は `sourceUrl`、`fullTextUrl`、notes、文書のどこにも置かない。引用は DOI と節・表番号にする。2026-10-09 の ENJ-3、TRI 2.0、ACAP-14 と同じ出処の扱い。
- Teece（2007）と Teece ら（1997）は概念枠であり尺度ではない。特許数、研究開発費、再編回数などの代理指標、Wilden ら（2013）の活動頻度型、提携・新製品開発など業界・機能別の DC 尺度は登録しない。捕捉の一部は Flatten らの ACAP-14 の内容を改作している（§4.2.2）。吸収能力、組織学習能力（OLC-14）、市場志向とは decisionGuide で分ける。感知は反応的な市場志向に近い挙動を示した（§5.2）。その注意は caution に書く。
- `psychometricEvidence` は1件にまとめる。2件以上に分けると、既存のカード要約が「複数環境・日本語での検証根拠あり」になる。日本語未確認の尺度にその表示は使わない。
- `japaneseVersionStatus` は `unconfirmed`。`japaneseEvidence` は空。濵﨑・大江（2024、DOI `10.11497/jasmin.202411.0_114`）は空港のアーカイブデータで感知を測り、Kump を引用するだけである。`japaneseStatusNote` にだけ書く。
- 概念 `inclusive-leadership`（インクルーシブ・リーダーシップ / Inclusive Leadership）と尺度 `carmeli-il-9`（IL-9）を追加する。原典は Carmeli, Reiter-Palmon, & Ziv（2010）, Creativity Research Journal, 22(3), 250–260。DOI は `10.1080/10400419.2010.504654`。`itemCount` は9（開放性3・availability 4・accessibility 2。Appendix A の区分）。5件法（1＝not at all～5＝to a large extent）。因子分析は1因子（固有値6.18、説明率68.74%、負荷 .51–.82）。α=.94、N=150。3側面は内容上の区分であり、下位尺度得点の妥当性は原典で検証されていない。採点は9項目の平均として書く。
- 数値は UNO DigitalCommons の著者受理稿（Psychology Faculty Publications 30、https://digitalcommons.unomaha.edu/psychfacpub/30、© 2010 Taylor & Francis）の Method・Table 1・Appendix A で確認した。2026-09-27／28 の著者ホスト PDF と同じく、受理稿の URL は `psychometricEvidence` に置ける。`sourceUrl` は DOI のままにする。`itemPublicationStatus` は `not-published` とする。受理稿に項目が載っていても、アプリの「原文を開く」は `sourceUrl` を使うため、DOI を機関リポジトリへ付け替えない。CC ライセンスはなく、`usagePermission` は `unknown`。項目本文は掲載しない。ページ番号は受理稿のものなので、節名と Table 1・Appendix A で引用する。
- 調査国と実施言語は受理稿に記載がない。所属機関から国を推測しない。`targetPopulation` に国名を書かない。
- Nembhard & Edmondson（2006）のリーダー包摂性、Randel ら（2018）と Shore ら（2011）の所属感・独自性、Owens, Johnson, & Mitchell（2013）の謙虚なリーダーシップは別の項目集合であり、登録しない。心理的安全性（TPS）は原典の結果変数であり、IL-9 と同一視しない。LMX、サーバント、エンパワーリング、変革型とは decisionGuide で分ける。後続研究の6項目抜粋は IL-9 として扱わない。
- `japaneseVersionStatus` は `unconfirmed`。`japaneseEvidence` は空。金・牛丸（2022、ビジネス科学研究 11、DOI `10.82765/jobsr.11.0_11`）は同尺度から6項目を用いた（p. 15、α=.923）。フル9項目の日本語版ではない。`japaneseStatusNote` にだけ書く。日本語の項目文は写さない。未確認は94から96。検証済みレコードは18のまま。
- `relatedConcepts` は存在する ID だけにする。2026-10-07 の判断どおり、吸収能力や心理的安全性への逆リンクは足さない。
- `cortina-wis-7` に、これまで無かった `usageStudies` を1件追加する。Gan, Zeng, & Wang（2023）, Frontiers in Psychology。DOI `10.3389/fpsyg.2023.1320703`（PMC10715392、CC BY）。Cortina ら（2001）の7項目をすべて使用。変更は、原典の文脈（Eighth Circuit Court）を一般の職場にしたことと、想起期間を過去5年から過去6か月にしたことだけ。5件法（1＝Never～5＝Most of the time）。この標本の α=0.93。シンガポールの就業者、募集152名から有効118名。同じ段落の 0.91／0.92 は Lim & Lee（2011）の値であり、標本αにしない。原典の `responseFormat`（0＝never～4＝most of the time、想起は過去5年）は変えない。実施言語は本文にないので、「記載なし」と書く。日本語状況は変えない。
- Xia, Wang, Li, He, & Wang（2022、DOI `10.3389/fpsyg.2022.921161`）はフル7項目の候補だが、上端アンカーが always で、中国語訳でもある。今回の使用研究には入れず、予備として残す。
- CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3 の使用研究、Price Consciousness 5 は HOLD のまま変更しない。

## 2026-10-09: 技術レディネスは TRI 2.0。吸収能力は ACAP-14。Thriving-10 の使用研究は Ni ら

- セマンティック版は v0.90.0。概念は110から112、尺度は153から155。使用研究は184から185。選択ガイドは44から46。関係は16のまま。開発論文は `usageStudies` に入れない。TRI 2.0 と ACAP-14 の項目本文は空、`itemPublicationStatus` は `not-published`。機能用とデータ用で版を分けない。
- 概念 `technology-readiness`（技術レディネス / Technology Readiness）と尺度 `parasuraman-colby-tri-2-16`（TRI 2.0）を追加する。原典は Parasuraman & Colby（2015）, Journal of Service Research, 18(1), 59–74。DOI は `10.1177/1094670514539730`。`itemCount` は16（楽観・革新・不快・不安の各4、Table 5）。5件法の同意形式。Table 5 の α は .80／.83／.70／.71（N=878）。第三者要約の不安 .77 は採らない。`versionType` は `original`、`recordStatus` は `verified-metadata`。
- Table 2 の注は、TRI 1.0 と TRI 2.0 が Rockbridge Associates と著者の著作物で、利用には著者の書面許諾が必要だとする。`usagePermission` は `permission-required`。Mind Garden の有料配布である PCQ-24 の `commercial` とは分ける。`sourceUrl` は DOI。項目本文は掲載しない。
- 根拠の表番号は OnlineFirst 版で確認した。印刷版ページとの対応は未確認のため、ページ番号ではなく表番号で引用する。第三者の文書共有サイトの URL は `sourceUrl`、`fullTextUrl`、notes のどこにも置かない。
- TRI 1.0（Parasuraman 2000、36項目）、Lin & Hsieh（2012）の削除による16項目、Radius Insights の10項目版は別の項目セットであり、登録しない。TAM・UTAUT の知覚有用性・知覚容易性・社会的影響・促進条件・知覚楽しさ、および消費者革新性とは decisionGuide で分ける。
- `japaneseVersionStatus` は `unconfirmed`。`japaneseEvidence` は空。中野（2026、組織科学 59(3)、DOI `10.11207/soshikikagaku.20260430-1`）は16項目を日本語化して7件法で聴取したが、INS4 を除いた15項目で分析している。`japaneseStatusNote` にだけ書く。未確認は92から94。検証済みレコードは18のまま。
- `psychometricEvidence` は1件にまとめる。2件以上に分けると、既存のカード要約が「複数環境・日本語での検証根拠あり」になる。日本語未確認の尺度にその表示は使わない。
- 概念 `absorptive-capacity`（吸収能力 / Absorptive Capacity）と尺度 `flatten-acap-14`（ACAP-14）を追加する。2026-10-01／02／04 の HOLD（原典の方法・項目表が未取得）は解除する。原典は Flatten, Engelen, Zahra, & Brettel（2011）, European Management Journal, 29(2), 98–116。DOI は `10.1016/j.emj.2010.11.002`。最終尺度は Table 10（p. 110）の14項目（獲得3・同化4・変換4・活用3）。7件法 Likert 型（p. 105）。両端アンカーは確認した箇所にないため、`responseFormat` にアンカーを書かない。標本2（n=361）の α は Table 8 で .73／.85／.93／.80。
- 標本1は本文が285社、同じ頁の回答者内訳が283票と食い違う。推測で埋めず、notes に両方を残す。検証の旗艦数値は標本2（n=361）に置く。
- 研究開発費比率などの代理指標と Zahra & George（2002）は旗艦にしない。Chiva らの OLC-14 は学習促進条件の従業員知覚であり、ACAP-14 とは decisionGuide で分ける。後続の11項目などの短縮・改変は登録しない。`usagePermission` は `unknown`。項目本文は、利用条件が未確認で Elsevier の著作権があるため載せない。
- `japaneseVersionStatus` は `unconfirmed`。程・渡邉（2024、DOI `10.11497/jasmin.202411.0_174`）は中国所在子会社の学会要旨であり、日本語版の根拠にしない。
- `relatedConcepts` は存在する ID だけにする。2026-10-07 の判断どおり、組織学習能力などへの逆リンクは足さない。
- `porath-thriving-10` に、これまで無かった `usageStudies` を1件追加する。Ni, Zeng, & Zhou（2023）, Frontiers in Psychology。DOI `10.3389/fpsyg.2023.1136470`（PMC10702575）。Porath らの10項目（学習5・活力5）をすべて使用、7件法、中国の既婚就業者、有効372名。Table 2 の α は全体 0.868、学習 0.767、活力 0.809。筆頭著者は Ni であり、Jiang らではない。第4・第8項目の逆転採点は当該質問紙の番号なので、原典の `reverseItems` は空のままにする。原典の `responseFormat`（通例5件法 Likert）も変えない。日本語状況は変えない。同じ論文の DUWAS 使用は今回の範囲外であり入れない。
- CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3 の使用研究、Price Consciousness 5 は HOLD のまま変更しない。

## 2026-10-09: 知覚楽しさは Davis らの ENJ-3。MBI-GS の使用研究は Seibt & Kreuzfeld のみ。CSR-17 は HOLD

- セマンティック版は v0.89.0。概念は109から110、尺度は152から153。使用研究は183から184。選択ガイドは43から44。関係は16のまま。開発論文は `usageStudies` に入れない。項目本文は空、`itemPublicationStatus` は `not-published`。機能用とデータ用で版を分けない。
- 概念 `perceived-enjoyment`（知覚楽しさ / Perceived Enjoyment）と尺度 `davis-bagozzi-warshaw-enjoyment-3`（ENJ-3）を追加する。原典は Davis, Bagozzi, & Warshaw（1992）, Journal of Applied Social Psychology, 22(14), 1111–1132。DOI は `10.1111/j.1559-1816.1992.tb00945.x`。`itemCount` は3。7件法の両極形式で、2項目は likely/unlikely、1項目は unpleasant/pleasant。定義は p. 1113。研究1は α=.81（MBA学生 n=200、Table 1、p. 1118）。研究2はシステム名を入れた would 形式で α=.92（n=80、p. 1124）。`versionType` は `original`、`recordStatus` は `verified-metadata`。`usagePermission` は `unknown`。
- 数値は出版論文のスキャンで確認した。第三者の文書共有サイトの URL は `sourceUrl`、`fullTextUrl`、notes のどこにも置かない。引用は DOI とページ番号にする。Crossref の Wiley オンライン掲載日 2006-07-31 は出版年にしない。
- `psychometricEvidence` は1件にまとめる。2件以上に分けると、既存のカード要約が「複数環境・日本語での検証根拠あり」になる。日本語未確認の尺度にその表示は使わない。
- UTAUT2 の快楽動機（Venkatesh, Thong, & Xu 2012、DOI `10.2307/41410412`。Kim et al. 2005 由来の Likert 同意形式）と、van der Heijden（2004、DOI `10.2307/25148660`）の意味微分4組は別項目セットであり、登録しない。Moon & Kim の playfulness と Koufaris の enjoyment もこの版では登録しない。フロー、プレゼンス、快楽的・功利的態度、買物価値とは decisionGuide で分ける。
- `japaneseVersionStatus` は `unconfirmed`。`japaneseEvidence` は空。中川（2021、DOI `10.32299/jsmdreview.5.2_41`）の「知覚された楽しさ」は、本論文を参考にした独自の7件法 Likert（楽しい／ワクワク／喜び）であり、ENJ-3 の翻訳使用でも `usage-example` でもない。`japaneseStatusNote` にだけ区別を書く。未確認は91から92。検証済みレコードは18のまま。
- `relatedConcepts` は存在する `perceived-usefulness`、`perceived-ease-of-use`、`social-influence`、`facilitating-conditions`、`flow` だけにする。2026-10-07 の判断どおり、関連概念は対称である必要はない。既存概念への逆リンクは足さない。
- `maslach-burnout-inventory-general-survey` に、これまで無かった `usageStudies` を1件追加する。Seibt & Kreuzfeld（2021）, International Journal of Environmental Research and Public Health, 18(4), 1535。DOI `10.3390/ijerph18041535`（PMC7914652）。ドイツ語版 MBI-GS、16項目（5＋5＋6）、0–6件法。この標本のαは 0.79〜0.84 で、下位尺度別の内訳はない。分析標本はドイツの教員12,014名（常勤6,109、非常勤5,905）。Kalimo 式の重み付け総合得点（0.4×消耗＋0.3×シニシズム＋0.3×効力感）を使っているので、その違いは adaptation に書く。レコードの `scoring`（総合得点に統合しない）は変えない。日本語状況は `validated` のまま。
- Bodendieck ら（2022、DOI `10.1186/s12875-022-01831-7`）は項目数と標本αが本文にないため不採用。Pina ら（2022、DOI `10.1371/journal.pone.0268636`）は予備であり入れない。
- CSR-17（`turker-perceived-csr-17`）の使用研究は HOLD のまま変更しない。Cek & Eyupoglu（2019、DOI `10.4102/sajbm.v50i1.1481`）は Methods で17項目とα .88／.71／.89 を述べるが、Table 3 の測定モデルは内部 CSR の5指標と外部 CSR の4指標（CSR5 が両因子に重複）に減っており、フル17項目の使用として受理しない。P–O fit-3、RC-3、Aad-3、UTAUT-SI／FC、Price Consciousness 5 も変更しない。

## 2026-10-07: 心理的資本は PCQ-24。CPC-12R と PCQ-12 は登録しない

- セマンティック版は v0.88.0。概念は108から109、尺度は151から152。使用研究は183のまま。選択ガイドは42から43。関係は16のまま。開発論文と構造確認の論文は `usageStudies` に入れない。項目本文は空、`itemPublicationStatus` は `not-published`。
- 概念 `psychological-capital`（心理的資本 / Psychological Capital）と尺度 `luthans-pcq-24`（PCQ-24）を追加する。原典は Luthans, Avolio, Avey, & Norman（2007）, Personnel Psychology, 60(3), 541–572。DOI は `10.1111/j.1744-6570.2007.00083.x`。`itemCount` は 4×6＝24。6件法（1＝strongly disagree～6＝strongly agree）。`versionType` は `original`、`recordStatus` は `verified-metadata`。
- 公式の配布は Mind Garden（https://www.mindgarden.com/136-psychological-capital-questionnaire）。`sourceUrl` は製品ページ、`doi` は開発論文。`usagePermission` は `commercial`。研究許可と License to Administer は分離。ライセンスなしの項目転載は不可。
- Görgens-Ekermans & Herbert（2013）、DOI `10.4102/sajip.v39i2.1131` は、各6項目と 1–6 Likert の構造確認である。使用研究にはしない。Mind Garden の確認とあわせ、`psychometricEvidence` は1件にまとめる。2件以上に分けると、既存のカード要約が「複数環境・日本語での検証根拠あり」になる。日本語未確認の尺度にその表示は使わない。
- 逆転項目の番号は、開発論文の確認抜粋と Mind Garden 製品ページでは確定していない。二次ソースの番号は `reverseItems` に入れない。項目文は書かない。
- `japaneseVersionStatus` は `unconfirmed`。Mind Garden の Japanese Self Form は品質未保証で、MLQ・ALQ と同じく `validated` にしない。池田・波多野・田中・中原（2023）の CPC-12R（DOI `10.3389/fpsyg.2022.1053601`）は別のオープン尺度であり、PCQ の日本語根拠にしない。PCQJ は査読誌の検証としては未確認のため `translation-study` にしない。
- PCQ-12、CPC-12、CPC-12R は同時登録しない。一般性自己効力感、職務埋め込み、ワーク・エンゲイジメントとは decisionGuide で分ける。
- `general-self-efficacy.relatedConcepts` は既に `psychological-capital` を指している。概念を足すとその参照が解決する。`work-engagement`、`authentic-leadership`、`thriving-at-work` への逆リンクは足さない。関連概念は既存データでも対称ではない。
- Aad-3 の使用研究と、UTAUT-SI／UTAUT-FC の使用研究は HOLD のまま変更しない。

## 2026-10-06: リカバリー経験は REQ-16 と REQ-J。関係的コミットメントの原版は7項目

- セマンティック版は v0.87.0。概念は107から108、尺度は149から151。使用研究は183のまま。選択ガイドは41から42。関係は16のまま。開発論文と翻訳・検証論文は `usageStudies` に入れない。項目本文は空、`itemPublicationStatus` は `not-published`。
- 概念 `recovery-experience`（リカバリー経験）を追加する。`workaholism` と `burnout` とは decisionGuide と relatedConcepts で分ける。心理的距離だけ、または他の1下位尺度だけの利用はフル16項目の使用として登録しない。
- 尺度 `sonnentag-req-16`（REQ-16）は Sonnentag & Fritz（2007）, Journal of Occupational Health Psychology, 12(3), 204–221。DOI は `10.1037/1076-8998.12.3.204`。著者は Crossref で Sabine Sonnentag、Charlotte Fritz。`itemCount` は 4×4＝16。5件法（1＝do not agree at all～5＝fully agree）。仕事後の自由な夕方。`versionType` は `original`。較正／交差検証のαは心理的距離 .84／.85、リラックス .85／.85、熟達 .79／.85、コントロール .85／.85。Table 2 の適合度と Table 3 の負荷量の個別値は根拠抜粋にないため記さない。
- 尺度 `shimazu-req-j`（REQ-J）は島津・Sonnentag・窪田・川上（2012）, Journal of Occupational Health, 54(3), 196–205。DOI は `10.1539/joh.11-0220-OA`。著者のローマ字は Crossref で Akihito Shimazu、Sabine Sonnentag、Kazumi Kubota、Norito Kawakami。`versionType` は既存の翻訳版区分 `translated`。`parentScaleId` は `sonnentag-req-16`。`language` は Japanese。`japaneseVersionStatus` は `validated`。フル16、日本の従業員 N=2,520、4因子を優先する確認的因子分析。αは心理的距離 0.85、リラックス 0.89、熟達 0.87、コントロール 0.85。回答件数は根拠抜粋で未確定のため、英語原版の5件法を REQ-J の確定値にはしない。
- 英語 REQ-16 の `japaneseVersionStatus` も `validated` とする。Carlson 英語原版と同じく、対応する検証済み日本語版が別レコードにあることを示す。検証済みレコード数は16から18。独立した日本語検証論文は島津ら（2012）の1本であり、未確認90は変わらない。
- 関係的コミットメントの既存レコードは、二次情報の「通例3項目」を原版として扱っていた。Morgan & Hunt（1994）付録Aは Relationship commitment（7 items）、複合信頼性 .895、Cronbach のα .895、VEE .626、平均負荷量 .736。脚注aは7件法。付録が印刷するのはサンプル3項目のみ。ID を `morgan-hunt-relationship-commitment-7`、略称を RC-7、`itemCount` を7へ改める。3項目短縮のレコードと使用研究は作らない。Allen & Meyer の転用は入れない。開発論文は使用研究にしない。登録版そのものが3・4項目の尺度は28から27。
- Lopez（2009）と Astakhova（2016）は Cable & DeRue の P–O fit 3項目の使用として受理しない。Price Consciousness は入れない。

## 2026-10-05: JIS-4 の使用研究は Sultana ら（2022）のフル4項目だけ

- セマンティック版は v0.86.0 のまま。概念107、尺度149。使用研究は182から183。Vander Elst ら（2014）の心理測定論文は `usageStudies` に入れない。項目本文は空のまま。`japaneseVersionStatus` は `unconfirmed`。
- `vander-elst-jis-4` に Sultana ら（2022）を1件入れる。BMC Psychology, 10, 265。DOI は `10.1186/s40359-022-00974-7`。書誌の筆頭は Naznin Sultana。Crossref は BMC Psychology, 10(1)、発行日 2022-11-14。
- PMC の Methods で、De Witte（2000）が開発し Vander Elst らが検証した4項目をすべて使用し、1項目逆転、5件法（1 = strongly disagree～5 = strongly agree）、平均点であることを確認した。標本はバングラデシュ・コックスバザールの人道支援従事者。466名配布、有効445名。2021年4–5月のオンライン調査。確認した節に実施言語はない。
- この使用研究の α は 0.62。本文が引用する 0.82 は原英語版の値であり、標本αにしない。分析では 4–5点を不安定ありとして insecure / not insecure に分けている。αの低さと二値化を adaptation と notes に残す。
- Richter, Vander Elst, & De Witte（2020）の Frontiers in Psychology 論文は1項目なので、JIS-4 の使用研究にしない。Price Consciousness は入れない。JCQ／Karasek 系の日本語4項目は `japaneseEvidence` にしない。
- Global JE-7 の概念・尺度・Allen ら（2016）の使用例は変えない。

## 2026-10-05: 職務埋め込みは Crossley の Global JE-7。Mitchell 複合版は登録しない

- セマンティック版は v0.86.0。概念は106から107、尺度は148から149。使用研究は181から182。選択ガイドは40から41。関係は16のまま。開発論文は `usageStudies` に入れない。項目本文は空、`itemPublicationStatus` は `not-published`。
- 概念 `job-embeddedness`（職務埋め込み）と尺度 `crossley-global-je-7`（Global JE-7）を追加する。原典は Crossley, Bennett, Jex, & Burnfield（2007）, Journal of Applied Psychology, 92(4), 1031–1042。DOI は `10.1037/0021-9010.92.4.1031`。`itemCount` は Table 2 の7。単一次元・反射型。`versionType` は `original`、`recordStatus` は `verified-metadata`。
- 開いた UNL 著者稿（copy of record ではない）では、本調査とパイロットの回答は5件法（5 = strongly agree）。低端の 1 = strongly disagree は、正誤の抄録側の記載であり、正誤本文では確認していない。`reverseItems` は `[6]`（Table 2 の6番目、脚注 a）。項目文は転載しない。
- パイロットは別組織の看護師・薬物リハビリのカウンセラー N=87、α=.88。本調査は米国中西部の介護・生活支援組織で、自発的離職以外の退職12名を除いた N=306、α=.89。CFA は χ²(14)=79.95、CFI .94、GFI .93、SRMR .04。複合 JE との r=.59。StudyResponse 登録者 N=97 では、感情的・規範的・継続的コミットメントおよび離職意図と別因子。
- Mitchell, Holtom, Lee, Sablynski, & Erez（2001）の複合（形成型）職務埋め込みは登録しない。Crossley らの方法節では40項目、組織と地域社会の links・fit・sacrifice。Lee らの on/off 版と、Allen ら（2016）Study 2 の Mitchell 短縮9項目も登録しない。TIS-6 と組織コミットメントとは decisionGuide で分ける。
- 正誤 Crossley ら（2011）, Journal of Applied Psychology, 96(6), 1316、DOI `10.1037/a0025569` は notes に留める。書誌は Crossref で一致。本文は未開封。PsycNET 抄録（検索結果経由）が教示文の追記を述べる、という範囲を超えて教示の有無を断定しない。正誤は使用研究にしない。
- 使用研究と `japaneseEvidence` は Allen, Peltokorpi, & Rubenstein（2016）Study 1 の1件。DOI `10.1037/apl0000134`。Journal of Applied Psychology, 101(12), 1670–1686。日本の調査会社経由、首都圏のフルタイム従業員。T1 799名から T3 有効597名。7件法への改変、Brislin（1980）の逆翻訳、α=.84。`japaneseVersionStatus` は `usage-example`。検証済み日本語版や標準版にはしない。開いた節の標本記述はフルタイム従業員であり、雇用形態を正社員と追加断定しない。
- Price Consciousness と、JIS-4 への Frontiers in Psychology（2020）の1項目は入れない。Sultana ら（2022）のフル4項目は、ユーザー承認のあと同じ版へ追加した。

## 2026-10-04: IWB-6 の使用研究は Wang, Ellinger, & Wu（2013）のフル6項目だけ

- セマンティック版は v0.84.0。概念105、尺度143のまま。使用研究は171から172。機能用とデータ用で版を分けない。
- `scott-bruce-iwb-6` に Wang, Ellinger, & Wu（2013）, Management Decision, 51(2), 248–266 を1件入れる。DOI は `10.1108/00251741311301803`。R&Dマネジャーによる上司評定、フル6項目、5件法。確認した方法節に両端アンカーがないため、既存レコードの二次文献アンカーは転記しない。
- 標本は台湾の1サイエンスパーク。ハイテク企業83社（企業回答率30.29%）。上司83名が部下268名を評定。従業員質問紙の有効回答は268名（64.58%）。マネジャーは、R&Dプロジェクトチームで3年超のシニアを3〜5名選ぶ。機会認識等の従業員自己報告は、この使用の評定者ではない。
- この使用研究の α は Table I の 0.92（6項目。標準化負荷 0.780、0.806、0.791、0.793、0.827、0.844）。本文 §4.2 の 0.89 は Scott and Bruce（1994）引用時の数字であり、標本αにしない。開発論文側の二次文献による α=.89 は残す。
- Scott & Bruce（1994）は開発論文なので `usageStudies` に入れない。Janssen（2000）の9項目と Scott & Bruce（1998）の4項目短縮は登録しない。項目本文は空、`itemPublicationStatus` は `not-published` のまま。
- Arnold らの ELQ は、2000年論文の方法・因子表で項目数を確定できていないため未登録のまま。Flatten の ACAP-14、Brand Hate の使用研究、その他の候補は今回の範囲外であり追加しない。

## 2026-09-30: 週次ダイジェストは LEB-10 の新規と、TIS-6・GREEN の使用研究各1件

- セマンティック版は v0.81.0。概念は103から104、尺度は139から140。使用研究は165から167。開発・検証論文は `usageStudies` に入れない。項目本文は空、`itemPublicationStatus` は `not-published`。
- エンパワーリング・リーダーシップ `empowering-leadership` / `ahearne-leb-10` は Ahearne, Mathieu, & Rapp（2005）の LEB。DOI `10.1037/0021-9010.90.5.945`。`itemCount` は原典 Methods の 3+2+2+3＝**10**。合成α=.88。二次文献の12項目は Zhang & Bartol（2010、DOI `10.5465/amj.2010.48037118`）付録であり、旗艦にも使用研究にもしない。Arnold らの ELQ は別尺度で未登録。Spreitzer の心理的エンパワーメント（部下の認知状態、12項目）とは decisionGuide で分ける。`psychological-empowerment` の relatedConcepts に双方向の参照を足す。
- LEB の `japaneseVersionStatus` は `unconfirmed`。回答形式の Likert 件数は原典 Methods で未確定のため、二次の件数は採用しない。`versionType` は `original`、`recordStatus` は `verified-metadata`。開発論文は使用研究にしない。
- TIS-6（`bothma-roodt-tis-6`）の使用研究は Els, Brouwers, & Lodewyk（2021）の英語・フル6項目・南アフリカ製造業従業員400名（DOI `10.4102/sajhrm.v19i0.1407`）のみ。Bothma & Roodt（2013）の検証論文とハンガリー語の心理測定検証は使用研究にしない。日本語は `unconfirmed` のまま。
- GREEN（`haws-green-6`）の使用研究は Bailey, Mishra, & Tiamiyu（2018）のフル6項目（DOI `10.1002/mar.21140`。3研究でα=.93/.91/.93）のみ。Haws らの開発論文は使用研究にしない。日本語は `unconfirmed` のまま。GREEN-J は査読付き DOI が未確認のため `translation-study` にしない。

## 2026-09-30: 組織行動 Priority-B は旗艦4件。DUWAS の日本語は開発論文内検証

- セマンティック版は v0.80.0。概念は99から103、尺度は135から139。使用研究は165件のまま。開発論文は `usageStudies` に入れない。項目本文は空、`itemPublicationStatus` は `not-published`、`versionType` は `original`、`recordStatus` は `verified-metadata`。
- ワーカホリズム `workaholism` / `schaufeli-duwas-10` は Schaufeli, Shimazu, & Taris（2009）の DUWAS 短尺、10項目・2次元（働き過ぎ5＋強迫的働き5。DOI `10.1177/1069397109337239`）。`work-engagement` と `burnout` とは decisionGuide で分ける。長尺DUWAS、WART、WorkBAT は登録しない。
- DUWAS の `japaneseVersionStatus` は `validated-in-development-paper`。2009年論文の日本サンプル（N=3,311）で二因子を確認した、という開発論文内の根拠である。独立した後続の日本語検証論文を意味する `validated` にはしない。フィルタ「検証・開発済み」には含める。表示ラベルは「開発論文内で日本語版を検証」。
- 職場での繁栄 `thriving-at-work` / `porath-thriving-10` は Porath ら（2012）の10項目・2次元（DOI `10.1002/job.756`）。印刷は2012年2月、オンライン公開は2011-05-19。登録年は印刷年。`work-engagement`、`psychological-safety`、`job-crafting` とは別。日本語は `unconfirmed`。
- 意味のある仕事 `meaningful-work` / `steger-wami-10` は Steger, Dik, & Duffy（2012）の WAMI、10項目・3次元（DOI `10.1177/1069072711436160`）。`psychological-empowerment` の意味次元とは別。Lips-Wiersma 系と Common Good 単項目は登録しない。日本語は `unconfirmed`。
- 職場排斥 `workplace-ostracism` / `ferris-wos-10` は Ferris ら（2008）の WOS、10項目・単一次元（DOI `10.1037/a0012743`）。`workplace-incivility` と `abusive-supervision` とは decisionGuide で分ける。日本語は津村（2025）の WOS-J により `translation-study`。出版社ページの DOI 文字列 `10.14966/jssp.2023-033` は Crossref が HTTP 404 のため、旗艦DOIにも `japaneseEvidence.doi` にも入れない。
- DUWAS と WAMI の `usagePermission` は `research-use`。根拠ファイルが著者サイトの表記として、学術・非営利は無料、商業利用は事前許諾、と記す。Thriving と WOS は `unknown`。PsycTESTS の尺度データセット DOI は旗艦DOIの代替にしない。

## 2026-09-30: 組織行動 Priority-A は旗艦12概念。MLQ と ALQ は商用

- セマンティック版は v0.79.0。概念は87から99、尺度は122から135（プロアクティブ・パーソナリティは原版17と短尺10の2レコード）。使用研究は165件のまま。開発論文は `usageStudies` に入れない。項目本文は空、`itemPublicationStatus` は `not-published`、`japaneseVersionStatus` は `unconfirmed`、`recordStatus` は `verified-metadata`。
- 変革型リーダーシップ `transformational-leadership` / `bass-avolio-mlq-5x-short` は MLQ Form 5X-Short の通例45項目。Mind Garden 公式が Multi-rater / Rater / Self を45項目、Actual/Ought を90項目とする。公開メタの DOI は `10.1037/t03624-000`（内容作成年1995）。`usagePermission` は `commercial`。ライセンスなしの項目転載は不可。Actual/Ought、Long 版、GTL、変革型だけの抜粋は登録しない。ELS-10、SL、LMX、虐待的監督とは別。
- 真正なリーダーシップ `authentic-leadership` / `walumbwa-alq-16` は Walumbwa ら（2008）の16項目・4次元（DOI `10.1177/0149206307308913`）。項目数16は Mind Garden の製品記載。`usagePermission` は `commercial`。研究許可と License to Administer は分離。次元配分の二次例（4/5/4/3）は確定内訳にしない。
- 離職意向の旗艦は Bothma & Roodt（2013）の TIS-6（DOI `10.4102/sajhrm.v11i1.507`）。6項目・単一次元・5件法、α=.80。`versionType` は `validated-short-form`。Roodt（2004）の15項目は未登録。Mobley 系は入れない。検証論文は使用研究にしない。
- 職場逸脱は Bennett & Robinson（2000）の19項目（組織12＋対人7。DOI `10.1037/0021-9010.85.3.349`）。WIS-7、AS-15、OCB、Spector らの CWB-C は登録しない。
- 個人–組織適合は Cable & DeRue（2002）の P–O fit 3項目だけ（DOI `10.1037/0021-9010.87.5.875`）。PFS 全体9項目は登録しない。`versionType` は `subscale`。
- ワーク・ファミリー・コンフリクトは Netemeyer ら（1996）の10項目（DOI `10.1037/0021-9010.81.4.400`）。Carlson らの18項目は入れない。渡井らの日本語報告は書誌未確定のため `unconfirmed` のまま。
- 心理的契約の不履行は Robinson & Morrison（2000）の global breach 5項目。DOI は `10.1002/1099-1379(200008)21:5<525::AID-JOB40>3.0.CO;2-T`。violation は登録しない。SICI 形式の山括弧を通すため、`verify-data.mjs` の DOI 文字クラスに `<>` を加えた。
- 職の不安定性は Vander Elst ら（2014）の JIS 4項目（DOI `10.1080/1359432X.2012.745989`。誌面 23(3), 364–380。オンラインは2013-01-17）。2014年論文は心理測定評価であり使用研究にしない。Hellgren らの多次元版は入れない。
- 上司への信頼は McAllister（1995）の11項目（認知6＋感情5。DOI `10.2307/256727`）。Mayer & Davis（1999、DOI `10.1037/0021-9010.84.1.123`）は入れない。
- プロアクティブ・パーソナリティは Bateman & Crant（1993）の17項目（DOI `10.1002/job.4030140202`）を原版、Seibert ら（1999）の10項目（DOI `10.1037/0021-9010.84.3.416`）を `versionType: short` の主運用にする。
- 役割曖昧性と役割葛藤は1概念 `role-ambiguity-role-conflict`、通例14項目（葛藤8＋曖昧性6。DOI `10.2307/2391486`）。約29項目の原プールと役割過負荷は登録しない。
- 職務特性の旗艦は Morgeson & Humphrey（2006）の WDQ 77項目・21特性（DOI `10.1037/0021-9010.91.6.1321`）。自律性9項目などの抜粋は正式短縮版にしない。JDS（DOI `10.1037/h0076546`）は related の注意のみ。
- Mind Garden が一覧する日本語訳は品質未保証のため、MLQ も ALQ も `usage-example` や `validated` にしない。

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
- 日本語版は「検証済み」「言語的妥当性」「使用例」「翻訳研究」「関連版」「未確認」に加え、開発論文そのものの日本サンプルで因子を確認した場合は `validated-in-development-paper`（開発論文内の日本語検証）として分ける。これは独立した後続検証を意味する `validated` ではない。
- 利用研究数はレビュー等が実使用を確認した件数だけを登録し、引用数や検索件数を代用しない。
- 尺度項目本文は公開・転載の根拠が確認できる場合だけ掲載し、利用条件未確認は `unknown` のままにする。
- 研究設計の保存はブラウザ内とし、出力は利用者が明示的に行う。
