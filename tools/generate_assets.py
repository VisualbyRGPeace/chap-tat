from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path
import math

ROOT=Path("assets")
FONT="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
BOLD="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
def F(n,b=False): return ImageFont.truetype(BOLD if b else FONT,n)
NAVY=(8,12,20); PANEL=(18,24,36); WHITE=(238,242,248); GOLD=(220,170,70); CYAN=(66,190,214)
RARITY={"common":(120,150,180),"rare":(75,150,225),"epic":(160,95,220),"legendary":(225,155,55),"mythic":(235,75,95)}
def save(im,path,fmt="PNG"):
    p=ROOT/path; p.parent.mkdir(parents=True,exist_ok=True); im.save(p,fmt,quality=92) if fmt=="JPEG" else im.save(p,fmt)
def grad(size,a,b):
    w,h=size; im=Image.new("RGB",size); q=im.load()
    for y in range(h):
        t=y/(h-1)
        for x in range(w): q[x,y]=tuple(int(a[i]*(1-t)+b[i]*t) for i in range(3))
    return im
def frame(c):
    im=Image.new("RGBA",(700,980),(0,0,0,0)); d=ImageDraw.Draw(im)
    d.rounded_rectangle((18,18,682,962),46,fill=(12,16,24,245),outline=c+(255,),width=10)
    d.rounded_rectangle((38,38,662,942),36,outline=tuple(int(v*.55) for v in c)+(255,),width=3)
    for r in range(90,300,55): d.ellipse((350-r,490-r,350+r,490+r),outline=c+(55,),width=2)
    return im

# brand
for white,name in [(False,"logo/logo.png"),(True,"logo/logo-white.png")]:
    im=Image.new("RGBA",(900,220),(0,0,0,0)); d=ImageDraw.Draw(im); c=(245,245,245,255) if white else GOLD+(255,)
    d.rounded_rectangle((8,8,212,212),42,outline=c,width=8); d.text((48,40),"♞",font=F(120,1),fill=c)
    d.text((250,50),"CHẤP TẤT",font=F(72,1),fill=c); d.text((252,132),"LÁ ĐỊNH MỆNH",font=F(27),fill=(180,190,205,255)); save(im,name)
im=Image.new("RGBA",(256,256),(0,0,0,0)); d=ImageDraw.Draw(im); d.rounded_rectangle((12,12,244,244),52,fill=NAVY+(255,),outline=GOLD+(255,),width=10); d.text((65,48),"♞",font=F(135,1),fill=GOLD+(255,)); save(im,"logo/favicon.png")

# backgrounds
save(grad((1600,1000),(6,9,16),(17,29,49)),"background/bg-main.jpg","JPEG")
save(grad((1200,900),(15,22,34),(7,12,21)),"background/bg-card.jpg","JPEG")
save(grad((1200,900),(20,26,39),(8,12,20)),"background/bg-modal.jpg","JPEG")
im=Image.new("RGBA",(512,512),(0,0,0,0)); d=ImageDraw.Draw(im)
for i in range(0,512,64): d.line((0,i,512,i),fill=(255,255,255,10)); d.line((i,0,i,512),fill=(255,255,255,7))
save(im,"background/texture.png")

# card system
save(frame(GOLD),"cards/card-frame.png")
for r,c in RARITY.items(): save(frame(c),f"cards/card-{r}.png")
im=frame(GOLD); d=ImageDraw.Draw(im); d.rounded_rectangle((100,210,600,770),30,fill=(10,16,27,255),outline=(70,130,190,255),width=4)
for rad in range(40,240,35): d.ellipse((350-rad,490-rad,350+rad,490+rad),outline=(220,170,70,80),width=3)
d.text((195,420),"♞",font=F(150,1),fill=GOLD+(255,)); d.text((235,585),"CHẤP TẤT",font=F(42,1),fill=WHITE+(255,)); save(im,"cards/card-back.png")

# icons
for slug,sym,label,c in [("handicap","♟","CHẤP",GOLD),("opening","⚔","KHAI",CYAN),("midgame","♞","TRUNG",(160,110,225)),("last-chance","♛","CUỐI",(225,95,105))]:
    im=Image.new("RGBA",(256,256),(0,0,0,0)); d=ImageDraw.Draw(im); d.ellipse((12,12,244,244),fill=NAVY+(255,),outline=c+(255,),width=8); d.text((70,35),sym,font=F(110,1),fill=c+(255,)); d.text((72,172),label,font=F(27,1),fill=WHITE+(255,)); save(im,f"deck-icons/icon-{slug}.png")
for side,slug,fill,o in [("TRẮNG","white",(235,240,248),CYAN),("ĐEN","black",(28,34,45),GOLD)]:
    im=Image.new("RGBA",(256,256),(0,0,0,0)); d=ImageDraw.Draw(im); d.ellipse((12,12,244,244),fill=NAVY+(255,),outline=o+(255,),width=7); d.text((72,35),"♟",font=F(125,1),fill=fill+(255,),stroke_width=3,stroke_fill=o+(255,)); d.text((73,176),side,font=F(25,1),fill=WHITE+(255,)); save(im,f"player/player-{slug}.png")
for n in range(1,7):
    im=Image.new("RGBA",(256,256),(0,0,0,0)); d=ImageDraw.Draw(im); d.rounded_rectangle((18,18,238,238),36,fill=(235,240,245,255),outline=GOLD+(255,),width=8)
    pos={1:[(128,128)],2:[(75,75),(181,181)],3:[(75,75),(128,128),(181,181)],4:[(75,75),(181,75),(75,181),(181,181)],5:[(75,75),(181,75),(128,128),(75,181),(181,181)],6:[(75,65),(181,65),(75,128),(181,128),(75,191),(181,191)]}[n]
    for x,y in pos: d.ellipse((x-16,y-16,x+16,y+16),fill=NAVY+(255,)); save(im,f"dice/dice-{n}.png")
for r,c in RARITY.items():
    im=Image.new("RGBA",(256,256),(0,0,0,0)); d=ImageDraw.Draw(im); pts=[]
    for i in range(8):
        a=math.pi/8+i*math.pi/4; rad=98 if i%2==0 else 68; pts.append((128+math.cos(a)*rad,128+math.sin(a)*rad))
    d.polygon(pts,fill=c+(230,),outline=WHITE+(120,)); d.text((92,91),"✦",font=F(72,1),fill=WHITE+(255,)); save(im,f"rarity/rarity-{r}.png")
for slug,sym,c in [("close","×",GOLD),("info","i",CYAN),("history","↺",CYAN),("card","▣",GOLD),("refresh","⟳",CYAN)]:
    im=Image.new("RGBA",(128,128),(0,0,0,0)); d=ImageDraw.Draw(im); d.ellipse((6,6,122,122),fill=PANEL+(255,),outline=c+(255,),width=5); d.text((36,21),sym,font=F(70,1),fill=WHITE+(255,)); save(im,f"icons/icon-{slug}.png")

opening="o01 CẤM Ô|o02 ĐẢO HẬU|o03 KHÓA TỐT|o04 KHÓA MÃ|o05 KHÓA XE|o06 Ô BẮT BUỘC|o07 ĐỔI TỐT|o08 ĐÓNG TRUNG TÂM|o09 THÁCH ĐẤU|o10 MÃ XUẤT PHÁT|o11 TỐT TIÊN PHONG|o12 XE TỐC HÀNH|o13 HẬU CẤM ĐƯỜNG|o14 VUA AN TOÀN|o15 ĐỔI QUÂN NHẸ|o16 PHONG TỎA CÁNH|o17 BẪY KHAI CUỘC|o18 TIỀN THƯỞNG|o19 HOÁN ĐỔI TỐT|o20 CẤM BẮT"
mid="m01 NƯỚC THẦN TỐC|m02 KHIÊN VUA|m03 MIỄN BẮT|m04 MÃ BÓNG ĐÊM|m05 TỐT TĂNG TỐC|m06 HẬU BẤT TỬ|m07 XE PHẢN CÔNG|m08 ĐỔI VỊ TRÍ|m09 KÉO QUÂN|m10 BOM HẸN GIỜ|m11 ĐÓNG BĂNG|m12 ĐỔI MÁU|m13 NGỤY TRANG|m14 THOÁT HIỂM|m15 TIỀN LÃI|m16 LỜI NGUYỀN|m17 PHẢN CHIẾU|m18 ĐỊNH MỆNH|m19 CUỒNG NỘ|m20 HỖN LOẠN|m21 XÚC XẮC ĐỊNH MỆNH"
last="l01 HỒI SINH|l02 VUA + TỐT|l03 VUA + MÃ|l04 VUA + TƯỢNG|l05 VUA + XE|l06 VUA + HẬU|l07 ĐỘI TÂN BINH|l08 KỴ BINH|l09 PHÒNG THỦ|l10 PHẢN CÔNG|l11 SONG MÃ|l12 SONG TƯỢNG|l13 SONG XE|l14 TIỂU ĐỘI|l15 ĐỘI HỖ TRỢ|l16 ĐỘI PHẢN CÔNG|l17 PHÒNG TUYẾN|l18 TAM QUÂN|l19 PHÁ VÂY|l20 ĐẾ VƯƠNG"
def art(pair,g):
    rid,name=pair; c={"o":CYAN,"m":(166,100,225),"l":(225,100,110)}[g]
    im=grad((768,1024),(8,12,20),tuple(max(0,x-40) for x in c)).convert("RGBA"); d=ImageDraw.Draw(im); cx=cy=384
    for rad in range(260,40,-30): d.ellipse((cx-rad,440-rad,cx+rad,440+rad),outline=c+(45,),width=3)
    n=int(rid[1:]); s=n%5
    if s==0: d.polygon([(cx,190),(cx+150,440),(cx,690),(cx-150,440)],outline=c+(220,),fill=c+(45,))
    elif s==1: d.line((180,680,588,240),fill=c+(210,),width=10); d.ellipse((330,360,438,468),outline=WHITE+(180,),width=5)
    elif s==2: d.arc((170,240,598,720),20,310,fill=c+(220,),width=10); d.line((384,220,384,690),fill=WHITE+(100,),width=3)
    elif s==3:
        for x in [240,384,528]: d.polygon([(x,270),(x+65,390),(x,510),(x-65,390)],outline=c+(200,),fill=c+(35,))
    else: d.regular_polygon((384,440,180),n_sides=6,rotation=30,fill=c+(45,),outline=c+(210,))
    d.text((52,70),rid.upper(),font=F(38,1),fill=WHITE+(220,)); fs=48
    while d.textbbox((0,0),name,font=F(fs,1))[2]>650 and fs>24: fs-=2
    tw=d.textbbox((0,0),name,font=F(fs,1))[2]; d.text(((768-tw)/2,790),name,font=F(fs,1),fill=WHITE+(255,)); d.text((52,930),"CHẤP TẤT",font=F(25,1),fill=c+(230,)); save(im,f"card-art/{rid}.png")
for group,data in [("o",opening),("m",mid),("l",last)]:
    for item in data.split("|"): art(item.split(" ",1),group)

print("Generated assets:",sum(1 for p in ROOT.rglob("*") if p.is_file()))
