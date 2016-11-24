var color
var x,y,z

var ratio_noise

var r
var center
var radius_line
var angle= 0
var color_array

var rotation_magnitude
var rotation_speed
var num_circles = 9
var trace = false
var random_ratio = false
var last_only = false

var trace_button
var random_ratio_button
var random_spins_button
var last_only_button
var rainbow_button
var clear_button

var speed_slider
var magnitude_slider

function setup(){
  ratio_noise = 0

  createCanvas(450,450)
  x = random(255)
  y = random(255)
  z = random(255)

  color_array = new Array(num_circles)
  for (var i = 0; i < color_array.length; i++) {
    color_array[i] = createVector(random(255),random(255),random(255))
  }

  speed_slider = createSlider(1, 15, 1)
  magnitude_slider = createSlider(0,6000, 3000)

  angleMode(DEGREES);

  trace_button = createButton("Trace")
  trace_button.mousePressed(flipTrace)

  random_ratio_button = createButton("Wierd Mode")
  random_ratio_button.mousePressed(randomRatio)


  last_only_button = createButton("Trace Last Circle Only")
  last_only_button.mousePressed(flipLastOnly)

  clear_button = createButton("Clear")
  clear_button.mousePressed(clear)

  if(!trace) noFill()
}

function clear(){
  background(255)
}

function randomRatio(){
  random_ratio = !random_ratio
}

function flipLastOnly(){
  last_only = !last_only
}


function flipTrace(){
  background(255)
  trace = !trace
}


function draw(){
  r = 140

  rotation_speed = speed_slider.value()/1000
  rotation_magnitude = magnitude_slider.value()/ 1000




  if(!trace) background(255)
  center = createVector(width/2,height/2)

  // ellipse(width/2,height/2, r,r)
  radius_line =p5.Vector.fromAngle(radians(angle))
  radius_line.setMag(r/2)

  for (var i = 0; i < num_circles; i++) {

    if(random_ratio){
      rotation_magnitude = noise(ratio_noise) * 0.3
      ratio_noise += 0.0003
    }else{
      ratio_noise = random()
    }

    if(!trace) ellipse(center.x,center.y, r,r)

    stroke(color_array[i].x,color_array[i].y,color_array[i].z)
    if(!last_only || i == num_circles-1){
      ellipse(center.x,center.y,1.5,1.5)
    }

    angle += rotation_speed
    radius_line = p5.Vector.fromAngle(angle * ((i*rotation_magnitude) + 1) )
    radius_line.setMag(r/2)
    center.add(radius_line)
    r *= .67
  }
}
