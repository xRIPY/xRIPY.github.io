var wWord = document.getElementById("CustomWord").value;
var Word = wWord.toUpperCase();
var Base = document.getElementById("CustomBase").value;
function ValueChanger(){
 wWord = document.getElementById("CustomWord").value;
 Word = wWord.toUpperCase();
 Base = document.getElementById("CustomBase").value;
}
setInterval(ValueChanger, 1);
function NumberCorrect() {
	 if ( document.getElementById("CustomBase").value != "" )
 {
	 if (document.getElementById("CustomBase").value >= 36){
	  document.getElementById("CustomBase").value = 36
	 }
	 if (document.getElementById("CustomBase").value <= 2){
	  document.getElementById("CustomBase").value = 2
	 }
 }
 document.getElementById("CustomBase").value = Math.round(document.getElementById("CustomBase").value);
}
function _Level(Char){
	switch (Char)
	{
case "0":
			return 0; 
case "1":
			return 1;
case "2":
			return 2;
case "3":
			return 3;
case "4":
			return 4;
case "5":
			return 5;
case "6":
			return 6;
case "7":
			return 7;
case "8":
			return 8;
case "9":
			return 9;
case "A":
			return 10;
case "B":
			return 11;
case "C":
			return 12;
case "D":
			return 13;
case "E":
			return 14;
case "F":
			return 15;
case "G":
			return 16;
case "H":
			return 17;
case "I":
			return 18;
case "J":
			return 19;
case "K":
			return 20;
case "L":
			return 21;
case "M":
			return 22;
case "N":
			return 23;
case "O":
			return 24;
case "P":
			return 25;
case "Q":
			return 26;
case "R":
			return 27;
case "S":
			return 28;
case "T":
			return 29;
case "U":
			return 30;
case "V":
			return 31;
case "W":
			return 32;
case "X":
			return 33;
case "Y":
			return 34;
case "Z":
			return 35;
default:
			return -1;
	}
}
function _Check(Word, Base) {
	for (i = 0; i < Word.length; i++){
		if (_Level(Word[i]) + 1 > Base ){
			return false;
		}
	}
	return true;
}
function Operations(Word, Base){
	var Decimal = 0;
	for (i = 0; i < Word.length; i++){
		Decimal += _Level(Word[i]) * Math.pow(Base, ((Word.length - i) - 1 ));
	}
	return Decimal;
}
function ToLettersSEC(x){
	switch (x)
		{
			case 10:
				return "A";
			case 11:
				return "B";
			case 12:
				return "C";
			case 13:
				return "D";
			case 14:
				return "E";
			case 15:
				return "F";
			case 16:
				return "G";
			case 17:
				return "H";
			case 18:
				return "I";
			case 19:
				return "J";
			case 20:
				return "K";
			case 21:
				return "L";
			case 22:
				return "M";
			case 23:
				return "N";
			case 24:
				return "O";
			case 25:
				return "P";
			case 26:
				return "Q";
			case 27:
				return "R";
			case 28:
				return "S";
			case 29:
				return "T";
			case 30:
				return "U";
			case 31:
				return "V";
			case 32:
				return "W";
			case 33:
				return "X";
			case 34:
				return "Y";
			case 35:
				return "Z";
			default:
				return x;
		}
}
function ToLetters(x){
	for(i = 0; i < x.length; i++)
	{
		var Y = x[i];
		switch (Y)
		{
			case 10:
				x[i] = "A";
				break;
			case 11:
				x[i] = "B";
				break;
			case 12:
				x[i] = "C";
				break;
			case 13:
				x[i] = "D";
				break;
			case 14:
				x[i] = "E";
				break;
			case 15:
				x[i] = "F";
				break;
			case 16:
				x[i] = "G";
				break;
			case 17:
				x[i] = "H";
				break;
			case 18:
				x[i] = "I";
				break;
			case 19:
				x[i] = "J";
				break;
			case 20:
				x[i] = "K";
				break;
			case 21:
				x[i] = "L";
				break;
			case 22:
				x[i] = "M";
				break;
			case 23:
				x[i] = "N";
				break;
			case 24:
				x[i] = "O";
				break;
			case 25:
				x[i] = "P";
				break;
			case 26:
				x[i] = "Q";
				break;
			case 27:
				x[i] = "R";
				break;
			case 28:
				x[i] = "S";
				break;
			case 29:
				x[i] = "T";
				break;
			case 30:
				x[i] = "U";
				break;
			case 31:
				x[i] = "V";
				break;
			case 32:
				x[i] = "W";
				break;
			case 33:
				x[i] = "X";
				break;
			case 34:
				x[i] = "Y";
				break;
			case 35:
				x[i] = "Z";
				break;
		}
	}
}
function Turn(Dec, Base){
	var DecOP = Dec;
	var X = [];
	
	for(DecOP; DecOP > 0; DecOP = Math.floor(DecOP / Base))
	{ 
	X.unshift(DecOP % Base);
	}
	ToLetters(X);
	return X;
}
function WriteConsole(Word, Base){
	var DEC = Operations(Word, Base);
	document.getElementById("2Base").innerHTML = "<strong> 2: </strong>" + Turn(DEC, 2).join("");
	document.getElementById("3Base").innerHTML = "<strong> 3: </strong>" + Turn(DEC, 3).join("");
	document.getElementById("4Base").innerHTML = "<strong> 4: </strong>" + Turn(DEC, 4).join("");
	document.getElementById("5Base").innerHTML = "<strong> 5: </strong>" + Turn(DEC, 5).join("");
	document.getElementById("6Base").innerHTML = "<strong> 6: </strong>" + Turn(DEC, 6).join("");
	document.getElementById("7Base").innerHTML = "<strong> 7: </strong>" + Turn(DEC, 7).join("");
	document.getElementById("8Base").innerHTML = "<strong> 8: </strong>" + Turn(DEC, 8).join("");
	document.getElementById("9Base").innerHTML = "<strong> 9: </strong>" + Turn(DEC, 9).join("");
	document.getElementById("10Base").innerHTML = "<strong> 10: </strong>" + Turn(DEC, 10).join("");
	document.getElementById("11Base").innerHTML = "<strong> 11: </strong>" + Turn(DEC, 11).join("");
	document.getElementById("12Base").innerHTML = "<strong> 12: </strong>" + Turn(DEC, 12).join("");
	document.getElementById("13Base").innerHTML = "<strong> 13: </strong>" + Turn(DEC, 13).join("");
	document.getElementById("14Base").innerHTML = "<strong> 14: </strong>" + Turn(DEC, 14).join("");
	document.getElementById("15Base").innerHTML = "<strong> 15: </strong>" + Turn(DEC, 15).join("");
	document.getElementById("16Base").innerHTML = "<strong> 16: </strong>" + Turn(DEC, 16).join("");
	document.getElementById("17Base").innerHTML = "<strong> 17: </strong>" + Turn(DEC, 17).join("");
	document.getElementById("18Base").innerHTML = "<strong> 18: </strong>" + Turn(DEC, 18).join("");
	document.getElementById("19Base").innerHTML = "<strong> 19: </strong>" + Turn(DEC, 19).join("");
	document.getElementById("20Base").innerHTML = "<strong> 20: </strong>" + Turn(DEC, 20).join("");
	document.getElementById("21Base").innerHTML = "<strong> 21: </strong>" + Turn(DEC, 21).join("");
	document.getElementById("22Base").innerHTML = "<strong> 22: </strong>" + Turn(DEC, 22).join("");
	document.getElementById("23Base").innerHTML = "<strong> 23: </strong>" + Turn(DEC, 23).join("");
	document.getElementById("24Base").innerHTML = "<strong> 24: </strong>" + Turn(DEC, 24).join("");
	document.getElementById("25Base").innerHTML = "<strong> 25: </strong>" + Turn(DEC, 25).join("");
	document.getElementById("26Base").innerHTML = "<strong> 26: </strong>" + Turn(DEC, 26).join("");
	document.getElementById("27Base").innerHTML = "<strong> 27: </strong>" + Turn(DEC, 27).join("");
	document.getElementById("28Base").innerHTML = "<strong> 28: </strong>" + Turn(DEC, 28).join("");
	document.getElementById("29Base").innerHTML = "<strong> 29: </strong>" + Turn(DEC, 29).join("");
	document.getElementById("30Base").innerHTML = "<strong> 30: </strong>" + Turn(DEC, 30).join("");
	document.getElementById("31Base").innerHTML = "<strong> 31: </strong>" + Turn(DEC, 31).join("");
	document.getElementById("32Base").innerHTML = "<strong> 32: </strong>" + Turn(DEC, 32).join("");
	document.getElementById("33Base").innerHTML = "<strong> 33: </strong>" + Turn(DEC, 33).join("");
	document.getElementById("34Base").innerHTML = "<strong> 34: </strong>" + Turn(DEC, 34).join("");
	document.getElementById("35Base").innerHTML = "<strong> 35: </strong>" + Turn(DEC, 35).join("");
	document.getElementById("36Base").innerHTML = "<strong> 36: </strong>" + Turn(DEC, 36).join("");
	
}
function UpdateInfo(){
	document.getElementById("Info").innerHTML = Word + "<sub>" + Base + "</sub>" + "<br \>";
	document.getElementById("Info").innerHTML += "Click a line in the console for Info";
}
function WriteInfo(Word, Base, InfoBase) {
	var DEC = Operations(Word, Base); 
	document.getElementById("Info").innerHTML = Word.fontsize(4) + "<sub>" + Base + "</sub>" + "<strong>" + (" -> ").fontsize(5) +"</strong> " + Turn(DEC, InfoBase).join("") +  "<sub>" + InfoBase + "</sub>";
	document.getElementById("Info").innerHTML += "<br \>" + "<br \>";
	for (i = 10; i < InfoBase; i++){
		if (i == (InfoBase - 1)){
			document.getElementById("Info").innerHTML += ToLettersSEC(i).fontsize(5);
			break;
		}
		document.getElementById("Info").innerHTML += ToLettersSEC(i).fontsize(5) + "|";
	}
	document.getElementById("Info").innerHTML += "<br \>";
	for (j = 10; j < InfoBase; j++){
	if (j == (InfoBase - 1)){
			document.getElementById("Info").innerHTML += (j.toString()).fontsize(2);
			break;
		}
		document.getElementById("Info").innerHTML += (j.toString()).fontsize(2) + "|";
	}
	document.getElementById("Info").innerHTML += "<br \>" + "<br \>";
	document.getElementById("Info").innerHTML += "<strong \> ~Process:";
	document.getElementById("Info").innerHTML += "<br \>" + "<br \>";
	document.getElementById("Info").innerHTML += Word.fontsize(4) + "<sub>" + Base + "</sub>" + " to Decimal: <br \> <br \> <strong> Decimal = <\strong> ";
	for (i = 0; i < Word.length; i++){
		if (i == Word.length - 1)
		{
			document.getElementById("Info").innerHTML += Word[i] + "*" + Base + "<sup>" + (Word.length - i - 1) + "</sup>";
			break;
		}
		document.getElementById("Info").innerHTML += Word[i] + "*" + Base + "<sup>" + (Word.length - i - 1) + "</sup>" + " + ";
	}
	document.getElementById("Info").innerHTML += " <br \> <strong> Decimal = <\strong>";
	for (i = 0; i < Word.length; i++){
		if (i == Word.length - 1)
		{
			document.getElementById("Info").innerHTML += _Level(Word[i]) + "*" + Base + "<sup>" + (Word.length - i - 1) + "</sup>";
			break;
		}
		document.getElementById("Info").innerHTML += _Level(Word[i]) + "*" + Base  + "<sup>" + (Word.length - i - 1) + "</sup>" + " + ";
	}
	document.getElementById("Info").innerHTML += " <br \> <strong> Decimal = <\strong>";
	for (i = 0; i < Word.length; i++){
	if (i == Word.length - 1)
		{
			document.getElementById("Info").innerHTML += _Level(Word[i]) * Math.pow(Base, ((Word.length - i) - 1 ));
			break;
		}
		document.getElementById("Info").innerHTML += _Level(Word[i]) * Math.pow(Base, ((Word.length - i) - 1 )) + " + ";
	}
	document.getElementById("Info").innerHTML += " <br \> <strong> Decimal = <\strong>" + DEC + "<br \> <br \>";
	document.getElementById("Info").innerHTML += DEC + "<sub>" + "10" + "</sub>" + " to " + "<sub>" + InfoBase + "</sub>" +" <br \> <br \>";
	var DecOP = DEC;
	var Z = [];
	for(DecOP; DecOP > 0; DecOP = Math.floor(DecOP / InfoBase)){ 
	var Workk = Math.floor(DecOP / InfoBase);
	document.getElementById("Info").innerHTML += DecOP + "/" + InfoBase + "="+ Workk  + " | MOD:<strong \>" + (DecOP % InfoBase) + "<br \>";
	Z.push(DecOP % InfoBase);
	}
	document.getElementById("Info").innerHTML += "<br \>";
	document.getElementById("Info").innerHTML += "<b>" + Z.join(" ") + "</b> <br \>" + "<strong>" + ("<->").fontsize(5) + "</strong> <br \>";
	for (i = Z.length - 1; i > -1; i--)
	{
		document.getElementById("Info").innerHTML += "<b>" + Z[i] + " </b>";
	}
	document.getElementById("Info").innerHTML += "<br \> <strong>" + ("VVV").fontsize(5) + "</strong> <br \>";
	for (i = Z.length - 1; i > -1; i--)
	{
		document.getElementById("Info").innerHTML += "<b>" + ToLettersSEC(Z[i]) + " </b>";
	}
}
function _Exec(){
	if (_Check(Word, Base))
	{
	WriteConsole(Word, Base);
	UpdateInfo();
	}
	else
	{
		alert("ERROR: Invalid Word for that base");
	}
}