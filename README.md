# Ulanzi Unified Core

[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português (Brasil)](README.pt-BR.md)

Independent host components extracted from a unified Ulanzi Deck workbench: action UUID mapping, module-instance isolation, submitted-frame/button-target binding, and Studio WebSocket registration and reconnection. Use the Router, FrameBindings and transport classes when building a host in which several Deck functions coexist. Node.js 20+ and the ws package are required.

## Requirements

Node.js 20+; ws

## Configuration and entry points

`host/actions.js`, `host/router.js`, `host/frame-bindings.js`, `host/transport.js`

## Installation and usage

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


## Scope and limitations

This repository publishes only independent host code. The complete private workbench also integrates third-party AgentDeck and other vendor modules whose redistribution rights have not been fully established. Those modules, branded images, accounts, sessions, layouts and quota logs are not included. This is not a complete plugin installer and cannot build the original 14-action product. Tests cover routing, frame targets and real loopback WebSockets, not a new physical-Deck acceptance. MIT applies to this repository's code; dependencies keep their own licenses. This project is not affiliated with the vendors.

## Validation record

2026-10-24 · Node / loopback WebSocket: 6 ✓

## License and attribution

[MIT](LICENSE)

These are documentation editions. Application interfaces, CLI output and executable releases retain the behavior of the current implementation.

[Complete Chinese reference](README.zh-CN.md) · [Language maintenance policy](docs/LOCALIZATION.md)

[Issues](https://github.com/southingchina/ulanzi-unified-core/issues) — Report a reproducible issue with synthetic data. Remove credentials and private information from logs.
