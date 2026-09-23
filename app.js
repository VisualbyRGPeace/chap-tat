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

const DECKS = { handicap: handicapCards, opening: openingCards, midgame: midgameCards, lastChance: lastCards };

const RARITY = { common:"COMMON", rare:"RARE", epic:"EPIC", legendary:"LEGENDARY" };
const state = {
  player:"w",
  deck:"handicap",
  used:{w:{handicap:[],opening:[],midgame:[],lastChance:[]},b:{handicap:[],opening:[],midgame:[],lastChance:[]}},
  history:[],
  currentCard:null
};

const $ = id => document.getElementById(id);

function weightedRarity(deck){
  const weights = {
    handicap:{common:60,rare:25,epic:12,legendary:3},
    opening:{common:50,rare:30,epic:15,legendary:5},
    midgame:{common:45,rare:30,epic:20,legendary:5},
    lastChance:{common:55,rare:30,epic:12,legendary:3}
  }[deck];
  const roll=Math.random()*100;
  let total=0;
  for(const [rarity,weight] of Object.entries(weights)){
    total+=weight;
    if(roll<total) return rarity;
  }
  return "common";
}

function drawCard(deck,player){
  const used=state.used[player][deck];
  let pool=DECKS[deck].filter(card=>!used.includes(card.id));
  if(!pool.length){
    used.length=0;
    pool=[...DECKS[deck]];
  }
  const rarity=weightedRarity(deck);
  const matching=pool.filter(card=>card.rarity===rarity);
  const card=(matching.length?matching:pool)[Math.floor(Math.random()*(matching.length?matching.length:pool.length))];
  used.push(card.id);
  return card;
}

function deckName(deck){
  return {handicap:"HANDICAP",opening:"OPENING FATE",midgame:"MIDGAME FATE",lastChance:"LAST CHANCE"}[deck];
}
function playerName(player){return player==="w"?"WHITE":"BLACK";}

function renderDeckButtons(){
  document.querySelectorAll("[data-deck]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.deck===state.deck);
  });
}
function renderStats(){
  $("deckName").textContent=deckName(state.deck);
  $("playerName").textContent=playerName(state.player);
  const used=state.used[state.player][state.deck].length;
  const total=DECKS[state.deck].length;
  $("remaining").textContent=total-used;
  $("drawn").textContent=used;
}
function renderHistory(){
  $("history").innerHTML=state.history.length
    ? state.history.map(item=>`
      <div class="draw-history-row">
        <span class="history-index">#${item.index}</span>
        <span class="history-player">${playerName(item.player)}</span>
        <span class="history-deck">${deckName(item.deck)}</span>
        <strong>${item.card.icon} ${item.card.name}</strong>
      </div>`).join("")
    : '<div class="empty-state">Chưa có lá bài nào được rút.</div>';
}

function showCard(card){
  $("cardRarity").textContent=RARITY[card.rarity];
  $("cardRarity").className="card-rarity rarity-"+card.rarity;
  $("cardIcon").textContent=card.icon;
  $("cardTitle").textContent=card.name;
  $("cardDesc").textContent=card.desc;
  $("cardMeta").textContent=`${deckName(state.deck)} • ${playerName(state.player)}`;
  $("cardModal").classList.add("active");
}

function draw(){
  const card=drawCard(state.deck,state.player);
  state.currentCard=card;
  state.history.unshift({index:state.history.length+1,player:state.player,deck:state.deck,card});
  renderStats();
  renderHistory();
  showCard(card);
}

function resetAll(){
  state.used={w:{handicap:[],opening:[],midgame:[],lastChance:[]},b:{handicap:[],opening:[],midgame:[],lastChance:[]}};
  state.history=[];
  state.currentCard=null;
  renderStats();
  renderHistory();
  $("cardModal").classList.remove("active");
}

document.querySelectorAll("[data-deck]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    state.deck=btn.dataset.deck;
    renderDeckButtons();
    renderStats();
  });
});
document.querySelectorAll("[data-player]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    state.player=btn.dataset.player;
    document.querySelectorAll("[data-player]").forEach(x=>x.classList.toggle("active",x===btn));
    renderStats();
  });
});
$("drawBtn").onclick=draw;
$("resetBtn").onclick=resetAll;
$("cardCloseBtn").onclick=()=>$("cardModal").classList.remove("active");
$("rulesBtn").onclick=()=>$("rulesModal").classList.add("active");
document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.onclick=()=>$(btn.dataset.close).classList.remove("active");
});

renderDeckButtons();
document.querySelector('[data-player="w"]').classList.add("active");
renderStats();
renderHistory();
