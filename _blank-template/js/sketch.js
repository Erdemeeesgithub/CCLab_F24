function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");

  taxiInstance = newTaxi(50, 300, 0.5);
}

function draw() {
  background(220);

  taxiInstance.display();
}

class Taxi {
  //inside a class we list
  // all its functions/method

  // one method is special, because
  // (1) must exist in EVERY CLASS
  // (2) it contains all the class's properties
  constructor(startX, startY, s) {
    this.x = startX;
    this.y = startY;
    this.scaleFactor = s;
  }

  display() {``
    push();
    translate(this.x, this.y);
    scale(this.scaleFactor)

    noStroke();
    fill(240, 220, 60);

    // base:
    rect(-50, -50, 100, 30);
    // top"
    rect(-25, -70, 50, 20);
    // wheel 1:
    // drawWheel(-30, -15);
    // wheel 2:
    // drawWheel( 30, -15);

    // just to see origin
    // of translation matrix:
    fill("red");
    circle(0, 0, 5);
    pop();
  }
}

drawWheel(x, y){
  push();
  translate(x, y);
  
    noStroke();
    fill(0);
    // circle(0,0,30);
    ellipse(0,0,28, 32);
  
  pop();
}