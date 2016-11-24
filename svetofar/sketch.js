var inc = 0.06
var r, g, b

function setup(){
  createCanvas(400,600)
  r = random()
  g = random()
  b = random()
}

function draw(){
  noStroke();


  r,g,b += inc
  fill(noise(r) * 255,noise(g) * 255,noise(b) * 255)
  ellipse(width/2, height/2, 150,150)


}
