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
	
		
.OekakiWidgetCapsula html, .OekakiWidgetCapsula body, .OekakiWidgetCapsula div, .OekakiWidgetCapsula span, .OekakiWidgetCapsula applet, .OekakiWidgetCapsula object, .OekakiWidgetCapsula iframe,
.OekakiWidgetCapsula h1, .OekakiWidgetCapsula .OekakiWidgetCapsula h2, .OekakiWidgetCapsula h3, .OekakiWidgetCapsula h4, .OekakiWidgetCapsula h5, .OekakiWidgetCapsula h6, .OekakiWidgetCapsula p, .OekakiWidgetCapsula blockquote, .OekakiWidgetCapsula pre,
.OekakiWidgetCapsula a, .OekakiWidgetCapsula abbr, .OekakiWidgetCapsula acronym, .OekakiWidgetCapsula address, .OekakiWidgetCapsula big, .OekakiWidgetCapsula cite, .OekakiWidgetCapsula code,
.OekakiWidgetCapsula del, .OekakiWidgetCapsula dfn, .OekakiWidgetCapsula em, .OekakiWidgetCapsula img, .OekakiWidgetCapsula ins, .OekakiWidgetCapsula kbd, .OekakiWidgetCapsula q, .OekakiWidgetCapsula s, .OekakiWidgetCapsula samp,
.OekakiWidgetCapsula small, .OekakiWidgetCapsula strike, .OekakiWidgetCapsula strong, .OekakiWidgetCapsula sub, .OekakiWidgetCapsula sup, .OekakiWidgetCapsula tt, .OekakiWidgetCapsula var,
.OekakiWidgetCapsula b, .OekakiWidgetCapsula u, .OekakiWidgetCapsula i, .OekakiWidgetCapsula center,
.OekakiWidgetCapsula dl, .OekakiWidgetCapsula dt, .OekakiWidgetCapsula dd, .OekakiWidgetCapsula ol, .OekakiWidgetCapsula ul, .OekakiWidgetCapsula li,
.OekakiWidgetCapsula fieldset, .OekakiWidgetCapsula form, .OekakiWidgetCapsula label, .OekakiWidgetCapsula legend,
.OekakiWidgetCapsula table, .OekakiWidgetCapsula caption, .OekakiWidgetCapsula tbody, .OekakiWidgetCapsula tfoot, .OekakiWidgetCapsula thead, .OekakiWidgetCapsula tr, .OekakiWidgetCapsula th, .OekakiWidgetCapsula td,
.OekakiWidgetCapsula article, .OekakiWidgetCapsula aside, .OekakiWidgetCapsula canvas, .OekakiWidgetCapsula details, .OekakiWidgetCapsula embed, 
.OekakiWidgetCapsula figure, .OekakiWidgetCapsula figcaption, .OekakiWidgetCapsula footer, .OekakiWidgetCapsula header, .OekakiWidgetCapsula hgroup, 
.OekakiWidgetCapsula menu, .OekakiWidgetCapsula nav, .OekakiWidgetCapsula output, .OekakiWidgetCapsula ruby, .OekakiWidgetCapsula section, .OekakiWidgetCapsula summary,
.OekakiWidgetCapsula time, .OekakiWidgetCapsula mark, .OekakiWidgetCapsula audio, .OekakiWidgetCapsula video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
	.OekakiWidgetCapsula:not(input) { user-select: none; }
	.OekakiWidgetCapsula #EasterEgg { user-select: text; }
	.OekakiWidgetCapsula { display: block; font-family:MS PGothic; }
	.OekakiWidgetCapsula canvas:not(#OekakiDraft){ border:1px solid rgba(0,0,0,0); }
	.OekakiWidgetCapsula:hover canvas:not(#OekakiDraft){ border:1px solid rgba(0,0,0,0.1); }
	.OekakiWidgetCapsula #OekakiDraft{ display: block; border:1px solid rgba(0,0,0,0); }
	.OekakiWidgetCapsula #ToolBox{ padding: 0 5px; overflow-y:scroll; overflow-x:hidden }
	.OekakiWidgetCapsula #Handle{ padding:  5px 5px; text-align:center;  }
	.OekakiWidgetCapsula #ToolBox, .OekakiWidgetCapsula #EasterEgg, .OekakiWidgetCapsula #Handle{ background-color: rgba(0,0,0,0.75); color:white;  transition:0.2s; opacity: 1  }
	.OekakiWidgetCapsula:hover #ToolBox, .OekakiWidgetCapsula:hover #EasterEgg, .OekakiWidgetCapsula:hover #Handle{transition:0.2s; opacity: 1; }
	.OekakiWidgetCapsula #Handle .left{ text-align:left; }
	.OekakiWidgetCapsula #Handle .right{ text-align:right }
	.OekakiWidgetCapsula #Handle span{ margin: 0px 1ex; }
	.OekakiWidgetCapsula #Handle input{ width: 5ex; }
	.OekakiWidgetCapsula td{ vertical-align: middle; }
	.OekakiWidgetCapsula #layersDisplay { resize: vertical; height: 40ex; overflow-y:scroll; overflow-x:hidden; border: 1px solid black; }
	.OekakiWidgetCapsula table { width:100%; border-collapse: collapse; }
	.OekakiWidgetCapsula #layerCommands { text-align: center; }
	.OekakiWidgetCapsula #layersDisplay td { padding: 0.5ex; width:50%}
	.OekakiWidgetCapsula #layersDisplay canvas { max-height:7ex; max-width:7ex; display: block; float: right }
	.OekakiWidgetCapsula .layersTable input { width: 10ex;  }
	.OekakiWidgetCapsula #layersDisplay  .SelectedLayer { background-color: rgba(0,0,0,0.5)  }
	.OekakiWidgetCapsula input{ width: 20ex; }
	.OekakiWidgetCapsula input[type=checkbox]{ width:auto; }
	.OekakiWidgetCapsula input[type=color]{ display:block; border: 0; padding: 0; width: 5ex; height: 5ex; }
	.Transparent { background: url("data:image/x-ms-bmp;base64,Qk02AwAAAAAAADYAAAAoAAAAEAAAABAAAAABABgAAAAAAAADAADEDgAAxA4AAAAAAAAAAAAA9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f34uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9/f39/f39/f39/f39/f39/f39/f39/f3 !important");  }
`;

	this.toolBoxInnerHTML = `
<hr>
Brush size: <br>
<input type="range" min=1 max=100 id="brushSizeSlider"></input> <br>
<input type="number" min=1 step=1 id="brushSize"></input> <br>
<hr>
Brush Opacity: <br>
<input type="range"  min=1 max=100 id="brushOpacitySlider"></input> <br>
<input type="number" min=1 step=1 id="brushOpacity"></input> <br>
<hr>
Brush Density: <br>
<input type="range"  min=1 max=100 id="brushDensitySlider"></input> <br>
<input type="number" min=1 step=3 id="brushDensity"></input> <br>
<hr>
Color: <br>
<table>
<tr><td><input type="color" id="brushColor1"></input></td><td><input type="color" id="brushColor2"></input></td><td><input type="color" id="brushColorExtra"></input></td>
<tr><td><button id="useBrushColor1">Use</button></td><td><button id="useBrushColor2">Use</button></td><td><button id="useBrushColorExtra">Use</button></td></tr>
</table>
<hr>
Tool mode: <br>
<input type="checkbox" id="Normal" name="Mode" checked></input> <label for="Normal">[Normal]</label>  <br>
<input type="checkbox" id="Eraser" name="Mode" ></input> <label for="Eraser">[Eraser]</label> <br>
<input type="checkbox" id="AlphaLock" name="Mode" ></input> <label for="AlphaLock">[Alpha Lock]</label> <br>
<hr>
Tool: <br>
<input type="checkbox" id="Pixel" name="Tool" ></input> <label for="Pixel">[Pixel]</label>  <br>
<input type="checkbox" id="Brush" name="Tool" checked></input> <label for="Brush">[Brush]</label>  <br>
<input type="checkbox" id="Airbrush" name="Tool" ></input> <label for="Airbrush">[Airbrush]</label>  <br>
<input type="checkbox" id="Bucket" name="Tool" ></input> <label for="Bucket">[Bucket]</label> <br>
<input type="checkbox" id="ColorPicker" name="Tool" ></input> <label for="ColorPicker">[ColorPicker]</label> <br>
<input type="checkbox" id="Lasso" name="Tool" ></input> <label for="Lasso">[Lasso]</label> <br>
<input type="checkbox" id="Line" name="Tool" ></input> <label for="Line">[Line]</label> <br>
<hr>
<table id="layerCommands"><tr><td><button id="newLayer">+</button></td><td><button id="deleteLayer">-</button></td><td><button id="merge">Merge</button></td><td><button id="layerUp">^</button></td><td><button id="layerDown">v</button><td></tr> 
<tr><td colspan=5><input type="range" min="0" max="100" id="layerOpacity" value="100"></td></tr> </table>
<div id="layersDisplay">
<table id="layersDisplayTable">
</table>
</div>
<hr>
Paper: <br>
<table class="layersTable">
<tr><td><input type="color" id="bgColor"></input></td><td><input type="range" min="0" max="100" id="bgOpacity" value="100"></input></td></tr>
</table>
<hr>
`

	this.handleInnerHTML = `
<div class="right"> <button id="info">README.txt</button> <button id="togglePin">Pin</button> <button id="newOekaki">New</button> <button id="kill">Kill</button></div>  <span id="canvasSize"></span> <div class="left"><button id="toggleTools">Toggle tools</button> <button id="clearLayer">Clear layer</button> <button id="download">Download</button> </div> 

`

this.readMeTxt = `
By RIPY @xRIPY
A really simple but feature-full script drawing app. Quite easy to expand on too!
---
[RIGHT CLICK] to color pick
[CTRL+Z] undo
[CTRL+Y] redo
[E] Eraser mode
[B] Normal mode
[W] Show tools
[A] - Brush size
[D] + Brush size
[S|X] Change between [erase/normal] mode
[R] Reverse view
[SPACE] Pan
---
`


	this.oekakiWidgetCapsula = document.createElement('div');	// Div that contains everything
	this.oekakiWidgetCapsula.className = 'OekakiWidgetCapsula';
	this.oekakiWidgetCapsula.containerOf = THIS;
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
	this.egg = document.createElement('div');					// toolBox HTML element
	this.egg.id = 'EasterEgg';
	this.toolBox = document.createElement('div');				// toolBox HTML element
	this.toolBox.id = 'ToolBox';
	this.handle = document.createElement('div');				// handle  HTML element
	this.handle.id = 'Handle';
	this.paper = document.createElement('canvas');					// paper layer HTML element
	this.paper.id = 'Paper';
	this.paperCTX = this.paper.getContext("2d");		
	
	this.layersDisplayTable = ""; // to set
	
	this.brushSizePresets = [1,2,3,4,5,6,7,8,10,12,15,17,20,25,30,40,50,60,70,80,100,120,150,170,200,250]
	this.brushSize = 3;											// Radious of circle
	this.brushOpacity = 75;										// Stroke opacity
	this.brushDensity = 50;										// Brush stamp opacity
	this.brushColor = {r:0,g:0,b:0}								// Brush color
	this.brushMode = "source-over";								// Normal / Erase / Alpha lock
	this.tool = "brush";										// List
	
	this.focused = true;										// Flag if you can move by dragging handle
	this.movable = true;										// Flag if you can move by dragging handle
	this.pinned = false;										// Flag if the position is fixed to screen
	this.reversed = false;										// Flag reversed view;
	this.panning = false;										// Flag for panning; (pan)
	this.patternMakerDithering = true							// Flag if in pixel brush the dithering algorithm is offset diagonaly by 1 pixel during certain density level, (this gives the ability to make new patterns)
	this.canvasWidth = 600;
	this.canvasHeight = 740;
	
	this.Setup = function(width = 600,height = 740,leftPX,topPX, BGColor){
		
		document.addEventListener("mousedown", BlurFocus)
		document.addEventListener("keydown", Keydown);
		document.addEventListener("keyup", Keyup)
		document.addEventListener("keypress", Keypress);
		
		this.canvasWidth = width;
		this.canvasHeight = height;
	
		this.draft.width = this.canvasWidth; this.draft.height = this.canvasHeight;
		this.draftCTX.globalAlpha = THIS.brushDensity/100;
		this.cursor.width = this.canvasWidth; this.cursor.height = this.canvasHeight;
		this.paper.width = this.canvasWidth; this.paper.height = this.canvasHeight;
		this.paper.style.opacity = 100;
		this.draft.style.transform = "";
		this.reversed = false;
		
		this.oekakiWidgetCapsula.style.position = "absolute";
		
		document.querySelector("body").prepend(this.oekakiWidgetCapsula);	// prepend to body the capsula
		if(!document.getElementById('OekakiWidgetStyle')) {					// apply css
			let style = document.createElement('style');
			style.id = 'OekakiWidgetStyle'
			style.innerHTML = this.style;
			document.querySelector('head').prepend(style);
		}	
		this.oekakiWidgetCapsula.appendChild(this.handle);		// Setup the handle
		this.oekakiWidgetCapsula.appendChild(this.egg);			// Setup the EasterEgg
		this.oekakiWidgetCapsula.appendChild(this.toolBox);		// Setup the toolBox
		this.oekakiWidgetCapsula.appendChild(this.cursor);		// Setup the cursor
		this.oekakiWidgetCapsula.appendChild(this.layersArea);	// Setup the layer's div
		this.oekakiWidgetCapsula.appendChild(this.paper);		// Setup the layer's div
		this.oekakiWidgetCapsula.appendChild(this.draft);		// Setup draft layer
		
		this.handle.innerHTML = this.handleInnerHTML;			
		this.egg.innerHTML = "<span style='color:rgba(255,0,0,0); font-family:MS PGothic' >(っ・ω・)っ</span>"	
		this.egg.style = "transform:translate(-100%,-100%); position:absolute; padding: 0; text-align:center; ";
		
		this.toolBox.innerHTML = this.toolBoxInnerHTML;			
		this.toolBox.style = "transform:translate(-100%,0%); position:absolute";
		
		this.cursor.style = "position:absolute; z-index:9999";
		this.cursor.width = this.canvasWidth; this.cursor.height = this.canvasHeight;
		
		this.layersArea.style = "position:absolute; z-index: 9998";
		
		this.paper.width = this.canvasWidth; this.paper.height = this.canvasHeight;
		this.paper.style = "position:absolute; z-index: 9997";
		if(BGColor){ 
			var canvasBase;
			var BG = document.createElement("canvas"); var BGCTX = BG.getContext("2d");
			BG.width = width; BG.height = height;
			BGCTX.fillStyle = BGColor; BGCTX.fillRect(0,0, width,height); canvasBase = BG;
			this.paperCTX.drawImage(canvasBase,0,0); 
			this.oekakiWidgetCapsula.querySelector("#bgColor").value = BGColor;
		}
		THIS.UpdateHistory("paper",  this.paperCTX.getImageData(0,0,this.canvasWidth,this.canvasHeight), {opacity:"1", color:this.BGColor}, "new layer");
		
		
		this.draft.width = this.canvasWidth; this.draft.height = this.canvasHeight;
		this.draft.style = "position: relative; z-index:10000; opacity: 0;";	
		this.draftCTX.globalAlpha = THIS.brushDensity/100;
		
		this.egg.style.width = this.toolBox.getBoundingClientRect().width+"px";
		this.egg.style.height = this.handle.getBoundingClientRect().height+"px";
		this.egg.style.lineHeight = this.handle.getBoundingClientRect().height+"px";
		this.toolBox.style.height = this.draft.getBoundingClientRect().height+"px";
		this.egg.style.display = "none";
		this.toolBox.style.display = "none";
	
		this.layersDisplayTable = this.oekakiWidgetCapsula.querySelector("#layersDisplay #layersDisplayTable");
		
		this.NewLayer();
		
		// position widget
		if(leftPX && topPX){ this.oekakiWidgetCapsula.style = "top:"+ Math.round(topPX - this.handle.getBoundingClientRect().height) +"px; left:"+ leftPX +"px; z-index:10000"; this.oekakiWidgetCapsula.style.position = "absolute"  }
		else{ this.oekakiWidgetCapsula.style = "top: 50%; left:50%; transform:translate(-50%,-50%); z-index:10000; position: fixed";}
		this.oekakiWidgetCapsula.addEventListener("mousedown",function () { var z = document.querySelectorAll(".OekakiWidgetCapsula").forEach(x => x.style.zIndex = "10000"); this.style.zIndex = "10001";} );
		var r = this.oekakiWidgetCapsula.getBoundingClientRect(); // turning % into PX
		this.oekakiWidgetCapsula.style.transform = "";
		if(!this.pinned) { this.oekakiWidgetCapsula.style.position = "absolute"; this.oekakiWidgetCapsula.style.top = r.top + window.scrollY + "px"; this.oekakiWidgetCapsula.style.left = r.left + window.scrollX + "px" }
		else { this.oekakiWidgetCapsula.style.position = "fixed"; this.oekakiWidgetCapsula.style.top = r.top + "px"; this.oekakiWidgetCapsula.style.left = r.left + "px"  }
		
		// Buttons setup
		
		this.oekakiWidgetCapsula.querySelector("#brushSize").value = this.brushSize;
		this.oekakiWidgetCapsula.querySelector("#brushSizeSlider").value = this.brushSize;
		this.oekakiWidgetCapsula.querySelector("#brushOpacity").value = this.brushOpacity;
		this.oekakiWidgetCapsula.querySelector("#brushOpacitySlider").value = this.brushOpacity;
		this.oekakiWidgetCapsula.querySelector("#brushDensity").value = this.brushDensity;
		this.oekakiWidgetCapsula.querySelector("#brushDensitySlider").value = this.brushDensity;
		this.oekakiWidgetCapsula.querySelector("#brushColor1").value = "#"+this.brushColor.r.toString(16).padStart(2,"0")+""+this.brushColor.g.toString(16).padStart(2,"0")+""+this.brushColor.b.toString(16).padStart(2,"0")+"";
		this.oekakiWidgetCapsula.querySelector("#brushColor2").value = "#FF0000";
		this.oekakiWidgetCapsula.querySelector("#brushColorExtra").value = "#0000FF";
		this.oekakiWidgetCapsula.querySelector("#canvasSize").innerHTML = this.canvasWidth + "x" + this.canvasHeight;
		this.oekakiWidgetCapsula.querySelector("#bgColor").value = "#000000";
		
		// Buttons event
		
		this.oekakiWidgetCapsula.querySelector("#kill").addEventListener("mousedown", function(e){ e.stopPropagation(); });
		this.oekakiWidgetCapsula.querySelector("#clearLayer").addEventListener("mousedown", function(e){ e.stopPropagation(); });
		this.oekakiWidgetCapsula.querySelector("#toggleTools").addEventListener("mousedown", function(e){ e.stopPropagation(); });
		this.oekakiWidgetCapsula.querySelector("#newOekaki").addEventListener("mousedown", function(e){ e.stopPropagation(); });
		
		this.oekakiWidgetCapsula.querySelector("#kill").addEventListener("click", function(e){ THIS.Kill(true) });
		this.oekakiWidgetCapsula.querySelector("#toggleTools").addEventListener("click", function(e){ THIS.OpenToolBox() });
		this.oekakiWidgetCapsula.querySelector("#clearLayer").addEventListener("click", function(e){ THIS.ClearLayer(); });
		this.oekakiWidgetCapsula.querySelector("#newOekaki").addEventListener("click", function(e){ 
			var pr = prompt("New oekaki? \n[WIDTH]x[HEIGHT] [BG_HEX_COLOR]\t | Custom size.\nSNIPPET [BG_HEX_COLOR]\t\t\t\t | Draw boundaries event.",THIS.oekakiWidgetCapsula.querySelector("#canvasSize").innerHTML);
			if (typeof pr === 'string' || pr instanceof String) { pr = pr.toLowerCase(); }
			if(!pr) {return;}
			if(pr.split(" ")[0] == "snippet") { THIS.Kill(true); THIS.HtmlSnippetTool(pr.split(" ")[1]); }
			if(pr == "") { THIS.NewOekaki(THIS.oekakiWidgetCapsula.querySelector("#canvasSize").innerHTML.split("x")[0], THIS.oekakiWidgetCapsula.querySelector("#canvasSize").innerHTML.split("x")[1]); }
			try { if (!(isNaN(pr.split("x")[0]) || isNaN(pr.split("x")[1].split(" ")[0]))) { THIS.NewOekaki(pr.split("x")[0],pr.split("x")[1].split(" ")[0],pr.split(" ")[1]); } } catch(e) {}
		});
		
		this.oekakiWidgetCapsula.querySelector("#info").addEventListener("click", function(e){ alert(THIS.readMeTxt) });
		this.oekakiWidgetCapsula.querySelector("#togglePin").addEventListener("click", function(e){ THIS.TogglePinned() });
		this.oekakiWidgetCapsula.querySelector("#download").addEventListener("click", function(e){
			
			  var link = document.createElement('a');
			  link.download = ""+THIS.oekakiWidgetCapsula.querySelector("#canvasSize").innerHTML+"_"+Date.now();
			  link.href = THIS.FlattenCanvas().canvas.toDataURL();
			  link.click();
		});
		
		this.oekakiWidgetCapsula.querySelector("#brushSize").addEventListener("input", function(e){ THIS.SetBrushSize(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushSizeSlider").addEventListener("input", function(e){ THIS.SetBrushSize(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushOpacity").addEventListener("input", function(e){ THIS.SetBrushOpacity(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushOpacitySlider").addEventListener("input", function(e){ THIS.SetBrushOpacity(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushDensity").addEventListener("input", function(e){ THIS.SetBrushDensity(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushDensitySlider").addEventListener("input", function(e){ THIS.SetBrushDensity(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushColor1").addEventListener("change", function(e){ THIS.SetBrushColor(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushColor2").addEventListener("change", function(e){ THIS.SetBrushColor(this.value) });
		this.oekakiWidgetCapsula.querySelector("#brushColorExtra").addEventListener("change", function(e){ THIS.SetBrushColor(this.value) });
		this.oekakiWidgetCapsula.querySelector("#useBrushColor1").addEventListener("click", function(e){ THIS.SetBrushColor(THIS.oekakiWidgetCapsula.querySelector("#brushColor1").value) });
		this.oekakiWidgetCapsula.querySelector("#useBrushColor2").addEventListener("click", function(e){ THIS.SetBrushColor(THIS.oekakiWidgetCapsula.querySelector("#brushColor2").value) });
		this.oekakiWidgetCapsula.querySelector("#useBrushColorExtra").addEventListener("click", function(e){ THIS.SetBrushColor(THIS.oekakiWidgetCapsula.querySelector("#brushColorExtra").value) });
		this.oekakiWidgetCapsula.querySelector("#bgColor").addEventListener("change", function(e){ 
			THIS.paperCTX.clearRect(0,0,THIS.canvasWidth,THIS.canvasHeight);
			THIS.paperCTX.fillStyle = this.value; THIS.paperCTX.fillRect(0,0,THIS.canvasWidth,THIS.canvasHeight);
			THIS.UpdateHistory("paper", THIS.paperCTX.getImageData(0,0,THIS.canvasWidth, THIS.canvasHeight), {opacity:"1", color:this.value}, "change paper color");
		});
		
		function simulateRadio(name, pressed){var x = THIS.oekakiWidgetCapsula.querySelectorAll("input[type='checkbox'][name='"+name+"']"); for(let i = 0; i <  x.length; i++) {  x[i].checked = false; } pressed.checked = true}
		
		this.oekakiWidgetCapsula.querySelector("#Normal").addEventListener("click", function() { THIS.SetBrushMode("source-over"); simulateRadio("Mode", this); });
		this.oekakiWidgetCapsula.querySelector("#Eraser").addEventListener("click", function() { THIS.SetBrushMode("destination-out"); simulateRadio("Mode", this); });
		this.oekakiWidgetCapsula.querySelector("#AlphaLock").addEventListener("click", function() { THIS.SetBrushMode("source-atop"); simulateRadio("Mode", this); });
		
		this.oekakiWidgetCapsula.querySelector("#Pixel").addEventListener("click", function() { THIS.SetTool("pixel");  simulateRadio("Tool", this); });
		this.oekakiWidgetCapsula.querySelector("#Brush").addEventListener("click", function() { THIS.SetTool("brush");  simulateRadio("Tool", this); });
		this.oekakiWidgetCapsula.querySelector("#Airbrush").addEventListener("click", function() { THIS.SetTool("airbrush");  simulateRadio("Tool", this);});
		this.oekakiWidgetCapsula.querySelector("#Bucket").addEventListener("click", function() { THIS.SetTool("bucket"); simulateRadio("Tool", this); });
		this.oekakiWidgetCapsula.querySelector("#ColorPicker").addEventListener("click", function() { THIS.SetTool("colorpicker");  simulateRadio("Tool", this);});
		this.oekakiWidgetCapsula.querySelector("#Lasso").addEventListener("click", function() { THIS.SetTool("lasso");  simulateRadio("Tool", this);});
		this.oekakiWidgetCapsula.querySelector("#Line").addEventListener("click", function() { THIS.SetTool("line");  simulateRadio("Tool", this);});
		
		// layer stuff
		
		this.oekakiWidgetCapsula.querySelector("#bgOpacity").addEventListener("input", function() { THIS.SetPaperOpacity(this.value); });
		this.oekakiWidgetCapsula.querySelector("#layerOpacity").addEventListener("input", function() { THIS.SetLayerOpacity(this.value); });
		this.oekakiWidgetCapsula.querySelector("#newLayer").addEventListener("click", function() { THIS.NewLayer(THIS.currentLayer); });
		this.oekakiWidgetCapsula.querySelector("#deleteLayer").addEventListener("click", function() { THIS.DeleteCurrentLayer(); });
		this.oekakiWidgetCapsula.querySelector("#merge").addEventListener("click", function() { THIS.MergeBelowLayer(); });
		this.oekakiWidgetCapsula.querySelector("#layerUp").addEventListener("click", function() { THIS.LayerUp(); });
		this.oekakiWidgetCapsula.querySelector("#layerDown").addEventListener("click", function() { THIS.LayerDown(); });
		
		//
		// Move around widget
		// stolen from https://stackoverflow.com/questions/9334084/moveable-draggable-div / modified a bit
		
	
		this.handle.addEventListener('mousedown', mouseDown, false);
		this.egg.addEventListener('mousedown', mouseDown, false);
		this.oekakiWidgetCapsula.addEventListener('mousedown', mouseDownPan, false);
		window.addEventListener('mouseup', mouseUp, false);
		
			var clickedCord = "";
		function mouseUp() { window.removeEventListener('mousemove', divMove, true); }
		function mouseDown(e){
			var r = THIS.handle.getBoundingClientRect();
			clickedCord = {x:e.clientX - r.x, y:e.clientY-r.y}
			window.addEventListener('mousemove', divMove, true);
		}
		function mouseDownPan(e){
			if(!THIS.panning) {return;}
			var r = THIS.handle.getBoundingClientRect();
			clickedCord = {x:e.clientX - r.x, y:e.clientY-r.y}
			window.addEventListener('mousemove', divMove, true);
		}
		
		function divMove(e){
		  if(!THIS.movable){ return }
		  if(e.clientY <= 1) {return;}
		  var div = THIS.oekakiWidgetCapsula;
		  if(!THIS.pinned) {
			div.style.top = e.clientY - clickedCord.y + window.scrollY + 'px';
			div.style.left = e.clientX - clickedCord.x + window.scrollX + 'px';
		  }
		  else {
			 div.style.top = e.clientY - clickedCord.y + 'px';
			div.style.left = e.clientX - clickedCord.x + 'px';
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
		this.currentLayer = 0;
		this.history = [];
		if(full) { 
			this.oekakiWidgetCapsula.remove()
			document.removeEventListener("keydown", Keydown);
			document.removeEventListener("keyup", Keyup);
			document.removeEventListener("keypress", Keypress);
			document.removeEventListener("mousedown", BlurFocus)
		};
	}
	
	this.NewOekaki = function(w,h,BGColor){
		this.canvasWidth = w; this.canvasHeight = h;
		this.oekakiWidgetCapsula.querySelector("#canvasSize").innerHTML = this.canvasWidth + "x" + this.canvasHeight;
		this.draft.width = this.canvasWidth; this.draft.height = this.canvasHeight;
		this.draftCTX.globalAlpha = THIS.brushDensity/100;
		this.cursor.width = this.canvasWidth; this.cursor.height = this.canvasHeight;
		this.paper.width = this.canvasWidth; this.paper.height = this.canvasHeight;
		this.oekakiWidgetCapsula.querySelector("#bgColor").value = BGColor;
		this.paper.style.opacity = 100;
		this.oekakiWidgetCapsula.querySelector("#bgOpacity").value = 100;
		this.draft.style.transform = "";
		this.reversed = false;
		this.Kill();
		if(BGColor){
			this.paperCTX.fillStyle = BGColor; this.paperCTX.fillRect(0,0,w,h);	
		}
		THIS.UpdateHistory("paper",  this.paperCTX.getImageData(0,0,this.canvasWidth,this.canvasHeight), {opacity:"1", color:this.BGColor}, "new layer");
		this.NewLayer();
	}
	
	this.OpenToolBox = function(){
		THIS.oekakiWidgetCapsula.querySelector("#toggleTools").addEventListener("click",THIS.CloseToolBox);
		THIS.oekakiWidgetCapsula.querySelector("#toggleTools").removeEventListener("click",THIS.OpenToolBox);
		THIS.egg.style.display = "block";
		THIS.toolBox.style.display = "block";
	}
	this.CloseToolBox = function(){
		THIS.oekakiWidgetCapsula.querySelector("#toggleTools").addEventListener("click",THIS.OpenToolBox);
		THIS.oekakiWidgetCapsula.querySelector("#toggleTools").removeEventListener("click",THIS.CloseToolBox);
		THIS.egg.style.display = "none";
		THIS.toolBox.style.display = "none";
	}
	this.TogglePinned = function(){
		this.pinned = !this.pinned;
		var r = this.oekakiWidgetCapsula.getBoundingClientRect();
		if(!this.pinned) { this.oekakiWidgetCapsula.style.position = "absolute"; this.oekakiWidgetCapsula.style.top = r.top + window.scrollY + "px"; this.oekakiWidgetCapsula.style.left = r.left + window.scrollX + "px" }
		else { this.oekakiWidgetCapsula.style.position = "fixed"; this.oekakiWidgetCapsula.style.top = r.top + "px"; this.oekakiWidgetCapsula.style.left = r.left + "px"  }
		
	}
	this.ClearLayer = function(){	
		THIS.layers[THIS.currentLayer].clearRect(0, 0, THIS.layers[THIS.currentLayer].canvas.width, THIS.layers[THIS.currentLayer].canvas.height);  
		THIS.UpdateHistory(THIS.layers[THIS.currentLayer].canvas.id, THIS.layers[THIS.currentLayer].getImageData(0,0,THIS.canvasWidth, THIS.canvasHeight), [], "stroke");
	}
	
	this.ReverseView = function(){
		
		if(!this.reversed) {
			for(let i = 0; i < this.layers.length; i++) {
				this.layers[i].canvas.style.transform = "scale(-1, 1)";
			}
			this.draft.style.transform = "scale(-1, 1)";
			this.reversed = true;
		} else {
			for(let i = 0; i < this.layers.length; i++) {
				this.layers[i].canvas.style.transform = "scale(1, 1)";
			}
			this.draft.style.transform = "";
			this.reversed = false;
		}
	}
	
	//
	// Sets ------------------------------------------------------------------------------------------------------
	//
	
	this.SetBrushSize = function(x){
		if(x < 1) { x = 1 }
		this.oekakiWidgetCapsula.querySelector("#brushSize").value = x;
		this.oekakiWidgetCapsula.querySelector("#brushSizeSlider").value = x;
		this.brushSize = x
	}
	this.SetBrushOpacity = function(x){
		if(x < 1) { x = 1 }
		this.oekakiWidgetCapsula.querySelector("#brushOpacity").value = x;
		this.oekakiWidgetCapsula.querySelector("#brushOpacitySlider").value = x;
		this.brushOpacity = x
		for(let i = 0; i < this.layers.length; i++) { this.layers[i].globalAlpha = x/100;  }
	}
	this.SetBrushDensity = function(x){
		if(x < 1) { x = 1 }
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
		var darkendColor = "rgba("+Math.round(this.brushColor.r/6)+","+Math.round(this.brushColor.g/6)+","+Math.round(this.brushColor.b/6)+",0.75) "
		this.handle.style.backgroundColor = darkendColor;	
		this.egg.style.backgroundColor = darkendColor;				
		this.toolBox.style.backgroundColor = darkendColor;	
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
		flatCTX.globalAlpha = THIS.paper.style.opacity;
		flatCTX.drawImage(THIS.paper, 0, 0)
		var z = this.layersArea.querySelectorAll("canvas");
		for(let i = z.length-1; i >= 0; i--) { if(z[i].style.visibility == "hidden") {continue;} flatCTX.globalAlpha = z[i].style.opacity; flatCTX.drawImage(z[i], 0, 0);  }
		return flatCTX
	}
	
	//
	// History Managment ------------------------------------------------------------------------------------------------------
	//
	
	// like its called, Redo that action in the history
	this.Redo = function(actionType, times){
		let x = this.history.at(-times)
		if(x.action == "change opacity") {
			if(x.ID == "paper") { this.paper.style.opacity = x.propriety.opacity; this.oekakiWidgetCapsula.querySelector("#bgOpacity").value = x.propriety.opacity*100; }  
			else { 
				this.SelectLayer(x.ID);
				this.layers[this.currentLayer].canvas.style.opacity = x.propriety.opacity; 
			}  
		}
		else if(x.action == "change paper color") {
			this.paperCTX.putImageData(x.image,0,0)
			this.oekakiWidgetCapsula.querySelector("#bgColor").value = x.propriety.color;
		}
		else if(x.action == "new layer") {
			this.SelectLayer(x.propriety.before);
			var prev = this.layers[this.currentLayer].canvas;
			this.SelectLayer(x.ID);
			// build it lol, you shouldnt be here if its a paper layer, aka the setup
			// i get it! you dont need to recreate it! its saved in already in layer[i]
			if(x.propriety.before == -1) { this.layersArea.appendChild(this.layers[this.currentLayer].canvas) }
			else { try{ this.layersArea.insertBefore(this.layers[this.currentLayer].canvas, prev); } catch(e) {this.layersArea.appendChild(this.layers[this.currentLayer].canvas)} }
			// this.layers.push(layer.getContext("2d")); no dont do this.
			this.UpdateHTMLayerDisplay();
			this.SelectLayer(x.ID);
		}
		else if(x.action == "deleted layer") {
			// during the undo process we rebuilt it, so umh, redo the delete, delete it, select the one before in propriety
			this.SelectLayer(x.ID)
			this.layers[this.currentLayer].canvas.remove();
			if(x.propriety.before) { this.SelectLayer(x.propriety.before) }
			else { this.SelectLayer(this.layersArea.lastChild.id) }
		}
		else if(x.action == "stroke") {
			this.SelectLayer(x.ID);
			this.layers[this.currentLayer].putImageData(x.image,0,0)
		}
		else if(x.action == "merge") {
			debugger;
			// redo a merge, x.ID = layer when we pressed merge
			this.SelectLayer(x.ID)
			let prev = THIS.currentLayer;
			if(this.layers[prev].canvas.nextSibling) { 
			// selecting next element
				this.SelectLayer(this.layers[prev].canvas.nextSibling.id)
				let current = THIS.currentLayer;
				// drawing the layer atop
				this.layers[current].globalAlpha = this.layers[prev].canvas.style.opacity;
				THIS.layers[current].drawImage(THIS.layers[prev].canvas,0,0);
				this.layers[current].globalAlpha = this.layers[current].canvas.style.opacity;
				// removing prev
				THIS.layers[prev].canvas.remove(); 
			}
		}
		else if(x.action == "down"){
			// redo
			debugger;
			this.SelectLayer(x.ID);
			let prev = THIS.currentLayer;
			if(x.propriety.before == "bottom"){
				this.layersArea.appendChild(this.layers[prev].canvas)
			} else {
				this.SelectLayer(x.propriety.before);
				this.layersArea.insertBefore(this.layers[prev].canvas, this.layers[this.currentLayer].canvas)
			}
			this.SelectLayer(x.ID);
		}
		else if(x.action == "up"){
			// its a redo
			this.SelectLayer(x.ID);
			let prev = THIS.currentLayer;
			this.SelectLayer(x.propriety.before);
			this.layersArea.insertBefore(this.layers[prev].canvas, this.layers[this.currentLayer].canvas)
		}
		
		this.UpdateHTMLayerDisplay();
	}
	// like its called, Undo that action in the history
	this.Undo = function(actionType, times){
		let x = this.history.at(-times)
		if(x.action == "change opacity") { // can either be paper or a normal id.
			// finding previous state, either a change opacity, new layer
			for(let i = this.history.length-1-times; i >= 0; i--) { // -1 because skip current one
				if((this.history[i].action == "change opacity" || this.history[i].action == "new layer" ) && this.history[i].ID == x.ID )  {x = this.history[i]; break;}
			}
			if(x.ID == "paper") { this.paper.style.opacity = x.propriety.opacity; this.oekakiWidgetCapsula.querySelector("#bgOpacity").value = x.propriety.opacity*100; }  
			else { 
				this.SelectLayer(x.ID);
				this.layers[this.currentLayer].canvas.style.opacity = x.propriety.opacity; 
				this.oekakiWidgetCapsula.querySelector("#bgOpacity").value = x.propriety.opacity*100;
			} 
		}
		else if(x.action == "change paper color") {
			// finding previous state, either a change paper color, or new layer, aka the setup one in this case
			for(let i = this.history.length-1-times; i >= 0; i--) { // -1 because skip current one
				if((this.history[i].action == "change paper color" || this.history[i].action == "new layer" ) && this.history[i].ID == x.ID )  {x = this.history[i]; break;}
			}
			this.paperCTX.putImageData(x.image,0,0)
			this.oekakiWidgetCapsula.querySelector("#bgColor").value = x.propriety.color;
		}
		else if(x.action == "new layer") {
			// delete it
			this.SelectLayer(x.ID)
			this.layers[this.currentLayer].canvas.remove();
			this.SelectLayer(x.propriety.before)
		}
		else if(x.action == "deleted layer") {
			// now for deleted is another story, the layer is lost, gotta rebuild it
			// correction! its not! its still saved in this.layers !! good job me for doing something right without knowing it
			// resurrect it
			this.SelectLayer(x.propriety.before);
			var prev = this.layers[this.currentLayer].canvas;
			this.SelectLayer(x.ID);
			if(x.propriety.before == -1) { this.layersArea.appendChild(this.layers[this.currentLayer].canvas) }
			else { try{ this.layersArea.insertBefore(this.layers[this.currentLayer].canvas, prev); } catch(e) {this.layersArea.appendChild(this.layers[this.currentLayer].canvas)} }
			// this.layers.push(layer.getContext("2d")); no dont do this.
			this.UpdateHTMLayerDisplay();
			this.SelectLayer(x.ID);
		}
		else if(x.action == "stroke") {
			// finding previous state, either a stroke or new layer or merge
			for(let i = this.history.length-1-times; i >= 0; i--) { // -1 because skip current one
				if((this.history[i].action == "stroke" || this.history[i].action == "new layer"  || this.history[i].action == "merge" ) && this.history[i].ID == x.ID )  {x = this.history[i]; break;}
			}
			this.SelectLayer(x.ID);
			this.layers[this.currentLayer].putImageData(x.image,0,0)
		}
		else if(x.action == "merge") {
			// with merge we have both a deletion and a draw
			
			// select layer that was deleted with the merge, we do this to get his position in the layers array
			var saved = x.ID;
			this.SelectLayer(x.ID);
			var prev = this.currentLayer;
			// select the layer that is actualy present
			this.SelectLayer(x.propriety.mergedInto);
			
			// insert the missing layer before the one present
			this.layersArea.insertBefore(this.layers[prev].canvas, this.layers[this.currentLayer].canvas);

			// the missing layer already has the info of how it was before 
			// restore previous state of the layer that was modified by the merge, and select it
			this.UpdateHTMLayerDisplay();
			//debugger;
			for(let i = this.history.length-1-times; i >= 0; i--) { // -1 because skip current one
				if((this.history[i].action == "stroke" || this.history[i].action == "new layer" || this.history[i].action == "merge") && this.history[i].ID == x.propriety.mergedInto )  {x = this.history[i]; break;}
			}
			this.SelectLayer(x.ID);
			this.layers[this.currentLayer].putImageData(x.image,0,0)
			this.SelectLayer(saved);
			//this.UpdateHTMLayerDisplay();
			//debugger;
		}
		else if(x.action == "down"){
			this.SelectLayer(x.ID);
			let prev = THIS.currentLayer;
			if(x.propriety.below == "bottom"){
				this.layersArea.insertBefore(this.layers[prev].canvas, this.layersArea.lastChild)
			} else {
				this.SelectLayer(x.propriety.below);
				this.layersArea.insertBefore(this.layers[prev].canvas, this.layers[this.currentLayer].canvas.previousSibling.previousSibling)
			}
			this.SelectLayer(x.ID);
		}
		else if(x.action == "up"){
			this.SelectLayer(x.ID);
			let prev = THIS.currentLayer;
			this.SelectLayer(x.propriety.below);
			this.layersArea.insertBefore(this.layers[prev].canvas, this.layers[this.currentLayer].canvas.nextSibling)
			this.SelectLayer(x.ID);
		}
		
		this.UpdateHTMLayerDisplay();
	}
	
	this.UpdateHistory = function(layerId, snapshot, propriety, action){
		this.history.length = this.history.length-undoTimes // if its 0 doesnt change anyway
		undoTimes = 0;
		try { if(action == "change opacity" && this.history.at(-1).action == "change opacity") {this.history.pop();} } catch(e) {}
		this.history.push({ID:layerId, image:snapshot, propriety:propriety, action:action});
		if(layerId != "paper") { this.UpdateHTMLayerDisplay();  }
	}
	
	//
	// Layer Managment ------------------------------------------------------------------------------------------------------
	//

	this.SetPaperOpacity = function(x){
		this.paper.style.opacity = x/100;
		THIS.UpdateHistory("paper", [], {opacity:THIS.paper.style.opacity}, "change opacity");
	}
	this.SetLayerOpacity = function(x){
		this.layers[this.currentLayer].canvas.style.opacity = x/100;
		THIS.UpdateHistory(THIS.layers[THIS.currentLayer].canvas.id, [], {opacity:THIS.layers[THIS.currentLayer].canvas.style.opacity}, "change opacity");
	}
	
	// note: the "this.layers" variable contains layer informations, not position on the html, the position is dictated by the html
	// we will need to keep every layer for ctrl+z

	// adds the class "selected layer to the selected layer, and changes this.currentLayer so you can actualy find it
	this.SelectLayer = function(id){
		//console.log(id);
		// find current layer
		for(let i = 0; i < this.layers.length; i++) {
			if(id == this.layers[i].canvas.id) { this.currentLayer = i; break;}
		}
		// update layer area ( canvas where you draw )
		let x = this.layersArea.querySelectorAll("canvas")
		for(let i = 0; i < x.length; i++) {
			if(id == x[i].id) { x[i].className = "SelectedLayer"; }
			else { x[i].className = ""; }
		}
		// update layer display ( where you select the layer)
		let z = this.layersDisplayTable.querySelectorAll("tr")
		for(let i = 0; i < z.length; i++) {
			if(id == z[i].id) {z[i].className = "SelectedLayer";}
			else {z[i].className = "";};
		}
		// after selection, put the correct opacity value
		try { THIS.oekakiWidgetCapsula.querySelector("#layerOpacity").value = parseFloat(THIS.layersArea.querySelector(".SelectedLayer").style.opacity)*100;  } catch(e) {}
	}
	
	// updates the display
	this.UpdateHTMLayerDisplay = function(){
		var selected ;
		try { selected = this.layersDisplayTable.querySelector(".SelectedLayer").id }
		catch (e) { selected = "ID:0" }
		this.layersDisplayTable.innerHTML = "";
		var x = this.layersArea.querySelectorAll("canvas");
		for(let i = 0; i < x.length; i++) {
			// fixing z-index
			x[i].style.zIndex = x.length-i; 
			// canvas drawing
			let row = document.createElement("tr")
			let preview = document.createElement("canvas")
			preview.style.backgroundColor = "rgba(255,255,255,0.5)";
			let previewCTX = preview.getContext("2d");
			preview.width = x[i].width; preview.height = x[i].height;
			previewCTX.drawImage(x[i],0,0)
			// canvas appending
			row.addEventListener("click", function() { THIS.SelectLayer(x[i].id); });
			row.id = x[i].id;
			row.innerHTML = "<td class='preview'></td><td><button class='toggleHide'>Hide</button></td>"
			row.querySelector(".preview").appendChild(preview);
			this.layersDisplayTable.appendChild(row);
			if(x[i].disabled) {row.querySelector(".toggleHide").innerHTML = "Show"; row.querySelector(".toggleHide").style.opacity = "0.1";  row.querySelector(".preview").style.opacity = "0.1"}
			else { row.querySelector(".toggleHide").innerHTML = "Hide"; row.querySelector(".toggleHide").style.opacity = "1";  row.querySelector(".preview").style.opacity = "1"} 
			row.querySelector(".toggleHide").addEventListener("click", function(e) { e.stopPropagation();
				if(x[i].style.visibility == "hidden") {x[i].style.visibility = "visible"; this.innerHTML = "Hide"; x[i].disabled = false; row.querySelector(".toggleHide").style.opacity = "1";  row.querySelector(".preview").style.opacity = "1"; return} 
				x[i].style.visibility = "hidden"; this.innerHTML = "Show"; x[i].disabled = true; row.querySelector(".toggleHide").style.opacity = "0.1";  row.querySelector(".preview").style.opacity = "0.1"
			});
		}
		this.SelectLayer(selected);
	}
	this.NewLayer = function(index = -1){
		var layer = document.createElement("canvas");
		layer.width = this.canvasWidth; layer.height = this.canvasHeight;
		layer.style.position = "absolute";
		layer.id = "ID:"+this.layerUniqueID;
		layer.style.opacity = "1";
		if(index == -1) { this.layersArea.appendChild(layer) }
		else { try{ this.layersArea.insertBefore(layer,this.layers[index].canvas); } catch(e) {this.layersArea.appendChild(layer)} }
		this.layers.push(layer.getContext("2d"));
		this.layerUniqueID++;
		let fakeCTX = layer.getContext("2d");
		if(index == -1) { this.UpdateHistory(layer.id, fakeCTX.getImageData(0,0,this.canvasWidth, this.canvasHeight), {opacity:"1", before:-1}, "new layer"); }
		else { this.UpdateHistory(layer.id, fakeCTX.getImageData(0,0,this.canvasWidth, this.canvasHeight), {opacity:"1", before:THIS.layers[index].canvas.id}, "new layer"); }
		this.SelectLayer(layer.id);
		this.UpdateHTMLayerDisplay();
	}
	this.DeleteCurrentLayer = function(){
		let prev = THIS.currentLayer;
		if(this.layers[prev].canvas.nextSibling) {  this.SelectLayer(this.layers[prev].canvas.nextSibling.id); THIS.UpdateHistory(THIS.layers[prev].canvas.id, [], {before:THIS.layers[prev].canvas.nextSibling.id}, "deleted layer");  THIS.layers[prev].canvas.remove(); }
		else if (this.layersArea.lastChild) {  THIS.UpdateHistory(THIS.layers[prev].canvas.id, [], {before:THIS.layersArea.lastChild.id}, "deleted layer"); THIS.layers[prev].canvas.remove(); if (this.layersArea.lastChild) { this.SelectLayer(this.layersArea.lastChild.id) };   }
		else { console.log("nothing to delete");}
		
		this.UpdateHTMLayerDisplay();
	}
	this.MergeBelowLayer = function(){
		let prev = THIS.currentLayer;
		if(this.layers[prev].canvas.nextSibling) { 
			if(this.layers[prev].canvas.nextSibling.disabled) { console.log("cant merge with invisible layer"); return;}
			this.SelectLayer(this.layers[prev].canvas.nextSibling.id)
			let current = THIS.currentLayer;
			this.layers[current].globalAlpha = this.layers[prev].canvas.style.opacity;
			THIS.layers[current].drawImage(THIS.layers[prev].canvas,0,0);
			this.layers[current].globalAlpha = this.layers[current].canvas.style.opacity;
			THIS.UpdateHistory(THIS.layers[prev].canvas.id, THIS.layers[current].getImageData(0,0,this.canvasWidth, this.canvasHeight), {mergedInto:THIS.layers[current].canvas.id}, "merge"); 
			THIS.layers[prev].canvas.remove(); 
		}
		else { console.log("nothing to merge");}
		
		this.UpdateHTMLayerDisplay();
	}
	this.LayerUp = function(){
		let prev = THIS.currentLayer;
		if(this.layers[prev].canvas.previousSibling) { 
			var x = this.layers[prev].canvas.previousSibling.id
			this.layersArea.insertBefore(this.layers[prev].canvas, this.layers[prev].canvas.previousSibling)
			THIS.UpdateHistory(THIS.layers[prev].canvas.id, [], {below:x}, "up"); 
		}
		else { console.log("cant go up");}
		
		this.UpdateHTMLayerDisplay();
	}
	this.LayerDown = function(){
		let prev = THIS.currentLayer;
		if(this.layers[prev].canvas.nextSibling) { 
			if(this.layers[prev].canvas.nextSibling.nextSibling) {
				var x = this.layers[prev].canvas.nextSibling.nextSibling.id
				this.layersArea.insertBefore(this.layers[prev].canvas, this.layers[prev].canvas.nextSibling.nextSibling)
				THIS.UpdateHistory(THIS.layers[prev].canvas.id, [], {below:x}, "down"); 
			} else {
				this.layersArea.appendChild(this.layers[prev].canvas)
				THIS.UpdateHistory(THIS.layers[prev].canvas.id, [], {below:"bottom"}, "down"); 
			}
		}
		else { console.log("cant go down");}
		
		this.UpdateHTMLayerDisplay();
	}
	
	//
	// Tools --------------------------------------------------------------------------------------------------------------------------------
	//
	
	var brushTip = document.createElement("canvas");
	var brushTipCTX = brushTip.getContext("2d");
	var texture = document.createElement("canvas");
	var textureCTX = texture.getContext("2d");
	
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
	
	function PixelTool(stroke){
		
		THIS.draftCTX.globalAlpha = 1; // disable density
		
		var size = parseInt(THIS.brushSize)+1;
		var brushTipData = new Uint8ClampedArray(size*size*4).fill(0);
		var color = THIS.brushColor; color.a = 255;
		
		//building brush tip algorithm
		for(let x = 0; x < size; x++){
			for(let y = 0; y < size; y++){
				if((x-size/2)*(x-size/2) + (y-size/2)*(y-size/2) < ((size-1)/2)*((size-1)/2)){
					colorPixel(brushTipData, getPixelPos(x, y, size), color)
				}
			}
		}
		
		var brushTipImageData = new ImageData(brushTipData, size, size);
		brushTip.width = size; brushTip.height = size
		brushTipCTX.putImageData(brushTipImageData,0,0);
		
		var width = parseInt(THIS.canvasWidth)+1;
		var height = parseInt(THIS.canvasHeight)+1;
		
		// Matrix
		// thanks https://www.youtube.com/watch?v=IviNO7iICTM https://en.wikipedia.org/wiki/Ordered_dithering
		var ditheringSize = 4;
		 var ditheringRule = [
		  [0, 8, 2, 10],
		  [12, 4, 14, 6],
		  [3, 11, 1 ,9],
		  [15, 7, 13, 5]
		];
		var density  = Math.round(THIS.brushDensity/100*16)
		density = density == 0 ? 1 : density;
		if(THIS.patternMakerDithering){
			// 3px distance
			if(THIS.brushDensity/100*16 <= 1.44 && THIS.brushDensity/100*16 >= 0.64) {
				ditheringSize = 3
				ditheringRule =  [
				 [0, 255, 255], 
				 [255, 255, 255], 
				 [255, 255, 255], 
			];}
			//vertical lines
			if(THIS.brushDensity/100*16 <= 7.52 && THIS.brushDensity/100*16 >= 7.04) {
				ditheringSize = 2
				ditheringRule =[
				  [255, 0, 255, 0],
				  [255, 0, 255, 0],
				  [255, 0, 255 ,0],
				  [255, 0, 255, 0]
			];}
			// horizontal lines
			if(THIS.brushDensity/100*16 <= 8.96 && THIS.brushDensity/100*16 >= 8.48) {
				ditheringSize = 2
				ditheringRule =[
				  [255, 255, 255, 255],
				  [0, 0, 0, 0],
				  [255, 255, 255 ,255],
				  [0, 0, 0, 0]
			];}
		}
		/*
			custom dithering: each N of times a pattern appears
			3 6 6 6 7 6 6 3 4 5 4 3 6 6 7 6 6 6 4
			^ 4 if we count the "brushDensity = 0" that im not allowing
			  ^  this 6 i added artficialy because not allowing 0 would have made the first one last 10 numbers.
		*/
		// creating texture layert
		var counter = 0;
		var textureData = new Uint8ClampedArray(width*height*4).fill(255);
		var color = {r:0, g:0, b:0, a:0}
		for(let y = 0; y < height; y++){
			for(let x = 0; x < width; x++){
				if(density > ditheringRule[y%ditheringSize][x%ditheringSize]) { colorPixel(textureData, getPixelPos(x, y, width), color) }
			}
		}
		
		var textureImageData = new ImageData(textureData, width, height);
		texture.width = width; texture.height = height;
		textureCTX.putImageData(textureImageData,0,0);
		
		
		// stamping the brushTipData each pixel
		for(let i = 0; i < stroke.length-1; i++){
			THIS.draftCTX.drawImage(brushTip,Math.floor(stroke[i].x-size/2),Math.floor(stroke[i].y-size/2));
		}
		THIS.draftCTX.globalCompositeOperation = "destination-out";
		THIS.draftCTX.drawImage(texture,0,0);
		THIS.draftCTX.globalCompositeOperation = "source-over";
		// output
		THIS.layers[THIS.currentLayer].clearRect(0, 0, THIS.canvasWidth, THIS.canvasHeight);    // Clear the layer
		THIS.layers[THIS.currentLayer].globalAlpha = 1;
		THIS.layers[THIS.currentLayer].globalCompositeOperation = "source-over";
		THIS.layers[THIS.currentLayer].drawImage(cacheCanvas, 0, 0);   						// Apply the layer in memory
		THIS.layers[THIS.currentLayer].globalAlpha = THIS.brushOpacity/100;
		THIS.layers[THIS.currentLayer].globalCompositeOperation = THIS.brushMode;
		THIS.layers[THIS.currentLayer].drawImage(THIS.draft, 0, 0);   						// Apply the stroke to layer
		
		THIS.draftCTX.globalAlpha = THIS.brushDensity/100; // re-enable density
	}
	
	
	function BrushTool(stroke){
		var size = parseInt(THIS.brushSize)+1;
		let color =  "rgb("+THIS.brushColor.r+","+THIS.brushColor.g+","+THIS.brushColor.b+")";
			
		// stamping the circle each pixel
		THIS.draftCTX.fillStyle = color;
		for(let i = 0; i < stroke.length-1; i++){
			if(gapCheck()){
				THIS.draftCTX.beginPath();
				THIS.draftCTX.arc(Math.floor(stroke[i].x),Math.floor(stroke[i].y), size/2, 0, 2 * Math.PI);
				THIS.draftCTX.fill(); 
			}
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
		for(let i = ((size-1)/2); i > -1; i-=2){
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
			if(gapCheck()){
				THIS.draftCTX.drawImage(brushTip,Math.floor(stroke[i].x-size/2),Math.floor(stroke[i].y-size/2));
			}
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
	
	function LassoTool(stroke){
		console.log("todo");
	}
	
	function LineTool(x0,y0,x1,y1){
		let stroke = BresenhamLineAlgorithm(x0, y0, x1, y1);
		
		var size = parseInt(THIS.brushSize)+1;
		let color =  "rgb("+THIS.brushColor.r+","+THIS.brushColor.g+","+THIS.brushColor.b+")";
			
		
		// stamping the circle each pixel
		
		THIS.draftCTX.clearRect(0,0,THIS.canvasWidth, THIS.canvasHeight);
		gapCounter = 0;
		for(let i = 0; i < stroke.length-1; i++){
			if(gapCheck()){
				THIS.draftCTX.beginPath();
				THIS.draftCTX.arc(stroke[i].x, stroke[i].y, size/2, 0, 2 * Math.PI);
				THIS.draftCTX.fill(); 
			}
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
	
	//
	// Drawing ----------------------------------------------------------------------------------------------------------------
	//
	
	this.isDown = false;
	var cacheCanvas = document.createElement("canvas");
	var cacheCanvasCTX = cacheCanvas.getContext("2d");
	var prevXY = 0;
	var pointXY = 0;
	var gap = THIS.brushSize*0.05;
	var gapCounter = 0;
	var startCord = {x:"toset", y:"toset"}
	
	var gapCheck = function(){
		return gapCounter++ % Math.ceil(gap) == 0 ;
	}
	
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
			
			if(points.length > 1000) {return []}
		}
		if(points.length == 1) {points.push(points[0])}
		return points;
	}

	this.DrawLine = function(x0, y0, x1, y1) {
		// generating path
		let stroke = BresenhamLineAlgorithm(x0, y0, x1, y1);
		switch(THIS.tool){
			case "brush": BrushTool(stroke); break;
			case "pixel": PixelTool(stroke); break;
			case "airbrush": AirbrushTool(stroke); break;
			case "bucket": BucketTool(x1,y1); break;
			case "colorpicker": ColorPickerTool(stroke); break;
			case "lasso": LassoTool(stroke); break;
			case "line": LineTool(startCord.x, startCord.y, x1, y1); break;
		}
	}
	
	this.draft.onmousemove = function(e){
		if(THIS.panning) {return}
		gap = THIS.brushSize*0.05
		if (!THIS.isDown) return;
		pointXY = getXY(e);
		THIS.DrawLine(prevXY.x, prevXY.y, pointXY.x, pointXY.y); 									// Draw the Line from prev to current
		prevXY = pointXY;                                
	};
	this.draft.onmousedown = function(e){
		if(THIS.layers[THIS.currentLayer].canvas.disabled) {return}
		if(THIS.panning) {return}
		THIS.isDown = true; 
		THIS.draftCTX.clearRect(0, 0, THIS.canvasWidth, THIS.canvasHeight);  
		cacheCanvas.width = THIS.canvasWidth; cacheCanvas.height = THIS.canvasHeight;
		cacheCanvasCTX.drawImage(THIS.layers[THIS.currentLayer].canvas, 0, 0);   		
		prevXY = getXY(e);	
		pointXY = getXY(e);
		startCord = pointXY;
		THIS.DrawLine(prevXY.x, prevXY.y, pointXY.x, pointXY.y);     								// draw at first touch
		prevXY = pointXY;  	
	};
	this.draft.onmouseup = function(e){
		if (!THIS.isDown) return;
		THIS.UpdateHistory(THIS.layers[THIS.currentLayer].canvas.id, THIS.layers[THIS.currentLayer].getImageData(0,0,THIS.canvasWidth, THIS.canvasHeight), [], "stroke");
		THIS.isDown = false;  
		LastLine(e);
	};
	this.draft.onmouseleave = function(e){
		if (!THIS.isDown) return;
		THIS.UpdateHistory(THIS.layers[THIS.currentLayer].canvas.id, THIS.layers[THIS.currentLayer].getImageData(0,0,THIS.canvasWidth, THIS.canvasHeight), [], "stroke");
		THIS.isDown = false;         
		LastLine(e);
	};
	
	function LastLine(e){
		gapCounter = 0;
		pointXY = getXY(e);
		if(prevXY.x == pointXY.x && prevXY.y == pointXY.y) {return;}
		THIS.DrawLine(prevXY.x, prevXY.y, pointXY.x, pointXY.y);     
		prevXY = pointXY;  	
		THIS.draftCTX.clearRect(0, 0, THIS.canvasWidth, THIS.canvasHeight);  
		cacheCanvasCTX.clearRect(0, 0, THIS.canvasWidth, THIS.canvasHeight); 
	}

	function getXY(e) {
		var r = THIS.draft.getBoundingClientRect();
		if(!THIS.reversed) {
			return {x: Math.round(e.clientX - r.left), y: Math.round(e.clientY - r.top)}
		} else {
			return {x: Math.round(r.width - (e.clientX - r.left)), y: Math.round(e.clientY - r.top)}
		}
	}
	
	//
	// Cursor ----------------------------------------------------------------------------------------------------------------
	//
	
	var cursorSize = document.createElement("canvas");
	var cursorSizeCTX = cursorSize.getContext("2d");
	var prevCursorPos = {x:"toset", y:"toset"}
	
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
		
		THIS.cursorCTX.beginPath();
		THIS.cursorCTX.lineWidth = 1;
		if(!e) { THIS.cursorCTX.arc(Math.floor(prevCursorPos.x- r.left),Math.floor(prevCursorPos.y- r.top), THIS.brushSize/2, 0, 2 * Math.PI); }
		else { 
			prevCursorPos = {x: e.clientX, y: e.clientY}
			THIS.cursorCTX.arc(Math.floor(e.clientX- r.left),Math.floor(e.clientY- r.top), THIS.brushSize/2, 0, 2 * Math.PI); 
		}
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
			THIS.Setup(size.w, size.h, begin.x + window.scrollX, begin.y + window.scrollY, BGColor);
			sizeSetup.remove();
		});
	}
	
	//
	// Keybind Event ----------------------------------------------------------------------------------------------------------------
	//
	
	function currentBrushSizePreset(){
		for(let i = 0; i < THIS.brushSizePresets.length-1; i++){
			if(THIS.brushSizePresets[i] >= parseInt(THIS.brushSize)) {return i}
		}
		return THIS.brushSizePresets.length-2;
	}
	
	function BlurFocus(e){
		let x = document.querySelectorAll('.OekakiWidgetCapsula');
		for(let i = 0; i < x.length; i++){
			x[i].containerOf.focused = false;
			//x[i].querySelectorAll(".OekakiWidgetCapsula #ToolBox, .OekakiWidgetCapsula #EasterEgg, .OekakiWidgetCapsula #Handle").forEach(a => a.style.opacity = "0")
		}
		try {
		e.target.closest('.OekakiWidgetCapsula').containerOf.focused = true; 
		//e.target.closest('.OekakiWidgetCapsula').querySelectorAll(".OekakiWidgetCapsula #ToolBox, .OekakiWidgetCapsula #EasterEgg, .OekakiWidgetCapsula #Handle").forEach(a => a.style.opacity = "1")
		} catch(e) {}
	}
	
	
	function Keydown(e){
		//console.log(e.keyCode);
		switch(e.keyCode){
			case 32: THIS.panning = true; THIS.oekakiWidgetCapsula.style.cursor = "grab"; break; // e
		}
	}
	
	function Keyup(e){
		//console.log(e.keyCode);
		switch(e.keyCode){
			case 32: THIS.panning = false; THIS.oekakiWidgetCapsula.style.cursor = ""; break; // e
		}
	}
	
	var undoTimes = 0;
	function Keypress(e){
		if(!THIS.focused) {return;}
		//console.log(e.keyCode)
		switch(e.keyCode){
			case 101: THIS.oekakiWidgetCapsula.querySelector("#Eraser").click(); break; // e
			case 98: THIS.oekakiWidgetCapsula.querySelector("#Normal").click(); break; // b
			case 119: THIS.oekakiWidgetCapsula.querySelector("#toggleTools").click(); break; // w
			case 97: if(THIS.brushSize == 1) {break;} THIS.SetBrushSize(THIS.brushSizePresets[currentBrushSizePreset()-1]); DrawCursour(); break; //a
			case 100: THIS.SetBrushSize(THIS.brushSizePresets[currentBrushSizePreset()+1]); DrawCursour(); break; // d
			case 115: if(THIS.oekakiWidgetCapsula.querySelector("#Normal").checked) { THIS.oekakiWidgetCapsula.querySelector("#Eraser").click() } else { THIS.oekakiWidgetCapsula.querySelector("#Normal").click() }; break; // s
			case 120: if(THIS.oekakiWidgetCapsula.querySelector("#Normal").checked) { THIS.oekakiWidgetCapsula.querySelector("#Eraser").click() } else { THIS.oekakiWidgetCapsula.querySelector("#Normal").click() }; break; // x
			case 114: THIS.ReverseView(); break;// r
			case 113: THIS.oekakiWidgetCapsula.querySelector("#Lasso").click(); break; // r
			case 122: if(THIS.history.length-undoTimes <= 2) {break;} THIS.Undo("undo",++undoTimes);  break; // z (if undo, revert to the previous history, thats why ++ before)
			case 121: if(undoTimes == 0) {break;} THIS.Redo("redo",undoTimes--);  break; // y if redo, revert to the current history
		}
	}
	
}

var Oekaki = new OekakiWidget();
//Oekaki.Setup()
Oekaki.HtmlSnippetTool()