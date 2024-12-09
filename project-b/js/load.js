const backgroundPic = document.querySelector("#container2");
let hoverTime;
let countdownTimeout;
let countdownTime = 5;
let backgroundMusic;

function preload() {
  backgroundMusic = loadSound("assets/shift.mp3");
}

backgroundPic.addEventListener("mouseover", () => {
  countdownTime = 5;
  countdownTimeout = setInterval(() => {
    countdownTime--;
    if (countdownTime <= 0) {
      clearInterval(countdownTimeout);
      window.location.href = "past.html";
    }
  }, 1000);

  hoverTime = setTimeout(() => {
    window.location.href = "past.html";
  }, 5000);
});

let numParticles = 100;
let angles = new Array(numParticles);
let radii = new Array(numParticles);
let speeds = new Array(numParticles);
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("container2");
  for (let i = 0; i < numParticles; i++) {
    angles[i] = random(0, 360);
    radii[i] = random(50, min(windowWidth, windowHeight) / 2);
    speeds[i] = random(0.5, 2);
  }

  noStroke();

  getAudioContext().suspend();
  document.querySelector("body").addEventListener("click", () => {
    getAudioContext().resume();
  });
}

function draw() {
  background(0, 20);

  translate(width / 2, height / 2);

  fill(255);
  for (let i = 0; i < numParticles; i++) {
    let angleInRadians = radians(angles[i]);

    let x = cos(angleInRadians) * radii[i];
    let y = sin(angleInRadians) * radii[i];

    ellipse(x, y, 5, 5);

    angles[i] += speeds[i];
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
console.log("running");

function mousePressed() {
  getAudioContext()
    .resume()
    .then(() => {
      if (!backgroundMusic.isPlaying()) {
        backgroundMusic.loop();
      }
    });
}
