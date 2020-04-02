class Camera{
    constructor(x = canvas.width/2, y = canvas.height/2, speed = 1, safetyMode = false){
      this.speed = speed;
      this.focus;
      this.safetyMode = safetyMode

      console.log("Camera set up")
      console.log("*Camera* x: " + this.x + ", y: " + this.y + ", speed: " + this.speed + ", safetyMode: " + this.safetyMode)
    }


    focusOn(obj){
      this.deltaX = canvas.width/2 - obj.width/2- obj.x;
      this.deltaY = canvas.height/2 - obj.height/2 - obj.y;
      mapScrolling(SCENE.objectsGroup, "x", this.deltaX, false);
      mapScrolling(SCENE.objectsGroup, "y", this.deltaY, false);
    }


    freeWalk(controlKeys = {left:65, right:68, up:87, down:83}){
      if(isElemInArr(controlKeys.left, getDownedKeys()))
        this.goLeftFor(this.speed)
      if(isElemInArr(controlKeys.right, getDownedKeys()))
        this.goRightFor(-this.speed)
      if(isElemInArr(controlKeys.up, getDownedKeys()))
        this.goUpFor(this.speed)
      if(isElemInArr(controlKeys.down, getDownedKeys()))
        this.goDownFor(-this.speed)
    }

    goLeftFor(deltaX){
      mapScrolling(SCENE.objectsGroup, "x", deltaX, this.safetyMode)
    }

    goRightFor(deltaX){
      mapScrolling(SCENE.objectsGroup, "x", deltaX, this.safetyMode);
    }

    goUpFor(deltaY){
      mapScrolling(SCENE.objectsGroup, "y", deltaY, this.safetyMode);
    }
    
    goDownFor(deltaY){
      mapScrolling(SCENE.objectsGroup, "y", deltaY, this.safetyMode);
    }
}
