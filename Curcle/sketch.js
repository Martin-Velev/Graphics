var diamater
var detail
var mult
var center

var previusKey

function setup() {
  createCanvas(600,600)
  background(0)
  diamater = width - 10
  angleMode(DEGREES);

  mult = 2
  detail = 100

}

function draw(){
  background(0)
  stroke(255)
  noFill()
  ellipse(width/2,height/2, diamater,diamater)


  center = createVector(width/2,height/2)

  var angle1,angle2
  for(var i = 0; i < detail; i++){
    angle1 = 360/detail * i
    angle2 = angle1*mult
    var point1 = p5.Vector.fromAngle(angle1)
    var point2 = p5.Vector.fromAngle(angle2)

    point1.setMag(diamater/2)
    point2.setMag(diamater/2)

    point1.add(center)
    point2.add(center)

    line(point1.x, point1.y, point2.x, point2.y)

  }



}


function keyPressed() {

}
