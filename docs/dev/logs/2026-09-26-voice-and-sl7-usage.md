# v0.73.0 従業員の発言行動（Voice-6）と SL-7 の使用研究

日付: 2026-09-26

## 追加

- 概念 `employee-voice`（従業員の発言行動）
- 尺度 `van-dyne-lepine-voice-6`。Van Dyne & LePine（1998）, Academy of Management Journal, 41(1), 108–119。DOI `10.2307/256902`（Crossref の別名 `10.5465/256902`）。Voice 6項目、7件法。使用研究は空。日本語状況は `unconfirmed`
- `liden-sl-7` の使用研究1件。Svensson, Jones, & Kang。Journal of Sport for Development, 10(1), November 2021, 17–24。公開PDFは2022年。引用年は2022。DOI なし。URL `https://jsfd.org/wp-content/uploads/2022/02/svensson.servant.leadership.sfd_.pdf`

## 根拠として確認したこと

- Crossref: DOI `10.2307/256902` は Academy of Management Journal, 41(1), 108–119、1998年2月。別名に `10.5465/256902`
- 公開抄録（Arizona State University の記録）: 従業員597名。上司・同僚・本人が役割内と役割外、helping と voice を区別
- voice のα .82～.96 と CFA の識別は、原典を引用する尺度解説の要約。原典の表は開いていない
- Svensson の公開PDF: Liden et al.（2015）の SL-7、非管理職100名がリーダーを7件法で評定、α=.89。例示した1項目は部下優先に対応。Crossref 検索では当該論文の DOI は見つからなかった

## 入れなかったもの

- 同一論文の Helping 7項目
- Van Dyne & LePine（1998）の開発論文を usageStudies に入れること
- Liden et al.（2015）の開発論文（DOI `10.1016/j.leaqua.2014.12.002`）を使用研究に入れること
- Kumari et al.（2022）の項目削除、Yuan et al.（2020）、未再確認の Zong et al.（2026）
- Williams–Anderson OCBI/OCBO の usage、CX Scale 18 の第2 usage（Gao & Jiang のみ維持）、Brand Affect 3 と OBE-4 の日本語（HOLD）
- SL-28 のレコード
- 項目本文

## 検証

- 作業開始時の main は `c19a446`（v0.72.0）
- `node verify-data.mjs` 成功。概念68、尺度103、使用研究161、日本語未確認52。翻訳・因子構造等の検討4、関連版13。登録版そのものが3・4項目22、使用研究での3・4項目25、目的別ガイド9
- `node verify-data.mjs --self-test` 成功
- `node --check data.js`、`node --check app.js`、`git diff --check` 成功
- ローカルの静的サーバで、見出しが v0.73.0・68概念・103尺度・使用研究161件になることを確認した。発言行動の検索と詳細、SL-7 の Svensson 使用研究、概念一覧、研究設計（合計13項目、CSV/JSON、根拠CSV）、CX Scale 18 が Gao & Jiang の1件のまま、OCBI/OCBO の使用研究が空のまま、Brand Affect 3 の日本語が未確認のままであることを確認した。幅390pxでも詳細ダイアログは画面内に固定表示された
