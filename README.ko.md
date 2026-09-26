# Facebook 그룹 게시（매트릭스 마케팅）

> 한 번 설정으로 여러 그룹 × 여러 캡션 × 여러 계정 지문 브라우저에 동시 게시. 도달을 키우고 반복 붙여넣기를 줄입니다.

**Languages:** [English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [Bahasa Melayu](README.ms.md) · [Tiếng Việt](README.vi.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md)

**저장소:** [https://github.com/yuhaya/facebook-group-post](https://github.com/yuhaya/facebook-group-post) · `git@github.com:yuhaya/facebook-group-post.git`

---

## 이 자동화가 하는 일

**AutoAI** 데스크톱용 자동화 프로젝트입니다. 클라이언트로 가져오면:

| 기능 | 결과 |
|---|---|
| **Facebook 그룹 게시** | 그룹 페이지를 열고 캡션+이미지 또는 캡션+동영상 1개 게시 |
| **매트릭스 확장** | 여러 그룹 URL + 여러 캡션 → **각 그룹이 모든 캡션을 게시** (작업 수 = 그룹 × 캡션) |
| **다중 계정 브라우저** | 선택한 지문 브라우저에 **라운드로빈** 분배 (브라우저 1개 = 계정 1개) |
| **미디어 풀** | 이미지 풀(게시당 N장·순환) / 동영상 풀(게시당 1개·순환) |
| **익명 게시(선택)** | 작성기에 “익명으로 게시” 스위치가 있으면 자동 켜기 |
| **사람 같은 스케줄** | 일일 한도, 랜덤 간격, 일일 시간대(심야 교차 가능) |

### 왜 “매트릭스 게시”인가

수동 그룹 마케팅은 스케일이 어렵습니다. 한 사람·한 계정·한 그룹씩은 한계가 있습니다.

예시:

- **20 그룹 × 5 캡션 = 100 작업** 을 여러 브라우저에 스케줄  
- 같은 오퍼를 다른 문구/소재로 여러 커뮤니티에  
- 심야 교차 창으로 타깃이 온라인인 시간에 게시  

**프로덕션 작업 그룹 실행은 AI 토큰을 거의 쓰지 않습니다.** 토큰은 주로 에이전트 개발·적응·수리에 쓰입니다.

> 소유하거나 권한이 있는 계정/그룹만 사용하고 Facebook 약관과 현지 법을 지키세요.

---

## 사전 요건

- **AutoAI 데스크톱 클라이언트**（[다운로드](https://www.xrobot.tech/ko/download/)）
  - **Windows:** x86 / x64만 (ARM 미지원)
  - **macOS:** Apple 실리콘(M 시리즈)만 (Intel Mac 미지원)
- AutoAI 계정（[등록](https://www.xrobot.tech/ko/register/) · [로그인](https://www.xrobot.tech/ko/login/)）
- Facebook에 로그인한 **지문 브라우저** 1대 이상
- **할당량:** AutoAI는 **무료 지문 브라우저 환경 1개**를 기본 제공. 매트릭스/다중 계정 시 클라이언트 또는 [계정](https://www.xrobot.tech/ko/account/)에서 **추가 구매**

---

## 빠른 시작

### 1. 클라이언트 다운로드

👉 [https://www.xrobot.tech/ko/download/](https://www.xrobot.tech/ko/download/)

### 2. 등록 및 로그인

1. [등록](https://www.xrobot.tech/ko/register/)（이메일 + 인증코드/비밀번호）.
2. 웹 [로그인](https://www.xrobot.tech/ko/login/) 가능. **데스크톱 클라이언트에서도 동일 계정으로 로그인 필수**.

### 3. Facebook 지문 브라우저 준비

AutoAI에는 **무료 지문 환경 1개**（**플랫폼 브라우저**）가 포함됩니다. 단일 계정 테스트에 충분합니다. 매트릭스는 **여러 브라우저(여러 계정)** 가 유리합니다. 부족하면 할당량을 구매해 환경을 추가하세요.

1. 왼쪽 **브라우저** 열기.
2. **플랫폼 브라우저**(내장 무료) 권장. BitBrowser / AdsPower도 가능.
3. **만들기** → **시작** → 필요 시 **캐스트** 켜기.
4. 해당 브라우저에서 **Facebook 수동 로그인** 후 세션 확인.
5. 계정 추가: 할당량 구매 → 브라우저 추가 생성 → 각각 Facebook 로그인 → 작업 그룹 생성 시 모두 선택.

### 4. GitHub에서 가져오기

1. **자동화 → 가져오기**.
2. 저장소 주소 붙여넣기: `https://github.com/yuhaya/facebook-group-post` (`yuhaya/facebook-group-post` 또는 `git@github.com:yuhaya/facebook-group-post.git`도 가능).
3. **가져오기 시작**.
4. **자동화 → 내 자동화**에 표시.

### 5. 작업 그룹 만들기(매트릭스 실행)

1. **자동화 → 내 자동화**.
2. **카드 본문 클릭**(하단 전문가 버튼 아님).
3. 예: 그룹 URL(한 줄에 하나), 캡션(`==sep==` 구분), 브라우저, 미디어, 스케줄.
4. **만들기** → 예정 시간과 개수 확인.
5. 요청 시 우측 상단 **작업** 마스터 스위치 켜기.
6. **작업 그룹 관리**에서 진행 확인.

**작업 수:** `그룹 수 × 캡션 수`. 생성 후 선택 브라우저에 **라운드로빈**.

---

## 양식 필드

| 필드 | 의미 |
|---|---|
| 그룹 URL | 줄당 1 URL. 각 그룹이 모든 캡션 게시 |
| 캡션 | `==sep==` 로 구분 |
| 익명 게시 | 켜면 작성기에 스위치가 있을 때 활성화 |
| 미디어 유형 | 이미지(여러 장) / 동영상(게시당 1) |
| 이미지/동영상 | 풀에서 순서대로, 소진 후 순환 |
| 게시당 이미지 수 | 풀에서 몇 장 |
| 브라우저 | 실행 지문 환경 |
| 일일 한도 | 시간대 내 브라우저당 최대 |
| 간격 min/max | 게시 사이 랜덤 대기(초) |
| 일일 시작/종료 | **시작 > 종료** 는 심야 교차(예 `22:00`→`06:00`) |

---

## 맞춤이 필요할 때

공식 스크립트와 UI 언어·계정 유형·지역이 다를 수 있습니다. 내장 에이전트로 맞추세요.

### 먼저 연산력 충전(에이전트 대화용)

프로덕션 배치는 거의 토큰을 쓰지 않습니다. **에이전트 수정/문제 해결**이 **AI 연산력**을 소비합니다.

1. 웹에서 **USD 잔액 충전**.  
2. 데스크톱 → 프로필/지갑 → **AI 연산력 구매**.  
3. 반영 후 에이전트 대화 시작.

### 에이전트에 요청

**A. 기능 변경 / 환경 적응(개발 모드)** — 카드 하단 **브라우저 자동화 전문가** → 시작된 디버그 브라우저 → 요청 설명 → **스크립트 시범 실행**.

**B. 실패한 배치(문제 해결 모드)** — **작업 그룹 관리** → **조사 및 수정**.

### 더 보기

- [시작하기](https://www.xrobot.tech/blog/ko/guide/getting-started) · [처음부터 만들기](https://www.xrobot.tech/blog/ko/guide/custom-automation)
- [사례](https://www.xrobot.tech/ko/cases/) · [다운로드](https://www.xrobot.tech/ko/download/) · [등록](https://www.xrobot.tech/ko/register/) · [로그인](https://www.xrobot.tech/ko/login/)

---

## 매트릭스 팁

- **여러 브라우저(계정)** 우선. 먼저 **무료 1개**로 시험, 확장 시 지문 슬롯 추가 구매.  
- 간격·일일 한도에 여유. 심야 교차는 해외 낮 시간에 유리.  
- 캡션·소재를 다양하게.  
- 대량 생성 전 Facebook 로그인 확인.  
- 프로덕션 ≈ **0 토큰**.

---

## 프로젝트 정보

| | |
|---|---|
| 패키지 ID | `fb-group-post` |
| 표시 이름 | Facebook 그룹 게시 |
| 런타임 | AutoAI 데스크톱(브라우저 자동화) |

`AGENTS.md`는 클라이언트 내 에이전트 개발자용입니다. 고객은 이 README를 따르세요.

---

## 지원

- 사이트: [https://www.xrobot.tech](https://www.xrobot.tech)

문제 시 수동 편집보다 **개발/문제 해결 모드**를 우선하세요.
