var snake;
var snakeLength;
var snakeSize;


var context;
var screenWidth;
var screenHeight;

gameInitialize();
gameDraw();

function gameInitialize(){
var  canvas = document.getElementById("game-screen");
context = canvas.getContext("2d");

screenWidth = window.innerWidth;
screenHeight = window.innerHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;
}

function gameloop() {

}

function gameDraw(){
    context.fillStyle = "rgb(250, 247, 157)";
    context.fillRect(0, 0, screenWidth, screenHeight);
    
}

function snakeInitialize(){
 snake = [];
 snakelenth= 15;
 snakesize= 20;
}

function snakeDraw(){
    
}

function snakeUpdate(){
    
}
