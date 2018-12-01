Player.prototype = Object.create(MainObject.prototype);
function Player(x, y, angulo, velocidad) {
    MainObject.call(this, x, y);
    this.posX = x;
    this.posY = y;
    this.angulo = angulo;
    this.velocidad = velocidad;
    this.spritePosition = 0;

    this.drawPlayer = function () {
        //Set the origin to the center of the image
        //contextoPlayer.translate(this.posX + 35 / 2, this.posY + 55 / 2);
        //Rotate the canvas around the origin
        //contextoPlayer.rotate(this.angulo - Math.PI / 2);
        //console.log("PlayerPosition: "+this.posX+", "+this.posY);
        contextoPlayer.drawImage(pjSprite, this.spritePosition * 35, 0, 35, 55, this.posX, this.posY, 35, 55);
        //reset the canvas  
        //contextoPlayer.rotate((this.angulo - Math.PI / 2) * (-1));
        //contextoPlayer.translate((this.posX + 35 / 2) * (-1), (this.posY + 55 / 2) * (-1));
        this.spritePosition++;
        if (this.spritePosition == 6) {
            this.spritePosition = 0;
        }
    }

}