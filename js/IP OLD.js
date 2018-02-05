$(function(){
	var IP = "";
	var TB = $('textarea');
	
	//check if its an IP:
	function isIP()
	{
		var dots = IP.split(".");
		if(dots.length != 4 || $('#NETID').val() == "" )
			return false;
		for(var i=0;i<4;i++)
		{
			if(dots[i] > 255 || dots[i] < 0) 
				return false;
		}
		return true;
	}
	
	//toBinary
	function toBinary()
	{
		var temp = "";
		var temp2 = IP.split(".");
		for(var i=0;i<4;i++)
			temp += (+temp2[i]).toString(2) + ".";
		temp = temp.slice(0, -1);
		var temp2 = temp.split(".");
		for(var i=0;i<4;i++)
		{
			for(var j=temp2[i].length;j!=8;j++)
			{
				temp2[i] = '0' + temp2[i];
			}
		}
		temp = temp2.join(".");
		return temp;
	}
	
	//check
	function checkBroadcastORete()
	{
		var NETID = $('#NETID').val();
		var temp = toBinary();
		temp = temp.split(".");
		temp = temp[0] + temp[1] + temp[2] + temp[3];
		for(var i=Number(NETID);i<31;i++)
		{
			if(temp[i] != temp[i+1]) 
				return "Normale";
		}
		if(temp[31] == 0) {return "Rete";}
		if(temp[31] == 1) {return "Broadcast";}
	}
	
	//ALL that fuckery
	function PrintThatStuff()
	{
		var Nhost;
		NHost = (Math.pow(2,Number($('#NETID').val()) % 8) - 2);
		
		var SubnetMask = "";
		for(var i=0; i < Number($('#NETID').val()); i++)
			SubnetMask = SubnetMask + "1";
		for(var i=0; i < 32 - Number($('#NETID').val()); i++)
			SubnetMask = SubnetMask + "0";
		SubnetMask.insert(7, ".");
		SubnetMask.insert(16, ".");
		SubnetMask.insert(25, ".");
		alert(SubNetMask);
	}
	
	//fix numbers
	$('#NETID').on("change",function(){
		if( $('#NETID').val() > 31 )
			$('#NETID').val(31);
		if( $('#NETID').val() < 1 )
			$('#NETID').val(1);
	});
	
	//button pressed
	$('button').on("click",function(){
		IP = $('#IP').val();
		if(isIP())
		{
			TB.html("IP: \n"); 
			TB.html( TB.html() + IP  + " /" + $('#NETID').val() + "\n"); 
			TB.html( TB.html() + toBinary() + "\n" );
			TB.html( TB.html() + "\n"); 
			TB.html( TB.html() + "Indirizzo " + checkBroadcastORete() + "\n");
			TB.html( TB.html() + "\n");
			TB.html( TB.html() + "   Sottorete   " + "|" + "   Ind. rete   " + "|" + "Ind. broadcast " + "|" + "  SubNet mask  " + "|" + "   N. di host  " + "|" + " Range di host " + "\n");
			PrintThatStuff();
		}
	});
});