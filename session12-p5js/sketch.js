let swarm = [];
let glowShift = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  for (let i = 0; i < 150; i++) {
    swarm.push(new NeonOrb(random(width), random(height)));
  }
  background(0);
}

function draw() {
  background(0, 25); // motion trail effect
  glowShift += 0.5;

  for (let orb of swarm) {
    orb.attract(mouseX, mouseY);
    orb.move();
    orb.display();
  }
}

class NeonOrb {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 4));
    this.size = random(6, 18);
    this.hue = random(360);
    this.spin = random(-5, 5);
    this.angle = random(360);
    this.gravity = random(0.05, 0.15);
  }

  attract(mx, my) {
    let mouse = createVector(mx, my);
    let force = p5.Vector.sub(mouse, this.pos);
    force.setMag(0.15);
    this.vel.add(force);
  }

  move() {
    this.vel.y += this.gravity;
    this.pos.add(this.vel);
    this.angle += this.spin;

    // bounce off walls
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);

    let r = 200 + sin(glowShift + this.hue) * 55;
    let g = 100 + cos(glowShift + this.hue) * 100;
    let b = 255;

    noStroke();
    fill(r, g, b, 180);
    ellipse(0, 0, this.size * 2);

    stroke(255);
    line(-this.size, 0, this.size, 0);
    line(0, -this.size, 0, this.size);

    pop();
  }
}

function mousePressed() {
  // add new orbs on click
  for (let i = 0; i < 10; i++) {
    swarm.push(new NeonOrb(mouseX, mouseY));
  }
}

function keyPressed() {
  // reset sketch
  if (key === 'r' || key === 'R') {
    swarm = [];
    for (let i = 0; i < 150; i++) {
      swarm.push(new NeonOrb(random(width), random(height)));
    }
  }
}