function inicio() {
    for (var i = 0; i < numeroZombies; i++) {
        zombies[i] = new Zombie(Math.random() * 656, Math.random() * 513, Math.random() * Math.PI * 2, 3);
    }
    //contextoMap.drawImage(map, 0, 0)
    contextoCleanMap.drawImage(cleanMap, 0, 0)
    temporizador = setTimeout("bucle()", 1000)
    contextoZombie.fillStyle = "red"
    contextosensores.fillStyle = "green"
    $("#playerCanvas").click(function (event) {
        startMovement = true;
        clickTargetX = event.pageX;
        clickTargetY = event.pageY;
        //console.log("PositionMouse: "+clickTargetX, clickTargetY);
    });
}