# AGENT_ONBOARDING

**목적:** BM을 처음 맡는 사람 직원 또는 AI 직원이 과거 채팅·대표의 기억에 의존하지 않고 업무를 시작하기 위한 공통 진입 절차.

## 1. 필수 접근환경
업무 범위에 따라 아래 접근권한이 필요하다.

1. Google Shared Drive `BM`
   - STARTER, PROJECT_INDEX, 프로젝트 폴더, 실제 PROJECT_READ
2. GitHub Private Repository `iceckorea-alt/BM-AI-SYSTEM`
   - AI 운영규칙·Skills·자동화·연동문서
3. Airtable `BM_ACCESS_REGISTRY`
   - 계정·SNS·서비스 접근 기준정보
4. 업무에 필요한 경우 Docswave / Canva / Gmail / Google Calendar

접근권한이 없는 시스템은 우회하지 않는다. '자료가 없다'고 단정하지 말고 접근권한 부족으로 보고한다.

## 2. 새 AI의 첫 실행
1. Google Shared Drive `BM` 루트의 `BM_STARTER.md`를 읽는다.
2. 프로젝트 업무이면 Google Sheets `BM_PROJECT_INDEX`에서 프로젝트를 찾는다.
3. 해당 프로젝트의 PROJECT_READ를 읽는다.
4. AI 운영·규칙 판단이 필요하면 GitHub `governance/BM_AI_AGENTS_.md`와 `governance/BM_DIGITAL_1.0.md`를 확인한다.
5. 실제 업무에 필요한 원본만 읽는다.

## 3. 새 직원의 에이전트에 넣을 최소 시작지시
다음 의미가 항상 적용돼야 한다.

> BM 업무를 시작할 때 Google Shared Drive 'BM' 루트의 BM_STARTER.md를 먼저 확인한다. 프로젝트 업무는 BM_PROJECT_INDEX → 해당 PROJECT_READ → 필요한 실제 원본 순으로 확인한다. AI 운영규칙은 Private GitHub BM-AI-SYSTEM의 최신본을 공식 원본으로 사용한다. 접근할 수 없는 시스템은 추정하지 말고 권한 부족을 보고한다.

## 4. 다중 AI 원칙
- INDEX는 모두 읽되, 쓰기는 담당 AI 직원 또는 지정 시스템관리 AI만 한다.
- 담당 AI가 미지정이면 시스템관리 AI 외에는 INDEX를 수정하지 않는다.
- 프로젝트 AI는 자기 PROJECT_READ를 최신 상태로 유지한다.
- 같은 프로젝트를 동시에 수정해야 하면 한 AI를 대표 작성자로 정한다.
- 채팅 기억을 공식 기억으로 사용하지 않는다.

## 5. 정상 시작 판정
새 직원/AI가 아래 질문에 대표의 도움 없이 답할 수 있으면 정상이다.
- 현재 전체 프로젝트 목록은 어디에 있는가?
- 이 프로젝트의 Drive 폴더와 READ는 어디인가?
- 현재 상태와 다음 할 일은 무엇인가?
- AI 운영규칙의 공식 원본은 어디인가?
- 계정·SNS 접근정보는 어디에서 확인하는가?
- 결재·행정의 공식 원본은 어디인가?

## 6. 금지
- 비밀번호·OTP·복구코드를 운영문서에 기록하지 않는다.
- GitHub/Drive에 같은 AI 규칙의 중복 원본을 만들지 않는다.
- 권한이 없다고 개인 계정 자격증명을 다른 직원에게 공유하지 않는다.
