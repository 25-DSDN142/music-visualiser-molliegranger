
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let laceImg;
let oliviaImg;
let mirrorImg;
let tapeImg;
let tapeCopyImg;

let firstRun = true;
let laceX = 0;
let bottomlaceX = 0;
 
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   if (firstRun) {
  laceImg = loadImage("lace-border.png");
  oliviaImg = loadImage("olivia.png")
  mirrorImg = loadImage("mirror.png")
  tapeImg = loadImage("tape.png")
  tapeCopyImg = loadImage("tapecopy.png")
  firstRun = false;
}
  background(236, 222, 255)
  //top lace
  if (laceImg) {
   laceX = (laceX + 2) % width;
  bottomlaceX = (bottomlaceX - 2 + width) % width;

  image(laceImg, laceX, 30, width, 40); 
  image(laceImg, laceX - width, 30, width, 40);

   //bottom lace
  push ();
  translate (0, height);
  scale(1,-1);
  image(laceImg, bottomlaceX, 30, width, 40);
  image(laceImg, bottomlaceX - width, 30, width, 40);
  pop ();
  }
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
  
   
 if (oliviaImg && mirrorImg){
   let bob = map (drum, 0,100, -10,10);

   noStroke();
   fill(204, 204, 190)
   ellipse(435, 695 + bob, 90, 120);
  
   image (oliviaImg, 380, 648 + bob, 100, 100);
   image (mirrorImg, 330, 630 + bob, 220, 220);
   }


}