//Global variables to be given 
var database;
var form,player,game;
var gamestate,playercount;
var bgImg;

var car1,car1img,car2,car2img,cararray;
var allplayers;
var trackimg;

function preload(){
bgImg=loadImage("./assets/background.png")
car1img=loadImage("./assets/car1.png");
car2img=loadImage("./assets/car2.png");
trackimg=loadImage("./assets/track.jpg");
}
function setup(){
createCanvas(windowWidth,windowHeight);
database=firebase.database();

//game object
game=new Game();
//call the game start function that display the form
game.start();
//call the getstate
game.getState();

}
function draw(){
background(bgImg);
//update the gamestate to 1 when both playes joined
if(playercount===2){
  game.updateState(1)
}
if(gamestate===1){
  game.play();
}
}

//resize the game according to device
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}