let bugSound;
let bug1;

function preload() {
  bugSound = loadSound("sounds/8000__cfork__cf_fx_bloibb.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  bug1 = new Bug();
}

function draw() {
  background(220);
  bug1.display();
}

function mousePressed() {
  bugSound.play();
}

class Bug {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.sound = bugSound;
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(0);
    circle(0, 0, 2);
    pop();
  }
}
