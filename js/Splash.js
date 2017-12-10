$(function(){
	var canvas = document.querySelector('#_canvas');
	var c = canvas.getContext('2d');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	var audio = new Audio('../Miscs/ping.mp3');
	audio.volume = 0.2;

	function Circle(x,y,red,green,blue){
		this.x = x;
		this.y = y;
		var r = 1;
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.draw = function(){
			if ( r < 750)
			{
				c.beginPath();
				c.arc(x,y,r,0,Math.PI*2,false)
				c.lineWidth = 15;
				if(r < 500) { c.lineWidth = r/500; c.strokeStyle = 'rgba('+this.red+','+this.green+','+this.blue+','+r/500+')'; }
				if(r == 500) { c.lineWidth = r/500; c.strokeStyle = 'rgba('+this.red+','+this.green+','+this.blue+','+r/500+')'; audio.play(); time = time + 0.5;}
				if (r > 500 && r < 750) { c.strokeStyle = 'rgba('+this.red+','+this.green+','+this.blue+','+1/(r-498)+')'; }
				c.stroke();
			}
			if ( r >= 750 ) {circles.shift();}
		}
		this.update = function(){
			r++;
			this.draw();
		}
	}

	var time = 0.5;
	c.textAlign = "center";
		
	var circles = [];
	setInterval(function(){
		var x = Math.random()*innerWidth;
		var y = Math.random()*innerHeight;
		var red = Math.floor(Math.random()*128+128);
		var green = Math.floor(Math.random()*128+128);
		var blue = Math.floor(Math.random()*128+128);
		circles.push(new Circle(x,y,red,green,blue));
	}, 1250);
	
	var red = Math.floor(Math.random()*128+128);
	var green = Math.floor(Math.random()*128+128);
	var blue = Math.floor(Math.random()*128+128);
	var StartCircle = new Circle(window.innerWidth/2,window.innerHeight/2,red,green,blue)
	circles.push(StartCircle);
	
	function animate(){
		requestAnimationFrame(animate);
		c.clearRect(0,0,innerWidth,innerHeight);
		for (var i = 0; i < circles.length; i++)
		{
			circles[i].update();
		}
		c.font = "30px monospace";
		c.fillStyle = "#fff";
		c.fillText(Math.floor(time), canvas.width/2, canvas.height/2+15); 
		if(time == 0.5) { c.font = "15px monospace"; c.fillStyle = "#555"; c.fillText("Wait...", canvas.width/2, canvas.height/2+35);  }
	}
	animate();
});