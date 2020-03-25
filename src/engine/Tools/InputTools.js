
//-----------------------KEYBOARD LISTENER---------------------//
document.addEventListener('keydown', keyListener);
document.addEventListener('keyup', keyListener);
keyListener_downKeys = [];

function keyListener(event){
  if(event.type == 'keydown'){
    if (!isElemInArr(keyListener_downKeys, event.keyCode)) keyListener_downKeys.push(event.keyCode);
  }
  else{
    keyListener_downKeys.splice(keyListener_downKeys.indexOf(event.keyCode), 1);
  }
}



function getLastDownedKey(){
  this.lastDownedKey;
  window.onkeydown = function(e){
      this.lastDownedKey = e.keyCode
  }
  return this.lastDownedKey
}

//^^^^^^^^^^^^^^^^^^^^^^^KEYBOARD LISTENER^^^^^^^^^^^^^^^^^^^^^^^//



//-------------------------MOUSE LISTENER-----------------------//

//MOUSEPOSITIONS

document.addEventListener('mousemove', mousePagePosition);
var mousePagePosition_x = mousePagePosition_y = 0;
function mousePagePosition(event){
  if(event.type == 'mousemove'){
    mousePagePosition_x = event.clientX;
    mousePagePosition_y = event.clientY;
  }
}

document.addEventListener('mousemove', mouseCanvasPosition);
var mouseCanvasPosition_x = mouseCanvasPosition_y = 0;
function mouseCanvasPosition(event){
  if(event.type == 'mousemove'){
    if(event.target == canvas){
      mouseCanvasPosition_x = event.pageX - event.target.offsetLeft,
      mouseCanvasPosition_y = event.pageY - event.target.offsetTop;
    }else{
      mouseCanvasPosition_x = undefined;
      mouseCanvasPosition_y = undefined;
    }
  }
}


//MOUSEDOWN
document.addEventListener('mousedown', mouseDown);
var mouseDown_x = mouseDown_y = 0;
var mouseDown_button =  {
  "left":false,
  "middle":false,
  "right":false};
function mouseDown(event){
  if(event.type == 'mousedown'){
    mouseDown_x = mouseCanvasPosition_x;
    mouseDown_y = mouseCanvasPosition_y;
    if(event.button & 0) mouseDown_button.right = true;
    if(event.button & 1) mouseDown_button.middle = true;
    if(event.button & 2) mouseDown_button.left = true;
  }
}

//^^^^^^^^^^^^^^^^^^^^^^^^^MOUSE LISTENER^^^^^^^^^^^^^^^^^^^^^^^^^//

}
