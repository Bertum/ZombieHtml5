function inicio() {
    for (var i = 0; i < numeroZombies; i++) {
        zombies[i] = new Zombie(Math.random() * 2048, Math.random() * 2048, Math.random() * Math.PI * 2, Math.random() * 2 + 2);
    }
    contextosprite.drawImage(spritesheet, 0, 0, 100, 20);
    contextolaberinto.drawImage(laberinto, 0, 0,2048,2048);
    temporizador = setTimeout("bucle()", 1000);
    contextoZombie.fillStyle = "red";
    contextosensores.fillStyle = "green";
    $("#playerCanvas").click(function(event){
		startMovement=true;
		clickTargetX = event.pageX;
		clickTargetY = event.pageY;
		console.log(clickTargetX,clickTargetY);
	});
}