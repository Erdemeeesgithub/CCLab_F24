let myObstacles = [];
let myFly;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  for (let i = 0; i < 100; i++) {
    myObstacles.push(new Obstacle());
  }

  myFly = new Fly();
}

function draw() {
  background("#DB8780");
  for (let i = 0; i < myObstacles.length; i++) {
    myObstacles[i].update();
    myObstacles[i].display();
  }

  myFly.update();
  myFly.display();
}

class Obstacle {
  constructor() {
    // should begin just out of frame to the right
    this.x = random(width, 2 * width);
    this.y = random(0, height);
    // random y location
    // needs a negative speed (moving it to left)
    this.speedX = -1;

    //optional:
    // random size
    // random speed
    this.size = 40;
  }
  update() {
    this.x += this.speedX;

    if (this.x < -this.size) {
      this.x = width;
      this.y = random(0, height);
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    fill("#F7D6D0");
    noStroke();
    rect(0, 0, this.size, this.size);

    pop();
  }
}

class Fly {
  constructor() {
    this.x = width / 3;
    this.y = height / 2;

    this.speedY = 0;
    this.r = 3;
  }
  update() {
    this.speedY += 0.1;

    if (keyIsPressed == true && key == "w") {
      this.speedY -= 0.2;
    }
    this.y += this.speedY;

    if (this.y >= height - this.r) {
      this.y = height - this.r;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(0);
    circle(0, 0, this.r * 2);
    pop();
  }
}
