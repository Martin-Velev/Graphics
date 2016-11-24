var walker;
var t1
var t2

function setup() {
  walker = new Walker()
  createCanvas(400,400)
  background(51)

  t1 = random()
  t2 = random()
}

function draw() {
  stroke (255)
  fill(255)
  walker.update_pos()
  walker.display()
}

function Walker(){
  this.x = width/2
  this.y = height/2

  this.counter = 0

  this.display = function(){
    point(this.x,this.y )

  }

  this.update_pos = function(){
    t1 += 1
    t2 += 1
    var rand = random(4)

    print (rand)
    switch(rand){
      case 0:
        this.x += noise(t1) * width
        break;
      case 1:
        this.x -= noise(t1) * width
        break;
      case 2:
        this.y += noise(t2) * height
        break;
      case 3:
        this.y -= noise(t2) * height
        break;
    }
  }
}
