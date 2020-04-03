class ZelObject extends Drawable{
    constructor(){
        super()
    }


    //Get random X for object position on screen response object sidze
    getRandXResponseSize(){
        var maxX = this.getMaxX()
        return getRandomIntForMax(maxX)
    }

    getMaxX(){
        return canvas.width - this.width
    }


    //Get random X for object position on screen response object sidz
    getRandYResponseSize(){
        var maxY = this.getMaxY()
        return getRandomIntForMax(maxY)
    }

    getMaxY(){
        return canvas.height - this.height
    }
}
