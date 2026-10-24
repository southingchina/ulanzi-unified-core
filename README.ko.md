# Ulanzi Unified Core

[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português (Brasil)](README.pt-BR.md)

Ulanzi Deck 통합 작업대에서 추출한 독립 호스트 구성 요소입니다. 동작 UUID 매핑, 모듈 인스턴스 격리, 제출된 화면과 버튼 대상 연결, Studio WebSocket 등록 및 재연결을 제공합니다. 여러 기능이 공존하는 호스트에 Router, FrameBindings와 전송 클래스를 사용할 수 있습니다. Node.js 20+와 ws 패키지가 필요합니다.

## 필요 환경

Node.js 20+; ws

## 설정 및 진입점

`host/actions.js`, `host/router.js`, `host/frame-bindings.js`, `host/transport.js`

## 설치 및 사용

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


## 공개 범위와 제한

이 저장소는 독립 호스트 코드만 공개합니다. 전체 비공개 작업대에는 재배포 권한 확인이 끝나지 않은 AgentDeck 등 타사 모듈도 포함됩니다. 해당 모듈, 브랜드 이미지, 계정, 대화, 레이아웃 및 할당량 로그는 포함하지 않습니다. 완성 플러그인 설치 패키지가 아니며 원래의 14개 동작 제품을 빌드할 수 없습니다. 테스트는 라우팅, 대상 고정과 실제 루프백 WebSocket을 확인하며 새 실물 Deck 검수가 아닙니다. 자체 코드는 MIT이고 의존성은 각 라이선스를 따릅니다. 제조사와 공식 제휴 관계가 없습니다.

## 검증 기록

2026-10-24 · Node / loopback WebSocket: 6 ✓

## 라이선스 및 출처

[MIT](LICENSE)

프로젝트 문서의 언어별 버전입니다. 앱 화면, CLI 출력과 실행 파일은 현재 구현을 따릅니다.

[중국어 상세 참고 문서](README.zh-CN.md) · [언어 문서 유지 관리 정책](docs/LOCALIZATION.md)

[Issues](https://github.com/southingchina/ulanzi-unified-core/issues) — 재현 가능한 문제는 합성 데이터로 보고하고 로그의 자격 증명과 개인 정보를 제거하세요.
