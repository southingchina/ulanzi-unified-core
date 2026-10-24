# Ulanzi Unified Core

[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português (Brasil)](README.pt-BR.md)

Componentes de host independentes extraídos de uma estação Ulanzi Deck unificada: mapeamento de UUID de ações, isolamento de instâncias, vínculo entre imagem enviada e alvo do botão, registro e reconexão WebSocket com o Studio. Router, FrameBindings e transporte ajudam a criar hosts com várias funções Deck. Exige Node.js 20+ e o pacote ws.

## Requisitos

Node.js 20+; ws

## Configuração e pontos de entrada

`host/actions.js`, `host/router.js`, `host/frame-bindings.js`, `host/transport.js`

## Instalação e uso

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


## Escopo e limitações

Somente o código independente do host é publicado. A estação privada completa também integra AgentDeck e outros módulos de terceiros cujos direitos de redistribuição ainda não foram totalmente confirmados. Esses módulos, imagens de marcas, contas, conversas, layouts e logs de cotas foram excluídos. Não é um instalador completo e não compila o produto original de 14 ações. Os testes verificam rotas, alvos e WebSocket de loopback real, não uma nova aceitação do Deck físico. MIT cobre o código próprio; dependências mantêm suas licenças. Não há vínculo oficial com os fabricantes.

## Registro de validação

2026-10-24 · Node / loopback WebSocket: 6 ✓

## Licença e créditos

[MIT](LICENSE)

São versões da documentação. Interfaces, saídas CLI e executáveis mantêm o comportamento da implementação atual.

[Referência completa em chinês](README.zh-CN.md) · [Política de manutenção dos idiomas](docs/LOCALIZATION.md)

[Issues](https://github.com/southingchina/ulanzi-unified-core/issues) — Relate problemas reproduzíveis com dados sintéticos. Remova credenciais e informações privadas dos logs.
