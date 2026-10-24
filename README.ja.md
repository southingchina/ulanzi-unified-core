# Ulanzi Unified Core

[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português (Brasil)](README.pt-BR.md)

Ulanzi Deck の統合ワークベンチから抽出した独立ホスト部品です。アクション UUID の対応付け、モジュールインスタンスの分離、確定済み画面と押下対象の結び付け、Studio WebSocket の登録と再接続を提供します。複数機能が共存するホスト開発で Router、FrameBindings、トランスポートを利用できます。Node.js 20+ と ws が必要です。

## 必要な環境

Node.js 20+; ws

## 設定とエントリーポイント

`host/actions.js`, `host/router.js`, `host/frame-bindings.js`, `host/transport.js`

## 導入と使用方法

```shell
git clone https://github.com/southingchina/ulanzi-unified-core.git
cd ulanzi-unified-core
npm install --ignore-scripts
npm test
```


```javascript
import {Router,actions,FrameBindings,parseConnection} from './host/index.js';
const router=new Router();
const bindings=new FrameBindings();
// 将 Studio 的真实事件交给 router；只为已提交画面绑定可执行目标。
console.log(actions.length,parseConnection(['127.0.0.1','3906','zh_CN']));
```


## 公開範囲と制限

公開対象は独立ホストコードのみです。完全な私用ワークベンチには AgentDeck など、再配布権の確認が完了していない第三者モジュールも含まれます。それらやブランド画像、アカウント、会話、レイアウト、残高ログは公開しません。本リポジトリは完全なプラグイン導入パッケージではなく、元の 14 アクション製品をビルドできません。テストはルーティング、対象固定、実ループバック WebSocket を対象とし、実機 Deck の新たな検収ではありません。自身のコードは MIT、依存は各ライセンスに従います。メーカーとの提携はありません。

## 検証記録

2026-10-24 · Node / loopback WebSocket: 6 ✓

## ライセンスと出典

[MIT](LICENSE)

これらは文書の言語版です。アプリ画面、CLI 出力、実行ファイルは現在の実装に従います。

[中国語の詳細リファレンス](README.zh-CN.md) · [言語版の保守方針](docs/LOCALIZATION.md)

[Issues](https://github.com/southingchina/ulanzi-unified-core/issues) — 再現できる問題は合成データで報告し、ログの認証情報や個人情報を除いてください。
