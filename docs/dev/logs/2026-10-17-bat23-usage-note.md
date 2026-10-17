# v0.99.0 BAT-23 の利用条件注記

日付: 2026-10-17

## 変更

- 対象は `schaufeli-bat-23` のみ。概念・尺度・使用研究・選択ガイド・関係の件数は変えていない。128概念・174尺度・197使用研究・64選択ガイド・16関係。日本語の検証済み23、関連版14、未確認106。
- `usagePermission` は `open` のまま。
- `license`、`usageNote`、`permissionNote` はデータ内に無い。条件文は既存の `notes` の先頭に追記した。
- `notes` は尺度項目欄の長文で、利用条件セルは区分ラベル「掲載・利用可」だけだった。短い `usagePermissionNote` を追加し、詳細の利用条件セルに注記を出す。`app.js` は `license`、`usageNote`、`permissionNote`、`usagePermissionNote` の順で最初の文字列を表示する。値が無い尺度は従来どおり区分ラベルだけ。
- 表示文は「無償で利用可・事前許諾不要・項目の改変不可・出典の引用必須（BAT公式サイト記載）。https://burnoutassessmenttool.be/en/」。
- 版は v0.98.0 から v0.99.0。`verifiedAt` は 2026-10-17。

## 確認した出典

- https://burnoutassessmenttool.be/en/ を 2026-10-17 に開いた。Welcome に次の英文がある。“The BAT is non-proprietary and may be used free of charge without requesting permission from the authors. Please note, however, that the instrument should not be modified, and the following publication should be cited: Schaufeli, W. B., Desart, S., & De Witte, H. (2020). Burnout Assessment Tool (BAT) – Development, validity and reliability. International Journal of Environmental Research and Public Health, 17, 9495”
- https://burnoutassessmenttool.be/ のオランダ語も同趣旨。gratis、著者への toestemming は不要、instrument は aangepast しない、同じ文献を vermelden。
- ページは商用の可否を述べていない。学術質問だけに返信する、という連絡先の注意は利用条件にしない。
