let cap, theShader, vHeight;
function preload(){
theShader = loadShader('assets/shader.vert', 'assets/shader.frag');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cap = createCapture(VIDEO);
  let ratio = cap.height/cap.width;
  vHeight = width * ratio;
  cap.size(width, vHeight);
  cap.hide();
}
function draw() {
  // let ratio = cap.height/cap.width;
  // let vHeight = width * ratio;
  // let yDiff = (height - cap.height)/2;
  // image(cap, 0, -yDiff, width, vHeight);
  shader(theShader);
  theShader.setUniform('tex0', cap);
  rect(0,0,width, height);
}