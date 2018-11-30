var startMovement = false;
var clickTargetX = 0;
var clickTargetY = 0;

var player;

var spritesheet = new Image();
spritesheet.src = "images/spritesheetboxer.png";
spritesheet.crossOrigin = "Anonymous";
var pjSprite = new Image();
pjSprite.addEventListener("load", function(){
	//Once image loads, create player in random position
	player = new Player(300,300,Math.PI/2,20);
});
pjSprite.src = "images/bk_player_assets/player_9mmhandgun.png";
pjSprite.crossOrigin = "Anonymous";

var sprite = new Image();
sprite.src = "images/sprite.png";
sprite.crossOrigin = "Anonymous";

var numeroZombies = 10;
var zombies = new Array();

var laberinto = new Image();
laberinto.src = "images/clean_map.png";
laberinto.crossOrigin = "Anonymous";

var temporizador;

var contextolaberinto = document.getElementById("laberinto").getContext("2d");
var contextoZombie = document.getElementById("zombies").getContext("2d");
var contextosensores = document.getElementById("sensores").getContext("2d");
var contextosprite = document.getElementById("spritesheet").getContext("2d");
var contextoPlayer = document.getElementById("playerCanvas").getContext("2d");

setTimeout("inicio()", 1000)