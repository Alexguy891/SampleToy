let defaultSize = 20;
let clearButtonMinX = 10;
let clearButtonMaxX = 60;
let clearButtonMinY = 10;
let clearButtonMaxY = 35;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  fill(220);
  rect(10,10,50,25);
  fill(50);
  text("clear",22,25);
}

function mousePressed() {
  redColor = Math.floor(Math.random() * 256);
  blueColor = Math.floor(Math.random() * 256);
  greenColor = Math.floor(Math.random() * 256);
  
  shapeNumber = Math.floor(Math.random() * 2);
  
  if(mouseX > clearButtonMinX && mouseX < clearButtonMaxX && mouseY > clearButtonMinY && mouseY < clearButtonMaxY) {
    clear();
  } else {
    switch(shapeNumber) {
      case 0:
        fill(redColor, blueColor, greenColor);
        rect(mouseX, mouseY, defaultSize, defaultSize);
        break;
      case 1:
        fill(redColor, blueColor, greenColor);
        circle(mouseX, mouseY, defaultSize);
        break;
    }
  }
}