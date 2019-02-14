//
// globals
//
var _n;
var _y;
var _a;
var _b;
//p5
var _width = 950;
var _height = 540;
var zoom = Number($("#zoom").val());
var graphic = Number($("#graphic").val());

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

$(function(){

	$('#var input').on('input', function() {
		Pretty();
	});
	
	$("#setting input").on('input', function(){
		graphic = Number($("#graphic").val());
		zoom = Number($("#zoom").val());
		clear();
		grid();
		fDraw();
	});
	
	$("#elaborate").on("click",function(){
		
	try{

		//
		// VARIABLES
		//
		let _x;
		_n = Number($("#n").val());
		_y = $("#y").val();
		_a = Number($("#a").val()) + 0.00000000000000000000000001;
		_b = Number($("#b").val()) + 0.00000000000000000000000001;
		if(_a > _b) { _b = [_a, _a = _b][0]; }
		var Result_Rectangle = 0;
		var Result_Trapezoidal = 0;
		var Result_Parable = 0
		
		//
		// DeltaX / h
		//
		let scope = {a:_a, b:_b, n:_n}
		var deltax = math.eval("(b - a)/n " , scope);
		
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
		clear();
		grid();
		fDraw();
	
	});

	$('input').on('input', function() { 
		Pretty();
	});
	
	$('.info').on('click', function() { 
		
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
	noStroke();
	fill(255);
	rect(_width - 52.5, _height - 22.5, 45, 15);
	fill(255,0,0);
	text(Math.ceil(frameRate()) + ' FPS', _width - 50, _height - 10);
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
	let _x_1;
	let _x_2;
	var g = graphic;
	var half_g = (graphic/2);
	
	stroke(0);
	
	_x_1 = {x:(0-_width)};
	for(var i = (0-_width); i < (_width); i += g){
		_x_2 = {x:i+half_g};
		line(_x_1.x*zoom, -Number(math.eval( _y, _x_1 ))*zoom,_x_2.x*zoom, -Number(math.eval( _y, _x_2 ))*zoom);
		_x_1 = _x_2;
	}
	
	stroke(255,0,0,25);
	fill(255, 0, 0, 10);
	rect(_a*zoom, (0-_height/2)-0.5, (_b - _a)*zoom, (_height));
}
