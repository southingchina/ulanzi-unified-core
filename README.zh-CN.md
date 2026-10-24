# Ulanzi Unified Core · 统一工作台路由核心

[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português (Brasil)](README.pt-BR.md)

从 Ulanzi 统一工作台提取的独立宿主组件：动作 UUID 映射、模块实例隔离、已提交画面与按键目标绑定、Studio WebSocket 注册及重连。适合开发多个功能共存的 Deck 插件宿主。

## 公开版包含什么

- `host/actions.js`：原工程动作命名空间和模块映射。
- `host/router.js`：按动作实例路由消息，隔离失活或不属于本模块的事件。
- `host/frame-bindings.js`：按下时固定已提交目标，避免画面刷新后按键误操作。
- `host/transport.js`：连接参数、注册、消息和断线重连。
- `test/`：独立路由、目标绑定与真实回环 WebSocket 测试。

## 安装与验证

Node.js 20+（本次本地使用 22）：

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

## 与完整插件的关系

私有原工程还集成 CC Switch、配额/余额、AgentDeck、WorkBuddy 会话和 Clash 状态。其部分 vendor 来自本机已安装的第三方插件，目前缺少足以确认完整再分发范围的许可证材料。本仓库因此只公开以上独立宿主代码，**不是完整插件安装包，也不能构建或安装原来的 14 动作成品**。

没有包含 vendor、第三方品牌图片、账号配置、真实会话、设备布局、安装备份或额度日志。历史原工程的完整测试及实体屏幕效果不作为这个核心仓库的验收声明；以本仓库测试为准。后续补齐来源许可后，可再独立发布集成层。

MIT 适用于本仓库自身代码；Ulanzi 等商标归其权利人所有，本项目与厂商无隶属关系。npm 依赖按各自许可证提供。
