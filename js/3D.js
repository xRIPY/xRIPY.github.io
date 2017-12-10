$(function(){
	var canvas = document.querySelector('canvas');
	var c = canvas.getContext('2d');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	
	var x = 0;
	var y = 0;
	var z = 0;
	z = -z;
	var xr = 0;
	var f = 1000;
	var xp = [];
	var yp = [];
	var zp = [];
	var x3D = [];
	var y3D = [];
	xp.push(-10,10,10,-10,-10,10,10,-10);
	yp.push(110,110,90,90,110,110,90,90);
	zp.push(10,10,10,10,-10,-10,-10,-10);
	
	c.font = "15px monospace";
	c.fillStyle = "black";
	c.textAlign = "right";
	
	function animate(){
		
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	
	c.fillText("Up...............Z++", canvas.width-25, canvas.height-200); 
	c.fillText("Down.............Z--", canvas.width-25, canvas.height-175); 
	c.fillText("Right............X++", canvas.width-25, canvas.height-150); 
	c.fillText("Left.............X--", canvas.width-25, canvas.height-125); 
	c.fillText("Z................Y++", canvas.width-25, canvas.height-100); 
	c.fillText("C................Y--", canvas.width-25, canvas.height-75); 
	c.fillText("Q.........Rotation++", canvas.width-25, canvas.height-50); 
	c.fillText("E.........Rotation--", canvas.width-25, canvas.height-25); 
	
	for(var i = 0; i < xp.length; i++)
	{
		x3D[i] = (((xp[i]-x)*Math.cos(xr)-(yp[i]-y)*Math.sin(xr))*f)/((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr));
		y3D[i] = ((zp[i]-z)*f)/((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr));
	}
	
	c.beginPath();
	c.strokeStyle = "#16161d";
	c.moveTo(x3D[0]+innerWidth/2,y3D[0]+innerHeight/2);
	c.lineTo(x3D[1]+innerWidth/2,y3D[1]+innerHeight/2);
	c.lineTo(x3D[2]+innerWidth/2,y3D[2]+innerHeight/2);
	c.lineTo(x3D[3]+innerWidth/2,y3D[3]+innerHeight/2);
	c.lineTo(x3D[0]+innerWidth/2,y3D[0]+innerHeight/2);
	c.lineTo(x3D[4]+innerWidth/2,y3D[4]+innerHeight/2);
	c.lineTo(x3D[5]+innerWidth/2,y3D[5]+innerHeight/2);
	c.lineTo(x3D[6]+innerWidth/2,y3D[6]+innerHeight/2);
	c.lineTo(x3D[7]+innerWidth/2,y3D[7]+innerHeight/2);
	c.lineTo(x3D[8]+innerWidth/2,y3D[8]+innerHeight/2);
	c.lineTo(x3D[4]+innerWidth/2,y3D[4]+innerHeight/2);
	c.moveTo(x3D[3]+innerWidth/2,y3D[3]+innerHeight/2);
	c.lineTo(x3D[7]+innerWidth/2,y3D[7]+innerHeight/2);
	c.moveTo(x3D[2]+innerWidth/2,y3D[2]+innerHeight/2);
	c.lineTo(x3D[6]+innerWidth/2,y3D[6]+innerHeight/2);
	c.moveTo(x3D[1]+innerWidth/2,y3D[1]+innerHeight/2);
	c.lineTo(x3D[5]+innerWidth/2,y3D[5]+innerHeight/2);
	c.moveTo(x3D[0]+innerWidth/2,y3D[0]+innerHeight/2);
	c.stroke();
		
	}
	animate();
	
	$(document).keydown(function(e){
		var key = e.which;
		if(key == "37") x--;
		else if(key == "38") z--;
		else if(key == "39") x++;
		else if(key == "40") z++;
		else if(key == "90") y--;
		else if(key == "67") y++;
		else if(key == "81") xr -= Math.PI/300;
		else if(key == "69") xr += Math.PI/300;
	})
	
});