var walker;

function setup() {
  walker = new Walker()
  createCanvas(400,400)
  background(51)
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
      this.counter++;

    if (this.counter >= 0 && this.counter < 300){
      this.x += random(-1,1)
      this.y += random(-1,3)
    } else if (this.counter >= 300 && this.counter < 500){
      this.x += random(-1,3)
      this.y += random(-1,1)
    } else if (this.counter >= 500 && this.counter < 800){
      this.x += random(-1,1)
      this.y += random(-3,1)
    }else if (this.counter >= 800 && this.counter < 1000){
      this.x += random(-3,1)
      this.y += random(-1,1)
    }else{
      this.x = width/2
      this.y = width/2
    }
  }
}
