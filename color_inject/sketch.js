var r,g,b
var counter
var color_is_right
var inc = 0.01

function setup()
{
  createCanvas (800, 600);
  background (51);

  r = random()
  g = random()
  b = random()

  color_is_right = false;
  counter = 0

  frameRate(20)

}

function draw()
{
  background(51)
  counter ++

  r += inc
  g += inc
  b += inc


  if(counter % 40 == 0){
    color_is_right = !color_is_right

    //risuvane na linii koeto ne e zaduljitelno
    strokeWeight(4)
    stroke(noise(r) * 255,noise(g) * 255,noise(b) * 255)
    line(200,200, 250,200)
    line(200,300, 250,300)
    line(200,400, 250,400)
  }

  if(!color_is_right){
    fill (noise(r) * 255,noise(g) * 255,noise(b) * 255);
    rect (100, 200, 100, 200);
    fill (255)
    rect (250, 200, 100, 200);
  }else{
    fill (255)
    rect (100, 200, 100, 200);
    fill (noise(r) * 255,noise(g) * 255,noise(b) * 255);
    rect (250, 200, 100, 200);
  }
}
