Zombie.prototype = Object.create(MainObject.prototype);
function Zombie(x, y, angulo, velocidad) {
    MainObject.call(this, x, y);
    this.angulo = angulo;
    this.velocidad = velocidad;
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
        this.angulo += 180;
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
}