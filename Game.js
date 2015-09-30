var canvas;
var ctx;

function Game(){
	this.initCanvas();
	player = new Player();
	goal = new Square();
}

Game.prototype.test = function(){

	console.log("Hello tester");

}

Game.prototype.gameLoop = function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(player.checkCollision(goal)){
		console.log("Collided");

		ctx.save();
		//add in your own colour
		ctx.fillStyle = rgb(4,5,6);
		//change this
		ctx.font = 'italic 40pt Calibri';
		//otherwise bottom
		ctx.textBaseline = "top";
		//Put your message here; x and y are where the message will appear...
		ctx.fillText("You Win", 50, 50);
		//Any idea what save and restore do?
		ctx.restore();
	}
	else{
		console.log("Not collided")
		goal.draw();

	}

	player.draw();

	window.requestAnimationFrame(game.gameLoop);
}

Game.prototype.initCanvas = function(){
	canvas = document.createElement("canvas");
	//ctx is the context that we will draw on
	ctx = canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}