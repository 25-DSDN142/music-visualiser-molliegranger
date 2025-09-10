
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let myImage;
let firstRun = true;
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   if (firstRun) {
  myImage = loadImage("lace-border.png"); // make sure filename matches exactly
  firstRun = false;
}
  background(236, 222, 255)
  if (myImage) {
  image(myImage, 0, 30, width, 40); 
}

  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
// changes 
   // vocal bar is red
   strokeWeight(0);
   fill(255);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(127, 80, 191);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(255);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(127, 80, 191);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(255);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(127, 80, 191);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(255);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(127, 80, 191);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(127, 80, 191);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}