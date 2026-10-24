# Ulanzi Unified Core

[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português (Brasil)](README.pt-BR.md)

Composants hôtes indépendants extraits d'un poste Ulanzi Deck unifié : correspondance des UUID d'actions, isolation des instances, liaison entre image envoyée et cible du bouton, enregistrement et reconnexion WebSocket Studio. Router, FrameBindings et le transport permettent de développer un hôte réunissant plusieurs fonctions Deck. Node.js 20+ et le paquet ws sont nécessaires.

## Prérequis

Node.js 20+; ws

## Configuration et points d’entrée

`host/actions.js`, `host/router.js`, `host/frame-bindings.js`, `host/transport.js`

## Installation et utilisation

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


## Périmètre et limites

Seul le code hôte indépendant est publié. Le poste privé complet intègre aussi AgentDeck et d'autres modules tiers dont les droits de redistribution ne sont pas entièrement établis. Ces modules, images de marques, comptes, conversations, configurations et journaux de quota sont exclus. Ce n'est pas un installateur complet et il ne peut pas construire le produit original à 14 actions. Les tests couvrent routage, cibles et WebSocket de bouclage réel, pas une nouvelle validation physique du Deck. MIT couvre le code propre ; les dépendances conservent leur licence. Le projet n'est affilié à aucun fabricant.

## Historique de validation

2026-10-24 · Node / loopback WebSocket: 6 ✓

## Licence et attribution

[MIT](LICENSE)

Il s’agit de versions de la documentation. Interfaces, sorties CLI et exécutables conservent le comportement de l’implémentation actuelle.

[Référence complète en chinois](README.zh-CN.md) · [Politique de maintenance des langues](docs/LOCALIZATION.md)

[Issues](https://github.com/southingchina/ulanzi-unified-core/issues) — Signalez les problèmes reproductibles avec des données synthétiques. Retirez identifiants secrets et informations privées des journaux.
