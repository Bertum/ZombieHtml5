Zombie.prototype = Object.create(MainObject.prototype);
function Zombie(x, y, angulo, velocidad) {
    MainObject.call(this, x, y);
    this.angulo = angulo;
    this.velocidad = velocidad;
    this.spritePosition = 0;
    this.following = false;
    this.muevete = function () {
        var posXCalc = this.posX + Math.cos(this.angulo) * this.velocidad;
        var posYCalc = this.posX + Math.sin(this.angulo) * this.velocidad;
        if (posXCalc < map.width && posXCalc > 0) {
            this.posX = posXCalc;
            this.giraaleatorio();
        } else {
            this.gira180();
        }
        if (posYCalc < map.height && posYCalc > 0) {
            this.posY = posYCalc;
            this.giraaleatorio();
        } else {
            this.gira180();
        }
        this.colision();
    }

    this.giraaleatorio = function () {
        this.angulo += (Math.random() - 0.5) * 0.1
    }

    this.gira180 = function () {
        this.angulo += Math.PI;
    }

    this.drawZombie = function () {
        contextoZombie.drawImage(sprite, this.spritePosition * 35, 0, 35, 33, this.posX, this.posY, 35, 33);
        this.spritePosition++;
        if (this.spritePosition == 3) {
            this.spritePosition = 0;
        }
    }

    this.colision = function () {
        // 30 grados
        var pregunta = contextoCleanMap.getImageData(this.posX + Math.cos(this.angulo + Math.PI / 6) * 10, this.posY + Math.sin(this.angulo + Math.PI / 6) * 10, 1, 1)
        if (pregunta.data[0] < 50) { this.angulo -= 0.1 }
        // 60 grados
        var pregunta = contextoCleanMap.getImageData(this.posX + Math.cos(this.angulo + Math.PI / 3) * 10, this.posY + Math.sin(this.angulo + Math.PI / 3) * 10, 1, 1)
        if (pregunta.data[0] < 50) { this.angulo -= 0.2 }
        // -30 grados
        var pregunta = contextoCleanMap.getImageData(this.posX + Math.cos(this.angulo - Math.PI / 6) * 10, this.posY + Math.sin(this.angulo - Math.PI / 6) * 10, 1, 1)
        if (pregunta.data[0] < 50) { this.angulo += 0.1 }
        // -60 grados
        var pregunta = contextoCleanMap.getImageData(this.posX + Math.cos(this.angulo - Math.PI / 3) * 10, this.posY + Math.sin(this.angulo - Math.PI / 3) * 10, 1, 1)
        if (pregunta.data[0] < 50) { this.angulo += 0.2 }
        // 0 grados
        var pregunta = contextoCleanMap.getImageData(this.posX + Math.cos(this.angulo) * 10, this.posY + Math.sin(this.angulo) * 10, 1, 1)
        if (pregunta.data[0] < 50) { this.angulo += 0.6 }
    }

    this.pursuit = function (playerX, playerY) {
        // Para tirar lineas todos tienen que ver a todos		// Ve al resto de los otros peces
        // Solo quiero que se vean si su distancia es menor que 50
        if (Math.sqrt(Math.pow((this.posX - playerX), 2) + Math.pow((this.posY - playerY), 2)) < 50) {
            // Si el tamaño del pez numero 2 es mayor que el tamaño del pez numero 2
            // En ese caso el pez VA HACIA el segundo pez, porque sabe que va a ganar
            this.following = true;
            this.angulo = Math.atan2(playerY - this.posY, playerX - this.posX);

            if (Math.sqrt(Math.pow((this.posX - playerX), 2) + Math.pow((this.posY - playerY), 2)) < 2) {
                startMovement = false;
                window.location.href = "gameOver.html"
            }

        }
    }

}