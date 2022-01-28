//
// GLOBAL STUFF
//
var fileInput = document.getElementById("fileInput"); // input type file element
var inputtedFile = ""; // dataURL of the file.
var preview = ""; // currently empty, will be the element containing the src of the inputed file

// dropbox stuff
let dropbox;
dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function dragenter(e) { e.stopPropagation(); e.preventDefault(); }
function dragover(e) { e.stopPropagation(); e.preventDefault(); }

function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  fileInput.files = files;
  fileInputChange();
}
// end dropbox stuff

function FromUrl(URL){
	let x = prompt('Source:','URL');
	if(!x || x == "URL") {return};
	document.getElementById("mainArea").innerHTML = document.getElementById("loading").innerHTML;;
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		fileInputChange(xhr.response)
	};
	xhr.onerror = function() {
		document.getElementById("mainArea").innerHTML = document.getElementById("error2").innerHTML;;
	};
	xhr.open('GET', x);
	xhr.responseType = 'blob';
	xhr.send();
}

function fileInputChange(override){

	//setup
	window.scrollTo(0, 0);
	document.getElementById("mainArea").innerHTML = document.getElementById("loading").innerHTML;
	preview = "";
	inputtedFile = "";
	try{TheGifEmulator.Kill();} catch(e) {};
	try{TheVideoController.Kill();} catch(e) {};
	
	let file = override != undefined ? override : fileInput.files[0];
	let name = file.name;
	let type = file.type;
	let size = file.size;
	
	//Retriving basic info
	let sOutput = size + " bytes";
	const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    for (nMultiple = 0, nApprox = size / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
      sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + size + " bytes)";
    }
	document.getElementById("info").innerHTML = name + "\n" + type + "\n" + sOutput + "\n\n";
	
	// stuff to save the dataUrl inside the preview instead of using location.
	const reader = new FileReader();
	reader.onload = (function(elem) { return function(e) { 
		inputtedFile = e.target.result;
		setup();
	}; })();
    reader.readAsDataURL(file);
	
	function setup(){
		switch(inputtedFile.split("/")[0]){
			case "data:video": videoSetup(); break;// Its a video!
			case "data:image": imageSetup(); break;// Its an image!
			default: errorSetup(); break;// Its nothing supported!
		}	
	}
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//
// VIDEO
//

function videoSetup(){
	document.getElementById("mainArea").innerHTML = document.getElementById("video").innerHTML;
	preview = document.getElementById("preview");
	preview.src = inputtedFile;
}


//
// IMAGE
//
async function imageSetup(){
	document.getElementById("mainArea").innerHTML = document.getElementById("image").innerHTML;
	preview = document.getElementById("preview");
	preview.src = inputtedFile;
}


//
// ERROR
//

function errorSetup(){
	document.getElementById("mainArea").innerHTML = document.getElementById("error").innerHTML;
}

//
// BINDS
//

document.onkeypress = function (e) {
    e = e || window.event;
	//console.log(e.keyCode);
    switch(e.keyCode){
		case 115: //s 
			if (preview.paused || preview.ended) { preview.play(); } 
			else { preview.pause(); }
		break;
		case 44: nudge(-1); break; //a
		case 46: nudge(1); break; //d
		case 97:  skip(-1); break; //,
		case 100: skip(1); break; //.
	}
};