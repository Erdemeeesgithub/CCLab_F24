let cloud, cloudSpeed, cloudX, cloudY;
let cloud2, cloud2Speed, cloud2X, cloud2Y;
let cloud3, cloud3Speed, cloud3X, cloud3Y;
let mountain, mountainX, mountainY;
let sun, sunX, sunY;
let tree,
  treeX,
  treeY,
  tree2,
  tree2X,
  tree2Y,
  tree3,
  tree3X,
  tree3Y,
  tree4,
  tree4X,
  tree4Y,
  tree5,
  tree5X,
  tree5Y;
let river, riverX, riverY;
let rock, rockX, rockY;
let chicken, chickenM, chickenX, chickenY, chickenMX, chickenMY;
let currentAvatar = 1;
let currentAvatar1 = 1;
let cow, cowX, cowY, beef, beefX, beefY;
let box, boxX, boxY;
let backgroundMusic;

function preload() {
  cloudImg = loadImage("assets/cloud.webp");
  mountainImg = loadImage("assets/mountain.png");
  sunImg = loadImage("assets/sun.png");
  treeImg = loadImage("assets/tree.png");
  riverImg = loadImage("assets/river.png");
  rockImg = loadImage("assets/rock.webp");
  chichkenImg = loadImage("assets/chichken.webp");
  chichkenMImg = loadImage("assets/chichkenM.webp");
  cowImg = loadImage("assets/cow.webp");
  beefImg = loadImage("assets/beef.webp");
  boxImg = loadImage("assets/box.png");
  backgroundMusic = loadSound("assets/forest.mp3");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  getAudioContext().suspend();

  document.body.addEventListener("click", function () {
    if (getAudioContext().state === "suspended") {
      getAudioContext()
        .resume()
        .then(() => {
          console.log("AudioContext resumed after user gesture");
          if (!backgroundMusic.isPlaying()) {
            backgroundMusic.loop();
          }
        });
    }
  });

  cloudX = -50;
  cloudY = height / 5;
  cloud2X = 600;
  cloud2Y = height / 6;
  cloud3X = 900;
  cloud3Y = height / 5;
  mountainX = 1100;
  mountainY = height / 3 + 80;
  mountain2X = 600;
  mountain2Y = height / 3;
  sunX = 1300;
  sunY = height / 6;
  treeX = 800;
  treeY = height / 2;
  tree2X = 900;
  tree2Y = height / 2 + 10;
  tree3X = 1450;
  tree3Y = height / 2 - 10;
  tree4X = 100;
  tree4Y = height / 2 + 10;
  tree5X = 250;
  tree5Y = height / 2 - 10;
  riverX = 1100;
  riverY = height / 2 + 350;
  rockX = 640;
  rockY = height / 2 + 325;
  boxX = 550;
  boxY = height - 40;
  cloudSpeed = random(0, 0.5);
}

function draw() {
  background("#7cd4fc");
  fill("#0cbc34");
  noStroke();
  rect(0, height / 2, width, height / 2);

  image(sunImg, sunX, sunY, 400, 300);

  image(mountainImg, mountain2X, mountain2Y, 800, 800);
  Bush();
  image(mountainImg, mountainX, mountainY, 800, 800);
  image(treeImg, treeX, treeY, 200, 300);
  image(treeImg, tree2X, tree2Y, 150, 250);
  image(treeImg, tree3X, tree3Y, 250, 350);
  image(treeImg, tree4X, tree4Y, 150, 250);
  image(treeImg, tree5X, tree5Y, 250, 350);
  image(riverImg, riverX, riverY, 850, 150);
  image(rockImg, rockX, rockY, 250, 250);
  image(boxImg, boxX, boxY, 100, 100);

  // image(chichkenImg, chichkenX, chichkenY, 200, 200);
  // image(chichkenMImg, chichkenMX, chichkenMY, 200, 200);

  if (currentAvatar === 1) {
    image(chichkenImg, width / 2 - 100, height / 2 + 100, 80, 100);
  } else {
    image(chichkenMImg, width / 2 - 100, height / 2 + 100, 60, 70);
  }
  if (currentAvatar1 === 1) {
    image(cowImg, width / 10, height / 2 + 120, 100, 100);
  } else {
    image(beefImg, width / 10, height / 2 + 120, 60, 70);
  }

  drawCloud();
  drawCloud2();
  drawCloud3();
}
function drawCloud() {
  imageMode(CENTER);
  image(cloudImg, cloudX, cloudY, 500, 300);

  cloudX += cloudSpeed;

  if (cloudX > width + 100) {
    cloudX = -100;
  }
}
function drawCloud2() {
  imageMode(CENTER);
  image(cloudImg, cloud2X, cloud2Y, 500, 300);

  cloud2X += cloudSpeed;

  if (cloud2X > width + 100) {
    cloud2X = -100;
  }
}
function drawCloud3() {
  imageMode(CENTER);
  image(cloudImg, cloud3X, cloud3Y, 500, 300);

  cloud3X += cloudSpeed;

  if (cloud3X > width + 100) {
    cloud3X = -100;
  }
}
function Bush() {
  fill("#0c8c54");
  rect(0, 350, 900, 157);
  ellipse(50, 360, 100, 60);
  ellipse(180, 370, 100, 60);
  ellipse(270, 370, 100, 60);
  ellipse(360, 360, 100, 60);
  ellipse(460, 357, 90, 60);
  ellipse(500, 360, 100, 60);
  ellipse(620, 370, 100, 60);
  ellipse(710, 360, 100, 60);
  ellipse(820, 360, 100, 60);
}

function mousePressed() {
  if (
    mouseX > width / 2 - 100 &&
    mouseX < width / 2 - 20 &&
    mouseY > height / 2 + 100 &&
    mouseY < height / 2 + 200
  ) {
    currentAvatar = currentAvatar === 1 ? 2 : 1;
  }

  if (
    mouseX > width / 10 &&
    mouseX < width / 10 + 100 &&
    mouseY > height / 2 + 120 &&
    mouseY < height / 2 + 220
  ) {
    currentAvatar1 = currentAvatar1 === 1 ? 2 : 1;

    getAudioContext()
      .resume()
      .then(() => {
        if (!backgroundMusic.isPlaying()) {
          backgroundMusic.loop();
        }
      });
  }
}

console.log("runnin");
