SCENE = new Scene()

function loadLevelTest(){
  SCENE.addObject(BACKGROUND = new Background(0, 0, "./img/bg.jpg"));
  SCENE.addObject(ENEMY = new Enemy());
  SCENE.addObject(PLAYER = new Player(canvas.width/2-25, canvas.height/2-25));
 // SCENE.addObject(CAMERA = new Camera(undefined, undefined, 2, false));
}
