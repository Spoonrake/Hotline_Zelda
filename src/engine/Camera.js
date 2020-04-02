class Camera{
    constructor(x = canvas.width/2, y = canvas.height/2, speed = 1){
      this.x = x
      this.y = y
      this.speed = speed;
      this.mode;
      this.focus;

      console.log(canvas)
      console.log("Camera set up")
      console.log("*Camera* x: " + this.x + ", y: " + this.y + ", speed: " + this.speed + ", safetyMode: " + this.safetyMode)
    }


    focusOn(obj){
      if(this.mode != "focusOn")
        this.mode = "focusOn";

      this.deltaX = canvas.width/2 - obj.width/2- obj.x;
      this.x += obj.x + obj.width/2
      this.deltaY = canvas.height/2 - obj.height/2 - obj.y;
      this.y += obj.y + obj.height/2
      mapScrolling(SCENE.objectsGroup, "x", this.deltaX, false);
      mapScrolling(SCENE.objectsGroup, "y", this.deltaY, false);

      if(this.focus != obj){
        this.focus = obj;
      }
    }


    freeWalk(controlKeys = {left:65, right:68, up:87, down:83}){
      this.focus = undefined;
      this.mode = "freeWalk";

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
      this.x -= this.speed
    }

    goRightFor(deltaX){
      mapScrolling(SCENE.objectsGroup, "x", deltaX, this.safetyMode);
      this.x += this.speed
    }

    goUpFor(deltaY){
      mapScrolling(SCENE.objectsGroup, "y", deltaY, this.safetyMode);
      this.y -= this.speed
    }
    
    goDownFor(deltaY){
      mapScrolling(SCENE.objectsGroup, "y", deltaY, this.safetyMode);
      this.y += this.speed
    }
  }
