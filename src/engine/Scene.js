//TODO make getObjectID()?

class Scene{
  constructor(){
    this.objectsGroup = []
    this.drawableObj
  }

  addObject(object){
    this.objectsGroup.push(object)
  }


  drawObjsOnScreen(){
    for(var i = 0; i < this.objectsGroup.length; i++){
      this.drawableObj = this.objectsGroup[i]
      if(this.drawableObj.hasCollisionWithField(0, 0, canvas.width, canvas.height))
        this.drawableObj.draw();
    }
  }
}
