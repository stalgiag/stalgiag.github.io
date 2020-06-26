function preload() {
  createVRCanvas();
}

function setup() {
  setVRBackgroundColor(200, 0, 150);
}

function calculate() {
}

function draw() {
  fill(0, 255, 0);
  translate(0, 0, 10);
  rotateX(10);
  rotateY(20);
  strokeWeight(5);
  
  box(5);
}