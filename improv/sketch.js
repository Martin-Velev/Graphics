var scl=5
var rows
var cols


function setup(){
  createCanvas(600,600)
  background(255)
  stroke(0)

  rows = length/scl
  cols = height/scl
}

function draw(){
  noFill()
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; i++) {
        rect(i*scl, j+scl,scl,scl)
    }
  }
}
