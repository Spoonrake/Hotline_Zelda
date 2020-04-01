function loadLevelTest(){
  SCENE.addObject(background= new Background(0, 0, "./img/bg.jpg"));
  SCENE.addObject(enemy= new Enemy());
  SCENE.addObject(player= new Player(canvas.width/2-25, canvas.height/2-25));
}
