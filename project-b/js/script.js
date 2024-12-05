let cars = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  // cars = new Car();

  for (let i = 0; i < 5; i++) {
    cars.push(new Car());
  }
}

function draw() {
  // background("#8C96A1");

  clear();
  fill("#696f6f");
  noStroke();
  rect(0, 750, 1900, 300);

  for (let car of cars) {
    car.update();
    car.display();
  }
}

class Car {
  constructor() {
    this.x = width;
    this.y = height / 2;
    this.speedX = random(0, 5);
    this.speedY = random(-1, 1);
    this.moving = true;
    this.reset();
  }
  update() {
    if (this.moving == true) {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    if (this.x > width + 30 || this.y > height + 30 || this.y < 30) {
      this.reset();
    }
  }
  reset() {
    this.x = random(-100, 0);
    this.y = random(height);
    this.speedX = random(1, 5);
    this.speedY = random(-1, 1);
  }
  display() {
    push();
    translate(this.x, this.y);
    fill("#301934");
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

const avatar = document.getElementById("avatar2");
const text = document.getElementById("text2");
let hoverTime;
let countdownTimeout;
let countdownTime = 5;

avatar.addEventListener("mouseover", () => {
  text.style.opacity = 1;
  countdownTime = 5;
  text.textContent = `You will regret this in ${countdownTime}`;

  countdownTimeout = setInterval(() => {
    countdownTime--;
    text.textContent = ` ${countdownTime}`;
    if (countdownTime <= 0) {
      clearInterval(countdownTimeout);
      window.location.href = "new.html";
    }
  }, 1000);

  hoverTime = setTimeout(() => {
    window.location.href = window.location.href = "new.html";
  }, 5000);
});

// avatar.addEventListener("mouseout", () => {
//   clearTimeout(hoverTime);
//   clearInterval(countdownTimeout); // Stop the countdown
//   text.style.opacity = 0; // Hide the text when mouse is out
// });
