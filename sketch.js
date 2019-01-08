


function setup() {

  createCanvas(800, 600);
  noLoop();
  pixelDensity(10.0);

}

function draw() {
  background(250);
  stroke(0);
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 100, 100);
}

function keyPressed() {
  if (key == 's') {
    console.log('saving');
    saveCanvas('myCanvas', 'png');
    console.log('done');
  }
}
