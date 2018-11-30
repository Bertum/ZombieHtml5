var spritesheet = new Image();
spritesheet.src = "spritesheetboxer.png";
spritesheet.crossOrigin = "Anonymous";
var sprite = new Image();
sprite.src = "sprite.png";
sprite.crossOrigin = "Anonymous";
var numeroNpc = 100;
var npcs = new Array();
var laberinto = new Image();
laberinto.src = "maze.jpg";
laberinto.crossOrigin = "Anonymous";
var temporizador;
var contextolaberinto = document.getElementById("laberinto").getContext("2d")
var contextonpc = document.getElementById("npc").getContext("2d")
var contextosensores = document.getElementById("sensores").getContext("2d")
var contextosprite = document.getElementById("spritesheet").getContext("2d")
setTimeout("inicio()", 1000)