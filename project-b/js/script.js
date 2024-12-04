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
    this.x = random(-100, 0); // Start slightly offscreen to the left
    this.y = random(height); // Random vertical position
    this.speedX = random(1, 5); // Random horizontal speed
    this.speedY = random(-1, 1); // Random vertical speed
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

// Hover-to-redirect functionality with countdown
const avatar = document.getElementById("avatar2");
const text = document.getElementById("text2");
let hoverTimeout;
let countdownTimeout;
let countdownTime = 5; // Countdown starting at 5 seconds

// When the user hovers over the avatar
avatar.addEventListener("mouseover", () => {
  text.style.opacity = 1; // Show the text
  countdownTime = 5; // Reset the countdown to 5 seconds
  text.textContent = `You will regret this in ${countdownTime}`; // Display countdown

  // Update countdown every second
  countdownTimeout = setInterval(() => {
    countdownTime--;
    text.textContent = `You will regret this in ${countdownTime}`; // Update countdown text
    if (countdownTime <= 0) {
      clearInterval(countdownTimeout); // Stop the countdown when it reaches 0
      window.location.href = "new.html";
    }
  }, 1000); // Update every second

  // Trigger the page change after 5 seconds
  hoverTimeout = setTimeout(() => {
    window.location.href = window.location.href = "new.html";
  }, 5000);
});

// When the user stops hovering before 5 seconds
avatar.addEventListener("mouseout", () => {
  clearTimeout(hoverTimeout); // Cancel the page change
  clearInterval(countdownTimeout); // Stop the countdown
  text.style.opacity = 0; // Hide the text when mouse is out
});
