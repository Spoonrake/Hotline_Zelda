window.onload = init;

var canvas;
var screen;

const FPS = 30;
const FRAMETIME = getFrameTimeForFPS(FPS);
var CURRENTFRAME = 1;

function getFrameTimeForFPS(fps){
  return (1000/fps);
}

var SCENE;
var PLAYER;
var ENEMY;
var CAMERA;
var gameFlag = true;



function init(){
  canvasAndScreenDifintion()
  CAMERA = new Camera()
  loadStartLevel()
  gameLoop()       //игровой цикл
}



function canvasAndScreenDifintion(){
  canvas = document.getElementById("canvas") //конвенция
  screen = canvas.getContext("2d")
}




function loadStartLevel(){
  this.loadLevelTest()
}





async function gameLoop(){
  while(true){
      this.render()
      this.gameLogic()
      frameCounter()
      await sleep(FRAMETIME)
  }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function frameCounter(){
  if(CURRENTFRAME < FPS)
    CURRENTFRAME += 1;
  else
    CURRENTFRAME = 1;
}
