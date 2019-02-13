function Pretty(){
	try {
			var _a = $("#a").val() == "" ? "a" : $("#a").val() ;
			var _b = $("#b").val() == "" ? "b" : $("#b").val() ;
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

	$('input').on('input', function() { 
		Pretty();
	});

	$("#elaborate").on("click",function(){
	
		//
		// VARIABLES
		//
		let _x;
		var _n = Number($("#n").val());
		var _y = $("#y").val();
		var _a = Number($("#a").val()) + 0.00000000000000000000000001;
		var _b = Number($("#b").val()) + 0.00000000000000000000000001;
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
		try{
			
			for (i = (_a + (deltax/2) ); i <= _b; i += deltax) { 
				_x = {x:i};
				Result_Rectangle += math.eval( _y, _x );
			}
			Result_Rectangle = math.eval( "(" + Result_Rectangle + " * " + deltax + ") / 1" );
			
		} catch(e) { $("#output").text("Error in rect"); return;}
		
		//
		// Trapezoidal
		//
		try{
			
			var times = 0;
			for (i = _a; i <= _b; i += deltax) { 
				_x = {x:i};
				if(times == 0 || times == _n) { Result_Trapezoidal += math.eval( _y, _x ); }
				else { Result_Trapezoidal += 2*math.eval( _y, _x ); }
				times++;
			}
			Result_Trapezoidal = math.eval( "(" + Result_Trapezoidal + " * " + deltax + ") / 2" );
			
		} catch(e) { $("#output").text("Error in trap"); return;}
		
		
		//
		// Parable
		//
		try{
			
			var times = 0;
			for (i = _a; i <= _b; i += deltax) { 
				_x = {x:i};
				if(times == 0 || times == _n) { Result_Parable += math.eval( _y, _x ); }
				else if( times % 2 != 0 ) { Result_Parable += 4*math.eval( _y, _x ); }
				else if( times % 2 == 0 ) { Result_Parable += 2*math.eval( _y, _x ); }
				times++;
			}
			Result_Parable = math.eval( "(" + Result_Parable + " * " + deltax + ") / 3" );
			
		} catch(e) { $("#output").text("Error in para"); return;}
		
		//
		// output text
		//
		Pretty();
		$("#Rectangle").text(Result_Rectangle);
		$("#Trapezoidal").text(Result_Trapezoidal);
		$("#Parable").text(Result_Parable);
		
		});
	
});

