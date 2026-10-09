# SYSTEM_HEALTH_CHECK

**목적:** BM Digital 1.0의 구조·링크·상태가 실제 시스템과 일치하는지 반복 점검한다.

## 정상 기준
### Google Shared Drive 루트
루트에는 원칙적으로 다음 핵심 진입요소와 조직 폴더가 보인다.
- `BM_STARTER.md`
- `BM_PROJECT_INDEX` (Google Sheets)
- `00_BM공통`
- `01_BM서울`
- `02_BM인천`
- `98_아카이브`
- `99_시스템백업`

구형 AI 운영 MD는 루트 공식 원본으로 두지 않는다.

### 실제 프로젝트 경로
- `BM/01_BM서울/02_BM서울_프로젝트/YYYY/YYYY_프로젝트명`
- `BM/02_BM인천/02_BM인천_프로젝트/YYYY/YYYY_프로젝트명`

### 공식 원본
- AI 운영: GitHub `BM-AI-SYSTEM`
- 프로젝트 목록: Google Sheets `BM_PROJECT_INDEX`
- PROJECT_READ 인스턴스: 각 Drive 프로젝트 폴더
- 접근정보: Airtable `BM_ACCESS_REGISTRY`
- 공식 행정: Docswave

## 점검 항목
1. STARTER가 존재하고 GitHub·INDEX·Drive·Airtable·Docswave 역할을 올바르게 안내하는가
2. GitHub main에 DIGITAL / AGENTS / PROJECT_READ_TEMPLATE이 존재하는가
3. GitHub 운영문서와 실제 Shared Drive 경로가 일치하는가
4. Sheets의 모든 프로젝트 행에서 Drive 폴더와 PROJECT_READ 링크가 열리는가
5. 2026 정규 프로젝트가 `프로젝트` 탭에 빠짐없이 등록됐는가
6. 과거 프로젝트성 폴더가 `레거시_폴더` 탭에서 위치 추적 가능한가
7. INDEX 상태와 READ 상태가 일치하는가
8. READ의 핵심 원본 링크가 살아 있는가
9. 루트나 공통폴더에 구형 AI 규칙의 중복 공식본이 남아 있지 않은가
10. 브랜드·공통 READ가 구형 STARTER/INDEX/AGENTS 링크를 참조하지 않는가
11. Airtable에 비밀번호·OTP·복구코드가 저장되지 않았는가
12. 담당 AI·수정자·행 버전 규칙이 지켜지는가
13. GitHub Private / Shared Drive / Airtable 접근권한이 실제 직원·에이전트에게 부여돼 있는가
14. 동일 파일명·동일 자료 중복 후보가 새로 생기지 않았는가
15. 종료 프로젝트의 READ와 INDEX가 종료 상태로 동기화돼 있는가

## 이상 발견 시
- 안전하게 바로잡을 수 있는 링크·표기·단일 원본 불일치는 즉시 수정한다.
- 삭제·공유권한·대량이동·법적/회계 사실 변경은 승인 후 처리한다.
- 권한 때문에 검증할 수 없는 항목은 '미검증'으로 명시한다.
- 점검 완료를 보고할 때 '확인 완료 / 수정 완료 / 미검증 / 사용자 결정 필요'를 구분한다.

## 2026-10-10 기준 핵심 ID
- BM Shared Drive: `0AAnONTwZgomNUk9PVA`
- BM_STARTER: `1rWA7OofkbN1KNRPoQhzPLckeMV7VL6vspIfl84Iro8U`
- BM_PROJECT_INDEX: `1u7fXRfls1ECxpvBXYo0mwFBY4xXEH54wdjouj6aC8iI`
- Airtable BM_ACCESS_REGISTRY: `apprMV9Vw79qzfbkf`

ID는 이동 후에도 일반적으로 유지되지만, 접근권한과 실제 존재 여부는 매 점검 시 다시 확인한다.
