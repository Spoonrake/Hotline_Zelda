function gameLogic(){
  if (gameFlag == true){
    player.move();
    enemy.process();
    CAMERA.focusOn(player);
  }
  else{gameOver();}

}


function gameOver(){
  screen.fillStyle = "#F0F0F0";
  screen.font = "50px Verdana";
  screen.fillText("Game Over", 280, 200);
}


