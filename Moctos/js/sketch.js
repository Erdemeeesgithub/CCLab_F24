// Moctos
// Discovered by Teenagers in Amazon(Tim Zortov Scientist WATCHING THRU TIKTOK)
// No family member
// Both water and land
// Red, snake like eye, 8 long legs like octopus, snake like tongue.
// He loves bubbles and you will find bubbles all around the swamp. Moctos hates birds.
// Interact by throwing a rock at things

// let xArray = [];
// let yArray = [];  let cnv=createCanvas(800, 500);

// let initialSizeOfArray = 10;
let numBeetles = 10;
let beetleX = new Array(numBeetles);
let beetleY = new Array(numBeetles);
let beetleXSpeed = new Array(numBeetles);
let beetleYSpeed = new Array(numBeetles);
let showRectangle = false;

let screenBlack = false;

let boxX = 250;
let boxY = 20;
let boxWidth = 350;
let boxHeight = 460;
let strokeSize = 20;

let camera;
let cart;
let profile;
let comment;
let share;
let pen;
let clip;

let numBubbles = 10;
let bubbleX = new Array(numBubbles);
let bubbleY = new Array(numBubbles);
let bubbleSpeed = new Array(numBubbles);
let bubbleSize = new Array(numBubbles);
let bubblePopped = new Array(numBubbles);

let moctosX = 400;
let moctosY = 400;
let moctosSize = 50;
let moctosSpeed = 1;
let moctosTargetSpeed = 2;
let moctosDirection = 0;
let changeDirectionTime = 60;
let framesUntilChange = changeDirectionTime;
let targetX = null;

let oscillationAmplitude = 5;
let oscillationSpeed = 0.05;
let baseYPosition = moctosY;

let birdX = 250;
let birdY = 50;
let birdTargetY = 215;
let birdSpeed = 1;
let birdFlying = true;
let birdSitting = false;
let birdInitialX = birdX;

function setup() {
  let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container")
  cart = loadImage("cart.jpg");
  profile = loadImage("profile.png");
  comment = loadImage("comment-44.png");
  share = loadImage("share.png");
  camera = loadImage("camera.webp")
  pen = loadImage("pen.png")
  clip = loadImage("clip.png")

  for (let i = 0; i < numBeetles; i++) {
    beetleX[i] = random(boxX + strokeSize, boxX + boxWidth - strokeSize);
    beetleY[i] = random(boxY + strokeSize, boxY + boxHeight - strokeSize);
    beetleXSpeed[i] = random(-2, 2);
    beetleYSpeed[i] = random(-2, 2);
  }

  for (let i = 0; i < numBubbles; i++) {
    resetBubble(i);
  }
}

function draw() {
  background("beige");

  strokeWeight(strokeSize); // phone
  stroke(0);
  fill(screenBlack ? "black" : "white");
  rect(boxX, boxY, 350, 460);

  noStroke();

  fill("#3e535c"); // sky
  rect(260, 30, 330, 270);

  fill("#023020"); // mountains
  ellipse(515, 300, 150, 100);
  ellipse(450, 300, 180, 150);
  fill("#899499"); // rocks
  ellipse(350, 300, 30, 30);
  ellipse(550, 300, 40, 30);
  fill("#475c4a");
  rect(260, 300, 330, 170); // lake

  fill("#a6b96f"); // frog sitting plant
  ellipse(310, 340, 50, 30);
  ellipse(350, 380, 50, 30);
  ellipse(550, 350, 50, 30);

  fill("white"); // moon
  circle(500, 75, 60);

  fill("#D3D3D3");
  ellipse(320, 80, 40, 20); // cloud 1
  ellipse(340, 80, 40, 20);
  ellipse(330, 70, 30, 20);

  ellipse(500, 100, 40, 20); // cloud 2
  ellipse(520, 100, 40, 20);
  ellipse(510, 90, 30, 20);

  fill("green"); // grass
  strokeWeight(1);
  beginShape();
  vertex(310, 310);
  bezierVertex(310, 190, 300, 300, 310, 310);
  endShape();

  beginShape(); // grass
  vertex(310, 310);
  bezierVertex(350, 100, 320, 320, 320, 310);
  endShape();

  ellipse(550, 270, 9, 80);

  fill("#7B3F00"); // on top of grass
  ellipse(330, 210, 20, 50);
  ellipse(305, 240, 15, 40);
  ellipse(550, 220, 15, 40);

  // bird
  if (birdFlying) {
    if (birdY < birdTargetY) {
      birdY += birdSpeed;
      birdX += 0.5;
    } else {
      birdFlying = false;
      birdSitting = true;
    }
  }
  drawBird(birdX, birdY);

  moveMoctos();

  drawMoctosShadow(moctosX, moctosY);

  for (let i = 0; i < numBubbles; i++) {
    drawAndMoveBubble(i);
  }

  for (let i = 0; i < numBeetles; i++) {
    beetleX[i] += beetleXSpeed[i];
    beetleY[i] += beetleYSpeed[i];

    if (
      beetleX[i] > boxX + boxWidth - strokeSize ||
      beetleX[i] < boxX + strokeSize
    ) {
      beetleXSpeed[i] *= -1;
    }
    if (
      beetleY[i] > boxY + boxHeight - strokeSize ||
      beetleY[i] < boxY + strokeSize
    ) {
      beetleYSpeed[i] *= -1;
    }

    // beetles
    fill(255, 255, 51);
    ellipse(beetleX[i], beetleY[i], 10, 5);
  }

  if (showRectangle) {
    fill(0);
    rect(250, 10, 350, 460);
  }
  fill("black"); // banner background
  rect(250, 440, 340, 40);
  fill("white");
  circle(425, 465, 30);

  stroke(5); // plus nine
  strokeWeight(3);
  line(415, 465, 435, 465);
  line(425, 455, 425, 475);

  image(cart, 310, 440, 40, 50); // cart icon
  image(profile, 500, 445, 40, 40); // profile icon

  textSize(10);

  fill("black"); // profile background
  stroke("#eeeeee");
  strokeWeight(1);
  circle(560, 270, 40);
  image(comment, 545, 310, 30, 30);
  text("20M", 560, 350);
  image(share, 550, 370, 20, 20);
  noStroke();
  text("10.5M", 560, 405);
  
  //Table supplies
  image(camera, -100,-50, 300,300)
  image(pen,630,200, 250, 250)
  image (clip, 110, 350, 100, 100)
}

function resetBubble(index) {
  bubbleX[index] = random(
    boxX + strokeSize + 10,
    boxX + boxWidth - strokeSize - 10
  );
  bubbleY[index] = random(boxY + boxHeight - 40, boxY + boxHeight - 20);
  bubbleSpeed[index] = random(0.2, 1);
  bubbleSize[index] = random(10, 30);
  bubblePopped[index] = false;
}

function drawAndMoveBubble(index) {
  if (!bubblePopped[index]) {
    fill("#e7feff");
    noStroke();
    ellipse(
      bubbleX[index],
      bubbleY[index],
      bubbleSize[index],
      bubbleSize[index]
    );
    bubbleY[index] -= bubbleSpeed[index];

    if (bubbleY[index] < boxY + strokeSize) {
      resetBubble(index);
    }
  }
}

function drawMoctosShadow(x, y) {
  fill(0, 100);
  noStroke();

  ellipse(x, y + 10, moctosSize, moctosSize / 2); // Main body shadow
  for (let i = -2; i <= 2; i++) {
    // tentacle shadows
    ellipse(
      x + i * 15,
      y + 20 + sin(frameCount * 0.1 + i) * 10,
      moctosSize / 2,
      moctosSize / 4
    );
  }
}

function moveMoctos() {
  if (targetX !== null) {
    if (moctosX < targetX) {
      moctosX += moctosSpeed;
    } else if (moctosX > targetX) {
      moctosX -= moctosSpeed;
    }

    if (abs(moctosX - targetX) < moctosTargetSpeed) {
      popBubble();
      targetX = null;
      moctosSpeed = 1;
    }
  } else {
    if (framesUntilChange <= 0) {
      moctosDirection = random(TWO_PI);
      framesUntilChange = changeDirectionTime;
    }
    framesUntilChange--;

    moctosX += cos(moctosDirection) * moctosSpeed;
    moctosY =
      baseYPosition + sin(frameCount * oscillationSpeed) * oscillationAmplitude;
  }

  if (moctosX < boxX + strokeSize) moctosX = boxX + strokeSize;
  if (moctosX > boxX + boxWidth - strokeSize)
    moctosX = boxX + boxWidth - strokeSize;
  if (moctosY < boxY + strokeSize) moctosY = boxY + strokeSize;
  if (moctosY > boxY + boxHeight - strokeSize)
    moctosY = boxY + boxHeight - strokeSize;
}

function popBubble() {
  for (let i = 0; i < numBubbles; i++) {
    if (bubbleX[i] === targetX) {
      bubblePopped[i] = true;
      break;
    }
  }
}

function mousePressed() {
  for (let i = 0; i < numBubbles; i++) {
    let d = dist(mouseX, mouseY, bubbleX[i], bubbleY[i]);
    if (d < bubbleSize[i] / 2 && !bubblePopped[i]) {
      targetX = bubbleX[i];
      moctosSpeed = moctosTargetSpeed;
      break;
    }
  }

  if (
    mouseX > birdX - 20 &&
    mouseX < birdX + 20 &&
    mouseY > birdY - 20 &&
    mouseY < birdY + 20
  ) {
    showRectangle = true;
  }

  let dBird = dist(mouseX, mouseY, birdX, birdY);
  if (birdSitting && dBird < 30) {
    screenBlack = true;
  }
}

function drawBird(x, y) {
  textSize(30);
  textAlign(CENTER);
  fill(0);
  text("🐦", x, y);
}
