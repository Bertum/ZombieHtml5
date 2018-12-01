function bucle() {
    contextoZombie.clearRect(0, 0, 2048, 2048);
    contextosensores.clearRect(0, 0, 2048, 2048);
    contextoPlayer.clearRect(0, 0, 2048, 2048);
    for (var i = 0; i < numeroZombies; i++) {
        // Pinto el npc
        drawImageRot(contextoZombie, sprite, zombies[i].posX, zombies[i].posY, 12, 12, zombies[i].angulo)
        // Vamos a hacer que se muevan
        zombies[i].muevete();
    }
    if (startMovement) {
        player.posX += (clickTargetX - player.posX) / player.velocidad;
        player.posY += (clickTargetY - player.posY) / player.velocidad;
    }
    contextoPlayer.drawImage(pjSprite, player.posX - sprite.width / 2, player.posY - sprite.height / 2, 64, 64);
    clearTimeout(temporizador);
    temporizador = setTimeout("bucle()", 33)

}