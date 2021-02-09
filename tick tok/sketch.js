var hr;
var mn;
var sc;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);

  translate(200,200) 

  hr=hour();
  sc=second();
  mn=minute();

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

push();
rotate(scAngle)
stroke("green")
strokeWeight(3)
line(0,0,100,0)
pop();

push();
rotate(mnAngle)
stroke("red")
strokeWeight(4)
line(0,0,120,0)
pop();

push();
rotate(hrAngle)
stroke("blue")
strokeWeight(6)
line(0,0,70,0)
pop();

noFill();
stroke("green")
strokeWeight(6)
arc(0,0,300,300,0,scAngle)


stroke("red")
strokeWeight(6)
arc(0,0,280,280,0,mnAngle)

stroke("blue")
strokeWeight(6)
arc(0,0,260,260,0,hrAngle)



  drawSprites();
}