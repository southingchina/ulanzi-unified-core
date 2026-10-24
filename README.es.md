# Ulanzi Unified Core

[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português (Brasil)](README.pt-BR.md)

Componentes de host independientes extraídos de una estación Ulanzi Deck unificada: mapeo de UUID de acciones, aislamiento de instancias, vinculación entre imagen enviada y objetivo del botón, registro y reconexión WebSocket con Studio. Router, FrameBindings y el transporte sirven para desarrollar hosts con varias funciones Deck. Requiere Node.js 20+ y el paquete ws.

## Requisitos

Node.js 20+; ws

## Configuración y puntos de entrada

`host/actions.js`, `host/router.js`, `host/frame-bindings.js`, `host/transport.js`

## Instalación y uso

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


## Alcance y limitaciones

Solo se publica el código independiente del host. La estación privada completa también integra AgentDeck y otros módulos de terceros cuyos derechos de redistribución no se han confirmado por completo. No se incluyen esos módulos, imágenes de marcas, cuentas, conversaciones, diseños ni registros de cuotas. No es un instalador completo ni permite compilar el producto original de 14 acciones. Las pruebas verifican rutas, objetivos y WebSocket de bucle local, no una nueva aceptación del dispositivo físico. MIT cubre el código propio; cada dependencia conserva su licencia. No existe afiliación con los fabricantes.

## Registro de validación

2026-10-24 · Node / loopback WebSocket: 6 ✓

## Licencia y atribución

[MIT](LICENSE)

Son versiones de la documentación. Las interfaces, salidas CLI y ejecutables mantienen el comportamiento de la implementación actual.

[Referencia completa en chino](README.zh-CN.md) · [Política de mantenimiento de idiomas](docs/LOCALIZATION.md)

[Issues](https://github.com/southingchina/ulanzi-unified-core/issues) — Comunica problemas reproducibles con datos sintéticos. Elimina credenciales e información privada de los registros.
