var counter
var nums

var t1

var t2


function setup(){
  createCanvas(400,600)
  background(51)
  stroke(255)

  t1= random()
  t2 = random()
}

function draw() {
  background(204)
  t1 += .01
  t2 += .01
  var x = noise(t1) * width;
  var y =  noise(t2) * height;

  ellipse (x,y,20,20)
}
