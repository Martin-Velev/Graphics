var diamater
var detail
var mult
var center

var x,y,z
var red,green,blue

var previusKey

function setup() {
  createCanvas(900,900)
  background(0)
  diamater = width - 10
  angleMode(DEGREES);

  mult = 2
  detail = 5


  x=0
  y=0
  z=0

  angleMode(DEGREES);

}

function draw(){

  frameRate(30)
  background(0)
  stroke(255)
  noFill()
  ellipse(width/2,height/2, diamater,diamater)



  if(keyIsPressed && keyCode == RIGHT_ARROW) {
    detail += .1
    x += .01
  }
  if(keyIsPressed && keyCode == LEFT_ARROW) {
    detail -= .1
  }
  if(keyIsPressed && keyCode == UP_ARROW) {
    mult += .01
    y += .01
  }
  if(keyIsPressed && keyCode == DOWN_ARROW) {
    mult -= .01
    z += .01
  }



  center = createVector(width/2,height/2)
  red = noise(x) * 255
  green = noise(y) * 255
  blue = noise(z) * 255

  stroke(red,green,blue,255)
  var angle1,angle2
  for(var i = 0; i < detail; i++){


    angle1 = 360/detail * i
    angle2 = angle1 * mult
    point1 = p5.Vector.fromAngle(radians(angle1))
    point2 = p5.Vector.fromAngle(radians(angle2))


    point1.setMag(diamater/2)
    point2.setMag(diamater/2)

    point1.add(center)
    point2.add(center)
    ellipse(point1.x,point1.y, 20, 20)

    line(point1.x, point1.y, point2.x, point2.y)

  }
}
