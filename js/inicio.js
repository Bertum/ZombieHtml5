function inicio() {
    //Iniciamos zombies
    for (var i = 0; i < numeroZombies; i++) {
        zombies[i] = new Zombie(Math.random() * 656, Math.random() * 513, Math.random() * Math.PI * 2, 3);
    }
    //contextoMap.drawImage(map, 0, 0);
    contextoCleanMap.drawImage(cleanMap, 0, 0);
    temporizador = setTimeout("bucle()", 1000);
    contextoZombie.fillStyle = "red";
    contextosensores.fillStyle = "green";
    $("#playerCanvas").click(function (event) {
        startMovement = true;
        clickTargetX = event.pageX;
        clickTargetY = event.pageY;
        //player.angulo = Math.atan2(clickTargetY - player.posY, clickTargetX - player.posX) * (180 / Math.PI);
        player.angulo = Math.atan2(clickTargetY - player.posY, clickTargetX - player.posX);
        console.log(clickTargetX, clickTargetY);
    });
}