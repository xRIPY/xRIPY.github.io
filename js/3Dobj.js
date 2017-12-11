$(function(){
	
	//global stuff----------------------------------------------------------------------------
	var key = undefined;
	var canvas = document.querySelector('canvas');
	var c = canvas.getContext('2d');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	c.font = "15px monospace";
	c.fillStyle = "#16161d";
	c.textAlign = "right";
	c.strokeStyle = "#16161d";
	var xr = 0;
	var f = 1000;
	function textCommandPrint()
	{
		c.fillText("Walk...........WASD", canvas.width-25, canvas.height-125); 
		c.fillText("Up........Altezza++", canvas.width-25, canvas.height-100); 
		c.fillText("Down......Altezza--", canvas.width-25, canvas.height-75); 
		c.fillText("Right....Rotation++", canvas.width-25, canvas.height-50); 
		c.fillText("Left.....Rotation--", canvas.width-25, canvas.height-25); 
	}
	//------------------------------------------------------------------------------------------
	
	//----------------------------------------------CUBE-----------------------------------------------------------
	function Cube(x,y,z,color)
	{
		var xp = [];
		var yp = [];
		var zp = [];
		var x3D = [];
		var y3D = [];
		xp.push(-10,10,10,-10,-10,10,10,-10);
		yp.push(10,10,-10,-10,10,10,-10,-10);
		zp.push(10,10,10,10,-10,-10,-10,-10);
		this.print = function() {
			c.strokeStyle = color;
			for(var i = 0; i < xp.length; i++) {
				x3D[i] = (((xp[i]-x)*Math.cos(xr)-(yp[i]-y)*Math.sin(xr))*f)/((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr));
				y3D[i] = ((zp[i]-z)*f)/((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr));
				if (((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr)) < 0) {c.strokeStyle = "rgba(0,0,0,0)";}
			}
			c.beginPath();
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
		this.move = function(){
			if(key == "65") 	 {x = x-Math.cos(xr); y = y+Math.sin(xr);}
			else if(key == "38") {z--;}
			else if(key == "68") {x = x+Math.cos(xr); y = y-Math.sin(xr);}
			else if(key == "40") {z++;}
			else if(key == "83") {y = y-Math.cos(xr); x = x-Math.sin(xr);}
			else if(key == "87") {y = y+Math.cos(xr); x = x+Math.sin(xr);}
			else if(key == "39") {xr += Math.PI/300;}
			else if(key == "37") {xr -= Math.PI/300;}
		}
	}
	//----------------------------------------------RECTANGLE-----------------------------------------------------------
	function Rect(x,y,z,color)
	{
		var xp = [];
		var yp = [];
		var zp = [];
		var x3D = [];
		var y3D = [];
		xp.push(-10,10,10,-10,-10,10,10,-10);
		yp.push(10,10,-10,-10,10,10,-10,-10);
		zp.push(20,20,20,20,-20,-20,-20,-20);
		this.print = function() {
			c.strokeStyle = color;
			for(var i = 0; i < xp.length; i++) {
				x3D[i] = (((xp[i]-x)*Math.cos(xr)-(yp[i]-y)*Math.sin(xr))*f)/((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr));
				y3D[i] = ((zp[i]-z)*f)/((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr));
				if (((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr)) < 0) {c.strokeStyle = "rgba(0,0,0,0)";}
			}
			c.beginPath();
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
		this.move = function(){
			if(key == "65") 	 {x = x-Math.cos(xr); y = y+Math.sin(xr);}
			else if(key == "38") {z--;}
			else if(key == "68") {x = x+Math.cos(xr); y = y-Math.sin(xr);}
			else if(key == "40") {z++;}
			else if(key == "83") {y = y-Math.cos(xr); x = x-Math.sin(xr);}
			else if(key == "87") {y = y+Math.cos(xr); x = x+Math.sin(xr);}
			else if(key == "39") {xr += Math.PI/300;}
			else if(key == "37") {xr -= Math.PI/300;}
		}
	}
	//----------------------------------------------SLAB-----------------------------------------------------------
	function Slab(x,y,z,color)
	{
		var xp = [];
		var yp = [];
		var zp = [];
		var x3D = [];
		var y3D = [];
		xp.push(-10,10,10,-10,-10,10,10,-10);
		yp.push(10,10,-10,-10,10,10,-10,-10);
		zp.push(5,5,5,5,-5,-5,-5,-5);
		this.print = function() {
			c.strokeStyle = color;
			for(var i = 0; i < xp.length; i++) {
				x3D[i] = (((xp[i]-x)*Math.cos(xr)-(yp[i]-y)*Math.sin(xr))*f)/((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr));
				y3D[i] = ((zp[i]-z)*f)/((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr));
				if (((yp[i]-y)*Math.cos(xr)+(xp[i]-x)*Math.sin(xr)) < 0) {c.strokeStyle = "rgba(0,0,0,0)";}
			}
			c.beginPath();
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
		this.move = function(){
			if(key == "65") 	 {x = x-Math.cos(xr); y = y+Math.sin(xr);}
			else if(key == "38") {z--;}
			else if(key == "68") {x = x+Math.cos(xr); y = y-Math.sin(xr);}
			else if(key == "40") {z++;}
			else if(key == "83") {y = y-Math.cos(xr); x = x-Math.sin(xr);}
			else if(key == "87") {y = y+Math.cos(xr); x = x+Math.sin(xr);}
			else if(key == "39") {xr += Math.PI/300;}
			else if(key == "37") {xr -= Math.PI/300;}
		}
	}
	
	
	var OBJ = [];
	OBJ.push(new Slab(-25,75,-5,"#f00")); //top
	OBJ.push(new Cube(0,75,0,"#0f0")); // top
	OBJ.push(new Rect(25,75,10,"#00f")); //top
	
	OBJ.push(new Slab(40,-200,-5,"rgba(255,0,0,1)")); //<3 leftest slab 
	OBJ.push(new Cube(20,-200,25,"rgba(255,36,0,1)")); //<3 left eye
	OBJ.push(new Slab(20,-200,-15,"rgba(255,73,0,1)")); //<3 left slab
	OBJ.push(new Slab(0,-200,-15,"rgba(255,110,0,1)")); //<3 center slab
	OBJ.push(new Cube(-20,-200,25,"rgba(255,150,0,1)")); //<3 right eye
	OBJ.push(new Slab(-20,-200,-15,"rgba(255,190,0,1)")); //<3 right slab
	OBJ.push(new Slab(-40,-200,-5,"rgba(255,255,0,1)")); //<3 rightest slab
	

	//red rgba(255,0,0,1)
	//orange rgba(255,165,0,1)
	//yellow rgba(255,255,0,1)
	//green rgba(0,255,0,1)
	//blue rgba(0,0,255,1)
	//indac rgba(75,0,130,1)
	//purple rgba(143,0,255,1)
	
	
	function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	
	textCommandPrint();
	
	for(var i = 0; i < OBJ.length; i++){
		OBJ[i].print();
	}
		
	}
	animate();
	
	$(document).keydown(function(e){
		key = e.which;
		for(var i = 0; i < OBJ.length; i++){
			OBJ[i].move();
		}
	});
	
});