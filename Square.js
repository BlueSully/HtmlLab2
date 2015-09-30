function Square(){
	this.x = 600;
	this.y = 200;
	this.width = 100;
	this.height = 100;
}

Square.prototype.draw = function(){
	ctx.fillStyle = rgb(255, 0, 255);
	ctx.fillRect(this.x, this.y, this.width, this.height);
}