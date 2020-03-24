function gameLogic(){
  if (gameFlag == true){
    PLAYER.move();
    ENEMY.process();
    CAMERA.focusOn(PLAYER);
  }
  else{gameOver();}

}


function gameOver(){
  screen.fillStyle = "#F0F0F0";
  screen.font = "50px Verdana";
  screen.fillText("Game Over", 280, 200);
}


