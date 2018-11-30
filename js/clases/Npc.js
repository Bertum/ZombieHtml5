function Npc(x, y, angulo, velocidad) {
    this.posx = x;
    this.posy = y;
    this.angulo = angulo;
    this.velocidad = velocidad;
    this.muevete = function () {
        this.posx += Math.cos(this.angulo) * this.velocidad
        this.posy += Math.sin(this.angulo) * this.velocidad
        this.giraaleatorio();
        this.colision();
    }
    this.giraaleatorio = function () {
        this.angulo += (Math.random() - 0.5) * 0.1
    }
    this.colision = function () {
        // 30 grados
        var pregunta = contextolaberinto.getImageData(this.posx + Math.cos(this.angulo + Math.PI / 6) * 10, this.posy + Math.sin(this.angulo + Math.PI / 6) * 10, 1, 1)
        if (pregunta.data[0] < 50) { this.angulo -= 0.1 }
        // 60 grados
        var pregunta = contextolaberinto.getImageData(this.posx + Math.cos(this.angulo + Math.PI / 3) * 10, this.posy + Math.sin(this.angulo + Math.PI / 3) * 10, 1, 1)
        if (pregunta.data[0] < 50) { this.angulo -= 0.2 }
        // -30 grados
        var pregunta = contextolaberinto.getImageData(this.posx + Math.cos(this.angulo - Math.PI / 6) * 10, this.posy + Math.sin(this.angulo - Math.PI / 6) * 10, 1, 1)
        if (pregunta.data[0] < 50) { this.angulo += 0.1 }
        // -60 grados
        var pregunta = contextolaberinto.getImageData(this.posx + Math.cos(this.angulo - Math.PI / 3) * 10, this.posy + Math.sin(this.angulo - Math.PI / 3) * 10, 1, 1)
        if (pregunta.data[0] < 50) { this.angulo += 0.2 }
        // 0 grados
        var pregunta = contextolaberinto.getImageData(this.posx + Math.cos(this.angulo) * 10, this.posy + Math.sin(this.angulo) * 10, 1, 1)
        if (pregunta.data[0] < 50) { this.angulo += 0.6 }
    }
}