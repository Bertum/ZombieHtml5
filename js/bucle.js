function bucle() {
    contextoZombie.clearRect(0, 0, 2048, 2048);
    contextosensores.clearRect(0, 0, 2048, 2048);
    contextoPlayer.clearRect(0, 0, 2048, 2048);
    for (var i  in zombies) {
        // Pinto el npc
        //drawImageRot(contextoZombie, sprite, zombies[i].posX, zombies[i].posY, 12, 12, zombies[i].angulo)
        zombies[i].drawZombie();
        // Vamos a hacer que se muevan
        zombies[i].muevete();
        zombies[i].pursuit(player.posX,player.posY);
    }
    player.movement();
    player.drawPlayer();
    clearTimeout(temporizador);
    temporizador = setTimeout("bucle()", 66)

}