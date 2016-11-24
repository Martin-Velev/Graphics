function setup(){
  createCanvas(400,600)
}

function draw(){

  background(255)

  strokeWeight(2)
  stroke(0)
  noFill()

  translate(width/2,height/2)
  ellipse(0,0,4,4)

  var mouse = createVector(mouseX,mouseY)
  var center = createVector(width/2,height/2)

  mouse.sub(center)

  line(0,0,mouse.x,mouse.y)


}
