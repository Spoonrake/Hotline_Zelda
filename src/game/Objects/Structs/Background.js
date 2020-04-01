  class Background extends ZelObject{
      constructor(x, y, image){
        super()
        this.x = x;
        this.y = y;
        this.width = 1024;
        this.height = 1024;
        this.backgroundImage = new Image();
        this.backgroundImage.src = image;
      }

      draw(){
        screen.drawImage(this.backgroundImage, 0, 0, 1024, 1024, this.x, this.y, 1024, 1024);
      }
  }
