let numofSnow = 100;
let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  for (let i = 0; i < numofSnow; i++) {
    particles[i] = new Particle(random(width), random(-100, -10));
  }
}

function draw() {
  background(50);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}

class Particle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.dia = random(5, 15);
    this.color = color(255);
    this.speed = random(1, 3);
  }
  update() {
    this.y += this.speed;
    this.x += random(-1, 1);

    if (this.y > height) {
      this.y = random(-100, -10);
      this.x = random(width);
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(this.color);
    noStroke();
    ellipse(0, 0, this.dia);
    pop();
  }
}
