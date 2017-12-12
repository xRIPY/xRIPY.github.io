$(function(){
	$('html').on("click",function(){
		$('#_canvas').fadeToggle(200);
	});
	
	//global stuff-----------------------------------------------------------------------------
	var canvas = document.querySelector('canvas');
	var c = canvas.getContext('2d');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	c.font = "15px monospace";
	c.fillStyle = "#fff";
	c.textAlign = "right";
	c.strokeStyle = "#fff";
	var x = 0;
	var y = 0;
	var z = 5;
	var xr = 0;
	var f = 1000;
	function textCommandPrint()
	{
		c.fillText("Click..........ShowDoc", canvas.width-25, canvas.height-200); 
		c.fillText("Canc........Delete OBJ", canvas.width-25, canvas.height-175); 
		c.fillText("Ins.........Create OBJ", canvas.width-25, canvas.height-150); 
		c.fillText("Walk..............WASD", canvas.width-25, canvas.height-125); 
		c.fillText("Up...........Altezza++", canvas.width-25, canvas.height-100); 
		c.fillText("Down.........Altezza--", canvas.width-25, canvas.height-75); 
		c.fillText("Right.......Rotation++", canvas.width-25, canvas.height-50); 
		c.fillText("Left........Rotation--", canvas.width-25, canvas.height-25); 
	}
	
	//----------------------------------------------FORM-----------------------------------------------------------
	function Form(xm,ym,zm,xx,yy,zz,color)
	{
		var xp = [];
		var yp = [];
		var zp = [];
		var x3D = [];
		var y3D = [];
		xp.push(xm-xx/2,xm+xx/2,xm+xx/2,xm-xx/2,xm-xx/2,xm+xx/2,xm+xx/2,xm-xx/2);
		yp.push(ym+yy/2,ym+yy/2,ym-yy/2,ym-yy/2,ym+yy/2,ym+yy/2,ym-yy/2,ym-yy/2);
		zp.push(zm+zz,zm+zz,zm+zz,zm+zz,zm,zm,zm,zm);
		this.print = function() {
			c.strokeStyle = color;
			for(var i = 0; i < xp.length; i++) {
				x3D[i] = (((xp[i]-x)*Math.cos(xr)-(yp[i]-y)*Math.sin(xr))*f)/((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr)) +innerWidth/2;
				y3D[i] = ((-zp[i]+z)*f)/((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr)) + innerHeight/2;
				if (((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr)) < 0) {c.strokeStyle = "rgba(0,0,0,0)";}
			}
			c.beginPath();
			c.moveTo(x3D[0],y3D[0]);
			c.lineTo(x3D[1],y3D[1]);
			c.lineTo(x3D[2],y3D[2]);
			c.lineTo(x3D[3],y3D[3]);
			c.lineTo(x3D[0],y3D[0]);
			c.lineTo(x3D[4],y3D[4]);
			c.lineTo(x3D[5],y3D[5]);
			c.lineTo(x3D[6],y3D[6]);
			c.lineTo(x3D[7],y3D[7]);
			c.lineTo(x3D[8],y3D[8]);
			c.lineTo(x3D[4],y3D[4]);
			c.moveTo(x3D[3],y3D[3]);
			c.lineTo(x3D[7],y3D[7]);
			c.moveTo(x3D[2],y3D[2]);
			c.lineTo(x3D[6],y3D[6]);
			c.moveTo(x3D[1],y3D[1]);
			c.lineTo(x3D[5],y3D[5]);
			c.moveTo(x3D[0],y3D[0]);
			c.stroke();
		}
	}

	//objs
	var OBJ = [];
	OBJ.push(new Form(0,50,0,10,10,10,"#f60")); //center box				4
	OBJ.push(new Form(12.5,50,0,7.5,7.5,7.5,"#f80")); //right box			5
	OBJ.push(new Form(-12.5,50,0,7.5,7.5,7.5,"#f40")); //left box			3
	OBJ.push(new Form(25,50,0,5,5,5,"#fc0")); //righter box 				7
	OBJ.push(new Form(-25,50,0,5,5,5,"#f00")); //lefter box					1
	OBJ.push(new Form(39,100,0,2.5,2.5,25,"#fa0")); //tower behind left		6
	OBJ.push(new Form(-39,100,0,2.5,2.5,25,"#f20")); //tower behind right	2
	OBJ.push(new Form(12.5,-25,-5,2.5,2.5,2.5,"#f00")); // behind you box right	
	OBJ.push(new Form(0,-25,0,2.5,2.5,2.5,"#0f0")); // behind you box center	
	OBJ.push(new Form(-12.5,-25,5,2.5,2.5,2.5,"#00f")); // behind you box left	
	
	//cycle
	function animate()
	{
		requestAnimationFrame(animate);
		c.clearRect(0,0,innerWidth,innerHeight);
		textCommandPrint();
		for(var i = 0; i < OBJ.length; i++) {OBJ[i].print();}	
	}
	animate();
	
	// movement
	$(document).keydown(function(e){
		switch(e.which)
		{
			case 65: x = x-Math.cos(xr); y = y+Math.sin(xr); break; //A / left
			case 68: x = x+Math.cos(xr); y = y-Math.sin(xr); break; //D / right
			case 87: y = y+Math.cos(xr); x = x+Math.sin(xr); break; //W / front
			case 83: y = y-Math.cos(xr); x = x-Math.sin(xr); break; //S / behind
			case 38: z++; break;									//Down / down
			case 40: z--; break;									//Up / up
			case 39: xr += Math.PI/100; break;						//Rotation / right
			case 37: xr -= Math.PI/100; break;						//Rotation / left
			case 45: OBJ.push(new Form(x,y,z-1.25,2.5,2.5,2.5,"#FFF")); break;
			case 46: OBJ.pop(); break;
		}
	});	
});