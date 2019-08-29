
var canvas;
var screen;

const FPS = 30;
const FRAMETIME = getFrameTimeForFPS(FPS);

function getFrameTimeForFPS(fps){
  return (1000/fps);
}

function clearCanvas(){
  this.screen.clearRect(0, 0, this.canvas.width, this.canvas.height);
}


async function gameLoopStart(){
  while(true){
    game();
    await sleep(FRAMETIME);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
