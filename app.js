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
 {id:'o10',name:'MÃ XUẤT PHÁT',rarity:'epic',icon:'🐴',desc:'Một mã được phép có nước xuất phát đặc biệt không bắt quân; dùng như luật đặc biệt trong phiên bản hiện tại.'},
 {id:'o11',name:'TỐT TIÊN PHONG',rarity:'epic',icon:'♟️',desc:'Một tốt được chọn được quyền đi 3 ô ở nước đầu nếu đường đi hoàn toàn trống.'},
 {id:'o12',name:'XE TỐC HÀNH',rarity:'epic',icon:'🏰',desc:'Một xe được phép thực hiện nước đầu đặc biệt không bắt quân; dùng như luật đặc biệt trong phiên bản hiện tại.'},
 {id:'o13',name:'HẬU CẤM ĐƯỜNG',rarity:'common',icon:'👑',desc:'Hậu đối phương không được di chuyển trong 4 nước đầu.'},
 {id:'o14',name:'VUA AN TOÀN',rarity:'common',icon:'🛡️',desc:'Trong 3 nước đầu không được làm vua tiến vào vùng đang bị tấn công.'},
 {id:'o15',name:'ĐỔI QUÂN NHẸ',rarity:'rare',icon:'🎲',desc:'Một mã hoặc tượng đổi vị trí với quân cùng loại của chính họ nếu hợp lệ.'},
 {id:'o16',name:'PHONG TỎA CÁNH',rarity:'rare',icon:'🔒',desc:'Chọn cánh vua hoặc cánh hậu; giới hạn vượt hàng trong 3 lượt đầu.'},
 {id:'o17',name:'BẪY KHAI CUỘC',rarity:'epic',icon:'🪤',desc:'Nếu đối phương đưa cùng một quân đi 2 lần trong 4 nước đầu, nhận 1 lượt rút Vận Trung Cuộc bổ sung.'},
 {id:'o18',name:'TIỀN THƯỞNG',rarity:'rare',icon:'💰',desc:'Nếu đối phương mất quân trong 5 nước đầu, nhận 1 lượt rút Vận Trung Cuộc bổ sung.'},
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
 {id:'m10',name:'BOM HẸN GIỜ',rarity:'epic',icon:'💣',desc:'Chọn 1 quân. Nếu đối phương không bắt quân đó trong 3 lượt, nhận 1 lượt rút Vận Trung Cuộc bổ sung.'},
 {id:'m11',name:'ĐÓNG BĂNG',rarity:'common',icon:'🧊',desc:'Một quân đối phương bị khóa trong 2 lượt.'},
 {id:'m12',name:'ĐỔI MÁU',rarity:'epic',icon:'🩸',desc:'Đổi vị trí 1 quân mỗi bên nếu cùng giá trị và vị trí mới hợp lệ.'},
 {id:'m13',name:'NGỤY TRANG',rarity:'rare',icon:'🎭',desc:'Giao diện ẩn loại quân được chọn trong 1 lượt.'},
 {id:'m14',name:'THOÁT HIỂM',rarity:'epic',icon:'🏃',desc:'Một quân đang bị tấn công được dịch chuyển tới ô hợp lệ theo effect.'},
 {id:'m15',name:'TIỀN LÃI',rarity:'rare',icon:'💰',desc:'Nếu bắt được quân trong 3 lượt tiếp theo, nhận 1 lượt rút Vận Trung Cuộc.'},
 {id:'m16',name:'LỜI NGUYỀN',rarity:'rare',icon:'☠️',desc:'Quân đối phương bắt quân của bạn trong 2 lượt tới sẽ bị khóa 1 lượt.'},
 {id:'m17',name:'PHẢN CHIẾU',rarity:'epic',icon:'🪞',desc:'Nước tiếp theo của đối phương phải dùng cùng loại quân với nước vừa thực hiện nếu có nước hợp lệ.'},
 {id:'m18',name:'ĐỊNH MỆNH',rarity:'common',icon:'🎲',desc:'Hệ thống chọn ngẫu nhiên 1 quân của bạn nhận shield 1 lần bắt.'},
 {id:'m19',name:'CUỒNG NỘ',rarity:'legendary',icon:'🔥',desc:'Một quân được chọn nhận quyền thực hiện 2 lần bắt liên tiếp nếu hợp lệ.'},
 {id:'m20',name:'HỖN LOẠN',rarity:'legendary',icon:'👹',desc:'Chọn ngẫu nhiên 3 quân và xáo vị trí nếu trạng thái sau cùng hợp lệ.'},
 {id:'m21',name:'XÚC XẮC ĐỊNH MỆNH',rarity:'mythic',icon:'🎲',desc:'Lá hiếm nhất. Người rút được quyền thả một viên xúc xắc. Lượt đi tiếp theo được thực hiện liên tiếp đúng số nước bằng kết quả xúc xắc (1–6 nước).',special:'dice'},
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

/* Cân bằng lá bài: có lá lợi, lá bất lợi và lá may rủi. */
const CARD_BALANCE = {
  o05:{type:"bad",desc:"XUI XẺO — Một xe của BẠN bị khóa trong 3 lượt đầu. Bạn không được tự chọn xe."},
  o13:{type:"bad",desc:"XUI XẺO — Hậu của BẠN không được di chuyển trong 4 nước đầu."},
  o20:{type:"bad",desc:"XUI XẺO — BẠN không được bắt quân trong 2 nước đầu, kể cả khi có cơ hội tốt."},
  m03:{type:"bad",desc:"XUI XẺO — Một quân của BẠN được chọn ngẫu nhiên và không thể di chuyển trong 2 lượt đối phương."},
  m09:{type:"bad",desc:"XUI XẺO — Đối phương chọn một quân của BẠN; ở lượt kế tiếp BẠN phải ưu tiên dùng quân đó nếu có nước hợp lệ."},
  m17:{type:"bad",desc:"XUI XẺO — Ở lượt kế tiếp BẠN phải dùng cùng loại quân với nước vừa đi nếu có nước hợp lệ."},
  l01:{type:"bad",desc:"XUI XẺO — Cơ hội hồi sinh thất bại. Không được nhận thêm quân."},
  l06:{type:"bad",desc:"XUI XẺO — Hậu hồi sinh nhưng đối phương được quyền chọn ô xuất hiện trong số các ô hợp lệ."},
  l20:{type:"bad",desc:"XUI XẺO — Đế vương không thành công: chỉ được hồi sinh VUA, không nhận các quân hỗ trợ."},

  o10:{type:"luck",outcomes:[
    {title:"MAY MẮN",desc:"Nước xuất phát đặc biệt được kích hoạt. Bạn nhận hiệu ứng của lá."},
    {title:"XUI XẺO",desc:"Hiệu ứng thất bại. Bạn không nhận quyền đặc biệt của lá."}
  ]},
  o17:{type:"luck",outcomes:[
    {title:"MAY MẮN",desc:"Bạn nhận thêm 1 lượt rút bộ VẬN TRUNG CUỘC."},
    {title:"XUI XẺO",desc:"Bạn không nhận thêm lượt rút nào."}
  ]},
  m10:{type:"luck",outcomes:[
    {title:"MAY MẮN",desc:"BOM HẸN GIỜ được kích hoạt. Bạn có thể nhận thêm 1 lượt rút nếu điều kiện đạt."},
    {title:"XUI XẺO",desc:"Bom phản tác dụng. Bạn mất quyền rút thêm 1 lá ở lượt kế tiếp."}
  ]},
  m18:{type:"luck",outcomes:[
    {title:"MAY MẮN",desc:"Một quân của bạn nhận khiên bảo vệ 1 lần bắt."},
    {title:"XUI XẺO",desc:"Một quân được chọn ngẫu nhiên phải chờ 1 lượt trước khi được di chuyển."}
  ]},
  l10:{type:"luck",outcomes:[
    {title:"MAY MẮN",desc:"Phản công thành công: nhận VUA + XE + TỐT."},
    {title:"XUI XẺO",desc:"Phản công thất bại: chỉ nhận VUA, không nhận quân hỗ trợ."}
  ]},
  l15:{type:"luck",outcomes:[
    {title:"MAY MẮN",desc:"Đội hỗ trợ đầy đủ: nhận VUA + MÃ + TƯỢNG + TỐT."},
    {title:"XUI XẺO",desc:"Đội hỗ trợ đến muộn: chỉ nhận VUA + TỐT."}
  ]}
};

// Bộ CHẤP QUÂN luôn là nhóm bất lợi cho người rút.
for (const card of handicapCards) {
  CARD_BALANCE[card.id] = {type:"bad",desc:"XUI XẺO — "+card.desc};
}

for (const [id, effect] of Object.entries(CARD_BALANCE)) {
  for (const deck of Object.values(DECKS)) {
    const card = deck.find(item => item.id === id);
    if (card) Object.assign(card, effect);
  }
}


const RARITY = { common:"THƯỜNG", rare:"HIẾM", epic:"SỬ THI", legendary:"HUYỀN THOẠI", mythic:"HIẾM NHẤT" };
const state = {
  player:"w",
  deck:"handicap",
  used:{w:{handicap:[],opening:[],midgame:[],lastChance:[]},b:{handicap:[],opening:[],midgame:[],lastChance:[]}},
  history:[],
  currentCard:null
};

const $ = id => document.getElementById(id);

function randomInt(max){
  return Math.floor(Math.random()*max);
}

function shuffle(cards){
  const result=[...cards];
  for(let i=result.length-1;i>0;i--){
    const j=randomInt(i+1);
    [result[i],result[j]]=[result[j],result[i]];
  }
  return result;
}

function drawCard(deck,player){
  const used=state.used[player][deck];
  let pool=DECKS[deck].filter(card=>!used.includes(card.id));

  // Mỗi vòng có đủ 20 lá và được xáo lại. Độ hiếm không làm tăng cơ hội rút.
  if(!pool.length){
    used.length=0;
    pool=shuffle(DECKS[deck]);
  }else{
    pool=shuffle(pool);
  }

  const card=pool[0];
  used.push(card.id);
  return card;
}

function resolveCard(card){
  const balance=CARD_BALANCE[card.id];
  if(balance?.type==="luck" && Array.isArray(balance.outcomes)){
    return {
      ...card,
      type:"luck",
      outcome:balance.outcomes[randomInt(balance.outcomes.length)]
    };
  }
  return {
    ...card,
    type:balance?.type || "good",
    outcome:null
  };
}

function deckName(deck){
  return {
    handicap:"CHẤP QUÂN",
    opening:"VẬN KHAI CUỘC",
    midgame:"VẬN TRUNG CUỘC",
    lastChance:"CƠ HỘI CUỐI"
  }[deck];
}
function playerName(player){return player==="w"?"TRẮNG":"ĐEN";}

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
        <strong>${item.card.icon} ${item.card.name}</strong><em class="history-effect">${item.card.type==="bad"?"BẤT LỢI":item.card.type==="luck"?(item.card.outcome?.title||"MAY RỦI"):"LỢI THẾ"}</em>
      </div>`).join("")
    : '<div class="empty-state">Chưa có lá bài nào được rút.</div>';
}


function isDiceCard(card){
  return card?.special==="dice";
}

function rollDice(){
  const result=randomInt(6)+1;
  $("diceValue").textContent=result;
  $("diceText").textContent="LƯỢT KẾ TIẾP: ĐI "+result+" NƯỚC LIÊN TIẾP";
  $("diceResult").classList.add("revealed");
  return result;
}

function animateDiceRoll(){
  const btn=$("diceRollBtn"),face=$("diceValue"),box=$("diceResult");
  btn.disabled=true;
  box.classList.remove("revealed");
  box.classList.add("rolling");
  face.textContent="🎲";
  $("diceText").textContent="ĐANG TUNG XÚC XẮC...";
  let ticks=0;
  const timer=setInterval(()=>{
    face.textContent=String(randomInt(6)+1);
    ticks++;
    if(ticks>=8){
      clearInterval(timer);
      const result=rollDice();
      box.classList.remove("rolling");
      btn.disabled=false;
      if(state.currentCard && state.history.length){
        state.history[0].card={...state.currentCard,type:"luck",outcome:{title:"XÚC XẮC: "+result,desc:"Lượt kế tiếp được đi "+result+" nước liên tiếp."}};
        renderHistory();
      }
    }
  },90);
}

function openEffectList(){
  const groups=[
    ["CHẤP QUÂN","handicap"],
    ["VẬN KHAI CUỘC","opening"],
    ["VẬN TRUNG CUỘC","midgame"],
    ["CƠ HỘI CUỐI","lastChance"]
  ];
  $("effectList").innerHTML=groups.map(([title,key])=>`
    <div class="effect-group">
      <div class="effect-group-title">${title} <span>${DECKS[key].length} lá</span></div>
      <div class="effect-items">
        ${DECKS[key].map(card=>`
          <button class="effect-item" data-effect-id="${card.id}" data-effect-deck="${key}">
            <span class="effect-item-icon">${card.icon}</span>
            <span class="effect-item-name">${card.name}</span>
            <span class="effect-item-rarity rarity-${card.rarity}">${RARITY[card.rarity]}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");

  document.querySelectorAll("[data-effect-id]").forEach(btn=>{
    btn.onclick=()=>{
      const deck=DECKS[btn.dataset.effectDeck];
      const card=deck.find(item=>item.id===btn.dataset.effectId);
      showEffectDetail(card);
    };
  });
  $("effectsModal").classList.add("active");
}

function showEffectDetail(card){
  const type=card.type==="bad"?"BẤT LỢI":card.type==="luck"?"MAY RỦI":"LỢI THẾ";
  const fullRule=card.special==="dice"
    ? "Người rút thả xúc xắc 1 lần. Kết quả từ 1 đến 6 quyết định số nước liên tiếp được thực hiện ở lượt đi tiếp theo. Ví dụ: đổ 4 thì lượt kế tiếp được đi 4 nước liên tiếp, với điều kiện từng nước vẫn hợp lệ theo luật chơi. Đây là lá hiếm nhất trong toàn bộ hệ thống."
    : (card.desc || "Chưa có mô tả luật.");
  $("effectDetailIcon").textContent=card.icon;
  $("effectDetailTitle").textContent=card.name;
  $("effectDetailRarity").textContent=RARITY[card.rarity];
  $("effectDetailType").textContent=type;
  $("effectDetailText").textContent=fullRule;
  $("effectDetailModal").classList.add("active");
}

function showCard(card){
  $("cardRarity").textContent=RARITY[card.rarity];
  $("cardRarity").className="card-rarity rarity-"+card.rarity;
  $("cardIcon").textContent=card.icon;
  $("cardTitle").textContent=card.name;

  const typeLabel=card.type==="bad"?"BẤT LỢI":card.type==="luck"?"MAY RỦI":"LỢI THẾ";
  const typeClass=card.type==="bad"?"card-type-bad":card.type==="luck"?"card-type-luck":"card-type-good";
  $("cardDesc").innerHTML=
    '<span class="card-type '+typeClass+'">'+typeLabel+'</span>'+
    '<span class="card-description-text">'+(card.outcome ? card.outcome.title+" — "+card.outcome.desc : (card.desc || ""))+'</span>';

  $("cardMeta").textContent=deckName(state.deck)+" • "+playerName(state.player)+" • RÚT NGẪU NHIÊN";
  $("cardActionBtn").textContent=isDiceCard(card)?"🎲 THẢ XÚC XẮC":"ĐÃ HIỂU";
  $("cardActionBtn").onclick=()=>{
    if(isDiceCard(card)){
      $("cardModal").classList.remove("active");
      $("diceValue").textContent="?";
      $("diceText").textContent="SẴN SÀNG THẢ XÚC XẮC";
      $("diceResult").classList.remove("revealed");
      $("diceModal").classList.add("active");
    }else{
      $("cardModal").classList.remove("active");
    }
  };
  $("cardModal").classList.add("active");
}

function draw(){
  const rawCard=drawCard(state.deck,state.player);
  const card=resolveCard(rawCard);
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
  $("diceModal").classList.remove("active");
  $("effectsModal").classList.remove("active");
  $("effectDetailModal").classList.remove("active");
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
$("rulesBtn").onclick=()=>$("rulesModal").classList.add("active");
$("effectsBtn").onclick=openEffectList;
$("diceRollBtn").onclick=animateDiceRoll;
document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.onclick=()=>$(btn.dataset.close).classList.remove("active");
});

renderDeckButtons();
document.querySelector('[data-player="w"]').classList.add("active");
renderStats();
renderHistory();
