score = 0
x = 0
y = 0
a = 0
time = 30
b = 1

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  frameRate(1)
  background(255)
  mole(random(0, windowWidth), random(0, windowHeight))
  textSize(20)
  text('Score: ' + score, 10, 20)
  text('Time: ' + time, 10, 40)
  time = time - b
  if (time == 0) {
    b = 0
    fill(255)
    rect(0, 0, windowWidth, windowHeight)
    fill(0)
    text('Game Over!' , windowWidth/2, windowHeight/2 - 20)
    text('Score ' + score, windowWidth/2, windowHeight/2 + 20)
  }
}

function mole(x, y) {
  fill(205, 127, 50)
  ellipse(x, y, 100, 100)
  fill(0)
  rect(x - 25, y - 25, 20, 5)
  rect(x + 5, y - 25, 20, 5)
  fill(255)
  ellipse(x - 15, y - 3, 20, 20)
  ellipse(x + 15, y - 3, 20, 20)
  fill(0)
  ellipse(x - 15, y - 3, 10, 10)
  ellipse(x + 15, y - 3, 10, 10)
  fill(255)
  rect(x - 10, y + 20, 10, 20)
  rect(x, y + 20, 10, 20)
  fill(225, 193, 110)
  ellipse(x, y + 20, 30, 20)
  fill(0)
  ellipse(x, y + 20, 10, 10)
}

function mousePressed() {
  if (millis() - a > 500) {

    a = millis()
    
    x = mouseX;
    y = mouseY;

    if (mouseX < x + 50 && mouseX > x - 50 && mouseY < y + 50 && mouseY > y - 50) {
      score = score + 1;
      x = random(400)
      y = random(400)
    }
  }
}
