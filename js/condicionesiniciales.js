var spritesheet = new Image();
spritesheet.src = "images/spritesheetboxer.png";
var sprite = new Image();
sprite.src = "images/sprite.png";
var numeroZombies = 100;
var zombies = new Array();
var map = new Image();
map.src = "images/map.png";
var cleanMap = new Image();
cleanMap.src = "images/clean_map.png";
var temporizador;
var contextoMap = document.getElementById("map").getContext("2d");
var contextoZombie = document.getElementById("zombies").getContext("2d");
var contextosensores = document.getElementById("sensores").getContext("2d");
var contextosprite = document.getElementById("spritesheet").getContext("2d");
var contextoCleanMap = document.getElementById("cleanMap").getContext("2d");
setTimeout("inicio()", 1000)