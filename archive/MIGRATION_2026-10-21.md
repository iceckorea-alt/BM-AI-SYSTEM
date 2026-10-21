# MIGRATION 2026-10-21 — BM 규정 v3.0 개편 기록

평소 읽지 않는다. 옛 규칙이 어디로 갔는지, 왜 바뀌었는지 확인할 때만 읽는다.

- 결정: J (대표) · 작성·반영: J·CL (Claude) · 일시: 2026-10-21 21~22시 KST
- 근거: 대표와 Claude의 2026-10-21 채팅. 채팅 결정은 이 문서와 CHANGELOG에 옮겨야 효력이 생긴다는 원칙에 따라 아래에 전부 기록한다.

## 1. 개편 목적
1. 토큰 절약·경량화: 새 채팅마다 DIGITAL+AGENTS(+ONBOARDING) 장문(약 3만~3.6만 자)을 읽던 구조를 1쪽 BM_CORE(약 5천 자) + 업무별 필요 파일로 바꾼다.
2. 다수 직원·다수 AI 전제: 현재는 대표 1인과 AI 2개(ChatGPT=Alex, Claude)지만 직원 입사 예정. 누가 결정하고 누가 기록했는지 남기고, 역할별 권한을 나눈다.
3. 중복 제거: 같은 규칙(마감 절차 7곳, 시작 순서 6곳, 저장 표기·인증파일 4~5곳)을 한 곳으로 모은다.
4. 모든 변경은 기록한다. 규칙(CORE·OPS)과 기록(CHANGELOG·MIGRATION)은 분리한다.

## 2. 이번에 확정된 결정 (J)
| 결정 | 내용 |
|---|---|
| 일괄 개편 | 나눠서 하지 않고 한 번에 바꾼다. 입구는 Drive `BM_STARTER` 그대로 |
| 실행 주체 | 이번 개편만 Claude가 GitHub·READ·INDEX까지 전부 처리. 이후 INDEX `프로젝트` 탭·GitHub 반영은 시스템관리 AI(GPT/Alex) |
| GitHub 반영 | Claude가 직접 반영 |
| READ 백업 | 루트 `99_시스템백업/READ_백업_20261021`에 5개 사본 |
| AI 정체 | Alex = ChatGPT(시스템관리 AI 역할 수행), 코드 `GPT`. Claude 코드 `CL`. 대표 코드 `J` |
| 계정 | `info@`는 메일 전용 계정. 직원은 입사 시 개인 업무 계정 사용 |
| 기록 원칙 | 모든 변경은 기록. STARTER에는 현재 버전 한 줄만, 상세는 CHANGELOG·MIGRATION |
| 일괄 승인에 포함된 제안 | 역할 4단계(대표·시스템관리·책임자·참여자), 결정 등급, 작성자 코드, 책임자의 INDEX 허용 열 직접 수정, READ v2.0, 업무별 분할 로딩 |
| 미결 | 공용 캘린더 운영 방식(직원 입사 시 결정), 직원 코드 부여 |

## 3. 파일 대응표 (옛 위치 → 새 위치)
| 옛 위치 | 새 위치 |
|---|---|
| AGENTS §1 상위기준 | DIGITAL §8, CORE 머리말 |
| AGENTS §2·§13 시작 절차 | CORE §1 |
| AGENTS §3 찾기·중복검사 | OPS_PROJECT §1 |
| AGENTS §4 사실확인 | CORE §5, OPS_PROJECT §2 |
| AGENTS §5 생성·배치 | OPS_PROJECT §2 |
| AGENTS §6 READ 운영 | CORE §6, OPS_PROJECT §4 |
| AGENTS §7 INDEX | OPS_PROJECT §3 (열별 권한 신설) |
| AGENTS §8 시스템별 실행 | OPS_PROJECT §7 / Airtable·Docswave 인사 → OPS_ACCESS §1~3 / GitHub → DIGITAL §8, OPS_ACCESS §6 |
| AGENTS §9 인증정보 | OPS_ACCESS §4 |
| AGENTS §10 파일명 | OPS_PROJECT §6 |
| AGENTS §11 이동·삭제 | OPS_PROJECT §5 |
| AGENTS §12 보안 | CORE §7, OPS_ACCESS |
| AGENTS §14 마감 | OPS_CLOSING |
| AGENTS §15 접근 실패 | OPS_ACCESS §5 |
| AGENTS §16 완료보고 | CORE §8 |
| DIGITAL §4 정보흐름 / §4-1 마감 | DIGITAL §3 / OPS_CLOSING |
| ONBOARDING §4 접속 문구 / §5 저장·마감 / §8 접근권한 / §9 인증 / §10 플러그인 상태 | ONBOARDING §5 / CORE §6·OPS_CLOSING / OPS_ACCESS §2 / OPS_ACCESS §4 / ONBOARDING §1(설치 상태로 갱신) |
| HEALTH_CHECK §11 핵심 ID | 삭제(공개 저장소). ID는 Drive `BM_STARTER`에만 |
| 결과보고 템플릿 'AI 마감 작성 절차', 공통 DOCX 링크 | OPS_CLOSING §2 / 삭제(경로만 유지) |
| 각 문서 개별 변경이력 | CHANGELOG.md |
| governance/AUDIT_2026-10-10.md | archive/AUDIT_2026-10-10.md (과거 기록 표시) |
| BM_AI_AGENTS_.md 본문 | 분할 안내만 남김(기존 INDEX·READ 링크 보존) |

## 4. 새로 생긴 규칙
- 작성자 코드: 사람 코드 + `·AI코드` (`J`, `J·CL`, `J·GPT`). 결정 주체와 기록자를 구분
- 결정 등급: `[대표결정]` `[책임자결정]` `[제안]`, v2.0 전환 시 주체 미기재 과거 결정은 `[이관]`
- `[대표결정]` 필수 항목: 예산·계약·대외 공문·행사 일정·장소·프로젝트 생성/종료/취소
- 자동 저장 기본화(저장 명령 불필요), 바뀐 줄만 수정, 문서 전체 재작성 금지(구조 개편 같은 승인된 작업 제외)
- INDEX `다음 할 일` 열 신설, 책임자(및 지시 AI)의 허용 열 직접 수정
- 모든 AI 설정에 STARTER 부트스트랩 지시 필수, 콜드스타트 테스트 후 투입
- Public GitHub에 내부 리소스 ID 금지

## 5. Drive·Sheets 작업 결과
- READ 5개 백업: `99_시스템백업/READ_백업_20261021/20261021_백업_*` (원본 사본, 각 READ 7장 이력에 링크)
- READ 5개 v2.0 전환(같은 문서·같은 링크 유지). 본문 분량 약 36,300 → 22,000 단위(약 40% 감소), 평소에는 0장 요약만 읽음
  - BM-2026-001 마포: 행사 상세는 9장 부록으로 이동
  - BM-2026-002 홍대: 작성자 미기재 과거 결정 `[이관]`
  - BM-2026-003 인천: 15~21절 시점별 기록을 장별로 통합
  - BM-2026-004 캠프마켓: 강의 전 준비 할 일을 실적 확인 항목으로 통합
  - BM-2026-005 양성평등
- INDEX `프로젝트` 탭: R열 `다음 할 일` 신설, 5개 행 주요 진행사항·수정일·수정자(J·CL)·행 버전 갱신, BM-2026-003 대외명 기입. `업데이트요청` 탭에 처리 기록 1행(REQ-20261021-규정v3전환)
- STARTER: raw 주소·CORE 경유·현재 규정 버전 한 줄로 갱신(맨 마지막에 전환)

## 6. 확인이 남은 것
- `[이관]` 결정들을 대표가 확인하면 `[대표결정]`으로 변경
- 각 READ의 '문성준' 표기와 대표 코드 J의 관계 확인(작성자 코드 등록 시)
- Claude 플러그인 `비엠업무` 설치본을 v3.0 본문으로 교체(`skills/bm-work/SKILL.md` 기준)
- ChatGPT(Alex) 지침에 부트스트랩 문장과 코드 `J·GPT` 반영
- 공용 캘린더 운영 방식, 직원 코드
