import { rooms, labels, filterRooms, getRoom, summarize } from './model.mjs';
const $ = id => document.getElementById(id);
const counts = summarize(rooms);
let chapter = 0;
let selected = '102';
const colors = {ready:{floor:'#dce8df',side:'#bad0c2',dot:'#307b67'},pending:{floor:'#f0e8d5',side:'#d1c4a3',dot:'#9b701c'},issue:{floor:'#eedbd5',side:'#d5b5aa',dot:'#ac493e'}};
const chapters = [
 {title:'Arrivals & assignments', instruction:'Select a room to see who is assigned and when its group arrives.', narrative:'The arrival schedule told us when a room needed to be ready, I used that to assign inspections, and then checked whether the work had been finished and reported properly.',next:'Next: inspections'},
 {title:'Inspection results', instruction:'The two highlighted rooms need attention. Select one to see the reported issue.', narrative:'The responses were there in the forms, but we needed to see which rooms still had problems, and whether a work order had been filed. These two sample rooms give you an idea of what we were looking at.',next:'Next: key handoffs'},
 {title:'The key handoff', instruction:'The dashboard describes how I investigated a missing key and what we changed afterward.', narrative:'I went looking for a key and ended up looking at the instructions, which turned out to be part of the problem. We changed how keys were handed over between shifts, though we never recovered that one.',next:'Back to the shift'}
];
function person(x,y,color='#416674') {return `<g class="person" transform="translate(${x} ${y})" aria-hidden="true"><ellipse cy="12" rx="7" ry="3" fill="#829d9850"/><path d="M-3 5l-1 7m7-7 1 7" stroke="#314852" stroke-width="2"/><path d="M-5-4Q0-8 5-4L4 6h-8Z" fill="${color}"/><circle cy="-10" r="4" fill="#bd9c80"/></g>`;}
function tree(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})" aria-hidden="true"><ellipse cy="20" rx="22" ry="9" fill="#9aafa43d"/><path d="M0 6v15" stroke="#8f9586" stroke-width="5"/><ellipse cy="-6" rx="19" ry="24" fill="#a7bdb0"/><path d="M0-28Q-24-8 0 16" fill="#94af9e"/></g>`;}
function drawScene(){
 const roomShapes=rooms.map((room,i)=>{
 const col=i%4,row=Math.floor(i/4),x=330+(col-row)*91,y=87+(col+row)*44;
 const c=colors[room.status];
 return `<g class="room-target" data-room="${room.id}" tabindex="0" role="button" aria-label="Room ${room.id}, ${labels[room.status]}, ${room.inspector}" aria-pressed="false" transform="translate(${x} ${y})">
 <title>Room ${room.id}, ${labels[room.status]}</title>
 <path d="M0 0L87 42 0 84-87 42Z" fill="${c.floor}" class="room-floor" stroke="#c0c9c2"/>
 <path d="M-87 42L0 84v17l-87-42Z" fill="${c.side}" stroke="#afc0b7" stroke-width=".5"/><path d="M0 84l87-42v17L0 101Z" fill="#b0c2ba" stroke="#a2b7ad" stroke-width=".5"/>
 <path d="M-84 40V8L0-32v32Z" fill="#f6f5ec" stroke="#b8c5c0" stroke-width=".7"/><path d="M0-32L84 8v32L0 0Z" fill="#d7dfd8" stroke="#b8c5c0" stroke-width=".7"/>
 <path d="M-84 8L0-32 84 8 79 10 0-27-79 11Z" fill="#fffef7"/>
 <path d="M12-16l20 10v20L12 4Z M42-2l20 10v19L42 17Z" fill="#a9c3c6" stroke="#f6f7ef" stroke-width="2"/>
 <g transform="matrix(.86 .42 -.86 .42 -29 26)" aria-hidden="true"><rect x="-24" y="-17" width="34" height="54" rx="2" fill="#f6f5eb" stroke="#aab8b2"/><rect x="-20" y="-13" width="26" height="13" rx="2" fill="white"/><path d="M-23 4h32v31h-32Z" fill="#c3d2ce"/><rect x="23" y="-19" width="25" height="22" rx="1" fill="#c1b79f"/><rect x="27" y="-15" width="17" height="9" fill="#e7e3d6"/></g>
 <circle cx="28" cy="52" r="7" fill="${c.dot}" stroke="white" stroke-width="2"/><text x="-5" y="71" text-anchor="middle" font-size="11" fill="#43585a" font-family="inherit">${room.id}</text>
 <path class="selection-outline" d="M0-34L89 9v52L0 104-89 61V9Z" fill="none" stroke="#214f68" stroke-width="3" stroke-linejoin="round"/>
 </g>`;
 }).join('');
 $('scene').innerHTML=`<title>A fictional summer housing shift</title><desc>Twelve sample rooms. Green is ready, amber is to inspect, red needs attention. A room selector is also available in the dashboard.</desc>
 <defs><filter id="model-shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="#4c706a" flood-opacity=".14"/></filter></defs>
 <g aria-hidden="true"><path d="M330 29L723 218 401 418 38 235Z" fill="#a0b7b052" transform="translate(4 23)"/><path d="M330 12L740 211 405 409 26 226Z" fill="#d6e1d8" stroke="#b9cbbf" filter="url(#model-shadow)"/><path d="M26 226v13l379 183v-13Z" fill="#b6c9bc"/><path d="M405 409l335-198v13L405 422Z" fill="#aabfb2"/>
 <path d="M73 235l330 159 277-167-23-11-254 153L97 223Z" fill="#f4f3e8"/><path d="M174 290l-59 35 25 12 58-35Z" fill="#f4f3e8"/>
 <path d="M161 205L524 379" fill="none" stroke="#d6cfba" stroke-width="12"/>
 </g>
 ${tree(125,194,.8)}${tree(675,209,.85)}${tree(618,287,.55)}
 <g id="room-model">${roomShapes}</g>
 <g aria-hidden="true"><path d="M163 261l331 160" stroke="#90a4a7" stroke-width="1" stroke-dasharray="3 4"/><text x="350" y="423" class="svg-label" transform="rotate(26 350 423)">INSPECTION ROUTE</text>
 <path d="M538 380l-18 34 44 23" stroke="#90a4a7" stroke-width="1" stroke-dasharray="3 4" fill="none"/>
 </g>
 <g id="keyroom-building" transform="translate(568 377)" aria-hidden="true"><ellipse class="office-focus" cy="10" rx="99" ry="55" fill="none" stroke="#b75430" stroke-width="2" stroke-dasharray="5 4"/><path d="M0-28l70 34-70 34-70-34Z" fill="#f6f3e8"/><path d="M-70 6L0 40v43l-70-34Z" fill="#c5d1ca"/><path d="M0 40L70 6v43L0 83Z" fill="#9fb6b3"/><path d="M-70 6v-27L0-55v27Z" fill="#f9f7ef"/><path d="M0-55l70 34V6L0-28Z" fill="#d6dfd6"/><path d="M-16 54l-18-9v26l18 9Z" fill="#365868"/><path d="M15 42l18-9v20l-18 9ZM42 29l15-7v20l-15 7Z" fill="#dae7e1"/><path d="M-28-5l39 19-18 9-39-19Z" fill="#bfae94"/><text x="10" y="104" text-anchor="middle" class="svg-label">KEYROOM</text></g>
 ${person(255,325)}${person(387,389)}${person(477,343)}${person(180,283)}${person(545,457,'#b77554')}${person(580,439,'#b77554')}
 <g aria-hidden="true"><text x="94" y="366" class="svg-label">GROUP ARRIVALS</text><path d="M130 342l24-14m-11 0h11v10" stroke="#52666d" fill="none"/></g>`;
 $('scene').querySelectorAll('[data-room]').forEach(el=>{
 el.addEventListener('click',()=>selectRoom(el.dataset.room));
 el.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();selectRoom(el.dataset.room);}});
 });
}
function selectRoom(id,announce=true){
 const room=getRoom(id); if(!room)return;
 selected=id; $('room-select').value=id;
 $('room-title').textContent=`Room ${room.id}`;
 $('room-status').textContent=labels[room.status]; $('room-status').className=`status ${room.status}`;
 $('room-inspector').textContent=room.inspector; $('room-arrival').textContent=`${room.group} · ${room.arrival}`;
 $('room-type').textContent=room.type; $('room-note').textContent=room.note;
 $('scene').querySelectorAll('[data-room]').forEach(el=>{const isSelected=el.dataset.room===id;el.classList.toggle('selected',isSelected);el.setAttribute('aria-pressed',String(isSelected));});
 if(announce)$('status-announcement').textContent=`Room ${room.id}. ${labels[room.status]}. ${room.inspector}. ${room.note}`;
}
function applyFilter(){
 const matches=filterRooms($('status-filter').value);
 $('room-select').replaceChildren(...matches.map(room=>new Option(`${room.id} · ${labels[room.status]}`,room.id)));
 $('scene').querySelectorAll('[data-room]').forEach(el=>{const visible=matches.some(room=>room.id===el.dataset.room);el.classList.toggle('filtered',!visible);el.setAttribute('tabindex',visible&&chapter!==2?'0':'-1');el.setAttribute('aria-disabled',String(!visible||chapter===2));});
 if(!matches.some(room=>room.id===selected))selected=matches[0]?.id;
 selectRoom(selected,false);
}
function setChapter(index){
 chapter=index; const data=chapters[index];
 document.querySelectorAll('[data-chapter]').forEach(button=>{const active=Number(button.dataset.chapter)===index;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
 $('dashboard-title').textContent=data.title;$('model-instruction').textContent=data.instruction;$('chapter-narrative').textContent=data.narrative;
 $('note-number').textContent='My work';$('next-label').textContent=data.next;
 $('inspection-view').hidden=index===2;$('key-view').hidden=index!==2;$('arrivals').hidden=index===1;
 $('scene').classList.toggle('key-mode',index===2);
 $('status-filter').value=index===1?'issue':'all';applyFilter();
 $('dashboard-footnote').textContent=index===1?'Sample totals: 12 rooms, including 2 reported maintenance issues.':'This sample shift has 4 inspectors and 2 keyroom helpers.';
 $('status-announcement').textContent=`${data.title}. ${data.instruction}`;
}
drawScene();
$('ready-count').textContent=counts.ready;$('pending-count').textContent=counts.pending;$('issue-count').textContent=counts.issue;
$('status-filter').addEventListener('change',()=>{applyFilter();$('status-announcement').textContent=`${filterRooms($('status-filter').value).length} sample rooms shown.`;});
$('room-select').addEventListener('change',event=>selectRoom(event.target.value));
document.querySelectorAll('[data-chapter]').forEach(button=>button.addEventListener('click',()=>setChapter(Number(button.dataset.chapter))));
$('next-chapter').addEventListener('click',()=>setChapter((chapter+1)%3));
applyFilter();
