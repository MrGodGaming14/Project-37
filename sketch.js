var canvas;

var gameState = 0;
var contestantCount = 0;
var database;
var quiz, question;

function setup(){
  canvas = createCanvas(850,400);

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  
}


function draw(){
  background("pink");

  
}
