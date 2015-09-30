//global variables
var game;

keys = [];
function main(){
	game = new Game();

	game.gameLoop();

	window.addEventListener("keydown", player.update);
}
