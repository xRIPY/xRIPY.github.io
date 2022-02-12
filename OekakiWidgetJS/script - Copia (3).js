// made by RIPY @xRIPY
// special thanks to html2canvas
/*

*/

function OekakiWidget() {
	
	//
	// Setup ----------------------------------------------------------------------------------------------------------------
	//
	
	let THIS = this;
	
	this.style = `
	.OekakiWidgetCapsula { display: block; position: absolute; }
	.OekakiWidgetCapsula canvas:not(#OekakiDraft){ border:1px solid rgba(0,0,0,0); }
	.OekakiWidgetCapsula:hover canvas:not(#OekakiDraft){ border:1px solid rgba(0,0,0,0.1); }
	.OekakiWidgetCapsula #OekakiDraft{ display: block; border:1px solid rgba(0,0,0,0) }
	.OekakiWidgetCapsula #Handle{ background-color: rgba(0,0,0,0.3); color:white; padding:1ex; }
	.OekakiWidgetCapsula #ToolBox{ background-color: rgba(0,0,0,0.3); color:white; padding:1ex; }
	.OekakiWidgetCapsula #Handle span{ margin: 0px 1ex; }
	.OekakiWidgetCapsula #Handle input{ width: 5ex; }
	.OekakiWidgetCapsula input{ width: 20ex; }
	.OekakiWidgetCapsula input[type=radio]{ width:auto; }
	.OekakiWidgetCapsula input[type=color]{ border: 0; padding: 0; width: 5ex; height: 5ex;}
	.Transparent { background: url("data:image/x-ms-bmp;base64,Qk02AwAAAAAAADYAAAAoAAAAEAAAABAAAAABABgAAAAAAAADAADEDgAAxA4AAAAAAAAAAAAA9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f3 !important");  }
`

	this.toolBoxInnerHTML = `
Brush size: <br>
<input type="range" min=1 max=100 id="brushSizeSlider"></input> <br>
<input type="number" id="brushSize"></input> <br>
<hr>
Brush Opacity: <br>
<input type="range"  min=1 max=100 id="brushOpacitySlider"></input> <br>
<input type="number" id="brushOpacity"></input> <br>
<hr>
Brush Density: <br>
<input type="range"  min=1 max=100 id="brushDensitySlider"></input> <br>
<input type="number" id="brushDensity"></input> <br>
<hr>
Color: <br>
<table>
<tr><td><input type="color" id="brushColor1"></input></td><td><button id="useBrushColor1">Use</button></td></tr>
<tr><td><input type="color" id="brushColor2"></input></td><td><button id="useBrushColor2">Use</button></td></tr>
<table>
<hr>
Tool mode: <br>
<input type="radio" id="Normal" name="Mode" checked></input> <label for="Normal">[Normal]</label>  <br>
<input type="radio" id="Eraser" name="Mode" ></input> <label for="Eraser">[Eraser]</label> <br>
<input type="radio" id="AlphaLock" name="Mode" ></input> <label for="AlphaLock">[Alpha Lock]</label> <br>
<hr>
Tool: <br>
<input type="radio" id="Brush" name="Tool" checked></input> <label for="Brush">[Brush]</label>  <br>
<input type="radio" id="Airbrush" name="Tool" ></input> <label for="Airbrush">[Airbrush]</label>  <br>
<input type="radio" id="Bucket" name="Tool" ></input> <label for="Bucket">[Bucket]</label> <br>
<input type="radio" id="ColorPicker" name="Tool" ></input> <label for="ColorPicker">[ColorPicker]</label> <br>

`

	this.handleInnerHTML = `
<span id="canvasSize"></span><button id="newOekaki">New</button> <button id="kill">Kill</button> <button id="info">ReadMe.txt</button><br>
<button id="toggleTools">Toggle tools</button> <button id="clearLayer">Clear layer</button>
`

this.readMeTxt = `
By RIPY @xRIPY
A really simple but feature-full script drawing app. Quite easy to expand on too!
---
[RIGHT CLICK] to color pick
[CTRL+Z] undo
[CTRL+Y] redo
[W] Show tools
[A] - Brush size
[D] + Brush size
[S] Change between [erase/normal] mode
[X] Change between [first/second] mode
---
Development infos:
Thanks for trying this thing out (:
Time taken: 1 week.
I wanted to create a simple drawing program to learn how they work, so I made this!
Known issues:
Had to learn the hard way about "premultiplied alpha".
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData.
Basicly everytime an image is drawn atop of another, the values are not accurate, messing stuff up.
I'm not smart enough to find a work-around... Shame...
`


	this.oekakiWidgetCapsula = document.createElement('div');	// Div that contains everything
	this.oekakiWidgetCapsula.className = 'OekakiWidgetCapsula';
	this.draft = document.createElement('canvas');				// Canvas for stroke input
	this.draft.id = 'OekakiDraft';
	this.draftCTX = this.draft.getContext("2d");			
	this.cursor = document.createElement('canvas');				// cursor
	this.cursor.id = 'OekakiCursor';
	this.cursorCTX = this.cursor.getContext("2d");			
	this.layers = [];											// Contains Canvas Contexts for Layers
	this.currentLayer = 0;										// Current layer
	this.layerUniqueID = 0;										// Current layer
	this.history = [];											// History of strokes and layer managment (creation / deletion)
	this.layersArea = document.createElement('div');			// div with layer's canvas
	this.layersArea.id = 'LayersArea';
	this.toolBox = document.createElement('div');				// toolBox HTML element
	this.toolBox.id = 'ToolBox';
	this.handle = document.createElement('div');				// handle  HTML element
	this.handle.id = 'Handle';
	
	this.brushSize = 5;											// Radious of circle
	this.brushOpacity = 100;									// Stroke opacity
	this.brushDensity = 100;									// Brush stap opacity
	this.brushColor = {r:128,g:0,b:0}							// Brush color
	this.brushMode = "source-over";								// Normal / Erase / Alpha lock
	this.tool = "brush";										// List
	
	this.movable = true;										// Flag if you can move by dragging handle
	this.canvasWidth = 600;
	this.canvasHeight = 740;
	
	this.Setup = function(width,height,leftPX,topPX,canvasBase){
		
		this.brushSize = 5;											
		this.brushOpacity = 100;								
		this.brushDensity = 100;	
		this.brushColor = {r:128,g:0,b:0}							
		this.brushMode = "source-over";								
		this.tool = "brush";										
		this.canvasWidth = width;
		this.canvasHeight = height;
		
		document.querySelector("body").prepend(this.oekakiWidgetCapsula);	// prepend to body the capsula
		if(!document.getElementById('OekakiWidgetStyle')) {					// apply css
			let style = document.createElement('style');
			style.id = 'OekakiWidgetStyle'
			style.innerHTML = this.style;
			document.querySelector('head').prepend(style);
		}
		this.oekakiWidgetCapsula.appendChild(this.handle);		// Setup the handle
		this.handle.innerHTML = this.handleInnerHTML;			
		this.oekakiWidgetCapsula.appendChild(this.toolBox);		// Setup the toolBox
		this.toolBox.innerHTML = this.toolBoxInnerHTML;			
		this.toolBox.style = "transform:translate(-100%,0%); position:absolute";
		this.toolBox.style.display = "none";
		this.oekakiWidgetCapsula.appendChild(this.cursor);		// Setup the cursor
		this.cursor.style = "position:absolute; z-index:9999";
		this.cursor.width = this.canvasWidth; 
		this.cursor.height = this.canvasHeight;
		this.oekakiWidgetCapsula.appendChild(this.layersArea);	// Setup the layer's div
		this.layersArea.style = "position:absolute";
		if(canvasBase){ this.NewLayer(canvasBase); }
		else{ this.NewLayer(); }
		this.oekakiWidgetCapsula.appendChild(this.draft);		// Setup draft layer
		this.draft.width = this.canvasWidth; 
		this.draft.height = this.canvasHeight;
		this.draft.style = "position: relative; z-index:10000; opacity: 0;";							
		
		// position widget
		if(leftPX && topPX){ this.oekakiWidgetCapsula.style = "top:"+ Math.round(topPX - this.handle.getBoundingClientRect().height) +"px; left:"+leftPX+"px; z-index:10000"; }
		else{ this.oekakiWidgetCapsula.style = "top: 50%; left:50%; transform:translate(-50%,-50%); z-index:10000"; }
		this.oekakiWidgetCapsula.addEventListener("mousedown",function () { var z = document.querySelectorAll(".OekakiWidgetCapsula").forEach(x => x.style.zIndex = "10000"); this.style.zIndex = "10001";} );
		
		// Buttons setup
		
		this.oekakiWidgetCapsula.querySelector("#brushSize").value = this.brushSize;
		this.oekakiWidgetCapsula.querySelector("#brushSizeSlider").value = this.brushSize;
		this.oekakiWidgetCapsula.querySelector("#brushOpacity").value = this.brushOpacity;
		this.oekakiWidgetCapsula.querySelector("#brushOpacitySlider").value = this.brushOpacity;
		this.oekakiWidgetCapsula.querySelector("#brushDensity").value = this.brushDensity;
		this.oekakiWidgetCapsula.querySelector("#brushDensitySlider").value = this.brushDensity;
		this.oekakiWidgetCapsula.querySelector("#brushColor1").value = "#"+this.brushColor.r.toString(16).padStart(2,"0")+""+this.brushColor.g.toString(16).padStart(2,"0")+""+this.brushColor.b.toString(16).padStart(2,"0")+"";
		this.oekakiWidgetCapsula.querySelector("#brushColor2").value = "#F0E0D6";
		this.oekakiWidgetCapsula.querySelector("#canvasSize").innerHTML = this.canvasWidth + "x" + this.canvasHeight;
		
		// Buttons event
		
		this.oekakiWidgetCapsula.querySelector("#kill").addEventListener("mousedown", function(e){ e.stopPropagation(); });
		this.oekakiWidgetCapsula.querySelector("#clearLayer").addEventListener("mousedown", function(e){ e.stopPropagation(); });
		this.oekakiWidgetCapsula.querySelector("#toggleTools").addEventListener("mousedown", function(e){ e.stopPropagation(); });
		this.oekakiWidgetCapsula.querySelector("#newOekaki").addEventListener("mousedown", function(e){ e.stopPropagation(); });
		
		this.oekakiWidgetCapsula.querySelector("#kill").addEventListener("click", function(e){ THIS.Kill(true) });
		this.oekakiWidgetCapsula.querySelector("#toggleTools").addEventListener("click", function(e){ THIS.OpenToolBox() });
		this.oekakiWidgetCapsula.querySelector("#clearLayer").addEventListener("click", function(e){ THIS.ClearLayer(); });
		this.oekakiWidgetCapsula.querySelector("#newOekaki").addEventListener("click", function(e){ 
			var pr = prompt("New oekaki? \n[WIDTH]x[HEIGHT] [BG_CSS_COLOR]\t | Custom size.\nSNIPPET [BG_CSS_COLOR]\t\t\t\t | Draw boundaries event.",THIS.oekakiWidgetCapsula.querySelector("#canvasSize").innerHTML);
			if (typeof pr === 'string' || pr instanceof String) { pr = pr.toLowerCase(); }
			if(!pr) {return;}
			if(pr.split(" ")[0] == "snippet") { THIS.Kill(true); THIS.HtmlSnippetTool(pr.split(" ")[1]); }
			if(pr == "") { THIS.NewOekaki(THIS.oekakiWidgetCapsula.querySelector("#canvasSize").innerHTML.split("x")[0], THIS.oekakiWidgetCapsula.querySelector("#canvasSize").innerHTML.split("x")[1]); }
			if (!(isNaN(pr.split("x")[0]) || isNaN(pr.split("x")[1].split(" ")[0]))) { THIS.NewOekaki(pr.split("x")[0],pr.split("x")[1].split(" ")[0],pr.split(" ")[1]); }
		});
		
		this.oekakiWidgetCapsula.querySelector("#info").addEventListener("click", function(e){ alert(THIS.readMeTxt) });
		
		this.oekakiWidgetCapsula.querySelector("#brushSize").addEventListener("input", function(e){ THIS.SetBrushSize(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushSizeSlider").addEventListener("input", function(e){ THIS.SetBrushSize(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushOpacity").addEventListener("input", function(e){ THIS.SetBrushOpacity(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushOpacitySlider").addEventListener("input", function(e){ THIS.SetBrushOpacity(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushDensity").addEventListener("input", function(e){ THIS.SetBrushDensity(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushDensitySlider").addEventListener("input", function(e){ THIS.SetBrushDensity(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushColor1").addEventListener("change", function(e){ THIS.SetBrushColor(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushColor2").addEventListener("change", function(e){ THIS.SetBrushColor(this.value) });
		this.oekakiWidgetCapsula.querySelector("#useBrushColor1").addEventListener("click", function(e){ THIS.SetBrushColor(THIS.oekakiWidgetCapsula.querySelector("#brushColor1").value) });
		this.oekakiWidgetCapsula.querySelector("#useBrushColor2").addEventListener("click", function(e){ THIS.SetBrushColor(THIS.oekakiWidgetCapsula.querySelector("#brushColor2").value) });
		
		this.oekakiWidgetCapsula.querySelector("#Normal").addEventListener("click", function() { THIS.SetBrushMode("source-over");  });
		this.oekakiWidgetCapsula.querySelector("#Eraser").addEventListener("click", function() { THIS.SetBrushMode("destination-out"); });
		this.oekakiWidgetCapsula.querySelector("#AlphaLock").addEventListener("click", function() { THIS.SetBrushMode("source-atop"); });
		
		this.oekakiWidgetCapsula.querySelector("#Brush").addEventListener("click", function() { THIS.SetTool("brush"); });
		this.oekakiWidgetCapsula.querySelector("#Airbrush").addEventListener("click", function() { THIS.SetTool("airbrush"); });
		this.oekakiWidgetCapsula.querySelector("#Bucket").addEventListener("click", function() { THIS.SetTool("bucket"); });
		this.oekakiWidgetCapsula.querySelector("#ColorPicker").addEventListener("click", function() { THIS.SetTool("colorpicker"); });
	
		//
		// Move around widget
		// stolen from https://stackoverflow.com/questions/9334084/moveable-draggable-div / modified a bit
		if(this.movable){
			this.handle.addEventListener('mousedown', mouseDown, false);
			window.addEventListener('mouseup', mouseUp, false);

			var clickedCord = "";
			function mouseUp() { window.removeEventListener('mousemove', divMove, true); }

			function mouseDown(e){
				var r = THIS.handle.getBoundingClientRect();
				clickedCord = {x:e.clientX - r.x, y:e.clientY-r.y}
				window.addEventListener('mousemove', divMove, true);
			}

			function divMove(e){
			  var div = THIS.oekakiWidgetCapsula;
			  div.style.transform = "";
			  if(e.clientY <= 1) {return;}
			  div.style.top = e.clientY - clickedCord.y + window.scrollY + 'px';
			  div.style.left = e.clientX - clickedCord.x + window.scrollX + 'px';
			}
		}
	}
	
	//
	// Commands ----------------------------------------------------------------------------------------------------------------------
	//
	
	this.Kill = function(full){
		this.layersArea.innerHTML = "";
		this.layers = [];
		this.layerUniqueID = 0;
		this.history = [];
		if(full) { this.oekakiWidgetCapsula.remove() };
	}
	
	this.NewOekaki = function(w,h,BGColor){
		this.canvasWidth = w; this.canvasHeight = h;
		this.oekakiWidgetCapsula.querySelector("#canvasSize").innerHTML = this.canvasWidth + "x" + this.canvasHeight;
		this.draft.width = this.canvasWidth; this.draft.height = this.canvasHeight;
		this.cursor.width = this.canvasWidth; this.cursor.height = this.canvasHeight;
		this.Kill();
		if(BGColor){
			var BG = document.createElement("canvas"); var BGCTX = BG.getContext("2d");
			BG.width = w; BG.height = h;
			BGCTX.fillStyle = BGColor; BGCTX.fillRect(0,0,w,h); BGColor = BG;
		}
		this.NewLayer(BGColor);
	}
	
	this.OpenToolBox = function(){
		THIS.oekakiWidgetCapsula.querySelector("#toggleTools").addEventListener("click",THIS.CloseToolBox);
		THIS.oekakiWidgetCapsula.querySelector("#toggleTools").removeEventListener("click",THIS.OpenToolBox);
		THIS.toolBox.style.display = "block";
	}
	this.CloseToolBox = function(){
		THIS.oekakiWidgetCapsula.querySelector("#toggleTools").addEventListener("click",THIS.OpenToolBox);
		THIS.oekakiWidgetCapsula.querySelector("#toggleTools").removeEventListener("click",THIS.CloseToolBox);
		THIS.toolBox.style.display = "none";
	}
	this.ClearLayer = function(){
		THIS.layers[THIS.currentLayer].clearRect(0, 0, THIS.layers[THIS.currentLayer].canvas.width, THIS.layers[THIS.currentLayer].canvas.height);  
	}
	
	//
	// Sets ------------------------------------------------------------------------------------------------------
	//
	
	this.SetBrushSize = function(x){
		this.oekakiWidgetCapsula.querySelector("#brushSize").value = x;
		this.oekakiWidgetCapsula.querySelector("#brushSizeSlider").value = x;
		this.brushSize = x
	}
	this.SetBrushOpacity = function(x){
		this.oekakiWidgetCapsula.querySelector("#brushOpacity").value = x;
		this.oekakiWidgetCapsula.querySelector("#brushOpacitySlider").value = x;
		this.brushOpacity = x
		for(let i = 0; i < this.layers.length; i++) { this.layers[i].globalAlpha = x/100;  }
	}
	this.SetBrushDensity = function(x){
		this.oekakiWidgetCapsula.querySelector("#brushDensity").value = x;
		this.oekakiWidgetCapsula.querySelector("#brushDensitySlider").value = x;
		this.brushDensity = x
		this.draftCTX.globalAlpha = THIS.brushDensity/100;
	}
	this.SetBrushColor = function(x){
		var r = parseInt(x[1]+x[2],16);
		var g = parseInt(x[3]+x[4],16);
		var b = parseInt(x[5]+x[6],16);
		this.brushColor = {r:r,g:g,b:b}	
	}
	this.SetBrushMode = function(x){
		this.brushMode = x
		for(let i = 0; i < this.layers.length; i++) { this.layers[i].globalCompositeOperation = x;  }
	}
	this.SetTool = function(x){
		this.tool = x
	}
	
	//
	// Export ------------------------------------------------------------------------------------------------------
	//
	
	this.FlattenCanvas = function(){
		var flat = document.createElement("canvas");
		flat.width = THIS.canvasWidth; flat.height = THIS.canvasHeight;
		var flatCTX = flat.getContext("2d");
		for(let i = 0; i < this.layers.length; i++) { flatCTX.drawImage(this.layers[i].canvas, 0, 0);  }
		return flatCTX
	}
	
	//
	// History Managment ------------------------------------------------------------------------------------------------------
	//
	
	this.UpdateHistory = function(){
		
	}
	
	//
	// Layer Managment ------------------------------------------------------------------------------------------------------
	//

	this.UpdateLayerBox = function(){
		
	}
	this.NewLayer = function(canvasBase){
		var layer = document.createElement("canvas");
		layer.width = this.canvasWidth; layer.height = this.canvasHeight;
		layer.style.position = "absolute";
		layer.id = "ID:"+this.layerUniqueID;
		this.layersArea.appendChild(layer);
		this.layers.push(layer.getContext("2d"));
		if(canvasBase) { this.layers.at(-1).drawImage(canvasBase, 0, 0) };
		this.layerUniqueID++;
	}
	this.DeleteLayer = function(index){
		this.layers.splice(index,1);
	}
	
	//
	// Tools --------------------------------------------------------------------------------------------------------------------------------
	//
	
	var brushTip = document.createElement("canvas");
	var brushTipCTX = brushTip.getContext("2d");
	
	var getPixelPos = function (x, y, canvasWidth) {
		return ((y-1) * canvasWidth + x-1) * 4;
	};
	
	var getPixelCord = function (pos, canvasWidth) {
		return {x:pos%canvasWidth,y:Math.floor(pos/canvasWidth)}
	};
	
	var getNumberAdiacentPixels = function (brushTipData, x, y, size, color) {
		var counter = 0;
		for(let i = -1; i < 2; i++){
			for(let j = -1; j < 2; j++){
				 if(matchColor(brushTipData, getPixelPos(x+j, y+i, size), color)) {counter++};
			}
		}
		return counter-1;
	};
	
	var colorPixel = function (data, pos, color) {
		data[pos] = color.r || 0;
		data[pos+1] = color.g || 0;
		data[pos+2] = color.b || 0;
		data[pos+3] = color.a || 0;
	};
	
	var matchColor = function (data, pos, color) {
		return data[pos] == color.r && data[pos+1] == color.g && data[pos+2] == color.b
	};
	
	function BrushTool(stroke){
		
		var size = parseInt(THIS.brushSize)+1;
		let brushTipData = new Uint8ClampedArray(size*size*4).fill(0);
		let color = THIS.brushColor; color.a = 255;
		
		
		//building brush tip algorithm
		for(let x = 0; x < size; x++){
			for(let y = 0; y < size; y++){
				if((x-size/2)*(x-size/2) + (y-size/2)*(y-size/2) < ((size-1)/2)*((size-1)/2)){
					colorPixel(brushTipData, getPixelPos(x, y, size), color)
				}
			}
		}
		
		let circleData = new ImageData(brushTipData, size, size);
		brushTip.width = size; brushTip.height = size;
		brushTipCTX.putImageData(circleData,0,0);
			
		// stamping the brushTipData each pixel
		for(let i = 0; i < stroke.length-1; i++){
			THIS.draftCTX.drawImage(brushTip,Math.floor(stroke[i].x-size/2),Math.floor(stroke[i].y-size/2));
		}

		// output
		THIS.layers[THIS.currentLayer].clearRect(0, 0, THIS.canvasWidth, THIS.canvasHeight);    // Clear the layer
		THIS.layers[THIS.currentLayer].globalAlpha = 1;
		THIS.layers[THIS.currentLayer].globalCompositeOperation = "source-over";
		THIS.layers[THIS.currentLayer].drawImage(cacheCanvas, 0, 0);   						// Apply the layer in memory
		THIS.layers[THIS.currentLayer].globalAlpha = THIS.brushOpacity/100;
		THIS.layers[THIS.currentLayer].globalCompositeOperation = THIS.brushMode;
		THIS.layers[THIS.currentLayer].drawImage(THIS.draft, 0, 0);   						// Apply the stroke to layer
	}
	
	function AirbrushTool(stroke){
			
			
		var size = parseInt(THIS.brushSize)+1;
		let brushTipData = new Uint8ClampedArray(size*size*4).fill(0);
		let increment = Math.ceil(255/(size/2));
		let color = THIS.brushColor; color.a = increment;
		
		//building brush tip algorithm
		for(let i = ((size-1)/2); i > -1; i--){
			for(let x = 0; x < size; x++){
				for(let y = 0; y < size; y++){
					if((x-size/2)*(x-size/2) + (y-size/2)*(y-size/2) < i*i){
						colorPixel(brushTipData, getPixelPos(x, y, size), color)
					}
				}
			}
			color.a += increment;
		}
		
		
		let circleData = new ImageData(brushTipData, size, size);
		brushTip.width = size; brushTip.height = size;
		brushTipCTX.putImageData(circleData,0,0);
			
		// stamping the brushTipData each pixel
		for(let i = 0; i < stroke.length-1; i++){
			THIS.draftCTX.drawImage(brushTip,Math.floor(stroke[i].x-size/2),Math.floor(stroke[i].y-size/2));
		}

		// output
		THIS.layers[THIS.currentLayer].clearRect(0, 0, THIS.canvasWidth, THIS.canvasHeight);    // Clear the layer
		THIS.layers[THIS.currentLayer].globalAlpha = 1;
		THIS.layers[THIS.currentLayer].globalCompositeOperation = "source-over";
		THIS.layers[THIS.currentLayer].drawImage(cacheCanvas, 0, 0);   						// Apply the layer in memory
		THIS.layers[THIS.currentLayer].globalAlpha = THIS.brushOpacity/100;
		THIS.layers[THIS.currentLayer].globalCompositeOperation = THIS.brushMode;
		THIS.layers[THIS.currentLayer].drawImage(THIS.draft, 0, 0);   						// Apply the stroke to layer
	}
	
	function BucketTool(stroke){
		console.log("todo");
	}
	
	function ColorPickerTool(stroke){
		console.log("todo");
	}
	
	//
	// Drawing ----------------------------------------------------------------------------------------------------------------
	//
	
	this.isDown = false;
	var cacheCanvas = document.createElement("canvas");
	var cacheCanvasCTX = cacheCanvas.getContext("2d");
	var prevXY = 0;
	var pointXY = 0;
	
	function BresenhamLineAlgorithm(x0, y0, x1, y1) {
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
			points.push({x: x0, y: y0}); 

			if ((x0 === x1) && (y0 === y1)) break;
			var e2 = 2*err;
			if (e2 > -dy) { err -= dy; x0  += sx; }
			if (e2 < dx) { err += dx; y0  += sy; }
		}
		if(points.length == 1) {points.push(points[0])}
		return points;
	}

	this.DrawLine = function(x0, y0, x1, y1) {
		// generating path
		let stroke = BresenhamLineAlgorithm(x0, y0, x1, y1);
		switch(THIS.tool){
			case "brush": BrushTool(stroke); break;
			case "airbrush": AirbrushTool(stroke); break;
			case "bucket": BucketTool(stroke); break;
			case "colorpicker": ColorPickerTool(stroke); break;
		}
	}
	
	this.draft.onmousemove = function(e){
		if (!THIS.isDown) return;
		pointXY = getXY(e);
		THIS.DrawLine(prevXY.x, prevXY.y, pointXY.x, pointXY.y); 									// Draw the Line from prev to current
		prevXY = pointXY;                                
	};
	this.draft.onmousedown = function(e){
		THIS.isDown = true; 
		THIS.draftCTX.clearRect(0, 0, THIS.canvasWidth, THIS.canvasHeight);  
		cacheCanvas.width = THIS.canvasWidth; cacheCanvas.height = THIS.canvasHeight;
		cacheCanvasCTX.drawImage(THIS.layers[THIS.currentLayer].canvas, 0, 0);   		
		prevXY = getXY(e);	
		pointXY = getXY(e);
		THIS.DrawLine(prevXY.x, prevXY.y, pointXY.x, pointXY.y);     								// draw at first touch
		prevXY = pointXY;  	
	};
	this.draft.onmouseup = function(e){
		if (!THIS.isDown) return;
		THIS.isDown = false;  
		LastLine(e);
	};
	this.draft.onmouseleave = function(e){
		if (!THIS.isDown) return;
		THIS.isDown = false;         
		LastLine(e);
	};
	
	function LastLine(e){
		pointXY = getXY(e);
		if(prevXY.x == pointXY.x && prevXY.y == pointXY.y) {return;}
		THIS.DrawLine(prevXY.x, prevXY.y, pointXY.x, pointXY.y);     
		prevXY = pointXY;  	
		THIS.draftCTX.clearRect(0, 0, THIS.canvasWidth, THIS.canvasHeight);  
		cacheCanvasCTX.clearRect(0, 0, THIS.canvasWidth, THIS.canvasHeight); 
	}

	function getXY(e) {
		var r = THIS.draft.getBoundingClientRect();
		return {x: Math.round(e.clientX - r.left), y: Math.round(e.clientY - r.top)}
	}
	
	//
	// Cursor ----------------------------------------------------------------------------------------------------------------
	//
	
	var cursorSize = document.createElement("canvas");
	var cursorSizeCTX = cursorSize.getContext("2d");
	
	function DrawCursour(e){
		
		var r = THIS.cursor.getBoundingClientRect();
		
		// draw the canvas
		THIS.cursorCTX.globalCompositeOperation='source-over';
		var z = THIS.FlattenCanvas().canvas;
		THIS.cursorCTX.drawImage(z,0,0)
		
		// invert canvas
		THIS.cursorCTX.globalCompositeOperation='difference';
		THIS.cursorCTX.fillStyle='white';
		THIS.cursorCTX.fillRect(0,0,THIS.canvasWidth,THIS.canvasHeight);
		
		 // draw the cursor
		THIS.cursorCTX.globalCompositeOperation='destination-atop';
		 
		// THIS.cursor.width = THIS.canvasWidth; THIS.cursor.height = THIS.canvasHeight;
		// cursorSize.width = cursorSize; brushTip.height = size;
		
		// var size = parseInt(THIS.brushSize)+1;
		// //building brush tip algorithm
		// let cursorSizeData = new Uint8ClampedArray(size*size*4).fill(0);
		// let color = THIS.brushColor; color.a = 255;
		// for(let x = 0; x < size; x++){
			// for(let y = 0; y < size; y++){
				// if((x-size/2)*(x-size/2) + (y-size/2)*(y-size/2) < ((size-1)/2)*((size-1)/2)){
					// colorPixel(cursorSizeData, getPixelPos(x, y, size), color)
				// }
			// }
		// }
		// circleData = new ImageData(cursorSizeData, size, size);
		// cursorSizeCTX.putImageData(circleData,0,0);
		
		// THIS.cursor.width = THIS.cursor.width;
		// THIS.cursorCTX.putImageData(circleData,Math.floor(e.clientX- r.left +window.scrollX -size/2),Math.floor(e.clientY- r.top +window.scrollY -size/2))
		// THIS.cursorCTX.drawImage(circleData,0,0)
		
		THIS.cursorCTX.beginPath();
		THIS.cursorCTX.arc(Math.floor(e.clientX- r.left +window.scrollX),Math.floor(e.clientY- r.top +window.scrollY ), THIS.brushSize/2, 0, 2 * Math.PI);
		THIS.cursorCTX.stroke(); 
	}
	
	this.draft.addEventListener("mousemove",DrawCursour);
	this.draft.addEventListener("mousedown",DrawCursour);
	this.draft.addEventListener("mouseleave", function() {THIS.cursorCTX.clearRect(0,0,THIS.canvasWidth,THIS.canvasHeight);} ) ;
	
	//
	// Snippet Event ----------------------------------------------------------------------------------------------------------------
	//
	
	this.HtmlSnippetTool = function(BGColor){
		var sizeSetup = document.createElement("canvas");
		sizeSetup.setAttribute("data-html2canvas-ignore", true);
		var sizeSetupCTX = sizeSetup.getContext("2d");
		sizeSetup.width = window.innerWidth; sizeSetup.height = window.innerHeight;
		sizeSetup.style = "position: fixed; top:0%; left:0%; cursor:crosshair; z-index:10002";
		sizeSetupCTX.fillStyle = 'rgba(0,0,0,0.2)';
		sizeSetupCTX.fillRect(0, 0, window.innerWidth, window.innerHeight);
		document.querySelector("body").prepend(sizeSetup);

		var size = {w:0, h:0};
		var begin = {x:"toset", y:"toset"};
		var end = {x:0, y:0};
		function DrawBox(e){       
			sizeSetupCTX.clearRect(0, 0, window.innerWidth, window.innerHeight);
			sizeSetupCTX.fillStyle = 'rgba(0,0,0,0.2)';
			sizeSetupCTX.fillRect(0, 0, window.innerWidth, window.innerHeight);
			if(begin.x == "toset" || begin.y == "toset") { return; }
			sizeSetupCTX.fillStyle = "red";
			size = {w:e.clientX - begin.x, h:e.clientY - begin.y}
			sizeSetupCTX.fillRect(begin.x-2, begin.y-2, size.w+4, size.h+4);
			sizeSetupCTX.fillRect(begin.x+2, begin.y+2, size.w-4, size.h-4);
			sizeSetupCTX.fillRect(begin.x+2, begin.y-2, size.w-4, size.h+4);
			sizeSetupCTX.fillRect(begin.x-2, begin.y+2, size.w+4, size.h-4);
			sizeSetupCTX.clearRect(begin.x, begin.y, size.w, size.h);
		}
		
		sizeSetup.addEventListener("mousemove",DrawBox);
		sizeSetup.addEventListener("mousedown",function(e){begin = {x:e.clientX, y:e.clientY}});
		sizeSetup.addEventListener("mouseup",async function(e){ 
			end = {x:e.clientX, y:e.clientY}
			size = {w:end.x - begin.x, h:end.y - begin.y}
			// top-left quadrant 		[ w:negative, h:negative ]
			if(size.w < 0 && size.h < 0) {begin = {x:end.x, y:end.y}}
			// top-right quadrant 		[ w:positive, h:negative ]
			if(size.w > 0 && size.h < 0) {begin = {x:begin.x, y:end.y}}
			// bottom-left quadrant 	[ w:negative, h:positive ]
			if(size.w < 0 && size.h > 0) {begin = {x:end.x, y:begin.y}}
			// bottom-right quadrant 	[ w:positive, h:positive ]
			if(size.w > 0 && size.h > 0) {begin = {x:begin.x, y:begin.y}}
			
			size = {w:Math.abs(size.w), h:Math.abs(size.h)};
			// if size is small (10x10 px) re-do
			if(size.w < 10 || size.h < 10) {
				begin = {x:"toset", y:"toset"}; size = {w:0, h:0};
				sizeSetupCTX.clearRect(0, 0, window.innerWidth, window.innerHeight);
				sizeSetupCTX.fillStyle = 'rgba(0,0,0,0.2)';
				sizeSetupCTX.fillRect(0, 0, window.innerWidth, window.innerHeight);
				return;
			}
			
			if(BGColor){
				var BG = document.createElement("canvas"); var BGCTX = BG.getContext("2d");
				BG.width = size.w; BG.height = size.h;
				BGCTX.fillStyle = BGColor; BGCTX.fillRect(0,0, size.w,size.h); BGColor = BG;
			}
			THIS.Setup(size.w, size.h, begin.x + window.scrollX, begin.y + window.scrollY, BGColor);
			sizeSetup.remove();
		});
	}
}

var Oekaki = new OekakiWidget();
Oekaki.HtmlSnippetTool()