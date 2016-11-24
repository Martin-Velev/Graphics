var scl = 20;
var cols
var rows
var max_distance

function setup(){
  createCanvas(800,600)
  background(0)
  stroke(255)

  cols = width/scl
  rows = height/scl

  max_distance = dist(0,0,width,height)
}

function draw(){

  background(0)
  fill(255)
  noStroke()
  var size


  for(var i = 0 ; i < cols; i++){
    for(var j = 0; j < rows; j++){
      size = dist(i*scl, j*scl, mouseX, mouseY)
      size = size / max_distance * 66
      ellipse(i*scl, j*scl,size,size);
    }
  }
}
