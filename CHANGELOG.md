# CHANGELOG — BM-AI-SYSTEM 규정 변경기록

모든 규정 변경을 여기에 한 줄씩 남긴다(최신이 위). 형식: `날짜 · 버전 · 결정자·작성자(실명) · 내용`. 큰 개편은 `archive/MIGRATION_*.md`에 상세 경위를 둔다. 이 파일은 평소 읽지 않는다.

## v3.1 — 2026-10-21 · 결정 대표 · 작성 대표 (Claude 기록)
- (추가) Drive `BM_STARTER`에 0장 'AI 필수 규칙' 신설 — GPT·Gemini 등 GitHub를 못 여는 AI도 STARTER만 읽으면 같은 규칙 적용. CORE 변경 시 0장 동기화 의무(BM_CORE·HEALTH_CHECK), Gemini 설정 방법(ONBOARDING)
READ는 현재값만, 이력은 LOG로. 기록은 실명. 상세: `archive/MIGRATION_2026-10-21.md` 7장
- `BM_DIGITAL_1.0.md` 1장: 4대 목표(끊김 없는 인계·즉시 파악·다음 준비·최소 토큰) 명시, LOG·부록 역할 추가
- `BM_CORE.md`: 작성자 코드 폐지 → 실명 + `(도구명 기록)`, AI는 직원이 아닌 도구, 6장 READ/LOG 분리·긴 파일 분리(부록) 규칙
- `PROJECT_READ_TEMPLATE.md` Schema v2.1: 7장 변경이력·8장 보관 삭제, LOG 문서 서식 추가, 부록은 별도 문서
- OPS_PROJECT·OPS_ACCESS·OPS_CLOSING·AGENT_ONBOARDING·SYSTEM_HEALTH_CHECK·퀵가이드·`skills/bm-work`: 실명 기록·LOG 반영
- Drive: 프로젝트별 LOG 문서 5개 생성(기존 이력 이관), READ 5개 v2.1, 마포 부록 분리, INDEX 수정자 실명화, STARTER 2장 인원 목록

## v3.0 — 2026-10-21 · 결정 J · 작성 J·CL
경량화·다수 직원/다수 AI 전제 개편. 상세: `archive/MIGRATION_2026-10-21.md`
- `governance/BM_CORE.md` 신설: 매번 읽는 유일한 1쪽 규정(시작순서·원본위치·역할권한·작성자 코드·결정 등급·자동저장·금지·완료보고·업무별 읽을 파일)
- `BM_AI_AGENTS_.md` v2.5를 `ops/OPS_PROJECT.md`·`ops/OPS_CLOSING.md`·`ops/OPS_ACCESS.md`로 분할, 원 파일은 링크 보존용 안내만 남김
- `BM_DIGITAL_1.0.md`: 상위 원칙만 남기고 마감 상세는 OPS_CLOSING으로 이동, AI 작업공간에 Claude 명시, `info@` 메일 전용 명시
- `AGENT_ONBOARDING.md`: 모든 AI 부트스트랩 지시, 작성자 코드 등록, 입사·퇴사·부재·AI 교체 체크리스트, 콜드스타트 테스트로 재구성
- `SYSTEM_HEALTH_CHECK.md`: 체크리스트 형식으로 축소, INDEX-READ 동기화·작성자 코드·CORE 분량 점검 추가, 공개 저장소에서 내부 리소스 ID 제거
- `PROJECT_READ_TEMPLATE.md` Schema v2.0: 0장 요약, 15장→9장, 할 일 태그 목록, 결정 등급, 작성자 코드, 이력 10건+보관
- `PROJECT_RESULT_REPORT_TEMPLATE.md`: AI 절차를 OPS_CLOSING으로 이동, 내부 문서 링크 제거
- 퀵가이드·`skills/bm-work` 갱신(자동저장, 작성자 코드, raw 주소, 접속 시 READ 전체 열기 폐지)
- INDEX에 `다음 할 일` 열 추가, 책임자 허용 열 직접 수정 도입
- 각 문서의 개별 변경이력을 이 파일로 통합
- `AUDIT_2026-10-10.md` → `archive/`

## 이전 이력 (각 문서에서 통합)
- 2026-10-15 · AGENTS v2.5 / DIGITAL v2.1 / ONBOARDING v1.3 / HEALTH v1.4 · `마감` 명령을 결과보고서 DOCX → READ 정리 → `마감요청` → Docswave 결재 → `종료` 흐름으로 표준화, 미확정 정보 질문·추정 금지, 결과보고 필수항목, 마감 점검 추가
- 2026-10-15 · ONBOARDING v1.4 · `매뉴얼`·`퀵가이드`·`사용법`·`도움말` 호출어와 직원용 퀵가이드 추가
- 2026-10-15 · AGENTS v2.4 / ONBOARDING v1.2 / HEALTH v1.3 · Airtable 저장 범위와 실제 권한 검증, 직원 업무정보·비공개 인사정보 분리, Docswave 인사·급여 원본 유지, 대표 중심 접근설계, 시스템관리 역할 자동부여 금지, Public GitHub 개인정보 금지
- 2026-10-15 · AGENTS v2.3 / ONBOARDING v1.1 / HEALTH v1.2 · 새 채팅 시작 절차, 등록 대기 확인, `작업 결과 저장` 명령, 중간저장·종료점검·저장 후 재확인·저장상태 보고, 인증파일 취급, 시스템관리 권한 미확정 처리, Public GitHub 전환 반영
- 2026-10-15 · `skills/bm-work` v0.1 · 대표 개인 검증용 비엠업무 스킬과 Codex용 `agents/openai.yaml` 추가
- 2026-10-10 · AGENTS v2.2 · 중앙 `프로젝트` 탭 단일 작성자와 `업데이트요청` 큐 도입
- 2026-10-10 · AGENTS v2.1 · 실제 Shared Drive 경로, 프로젝트 ID·행 버전·접근실패 처리, 레거시 탭 역할 반영
- 2026-10-10 · AGENTS v2.0 / DIGITAL v2.0 · AI 운영 공식 원본을 GitHub로 전환, INDEX=Sheets·접근정보=Airtable·READ=Drive 역할분리, 사람+AI 직원 협업체계로 전면 개편
