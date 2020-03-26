
//-----------------------KEYBOARD LISTENER---------------------//

document.addEventListener('keydown', keyListener);
document.addEventListener('keyup', keyListener);

var keyListener_downKeys = [];

function keyListener(event){
    if(event.type == 'keydown'){
        if(!isElemInArr(keyListener_downKeys, event.keyCode)) 
            addKeyToDownKeys(event.keyCode)
    }
    else
        removeKeyFromDownKeys(event.keyCode)
}


function addKeyToDownKeys(key){
    keyListener_downKeys.push(key);
}

function removeKeyFromDownKeys(key){
    keyListener_downKeys.splice(keyListener_downKeys.indexOf(key), 1);
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
