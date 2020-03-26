
//-----------------------KEYBOARD LISTENER---------------------//
document.addEventListener('keydown', keyListener);
document.addEventListener('keyup', keyListener);
keyListener_downKeys = [];

function keyListener(event){
if(event.type == 'keydown'){
  if (!isElemInArr(keyListener_downKeys, event.keyCode)) 
    keyListener_downKeys.push(event.keyCode);
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

document.addEventListener('mousedown', mouseDownListener);
document.addEventListener('mouseup', mouseDownListener);
document.addEventListener('mousemove', mouseMoveListener)

//----MOUSECOORDS----
var mouseX = 0;
var mouseY = 0;

function mouseMoveListener(e){
     if(event.target == canvas){
          mouseX = event.clientX - event.target.offsetLeft
          mouseY = event.clientY - event.target.offsetTop;
     }
}


function getMouseX(){
     return mouseX
}

function getMouseY(){
     return mouseY
}

//-----MOUSEDOWN-----
var mouseDown = false;

function mouseDownListener(e){
     if(event.type == 'mousedown'){
          mouseDown = true
     }
     if(event.type == 'mouseup'){
          mouseDown = false
     }
}


function isMouseDown(){
     return mouseDown
}
//^^^^^^^^^^^^^^^^^^^^^^^^^MOUSE LISTENER^^^^^^^^^^^^^^^^^^^^^^^^^//

}
