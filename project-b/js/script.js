let car1;
let car2;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  car1 = new Car();
  car2 = new Car();
}

function draw() {
  background(0);
  car1.update();
  car1.display();
  car2.update();
  car2.display();
}

class Car {
  constructor() {
    this.x = width;
    this.y = height / 2;
    this.speedX = random(0, 5);
    this.speedY = random(-1, 1);
    this.moving = true;
  }
  update() {
    if (this.moving == true) {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    // if (this.x >= windowWidth + 40) {
    //   this.x = -40;
    // }
    // if (this.y >= windowHeight) {
    //   this.y = 0;
    // }
    if (this.x > windowWidth) {
      this.x = 0;
    }
    if (this.y >= windowHeight) {
      this.y = 0;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    fill("gray");
    noStroke();
    ellipse(0, 0, 80, 40);
    stroke(1);
    ellipse(-20, 0, 60, 15);
    fill("white");
    circle(30, 0, 10);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
