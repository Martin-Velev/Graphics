function setup(){
  createCanvas(600,800)
  background(255)
}

function draw(){
  stroke(51)
  var rand = randomGaussian()
  var mean = 100
  var std = 6

  rand += mean
  rand *= std

  ellipse(width/2,height/2,rand,rand)

}
