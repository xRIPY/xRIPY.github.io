$(function(){

	$("#elaborate").on("click",function(){
	
		// math
		let _x;
		var _n = Number($("#n").val());
		var _y = $("#y").val();
		var _a = Number($("#a").val()) + 0.00000000000000000000000001;
		var _b = Number($("#b").val()) + 0.00000000000000000000000001;
		var resultRECT_LEFT = 0;
		var resultRECT = 0;
		var resultTRAP = 0;
		var resultPARA = 0
		
		let scope = {a:_a, b:_b, n:_n}
		var deltax = math.eval("(b - a)/n " , scope);
		
		//
		// RECT LEFT
		//
		
		try{
			
			for (i = _a; i <= _b; i += deltax) { 
				_x = {x:i};
				resultRECT_LEFT += math.eval( _y, _x );
			}
			resultRECT_LEFT = math.eval( "(" + resultRECT_LEFT + " * " + deltax + ") / 1" );
			
		} catch(e) { $("#output").text("Error in rect"); return;}
		
		//
		// RECT
		//
		
		try{
			
			for (i = (_a + (deltax/2) ); i <= _b; i += deltax) { 
				_x = {x:i};
				resultRECT += math.eval( _y, _x );
			}
			resultRECT = math.eval( "(" + resultRECT + " * " + deltax + ") / 1" );
			
		} catch(e) { $("#output").text("Error in rect"); return;}
		
		//
		// TRAPEZZIO
		//
		
		try{
			
			var times = 0;
			for (i = _a; i <= _b; i += deltax) { 
				_x = {x:i};
				if(times == 0 || times == _n) { resultTRAP += math.eval( _y, _x ); }
				else { resultTRAP += 2*math.eval( _y, _x ); }
				times++;
			}
			resultTRAP = math.eval( "(" + resultTRAP + " * " + deltax + ") / 2" );
			
		} catch(e) { $("#output").text("Error in trap"); return;}
		
		
		//
		// PARABOLE
		//
		
		try{
			
			var times = 0;
			for (i = _a; i <= _b; i += deltax) { 
				_x = {x:i};
				if(times == 0 || times == _n) { resultPARA += math.eval( _y, _x ); }
				else if( times % 2 != 0 ) { resultPARA += 4*math.eval( _y, _x ); }
				else if( times % 2 == 0 ) { resultPARA += 2*math.eval( _y, _x ); }
				times++;
			}
			resultPARA = math.eval( "(" + resultPARA + " * " + deltax + ") / 3" );
			
		} catch(e) { $("#output").text("Error in para"); return;}
		
		// output text
		var outputText = "";
		outputText += "Expression  : [" + _y + "] \n";
		outputText += "Rect[LEFT]  : [" + resultRECT_LEFT + "] \n";
		outputText += "Rettangolo  : [" + resultRECT + "] \n";
		outputText += "Trapezio    : [" + resultTRAP + "] \n";
		outputText += "Parabole    : [" + resultPARA + "] \n";
		$("#output").text(outputText);
	});
	
});