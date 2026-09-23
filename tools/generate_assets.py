from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
import random
R=Path("assets"); R.mkdir(exist_ok=True)
FONT="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
def f(n): return ImageFont.truetype(FONT,n)
P={"navy":(20,55,115),"blue":(44,132,235),"sky":(88,195,255),"cyan":(65,220,230),"green":(82,210,112),"purple":(154,93,235),"pink":(244,94,160),"orange":(255,173,65),"yellow":(255,215,72),"white":(245,249,255),"dark":(10,25,58)}
RAR={"common":(92,184,245),"rare":(72,125,240),"epic":(161,94,235),"legendary":(255,170,55),"mythic":(245,82,126)}
def save(im,p):
 p=R/p;p.parent.mkdir(parents=True,exist_ok=True);im.save(p)
def bg(w,h,a,b):
 im=Image.new("RGB",(w,h));d=ImageDraw.Draw(im)
 for y in range(h):
  t=y/(h-1);c=tuple(int(a[i]*(1-t)+b[i]*t) for i in range(3));d.line((0,y,w,y),fill=c)
 for x,y in [(80,90),(350,65),(650,120),(930,75),(1200,130)]:
  for dx,dy,r in [(-35,10,28),(0,0,38),(38,10,27),(12,25,30)]:d.ellipse((x+dx-r,y+dy-r,x+dx+r,y+dy+r),fill=(245,252,255))
 for x,y in [(170,720),(620,650),(1060,700)]:
  d.polygon([(x-90,y),(x+90,y),(x+45,y+80),(x-45,y+80)],fill=(48,115,180));d.rectangle((x-75,y-18,x+75,y+12),fill=(75,195,105))
 return im
save(bg(1280,760,(50,155,245),(205,240,255)),"background/bg-main.jpg")
save(bg(900,650,(32,105,205),(95,185,245)),"background/bg-card.jpg")
save(bg(900,650,(35,95,190),(72,145,225)),"background/bg-modal.jpg")
tex=Image.new("RGBA",(128,128),(0,0,0,0));d=ImageDraw.Draw(tex)
for x,y in [(12,18),(64,42),(102,95),(28,106),(87,12)]:d.rectangle((x,y,x+3,y+3),fill=(255,255,255,35))
save(tex,"background/texture.png")
im=Image.new("RGBA",(620,150),(0,0,0,0));d=ImageDraw.Draw(im);d.text((20,18),"♞",font=f(90),fill=P["yellow"],stroke_width=3,stroke_fill=P["dark"]);d.text((125,20),"CHẤP TẤT",font=f(55),fill=P["white"],stroke_width=3,stroke_fill=P["navy"]);d.text((128,82),"LÁ ĐỊNH MỆNH",font=f(18),fill=P["yellow"]);save(im,"logo/logo.png");save(im,"logo/logo-white.png")
im=Image.new("RGBA",(128,128),(0,0,0,0));d=ImageDraw.Draw(im);d.rounded_rectangle((6,6,122,122),18,fill=P["blue"],outline=P["yellow"],width=5);d.text((32,10),"♞",font=f(70),fill=P["white"]);save(im,"logo/favicon.png")
for name,c in RAR.items():
 im=Image.new("RGBA",(384,512),(0,0,0,0));d=ImageDraw.Draw(im);d.rounded_rectangle((8,8,376,504),28,fill=(20,55,115,235),outline=c,width=8);d.rounded_rectangle((24,24,360,488),20,outline=(255,255,255,90),width=3);save(im,f"cards/card-{name}.png")
im=Image.new("RGBA",(384,512),(0,0,0,0));d=ImageDraw.Draw(im);d.rounded_rectangle((8,8,376,504),28,fill=P["navy"],outline=P["yellow"],width=8);d.rounded_rectangle((25,25,359,487),20,fill=(30,90,170),outline=P["cyan"],width=4)
for r in [35,60,85]:d.ellipse((192-r,256-r,192+r,256+r),outline=P["yellow"],width=4)
d.text((132,190),"♞",font=f(95),fill=P["white"]);d.text((105,320),"CHẤP TẤT",font=f(30),fill=P["yellow"]);save(im,"cards/card-back.png");save(im,"cards/card-frame.png")
for slug,sym,label,c in [("handicap","♟","CHẤP",P["green"]),("opening","♞","KHAI",P["blue"]),("midgame","♜","TRUNG",P["purple"]),("last-chance","♛","CUỐI",P["orange"])]:
 im=Image.new("RGBA",(128,128),(0,0,0,0));d=ImageDraw.Draw(im);d.rounded_rectangle((5,5,123,123),18,fill=P["navy"],outline=c,width=5);d.text((38,9),sym,font=f(58),fill=P["white"]);d.text((31,82),label,font=f(15),fill=c);save(im,f"deck-icons/icon-{slug}.png")
for slug,c in [("white",P["white"]),("black",(25,35,55))]:
 im=Image.new("RGBA",(128,128),(0,0,0,0));d=ImageDraw.Draw(im);d.ellipse((7,7,121,121),fill=P["blue"],outline=P["yellow"],width=4);d.text((37,18),"♟",font=f(66),fill=c,stroke_width=2,stroke_fill=P["navy"]);save(im,f"player/player-{slug}.png")
spots={1:[(64,64)],2:[(38,38),(90,90)],3:[(38,38),(64,64),(90,90)],4:[(38,38),(90,38),(38,90),(90,90)],5:[(38,38),(90,38),(64,64),(38,90),(90,90)],6:[(38,34),(90,34),(38,64),(90,64),(38,94),(90,94)]}
for n,ps in spots.items():
 im=Image.new("RGBA",(128,128),(0,0,0,0));d=ImageDraw.Draw(im);d.rounded_rectangle((8,8,120,120),18,fill=P["white"],outline=P["blue"],width=5)
 for x,y in ps:d.rectangle((x-7,y-7,x+7,y+7),fill=P["navy"])
 save(im,f"dice/dice-{n}.png")
for name,c in RAR.items():
 im=Image.new("RGBA",(128,128),(0,0,0,0));d=ImageDraw.Draw(im);d.polygon([(64,7),(121,64),(64,121),(7,64)],fill=c,outline=P["white"]);d.text((45,37),"✦",font=f(38),fill=P["white"]);save(im,f"rarity/rarity-{name}.png")
for slug,sym,c in [("close","×",P["pink"]),("info","i",P["cyan"]),("history","↺",P["yellow"]),("card","▣",P["white"]),("refresh","⟳",P["cyan"])]:
 im=Image.new("RGBA",(96,96),(0,0,0,0));d=ImageDraw.Draw(im);d.rounded_rectangle((5,5,91,91),16,fill=P["navy"],outline=c,width=4);d.text((28,13),sym,font=f(52),fill=P["white"]);save(im,f"icons/icon-{slug}.png")
random.seed(23)
cards=[f"o{i:02d}" for i in range(1,21)]+[f"m{i:02d}" for i in range(1,22)]+[f"l{i:02d}" for i in range(1,21)]
for i,cid in enumerate(cards):
 base={"o":P["blue"],"m":P["purple"],"l":P["orange"]}[cid[0]];accent=[P["yellow"],P["cyan"],P["pink"],P["green"],P["white"]][i%5]
 im=Image.new("RGBA",(384,512),(16,48,105,255));d=ImageDraw.Draw(im)
 for _ in range(12):
  x=random.randrange(24,360);y=random.randrange(60,430);s=random.choice([8,12,18]);d.rectangle((x,y,x+s,y+s),fill=accent+(random.randrange(100,230),))
 k=i%6
 if k==0:d.polygon([(192,70),(312,256),(192,442),(72,256)],fill=base+(170,),outline=accent+(255,))
 elif k==1:d.ellipse((80,110,304,334),fill=base+(180,),outline=accent+(255,),width=10);d.rectangle((168,158,216,376),fill=accent+(220,))
 elif k==2:d.polygon([(192,55),(328,385),(56,385)],fill=base+(150,),outline=accent+(255,))
 elif k==3:d.rectangle((96,105,288,400),fill=base+(170,),outline=accent+(255,),width=10);d.rectangle((152,160,232,320),fill=accent+(180,))
 elif k==4:d.arc((48,70,336,440),20,320,fill=accent+(255,),width=14);d.line((192,100,192,410),fill=base+(255,),width=14)
 else:d.regular_polygon((192,256,150),n_sides=6,rotation=30,fill=base+(160,),outline=accent+(255,))
 d.text((28,24),cid.upper(),font=f(30),fill=P["white"]);save(im,f"card-art/{cid}.png")
print("Generated 97 simplified pixel-art assets.")
