Player.prototype = Object.create(MainObject.prototype);
function Player(x, y, angulo, velocidad) {
    MainObject.call(this, x, y);
    this.posX = x;
    this.posY = y;
    this.angulo = angulo;
    this.velocidad = velocidad;
    this.spritePosition = 0;

    this.drawPlayer = function () {
        contextoPlayer.drawImage(pjSprite, this.spritePosition * 35, 0, 35, 55, this.posX, this.posY, 35, 55)
        this.spritePosition++;
        if (this.spritePosition == 6) {
            this.spritePosition = 0;
        }
    }

}