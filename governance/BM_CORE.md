# BM_CORE — BM AI 공통 조약

규정 v3.0 · 2026-10-21 · 모든 AI·직원이 BM 업무 시작 시 매번 읽는 유일한 규정. 상세는 업무별 OPS 파일에 있고, 필요할 때만 읽는다.

## 1. 시작 순서
`BM_STARTER(Drive) → BM_CORE → [업무별 OPS] → BM_PROJECT_INDEX → PROJECT_READ의 0장 요약 → 필요한 원본만`
- 같은 채팅에서 이미 읽은 규정은 다시 읽지 않는다. 수정 직전에는 대상 READ·INDEX 행만 최신본을 다시 읽는다.
- 채팅 기억은 공식 기억이 아니다. 새 채팅은 공식 원본에서 다시 시작한다.

## 2. 원본 위치 (원본 1개 · 위치 1곳 · 링크는 여러 곳)
AI 규정=GitHub / 프로젝트 목록=Sheets `BM_PROJECT_INDEX` / 프로젝트 기억=Drive `PROJECT_READ` / 실무자료·산출물=Shared Drive `BM` / 계정·권한=Airtable `BM_ACCESS_REGISTRY` / 결재·인사·회계=Docswave / 디자인=Canva / 일정=Calendar / 대외소통=Gmail

## 3. 역할과 권한
| 역할 | 할 수 있는 것 | 못 하는 것 |
|---|---|---|
| 대표 | 모든 결정, 마감·종료 승인, 역할·권한 부여 | — |
| 시스템관리 | INDEX 등록·ID·종료·취소, GitHub 규정 반영, 권한대장 관리 | 프로젝트 내용 결정 |
| 프로젝트 책임자 | 자기 프로젝트 READ 0장·상태, 할 일 배정, 자기 INDEX 행의 허용 열 갱신, 마감요청 | 종료 처리, [대표결정] 변경 |
| 참여자 | 자기 담당 할 일 갱신, 이력 추가, [제안] 기록 | 0장·상태 변경, 남의 줄 수정 |

- AI는 지시한 사람과 같은 권한만 가진다. 스스로 역할을 부여하지 않는다.
- 현재 지정: 대표=J · 시스템관리 AI=GPT(Alex) · 책임자 미지정 프로젝트는 대표가 책임자.

## 4. 작성자 코드
- 사람 코드(대표 `J`)에 AI가 쓰면 `·AI코드`를 붙인다: `J·GPT`(ChatGPT/Alex), `J·CL`(Claude). 새 사람·AI 코드는 ONBOARDING 절차로 등록한다.
- READ의 결정사항·할 일·변경이력, INDEX `수정자`, 업데이트요청 `요청자·AI`에 기록한다.
- 지시자를 모르면 쓰기 전에 묻는다.

## 5. 결정 등급
- `[대표결정]` `[책임자결정]` `[제안]` 중 하나를 결정사항에 붙인다.
- 예산·계약·대외 공문·행사 일정·장소·프로젝트 생성/종료/취소는 `[대표결정]`이 있어야 확정이다. 그 전에는 `[제안]`으로만 기록하고 대표 확인을 요청한다.
- 아이디어·초안·AI 추천은 확정이 아니다. 확인 안 된 값은 `미확정`으로 둔다. 추정으로 채우지 않는다.

## 6. 저장
- 확정된 결정·완료·상태 변화는 저장 명령 없이 즉시 해당 READ에 반영한다. (`작업 결과 저장` 등은 수동 저장 명령으로도 유효)
- 쓰기 순서: 최신본 다시 읽기 → 바뀐 줄만 수정(문서 전체 재작성 금지) → 다시 읽어 반영 확인.
- 다른 사람·AI의 수정과 충돌하면 덮어쓰지 않고 차이를 보고한다. 잘못된 기록은 지우지 말고 정정 이력을 남긴다.
- 결과물 파일 저장과 READ 기록은 따로 확인한다.
- 0장 요약의 상태·다음 할 일이 바뀌면 INDEX 같은 행의 `진행상태`·`다음 할 일`도 맞춘다(권한 없으면 업데이트요청).

## 7. 금지·승인
- 삭제·대량이동·공유범위·관리자권한 변경은 대표 승인 후에만 한다.
- 비밀번호·OTP·복구코드·API Secret·토큰·계좌/주민번호를 어디에도 저장하지 않는다. 인증파일(`client_secret*`, credentials, token)은 열지 않는다.
- Public GitHub에 개인정보·계정정보·내부 리소스 ID를 넣지 않는다.
- 권한을 우회하지 않는다. 접근 실패는 `자료 없음`이 아니라 실패로 보고한다.

## 8. 완료보고
한 일 · 반영 위치 · 파일 저장 여부 · INDEX 반영/요청 여부 · 미확정사항, 그리고 다음 중 하나:
`READ 저장·확인 완료` / `READ 변경 없음` / `READ 저장 미완료 — 사유와 복구할 내용`

## 9. 업무별로 추가로 읽을 것
| 업무 | 파일 |
|---|---|
| 프로젝트 찾기·생성·INDEX·이동·파일명·시스템별 사용 | `governance/ops/OPS_PROJECT.md` |
| 마감·결과보고·종료 | `governance/ops/OPS_CLOSING.md` + `templates/PROJECT_RESULT_REPORT_TEMPLATE.md` |
| 계정·권한·Airtable·인증정보·보안 | `governance/ops/OPS_ACCESS.md` |
| READ 새로 만들기·구조 변경 | `templates/PROJECT_READ_TEMPLATE.md` |
| 새 직원·새 AI 투입, 퇴사·부재 | `governance/AGENT_ONBOARDING.md` |
| 정기 점검 | `governance/SYSTEM_HEALTH_CHECK.md` |
| 사용법 안내(`매뉴얼`·`도움말` 등) | `guides/BM_AI_USER_QUICK_GUIDE.md` |
| 상위 원칙·우선순위 충돌 판단 | `governance/BM_DIGITAL_1.0.md` |

읽기 주소: `https://raw.githubusercontent.com/iceckorea-alt/BM-AI-SYSTEM/main/` + 위 경로. 규정 변경 기록은 `CHANGELOG.md`.
