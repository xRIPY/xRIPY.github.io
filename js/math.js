//
// globals
//
var _n;
var _y;
var _a;
var _b;
//p5
var _width = window.innerWidth - 25;
var _height = window.innerHeight - 50;
var zoom = Number($("#zoom").val());
var graphic = Number($("#graphic").val());

var visible = true;
$("#settings").on("click",function(){
	if(visible) $(".settings").hide();
	else $(".settings").show();
	
	visible = !visible;
});

function Pretty(){
	try {
			_a = $("#a").val() == "" ? "a" : $("#a").val() ;
			_b = $("#b").val() == "" ? "b" : $("#b").val() ;
			let node = math.parse("(" + $("#y").val() + ")");
			var latex = node ? node.toTex({parenthesis: 'keep', implicit: 'hide'}) : '';
			latex =  "\\int_{"+ _a +"}^{"+ _b +"} " + latex + "dx";
			const elem = MathJax.Hub.getAllJax("pretty")[0];
			MathJax.Hub.Queue(['Text', elem, latex]);
			$("#pretty").css("color","#000");
	}
	catch (err) { 
		$("#pretty").css("color","#ee7777");
	}
}

function refresh(){
	clear();
	grid();
	
	if( $("#RectangleCB").is(":checked") ){
		Rectangle();
	}
	if( $("#TrapezoidalCB").is(":checked") ){
		Trapezoidal();
	}
	if( $("#ParableCB").is(":checked") ){
		Parable();
	}
	
	fDraw();
}

$(function(){

	$('#var input').on('input', function() {
		Pretty();
	});
	
	$("#setting input").on('input', function(){
		graphic = Number($("#graphic").val()) != 0.11 ? Number($("#graphic").val()) : 999;
		zoom = Number($("#zoom").val());
		refresh();
	});
	
	$("#extra input").on('input', function(){
		refresh();
	});
	
	$("#elaborate").on("click",function(){
		
	try{

		//
		// VARIABLES
		//
		let _x;
		_n = Math.abs(Number($("#n").val()));
		_y = $("#y").val();
		_a = Number($("#a").val()) + 0.00000000000000000000000001;
		_b = Number($("#b").val()) - 0.00000000000000000000000001;
		if(_a > _b) { _b = [_a, _a = _b][0]; }
		var Result_Rectangle = 0;
		var Result_Trapezoidal = 0;
		var Result_Parable = 0
		
		//
		// DeltaX / h
		//
		let scope = {a:_a, b:_b, n:_n}
		var deltax = math.eval("(b - a)/n " , scope);
		if(deltax == 0) {deltax = 999;}
		//
		// Rectangle
		//
			for (i = (_a + (deltax/2) ); i <= _b; i += deltax) { 
				_x = {x:i};
				Result_Rectangle += math.eval( _y, _x );
			}
			Result_Rectangle = math.eval( "(" + Result_Rectangle + " * " + deltax + ") / 1" );
			
		//
		// Trapezoidal
		//
			var times = 0;
			for (i = _a; i <= _b; i += deltax) { 
				_x = {x:i};
				if(times == 0 || times == _n) { Result_Trapezoidal += math.eval( _y, _x ); }
				else { Result_Trapezoidal += 2*math.eval( _y, _x ); }
				times++;
			}
			Result_Trapezoidal = math.eval( "(" + Result_Trapezoidal + " * " + deltax + ") / 2" );
			
		//
		// Parable
		//
			var times = 0;
			for (i = _a; i <= _b; i += deltax) { 
				_x = {x:i};
				if(times == 0 || times == _n) { Result_Parable += math.eval( _y, _x ); }
				else if( times % 2 != 0 ) { Result_Parable += 4*math.eval( _y, _x ); }
				else if( times % 2 == 0 ) { Result_Parable += 2*math.eval( _y, _x ); }
				times++;
			}
			Result_Parable = math.eval( "(" + Result_Parable + " * " + deltax + ") / 3" );
			
		} catch(e) { alert(e); return;}
		
		_a = Number($("#a").val());
		_b = Number($("#b").val());
		//
		// output text
		//
		$("#Rectangle").text(Result_Rectangle);
		$("#Trapezoidal").text(Result_Trapezoidal);
		$("#Parable").text(Result_Parable);
		
		//
		// canvas
		//
		refresh();
	
	});

	$('input').on('input', function() { 
		Pretty();
	});
	
});

//
// p5.js
//

function setup() {
	
	var cnv = createCanvas(_width, _height);
	cnv.parent('myContainer');
	translate(width / 2, height / 2);
	grid();
	
}

function draw() {
	translate(width / 2, height / 2);
}

function grid(){
	stroke(225);
	
	for(var i = (0-_width); i < (_width); i += 1){
		line(i*zoom, (0-_height/2), i*zoom, (_height/2));
		line((0-width/2), i*zoom, (width/2), i*zoom);
	}
	
	//axis
	stroke(255,0,0);
	
	line(0-_width/2, 0, _width/2, 0);
	line(0, 0-_height/2, 0, _height/2);
}

function fDraw(){
	let _x;
	var g = graphic;
	
	stroke(0);
	noFill();
	for(var i = (0-_width/zoom); i < (_width/zoom); i += g){
		_x = {x:i};
        point(i*zoom,-Number(math.eval( _y, _x )*zoom));
	}
	
	stroke(255,0,0,25);
	fill(255, 0, 0, 10);
	rect(_a*zoom, (0-_height/2)-0.5, (_b - _a)*zoom, (_height));
}

function Rectangle(){
	
	if(_a > _b) { _b = [_a, _a = _b][0]; }
	
	let scope = {a:Number(_a), b:Number(_b), n:Number(_n)}
	var deltax = Number(math.eval("(b - a)/n " , scope));
	var half_deltax =  Number(deltax/2);
	
	
	
	fill(255,200,80, 80);
	let _x;
	strokeWeight(2);
	for(var i = Number(_a) + half_deltax; i <= Number(_b); i += Number(deltax)){
		_x = {x:i};
		var mat = -Number(math.eval( _y, _x ));
		stroke(255,200,80);
		line(i*zoom, 0, i*zoom, mat*zoom);
		noStroke();
		rect((i-half_deltax)*zoom, 0, deltax*zoom, (mat*zoom)); 
	}
	strokeWeight(1);
}

function Trapezoidal(){
	if(_a > _b) { _b = [_a, _a = _b][0]; }
	
	let scope = {a:Number(_a), b:Number(_b), n:Number(_n)}
	var deltax = Number(math.eval("(b - a)/n " , scope));
	
	
	let _x;
	let _x2
	beginShape();
	
		
	
	
	var times = 0;
	strokeWeight(2);
	for(var i = Number(_a); i <= Number(_b); i += Number(deltax)){
		
		_x = {x:i+0.0001};
		_x2 = {x:i+0.0001 + deltax};
		
		if(times != _n){
			noStroke();
			fill(255,200,80, 80);
			quad(_x.x*zoom, -Number(math.eval( _y, _x ))*zoom, _x2.x*zoom, -Number(math.eval( _y, _x2 ))*zoom, _x2.x*zoom, 0, _x.x*zoom, 0);
			
			stroke(255,200,80);
			line(_x.x*zoom, 0, _x.x*zoom, -Number(math.eval( _y, _x ))*zoom);
			line(_x2.x*zoom, 0, _x2.x*zoom, -Number(math.eval( _y, _x2 ))*zoom);
			
			stroke(255,0,255);
			line(_x.x*zoom, -Number(math.eval( _y, _x ))*zoom, _x2.x*zoom, -Number(math.eval( _y, _x2 ))*zoom);
		}
		times++;
	}
	strokeWeight(1);
}

function Parable(){
	
	if(_a > _b) { _b = [_a, _a = _b][0]; }
	
	let scope = {a:Number(_a), b:Number(_b), n:Number(_n)}
	var deltax = Number(math.eval("(b - a)/n " , scope));
	var half_deltax =  Number(deltax/2);
	
	
	noFill();
	
	let _x;
	strokeWeight(2);
	for(var i = Number(_a) + half_deltax; i <= Number(_b); i += Number(deltax)){
		stroke(255,200,80);
		_x = {x:i};
		var mat = -Number(math.eval( _y, _x ));
		beginShape();
		_x = {x: i - half_deltax};
		curveVertex(_x.x*zoom, -Number(math.eval( _y, _x ))*zoom);curveVertex(_x.x*zoom, -Number(math.eval( _y, _x ))*zoom);
		line(_x.x*zoom, 0, _x.x*zoom, -Number(math.eval( _y, _x ))*zoom);
		_x = {x: i};
		curveVertex(_x.x*zoom, -Number(math.eval( _y, _x ))*zoom);
		line(_x.x*zoom, 0, _x.x*zoom, -Number(math.eval( _y, _x ))*zoom);
		_x = {x: i + half_deltax};	
		curveVertex(_x.x*zoom, -Number(math.eval( _y, _x ))*zoom);curveVertex(_x.x*zoom, -Number(math.eval( _y, _x ))*zoom);
		line(_x.x*zoom, 0, _x.x*zoom, -Number(math.eval( _y, _x ))*zoom);
		stroke(255,0,255);
		endShape();
	}
	strokeWeight(1);
}