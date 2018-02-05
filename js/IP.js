$(function(){
	
	
	// VARIABILI GLOBALI, COSI DA EVITARE DI REINSERIRLE SEMRPE.
	var IP = null;
	var IP_parts = []; 
	var IP_B = [];
	var NETID = null;
	var NHOST = [];
	
	//fix numbers
	$('#NETID').on("change",function(){
		if( $('#NETID').val() > 31 ) {$('#NETID').val(31);}
		if( $('#NETID').val() < 1 ) {$('#NETID').val(1);}
	});
	
	//check if its an IP:
	function isIP(){
		var dots = IP.split(".");
		for(var i=0;i<NHOST.length;i++) { if(NHOST[i] == "") {return false;} }
		if(dots.length != 4 || $('#NETID').val() == "" ) {return false;}
		for(var i=0;i<4;i++) { if(dots[i] > 255 || dots[i] < 0) {return false;} }
		return true;
	}
	
	//ITS EVERYTHING POSSIBLE ACCTUALY???
	function possible()
	{

		if( (Math.pow(2, (32 - NETID))-2) > NHOST )  {return true;}
		return false;
	}
	
	//UNTILL IT HAS 8 BIT
	function U8Bit(x) { for(var j=x.length;j!=8;j++) { x = '0' + x; } return x;}
	
	// N HOST FOR RETE THING. SHUT UP;
	var reti = $('<input class=\'rete\'></input>');
	reti.appendTo( $('#Nhost') );
	$('#SMtype').on("change",function(){
		$('#Nhost').children().remove();
		if( $('#SMtype').val() == "FLSM")
		{
			var reti = $('<input type=\'number\' class=\'rete\'></input>');
			reti.appendTo( $('#Nhost') );
		}
		if( $('#SMtype').val() == "VLSM")
		{
			var reti = $('<input class=\'rete\'></input><br/>');
			$('#Nhost').append( $('<button>+</button><br/>') )
			reti.appendTo( $('#Nhost') );
		}
	});
	$('#Nhost').on("click", "button", function() {
		var reti = $('<input class=\'rete\'></input><br/>');
		reti.appendTo( $('#Nhost') );
	});
	
	//CREATE A ROW
	function Crow(SOTTORETE,INDRETE,SM,INDBROADCAST,NHOST,RHOST)
	{
		var x = $('<tr><td>'+SOTTORETE+'</td><td>'+INDRETE+'</td><td>'+SM+'</td><td>'+INDBROADCAST+'</td><td>'+NHOST+'</td><td>'+RHOST+'</td></tr>');
		$('table').append(x);
	}
	
	
	
	//WELL START?
	$('#start').on("click",function(){
		
		if( $('#NETID').val() > 31 ) {$('#NETID').val(31);}
		if( $('#NETID').val() < 1 ) {$('#NETID').val(1);}
		
		NHOST = [];
		for(var i = 0; i < $('.rete').length; i++) { NHOST.push( $('.rete').eq(i).val() ); }
		NHOST.sort(function(a, b){return a - b}); 
		
		IP = $('#IP').val();
		
		if(!isIP()){ alert("error"); return;}
			
		NETID = $('#NETID');
		IP_parts = IP.split('.');
		IP_B = [U8Bit((+IP_parts[0]).toString(2)), U8Bit((+IP_parts[1]).toString(2)), U8Bit((+IP_parts[2]).toString(2)), U8Bit((+IP_parts[3]).toString(2))];
		
		alert( possible() );
		if( $('SMtype') == "FLSM" && possible() )
		{
			var ammount = Math.pow(2, (NETID % 8));
			alert(Math.pow(2, (NETID % 8)));
			for(var i = 0; i < ammount; i++)
			{
				Crow(50,10,5,5,5,2);
			}
		}
	});
	
});