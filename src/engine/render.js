function render(){
    this.clearCanvas()
    SCENE.drawObjsOnScreen()
}

function clearCanvas(){
    screen.clearRect(0, 0, canvas.width, canvas.height)
}
