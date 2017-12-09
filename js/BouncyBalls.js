$(function(){	
	function Circle(x, y, r, Vx, Vy, a, g, color)
	{
		this.x = x;
		this.y = y;
		this.r = r;
		this.Vy = Vy;
		this.Vx = Vx;
		this.a = a;
		this.g = g;
		this.draw = function()
		{
			C.drawArc({
			  layer: true,
			  fillStyle: color,
			  x: this.x, y: this.y,
			  radius: this.r,
			  start: 0, end: 360
			});
		}
		this.update = function()
		{
			if (this.x + r >= window.innerWidth || this.x - r <= 0 || this.y + r >= window.innerHeight || this.y - r <= 0)
			{
				if (this.x + this.r >= window.innerWidth)	{Vx = -Vx*a; this.x = window.innerWidth - this.r}
				if (this.x - this.r <= 0)					{Vx = -Vx*a; this.x = 0 + this.r}
				if (this.y + this.r >= window.innerHeight)	{Vy = -Vy*a; this.y = window.innerHeight - this.r; Vx *= a}
				if (this.y - this.r <= 0)					{Vy = -Vy*a; this.y = 0 + this.r}
			}
			else 											{Vy += g;}
			this.y += Math.ceil(Vy);
			this.x += Vx;
			this.draw();
		}
	}
	var C = $('#_canvas');
	var ball = [];
	for( var i = 0; i < 5; i++)
	{
		var r = Math.random()*75+25;
		var x = Math.random()*(window.innerWidth-r*2)+r
		var y = Math.random()*(window.innerHeight-r*2)+r
		var vx = (Math.random()-0.5) * 50;
		var vy = (Math.random()-0.5) * 50;
		var r = Math.floor(Math.random() * 128)+128
		var g = Math.floor(Math.random() * 128)+128
		var b = Math.floor(Math.random() * 128)+128
		var rgb = 'rgba('+r+ ', ' +g+ ', ' +b+ ', ' +0.9+ ')';
		ball[i] = new Circle(x,y,r,vx,vy,0.8,1,rgb);
	}	
	function animate(){
		requestAnimationFrame(animate);
		C.attr("width",window.innerWidth).attr("height",window.innerHeight);
		C.clearCanvas();
		C.removeLayers();
		for( var i = 0; i < 5; i++)
		{
			ball[i].update();
		}
	}
	animate();
});