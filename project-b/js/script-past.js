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
  Bush();
}

function drawMountains() {
  noStroke();

  let mountainColor1 = color(169, 169, 169);
  let mountainColor2 = color(105, 105, 105);
  let snowColor = color(255, 255, 255);

  let mountainHeight = height / 4;

  for (let i = 0; i < width / 2 - 100; i += 100) {
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
console.log("runnin");
