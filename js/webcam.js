let cap, vWidth, vHeight, arr, length, count, xDiff, yDiff;
// width = innerWidth
// height = innerHeight 
function setup() {
    yDiff = 0;
  createCanvas(windowWidth, windowHeight);
  cap = createCapture(VIDEO);
//   let ratio = cap.height/cap.width;
//   vHeight = width * ratio;
//   cap.size(width, vHeight);
let ratio = cap.width/cap.height;
vWidth = height * ratio;
cap.size(vWidth, height);
  cap.hide();
  arr = [];
  length = 120;//returnRandomLength();
  count = 0;
//   yDiff = (height - cap.height)/2;
xDiff = (width - cap.width)/2;
}
function draw() {
    clear()
    translate(width,0); // move to far corner
    scale(-1.0,1.0);    // flip x-axis backwards
//     width = innerWidth
// height = innerHeight 
  let crop = cap.get(0, 0, vWidth, height); 
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
    image(arr[count],xDiff, yDiff)
    // image(arr[Math.floor(random(0, arr.length-1))], yDiff, 0)
    count--;
  }else{
    image(crop,xDiff, yDiff)
  }

  
//   image(arr[Math.floor(random(0, arr.length-1))], yDiff, 0)
}
function returnRandomLength(){
    let l = Math.floor(random(1, length-1))
    return l;
    // return 10;
}