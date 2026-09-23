/* CHẤP TẤT — MVP
 * Local 2-player, GitHub Pages friendly, 4 decks.
 * chess.js handles standard chess legality; special cards modify/setup state at controlled points.
 */

const Chess = window.Chess;

const ICONS = { handicap:'⚖️', opening:'♟️', midgame:'⚡', lastChance:'👑' };
const RARITY = { common:'COMMON', rare:'RARE', epic:'EPIC', legendary:'LEGENDARY' };

const handicapCards = [
 {id:'h01',name:'CHẤP 1 TỐT',rarity:'common',icon:'♟️',desc:'Bỏ 1 tốt bất kỳ trước khi bắt đầu.'},
 {id:'h02',name:'CHẤP 2 TỐT',rarity:'common',icon:'♟️',desc:'Bỏ 2 tốt bất kỳ.'},
 {id:'h03',name:'CHẤP 3 TỐT',rarity:'common',icon:'♟️',desc:'Bỏ 3 tốt bất kỳ.'},
 {id:'h04',name:'CHẤP TỐT E',rarity:'common',icon:'♟️',desc:'Bỏ tốt e.'},
 {id:'h05',name:'CHẤP TỐT D',rarity:'common',icon:'♟️',desc:'Bỏ tốt d.'},
 {id:'h06',name:'CHẤP TỐT CÁNH VUA',rarity:'common',icon:'♟️',desc:'Bỏ 1 trong các tốt f/g/h.'},
 {id:'h07',name:'CHẤP TỐT CÁNH HẬU',rarity:'common',icon:'♟️',desc:'Bỏ 1 trong các tốt a/b/c.'},
 {id:'h08',name:'CHẤP 1 MÃ',rarity:'rare',icon:'🐎',desc:'Bỏ một mã.'},
 {id:'h09',name:'CHẤP 1 TƯỢNG',rarity:'rare',icon:'⛪',desc:'Bỏ một tượng.'},
 {id:'h10',name:'CHẤP MÃ + TỐT',rarity:'rare',icon:'🐎♟️',desc:'Bỏ 1 mã + 1 tốt.'},
 {id:'h11',name:'CHẤP 1 XE',rarity:'epic',icon:'🏰',desc:'Bỏ 1 xe.'},
 {id:'h12',name:'CHẤP XE + TỐT',rarity:'epic',icon:'🏰♟️',desc:'Bỏ 1 xe + 1 tốt.'},
 {id:'h13',name:'CHẤP SONG MÃ',rarity:'rare',icon:'🐎🐎',desc:'Bỏ cả 2 mã.'},
 {id:'h14',name:'CHẤP SONG TƯỢNG',rarity:'rare',icon:'⛪⛪',desc:'Bỏ cả 2 tượng.'},
 {id:'h15',name:'CHẤP SONG XE',rarity:'epic',icon:'🏰🏰',desc:'Bỏ cả 2 xe.'},
 {id:'h16',name:'CHẤP 3 QUÂN NHẸ',rarity:'epic',icon:'🐎⛪♟️',desc:'Bỏ 1 mã + 1 tượng + 1 tốt.'},
 {id:'h17',name:'CHẤP XE + MÃ',rarity:'epic',icon:'🏰🐎',desc:'Bỏ 1 xe + 1 mã.'},
 {id:'h18',name:'CHẤP XE + TƯỢNG',rarity:'epic',icon:'🏰⛪',desc:'Bỏ 1 xe + 1 tượng.'},
 {id:'h19',name:'CHẤP HẬU',rarity:'legendary',icon:'👑',desc:'Bỏ hậu.'},
 {id:'h20',name:'CHẤP HẬU + TỐT',rarity:'legendary',icon:'👑♟️',desc:'Bỏ hậu + 1 tốt bất kỳ.'}
];

const openingCards = [
 {id:'o01',name:'CẤM Ô',rarity:'common',icon:'🚫',desc:'Đối phương chọn 1 ô; ô đó không được quân của họ đi vào trong 3 nước đầu.'},
 {id:'o02',name:'ĐẢO HẬU',rarity:'legendary',icon:'👑',desc:'Hậu của đối phương được chuyển sang e5/e4 trong setup nếu vị trí an toàn.'},
 {id:'o03',name:'KHÓA TỐT',rarity:'common',icon:'♟️',desc:'Chọn 1 tốt đối phương; không được di chuyển trong 2 lượt đầu.'},
 {id:'o04',name:'KHÓA MÃ',rarity:'common',icon:'🐎',desc:'Một mã không được di chuyển trong 3 lượt đầu.'},
 {id:'o05',name:'KHÓA XE',rarity:'rare',icon:'🏰',desc:'Một xe không được di chuyển trong 3 lượt đầu.'},
 {id:'o06',name:'Ô BẮT BUỘC',rarity:'rare',icon:'🎯',desc:'Chọn 1 ô trung tâm; trong 2 lượt đầu phải cố gắng đưa quân vào khu vực nếu có nước hợp lệ.'},
 {id:'o07',name:'ĐỔI TỐT',rarity:'rare',icon:'🔄',desc:'Hai tốt ở cột được chỉ định đổi vị trí nếu vị trí mới hợp lệ.'},
 {id:'o08',name:'ĐÓNG TRUNG TÂM',rarity:'rare',icon:'🧊',desc:'Khóa d4+e5 hoặc d5+e4 trong 2 lượt đầu.'},
 {id:'o09',name:'THÁCH ĐẤU',rarity:'rare',icon:'⚔️',desc:'Trong 3 nước đầu phải tạo ít nhất một đòn tấn công quân đối phương nếu có nước hợp lệ.'},
 {id:'o10',name:'MÃ XUẤT PHÁT',rarity:'epic',icon:'🐴',desc:'Một mã được phép có nước xuất phát đặc biệt không bắt quân; dùng như rule flag trong MVP.'},
 {id:'o11',name:'TỐT TIÊN PHONG',rarity:'epic',icon:'♟️',desc:'Một tốt được chọn được quyền đi 3 ô ở nước đầu nếu đường đi hoàn toàn trống.'},
 {id:'o12',name:'XE TỐC HÀNH',rarity:'epic',icon:'🏰',desc:'Một xe được phép thực hiện nước đầu đặc biệt không bắt quân; dùng như rule flag trong MVP.'},
 {id:'o13',name:'HẬU CẤM ĐƯỜNG',rarity:'common',icon:'👑',desc:'Hậu đối phương không được di chuyển trong 4 nước đầu.'},
 {id:'o14',name:'VUA AN TOÀN',rarity:'common',icon:'🛡️',desc:'Trong 3 nước đầu không được làm vua tiến vào vùng đang bị tấn công.'},
 {id:'o15',name:'ĐỔI QUÂN NHẸ',rarity:'rare',icon:'🎲',desc:'Một mã hoặc tượng đổi vị trí với quân cùng loại của chính họ nếu hợp lệ.'},
 {id:'o16',name:'PHONG TỎA CÁNH',rarity:'rare',icon:'🔒',desc:'Chọn cánh vua hoặc cánh hậu; giới hạn vượt hàng trong 3 lượt đầu.'},
 {id:'o17',name:'BẪY KHAI CUỘC',rarity:'epic',icon:'🪤',desc:'Nếu đối phương đưa cùng một quân đi 2 lần trong 4 nước đầu, nhận 1 Midgame Draw bổ sung.'},
 {id:'o18',name:'TIỀN THƯỞNG',rarity:'rare',icon:'💰',desc:'Nếu đối phương mất quân trong 5 nước đầu, nhận 1 Midgame Draw bổ sung.'},
 {id:'o19',name:'HOÁN ĐỔI TỐT',rarity:'rare',icon:'🔀',desc:'Chọn 2 tốt cùng hàng xuất phát; đổi vị trí nếu hợp lệ.'},
 {id:'o20',name:'CẤM BẮT',rarity:'rare',icon:'☠️',desc:'Đối phương không được bắt quân trong 2 nước đầu, trừ khi đó là cách duy nhất để thoát chiếu.'}
];

const midgameCards = [
 {id:'m01',name:'NƯỚC THẦN TỐC',rarity:'legendary',icon:'⚡',desc:'Lượt kế tiếp được thực hiện 2 nước liên tiếp nếu cả hai hợp lệ.'},
 {id:'m02',name:'KHIÊN VUA',rarity:'rare',icon:'🛡️',desc:'Vua không thể bị chiếu trong 1 lượt đối phương.'},
 {id:'m03',name:'MIỄN BẮT',rarity:'rare',icon:'🎯',desc:'Chọn 1 quân; quân đó không thể bị bắt trong 2 lượt đối phương.'},
 {id:'m04',name:'MÃ BÓNG ĐÊM',rarity:'common',icon:'🐎',desc:'Một mã nhận thêm một lần di chuyển đặc biệt theo effect.'},
 {id:'m05',name:'TỐT TĂNG TỐC',rarity:'common',icon:'♟️',desc:'Một tốt được đi thêm 1 ô trong nước kế tiếp nếu hợp lệ.'},
 {id:'m06',name:'HẬU BẤT TỬ',rarity:'epic',icon:'👑',desc:'Hậu không thể bị bắt trong 1 lượt đối phương.'},
 {id:'m07',name:'XE PHẢN CÔNG',rarity:'rare',icon:'🏰',desc:'Một xe nhận quyền thực hiện thêm một nước theo effect.'},
 {id:'m08',name:'ĐỔI VỊ TRÍ',rarity:'epic',icon:'🔄',desc:'Đổi vị trí 2 quân của chính mình nếu cả hai vị trí mới hợp lệ.'},
 {id:'m09',name:'KÉO QUÂN',rarity:'rare',icon:'🧲',desc:'Chọn 1 quân đối phương; nếu có nước hợp lệ, họ phải dùng quân đó ở lượt kế tiếp.'},
 {id:'m10',name:'BOM HẸN GIỜ',rarity:'epic',icon:'💣',desc:'Chọn 1 quân. Nếu đối phương không bắt quân đó trong 3 lượt, nhận 1 Midgame Draw bổ sung.'},
 {id:'m11',name:'ĐÓNG BĂNG',rarity:'common',icon:'🧊',desc:'Một quân đối phương bị khóa trong 2 lượt.'},
 {id:'m12',name:'ĐỔI MÁU',rarity:'epic',icon:'🩸',desc:'Đổi vị trí 1 quân mỗi bên nếu cùng giá trị và vị trí mới hợp lệ.'},
 {id:'m13',name:'NGỤY TRANG',rarity:'rare',icon:'🎭',desc:'UI ẩn loại quân được chọn trong 1 lượt.'},
 {id:'m14',name:'THOÁT HIỂM',rarity:'epic',icon:'🏃',desc:'Một quân đang bị tấn công được dịch chuyển tới ô hợp lệ theo effect.'},
 {id:'m15',name:'TIỀN LÃI',rarity:'rare',icon:'💰',desc:'Nếu bắt được quân trong 3 lượt tiếp theo, nhận 1 Midgame Draw.'},
 {id:'m16',name:'LỜI NGUYỀN',rarity:'rare',icon:'☠️',desc:'Quân đối phương bắt quân của bạn trong 2 lượt tới sẽ bị khóa 1 lượt.'},
 {id:'m17',name:'PHẢN CHIẾU',rarity:'epic',icon:'🪞',desc:'Nước tiếp theo của đối phương phải dùng cùng loại quân với nước vừa thực hiện nếu có nước hợp lệ.'},
 {id:'m18',name:'ĐỊNH MỆNH',rarity:'common',icon:'🎲',desc:'Hệ thống chọn ngẫu nhiên 1 quân của bạn nhận shield 1 lần bắt.'},
 {id:'m19',name:'CUỒNG NỘ',rarity:'legendary',icon:'🔥',desc:'Một quân được chọn nhận quyền thực hiện 2 lần bắt liên tiếp nếu hợp lệ.'},
 {id:'m20',name:'HỖN LOẠN',rarity:'legendary',icon:'👹',desc:'Chọn ngẫu nhiên 3 quân và xáo vị trí nếu trạng thái sau cùng hợp lệ.'}
];

const lastCards = [
 {id:'l01',name:'HỒI SINH',rarity:'common',icon:'👑',desc:'Vua hồi sinh tại 1 trong 3 ô hợp lệ.'},
 {id:'l02',name:'VUA + TỐT',rarity:'common',icon:'👑♟️',desc:'Hồi sinh vua + 1 tốt.'},
 {id:'l03',name:'VUA + MÃ',rarity:'common',icon:'👑🐴',desc:'Hồi sinh vua + 1 mã.'},
 {id:'l04',name:'VUA + TƯỢNG',rarity:'common',icon:'👑⛪',desc:'Hồi sinh vua + 1 tượng.'},
 {id:'l05',name:'VUA + XE',rarity:'rare',icon:'👑🏰',desc:'Hồi sinh vua + 1 xe.'},
 {id:'l06',name:'VUA + HẬU',rarity:'legendary',icon:'👑👑',desc:'Hồi sinh vua + hậu.'},
 {id:'l07',name:'ĐỘI TÂN BINH',rarity:'common',icon:'👑♟️♟️',desc:'Vua + 2 tốt.'},
 {id:'l08',name:'KỴ BINH',rarity:'common',icon:'👑🐴♟️',desc:'Vua + mã + tốt.'},
 {id:'l09',name:'PHÒNG THỦ',rarity:'common',icon:'👑⛪♟️',desc:'Vua + tượng + tốt.'},
 {id:'l10',name:'PHẢN CÔNG',rarity:'rare',icon:'👑🏰♟️',desc:'Vua + xe + tốt.'},
 {id:'l11',name:'SONG MÃ',rarity:'rare',icon:'👑🐴🐴',desc:'Vua + 2 mã.'},
 {id:'l12',name:'SONG TƯỢNG',rarity:'rare',icon:'👑⛪⛪',desc:'Vua + 2 tượng.'},
 {id:'l13',name:'SONG XE',rarity:'epic',icon:'👑🏰🏰',desc:'Vua + 2 xe.'},
 {id:'l14',name:'TIỂU ĐỘI',rarity:'common',icon:'👑♟️♟️♟️',desc:'Vua + 3 tốt.'},
 {id:'l15',name:'ĐỘI HỖ TRỢ',rarity:'epic',icon:'👑🐴⛪♟️',desc:'Vua + mã + tượng + tốt.'},
 {id:'l16',name:'ĐỘI PHẢN CÔNG',rarity:'epic',icon:'👑🏰🐴♟️',desc:'Vua + xe + mã + tốt.'},
 {id:'l17',name:'PHÒNG TUYẾN',rarity:'epic',icon:'👑⛪⛪♟️♟️',desc:'Vua + 2 tượng + 2 tốt.'},
 {id:'l18',name:'TAM QUÂN',rarity:'epic',icon:'👑🏰🐴⛪',desc:'Vua + xe + mã + tượng.'},
 {id:'l19',name:'PHÁ VÂY',rarity:'epic',icon:'👑🏰♟️♟️♟️',desc:'Vua + xe + 3 tốt.'},
 {id:'l20',name:'ĐẾ VƯƠNG',rarity:'legendary',icon:'👑🏰🐴⛪♟️',desc:'Vua + xe + mã + tượng + tốt.'}
];

const DECKS = {handicap:handicapCards, opening:openingCards, midgame:midgameCards, lastChance:lastCards};

const state = {
  game:null,
  phase:'SETUP',
  current:'w',
  settings:{handicap:true,opening:true,midgame:true,lastChance:true},
  used:{w:{handicap:[],opening:[],midgame:[],lastChance:[]},b:{handicap:[],opening:[],midgame:[],lastChance:[]}},
  active:{w:[],b:[]},
  logs:[], moves:[], selected:null,
  openingUnlocked:false, midgameDraws:{w:0,b:0}, lastChanceUsed:{w:false,b:false},
  pendingCard:null, pendingChoice:null,
  handicapApplied:{w:false,b:false}, openingApplied:{w:false,b:false},
};

const $ = (id)=>document.getElementById(id);

function weightedRarity(deckType){
  const weights={
    handicap:{common:60,rare:25,epic:12,legendary:3},
    opening:{common:50,rare:30,epic:15,legendary:5},
    midgame:{common:45,rare:30,epic:20,legendary:5},
    lastChance:{common:55,rare:30,epic:12,legendary:3}
  }[deckType];
  const roll=Math.random()*100; let acc=0;
  for(const [r,w] of Object.entries(weights)){acc+=w;if(roll<acc)return r;}
  return 'common';
}

function drawCard(deckType,color){
  const used=state.used[color][deckType];
  const pool=DECKS[deckType].filter(c=>!used.includes(c.id));
  if(!pool.length) return null;
  const rarity=weightedRarity(deckType);
  const matching=pool.filter(c=>c.rarity===rarity);
  const card=(matching.length?matching:pool)[Math.floor(Math.random()*(matching.length?matching.length:pool.length))];
  used.push(card.id);
  return card;
}

function colorName(c){return c==='w'?'White':'Black';}
function opponent(c){return c==='w'?'b':'w';}

function log(text,color=null){
  state.logs.unshift({text,color}); renderLogs();
}
function renderLogs(){
  const nodes=[$('cardLog'),$('whiteLog'),$('mobileLog')];
  const all=state.logs;
  $('cardLog').innerHTML=all.map(x=>`<div class="log-row"><span>${x.color?x.color==='w'?'W':'B':'•'}</span><span>${x.text}</span></div>`).join('');
  $('mobileLog').innerHTML=$('cardLog').innerHTML;
  $('whiteLog').innerHTML=all.filter(x=>x.color==='w').map(x=>`<div class="log-row"><span>W</span><span>${x.text}</span></div>`).join('');
}

function renderBoard(){
  const board=$('board'); board.innerHTML='';
  if(!state.game) return;
  const rows=state.game.board();
  const files=['a','b','c','d','e','f','g','h'];
  rows.forEach((row,ri)=>row.forEach((piece,ci)=>{
    const sq=document.createElement('div');
    const square=files[ci]+(8-ri);
    sq.className='square '+(((ri+ci)%2===0)?'light':'dark');
    sq.dataset.square=square;
    if(state.selected===square) sq.classList.add('selected');
    const legal=state.selected?state.game.moves({square:state.selected,verbose:true}).find(m=>m.to===square):null;
    if(legal) sq.classList.add(legal.captured?'capture':'legal');
    if(piece){
      const glyph={wp:'♙',wn:'♘',wb:'♗',wr:'♖',wq:'♕',wk:'♔',bp:'♟',bn:'♞',bb:'♝',br:'♜',bq:'♛',bk:'♚'}[piece.color+piece.type];
      sq.innerHTML=`<span>${glyph}</span>`;
    }
    if(ri===7) sq.insertAdjacentHTML('beforeend',`<span class="coord-file">${files[ci]}</span>`);
    if(ci===0) sq.insertAdjacentHTML('beforeend',`<span class="coord-rank">${8-ri}</span>`);
    sq.addEventListener('click',()=>handleSquare(square));
    board.appendChild(sq);
  }));
}

function renderMoves(){
  $('moveHistory').innerHTML=state.moves.map((m,i)=>`<div class="move-row"><span class="move-num">${Math.floor(i/2)+1}${i%2?'...':'.'}</span><span>${m}</span></div>`).join('');
}
function renderActive(){
  $('whiteActive').innerHTML=state.active.w.map(card=>`<div class="mini-card"><strong>${card.icon} ${card.name}</strong><span>${card.desc}</span></div>`).join('');
}
function updateHeader(){
  $('phaseLabel').textContent=state.phase.replace(/_/g,' ');
  $('turnLabel').textContent=state.game?`${colorName(state.current)} to move`:'Chưa bắt đầu';
  $('whiteStatus').textContent=state.phase==='GAME_OVER'?'Kết thúc':(state.current==='w'?'Đang đi':'Chờ đối phương');
}

function openCardModal(card,deckType,color){
  state.pendingCard={card,deckType,color};
  $('cardRarity').textContent=RARITY[card.rarity];
  $('cardRarity').className='card-rarity rarity-'+card.rarity;
  $('cardIcon').textContent=card.icon;
  $('cardTitle').textContent=card.name;
  $('cardDesc').textContent=card.desc;
  $('cardMeta').textContent=`${deckType.toUpperCase()} • ${colorName(color)}`;
  $('cardModal').classList.add('active');
}

function closeModal(id){$(id).classList.remove('active')}

function requestChoice(title,desc,options,onPick){
  $('choiceTitle').textContent=title;$('choiceDesc').textContent=desc;$('choiceOptions').innerHTML='';
  options.forEach(opt=>{const b=document.createElement('button');b.className='choice-btn';b.innerHTML=opt.label;b.onclick=()=>{closeModal('choiceModal');onPick(opt.value)};$('choiceOptions').appendChild(b)});
  $('choiceModal').classList.add('active');
}

function fileSquares(type){
  const files=type==='king'?['f','g','h']:['a','b','c']; return files.map(f=>f+ (state.current==='w'?2:7));
}

function selectExistingSquares(filter){
  const out=[];
  for(const row of state.game.board()) for(const p of row) if(p){
    const file=p.type==='p'?null:null;
  }
  return out;
}

function performHandicap(card,color){
  const game=state.game;
  const choosePiece=(types,label,count=1,extraFiles=null)=>{
    const opts=[]; game.board().forEach((row,ri)=>row.forEach((p,ci)=>{if(!p||p.color!==color||!types.includes(p.type))return; const sq='abcdefgh'[ci]+(8-ri); if(extraFiles&&!extraFiles.includes(sq[0]))return; opts.push({label:`${sq.toUpperCase()} — ${pieceLabel(p.type)}`,value:sq});}));
    if(!opts.length) { log(`${card.name}: không đủ quân hợp lệ, card được đánh dấu đã xử lý.`,color); return Promise.resolve(); }
    return new Promise(resolve=>requestChoice(`${card.name}`,`Chọn ${label}.`,opts.slice(0,12),sq=>{removePieceAt(sq); resolve();}));
  };

  return new Promise(async resolve=>{
    const removeN=async(n,types,desc)=>{for(let i=0;i<n;i++) await choosePiece(types,desc);};
    if(card.id==='h01') await removeN(1,['p'],'1 tốt');
    else if(card.id==='h02') await removeN(2,['p'],'1 tốt');
    else if(card.id==='h03') await removeN(3,['p'],'1 tốt');
    else if(card.id==='h04') await chooseFixed('e'+(color==='w'?2:7),color,'p');
    else if(card.id==='h05') await chooseFixed('d'+(color==='w'?2:7),color,'p');
    else if(card.id==='h06') await choosePiece(['p'],'1 tốt cánh vua',1,['f','g','h']);
    else if(card.id==='h07') await choosePiece(['p'],'1 tốt cánh hậu',1,['a','b','c']);
    else if(card.id==='h08') await removeN(1,['n'],'1 mã');
    else if(card.id==='h09') await removeN(1,['b'],'1 tượng');
    else if(card.id==='h10'){await removeN(1,['n'],'1 mã');await removeN(1,['p'],'1 tốt');}
    else if(card.id==='h11') await removeN(1,['r'],'1 xe');
    else if(card.id==='h12'){await removeN(1,['r'],'1 xe');await removeN(1,['p'],'1 tốt');}
    else if(card.id==='h13') await removeN(2,['n'],'1 mã');
    else if(card.id==='h14') await removeN(2,['b'],'1 tượng');
    else if(card.id==='h15') await removeN(2,['r'],'1 xe');
    else if(card.id==='h16'){await removeN(1,['n'],'1 mã');await removeN(1,['b'],'1 tượng');await removeN(1,['p'],'1 tốt');}
    else if(card.id==='h17'){await removeN(1,['r'],'1 xe');await removeN(1,['n'],'1 mã');}
    else if(card.id==='h18'){await removeN(1,['r'],'1 xe');await removeN(1,['b'],'1 tượng');}
    else if(card.id==='h19') await removeN(1,['q'],'hậu');
    else if(card.id==='h20'){await removeN(1,['q'],'hậu');await removeN(1,['p'],'1 tốt');}
    state.handicapApplied[color]=true; log(`${card.name} áp dụng cho ${colorName(color)}.`,color); resolve();
  });
}

function pieceLabel(t){return {p:'Tốt',n:'Mã',b:'Tượng',r:'Xe',q:'Hậu',k:'Vua'}[t]||t;}

function chooseFixed(square,color,type){
  const p=state.game.get(square);
  if(!p||p.color!==color||p.type!==type){log(`Không có ${pieceLabel(type)} hợp lệ tại ${square}; bỏ qua lựa chọn.`,color);return Promise.resolve();}
  removePieceAt(square); return Promise.resolve();
}

function removePieceAt(square){
  const board=state.game.board(); const file='abcdefgh'.indexOf(square[0]); const rank=8-Number(square[1]);
  board[rank][file]=null;
  state.game=new Chess(boardToFen(board,state.game.turn(),state.game));
  renderBoard();
}

function boardToFen(board,turn='w',oldGame=null){
  const ranks=board.map(row=>{let s='',empty=0;row.forEach(p=>{if(!p){empty++;return;} if(empty){s+=empty;empty=0;} s+=(p.color==='w'?p.type.toUpperCase():p.type);});if(empty)s+=empty;return s;}).join('/');
  const castling=oldGame?.getCastlingRights?'' : '-';
  return `${ranks} ${turn} ${castling||'-'} - 0 1`;
}

function applyOpeningCard(card,color){
  const foe=opponent(color);
  state.active[foe].push({...card,owner:color});
  log(`${colorName(color)} rút ${card.name}; ảnh hưởng lên ${colorName(foe)}.`,color);
  // Implement the clean/board-safe opening rules directly; unusual setup cards stay as active rules.
  if(card.id==='o13') addRule(foe,'queenLocked',4);
  if(card.id==='o03') return choosePieceFromGame(foe,['p'],'KHÓA TỐT',color,2,'Chọn tốt đối phương.');
  if(card.id==='o04') return choosePieceFromGame(foe,['n'],'KHÓA MÃ',color,3,'Chọn mã đối phương.');
  if(card.id==='o05') return choosePieceFromGame(foe,['r'],'KHÓA XE',color,3,'Chọn xe đối phương.');
  if(card.id==='o20') addRule(foe,'captureLocked',2);
  return Promise.resolve();
}

function addRule(color,key,turns){
  state.active[color].push({name:key,desc:`Hiệu lực ${turns} lượt`,type:'rule',remaining:turns});
}

function choosePieceFromGame(target,types,title,owner,duration,desc){
  const opts=[];state.game.board().forEach((row,ri)=>row.forEach((p,ci)=>{if(!p||p.color!==target||!types.includes(p.type))return;const sq='abcdefgh'[ci]+(8-ri);opts.push({label:`${sq.toUpperCase()} — ${pieceLabel(p.type)}`,value:sq});}));
  if(!opts.length)return Promise.resolve();
  return new Promise(resolve=>requestChoice(title,desc,opts,sq=>{state.active[target].push({name:title,desc:`${sq.toUpperCase()} bị khóa ${duration} lượt`,square:sq,remaining:duration,type:'pieceLock',owner}); log(`${title}: ${sq.toUpperCase()} bị khóa.`,owner);resolve();}));
}

function drawOpening(color){const card=drawCard('opening',color); if(!card)return Promise.resolve(); state.openingApplied[color]=true; return new Promise(resolve=>{state._pendingResolve=resolve;openCardModal(card,'opening',color);});}

function drawHandicap(color){const card=drawCard('handicap',color);if(!card)return Promise.resolve();return new Promise(resolve=>{state._pendingResolve=resolve;openCardModal(card,'handicap',color);});}

async function confirmPendingCard(){
  const p=state.pendingCard;if(!p){closeModal('cardModal');return;}
  closeModal('cardModal'); const {card,deckType,color}=p; state.pendingCard=null;
  if(deckType==='handicap') await performHandicap(card,color);
  else if(deckType==='opening') await applyOpeningCard(card,color);
  else if(deckType==='midgame') await applyMidgameCard(card,color);
  else if(deckType==='lastChance') await applyLastChance(card,color);
  state.active[color].push(card);
  renderActive(); updateHeader();
  if(state._pendingResolve){const r=state._pendingResolve;state._pendingResolve=null;r();}
}

async function applyMidgameCard(card,color){
  // Functional subset with safe persistent rule state.
  if(card.id==='m02') state.active[color].push({name:'KHIÊN VUA',desc:'Vua được miễn chiếu trong lượt đối phương kế tiếp',type:'kingShield',remaining:1});
  else if(card.id==='m03') await chooseOwnPiece(color,'MIỄN BẮT',1,(sq)=>state.active[color].push({name:'MIỄN BẮT',desc:`${sq.toUpperCase()} không thể bị bắt trong 2 lượt`,type:'pieceShield',square:sq,remaining:2}));
  else if(card.id==='m06') await chooseOwnPiece(color,'HẬU BẤT TỬ',1,(sq)=>{if(state.game.get(sq)?.type==='q')state.active[color].push({name:'HẬU BẤT TỬ',desc:`${sq.toUpperCase()} không thể bị bắt trong 1 lượt`,type:'pieceShield',square:sq,remaining:1});});
  else if(card.id==='m11') await choosePieceFromGame(opponent(color),['p','n','b','r','q'],'ĐÓNG BĂNG',color,2,'Chọn quân đối phương.');
  else if(card.id==='m18'){const own=[];state.game.board().forEach((row,ri)=>row.forEach((p,ci)=>{if(p&&p.color===color&&p.type!=='k')own.push('abcdefgh'[ci]+(8-ri));}));if(own.length){const sq=own[Math.floor(Math.random()*own.length)];state.active[color].push({name:'ĐỊNH MỆNH',desc:`${sq.toUpperCase()} có shield 1 lần bắt`,type:'pieceShield',square:sq,remaining:99});log(`Định mệnh chọn ${sq.toUpperCase()}.`,color);}}
  else if(card.id==='m15') state.active[color].push({name:'TIỀN LÃI',desc:'Nếu bắt được quân trong 3 lượt sẽ nhận bonus draw',type:'captureBonus',remaining:3});
  else state.active[color].push({name:card.name,desc:card.desc,type:'rule',remaining:1});
  log(`${card.name} được kích hoạt.`,color);
}

function chooseOwnPiece(color,title,count,onPick){const opts=[];state.game.board().forEach((row,ri)=>row.forEach((p,ci)=>{if(!p||p.color!==color||p.type==='k')return;const sq='abcdefgh'[ci]+(8-ri);opts.push({label:`${sq.toUpperCase()} — ${pieceLabel(p.type)}`,value:sq});}));if(!opts.length)return;requestChoice(title,'Chọn một quân.',opts,onPick);}

function canMove(source,target){
  if(!state.game||state.phase==='GAME_OVER')return null;
  if(state.game.turn()!==state.current)return null;
  const p=state.game.get(source); if(!p||p.color!==state.current)return null;
  const lock=state.active[state.current].find(x=>x.square===source&&x.type==='pieceLock'&&x.remaining>0); if(lock)return null;
  if(p.type==='q'&&state.active[state.current].some(x=>x.name==='queenLocked'&&x.remaining>0))return null;
  if(state.active[state.current].some(x=>x.name==='captureLocked'&&x.remaining>0)){
    const dest=state.game.get(target); if(dest)return null;
  }
  const legal=state.game.moves({square:source,verbose:true}).find(m=>m.to===target); return legal||null;
}

function handleSquare(square){
  if(state.phase!=='PLAYING'&&state.phase!=='MIDGAME')return;
  if(!state.game)return;
  if(state.selected){
    const mv=canMove(state.selected,square);
    if(mv){makeMove(state.selected,square,mv.promotion);return;}
  }
  const p=state.game.get(square); state.selected=(p&&p.color===state.current)?square:null;renderBoard();
}

function makeMove(from,to,promotion){
  const moving=state.game.get(from);const captured=state.game.get(to);
  const move=state.game.move({from,to,promotion:promotion||'q'});
  if(!move)return;
  if(moving.type!=='p'&&moving.type!=='k') state.nonPawnEvents++;
  if(captured&&captured.type!=='p') state.nonPawnEvents++;
  state.moves.push(state.game.history().at(-1)); state.selected=null;
  decrementEffectsAfterTurn(state.current,captured);
  renderBoard();renderMoves();
  if(maybeUnlockMidgame()){
    state.phase='MIDGAME';
  } else state.phase='PLAYING';
  state.current=opponent(state.current);updateHeader();
  handleGameEnd();
}

function decrementEffectsAfterTurn(color,captured){
  const arr=state.active[color];arr.forEach(x=>{if(typeof x.remaining==='number'&&x.remaining<90)x.remaining--;});
  state.active[color]=arr.filter(x=>x.remaining===undefined||x.remaining>0);
  if(captured){
    const opp=color;
    const bonus=state.active[opp].find(x=>x.type==='captureBonus');
    if(bonus){bonus.remaining=0; state.midgameDraws[opp]++; log(`${colorName(opp)} nhận 1 bonus Midgame Draw.`,opp);}
  }
}

function maybeUnlockMidgame(){
  if(state.openingUnlocked)return true;
  const moves=state.moves.length;
  const queenMoved=Boolean(state.moves.some(m=>m.includes('Q')));
  // Track actual non-pawn activity (moves/captures) as the third condition.
  const conditions=[moves>=8,queenMoved,state.nonPawnEvents>=4];
  const count=conditions.filter(Boolean).length;
  if(count>=2){state.openingUnlocked=true;log('MIDGAME FATE đã mở.');return true;}return false;
}

function handleGameEnd(){
  if(state.game.isCheckmate()){
    const loser=state.current;
    if(state.settings.lastChance&&!state.lastChanceUsed[loser]){
      $('lastChanceTitle').textContent=`${colorName(loser)} BỊ CHIẾU HẾT`;
      $('lastChanceDesc').textContent='Bạn còn 1 quyền Last Chance. Có thể rút 1 lá để cố gắng hồi sinh.';
      $('lastChanceModal').classList.add('active');
    }else finishGame(opponent(loser));
    return;
  }
  if(state.game.isDraw()||state.game.isStalemate()||state.game.isThreefoldRepetition()||state.game.isInsufficientMaterial()) finishGame(null);
}
function finishGame(winner){state.phase='GAME_OVER';$('drawBtn').disabled=true; updateHeader(); log(winner?`${colorName(winner)} chiến thắng.`:'Ván cờ hòa.');}

function startMatch(){
  state.game=new Chess();state.phase='HANDICAP';state.current='w';state.used={w:{handicap:[],opening:[],midgame:[],lastChance:[]},b:{handicap:[],opening:[],midgame:[],lastChance:[]}};state.active={w:[],b:[]};state.logs=[];state.moves=[];state.lastChanceUsed={w:false,b:false};state.midgameDraws={w:0,b:0};state.openingUnlocked=false;state.openingApplied={w:false,b:false};state.handicapApplied={w:false,b:false};state.midgameDrawsUsed={w:0,b:0};state.nonPawnEvents=0;
  state.settings={handicap:$('handicapToggle').value==='on',opening:$('openingToggle').value==='on',midgame:$('midgameToggle').value==='on',lastChance:$('lastToggle').value==='on'};
  closeModal('setupModal'); $('drawBtn').disabled=true; renderAll(); runSetup();
}

async function runSetup(){
  if(state.settings.handicap){await drawHandicap('w');await drawHandicap('b');}
  if(state.settings.opening){await drawOpening('w');await drawOpening('b');}
  state.phase='PLAYING';state.current='w';$('drawBtn').disabled=true;updateHeader();renderAll();log('Ván đấu bắt đầu. White đi trước.');
}

function maybeDrawMidgame(){
  if(!state.settings.midgame||!state.openingUnlocked||state.phase==='GAME_OVER')return;
  const baseLimit=2; const available=state.midgameDraws[state.current] + (state.active[state.current].some(x=>x.type==='captureBonus')?1:0);
  if(available>=baseLimit) $('drawBtn').disabled=false; else $('drawBtn').disabled=state.active[state.current].some(x=>x.name.includes('DRAW'))?true:false;
  $('drawBtn').disabled=false;
}

async function onDraw(){
  if(!state.game||!state.settings.midgame||!state.openingUnlocked||state.phase==='GAME_OVER')return;
  const color=state.current;
  if(state.midgameDrawsUsed[color]>=2)return;
  state.midgameDrawsUsed[color]++;
  state.phase='MIDGAME';
  const card=drawCard('midgame',color); if(!card){$('drawBtn').disabled=true;return;}
  $('drawBtn').disabled=true;
  // Draw costs the current turn.
  log(`${colorName(color)} chọn RÚT LÁ BÀI → mất lượt.`,color);
  await new Promise(resolve=>{state._pendingResolve=resolve;openCardModal(card,'midgame',color);});
  state.current=opponent(state.current);state.phase='PLAYING';updateHeader();renderAll();
}

function openLastChance(color){state.lastChanceUsed[color]=true;const card=drawCard('lastChance',color);if(!card){finishGame(opponent(color));return;}state.phase='LAST_CHANCE';$('lastChanceModal').classList.remove('active');state.pendingLastColor=color;openCardModal(card,'lastChance',color);}

async function applyLastChance(card,color){
  // For every Last Chance card, first restore the king on one of 3 legal candidate squares.
  const candidates=findKingSpawnSquares(color);
  if(candidates.length<1){log('Không tìm được ô hồi sinh hợp lệ.',color);finishGame(opponent(color));return;}
  const three=candidates.slice(0,3);
  await new Promise(resolve=>requestChoice('KING RETURN','Chọn 1 trong 3 ô hợp lệ.',three.map(s=>({label:s.toUpperCase(),value:s})),async sq=>{restoreKingAt(sq,color); await spawnSupport(card,color); resolve();}));
  state.game.setTurn?.(color);
  state.current=color;state.phase='PLAYING';log(`${colorName(color)} đã trở lại bàn cờ bằng ${card.name}.`,color);renderAll();
}

function findKingSpawnSquares(color){
  const game=state.game;
  const board=cloneBoard(game.board());
  const out=[];
  const enemy=opponent(color);
  const files='abcdefgh';

  // Remove the defeated king before testing candidate squares.
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){
    if(board[r][c]?.color===color && board[r][c]?.type==='k') board[r][c]=null;
  }

  for(let r=0;r<8;r++) for(let c=0;c<8;c++){
    const sq=files[c]+(8-r);
    if(board[r][c]) continue;
    const temp=cloneBoard(board);
    temp[r][c]={color,type:'k'};
    const fen=boardToFen(temp,color,game);
    try{
      const g=new Chess(fen);
      if(!g.isAttacked(sq,enemy)) out.push(sq);
    }catch(e){}
  }

  return out.sort(()=>Math.random()-.5);
}

function cloneBoard(b){return b.map(r=>r.map(p=>p?{...p}:null));}

async function restoreKingAt(square,color){
  const board=cloneBoard(state.game.board());const c='abcdefgh'.indexOf(square[0]),r=8-Number(square[1]);
  // remove any previous king of the player (the checkmated king may be absent logically only via checkmate state, but keep deterministic)
  for(let rr=0;rr<8;rr++)for(let cc=0;cc<8;cc++)if(board[rr][cc]?.color===color&&board[rr][cc]?.type==='k')board[rr][cc]=null;
  board[r][c]={color,type:'k'};
  state.game=new Chess(boardToFen(board,color,state.game));
}

async function spawnSupport(card,color){
  const map={
    l01:[],l02:['p'],l03:['n'],l04:['b'],l05:['r'],l06:['q'],l07:['p','p'],l08:['n','p'],l09:['b','p'],l10:['r','p'],l11:['n','n'],l12:['b','b'],l13:['r','r'],l14:['p','p','p'],l15:['n','b','p'],l16:['r','n','p'],l17:['b','b','p','p'],l18:['r','n','b'],l19:['r','p','p','p'],l20:['r','n','b','p']
  }[card.id]||[];
  const dead=getDeadPiecePool(color); const selected=[];
  for(const type of map){const idx=dead.indexOf(type);if(idx>=0){selected.push(type);dead.splice(idx,1);}}
  for(const type of selected){const sq=findRandomSpawnSquare(color);if(!sq)continue;spawnPieceAt(sq,{color,type});}
}

function getDeadPiecePool(color){
  const initial={p:8,n:2,b:2,r:2,q:1};const live={p:0,n:0,b:0,r:0,q:0};for(const row of state.game.board())for(const p of row)if(p&&p.color===color&&p.type!=='k')live[p.type]++;
  const pool=[];Object.keys(initial).forEach(t=>{for(let i=0;i<initial[t]-live[t];i++)pool.push(t)});return pool;
}
function findRandomSpawnSquare(color){
  const board=state.game.board(), candidates=[];const files='abcdefgh';
  for(let r=0;r<8;r++)for(let c=0;c<8;c++)if(!board[r][c])candidates.push(files[c]+(8-r));
  return candidates.length?candidates[Math.floor(Math.random()*candidates.length)]:null;
}
function spawnPieceAt(square,piece){const board=cloneBoard(state.game.board());const c='abcdefgh'.indexOf(square[0]),r=8-Number(square[1]);board[r][c]=piece;state.game=new Chess(boardToFen(board,state.current,state.game));}

function newGame(){ $('setupModal').classList.add('active');state.phase='SETUP'; }
function renderAll(){renderBoard();renderMoves();renderLogs();renderActive();updateHeader();}

$('startBtn').onclick=startMatch;
$('newGameBtn').onclick=newGame;
$('rulesBtn').onclick=()=>$('rulesModal').classList.add('active');
$('cardConfirmBtn').onclick=confirmPendingCard;
$('drawBtn').onclick=onDraw;
$('resignBtn').onclick=()=>{if(state.phase!=='GAME_OVER'&&state.game)finishGame(opponent(state.current));};
$('lastDrawBtn').onclick=()=>openLastChance(state.current);
$('lastDeclineBtn').onclick=()=>{closeModal('lastChanceModal');finishGame(opponent(state.current));};
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeModal(b.dataset.close));

// Initialize
renderAll();
