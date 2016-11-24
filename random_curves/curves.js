// true = random ; false = perlin noise
var rand_style = true
var t = 0.0
var color_t
var step = 5

var counter = 0
var vector
var color
var ellipse_size

function setup(){
  createCanvas(600,400)
  background(51)
  stroke(255)
  frameRate(10)

  ellipse_size = 4

  color_t = new Vector3(random(1000) ,random(1000),random(1000))

  line(0,height/2,width,height/2)

  color = false
  vector = new Vector2(0,width/2)

  toggle_random_style = createButton("Change Random Style")
  toggle_random_style.mousePressed(flipValue);

  toggle_color = createButton("Color")
  toggle_color.mousePressed(flipColor);
}

function draw(){

  line(0,height/2,width,height/2)
  t += 0.01
  color_t.x += 0.2
  color_t.y += 0.2
  color_t.z += 0.2

  var normal_random = random(0,height/2)
  var perlin_random = noise(t) *(height/2)

  var color_normal = new Vector3(random(255),random(255),random(255))
  var color_perlin = new Vector3(noise(color_t.x) *255,noise(color_t.y) *255,noise(color_t.z) *255)

  if(rand_style){
    vector.y = normal_random

    if(color){
      fill(color_normal.x,color_normal.y,color_normal.z)
    }else{
      fill(255)
    }
  }else{
    vector.y = perlin_random
    if(color){
      fill(color_perlin.x,color_perlin.y,color_perlin.z)
    }else{
      fill(255)
    }
  }
  vector.x += step

  noStroke()
  ellipse(vector.x,vector.y,ellipse_size,ellipse_size)

  if(vector.x > width){
    vector.x = 0
    counter = 0
    background(51)
    stroke(255)
    line(0,height/2,width,height/2)
  }
}

function Vector2(x,y){
  this.x = x
  this.y = y
}

function Vector3(x,y,z){
  this.x = x
  this.y = y
  this.z = z
}

function flipValue(){
  rand_style = !rand_style
}

function flipColor(){
  color = !color
}
