$(document).ready(function () {
	inicio();
});

function inicio() {
    for (var i = 0; i < numeroZombies; i++) {
        zombies[i] = new Zombie(Math.random() * 2048, Math.random() * 2048, Math.random() * Math.PI * 2, Math.random() * 2 + 2);
    }
    contextosprite.drawImage(spritesheet, 0, 0, 100, 20)
    contextolaberinto.drawImage(laberinto, 0, 0)
    temporizador = setTimeout("bucle()", 1000)
    contextoZombie.fillStyle = "red";
    contextosensores.fillStyle = "green";
}

function bucle() {
    contextoZombie.clearRect(0, 0, 2048, 2048)
    contextosensores.clearRect(0, 0, 2048, 2048)
    for (var i = 0; i < numeroZombies; i++) {
        // Pinto el npc
        drawImageRot(contextoZombie, sprite, zombies[i].posX, zombies[i].posY, 12, 12, zombies[i].angulo)
        // Pinto sus sensores
        // 30 grados
        contextosensores.beginPath()
        contextosensores.arc(zombies[i].posX + Math.cos(zombies[i].angulo + Math.PI / 6) * 10, zombies[i].posY + Math.sin(zombies[i].angulo + Math.PI / 6) * 10, 2, 0, Math.PI * 2, true);
        contextosensores.fill();
        contextosensores.closePath();
        // 60 grados
        contextosensores.beginPath()
        contextosensores.arc(zombies[i].posX + Math.cos(zombies[i].angulo + Math.PI / 3) * 10, zombies[i].posY + Math.sin(zombies[i].angulo + Math.PI / 3) * 10, 2, 0, Math.PI * 2, true);
        contextosensores.fill();
        contextosensores.closePath();
        // -30 grados
        contextosensores.beginPath()
        contextosensores.arc(zombies[i].posX + Math.cos(zombies[i].angulo - Math.PI / 6) * 10, zombies[i].posY + Math.sin(zombies[i].angulo - Math.PI / 6) * 10, 2, 0, Math.PI * 2, true);
        contextosensores.fill();
        contextosensores.closePath();
        // -60 grados
        contextosensores.beginPath()
        contextosensores.arc(zombies[i].posX + Math.cos(zombies[i].angulo - Math.PI / 3) * 10, zombies[i].posY + Math.sin(zombies[i].angulo - Math.PI / 3) * 10, 2, 0, Math.PI * 2, true);
        contextosensores.fill();
        contextosensores.closePath();
        // Vamos a hacer que se muevan
        zombies[i].muevete();
    }
    clearTimeout(temporizador);
    temporizador = setTimeout("bucle()", 33)

}