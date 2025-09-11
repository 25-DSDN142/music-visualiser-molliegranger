
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let laceImg;
let oliviaImg;
let mirrorImg;

let firstRun = true;
let laceX = 0;
let bottomlaceX = 0;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
   if (firstRun) {
  laceImg = loadImage("lace-border.png");
  oliviaImg = loadImage("olivia.png")
  mirrorImg = loadImage("mirror.png")
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

   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
   if (oliviaImg && mirrorImg){
   let bob = map (drum, 0,100, -10,10);

   image (oliviaImg, 190, 198 + bob, 140, 140);
   image (mirrorImg, 120, 180 + bob, 300, 300);

   }
 noStroke();
 ellipse(265, 270, 100, 150);
}