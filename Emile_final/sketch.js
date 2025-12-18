let dots = [];
let hueValue = 200;

function setup() {
  let canvas = createCanvas(420, 280);
  canvas.parent("p5-container");
  colorMode(HSB);

  for (let i = 0; i < 60; i++) {
    dots.push(new Dot());
  }
}

function draw() {
  background(hueValue, 80, 15, 20);
  dots.forEach(dot => dot.move());
}

function mousePressed() {
  hueValue = random(0, 360);
}

class Dot {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(5, 14);
    this.speed = random(0.5, 2);
  }

  move() {
    noStroke();
    fill(hueValue, 90, 90);
    ellipse(this.x, this.y, this.size);
    this.y -= this.speed;
    if (this.y < 0) this.reset();
  }
}
