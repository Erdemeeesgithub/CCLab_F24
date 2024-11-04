/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new DoodleBob(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class DoodleBob {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = 80;
    this.angle = 0;
    this.armSwing = 0;
    this.swingSpeed = 0.1;
    this.startX = startX;
    this.startY = startY;

    this.targetX = this.startX + random(-100, 100);
    this.targetY = this.startY + random(-100, 100);
  }

  update() {
    this.armSwing = sin(this.angle) * 20;
    this.angle += this.swingSpeed;

    if (frameCount % 30 === 0) {
      this.targetX = this.startX + random(-100, 100);
      this.targetY = this.startY + random(-100, 100);
    }

    this.x = lerp(this.x, this.targetX, 0.1);
    this.y = lerp(this.y, this.targetY, 0.1);
  }

  display() {
    push();
    translate(this.x, this.y);

    fill(255);
    stroke(0);
    rectMode(CENTER);
    rect(0, 0, this.size, this.size);

    fill(0);
    ellipse(-20, -20, 10, 10);
    ellipse(20, -20, 10, 10);

    line(-15, 20, 15, 20);

    stroke(255);
    strokeWeight(3);
    line(-this.size / 2, 0, -this.size / 2 - this.armSwing, -20);
    line(this.size / 2, 0, this.size / 2 + this.armSwing, -20);

    stroke(255);
    line(-20, this.size / 2, -15, this.size / 2 + 20);
    line(20, this.size / 2, 25, this.size / 2 + 20);

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

// /*
// GOAL:
// The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together.

// RULES:
// For this to work you need to follow one rule:
//   - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
//   - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
//   - Your dancer will always be initialized receiving two arguments:
//     - startX (currently the horizontal center of the canvas)
//     - startY (currently the vertical center of the canvas)
//   beside these, please don't add more parameters into the constructor function
//   - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels.
// */
