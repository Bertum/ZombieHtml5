function bucle() {
    contextoZombie.clearRect(0, 0, 2048, 2048)
    contextosensores.clearRect(0, 0, 2048, 2048)
    for (var i = 0; i < numeroZombies; i++) {
        // Pinto el npc
        drawImageRot(contextoZombie, sprite, zombies[i].posx, zombies[i].posy, 12, 12, zombies[i].angulo)
        // Pinto sus sensores
        // 30 grados
        /* contextosensores.beginPath()
         contextosensores.arc(zombies[i].posx + Math.cos(zombies[i].angulo + Math.PI / 6) * 10, zombies[i].posy + Math.sin(zombies[i].angulo + Math.PI / 6) * 10, 2, 0, Math.PI * 2, true);
         contextosensores.fill();
         contextosensores.closePath();
         // 60 grados
         contextosensores.beginPath()
         contextosensores.arc(zombies[i].posx + Math.cos(zombies[i].angulo + Math.PI / 3) * 10, zombies[i].posy + Math.sin(zombies[i].angulo + Math.PI / 3) * 10, 2, 0, Math.PI * 2, true);
         contextosensores.fill();
         contextosensores.closePath();
         // -30 grados
         contextosensores.beginPath()
         contextosensores.arc(zombies[i].posx + Math.cos(zombies[i].angulo - Math.PI / 6) * 10, zombies[i].posy + Math.sin(zombies[i].angulo - Math.PI / 6) * 10, 2, 0, Math.PI * 2, true);
         contextosensores.fill();
         contextosensores.closePath();
         // -60 grados
         contextosensores.beginPath()
         contextosensores.arc(zombies[i].posx + Math.cos(zombies[i].angulo - Math.PI / 3) * 10, zombies[i].posy + Math.sin(zombies[i].angulo - Math.PI / 3) * 10, 2, 0, Math.PI * 2, true);
         contextosensores.fill();
         contextosensores.closePath();*/
        // Vamos a hacer que se muevan
        zombies[i].muevete();
    }
    clearTimeout(temporizador);
    temporizador = setTimeout("bucle()", 1)

}