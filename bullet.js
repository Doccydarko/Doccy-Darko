var bullet = function() 
{
	this.image = document.createElement("img");
	this.x = player.x;
	this.y = player.y;
	this.width = 5;
	this.height = 5;


	this.image.src = "bullet.png";

};

bullet.prototype.update = function(deltaTime)
{
	if( typeof(this.rotation) == "undefined" )
		this.rotation = 0; // hang on, where did this variable come from

	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		this.rotation -= deltaTime;
	}
	else
	{
		this.rotation += deltaTime;
	}
}

bullet.prototype.draw = function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}