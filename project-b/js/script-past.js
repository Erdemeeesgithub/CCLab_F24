function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  noLoop();
}

function draw() {
  background("#7cd4fc");
  fill("#0cbc34");
  noStroke();
  rect(0, height / 2, width, height / 2);

  drawMountains();
}

function drawMountains() {
  noStroke();

  let mountainColor1 = color(169, 169, 169);
  let mountainColor2 = color(105, 105, 105);
  let snowColor = color(255, 255, 255);

  let mountainHeight = height / 4;

  for (let i = 0; i < width; i += 100) {
    let peakHeight = random(mountainHeight / 2, mountainHeight);
    let leftX = i;
    let rightX = i + 100;

    fill(mountainColor1);
    triangle(
      leftX,
      height / 2,
      i + 50,
      height / 2 - peakHeight,
      rightX,
      height / 2
    );

    fill(mountainColor2);
    triangle(
      i + 50,
      height / 2 - peakHeight,
      i + 100,
      height / 2,
      i + 100,
      height / 2 - peakHeight
    );

    fill(snowColor);
    if (random(1) > 0.7) {
      ellipse(i + 50, height / 2 - peakHeight, 40, 20);
    }
  }
}
console.log("runnin");
