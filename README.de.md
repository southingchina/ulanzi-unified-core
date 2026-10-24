# Ulanzi Unified Core

[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português (Brasil)](README.pt-BR.md)

Unabhängige Host-Komponenten aus einem vereinheitlichten Ulanzi-Deck-Arbeitsplatz: Action-UUID-Zuordnung, Instanzisolierung, Bindung des gesendeten Bilds an das Tastenziel sowie Studio-WebSocket-Registrierung und Wiederverbindung. Router, FrameBindings und Transport helfen beim Bau eines Hosts mit mehreren Deck-Funktionen. Node.js 20+ und das Paket ws werden benötigt.

## Voraussetzungen

Node.js 20+; ws

## Konfiguration und Einstiegspunkte

`host/actions.js`, `host/router.js`, `host/frame-bindings.js`, `host/transport.js`

## Installation und Verwendung

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


## Umfang und Einschränkungen

Veröffentlicht wird ausschließlich unabhängiger Host-Code. Der vollständige private Arbeitsplatz integriert auch AgentDeck und andere Drittmodule, deren Weiterverbreitungsrechte noch nicht vollständig geklärt sind. Diese Module, Markenbilder, Konten, Gespräche, Layouts und Quotenprotokolle fehlen. Dies ist kein vollständiges Plugin-Installationspaket und baut nicht das ursprüngliche Produkt mit 14 Aktionen. Tests prüfen Routing, Tastenziele und echte Loopback-WebSockets, keine neue Abnahme am physischen Deck. MIT gilt für eigenen Code, Abhängigkeiten behalten ihre Lizenzen. Es besteht keine Herstellerzugehörigkeit.

## Prüfstand

2026-10-24 · Node / loopback WebSocket: 6 ✓

## Lizenz und Herkunft

[MIT](LICENSE)

Dies sind Sprachfassungen der Dokumentation. Oberflächen, CLI-Ausgaben und ausführbare Pakete folgen weiterhin der aktuellen Implementierung.

[Vollständige chinesische Referenz](README.zh-CN.md) · [Pflege der Sprachfassungen](docs/LOCALIZATION.md)

[Issues](https://github.com/southingchina/ulanzi-unified-core/issues) — Reproduzierbare Probleme mit synthetischen Daten melden. Zugangsdaten und private Informationen aus Protokollen entfernen.
