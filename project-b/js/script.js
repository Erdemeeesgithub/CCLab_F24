let cars = [];
const avatar1 = document.getElementById("avatar1");
let avatar1Img,
  avatar2Img,
  avatar3Img,
  avatar4Img,
  avatar5Img,
  avatar6Img,
  avatar7Img,
  avatar8Img,
  avatar9Img,
  avatar10Img;
let avatar1X, avatar1Y;
let avatar2X, avatar2Y;
let avatar3X, avatar3Y;
let avatar4X, avatar4Y;
let avatar5X, avatar5Y;
let avatar6X, avatar6Y;
let avatar7X, avatar7Y;
let avatar8X, avatar8Y;
let avatar9X, avatar9Y;
let avatar10X, avatar10Y;

let avatar1Speed,
  avatar2Speed,
  avatar3Speed,
  avatar4Speed,
  avatar5Speed,
  avatar6Speed,
  avatar7Speed,
  avatar8Speed,
  avatar9Speed,
  avatar10Speed;

let cloud, cloudSpeed, cloudX, cloudY;

function preload() {
  avatarImg = loadImage("assets/avatar3.png");
  avatar2Img = loadImage("assets/avatar4.png");
  avatar3Img = loadImage("assets/avatar5.png");
  avatar4Img = loadImage("assets/avatar6.png");
  avatar5Img = loadImage("assets/avatar7.png");
  avatar6Img = loadImage("assets/avatar8.png");
  avatar7Img = loadImage("assets/avatar9.png");
  avatar8Img = loadImage("assets/avatar10.png");
  avatar9Img = loadImage("assets/avatar11.png");
  avatar10Img = loadImage("assets/avatar12.png");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  cloud = document.getElementById("cloud");
  // cars = new Car();

  for (let i = 0; i < 9; i++) {
    cars.push(new Car());
  }

  cloudX = -50;
  cloudY = height - 100;

  avatar1X = -50;
  avatar1Y = height - 100;

  avatar2X = width + 50;
  avatar2Y = height - 110;

  avatar3X = -50;
  avatar3Y = height - 100;

  avatar4X = width + 50;
  avatar4Y = height - 110;

  avatar5X = -50;
  avatar5Y = height - 100;

  avatar6X = width + 50;
  avatar6Y = height - 110;

  avatar7X = -50;
  avatar7Y = height - 100;

  avatar8X = width + 50;
  avatar8Y = height - 110;

  avatar9X = -50;
  avatar9Y = height - 100;

  avatar10X = width + 50;
  avatar10Y = height - 110;

  avatar1Speed = random(1, 3);
  avatar2Speed = random(1, 3);
  avatar3Speed = random(1, 3);
  avatar4Speed = random(1, 3);
  avatar5Speed = random(1, 3);
  avatar6Speed = random(1, 3);
  avatar7Speed = random(1, 3);
  avatar8Speed = random(1, 3);
  avatar9Speed = random(1, 3);
  avatar10Speed = random(1, 3);
  cloudSpeed = random(1, 3);
}

function draw() {
  // background("#8C96A1");

  clear();
  fill("#696f6f");
  noStroke();
  rect(0, 730, 1900, 300);

  for (let car of cars) {
    car.update();
    car.display();
  }

  drawAvatar1();
  drawAvatar2();
  drawAvatar3();
  drawAvatar4();
  drawAvatar5();
  drawAvatar6();
  drawAvatar7();
  drawAvatar8();
  drawAvatar9();
  drawAvatar10();
  cloud();
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
      if (this.y > 600) {
        this.y = 600;
      }
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

function cloud() {
  imageMode(CENTER);
  image(avatarImg, avatar1X, avatar1Y, 130, 130);

  avatar1X += avatar1Speed;

  if (avatar1X > width + 50) {
    avatar1X = -50;
  }
}
function drawAvatar1() {
  imageMode(CENTER);
  image(avatarImg, avatar1X, avatar1Y, 130, 130);

  avatar1X += avatar1Speed;

  if (avatar1X > width + 50) {
    avatar1X = -50;
  }
}
function drawAvatar2() {
  imageMode(CENTER);
  image(avatar2Img, avatar2X, avatar2Y, 150, 150);

  avatar2X -= avatar2Speed;

  if (avatar2X < -50) {
    avatar2X = width + 50;
  }
}
function drawAvatar3() {
  imageMode(CENTER);
  image(avatar3Img, avatar3X, avatar3Y, 120, 120);

  avatar3X += avatar3Speed;

  if (avatar3X > width + 50) {
    avatar3X = -50;
  }
}
function drawAvatar4() {
  imageMode(CENTER);
  image(avatar4Img, avatar4X, avatar4Y, 150, 150);

  avatar4X -= avatar4Speed;

  if (avatar4X < -50) {
    avatar4X = width + 50;
  }
}
function drawAvatar5() {
  imageMode(CENTER);
  image(avatar5Img, avatar5X, avatar5Y, 110, 110);

  avatar5X += avatar5Speed;

  if (avatar5X > width + 50) {
    avatar5X = -50;
  }
}
function drawAvatar6() {
  imageMode(CENTER);
  image(avatar6Img, avatar6X, avatar6Y, 150, 150);

  avatar6X -= avatar6Speed;

  if (avatar6X < -50) {
    avatar6X = width + 50;
  }
}
function drawAvatar7() {
  imageMode(CENTER);
  image(avatar7Img, avatar7X, avatar7Y, 100, 100);

  avatar7X += avatar7Speed;

  if (avatar7X > width + 50) {
    avatar7X = -50;
  }
}
function drawAvatar8() {
  imageMode(CENTER);
  image(avatar8Img, avatar8X, avatar8Y, 150, 150);

  avatar8X -= avatar8Speed;

  if (avatar8X < -50) {
    avatar8X = width + 50;
  }
}
function drawAvatar9() {
  imageMode(CENTER);
  image(avatar9Img, avatar9X, avatar9Y, 120, 120);

  avatar9X += avatar9Speed;

  if (avatar9X > width + 50) {
    avatar9X = -50;
  }
}
function drawAvatar10() {
  imageMode(CENTER);
  image(avatar10Img, avatar10X, avatar10Y, 140, 140);

  avatar10X -= avatar10Speed;

  if (avatar10X < -50) {
    avatar10X = width + 50;
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

window.onload = function () {
  draw();
};
