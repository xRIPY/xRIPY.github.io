// made by RIPY @xRIPY

function OekakiWidget() {
	
	let selfReference = this;
	
	this.OekakiWidgetCapsula = document.createElement('div');
	this.OekakiWidgetCapsula.id = 'OekakiWidgetCapsula';
	this.draft = document.createElement('canvas')
	this.draft.id = 'draft';
	this.ctx = this.draft.getContext('2d');
	this.layerStack = []
	this.currentLayer = 0;
	this.toolBoxHandle = document.createElement('div');
	this.toolBoxHandle.id = "toolBoxHandle";
	this.toolBox = document.createElement('div');
	this.toolBox.id = "toolBox";
	
	this.canvasWidth = 600;
	this.canvasHeight = 740;
	this.draft.width = 600; this.draft.height = 740;
	
	this.brushSize = 5;						// 1 -> 100
	this.brushOpacity = 100;				// 0 -> 100
	this.brushDensity = 100;				// 0 -> 100
	this.brushColor = '#800000';			// rgba(r,g,b,brushDensity)
	this.brushMode = 'source-over';			// 
	
	//
	// Commands
	//
	this.setBrushSize = function(brushSize) { 
		this.brushSize = brushSize 
		selfReference.toolBox.querySelectorAll("input")[0].value = brushSize
		selfReference.toolBox.querySelectorAll("input")[1].value = brushSize
	}
	this.setBrushOpacity = function(brushOpacity) { 
		this.brushOpacity = brushOpacity/100; this.draft.style.opacity = brushOpacity/100;
		for(let i = 0; i < this.layerStack.length; i++){ this.layerStack[i].globalAlpha = brushOpacity/100; } 		
		selfReference.toolBox.querySelectorAll("input")[2].value = brushOpacity
		selfReference.toolBox.querySelectorAll("input")[3].value = brushOpacity
	}
	this.setBrushDensity = function(brushDensity) { 
		this.brushDensity = brushDensity/100 
		selfReference.toolBox.querySelectorAll("input")[4].value = brushDensity
		selfReference.toolBox.querySelectorAll("input")[5].value = brushDensity
	}
	this.setBrushColor = function(brushColor) { this.brushColor = brushColor }
	this.setBrushMode = function(brushMode) { this.brushMode = brushMode; for(let i = 0; i < this.layerStack.length; i++){ this.layerStack[i].globalCompositeOperation = brushMode; } 		 }
	this.setCanvasSize = function(w, h) { 
		if(confirm("[OekakiWidget]: New Oekaki, are you sure?\n(Resizing clears the canvas, may as well say its a new Oekaki)")) {
			this.canvasHeight = w; this.canvasHeight = h; 
			// remove layers
			while(this.layerStack.length){ this.layerStack[0].canvas.remove(); this.layerStack.splice(0,1); } 	
			this.draft.width = w; this.draft.height = h; 
			// init layers
			this.draft.style.opacity = 1;
			this.NewLayer()
			this.draft.style.opacity = selfReference.toolBox.querySelectorAll("input")[2].value/100;
			for(let i = 0; i < this.layerStack.length; i++){ this.layerStack[i].globalAlpha = selfReference.toolBox.querySelectorAll("input")[2].value/100; } 		
			this.OekakiWidgetCapsula.appendChild(this.draft);
			// reset to first color
			this.currentLayer = 0;
			this.setBrushMode("source-over");
			this.setBrushColor(selfReference.toolBox.querySelectorAll("input")[6].value)
		}
	}
	this.Clear = function() {      
		selfReference.layerStack[selfReference.currentLayer].clearRect(0, 0, selfReference.layerStack[selfReference.currentLayer].canvas.width, selfReference.layerStack[selfReference.currentLayer].canvas.height);  
	}
	this.OpenToolBox = function(){
		selfReference.toolBoxHandle.querySelector("button").addEventListener("click",selfReference.CloseToolBox);
		selfReference.toolBoxHandle.querySelector("button").removeEventListener("click",selfReference.OpenToolBox);
		selfReference.toolBox.style = "display:auto";
	}
	this.CloseToolBox = function(){
		selfReference.toolBoxHandle.querySelector("button").addEventListener("click",selfReference.OpenToolBox);
		selfReference.toolBoxHandle.querySelector("button").removeEventListener("click",selfReference.CloseToolBox);
		selfReference.toolBox.style = "display:none";
	}

	//
	// Init
	//
	this.CreateCanvas = function(){
		//
		// css setup
		//
		if(!document.getElementById('OekakiWidgetStyle')) {
			let style = document.createElement('style');
			style.id = 'OekakiWidgetStyle'
			style.innerHTML = `
			#OekakiWidgetCapsula {border: 1px solid rgba(0,0,0,0); position: absolute; z-index: 10000; }
			#OekakiWidgetCapsula:hover {border: 1px solid rgba(0,0,0,0.05);} 
			#OekakiWidgetCapsula>canvas:not(#draft) {border: 1px solid rgba(0,0,0,0); display: block; position:absolute} 
			#OekakiWidgetCapsula>#draft {border: 1px solid rgba(0,0,0,0); display: block; z-index: 10000; position:relative}
			#OekakiWidgetCapsula>#draft:hover {border: 1px solid rgba(0,0,0,0.05); display: block; z-index: 10000; position:relative}
			#OekakiWidgetCapsula>#toolBoxHandle {background-color: rgba(0,0,0,0.5); color:white; padding: 1ex;}
			#OekakiWidgetCapsula>#toolBox {position:absolute; background-color: rgba(0,0,0,0.5); color:white; padding: 1ex;  z-index: 10001; transform:translate(-100%,0%);}
			#OekakiWidgetCapsula>#toolBox input[type=radio] { margin: 0; }
			#OekakiWidgetCapsula>#toolBox input[type=range] { width: 15ex; }
			#OekakiWidgetCapsula input[type=number] { width: 15ex; }
			#OekakiWidgetCapsula>#toolBox .Color { padding: 0px; width: 100%; height: 2ex; border: 1px; display: inline-block }
			#OekakiWidgetCapsula>#toolBox .EraserColor { background: url("data:image/x-ms-bmp;base64,Qk02AwAAAAAAADYAAAAoAAAAEAAAABAAAAABABgAAAAAAAADAADEDgAAxA4AAAAAAAAAAAAA9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f3 !important");  }
`
			document.querySelector('head').prepend(style);
		}
		
		//
		// Tool box setup
		//
		this.toolBox.innerHTML = `
		Size: <br>
		<input type='range' min='1' max='100' value='5'></input> <br>
		<input type='number' min='1' step='1' value='5'></input> <br>
		<hr>
		Opacity: <br>
		<input type='range' min='0' max='100' value='100'></input> <br>
		<input type='number' min='0' max='100' step='1' value='100'></input> <br>
		<hr>	
		Density: <br>
		<input type='range' min='0' max='100' value='100'></input> <br>
		<input type='number' min='0' max='100' step='1'  value='100'></input> <br>
		<hr>
		Color: <div class='Color' style='background-color: #800000'></div> <br>
		<input type="radio" id="Brush" name="Mode" checked></input> <label for="Brush">[Brush]</label>  <br>
		<input type="radio" id="Eraser" name="Mode" ></input> <label for="Eraser">[Eraser]</label> <br>
		<input type="radio" id="AlphaLock" name="Mode" ></input> <label for="AlphaLock">[Alpha Lock]</label> <br>
		<hr>
		Layers: <br>
		<input title="New layer" type='button' value="+"></input>
		<input title="Delete layer" type='button' value="-"></input>
		<input title="Merge with layer below" type='button' value="="></input>
		<input title="Move Up" type='button' value="^"></input>
		<input title="Move Down" type='button' value="v"></input>
		<table id="Layers">
		</table>
		`;
		this.toolBox.querySelectorAll("input")[0].addEventListener("input", function() { selfReference.setBrushSize(this.value) });
		this.toolBox.querySelectorAll("input")[1].addEventListener("input", function() { selfReference.setBrushSize(this.value) });
		this.toolBox.querySelectorAll("input")[2].addEventListener("input", function() { selfReference.setBrushOpacity(this.value) });
		this.toolBox.querySelectorAll("input")[3].addEventListener("input", function() { selfReference.setBrushOpacity(this.value) });
		this.toolBox.querySelectorAll("input")[4].addEventListener("input", function() { selfReference.setBrushDensity(this.value) });
		this.toolBox.querySelectorAll("input")[5].addEventListener("input", function() { selfReference.setBrushDensity(this.value) });
		this.toolBox.querySelectorAll("div")[0].addEventListener("click", function() { console.log("todo"); });
		this.toolBox.querySelectorAll("input")[6].addEventListener("click", function() { selfReference.setBrushMode("source-over");  });
		this.toolBox.querySelectorAll("input")[7].addEventListener("click", function() { selfReference.setBrushMode("destination-out"); });
		this.toolBox.querySelectorAll("input")[8].addEventListener("click", function() { selfReference.setBrushMode("source-atop") });
		
		selfReference.toolBoxHandle.innerHTML = "<button>Tools</button> <button>Clear layer</button> <div style='float:right'><input type='number' value='600'></input> x <input type='number' value='740'></input> <button>New</button></div>";
		this.toolBoxHandle.querySelectorAll("button")[0].addEventListener("mousedown", function(e) {  e.stopPropagation(); });
		this.toolBoxHandle.querySelectorAll("button")[1].addEventListener("mousedown", function(e) {  e.stopPropagation(); });
		this.toolBoxHandle.querySelectorAll("button")[1].addEventListener("click", function(e) {  selfReference.Clear(); });
		this.toolBoxHandle.querySelectorAll("button")[2].addEventListener("mousedown", function(e) {  e.stopPropagation(); });
		this.toolBoxHandle.querySelectorAll("input")[0].addEventListener("mousedown", function(e) {  e.stopPropagation(); });
		this.toolBoxHandle.querySelectorAll("input")[1].addEventListener("mousedown", function(e) {  e.stopPropagation(); });
		this.toolBoxHandle.querySelectorAll("button")[2].addEventListener("click", function() { selfReference.setCanvasSize(toolBoxHandle.querySelectorAll("input")[0].value, toolBoxHandle.querySelectorAll("input")[1].value) });
		
		
		//
		// HTML setup
		// 
		this.OekakiWidgetCapsula.appendChild(this.toolBoxHandle);			// Append tool box handle
		this.OekakiWidgetCapsula.appendChild(this.toolBox);					// Append tool box
		this.CloseToolBox();														// Hide tool box
		this.NewLayer();															// Add new layer
		this.OekakiWidgetCapsula.appendChild(this.draft);					// Append ( and later always keept ) for last draft layer (will be the one on top thanks to z-index)
		document.querySelector('body').prepend(this.OekakiWidgetCapsula);	// Add to the document the Widget
		
		//
		// Move around widget
		// stolen from https://stackoverflow.com/questions/9334084/moveable-draggable-div / modified a bit
		this.toolBoxHandle.addEventListener('mousedown', mouseDown, false);
		window.addEventListener('mouseup', mouseUp, false);

		var clickedCord = "";
		function mouseUp() { window.removeEventListener('mousemove', divMove, true); }

		function mouseDown(e){
			var r = selfReference.toolBoxHandle.getBoundingClientRect();
			clickedCord = {x:e.clientX - r.x, y:e.clientY-r.y}
			window.addEventListener('mousemove', divMove, true);
		}

		function divMove(e){
		  var div = selfReference.OekakiWidgetCapsula;
		  if(e.clientY <= 1) {return;}
		  div.style.top = e.clientY - clickedCord.y + window.scrollY + 'px';
		  div.style.left = e.clientX - clickedCord.x + window.scrollX + 'px';
		}
	}
	
	//
	// Layer manager
	//
	this.NewLayer = function(){ 
		var layer = this.draft.cloneNode(); 
		layer.id = "";
		this.OekakiWidgetCapsula.appendChild(layer);
		this.layerStack.push(layer.getContext('2d')) 
		var layerRow = document.createElement("tr");
		layerRow.innerHTML = "<td></td>"
		//this.toolBox.querySelector("#Layers").
	}
	this.DeleteLayer = function(){ this.layerStack.splice(this.currentLayer,1)}
	this.UpdateLayerPreview = function(){ 
	}
	
	//
	// drawing part
	//
	
	this.isDown = false;
	var prevXY = 0;
	var pointXY = 0;
	
	function BresenhamAlgorithm(x0, y0, x1, y1) {
		x0 = Math.round(x0);
		y0 = Math.round(y0);
		x1 = Math.round(x1);
		y1 = Math.round(y1);
		
		var dx = Math.abs(x1 - x0);
		var dy = Math.abs(y1 - y0);
		var sx = (x0 < x1) ? 1 : -1;
		var sy = (y0 < y1) ? 1 : -1;
		var err = dx - dy;
		var points = [];
		while(true) {
			points.push({x: x0, y: y0}); // Do what you need to for this

			if ((x0 === x1) && (y0 === y1)) break;
			var e2 = 2*err;
			if (e2 > -dy) { err -= dy; x0  += sx; }
			if (e2 < dx) { err += dx; y0  += sy; }
			
			if(points.length > 1000) break;
		}
		return points;
	}
	function hexToRgb(hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	  } : null;
	}

	this.Draw = function(x0, y0, x1, y1){
		var connectPixels = [];
		connectPixels = BresenhamAlgorithm(x0, y0, x1, y1);
		for(let i = 0; i < connectPixels.length-1; i++){
			selfReference.ctx.beginPath(); 
			var c = hexToRgb(selfReference.brushColor);
			selfReference.ctx.fillStyle = 'rgba('+c.r+','+c.g+','+c.b+',' + selfReference.brushDensity + ')'; 
			if(selfReference.brushSize <= 1) { selfReference.ctx.rect(connectPixels[i].x, connectPixels[i].y, selfReference.brushSize, selfReference.brushSize); }
			else { selfReference.ctx.arc(connectPixels[i].x, connectPixels[i].y, selfReference.brushSize/2, 0, 2 * Math.PI); }
			selfReference.ctx.fill();  
		}
	}
	
	this.draft.onmousemove = function(e){
		if (!selfReference.isDown) return;
		pointXY = getXYcanvas(e);
		selfReference.Draw(prevXY.x, prevXY.y, pointXY.x, pointXY.y);
		prevXY = pointXY;                                
	};
	this.draft.onmouseleave = function(e){
		if (!selfReference.isDown) return;
		pointXY = getXYcanvas(e);
		selfReference.Draw(prevXY.x, prevXY.y, pointXY.x, pointXY.y);
		prevXY = pointXY;     
		selfReference.isDown = false;                                   
		selfReference.layerStack[selfReference.currentLayer].drawImage(selfReference.draft, 0, 0);       
		selfReference.ctx.clearRect(0, 0, selfReference.draft.width, selfReference.draft.height);   
	};
	this.draft.onmousedown = function(e){
		prevXY = getXYcanvas(e);
		pointXY = getXYcanvas(e);
		selfReference.Draw(prevXY.x, prevXY.y, pointXY.x, pointXY.y);
		prevXY = pointXY;  
		selfReference.isDown = true; 
	};
	this.draft.onmouseup = function(){
		selfReference.isDown = false;    
		selfReference.layerStack[selfReference.currentLayer].drawImage(selfReference.draft, 0, 0);       
		selfReference.ctx.clearRect(0, 0, selfReference.draft.width, selfReference.draft.height);                                 
	};

	function getXYcanvas(e) {
		var r = selfReference.draft.getBoundingClientRect();
		return {x: e.clientX - r.left, y: e.clientY - r.top}
	}
}

var Oekaki = new OekakiWidget();
Oekaki.CreateCanvas()