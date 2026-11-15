/** BM 문서목록 v1.0 — 메타데이터 전용, 원본 변경·발송·결재 기능 없음. */
const BM_HEADERS = ['파일ID','문서명','파일형식','원본링크','현재경로','원본수정','관측시각','접근상태','상위폴더ID','업무확정','문서역할','현재본확인','근거'];
function onOpen() {
  SpreadsheetApp.getUi().createMenu('BM 문서관리').addItem('설치·연결 확인','BM_install').addItem('지금 수집','BM_sync').addToUi();
}
function BM_book_() {
  const id = PropertiesService.getScriptProperties().getProperty('BOOK_ID');
  return id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
}
function BM_cfg_(book) {
  const rows = book.getSheetByName('설정').getDataRange().getDisplayValues();
  const cfg = Object.fromEntries(rows.slice(1).map(r => [r[0],r[1]]));
  if (!cfg.DRIVE_ID || !cfg.ROOT_ID || !cfg.EXCLUDE_IDS) throw new Error('설정의 DRIVE_ID / ROOT_ID / EXCLUDE_IDS 확인 필요');
  cfg.excluded = new Set(cfg.EXCLUDE_IDS.split(',').map(s => s.trim()).filter(Boolean));
  cfg.excluded.add(book.getId());
  return cfg;
}
function BM_status_(book, state, detail) {
  book.getSheetByName('실행상태').getRange('A2:C2').setValues([[state,new Date().toISOString(),detail]]);
}
function BM_install() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  if (!book) throw new Error('중앙 문서대장의 확장 프로그램 → Apps Script에서 실행하세요.');
  BM_cfg_(book);
  PropertiesService.getScriptProperties().setProperty('BOOK_ID',book.getId());
  // 실제 API 접근 성공 전에는 설치 완료로 표시하지 않는다.
  Drive.Files.get(book.getId(),{fields:'id',supportsAllDrives:true});
  const own = ScriptApp.getProjectTriggers().filter(t=>t.getHandlerFunction()==='BM_sync');
  if (!own.length) ScriptApp.newTrigger('BM_sync').timeBased().everyMinutes(15).create();
  own.slice(1).forEach(t=>ScriptApp.deleteTrigger(t));
  BM_status_(book,'설치됨·초기 수집 대기','15분 간격. 최초 전체 목록 확인 전에는 전체 수집 완료가 아닙니다.');
  BM_sync();
}
function BM_text_(value) {
  const s = String(value == null ? '' : value);
  return /^[=+@-]/.test(s) ? "'"+s : s;
}
function BM_document_(f) {
  if (f.mimeType==='application/vnd.google-apps.folder') return false;
  return /application\/vnd.google-apps\.(document|spreadsheet|presentation)$/.test(f.mimeType||'') || /\.(pdf|hwp|hwpx|docx?|xlsx?|pptx?|odt|ods|csv|txt)$/i.test(f.name||'');
}
function BM_location_(f,cfg,cache,seen) {
  if (cfg.excluded.has(f.id)) return {exclude:true};
  if (f.id===cfg.ROOT_ID) return {path:'BM'};
  if (cache[f.id]) return cache[f.id];
  seen = seen || new Set();
  if (seen.has(f.id) || seen.size>40) throw new Error('폴더 순환 또는 경로 확인 실패');
  seen.add(f.id);
  const pid=(f.parents||[])[0];
  if (!pid) return {exclude:true};
  const p=cache['meta:'+pid] || Drive.Files.get(pid,{fields:'id,name,parents,trashed',supportsAllDrives:true});
  cache['meta:'+pid]=p;
  if (p.trashed) return {exclude:true};
  const parent=BM_location_(p,cfg,cache,seen);
  const result=parent.exclude ? parent : {path:parent.path+'/'+f.name};
  cache[f.id]=result;
  return result;
}
function BM_upsert_(sheet, rows) {
  if (!rows.length) return;
  const n=sheet.getLastRow();
  const values=n>1 ? sheet.getRange(2,1,n-1,9).getDisplayValues() : [];
  const ids=values.map(r=>r[0]);
  const map=new Map();
  ids.forEach((id,i)=>{ if(id && map.has(id)) throw new Error('문서목록 중복 파일ID — 수정 전 확인 필요'); if(id)map.set(id,i+2); });
  for (const row of rows) {
    let at=map.get(row[0]);
    if (!at) {at=values.length+2;map.set(row[0],at);}
    // J:M은 사람·AI가 근거로 확정하는 영역. 자동수집은 덮어쓰지 않는다.
    values[at-2]=row.map(BM_text_);
  }
  if(values.length+1>sheet.getMaxRows()) sheet.insertRowsAfter(sheet.getMaxRows(),values.length+1-sheet.getMaxRows());
  sheet.getRange(2,1,values.length,9).setValues(values);
  SpreadsheetApp.flush();
  const written=sheet.getRange(2,1,values.length,1).getDisplayValues().flat();
  if(written.some((id,i)=>id!==values[i][0])) throw new Error('파일ID 저장 재조회 실패');
}
function BM_sync() {
  const lock=LockService.getScriptLock();
  if(!lock.tryLock(1000)) return;
  let book;
  try {
    book=BM_book_();
    if(!book) throw new Error('중앙 문서대장 연결 필요');
    const cfg=BM_cfg_(book), sheet=book.getSheetByName('문서목록');
    if(sheet.getRange(1,1,1,13).getDisplayValues()[0].join('|')!==BM_HEADERS.join('|')) throw new Error('문서목록 열 구조 불일치');
    const props=PropertiesService.getScriptProperties();
    let token=props.getProperty('PAGE_TOKEN') || '';
    let started=props.getProperty('SCAN_STARTED');
    if(!started){started=new Date().toISOString();props.setProperty('SCAN_STARTED',started);}
    const deadline=Date.now()+210000,cache={};
    BM_status_(book,'수집 중','전체 목록 순회 시작 '+started+' / 파일ID로 갱신, 삭제·완료 판정 없음');
    do {
      const args={corpora:'drive',driveId:cfg.DRIVE_ID,includeItemsFromAllDrives:true,supportsAllDrives:true,pageSize:100,q:'trashed = false',fields:'nextPageToken,incompleteSearch,files(id,name,mimeType,parents,modifiedTime,webViewLink)'};
      if(token) args.pageToken=token;
      let page;
      try {page=Drive.Files.list(args);} catch(e) {
        // 유효기간이 끝난 페이지는 새 순회로 복구. 접근 실패는 삭제 증거가 아니다.
        if(/page.?token|invalid.*token/i.test(String(e))) {props.deleteProperty('PAGE_TOKEN');props.deleteProperty('SCAN_STARTED');}
        throw e;
      }
      if(page.incompleteSearch) throw new Error('Drive 불완전 검색 응답 — 체크포인트 유지');
      const rows=[];
      for(const f of page.files||[]) {
        if(!BM_document_(f)) continue;
        const location=BM_location_(f,cfg,cache);
        if(location.exclude) {
          // 이전에 포함됐다가 제외 폴더로 이동한 문서는 검색용 제목·경로도 비운다.
          BM_redact_(sheet,f.id);
          continue;
        }
        rows.push([f.id,f.name,f.mimeType,f.webViewLink||'https://drive.google.com/file/d/'+f.id+'/view',location.path,f.modifiedTime||'',new Date().toISOString(),'확인됨',(f.parents||[]).join(',')]);
      }
      BM_upsert_(sheet,rows);
      // 페이지 전체 쓰기와 재조회 이후만 토큰 진전. 실패 후 재실행은 동일 ID 갱신.
      token=page.nextPageToken||'';
      if(token) props.setProperty('PAGE_TOKEN',token);
      else {
        props.deleteProperty('PAGE_TOKEN');props.deleteProperty('SCAN_STARTED');
        props.setProperty('LAST_COMPLETE',new Date().toISOString());
        BM_stale_(sheet,started);
        BM_status_(book,'전체 순회 완료','문서 메타데이터 확인 완료. 누락은 삭제 판정 아님. 다음 순회는 15분 간격.');
      }
    } while(token && Date.now()<deadline);
    if(token) BM_status_(book,'수집 계속 대기','다음 15분 실행에 다음 페이지부터 재개. 전체 완료 전입니다.');
  } catch(e) {
    if(book) BM_status_(book,'오류·확인 필요',String(e.message||e).slice(0,300));
    throw e;
  } finally {lock.releaseLock();}
}
function BM_redact_(sheet,id) {
  if(sheet.getLastRow()<2)return;
  const ids=sheet.getRange(2,1,sheet.getLastRow()-1,1).getDisplayValues().flat();
  const at=ids.indexOf(id)+2;
  if(at<2)return;
  sheet.getRange(at,2,1,8).setValues([['제외 대상','','','','',new Date().toISOString(),'제외 폴더로 이동','']]);
}
function BM_stale_(sheet,started) {
  if(sheet.getLastRow()<2)return;
  const rows=sheet.getRange(2,7,sheet.getLastRow()-1,2).getDisplayValues();
  rows.forEach((r,i)=>{if(r[1]!=='제외 폴더로 이동' && (!r[0]||r[0]<started)) sheet.getRange(i+2,8).setValue('재확인 필요·삭제 단정 금지');});
}

