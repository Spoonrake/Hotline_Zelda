//------CLASS PLAYER-------//
class Player extends ZelObject{

  constructor(x, y){    //x,y - started coordinates
    super();
    this.x = x;
    this.y = y;
    this.width = 128;
    this.height = 128;
    this.speed = 10;

    this.spritesFile.src = "./src/game/Objects/Player/img/Sprites.png"
    this.animationMap = {
      runLeft:   [[0,0,128,128], [128, 0, 256, 128], [256, 0, 384, 128]],
      runRight:  ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      runTop:    ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      runBottom: ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      stay:      [[0,0,128,128], [128, 0, 256, 128], [256, 0, 384, 128]],
    }
  }

  move(controlKeys = {left:65, right:68, up:87, down:83}){
    if(isElemInArr(controlKeys.left, getDownedKeys())){
      this.runLeft();
    }
    if(isElemInArr(controlKeys.right, getDownedKeys())){
      this.runRight();
    }
    if(isElemInArr(controlKeys.up, getDownedKeys())){
      this.runTop();
    }
    if(isElemInArr(controlKeys.down, getDownedKeys())){
      this.runBottom();
    }
    if(getDownedKeys().length == 0){
      this.stay();
    }
  }

  stay(){
    this.setCurrentAnimationForSec(this.animationMap.stay, 1.5);
  }

  runLeft(){
    this.x -= this.speed;
    this.setCurrentAnimationForSec(this.animationMap.runLeft);
  }

  runRight(){
    this.x += this.speed;
    this.setCurrentAnimationForSec(this.animationMap.runRight);
  }

  runTop(){
    this.y -= this.speed;
    this.setCurrentAnimationForSec(this.animationMap.runTop);
  }

  runBottom(){
    this.y += this.speed;
    this.setCurrentAnimationForSec(this.animationMap.runBottom);
  }

}

//^^^^^^CLASS PLAYER^^^^^^//
