class Enemy extends ZelObject{
    constructor(){
        super()
        this.x = 500
        this.y = 300
        this.width = 50
        this.height = 50

        this.sprite = new Image()
        this.sprite.src = "./img/enemy.jpg"
    }

    draw(){
        screen.drawImage(this.sprite, 0, 0, 25, 25, this.x, this.y, 50, 50)
    }

    process(){
        if(this.hasCollisionWithObj(player))
            this.swapToSprite("./img/enemyRed.jpg")
        else
            this.swapToSprite("./img/enemy.jpg")
    }

    swapToSprite(sprite){
        if(this.sprite.src != sprite)
            this.sprite.src = sprite
    }

}
