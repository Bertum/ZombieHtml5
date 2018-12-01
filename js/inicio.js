function inicio() {
    for (var i = 0; i < numeroZombies; i++) {
        zombies[i] = new Zombie(Math.random() * 2048, Math.random() * 2048, Math.random() * Math.PI * 2, 6);
    }
    //contextoMap.drawImage(map, 0, 0)
    contextoCleanMap.drawImage(cleanMap, 0, 0)
    temporizador = setTimeout("bucle()", 1000)
    contextoZombie.fillStyle = "red"
    contextosensores.fillStyle = "green"
}