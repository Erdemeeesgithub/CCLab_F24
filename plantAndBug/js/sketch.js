let bugSound;
let bug1;
let plant1;

function preload() {
  bugSound = loadSound("sounds/8000__cfork__cf_fx_bloibb.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  bug1 = new Bug();
  plant1 = new Plant(width / 2, height / 2);
}

function draw() {
  background(220);

  bug1.update();
  bug1.display();
  plant1.update();
  plant1.display();
}

class Bug {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.sound = bugSound;
    this.speedX = random(-10, 10);
    this.speedY = random(-10, 10);
    this.moving = false;
  }
  update() {
    if (this.moving == true) {
      this.x += this.speedX;
      this.y += this.speedY;
    }

    //bounce
    if (this.x < 0 || this.x > width) {
      this.speedX = -this.speedX;
      this.shout();
    }
    if (this.y < 0 || this.y > height) {
      this.speedY = -this.speedY;
      this.shout();
    }
  }
  shout() {
    this.sound.play();
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(0);
    circle(0, 0, 2);
    pop();
  }
}

class Plant {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.plantHeight = 0;
    this.watered = false;
  }
  update() {
    if (this.watered == true) {
      if (this.plantHeight < 60) {
        this.plantHeight++;
      }
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    stroke("green");
    strokeWeight(10);
    line(0, -40, 0, -40 - this.plantHeight);

    fill("brown");
    noStroke();
    rect(-20, -40, 40, 40);

    fill("red");
    circle(0, 0, 5);
    pop();
  }
  checkClick() {
    console.log("was i clicked???s");
    if (
      mouseX > this.x - 20 &&
      mouseX < this.x + 20 &&
      mouseY > this.y - 40 &&
      mouseY < this.y
    ) {
      console.log("clicked");

      this.watered = true;
    }
  }
}

function mousePressed() {
  bug1.moving = true;
  plant1.checkClick();
}
