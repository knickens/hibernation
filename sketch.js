var kiRed;
var kiGreen;
var kiBlue;


function setup(){
    createCanvas(1000,1000);
    background(255);
   
    
}

function draw(){
    fill(kiGreen,kiRed,kiBlue,90);
    stroke(kiBlue,kiGreen,kiGreen);
    strokeWeight(2,4);
 paint();

}

function paint(){
    if(mouseIsPressed){
      kiGreen = random(0,255);
    kiBlue = random(0,255);
    kiRed = random(0,255);   
  quad(random(0,900), random(0,900), random(0,900), random(0,900), random(0,900), random(200,400), random(0,900), random(0,900));
    }
}


