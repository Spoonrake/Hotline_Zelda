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
      this.deltaY = canvas.height/2 - obj.height/2 - obj.y;
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
        mapScrolling(SCENE.objectsGroup, "x", this.speed, this.safetyMode)
      if(isElemInArr(controlKeys.right, getDownedKeys()))
        mapScrolling(SCENE.objectsGroup, "x", -this.speed, this.safetyMode);
      if(isElemInArr(controlKeys.up, getDownedKeys()))
        mapScrolling(SCENE.objectsGroup, "y", this.speed, this.safetyMode);
      if(isElemInArr(controlKeys.down, getDownedKeys()))
        mapScrolling(SCENE.objectsGroup, "y", -this.speed, this.safetyMode);
    }


    goToCoord(x, y){
      if(this.focus) objectsScrolling.push(this.focus);
      this.focus = undefined;
      this.mode = "goToCoord";
      var deltaX = this.x - x; this.x = deltaX;
      var deltaY = this.y - y; this.y = deltaY;
      mapScrolling(objectsScrolling, 'x', deltaX, this.safetyMode);
      mapScrolling(objectsScrolling, 'y', deltaY, this.safetyMode);
    }
  }
