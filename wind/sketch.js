var inc = 0.1
var scl = 10
var cols, rows
var zoff
var moving
var showField
var particles = []
var flowfield

var baseNotes = [195.9975, 246.9415]
var note = 0

function setup(){
  createCanvas(700, 400)


  cols = floor(width/scl) -1
  rows = floor(height/scl)
  flowfield = new Array(cols * rows)
  zoff = 0
  red = createSlider(0,255,0)
  red.position(width + 10, 20)
  green = createSlider(0,255,0)
  green.position(width + 10, 60)
  blue = createSlider(0,255,0)
  blue.position(width + 10, 100)

  moving = true

  isShowField = false

  osc = new p5.SinOsc();
  osc1 = new p5.SinOsc();
  // Instantiate the envelope
  envelope = new p5.Env();

  envelope1 = new p5.Env();
  // set attackTime, decayTime, sustainRatio, releaseTime
  envelope.setADSR(0.001, 0.5, 0.1, 0.5);
  // set attackLevel, releaseLevel
  envelope.setRange(1, 0);
  osc.start();

  envelope1.setADSR(0.001, 0.5, 0.1, 0.5);
  envelope1.setRange(1, 0);
  osc1.start();

  fft = new p5.FFT();

  frameRate(24)

  background(255)
}

function draw(){
  if(isShowField){
    background(255)
  }

  if (frameCount % 24 == 0 || frameCount == 1) {
    var freqValue = baseNotes[note];
    osc.freq(freqValue);

    envelope.play(osc, 0, 0.1);
    note = (note + 1) % baseNotes.length;
  }

  var color = createVector(red.value(),green.value(),blue.value())
  fill(color.x,color.y,color.z)
  rect(width-10,0,20,height)
  var yoff = 0;
  for (var y = 0; y < rows; y++){
    var xoff = 0;
    for (var x = 0; x<cols; x++){
      flowfield[index] = v

      var angle = noise(xoff,yoff,zoff) * TWO_PI
      var v = p5.Vector.fromAngle(angle)
      // v.setMag(0.1)
      var index = (x + y *cols);
      xoff += inc;
      stroke(0, 50)
      push()
      translate(x * scl, y * scl)
      rotate(v.heading())
      if(isShowField){
        line(0,0,scl,0)
      }
      pop()
    }
    yoff+=inc;
  }


  if(moving){
    zoff += 0.03
  }

  if(mouseIsPressed && mouseX < width-scl && mouseY < height){
    var pos = createVector(mouseX,mouseY)
    particles.push(new Particle(pos, color))

    var freq = map(mouseY, height, 0, 300, 600)
    osc1.freq(freq);

    envelope1.play(osc1, 0, 0.1);
  }

  if(particles[0] != null){
    for(var i = 0; i< particles.length; i++){
      particles[i].follow(flowfield)
      particles[i].update()
      particles[i].display()
      // particles[i].edges()
    }
  }

  if(particles.length > 800){
    particles = subset(particles, particles.length-100, 100)
  }
}

function flipMoving(){
  moving = !moving
}

function flipShow(){
  isShowField = !isShowField
  background(255)
}
