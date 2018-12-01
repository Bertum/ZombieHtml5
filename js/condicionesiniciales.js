var startMovement = false;
var clickTargetX = 0;
var clickTargetY = 0;

var player;

var spritesheet = new Image();
spritesheet.src = "images/spritesheetboxer.png";
var pjSprite = new Image();
pjSprite.addEventListener("load", function () {
    //Once image loads, create player in random position
    player = new Player(15, 310, Math.PI / 2, 20);
});
pjSprite.src = "images/bk_player_assets/player_walk_strip6.png";
var sprite = new Image();
sprite.src = "images/smallerZombieSpriteSheet.png";
var numeroZombies = 10;
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
var contextoPlayer = document.getElementById("playerCanvas").getContext("2d");

setTimeout("inicio()", 1000)