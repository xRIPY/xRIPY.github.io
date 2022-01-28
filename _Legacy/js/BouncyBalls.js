$(function(){	
	$('img').hide();
	$('.slide').width(window.innerWidth - 50);

	$('html').on("click",function(){
		$('#_canvas').fadeToggle(200);
	});
	
	$('.slide').on("click",function(){
		$('.slide').next('img').slideToggle(200);
		$('#_canvas').fadeToggle(0);
	});
	
	//global stuff-----------------------------------------------
	var C = $('#_canvas'); // canvas
	var Ammount = 50; // of balls
	var mouse = { x: 0, y: 0 }
	window.addEventListener('mousemove', function(event){ mouse.x = event.x; mouse.y = event.y; });
	function randomColor(){
		var r = Math.floor(Math.random() * 128)+128;				//colore
		var g = Math.floor(Math.random() * 128)+128;				//colore
		var b = Math.floor(Math.random() * 128)+128;				//colore
		return 'rgba('+r+','+g+','+b+',0.9)';
	}
	
	//Ball
	function Circle(x, y, r, Vx, Vy, a, g, color)
	{
		this.g = g;
		this.draw = function()
		{
			C.drawArc({
			  fillStyle: color,
			  x: x, y: y,
			  radius: r,
			  start: 0, end: 360
			});
		}
		this.update = function()
		{
			//gravity + attrito
			if (x + r >= window.innerWidth || x - r <= 0 || y + r >= window.innerHeight || y - r <= 0)
			{ // collisioni con i muri
				if (x + r >= window.innerWidth)		{Vx = -Vx*a; x = window.innerWidth - r}
				if (x - r <= 0)						{Vx = -Vx*a; x = 0 + r}
				if (y + r >= window.innerHeight)	{Vy = -Vy*a; y = window.innerHeight - r; Vx *= a}
				if (y - r <= 0)						{Vy = -Vy*a; y = 0 + r}
			}
			else 											{Vy += this.g;} // velocità verticale - gravità 
			y += Math.ceil(Vy);	//applicazione della velocità verticale.
			x += Vx; 			// applicazione velocità orizzontale.
			this.draw();
			//interactivity
			if( mouse.x - x < r && mouse.x - x > -r && mouse.y - y < r && mouse.y - y > -r) {
				Vy = mouse.y - y;
				Vx = mouse.x - x;
			}
		}
	}
	
	var ball = []; // balls
	for( var i = 0; i < Ammount; i++)
	{
		var rad = Math.random()*25+10;							//raggio
		var x = Math.random()*(window.innerWidth-rad*2)+rad		//x
		var y = Math.random()*(window.innerHeight-rad*2)+rad	//y
		var vx = (Math.random()-0.5)*50;						//velocità iniziale orizzontale
		var vy = (Math.random()-0.5)*50;						//velocità iniziale verticale
		// inizializazione di variabili all'interno di una lista senza nome ma con i metodi della classa
		ball[i] = new Circle(x,y,rad,vx,vy,0.8,1+rad/35,randomColor());
	}	
	 
	//animate
	function animate()
	{
		requestAnimationFrame(animate);
		C.attr("width",window.innerWidth).attr("height",window.innerHeight);
		C.clearCanvas();
		C.removeLayers();
		for( var i = 0; i < Ammount; i++) { ball[i].update(); }
	}
	animate();
	
	$(document).keydown(function(e){
		switch(e.which)
		{
			case 38: for(var i = 0; i < Ammount; i++) { ball[i].g = 0; } break;
			case 40: for(var i = 0; i < Ammount; i++) { ball[i].g = 1; } break;
			case 39: ball.push(new Circle(mouse.x,mouse.y, Math.random()*25+10, (Math.random()-0.5)*50, (Math.random()-0.5)*50, 0.8, 1+(Math.random()*25+10)/35, randomColor())); Ammount++; break;
			case 37: ball.pop(); Ammount--; break;
		}
	});	
});