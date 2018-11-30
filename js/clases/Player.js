Player.prototype = Object.create(MainObject.prototype);
function Player(x, y, angulo, velocidad) {
    MainObject.call(this,x,y);
    this.posX = x;
    this.posY = y;
    this.angulo = angulo;
    this.velocidad = velocidad;
}