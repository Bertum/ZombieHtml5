var spritesheet = new Image();
spritesheet.src = "images/spritesheetboxer.png";
spritesheet.crossOrigin = "Anonymous";
var sprite = new Image();
sprite.src = "images/sprite.png";
sprite.crossOrigin = "Anonymous";
var numeroZombies = 100;
var zombies = new Array();
var laberinto = new Image();
laberinto.src = "images/maze.jpg";
laberinto.crossOrigin = "Anonymous";
var temporizador;
var contextolaberinto = document.getElementById("laberinto").getContext("2d")
var contextoZombie = document.getElementById("zombies").getContext("2d")
var contextosensores = document.getElementById("sensores").getContext("2d")
var contextosprite = document.getElementById("spritesheet").getContext("2d")
setTimeout("inicio()", 1000)