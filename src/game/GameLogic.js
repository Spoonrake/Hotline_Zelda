function gameLogic(){
    if (gameFlag == true){
        if(isElemInArr(49, getDownedKeys()))
            CAMERA.freeWalk()
        else{
            player.move()
            CAMERA.focusOn(player)
        }
        enemy.process()
    }
    else
        gameOver()
}


function gameOver(){
  screen.fillStyle = "#F0F0F0"
  screen.font = "50px Verdana"
  screen.fillText("Game Over", 280, 200)
}


