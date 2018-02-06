$(function(){
	
	
	// VARIABILI GLOBALI, COSI DA EVITARE DI REINSERIRLE SEMRPE.
	var IP = null;
	var IP_parts = []; 
	var IP_B = [];
	var NETID = null;
	var NHOST = [];
	var IP_B_s = null;
	var BN = [];
	var TB = $('textarea');
	
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
	
	//ITS EVERYTHING POSSIBLE ACTUALLY???
	function possible()
	{
		for(var i = 0; i<BN.length; i++) {  if( (32-BN[i]) <= NETID ) { return false;} }
		return true;
	}
	
	//UNTILL IT HAS 8 BIT
	function U8Bit(x) { for(var j=x.length;j!=8;j++) { x = '0' + x; } return x;}
	function U32Bit(x) { 
		for(var j=x.length;j!=32;j++) { x = '0' + x; } return x;
	}
	
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
	
	//INSERT STUFF IN STRING
	function insert(str, index, value) {
		return str.substr(0, index) + value + str.substr(index);
	}
	
	// INSERT 4 DOTS
	function insertdots(str)
	{
		str = insert(str, 8, '.');
		str = insert(str, 17, '.');
		str = insert(str, 26, '.');
		return str;
	}
	
	//SUBNETMASK MAKER FOR FMLS
	function SM(k){
		var temp = "";
		for(var i = 0; i < 32-BN[k]; i++) { temp += "1"; }
		for(var i = 0; i < BN[k]; i++) { temp += "0"; }
		return temp;
	}
	
	
	
	//CLASS
	function ClassC()
	{
		if (IP_parts[0] >= 1 && IP_parts[0] < 126) { return "CLASSE = A"; }
		if (IP_parts[0] == 127) { return "LOOPBACK"; }
		if (IP_parts[0] >= 128 && IP_parts[0] < 191) { return "CLASSE = B"; }
		if (IP_parts[0] >= 192 && IP_parts[0] < 223) { return "CLASSE = C"; }
		if (IP_parts[0] >= 224 && IP_parts[0] < 239) { return "CLASSE = D"; }
		if (IP_parts[0] >= 240 && IP_parts[0] < 254) { return "CLASSE = E"; }
	}
	
	//privat
	function Privat()
	{
		if (IP_parts[0] == 10) { return "PRIVATE"; }
		if (IP_parts[0] == 172 && (IP_parts[1] < 32 || IP_parts[1] > 15)) { return "PRIVATE"; }
		if (IP_parts[0] == 192 && IP_parts[1] == 168) { return "PRIVATE"; }
		return "K"
	}
	
	//WELL START?
	$('#start').on("click",function(){
		
		$('tr').not(':first').remove();
		
		if( $('#NETID').val() > 31 ) {$('#NETID').val(31);}
		if( $('#NETID').val() < 1 ) {$('#NETID').val(1);}
		
		NHOST = [];
		for(var i = 0; i < $('.rete').length; i++) { NHOST.push( $('.rete').eq(i).val() ); }
		NHOST.sort(function(a, b){return b - a}); 
		
		IP = $('#IP').val();
		
		if(!isIP()){ alert("error"); return;}
			
		NETID = $('#NETID').val();
		IP_parts = IP.split('.');
		IP_B = [U8Bit((+IP_parts[0]).toString(2)), U8Bit((+IP_parts[1]).toString(2)), U8Bit((+IP_parts[2]).toString(2)), U8Bit((+IP_parts[3]).toString(2))];
		
		IP_B_s = IP_B[0] + IP_B[1] + IP_B[2] + IP_B[3];
		
		BN = [];
		for(var i = 0; i < NHOST.length; i++) { BN.push( (+NHOST[i] + 1).toString(2).length );}
		
		var texts = "IP: " + IP_B[0] +'.'+ IP_B[1] +'.'+ IP_B[2] +'.'+ IP_B[3];
		TB.html(texts + "\n"); 
		TB.html( TB.html() + ClassC() + "\n");
		TB.html( TB.html() + Privat() + "\n");
		
		if( possible() )
		{
			if( $('#SMtype').val() == "FLSM")
			{
				var a = Math.pow(2, BN[0]) - 2; // NHOST
				var b = SM(0); // SUBNET MASK
				b = insertdots(b);
				var ba = b.split(".");
				b = parseInt(ba[0], 2) + "." + parseInt(ba[1], 2) + "." + parseInt(ba[2], 2) + "." + parseInt(ba[3], 2);
				
				var c;
				var d;
				var ca = [];
				var da = [];
				
				
				for(var i = 0; i < Math.pow(2, 32-(Number(BN[0])+Number(NETID))); i++)
				{
					c = parseInt(IP_B_s, 2) & parseInt(SM(0), 2); // RETE
					d = parseInt(IP_B_s, 2) | ~parseInt(SM(0), 2); // BROADCAST
					c += i * (a+2);
					d += i * (a+2);
					c = U32Bit((c >>> 0).toString(2));
					d = U32Bit((d >>> 0).toString(2));
					c = insertdots(c);
					d = insertdots(d);
					ca = c.split(".");
					da = d.split(".");
					c = parseInt(ca[0], 2) + "." + parseInt(ca[1], 2) + "." + parseInt(ca[2], 2) + "." + parseInt(ca[3], 2);
					d = parseInt(da[0], 2) + "." + parseInt(da[1], 2) + "." + parseInt(da[2], 2) + "." + parseInt(da[3], 2);

					Crow(i+1 + "(" + i.toString(2) + ")",c,b + " /" + (32-BN[0]),d,a,"x");
				}
			}
			
			if( $('#SMtype').val() == "VLSM")
			{
				var a;
				var b;
				var d;
				var c = parseInt(IP_B_s, 2) & parseInt(SM(0), 2); // RETE
				for(var i = 0; i < NHOST.length; i++)
				{
					a = Math.pow(2, BN[i]) - 2; // NHOST
					b = SM(i); 
					d = c + a +1;
					e = d;
					c = U32Bit((c >>> 0).toString(2));
					d = U32Bit((d >>> 0).toString(2));
					c = insertdots(c);
					d = insertdots(d);
					b = insertdots(b);
					var ca = c.split(".");
					var da = d.split(".");
					var ba = b.split(".");
					c = parseInt(ca[0], 2) + "." + parseInt(ca[1], 2) + "." + parseInt(ca[2], 2) + "." + parseInt(ca[3], 2);
					d = parseInt(da[0], 2) + "." + parseInt(da[1], 2) + "." + parseInt(da[2], 2) + "." + parseInt(da[3], 2);
					b = parseInt(ba[0], 2) + "." + parseInt(ba[1], 2) + "." + parseInt(ba[2], 2) + "." + parseInt(ba[3], 2);
					Crow(i, c, b + " /" + (32-BN[i]), d, a, "x");
					c = e + 1;
				}
			}
		}
		else { alert("host ammount error"); }
	});
	
});