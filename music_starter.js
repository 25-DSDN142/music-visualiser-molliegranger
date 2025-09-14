
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let laceImg;
let oliviamirrorImg;
let tapeImg;
let tapeCopyImg;
let paperImg;
let cherubImg;
let lacecornerImg;
let starsBackgroundImg;
let bowImg;
let bowcopyImg;
let star1Img;
let star2Img;
let star3Img;

let firstRun = true;
let laceX = 0;
let bottomlaceX = 0;
let dropY = 0;
let dropY2 = 150;
let dropY3 = 300;
let starAngle = 0

function draw_one_frame(words, vocal, drum, bass, other, counter) {
   if (firstRun) {
  laceImg = loadImage("lace-border.png");
  oliviamirrorImg = loadImage("oliviainmirror.png")
  tapeImg = loadImage("tape.png")
  tapeCopyImg = loadImage("tapecopy.png")
  paperImg = loadImage("Papertexture.png");
  cherubImg = loadImage("cherub.png");
  lacecornerImg = loadImage("lacecorner.png")
  starsBackgroundImg = loadImage("starsbackground.png")
  bowImg = loadImage("bow.png")
  bowcopyImg = loadImage("bowcopy.png")
  star1Img = loadImage("star1.png")
  star2Img = loadImage("star2.png")
  star3Img = loadImage("star3.png")


  firstRun = false;
}
  background(236, 222, 255)
  
  if (paperImg) {
  tint(255, 50); 
  image(paperImg, 0, 0, width, height); 
  noTint(); 
}
 
if (starsBackgroundImg) {
image(starsBackgroundImg, 0, 0, width, height); 
}

noStroke()

if (lacecornerImg) {
  image(lacecornerImg, 0,0, 540, 960);
}

// tears
  fill(160, 80,200);
  
  triangle(30, dropY, 22, dropY + 20, 38, dropY + 20);
 ellipse(30, dropY + 20, 16, 16);

  triangle(50, dropY2, 42, dropY2 + 20, 58, dropY2 + 20);
 ellipse(50, dropY2 + 20, 16, 16);

 triangle(70, dropY3, 62, dropY3 + 20, 78, dropY3 + 20);
 ellipse(70, dropY3 + 20, 16, 16);

 dropY = dropY + drum / 5;
 dropY2 = dropY2 + drum / 5.6;
 dropY3 = dropY3 + drum / 5.3;

 if (dropY > 885) dropY = 0;
 if (dropY2 > 885) dropY2 = 0;
 if (dropY3 > 885) dropY3 = 0;

//tears puddle
ellipse(60, 895, 80, 50);
ellipse(30, 890, 40, 25);
ellipse(90, 890, 40, 25);
ellipse(50, 875, 35, 20);
ellipse(70, 875, 35, 20);
ellipse(30, 905, 35, 15);
ellipse(90, 905, 35, 15);
//top lace
  if (laceImg) {
   laceX = (laceX + 2) % width;
  bottomlaceX = (bottomlaceX - 2 + width) % width;

  image(laceImg, laceX, 0, width, 40); 
  image(laceImg, laceX - width, 0, width, 40);

   //bottom lace
  push ();
  translate (0, height);
  scale(1,-1);
  image(laceImg, bottomlaceX, 0, width, 40);
  image(laceImg, bottomlaceX - width, 0, width, 40);
  pop ();
  }
//text
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;

// changes 
  fill(186, 162, 219)
  quad(95, 205, 445, 205, 445, 395, 95, 395);
  stroke (150,120,200);
  strokeWeight (1);
  line(95, 255, 445, 255);
  line(95, 285, 445, 285);
  line(95, 320, 445, 320);
  line(95, 345, 445, 345);
  line(95, 375, 445, 375);

  if (tapeImg && tapeCopyImg){
   image (tapeImg, 70, 170, 100, 100);
   image (tapeCopyImg, 370, 175, 100, 100);
  }

// display "words"
  fill(127, 80, 191)
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
  
   
 if (oliviamirrorImg){
  let bob = map(drum, 0, 100, -10, 10);
  image(oliviamirrorImg, 240, 470 + bob, 300, 300); 
}

if (cherubImg) {
   let bob = map(drum, 0, 100, -10, 10);
  image(cherubImg, 210, 650 + bob, 150, 150); 
}

if (bowImg && bowcopyImg) {
   let bob = map(drum, 0, 100, -10, 10);
  image(bowImg, 460, 330 + bob, 80, 80); 
  image(bowcopyImg, 410, 390 + bob, 80, 80); 
}

if (star1Img && star2Img && star3Img) {
   let bob = map(drum, 0, 100, -10, 10);
  image(star1Img, 170, 725 + bob, 50, 50); 
  image(star2Img, 115, 745 + bob, 50, 50); 
  image(star3Img, 90, 790 + bob, 45, 45); 
}

}