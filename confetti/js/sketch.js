let confettis = [];
let numConfetti = 100;

let backgroundHUE;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");

  for (let i = 0; i < numConfetti; i++) {
    confettis.push(new Confetti(width / 2, height / 2));
  }

  backgroundHUE = random(255);
  colorMode(HSB);
}

function draw() {
  background(backgroundHUE, 10, 190);

  for (let i = 0; i < confettis.length; i++) {
    confettis[i].update();
    confettis[i].display();
  }
}

class Confetti {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);

    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);

    this.hue = random(255);
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += 0.1;
    this.speedX *= 0.99;
  }
  display() {
    push();
    translate(this.x, this.y);

    fill(this.hue, 255, 255);
    noStroke();
    circle(0, 0, this.size);

    pop();
  }
}
