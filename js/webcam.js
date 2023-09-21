let cap, vHeight, arr, length, count, yDiff;
function setup() {
  createCanvas(windowWidth, windowHeight);
  cap = createCapture(VIDEO);
  let ratio = cap.height/cap.width;
  vHeight = width * ratio;
  cap.size(width, vHeight);
  cap.hide();
  arr = [];
  length = 120;//returnRandomLength();
  count = 0;
  yDiff = (height - cap.height)/2;
}
function draw() {
    translate(width,0); // move to far corner
    scale(-1.0,1.0);    // flip x-axis backwards
  let crop = cap.get(0, 0, width, height); 
  if(arr.length < length){
    arr.unshift(crop);
  }
  if(arr.length == length){
    arr.pop()
  }
  if(arr.length == length -1){
    //start glitching!
    if(count == 0){
        count = returnRandomLength();
    }
    console.log("count = "+count)
    image(arr[count],yDiff, 0)
    // image(arr[Math.floor(random(0, arr.length-1))], yDiff, 0)
    count--;
  }else{
    image(crop,yDiff, 0)
  }

  
//   image(arr[Math.floor(random(0, arr.length-1))], yDiff, 0)
}
function returnRandomLength(){
    let l = Math.floor(random(1, length-1))
    return l;
    // return 10;
}