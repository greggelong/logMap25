let x;
let startx = 2.8;
let stopx = 3.87;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  biDi3();
}

function biDi() {
  x = 0.2;
  background(0);
  stroke(0, 250, 0, 90);

  for (let r = 2.8; r < 4; r += 0.0001) {
    let x2 = r * (x - x ** 2); // x2 is next x Using the same equation as introduction to complexity
    let y = map(x2, 0.5, 1, height, 0); // map the values for plotting
    let px = map(r, 2.8, 4, 0, width);
    point(px, y);

    x = x2;
  }
}

function biDi2() {
  background(0);
  stroke(0, 250, 0, 90);

  for (let r = startx; r < stopx; r += 0.0001) {
    let x = 0.2; // reset for each r

    // iterate to let transients die out
    for (let i = 0; i < 400; i++) {
      x = r * x * (1 - x);

      // only draw after skipping first 100 iterations
      if (i > 200) {
        let y = map(x, 0, 1, height, 0);
        let px = map(r, startx, stopx, 0, width);
        point(px, y);
      }
    }
  }
}

function biDi3() {
  background(0);
  stroke(0, 250, 0, 90);

  let steps = width; // steps to width of canvas
  for (let i = 0; i < steps; i++) {
    let r = map(i, 0, steps, startx, stopx);

    let x = 0.2; // reset for each r

    // iterate to let transients die out
    for (let i = 0; i < 400; i++) {
      x = r * x * (1 - x);

      // only draw after skipping first 100 iterations
      if (i > 200) {
        let y = map(x, 0, 1, height, 0);
        let px = map(r, startx, stopx, 0, width);
        point(px, y);
      }
    }
  }
}
