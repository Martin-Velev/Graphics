var funky_colors = true
var angle = 0
var counter
var colors = []
var index

function setup() {
  createCanvas(600,800)
  slider_angle = createSlider(0,PI, PI/4,0.01)

  index = 0
  slider_size = createSlider(50,500)
  counter = -1

  funky_colors = false

  color_t = new Vector3(random(1000) ,random(1000),random(1000))
  button = createButton("Funky colors")
  button.mousePressed(changeColorStyle)
  stroke(255)

}

function draw() {
  counter ++

  if(counter% 3 == 0){
    color_t = new Vector3(random(1000) ,random(1000),random(1000))
    colors = []
    for (var i = 0; i < 1000; i++) {
      colors.push(new Vector3(random(255),random(255),random(255)))
    }
  }

  background(51)
  angle = slider_angle.value();
  var len = 100
  translate(width/2,height)
  branch(slider_size.value())
}

function branch(len) {
    if (funky_colors){
        stroke(colors[index].x,colors[index].y,colors[index].z)
    }
    line(0, 0, 0, -len)
    translate(0,-len)
    if(len > 5){
      index++
      push()
      rotate(angle)
      branch(len*0.67)
      index--
      pop()
      index++
      push()
      rotate(-angle)
      branch(len*0.67)
      index--
      pop()
   }
}

function changeColorStyle(){
  funky_colors = !funky_colors
}

function Vector3(x,y,z){
  this.x = x
  this.y = y
  this.z = z
}
