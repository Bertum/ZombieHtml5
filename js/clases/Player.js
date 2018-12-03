Player.prototype = Object.create(MainObject.prototype);
function Player(x, y, angulo, velocidad) {
    MainObject.call(this, x, y);
    this.posX = x;
    this.posY = y;
    this.angulo = angulo;
    this.velocidad = velocidad;
    this.spritePosition = 0;

    this.movement = function () {
        //Si han pulsado en pantalla, me muevo en dirección al click
        if (startMovement) {
            this.posX += ((clickTargetX - this.posX) / this.velocidad);
            this.posY += ((clickTargetY - this.posY) / this.velocidad);
            console.log(this.posX, this.posY);
            this.colision();
        }

    }

    //funcion para comprobar si hemos llegado al objetivo o si hay lineas blancas en la trayectoria
    this.colision = function () {
        // 30 grados
        var pregunta = contextoCleanMap.getImageData(this.posX + Math.cos(this.angulo + Math.PI / 6) * 10,
            this.posY + Math.sin(this.angulo + Math.PI / 6) * 10, 1, 1);

        if (pregunta.data[0] >= 200 && pregunta.data[1] < 20 && pregunta.data[2] < 20) {
            console.log("Rescatado!");
            window.location.href = "gameWin.html"
        }

        if (pregunta.data[0] > 50) {
            startMovement = false;
            console.log("Hi 30!");
        }
        // 60 grados
        var pregunta = contextoCleanMap.getImageData(this.posX + Math.cos(this.angulo + Math.PI / 3) * 10,
            this.posY + Math.sin(this.angulo + Math.PI / 3) * 10, 1, 1);
        if (pregunta.data[0] > 50) {
            console.log("Hi 60!");
            startMovement = false;
        }
        // -30 grados
        var pregunta = contextoCleanMap.getImageData(this.posX + Math.cos(this.angulo - Math.PI / 6) * 10,
            this.posY + Math.sin(this.angulo - Math.PI / 6) * 10, 1, 1);
        if (pregunta.data[0] > 50) {
            console.log("Hi -30!");
            startMovement = false;
        }
        // -60 grados
        var pregunta = contextoCleanMap.getImageData(this.posX + Math.cos(this.angulo - Math.PI / 3) * 10,
            this.posY + Math.sin(this.angulo - Math.PI / 3) * 10, 1, 1);
        if (pregunta.data[0] > 50) {
            console.log("Hi -60!");
            startMovement = false;
        }
        // 0 grados
        var pregunta = contextoCleanMap.getImageData(this.posX + Math.cos(this.angulo) * 10,
            this.posY + Math.sin(this.angulo) * 10, 1, 1);
        if (pregunta.data[0] > 50) {
            console.log("Hi 0!");
            startMovement = false;
        }
    }

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