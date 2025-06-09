let x = 0.2;
let startx = 2.8;
let stopx = 3.87;

let iter = 0;
let steps;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  stroke(0, 250, 0, 90);
  //frameRate(12);
  steps = width;
}

function draw() {
  if (iter < steps) {
    biDi3();
    iter++;
  } else {
    background(0);
    iter = 0;
    startx = random(3.8, 3.99);
    stopx = startx + random(0, 4 - startx);
  }
}

function biDi3() {
  noStroke();
  textSize(20);
  fill(255);
  text(startx.toFixed(5) + " - " + stopx.toFixed(5), 10, 100);
  stroke(0, 250, 0);
  let r = map(iter, 0, steps, startx, stopx);

  let x = 0.2; // reset for each r

  // iterate to let transients die out
  for (let i = 0; i < 200; i++) {
    x = r * x * (1 - x);

    // only draw after skipping first 100 iterations
    if (i > 100) {
      let y = map(x, 0, 1, height, 0);
      let px = map(r, startx, stopx, 0, width);
      point(px, y);
    }
  }
}
