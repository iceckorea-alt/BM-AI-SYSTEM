# BM Digital 1.0

**버전:** v2.0  
**기준일:** 2026-10-10  
**지위:** BM 디지털 운영 최상위 내부 기준

## 1. 목적
BM Digital 1.0은 사람 직원과 AI 직원이 같은 기준으로 업무를 찾고, 판단하고, 실행하고, 인수인계할 수 있는 업무환경을 만든다.

핵심 원칙은 다음과 같다.

- 원본 1개 · 위치 1곳 · 링크는 여러 곳
- 운영단위는 지속되고 프로젝트는 시작·진행·종료된다
- 사용자가 파일 위치와 과거 맥락을 외워 AI를 안내하게 하지 않는다
- AI는 기존 자료를 먼저 찾고, 필요한 최소한의 새 파일만 만든다
- 공식 원본과 기억·색인·대화의 역할을 혼동하지 않는다

## 2. 시스템별 공식 역할

| 시스템 | 공식 역할 |
|---|---|
| GitHub `BM-AI-SYSTEM` | AI 운영지침, AI 직원 역할, Skills, 자동화 코드, API/MCP 설정, 시스템 변경이력의 공식 원본 |
| Google Shared Drive `BM` | 사업·프로젝트 실무자료와 최종 산출물의 공식 저장소 |
| Google Sheets `BM_PROJECT_INDEX` | 전체 프로젝트의 중앙 인덱스와 공통 프로젝트 관리대장 |
| Google Drive의 PROJECT_READ | 각 프로젝트의 현재 상태·주요 결정·다음 행동·핵심 링크를 담는 프로젝트 기억 |
| Airtable `BM_ACCESS_REGISTRY` | 계정·SNS·서비스 접속정보 등 공통 기준정보 레지스트리 |
| Docswave | 전자결재·기안·품의·지출·인사·근태 등 공식 행정기록 |
| Canva | 디자인 제작·편집 원본 |
| Gmail | 외부 커뮤니케이션 |
| Google Calendar | 공식 일정·행사·회의·마감 |
| ChatGPT / Work | 조사·분석·작성·실행 작업공간 |

## 3. 시작 구조
Google Drive 루트의 `BM_STARTER.md`는 안내판이다. 규칙을 중복 저장하지 않고 다음 공식 원본으로 연결한다.

- AI 운영규칙 → GitHub
- 프로젝트 목록·위치 → Google Sheets `BM_PROJECT_INDEX`
- 프로젝트 현재 맥락 → 해당 Drive PROJECT_READ
- 실제 실무자료 → Google Shared Drive
- 계정·SNS·접속정보 → Airtable
- 결재·행정 → Docswave

## 4. 프로젝트 정보 흐름
프로젝트 업무는 아래 순서를 기본으로 한다.

1. `BM_PROJECT_INDEX`에서 프로젝트 존재 여부·상태·Drive·READ 위치 확인
2. 프로젝트 PROJECT_READ에서 현재 맥락 확인
3. 필요한 실제 원본만 Drive/Docswave/Canva 등에서 확인
4. ChatGPT/Work 또는 직원이 업무 수행
5. 결과를 해당 공식 원본 시스템에 반영
6. 확정된 맥락 변화가 있으면 PROJECT_READ 갱신
7. 위치·상태·담당자·핵심 연결정보가 바뀌면 PROJECT_INDEX 갱신

## 5. 규정 우선순위
법령·계약·지원기관 강제조건 → BM Digital 1.0 → 승인된 분야별 내부규정 → BM AI AGENTS → 현재 업무지시·프로젝트 맥락

## 6. 사실 확인 우선순위
공식 계약·공문·결재·증명서·최종 승인 원본 → 최신 실무 원본 → PROJECT_READ → PROJECT_INDEX

## 7. 조직·법적 경계
BM은 대외적으로 하나의 브랜드 이미지를 지향하되, BM서울과 BM인천의 법적·회계·세무·보조금·정산 책임은 실제 주체별로 구분한다. 국제문화교류센터 등 별도 법인·단체의 원본을 BM 체계에 섞지 않는다.

## 8. 보안·권한
- 비밀번호, OTP 비밀키, 복구코드, 주민등록번호 전체, 계좌 비밀번호 등 고위험 비밀정보를 GitHub·Drive 운영문서·PROJECT_READ·Airtable에 저장하지 않는다.
- 삭제, 대량이동, 공유범위 변경, 관리자권한 변경 등 되돌리기 어려운 작업은 권한 있는 사용자 또는 지정 승인권자의 승인을 받는다.
- AI는 접근권한을 우회하지 않는다.

## 9. 변경관리
- AI 운영규칙의 공식 원본은 GitHub다.
- 동일 운영지침을 Google Drive와 GitHub에서 이중 원본으로 유지하지 않는다.
- PROJECT_READ의 실제 인스턴스는 Drive에 두고, 템플릿과 작성 규칙은 GitHub에서 관리한다.
- PROJECT_INDEX의 공식 원본은 Google Sheets다.
- 계정·SNS·서비스 접근정보의 공식 기준은 Airtable `BM_ACCESS_REGISTRY`다.

## 10. 성공 기준
- 직원 또는 AI가 1분 안에 프로젝트와 핵심 원본을 찾을 수 있다.
- 새 세션·새 AI·새 직원이 프로젝트를 이어받을 수 있다.
- 같은 공식 문서가 여러 시스템에서 중복 원본으로 존재하지 않는다.
- 계정과 접속주소를 사람이 기억하지 않아도 중앙 레지스트리에서 찾을 수 있다.
- 시스템이 커져도 반복 탐색과 중복작업은 줄어든다.

## 변경이력
- v2.0 / 2026-10-10: AI 운영 공식 원본을 GitHub로 전환하고, 프로젝트 인덱스를 Google Sheets, 접근정보를 Airtable, 실제 PROJECT_READ를 Google Drive에 두는 구조로 개편.
