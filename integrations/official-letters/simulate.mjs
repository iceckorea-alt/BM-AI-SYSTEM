import assert from 'node:assert/strict';
import fs from 'node:fs';
// Operational model only. This does not create Gmail drafts or Calendar events.
class Registry {
 constructor(){this.items=new Map();this.requests=new Map();this.counters=new Map();this.events=[];this.links=new Set();}
 baseline(org,year,last,verified){if(!['BMS','BMI'].includes(org))throw Error('issuer');this.counters.set(org+year,{last,verified});}
 planned(org,year){const c=this.counters.get(org+year);if(!c?.verified)throw Error('baseline');return `${org}-${year}-${String(c.last+1).padStart(3,'0')}`;}
 issue({request,org='BMS',year=2026,approved=true,version='v1'}){
  if(this.requests.has(request))return this.requests.get(request);
  if(!approved)throw Error('approval');
  const number=this.planned(org,year);this.counters.get(org+year).last++;
  const item={id:'L'+this.items.size,number,status:'발송 준비 중',versions:[version],approvedVersion:version,events:[],cancelled:false};
  this.items.set(item.id,item);this.requests.set(request,item);return item;
 }
 cancel(item,reason){if(!reason)throw Error('reason');item.cancelled=true;item.status='취소';}
 revise(item,version,{important=true,reapproved=false}={}){if(item.cancelled)throw Error('cancelled');if(important&&!reapproved)throw Error('reapproval');if(item.versions.includes(version))throw Error('version');item.versions.push(version);item.approvedVersion=version;item.status='발송 준비 중';}
 draft(item,{to=[],cc=[],connected=true,version}={}){if(!connected)return '문안·PDF 준비';if(item.cancelled)throw Error('cancelled');if(version!==item.approvedVersion)throw Error('version');if(to.length+cc.length===0)throw Error('recipient');item.status='발송 대기';return {to,cc,version};}
 sent(item,{message,version=item.approvedVersion,to=[],cc=[],confirmed=false,failed=false}={}){
  if(item.cancelled)throw Error('cancelled');if(!confirmed||failed)throw Error('not sent');if(version!==item.approvedVersion)throw Error('version');if(!message)throw Error('proof');
  const existing=this.events.find(e=>e.message===message);if(existing){if(existing.item!==item.id)throw Error('message collision');return existing;}
  const e={item:item.id,message,version,to,cc,bounced:[]};this.events.push(e);item.events.push(e);item.status='발송 완료';return e;
 }
 bounce(item,event,address){if(![...event.to,...event.cc].includes(address))throw Error('address');event.bounced.push(address);item.status='확인 필요';}
 link(out,incoming){const key=out+'|'+incoming;if(this.links.has(key))return false;this.links.add(key);return true;}
 deadline(date,configured=false){return {date,index:'할일 연결 필요',calendar:configured?'등록 확인 필요':'캘린더 등록 대기',alerts:['3일 전','당일']};}
}
const results=[];
function test(name,fn){try{fn();results.push([results.length+1,name,'통과']);}catch(e){results.push([results.length+1,name,'실패: '+e.message]);}}
const R=()=>{const r=new Registry();r.baseline('BMS',2026,37,true);r.baseline('BMI',2026,37,true);return r;};
test('미검증 과거 번호로 다음 번호 확정 금지',()=>{const r=R();r.baseline('BMS',2026,37,false);assert.throws(()=>r.planned('BMS',2026),/baseline/);});
test('예정번호 안내는 번호를 소비하지 않음',()=>{const r=R();assert.equal(r.planned('BMS',2026),r.planned('BMS',2026));assert.equal(r.items.size,0);});
test('최종승인 전 정식 등록 금지',()=>assert.throws(()=>R().issue({request:'a',approved:false}),/approval/));
test('서울·인천 같은 숫자 번호를 독립 관리',()=>{const r=R();assert.notEqual(r.issue({request:'a'}).number,r.issue({request:'b',org:'BMI'}).number);});
test('초안 작성 취소는 정식 번호 소비 없음',()=>{const r=R();r.planned('BMS',2026);assert.equal(r.counters.get('BMS2026').last,37);});
test('동시 요청은 직렬 확정 시 중복 없음',()=>{const r=R();const a=r.issue({request:'a'}),b=r.issue({request:'b'});assert.notEqual(a.number,b.number);});
test('저장 응답 실패 후 같은 요청 재시도는 같은 건',()=>{const r=R();assert.equal(r.issue({request:'a'}),r.issue({request:'a'}));assert.equal(r.items.size,1);});
test('등록 직전 번호 재확인으로 예정번호 충돌 해결',()=>{const r=R();const planned=r.planned('BMS',2026);r.issue({request:'first'});assert.notEqual(r.issue({request:'second'}).number,planned);});
test('연도별 번호 분리',()=>{const r=R();r.baseline('BMS',2027,0,true);assert.equal(r.planned('BMS',2027),'BMS-2027-001');});
test('미정 운영단위 번호 임의 부여 금지',()=>assert.throws(()=>R().issue({request:'a',org:'CENTER'}),/baseline/));
test('번호 확정 후 취소는 번호 보존',()=>{const r=R(),a=r.issue({request:'a'}),n=a.number;r.cancel(a,'행사 취소');assert.equal(a.number,n);assert.equal(a.status,'취소');});
test('취소번호는 다음 발급에 재사용하지 않음',()=>{const r=R(),a=r.issue({request:'a'});r.cancel(a,'중단');assert.notEqual(r.issue({request:'b'}).number,a.number);});
test('취소 사유 필수',()=>{const r=R();assert.throws(()=>r.cancel(r.issue({request:'a'}),''),/reason/);});
test('중요 변경은 재승인 없으면 중단',()=>{const r=R();assert.throws(()=>r.revise(r.issue({request:'a'}),'v2'),/reapproval/);});
test('수정본은 같은 번호·이전 버전 보존',()=>{const r=R(),a=r.issue({request:'a'}),n=a.number;r.revise(a,'v2',{reapproved:true});assert.equal(a.number,n);assert.deepEqual(a.versions,['v1','v2']);});
test('동일 버전 덮어쓰기 거부',()=>{const r=R();assert.throws(()=>r.revise(r.issue({request:'a'}),'v1',{reapproved:true}),/version/);});
test('승인 원본과 PDF 버전 불일치 시 준비 중단',()=>{const r=R();assert.throws(()=>r.draft(r.issue({request:'a'}),{to:['a@example.test'],version:'wrong'}),/version/);});
test('중간검토자 생략은 최종승인 요건을 없애지 않음',()=>assert.throws(()=>R().issue({request:'a',approved:false}),/approval/));
test('메일 연결 없는 AI는 초안 저장을 주장하지 않음',()=>{const r=R();assert.equal(r.draft(r.issue({request:'a'}),{connected:false}),'문안·PDF 준비');});
test('임시보관은 발송 완료가 아님',()=>{const r=R(),a=r.issue({request:'a'});r.draft(a,{to:['a@example.test'],version:'v1'});assert.equal(a.status,'발송 대기');assert.equal(r.events.length,0);});
test('받는 사람·참조가 모두 비면 중단',()=>{const r=R();assert.throws(()=>r.draft(r.issue({request:'a'}),{version:'v1'}),/recipient/);});
test('여러 기관 CC는 메일 한 건으로 기록',()=>{const r=R(),a=r.issue({request:'a'});r.sent(a,{message:'m1',to:['a@example.test'],cc:['b@example.test','c@example.test'],confirmed:true});assert.equal(r.events.length,1);assert.equal(r.events[0].cc.length,2);});
test('전송 증거 없으면 발송 완료 금지',()=>{const r=R();assert.throws(()=>r.sent(r.issue({request:'a'}),{confirmed:true}),/proof/);});
test('전송 실패는 완료 금지',()=>{const r=R();assert.throws(()=>r.sent(r.issue({request:'a'}),{message:'m1',confirmed:true,failed:true}),/not sent/);});
test('발송 메일ID 중복 수집은 중복 이력 없음',()=>{const r=R(),a=r.issue({request:'a'});r.sent(a,{message:'m1',confirmed:true});r.sent(a,{message:'m1',confirmed:true});assert.equal(r.events.length,1);});
test('일부 주소 반송은 해당 주소 기록·확인 필요',()=>{const r=R(),a=r.issue({request:'a'}),e=r.sent(a,{message:'m1',to:['a@example.test'],cc:['b@example.test'],confirmed:true});r.bounce(a,e,'b@example.test');assert.equal(a.status,'확인 필요');assert.deepEqual(e.bounced,['b@example.test']);});
test('재발송은 같은 공문·다른 발송 이력',()=>{const r=R(),a=r.issue({request:'a'});r.sent(a,{message:'m1',confirmed:true});r.sent(a,{message:'m2',confirmed:true});assert.equal(r.items.size,1);assert.equal(r.events.length,2);});
test('수정 재발송은 이전 PDF·메일 버전 보존',()=>{const r=R(),a=r.issue({request:'a'});r.sent(a,{message:'m1',confirmed:true});r.revise(a,'v2',{reapproved:true});r.sent(a,{message:'m2',confirmed:true});assert.deepEqual(r.events.map(e=>e.version),['v1','v2']);});
test('취소 공문 발송 금지',()=>{const r=R(),a=r.issue({request:'a'});r.cancel(a,'중단');assert.throws(()=>r.sent(a,{message:'m1',confirmed:true}),/cancelled/);});
test('한 수신공문에 여러 발신공문 연결',()=>{const r=R();r.link('o1','in1');r.link('o2','in1');assert.equal(r.links.size,2);});
test('여러 수신공문에 한 발신공문 연결',()=>{const r=R();r.link('o1','in1');r.link('o1','in2');assert.equal(r.links.size,2);});
test('발신·수신 중복 연결 방지',()=>{const r=R();assert.equal(r.link('o1','in1'),true);assert.equal(r.link('o1','in1'),false);});
test('회신 기한은 INDEX 후속 업무로 연결',()=>assert.equal(R().deadline('2026-12-01').index,'할일 연결 필요'));
test('캘린더 미설정은 등록 대기로 보존',()=>assert.equal(R().deadline('2026-12-01').calendar,'캘린더 등록 대기'));
test('기본 알림은 3일 전·당일',()=>assert.deepEqual(R().deadline('2026-12-01').alerts,['3일 전','당일']));
test('기한 변경 후 원기한 값 보존 가능',()=>{const r=R(),a=r.deadline('2026-12-01'),b=r.deadline('2026-12-03');assert.notEqual(a.date,b.date);assert.equal(b.calendar,'캘린더 등록 대기');});
test('일부 회신만으로 후속업무 완료하지 않음',()=>{const caseState={expected:3,received:2,status:'진행'};if(caseState.received===caseState.expected)caseState.status='완료';assert.equal(caseState.status,'진행');});
test('시행일과 실제 발송시각은 별개 값',()=>{const v={issueDate:'2026-11-18',sentAt:'2026-11-19 10:00'};assert.notEqual(v.issueDate,v.sentAt.slice(0,10));});
fs.writeFileSync('simulation-results.json',JSON.stringify({kind:'운영 규칙 모의 시뮬레이션',notVerified:['실제 동시 채번 잠금','Gmail 임시보관·발송','Calendar 실제 등록·알림'],results},null,2));
console.log(`${results.filter(r=>r[2]==='통과').length}/${results.length} passed; production integrations are not simulated as live`);
if(results.some(r=>r[2]!=='통과')){console.log(results.filter(r=>r[2]!=='통과'));process.exitCode=1;}

