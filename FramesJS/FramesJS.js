// made by RIPY @xRIPY

function  FramesJS(HTMLElement) {

let selfReference = this;
this.HTMLElement = HTMLElement;
this.controllerIntervalId;
this.controller;
this.aliveCheckIntervalId;
this.frameDisplayIntervalId;
this.frameDisplayIntervalId;
this.currentFrameDisplay;
this.totalFramesDisplay;
this.fps = 24;                   	//used for video
this.frameList = []; 			 	//used for gif
this.ctxGifEmulator; 			 	//used for gif
this.gifEmulatorIntervalId = -1; 	//used for gif
this.isPaused = false; 				//used for gif
this.isEmulatorPreparing = false; 	//used for gif
this.isEmulatorReady = false;		//used for gif
this.currentFrame;					//used for video/gif
this.totalFrames; 					//used for video/gif

this.FramesJS_OverlaySystem = function(identifier,coverAll,classNameId,innerHTML,customCSS,borderOffsetPX = 0){
	
	let elementList = [];
	if(typeof identifier === 'string' || identifier instanceof String) {
		let elements = document.querySelectorAll(identifier);
		if (elements.length == 0) {return '[no element found]';}
		elements.forEach(function(element) {elementList.push(element)});
	} else {
		elementList.push(identifier);
	}
	
	let overlay = document.createElement('div');
	overlay.className = classNameId;
	overlay.style = 'position: absolute; z-index:10000;';
	overlay.innerHTML = innerHTML;
	let overlayList = [];
	elementList.forEach(function(element) {let x = overlay.cloneNode(true); x.overlayOf = element; overlayList.push({element:element, overlay:x})});
	
	if(customCSS && !document.getElementById(classNameId)){
		let style = document.createElement('style');
		style.id = classNameId;
		style.innerHTML = customCSS;
		document.querySelector('head').prepend(style);
	}
	
	// delete hidden elements
	var x;
	for(let i = 0; i < overlayList.length; i++) {
		try { x = overlayList[i].element.getBoundingClientRect(); } catch(e) { overlayList.splice(i,1); i--; continue;}
		if(x.width == 0 || x.height == 0) { overlayList.splice(i,1); i--; continue; } 
	}
		
	// add to document overlays
	for(let i = 0; i < overlayList.length; i++) { document.querySelector('body').prepend(overlayList[i].overlay); }
	
	AdjustOverlay();
	let intervalId = setInterval(AdjustOverlay, 250);
	
	function AdjustOverlay(){
		var x; 
		for(let i = 0; i < overlayList.length; i++) {
			try { x = overlayList[i].element.getBoundingClientRect(); } catch(e) { overlayList.splice(i,1); i--; continue;}
			if(x.width == 0 || x.height == 0) { overlayList.splice(i,1); i--; continue; } 
			if(coverAll) { overlayList[i].overlay.style.width = x.width+'px'; overlayList[i].overlay.style.height = x.height+'px'; }
			overlayList[i].overlay.style.left = x.left+window.scrollX-borderOffsetPX+'px'; overlayList[i].overlay.style.top = x.top+window.scrollY-borderOffsetPX+'px';
		}
			
	}
	
	return {intervalId:intervalId, overlayList:overlayList};
}

this.SelectElementEvent = function(identifier) {
	this.Kill(true)
	console.log('[FramesJS] Select element event: Start');
	let intervalId = this.FramesJS_OverlaySystem(identifier,true,'FramesJS-SelectElementEvent','','.FramesJS-SelectElementEvent {transition:0.05s; border: 5px solid #f00; cursor:pointer} .FramesJS-SelectElementEvent:hover {transition:0.2s; border: 5px solid #0f0;}',5);
	if(intervalId == '[no element found]') {console.log('[FramesJS] Select element event: Failed'); return;} intervalId = intervalId.intervalId;
	elementList = document.querySelectorAll('.FramesJS-SelectElementEvent');
	elementList.forEach(function(element) { element.addEventListener('click', ElementSelected) });
	document.addEventListener('click', SelectElementCancel)
	
	function ElementSelected() {
		console.log('[FramesJS] Select element event: Success');
		selfReference.HTMLElement = this.overlayOf;
		clearInterval(intervalId);
		document.querySelectorAll('.FramesJS-SelectElementEvent').forEach(function(element) {element.remove();})
		document.removeEventListener('click', SelectElementCancel);
		try{ document.getElementById('FramesJS-SelectElementEvent').remove() } catch(e) {};
		
		selfReference.Start(true);
	}
	
	function SelectElementCancel(){
		if(event.target.className == 'FramesJS-SelectElementEvent') {return;}
		console.log('[FramesJS] Select element event: Cancel');
		clearInterval(intervalId);
		document.querySelectorAll('.FramesJS-SelectElementEvent').forEach(function(element) {element.remove();})
		document.removeEventListener('click', SelectElementCancel);
		try{ document.getElementById('FramesJS-SelectElementEvent').remove() } catch(e) {};
	}
}

this.Kill = function(removeController){
	if( this.HTMLElement && this.HTMLElement != 'Killed' ) { this.HTMLElement.style.visibility = 'visible'; }
	try { this.ctxGifEmulator.canvas.parentNode.remove(); } catch(e) {}
	this.isEmulatorPreparing = false; 
	this.isEmulatorReady = false;
	this.isPaused = false;
	clearInterval(this.controllerIntervalId);
	clearInterval(this.frameDisplayIntervalId);
	clearInterval(this.gifEmulatorIntervalId);
	clearInterval(this.aliveCheckIntervalId);
	try { this.controller.remove();} catch(e) {}
	this.frameList = [];
	this.HTMLElement = 'Killed';
}

this.Start = function(){
	this.aliveCheckIntervalId = setInterval(function() { if(selfReference.HTMLElement.getBoundingClientRect().width == 0) { selfReference.Kill(); } }, 250);
	switch(this.HTMLElement.nodeName){
		case 'VIDEO': this.VideoPath(); break;
		case 'IMG': this.ImagePath(); break;
		case 'IFRAME': this.IframePath(); break;
	}
}


//
// Common
//

this.OpenController = function(){ selfReference.controller.style.opacity = '1';  }
this.CloseController = function(){ selfReference.controller.style.opacity = '0';  }

this.OpenSource = function(){
	console.log('[FrameJS] source:\n' + this.HTMLElement.src);
	if(this.HTMLElement.src) {
		window.open(this.HTMLElement.src, 'source');
	} else {
		window.open(this.HTMLElement.querySelector('source').src, 'source');
	}
}

this.SeeTrough = function(){
	if (this.controller.style.filter == 'opacity(1)' || this.controller.style.filter == '') {  this.controller.style.filter = 'opacity(0.2)'; }
	else {this.controller.style.filter = 'opacity(1)'; }
}

this.Pin = function(){
	let x = document.getElementById('PinArea')
	if(!x) { 
		x = document.createElement('div');
		x.id = 'PinArea'; x.style.position = 'fixed'; 
		x.style.top = '100%'; x.style.left = '0%';
		x.style.height = 'fit-content';	x.style.width = 'fit-content';
		x.style.transform = 'translate(0%, -100%)';
		x.style.zIndex = '10002';
		document.querySelector('body').prepend(x);
	}
	if (this.controller.pinned == false || this.controller.pinned == undefined) { 
		this.controller.pinned = true;
		this.HTMLElement.removeEventListener('mouseenter', this.OpenController);
		this.HTMLElement.removeEventListener('mouseleave', this.CloseController);
		try { this.ctxGifEmulator.canvas.removeEventListener('mouseenter', this.OpenController);
		this.ctxGifEmulator.canvas.removeEventListener('mouseleave', this.CloseController); } catch(e) {}
		this.controller.removeEventListener('mouseenter', this.OpenController);
		this.controller.removeEventListener('mouseleave', this.CloseController);
		this.controller.style.position = 'static';
		this.controller.style.display = 'inline-block';
		this.controller.style.width = 'fit-content';
		document.getElementById('PinArea').prepend(this.controller);
	}
	else { 
		this.controller.pinned = false;
		this.HTMLElement.addEventListener('mouseenter', this.OpenController);
		this.HTMLElement.addEventListener('mouseleave', this.CloseController);
		try { this.ctxGifEmulator.canvas.addEventListener('mouseenter', this.OpenController);
		this.ctxGifEmulator.canvas.addEventListener('mouseleave', this.CloseController);  } catch(e) {}
		this.controller.addEventListener('mouseenter', this.OpenController);
		this.controller.addEventListener('mouseleave', this.CloseController);
		this.controller.style.position = 'absolute';
		this.controller.style.display = '';
		this.controller.style.width = '';
		document.querySelector('body').prepend(this.controller);
	}
}

//
// IFrame
//

this.IframePath = function() {
	let x = this.FramesJS_OverlaySystem(selfReference.HTMLElement,true,'FrameJS-iFrameRedirect','','.FrameJS-iFrameRedirect { transition:0.2s; background-color: rgba(0,0,0,0.8); color: white; }');
	x.overlayList[0].overlay.innerHTML = `
<div style='padding: 1ex'><button > X </button><br><span>iFrame detected:</span><br><span>Scripts cant reach inside iFrames, try opening the source and use the script there.</span><br><span>Because it's a link, be sure it's safe.</span><br><a target='_blank' href=${x.overlayList[0].element.src}>Source: ${x.overlayList[0].element.src.slice(0,75)}</a> </div>
`
	x.overlayList[0].overlay.querySelectorAll('button')[0].addEventListener('click',function() { clearInterval(x.intervalId); this.parentNode.parentNode.remove(); selfReference.Kill(); } );
}

//
// Video
//

this.VideoPath = function() {
	this.createDefaultVideoController()
	this.frameDisplayIntervalId = setInterval( function() { selfReference.currentFrameDisplay.innerHTML = selfReference.GetCurrentFrame();  selfReference.totalFramesDisplay.innerHTML = selfReference.GetTotalFrames(); }, 1);
}

this.createDefaultVideoController = function(){
	let x = this.FramesJS_OverlaySystem(this.HTMLElement,false,'FrameJS-DefaultVideoController','','.FrameJS-DefaultVideoController { transition:0.2s; background-color: rgba(0,0,0,0.5); color: white; transition: 0.2s; z-index:10001}');
	this.controller =  x.overlayList[0].overlay;
	this.controller.innerHTML = `
<div style='padding:1ex'>
<button>Kill</button>
<button>///</button>
<button>^</button>
<button>source</button><br>
<button><<<</button>
<button><<</button>
<button><</button>
<button>></button>
<button>>></button>
<button>>>></button><br>
<button>-1 sec</button>
<button>+1 sec</button> 
<button>play/pause</button> <br>
<input type='number' min='0' max='120' value='24' ></input> FPS<br>
go-to <input min='0' type='number'></input><br>
<input type='number' min='0' step='0.25' max='10' value='1' ></input> Speed<br>
<input type='checkbox'>loop?</button>
<input type='checkbox'>controls?</button><br>
<span class='DefaultCurrentFrameDisplay'></span> /  <span class='DefaultTotalFramesDisplay'></span>
</div>`
	this.controller.querySelectorAll('button')[0].addEventListener('click', function() { selfReference.Kill(); } );
	this.controller.querySelectorAll('button')[1].addEventListener('click', function() { selfReference.SeeTrough(); } );
	this.controller.querySelectorAll('button')[2].addEventListener('click', function() { selfReference.Pin(); } );
	this.controller.querySelectorAll('button')[3].addEventListener('click', function() { selfReference.OpenSource(); } );
	this.controller.querySelectorAll('button')[4].addEventListener('click', function() { selfReference.NudgeVideo(-3); } );
	this.controller.querySelectorAll('button')[5].addEventListener('click', function() { selfReference.NudgeVideo(-2); } );
	this.controller.querySelectorAll('button')[6].addEventListener('click', function() { selfReference.NudgeVideo(-1); } );
	this.controller.querySelectorAll('button')[7].addEventListener('click', function() { selfReference.NudgeVideo(1); } );
	this.controller.querySelectorAll('button')[8].addEventListener('click', function() { selfReference.NudgeVideo(2); } );
	this.controller.querySelectorAll('button')[9].addEventListener('click', function() { selfReference.NudgeVideo(3); } );
	this.controller.querySelectorAll('button')[10].addEventListener('click', function() { selfReference.Skip(-1); } );
	this.controller.querySelectorAll('button')[11].addEventListener('click', function() { selfReference.Skip(1); } );
	this.controller.querySelectorAll('button')[12].addEventListener('click', function() { selfReference.PlayPauseVideo(); } );
	this.controller.querySelectorAll('input')[0].addEventListener('change', function() { selfReference.ChangeFps(this); } );
	this.controller.querySelectorAll('input')[1].addEventListener('change', function() { selfReference.GoToFrameVideo(this); } );
	this.controller.querySelectorAll('input')[2].addEventListener('change', function() { selfReference.ChangeSpeed(this); } );
	this.controller.querySelectorAll('input')[3].addEventListener('change', function() { selfReference.Loop(this); } );
	this.controller.querySelectorAll('input')[4].addEventListener('change', function() { selfReference.ToggleControls(this); } );
	this.HTMLElement.addEventListener('mouseenter', selfReference.OpenController);
	this.HTMLElement.addEventListener('mouseleave', selfReference.CloseController);
	this.controller.addEventListener('mouseenter', selfReference.OpenController);
	this.controller.addEventListener('mouseleave', selfReference.CloseController);
	this.controllerIntervalId = x.intervalId;
	this.currentFrameDisplay = selfReference.controller.querySelector('.DefaultCurrentFrameDisplay'); 
	this.totalFramesDisplay = selfReference.controller.querySelector('.DefaultTotalFramesDisplay');
}

this.GetTotalFrames = function() { return this.currentFrame = Math.round(this.HTMLElement.duration * this.fps) }
this.GetCurrentFrame = function() { return this.totalFrames = Math.round(this.HTMLElement.currentTime * this.fps) }

this.NudgeVideo = function(ammountFrame){
		this.HTMLElement.pause();
		this.HTMLElement.currentTime += ammountFrame/this.fps;
}
this.Skip = function(seconds){
		this.HTMLElement.currentTime += this.HTMLElement.playbackRate*seconds;
}
this.GoToFrameVideo = function(frame){
	frame = Math.min(frame.value, this.GetTotalFrames());
	frame = Math.max(frame, 0);
	this.HTMLElement.currentTime = frame / this.fps
}
this.PlayPauseVideo = function(){
	if(!this.HTMLElement.paused) {this.HTMLElement.pause(); return;}
	this.HTMLElement.play();
}
this.ChangeFps = function(input){
	this.fps = input.value;
}
this.ChangeSpeed = function(input){
	if ( input.value <= 0 ) { this.HTMLElement.playbackRate = 0.1; return; }; this.HTMLElement.playbackRate = input.value;
}
this.Loop = function(input){
	if(this.HTMLElement.ended) {this.HTMLElement.play()}; this.HTMLElement.loop = input.checked;
}
this.ToggleControls = function(input){
	this.HTMLElement.controls = input.checked;
}

//
// Gif
//

this.ImagePath = function() {
	// first: check if its a gif.
	if(this.HTMLElement.src.split(';')[0] == 'data:image/gif') {setup(this.HTMLElement.src)}
	else {
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			const reader = new FileReader();
			reader.onload = (function(elem) { return function(e) { 
				if(e.target.result.split(';')[0] != 'data:image/gif') {
					let x = selfReference.FramesJS_OverlaySystem(selfReference.HTMLElement,true,'FrameJS-iFrameRedirect','','.FrameJS-iFrameRedirect { transition:0.2s; background-color: rgba(0,0,0,0.8); color: white; }');
					x.overlayList[0].overlay.innerHTML = `
<div style='padding: 1ex'><button> X </button><br><span>Not a gif: ${e.target.result.split(';')[0]}</span></div>
	`
				x.overlayList[0].overlay.querySelectorAll('button')[0].addEventListener('click',function() { clearInterval(x.intervalId); this.parentNode.parentNode.remove(); selfReference.Kill(); } );
					return; 
				}
			setup(e.target.result)
			}; })();
			reader.readAsDataURL(xhr.response);
		};
		xhr.onerror = function() {
			let x = selfReference.FramesJS_OverlaySystem(selfReference.HTMLElement,true,'FrameJS-iFrameRedirect','','.FrameJS-iFrameRedirect { transition:0.2s; background-color: rgba(0,0,0,0.8); color: white; }');
			x.overlayList[0].overlay.innerHTML = `
<div style='padding: 1ex'><button> X </button><br><span>Access to resource failed.</span><br><span>Try opening the source and use the script there.</span><br><a target='_blank' href='${x.overlayList[0].element.src}'>Source: ${x.overlayList[0].element.src.slice(0,75)+'...'}</a><br> </div>
`
		x.overlayList[0].overlay.querySelectorAll('button')[0].addEventListener('click',function() { clearInterval(x.intervalId); this.parentNode.parentNode.remove();  selfReference.Kill(); } );
		}
		xhr.open('GET', this.HTMLElement.src);
		xhr.responseType = 'blob';
		xhr.send();
	}
	
	// second: create a canvas, with width and height of the image. as overlay
	async function setup(dataUrl){
		selfReference.isEmulatorPreparing = true;
		let x = selfReference.FramesJS_OverlaySystem(selfReference.HTMLElement,true,'FrameJS-GifEmulator','<div style=\'position: absolute; background-color: rgba(0,0,0,0.5); width:100%; height:100%;\'><div style=\'padding:1ex; text-align: center; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%)\';><b>…Caching…</b><br><span>x / x</span></div></div><canvas style=\'width:100%; height:100%;\'></canvas>','.FrameJS-GifEmulator { transition:0.2s; background-color: rgba(0,0,0,0.0); color: white; } ');
		let c = x.overlayList[0].overlay.querySelector('canvas');
		selfReference.gifEmulatorIntervalId = x.intervalId;
		selfReference.ctxGifEmulator = c.getContext('2d');
		c.width = selfReference.HTMLElement.naturalWidth; c.height = selfReference.HTMLElement.naturalHeight;
		await sleep(0);
		
		const t0 = performance.now();
		
		// third : suffer, extract infos of each frame, meaning readng every block, saving in default the ones in the header, then a loop of:
		// read image data block, override infos if must, skip any useless extension block, LZW decompress the bits, draw the fuc*er, save it in selfReference.frameList using the canvas toDataUrl;
		dataURL = atob(dataUrl.split(',')[1]);
		let gifBytes = new Array(dataURL.length);
		for (let i = 0; i < dataURL.length; i++) { gifBytes[i] = dataURL.charCodeAt(i); } 
		let gifBlocks = GetGifBlocks(gifBytes); // separeted in [0] header -> [...] all frames -> [n-1] trailer
		selfReference.HTMLElement.style.visibility = 'hidden';
		x.overlayList[0].overlay.querySelector('span').innerHTML = 0 + ' / ' + (gifBlocks.length-3); // -3 because ignore header and trailer
		// now we have all blocks, time to gather infos,draw 'em, save 'em (in selfReference.frameList; to then start emulator
		
		for(let i = 1; i < gifBlocks.length-1; i++){
			if(!selfReference.isEmulatorPreparing) {return;}
			x.overlayList[0].overlay.querySelector('span').innerHTML = i-1 + ' / ' + (gifBlocks.length-3);
			await BuildFrame(gifBlocks, i, selfReference.ctxGifEmulator);
		}
		
		const t1 = performance.now();
		console.log(`[FramesJS] The Gif took ${t1 - t0} milliseconds to prepare.`);
		
		x.overlayList[0].overlay.querySelector('div').remove();
		StartEmulator()
		selfReference.createDefaultGifEmulatorController();
		selfReference.frameDisplayIntervalId = setInterval( function() { selfReference.currentFrameDisplay.innerHTML = selfReference.currentFrame;  selfReference.totalFramesDisplay.innerHTML = selfReference.frameList.length-1; }, 1);
	}
	
	async function StartEmulator(){
		selfReference.isEmulatorReady = true;
		selfReference.currentFrame = 0
		while(1){
			if(!selfReference.isEmulatorReady) {return;}
			selfReference.DrawCurrentFrame();
			if(!selfReference.isPaused) { await sleep(selfReference.frameList[selfReference.currentFrame].delay <= 1 ? 100 : selfReference.frameList[selfReference.currentFrame].delay*10); selfReference.currentFrame++; }
			else { await sleep(1); }
		}
	}
	
	async function BuildFrame(gifBlocks, frameNumber, ctx) {
		
		// all informations needed for emulating gif
		let frameData = {
			HTMLImageElement: document.createElement('img'),
			disposalMethod: 0,
			delay: 0,
		};
		
		// header infos
		let header = gifBlocks[0]
		let backgroundColorIndex = header[1][5];
		let colorTable = header[2];
		
		//let's trim useless infos. (and replace with local color table if needed)
		let frameBlock = gifBlocks[frameNumber]
		let frameBlock_GraphicControlExtension = 0;
		let frameBlock_ImageDescriptor = 0;
		let frameBlock_ImageData = 0;
		for(let i = 0; i < gifBlocks[frameNumber].length; i++) {
			if(frameBlock[i][0] == 44) {
				frameBlock_ImageDescriptor = frameBlock[i];  // image descriptor
				if(frameBlock_ImageDescriptor[9] >> 7) { colorTable = frameBlock[i+1]; i++ } // local color table
			} 
			else if(frameBlock[i][0] == 33 ) { 
				if(frameBlock[i][1] == 249) { frameBlock_GraphicControlExtension = frameBlock[i]; } // graphic control extension
				continue; // any other type of extension ( ignore )
			} 
			else { frameBlock_ImageData = frameBlock[i]; break} // image data
		}
		if(!frameBlock_GraphicControlExtension){ frameBlock_GraphicControlExtension = [33,249,4,0,0,0,0,0]; }
		
		// color table data
		let temp = [];
		for(let i = 0; i < colorTable.length; i+=3) { temp.push([colorTable[i],colorTable[i+1],colorTable[i+2]]); }
		colorTable = temp;
		
		// graphic control data
		frameData.delay = (frameBlock_GraphicControlExtension[4] + frameBlock_GraphicControlExtension[5]*256);
		let	transparentColorIndex = frameBlock_GraphicControlExtension[3] & 1 ? frameBlock_GraphicControlExtension[6] : -1;
		frameData.disposalMethod = frameBlock_GraphicControlExtension[3] >> 2 & 7 
		
		// Image descriptor data
		let imageLeft = frameBlock_ImageDescriptor[1] + frameBlock_ImageDescriptor[2]*256;
		let imageTop = frameBlock_ImageDescriptor[3] + frameBlock_ImageDescriptor[4]*256;
		let imageWidth = frameBlock_ImageDescriptor[5] + frameBlock_ImageDescriptor[6]*256;
		let imageHeight = frameBlock_ImageDescriptor[7] + frameBlock_ImageDescriptor[8]*256;
		let interlaceFlag = frameBlock_ImageDescriptor[9] >> 6 & 1;
		
		// turning image data into a bit stream
		var lzwMinCode = frameBlock_ImageData[0];
		var bitStream = ''
		let s = 1;
		for(let i = 1; i < frameBlock_ImageData.length; i++) {
			if(i!=s) { bitStream = ('000000000' +  frameBlock_ImageData[i].toString(2)).substr(-8) + bitStream }
			else{s += frameBlock_ImageData[i]+1; }
		}
		
		// LZW decode
		var CODE = 0;
		var PREV_CODE = 0;
		var K = 0;
		var INDEX_STREAM = [];
		var CODE_TABLE = [];
		var CODE_SIZE = lzwMinCode+1;
		
		function GetCode() {
			CODE = parseInt(bitStream.slice(0-CODE_SIZE),2)
			bitStream = bitStream.slice(0,0-CODE_SIZE);
		}
		
		// init CODE_TABLE
		for(let i = 0; i < 1<<lzwMinCode; i++){CODE_TABLE.push([i]);}
		CODE_TABLE.push(['clear code'],['end-of-information code'])
		// init
		GetCode(); GetCode(); 																// let CODE be the first code in the code stream (skip 4)
		INDEX_STREAM.push(...CODE_TABLE[CODE]); 											// output {CODE} to index stream
		while(1){
			PREV_CODE = CODE;
			GetCode();
			if(CODE_TABLE[CODE] == 'clear code') { 											// clear code
				CODE_SIZE = lzwMinCode+1;  													// reset code length
				CODE_TABLE = CODE_TABLE.splice(0,(1<<lzwMinCode)+2); 						// clear code table 
				GetCode();  																// we are simulating an init.
				INDEX_STREAM.push(...CODE_TABLE[CODE]);
				continue;
			}
			if(CODE_TABLE[CODE] == 'end-of-information code'){break;} 						// end of information code
			if(CODE_TABLE[CODE] != undefined) { 											// found
				INDEX_STREAM.push(...CODE_TABLE[CODE]); 									// output {CODE} to index stream
				K = CODE_TABLE[CODE][0]; 													// let K be the first index in {CODE}
			} else {																		// not found
				K = CODE_TABLE[PREV_CODE][0]; 												// let K be the first index in {CODE-1}
				INDEX_STREAM.push(...CODE_TABLE[PREV_CODE].concat(K)); 						// output {CODE-1}+K to index stream
			}
			CODE_TABLE.push(CODE_TABLE[PREV_CODE].concat(K)); 								// add {CODE-1}+K to code table
			if (CODE_TABLE.length == (1 << CODE_SIZE) && CODE_SIZE < 12) { CODE_SIZE++ }
		}
		
		// we now have an index stream!
		
		// fix interlace
		if(interlaceFlag) {
			INDEX_STREAM_ROWS = [];
			while(INDEX_STREAM.length != 0){
				INDEX_STREAM_ROWS.push(INDEX_STREAM.slice(0,imageWidth)); 
				INDEX_STREAM = INDEX_STREAM.slice(imageWidth);
			}
			//debugger
			let step = 0;
			// pass 1
			for(let i = 0; i < imageHeight; i+=8) { INDEX_STREAM[i] = INDEX_STREAM_ROWS[step++] }
			// pass 2
			for(let i = 4; i < imageHeight; i+=8) { INDEX_STREAM[i] = INDEX_STREAM_ROWS[step++] }
			// pass 3
			for(let i = 2; i < imageHeight; i+=4) { INDEX_STREAM[i] = INDEX_STREAM_ROWS[step++] }
			// pass 4
			for(let i = 1; i < imageHeight; i+=2) { INDEX_STREAM[i] = INDEX_STREAM_ROWS[step++] }
			INDEX_STREAM = [].concat(...INDEX_STREAM)
		}
		
		// pixel stream will aready be built in accordance to the interlace flag.
		let pixelStream = []; // [[r,g,b,a],[r,g,b,a],[r,g,b,a],...];
		
		try {
		// deal with trasparency
		if(transparentColorIndex == -1) {
			for(let i = 0; i < INDEX_STREAM.length; i++){
				pixelStream[i] = 'rgba('+colorTable[INDEX_STREAM[i]].join(',')+')';
			}
		} else {
			for(let i = 0; i < INDEX_STREAM.length; i++){
				pixelStream[i] = 'rgba('+colorTable[INDEX_STREAM[i]].join(',')+','+(transparentColorIndex == INDEX_STREAM[i] ? 0 : 1)+')';
			}
		}
		} catch(e) {console.log("[FramesJS] A frame was weird... Skip");  selfReference.frameList.push(selfReference.frameList.at(-1)); return};
		
		// draw it!
		let step = 0;
		for(let y = imageTop; y < imageTop + imageHeight; y++) {
			for(let x = imageLeft; x < imageLeft + imageWidth; x++) {
				ctx.fillStyle = pixelStream[step];
				ctx.fillRect( x, y, 1, 1 );
				step++;
			}
		}
		frameData.HTMLImageElement.src = ctx.canvas.toDataURL();
		
		// disposal method
		await sleep(0);
		// thank you! https://docstore.mik.ua/orelly/web2/wdesign/ch23_05.htm
		// 3 = 'This option restores to the state of the previous, [[[[[UNDISPOSED]]]]] frame. For example, if you have a static background that is set to Do Not Dispose, that image will reappear in the areas left by a replaced frame. docstore.mik.ua/orelly/web2/wdesign/ch23_05.htm'
		// 1 = dont clear canvas, 2 = clear canvas to background color (note if backgroundColorIndex == transparentColorIndex);
		if(frameData.disposalMethod == 2 ) {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
		} else if (frameData.disposalMethod == 3) {
			for(let i  =  selfReference.frameList.length-1; i >= 0; i--){
				if(selfReference.frameList[i].disposalMethod != 3 && selfReference.frameList[i].disposalMethod != 2) { ctx.drawImage(selfReference.frameList[i].HTMLImageElement, 0, 0); break }
			}
		}
		selfReference.frameList.push(frameData);
		
	}
	
	function GetGifBlocks(gifByteStream) {
		
		let blocks = [];
		let data = gifByteStream;
		let lastByte = 0;
		let block = [];
		let blockType = 0;
		let blockSize = 0;
		let tableSize = 0;
		
		// header, from 0 -> 5
		blockSize = 6;
		block.push(data.slice(lastByte,lastByte+blockSize));
		lastByte += blockSize;
		if(block[0].slice(0,3).join(',') != [ 71,73,70 ].join(',')) {throw '[Not a gif]'}
		// logical screen descriptor, from 6 -> 12
		blockSize = 7;
		block.push(data.slice(lastByte,lastByte+blockSize));
		lastByte += blockSize;
		// global color table
		tableSize = getColorTableBlockSize(data, 11);
		if (tableSize > 0) { block.push(data.slice(lastByte,lastByte+tableSize)); lastByte += tableSize;  } 
		// pushing header block
		blocks.push(block); 
		block = []; 
		try {
		while(1){
			blockType = getBlockType(data, lastByte);
			if(blockType == 'Image Data'){  
				// image data
				blockSize = getBlockSize(data, lastByte,1);
				block.push(data.slice(lastByte,lastByte+blockSize));
				lastByte += blockSize;
				// pushing imageDescriptor + imageData block + any
				blocks.push(block); 
				block = [];
			}
			else if(blockType == 'Image Descriptor'){ 
				// image descriptor
				blockSize = 10;
				block.push(data.slice(lastByte,lastByte+blockSize));
				lastByte += blockSize;
				// local color table
				tableSize = getColorTableBlockSize(data, lastByte)
				if(tableSize > 0){ block.push(data.slice(lastByte,lastByte+tableSize)); lastByte += tableSize;} 
			}
			else if( blockType.split(' ').at(-1) == 'Extension'){
				// Extension
				blockSize = getBlockSize(data, lastByte,2);
				block.push(data.slice(lastByte,lastByte+blockSize));
				lastByte += blockSize;
			}
			else if(blockType == 'Trailer'){ 
				// trailer
				blockSize = 1;
				block.push(data.slice(lastByte,lastByte+blockSize));
				lastByte += blockSize;
				// pushing header block
				blocks.push(block); 
				block = []; 
				break;
			}
		}
		} catch(e) { console.log(e); blocks.push[59] }
		
		return blocks;
		
		function getColorTableBlockSize(dataStream, startingByte) {
			// The global color table size is stored in byte 10, so put 11.
			// for local color tables its stored on the previous byte.
			let x = dataStream.slice(startingByte-1,startingByte);
			x = x[0].toString(2).padStart((255).toString(2).length, '0')
			// if the Global color table flag is false = zero colors.
			if (x[0] == '0') {return 0};
			// getting the bits about 'Size of global color table' and convert to decimal
			x = x[5] + x[6] + x[7];
			// convert to decimal (from a string 0b)
			x = parseInt(x, 2)
			// Color table length is 2^(x+1)*3,
			x = Math.pow(2,x+1)*3;
			return x;
		}
		
		
		function getBlockSize(dataStream, startingByte,offset) {
			// Straight to data, we want length ['21','XX','Size'], Size its the byte to check, if its an extension. (then offset = 2)
			// Straight to data, we want length ['XX','Size'], Size its the byte to check, if its an image data. (then offset = 1)
			let i = startingByte+offset; 
			let x = 0 // subBlock size
			do {
				x = dataStream.slice(i,i+1)[0];
				i += x+1;
				if(x == undefined) { throw '[FramesJS] found a broken block'; }
			}while(x != 0); // 0 means we hit a ['00'] byte, a terminator byte
			return i-startingByte; // the difference between where we started and where we found the '00'
		}

		
		function getBlockType(dataStream, startingByte){
			let x = dataStream.slice(startingByte,startingByte+2);
			if (x[0] == 44) { return 'Image Descriptor'; }
			if (x[0] == 59) { return 'Trailer'; }
			if (x[0] == 33) {  
				if (x[1] == 249) { return 'Graphics Control Extension'; }
				if (x[1] == 1) { return 'Plain Text Extension'; }
				if (x[1] == 255) { return 'Application Extension'; }
				if (x[1] == 254) { return 'Comment Extension'; }
			}
			return 'Image Data';
		}
	}
	
	function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

}	

this.DrawCurrentFrame = function() {
	try {
	if(this.currentFrame >= this.frameList.length )  { this.currentFrame = 0;  } // loop back
	if(this.currentFrame < 0) { this.currentFrame = this.frameList.length-1; } // loop backward
	let img = this.frameList[this.currentFrame].HTMLImageElement;
	this.ctxGifEmulator.clearRect( 0, 0, this.ctxGifEmulator.canvas.width, this.ctxGifEmulator.canvas.height );
	this.ctxGifEmulator.drawImage(img, 0, 0);
	} catch (e) {};
}

this.createDefaultGifEmulatorController = function(){
	let x = this.FramesJS_OverlaySystem(this.ctxGifEmulator.canvas,false,'FrameJS-DefaultGifEmulatorController','','.FrameJS-DefaultGifEmulatorController { transition:0.2s; background-color: rgba(0,0,0,0.5); color: white; transition: 0.2s; z-index:10001 !important}');
	this.controller =  x.overlayList[0].overlay;
	this.controller.innerHTML = `
	<div style='padding:1ex'>
		<button>Kill</button>
		<button>///</button>
		<button>^</button>
		<button>source</button>
		<button>Pick</button><br>
		<button>Play/Pause</button>
		<button><</button>
		<button>></button> <br>
		go-to <input min='0' type='number' ></input><br>
	<span class='DefaultCurrentFrameDisplay'></span> /  <span class='DefaultTotalFramesDisplay'></span>
	</div>`
	this.controller.querySelectorAll('button')[0].addEventListener('click', function() { selfReference.Kill(); } );
	this.controller.querySelectorAll('button')[1].addEventListener('click', function() { selfReference.SeeTrough(); } );
	this.controller.querySelectorAll('button')[2].addEventListener('click', function() { selfReference.Pin(); } );
	this.controller.querySelectorAll('button')[3].addEventListener('click', function() { selfReference.OpenSource(); } );
	this.controller.querySelectorAll('button')[4].addEventListener('click', function() { selfReference.ExtractFrameGif(); } );
	this.controller.querySelectorAll('button')[5].addEventListener('click', function() { selfReference.PlayPauseGif(); } );
	this.controller.querySelectorAll('button')[6].addEventListener('click', function() { selfReference.NudgeGif(-1); selfReference.DrawCurrentFrame(); } );
	this.controller.querySelectorAll('button')[7].addEventListener('click', function() { selfReference.NudgeGif(1); selfReference.DrawCurrentFrame();  } );
	this.controller.querySelectorAll('input')[0].addEventListener('change', function() { selfReference.GoToFrameGif(this); selfReference.DrawCurrentFrame();  } );
	this.ctxGifEmulator.canvas.addEventListener('mouseenter', selfReference.OpenController);
	this.ctxGifEmulator.canvas.addEventListener('mouseleave', selfReference.CloseController);
	this.controller.addEventListener('mouseenter', selfReference.OpenController);
	this.controller.addEventListener('mouseleave', selfReference.CloseController);
	this.controllerIntervalId = x.intervalId;
	this.currentFrameDisplay = selfReference.controller.querySelector('.DefaultCurrentFrameDisplay'); 
	this.totalFramesDisplay = selfReference.controller.querySelector('.DefaultTotalFramesDisplay');
}

this.PlayPauseGif = function() {
	this.isPaused = !this.isPaused;
}
this.NudgeGif = function(ammount) {
	this.currentFrame += ammount;
}
this.GoToFrameGif = function(input) {
	this.currentFrame = parseInt(input.value);
}
this.ExtractFrameGif = function(input) { 
	let a = document.createElement('a')
	a.download = this.currentFrame+'';
	a.href = this.frameList[this.currentFrame].HTMLImageElement.src+'';
	document.querySelector('body').appendChild(a); a.click(); document.querySelector('body').removeChild(a);
}
	

}

var FrameJS = new FramesJS();
FrameJS.SelectElementEvent('video, img, iframe');