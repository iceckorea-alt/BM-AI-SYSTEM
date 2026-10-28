# CHANGELOG — BM-AI-SYSTEM 규정 변경기록

모든 규정 변경을 여기에 한 줄씩 남긴다(최신이 위). 형식: `날짜 · 버전 · 결정자·작성자(실명) · 내용`. 큰 개편은 `archive/MIGRATION_*.md`에 상세 경위를 둔다. 이 파일은 평소 읽지 않는다.

## v3.5 — 2026-10-28 · 결정 대표 · 작성 대표 (Claude 기록)
매번 읽는 규칙을 STARTER 0장 하나로. 근거: 작업 시작 때 0장(약 4,000자)과 BM_CORE(9,700자)를 중복으로 읽음.
- STARTER 0장: 작업 시작 순서에서 BM_CORE 제외, CORE에만 있던 핵심(역할별 권한·충돌 시 보고·파일 저장 별도 확인·생성/종료/취소 대표결정·미확정 표기·Public GitHub 금지·권한 우회 금지·완료보고 항목·이미 읽은 규정 재독 금지) 보강
- `BM_CORE`: 세부 원본으로 역할 변경(필요할 때 해당 장만), 1장 시작 순서 수정, 0장 동기화 의무 명시
- `skills/bm-work`: BM_CORE 매번 읽기 폐지
- 부트스트랩 문장(`AGENT_ONBOARDING` 1장) v3.5로 갱신, ChatGPT·Gemini 지침 교체 완료(대표가 각 AI에 지시해 반영, 10-28)
- 예상 효과(읽는 양): 작업 시작 약 26,000자 → 약 16,500자(조회는 변화 없음 약 7,600자)

## v3.4 — 2026-10-23 · 결정 대표 · 작성 대표 (Claude 기록)
할 일을 READ에서 INDEX `할일` 탭으로 이전, 조회 모드·긴 채팅 알림·토큰 영향 제시. 근거: 긴 채팅에서 "오늘 할 일" 조회에 토큰 과다, 할 일 저장 시 문서 전체(5~7만 자 구조 정보) 로드.
- INDEX: `할일`(원본)·`접속요약`·`열린할일`·`할일_보관` 탭 신설. `프로젝트` 탭 `다음 할 일` 열은 `할일` 탭 기반 자동 수식(직접 쓰기 폐지)
- READ 7개: 3장 할 일 → `할일` 탭 이관(열린 44건, 완료 1건 보관), 3장은 링크 한 줄, 0장 다음 할 일은 탭 안내 문구. 각 LOG 기록. 결정(4장)은 READ 유지(시트는 프로젝트별 필터 읽기가 안 돼 토큰 손해)
- `BM_CORE` 1장 조회 모드(STARTER 0장+접속요약만)·긴 채팅 알림 / 2장 할 일 원본 위치 / 6장 할일 탭 쓰기 규칙·토큰 영향 제시 규칙
- `OPS_PROJECT` 3장 할일 탭 상세(열·ID·권한·보기·정리), `PROJECT_READ_TEMPLATE` 3장, `skills/bm-work`, `SYSTEM_HEALTH_CHECK`, STARTER 0장 동기화
- 공개 저장소 실명 정리: `skills/bm-work` 예시 실명을 홍길동으로
- 예상 효과(읽는 양): 조회 약 13,500자 → 약 5,000자, 할 일 저장 READ 문서 로드(5~7만 자) → 시트 칸 수정(약 2,000자)

## v3.3 — 2026-10-23 · 결정 대표 · 작성 대표 (Claude 기록)
무손실·빠른 처리·최저 토큰 보강. 근거: 실제 작업 중 검색 낭비, 중복 기록, Drive `.md` 수정 불가, 긴 지침 통독, 레거시 혼동.
- `BM_DIGITAL_1.0.md` 1장: 판단 우선순위(무손실 → 빠른 처리 → 최저 토큰), 핵심 한 줄(사실은 한 곳에·문서는 지도에·살아있는 문서는 Google 문서로)
- `BM_CORE.md` 1장: 링크로 열기, Drive 전체 검색 금지(지도에 없을 때만) / 2장: 사실 하나 원본 한 곳, `공통문서` 탭·`_GUIDE` 원본 위치 추가 / 6장: 살아있는 문서는 Google 문서·이름에 `.md` 금지, 역할 접미사, 모든 READ·GUIDE 0장 요약, 레거시·백업 98·99 분리 / 7장: AI 읽기 폴더에 인증파일 금지
- `ops/OPS_PROJECT.md` 3장: INDEX `공통문서` 탭 신설, `주요 진행사항` 열 폐지(READ 0장과 중복), `다음 할 일`은 READ 사본으로 유지 / 6·7장 형식 규칙 연결, 검색은 신규 생성 전에만
- `SYSTEM_HEALTH_CHECK.md`: 지도 등록·단일 원본·`.md`·0장 요약·레거시·인증파일 점검 6항목
- `skills/bm-work`: 공통문서 탭 링크로 열기, 98·99 제외
- Drive: STARTER v3.3 동기화·이름 `.md` 제거, INDEX 공통문서 탭, 홍대 캔버스 SNS 지침 Google 문서 전환(GUIDE·부록), 레거시 브랜드 문서 아카이브, 플랫폼 LOG 신설
- 10-23 점검 절차 구분(대표·시스템관리 요청): `BM_CORE` 1장에 일반 업무 시작과 시스템 점검 순서 분리, `SYSTEM_HEALTH_CHECK` 첫머리에 '최신 버전 항목만 먼저 읽기' 시작 절차, STARTER 0장 동기화 / 템플릿 명명은 현행 규칙(`YYYY_프로젝트명_READ`)과 일치 확인, 폴더명(`YYYY_NNN_`)과의 통일은 대표 결정 대기 / `_ai_read` 폴더 인증파일은 이동 필요 보안 이슈로 유지(내용 미열람)
- 10-23 시스템 점검: INDEX `다음 할 일`을 각 READ 0장 기준으로 재동기화, STARTER의 시스템관리 표현을 `AI`→`도구`로 정리, `skills/bm-work` 접속 화면을 INDEX 우선·소속(운영단위)·담당자 표시 방식으로 보완
- 10-23 인계 점검: BMS-2026-005 `다음 할 일`을 READ 0장 문구와 정확히 동기화, `OPS_PROJECT` 수정권한 표에 `대외명·별칭`을 시스템관리 전용 열로 명시

## v3.2 — 2026-10-22 · 결정 대표 · 작성 대표 (Claude 기록)
프로젝트 ID를 조직별 코드로 전환.
- `ops/OPS_PROJECT.md` 3장: ID `BM-YYYY-NNN`(통합) → `조직코드-YYYY-NNN`(조직별·연도별 001부터, 3자리). 코드 BMS=BM서울, BMI=BM인천, MCH=마포 콘텐츠 허브 센터(위탁 확정 시). 일괄 전환 예외 명시
- `ops/OPS_PROJECT.md` 2장: 폴더명·INDEX 프로젝트명 `YYYY_프로젝트명` → `YYYY_NNN_프로젝트명`(NNN=ID 끝 3자리)
- 기존 ID 대응: BM-2026-001→BMS-2026-001(마포 어르신 한마당) / 002→BMS-2026-002(홍대 크리에이티브 페스타) / 003→BMS-2026-003(인천시 마을공동체 행사, 주관 BM서울) / 004→BMS-2026-004(캠프마켓 AI강의) / 005→BMI-2026-001(양성평등 사업) / 006→BMS-2026-005(온라인초대장 웹서비스) / 007→BMS-2026-006(서울시 공익사업선정위원회 위원추천)
- Drive: INDEX ID·프로젝트명, 각 READ 내 ID, 폴더명 반영, 각 LOG에 변경 기록

## v3.1 — 2026-10-21 · 결정 대표 · 작성 대표 (Claude 기록)
- (점검) 쓰기 권한 없는 AI의 저장 절차(붙여넣기 제시+미완료 보고), '담당 AI'·'AI 직원' 표현 정리, INDEX 담당자=READ 책임자 일치, 접근자 점검 항목 추가
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
