/*
@license
Copyright 2022 Taiwan (ChungYi Fu)
SPDX-License-Identifier: Apache-2.0

@fileoverview SpBlockly V2
@author https://www.facebook.com/francefu/
@Update 24/9/2024 00:00 (Taiwan Standard Time)
*/


var arduino_version = "1.8.19";
var tools_version = "1.4.1";

//var arduino_path = "package.nw\\arduino-" + arduino_version + "\\";
//var arduino_execute = "package.nw\\arduino-" + arduino_version + "\\arduino.exe";
//var arduino_builder = "package.nw\\arduino-" + arduino_version + "\\arduino-builder.exe";
//var arduino_dump = "-dump-prefs -logger=machine -hardware C:\SpBlocklyC\package.nw\arduino-1.8.19\hardware -hardware C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\tools-builder -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\hardware\tools\avr -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages -built-in-libraries C:\SpBlocklyC\package.nw\arduino-1.8.19\libraries -libraries C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\sketchbook\libraries -fqbn=ideasHatch:AmebaPro2:Ameba_HUB-8735_bit:EraseFlash=Disable,AutoUploadMode=Disable,StdLibInit=Enable,UploadSpeed=Speed2M,LoadNNModelSource=flash -ide-version=10819 -build-path C:\Users\CHARLE~1\AppData\Local\Temp\arduino_build_540682 -warnings=null -build-cache C:\Users\CHARLE~1\AppData\Local\Temp\arduino_cache_420758 -prefs=build.warn_data_percentage=75 -prefs=runtime.tools.ameba_pro2_toolchain.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_toolchain\1.0.1-p1 -prefs=runtime.tools.ameba_pro2_toolchain-1.0.1-p1.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_toolchain\1.0.1-p1 -prefs=runtime.tools.ameba_pro2_tools.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_tools\1.3.5 -prefs=runtime.tools.ameba_pro2_tools-1.3.5.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_tools\1.3.5 -verbose C:\Users\CHARLE~1\AppData\Local\Temp\untitled2072245628.tmp\sketch_nov04a\sketch_nov04a.ino";
//var arduino_compiler = "-dump-prefs -logger=machine -hardware C:\SpBlocklyC\package.nw\arduino-1.8.19\hardware -hardware C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\tools-builder -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\hardware\tools\avr -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages -built-in-libraries C:\SpBlocklyC\package.nw\arduino-1.8.19\libraries -libraries C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\sketchbook\libraries -fqbn=ideasHatch:AmebaPro2:Ameba_HUB-8735_bit:EraseFlash=Disable,AutoUploadMode=Disable,StdLibInit=Enable,UploadSpeed=Speed2M,LoadNNModelSource=flash -ide-version=10819 -build-path C:\Users\CHARLE~1\AppData\Local\Temp\arduino_build_540682 -warnings=null -build-cache C:\Users\CHARLE~1\AppData\Local\Temp\arduino_cache_420758 -prefs=build.warn_data_percentage=75 -prefs=runtime.tools.ameba_pro2_toolchain.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_toolchain\1.0.1-p1 -prefs=runtime.tools.ameba_pro2_toolchain-1.0.1-p1.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_toolchain\1.0.1-p1 -prefs=runtime.tools.ameba_pro2_tools.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_tools\1.3.5 -prefs=runtime.tools.ameba_pro2_tools-1.3.5.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_tools\1.3.5 -verbose C:\Users\CHARLE~1\AppData\Local\Temp\untitled2072245628.tmp\sketch_nov04a\sketch_nov04a.ino";
//var arduino_download_file = "package.nw\\arduino-" + arduino_version + "\\portable\\packages\\ideasHatch\\tools\\ameba_pro2_tools\\1.3.5\\flash_ntz.bin";
var arduino_path = "arduino-" + arduino_version + "\\";
var arduino_execute = "arduino-" + arduino_version + "\\arduino.exe";
var arduino_builder = "arduino-" + arduino_version + "\\arduino-builder.exe";
//var arduino_dump = "-dump-prefs -logger=machine -hardware C:\SpBlocklyC\package.nw\arduino-1.8.19\hardware -hardware C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\tools-builder -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\hardware\tools\avr -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages -built-in-libraries C:\SpBlocklyC\package.nw\arduino-1.8.19\libraries -libraries C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\sketchbook\libraries -fqbn=ideasHatch:AmebaPro2:Ameba_HUB-8735_bit:EraseFlash=Disable,AutoUploadMode=Disable,StdLibInit=Enable,UploadSpeed=Speed2M,LoadNNModelSource=flash -ide-version=10819 -build-path C:\Users\CHARLE~1\AppData\Local\Temp\arduino_build_540682 -warnings=null -build-cache C:\Users\CHARLE~1\AppData\Local\Temp\arduino_cache_420758 -prefs=build.warn_data_percentage=75 -prefs=runtime.tools.ameba_pro2_toolchain.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_toolchain\1.0.1-p1 -prefs=runtime.tools.ameba_pro2_toolchain-1.0.1-p1.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_toolchain\1.0.1-p1 -prefs=runtime.tools.ameba_pro2_tools.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_tools\1.3.5 -prefs=runtime.tools.ameba_pro2_tools-1.3.5.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_tools\1.3.5 -verbose C:\Users\CHARLE~1\AppData\Local\Temp\untitled2072245628.tmp\sketch_nov04a\sketch_nov04a.ino";
//var arduino_compiler = "-dump-prefs -logger=machine -hardware C:\SpBlocklyC\package.nw\arduino-1.8.19\hardware -hardware C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\tools-builder -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\hardware\tools\avr -tools C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages -built-in-libraries C:\SpBlocklyC\package.nw\arduino-1.8.19\libraries -libraries C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\sketchbook\libraries -fqbn=ideasHatch:AmebaPro2:Ameba_HUB-8735_bit:EraseFlash=Disable,AutoUploadMode=Disable,StdLibInit=Enable,UploadSpeed=Speed2M,LoadNNModelSource=flash -ide-version=10819 -build-path C:\Users\CHARLE~1\AppData\Local\Temp\arduino_build_540682 -warnings=null -build-cache C:\Users\CHARLE~1\AppData\Local\Temp\arduino_cache_420758 -prefs=build.warn_data_percentage=75 -prefs=runtime.tools.ameba_pro2_toolchain.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_toolchain\1.0.1-p1 -prefs=runtime.tools.ameba_pro2_toolchain-1.0.1-p1.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_toolchain\1.0.1-p1 -prefs=runtime.tools.ameba_pro2_tools.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_tools\1.3.5 -prefs=runtime.tools.ameba_pro2_tools-1.3.5.path=C:\SpBlocklyC\package.nw\arduino-1.8.19\portable\packages\ideasHatch\tools\ameba_pro2_tools\1.3.5 -verbose C:\Users\CHARLE~1\AppData\Local\Temp\untitled2072245628.tmp\sketch_nov04a\sketch_nov04a.ino";
var arduino_download_file = "arduino-" + arduino_version + "\\portable\\packages\\ideasHatch\\tools\\ameba_pro2_tools\\" + tools_version + "\\flash_ntz.bin";
var lang = "zh-hant";  //en , zh-hant

var customCategory = [];
var customCategoryInsertAfter = "category_sep_main";
var languageList = "msg/language.js";
var xmlValue = "";
var topCheck = true;
var showCode = true;
var myTimer;
var myTimer1;

/*
var scripts= document.getElementsByTagName('script');
var scriptPath= scripts[0].src.split('?')[0];
var sysPath = scriptPath.substr(scriptPath.indexOf("/",scriptPath.indexOf("//")+2)+1, scriptPath.lastIndexOf("/js")-(scriptPath.indexOf("/",20))).replace(/\//g,"\\\\");
*/

document.addEventListener('DOMContentLoaded', function() {
	
	//載入開發板選單
	$.ajax({
		type: "GET" ,
		//url: "board/board.xml" ,
		url: "https://h-owar-d.github.io/SpBlocklyC_v3/package.nw/board/board.xml" ,
		dataType: "xml",
		timeout: 3000,
		async: false,
		success: function(xml, textStatus) {
			if (xml.firstChild) {
				var Nodes = xml.firstChild.childNodes;
				if (Nodes.length>0) {
					for (var i=0;i<Nodes.length;i++){
						if (Nodes[i].nodeName!="#text") {
							document.getElementById('board-selector').add(new Option(Nodes[i].getAttribute("name"), Nodes[i].getAttribute("upload")));
						}							
					}
				}
				else
					document.getElementById('board-selector').add(new Option("BOARD?", ""));
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
	
	document.getElementById('board-selector').onclick = function () {
		var val = "";
		if (this.selectedIndex!=-1) val = this.options[this.selectedIndex].value;
		//chrome.storage.local.set({'BOARD': val}, function() {
		localStorage.getItem({'BOARD': val}, function() {
			console.log('store board setting to ' + val);
		});
		if (Blockly.getMainWorkspace()) {
			var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
			Blockly.getMainWorkspace().clear();
			Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
		}	
	}
	
	//chrome.storage.local.get(['BOARD'], function(item) {
	localStorage.getItem(['BOARD'], function(item) {
	  if(item.BOARD) {
		//console.log("reload board setting to " + item.BOARD);
		document.getElementById('board-selector').value = item.BOARD;
	  }
	});	
/*	
	//載入序列埠選單
	chrome.serial.getDevices(function(ports) {
		var com = document.getElementById('com-selector');
		var i = 0;
		for (let port of ports) {
			if (port.vendorId) {
				i++;
				com.add(new Option(port.path, port.path));
			}			
		}
		if (i==0)
			com.add(new Option("COM?", ""));
		else {
			//chrome.storage.local.get(['COM'], function(item) {
			localStorage.getItem(['COM'], function(item) {
			  if(item.COM) {
				console.log("reload com setting to " + item.COM);
				com.value = item.COM;
			  }
			});	
		}
	});
*/
	document.getElementById('com-selector').onfocus = function () {
		detectCOM();
	}
	
	document.getElementById('com-selector').onclick = function () {
		var val = "";
		if (this.selectedIndex!=-1) 
			val = this.options[this.selectedIndex].value;
		//chrome.storage.local.set({'COM': val}, function() {
		localStorage.getItem({'COM': val}, function() {
			console.log('store com setting to ' + val);
		});
	}
	
	function detectCOM() {
		chrome.serial.getDevices(function(ports) {
			var com = document.getElementById('com-selector');
			var val = "";
			if (com.selectedIndex!=-1) val = com.options[com.selectedIndex].value;
			var i;
			for (i=com.options.length-1;i>=0;i--) {
				com.remove(i);
			}
			var j = 0;
			for (let port of ports) {
				if (port.vendorId) {
					j++;
					com.add(new Option(port.path, port.path));
				}
			}
			if (j==0)
				com.add(new Option("COM?", ""));
			else if (j==1)
				com.selectedIndex = 0;			
			else
				com.value = val;
		});
	}
	
	setInterval(function(){ detectCOM(); }, 5000);
	
	//載入語言選單
	//chrome.storage.local.get(['LANG'], function(item) {
/*	localStorage.getItem(['LANG'], function(item) {
		lang = item.LANG?item.LANG:"zh-hant";
		
		if (typeof language != "undefined") {
			for (var i=0;i<language.length;i++) {
				if (language[i][0]==lang)
					addScript(language[i][1]);
			}
			addScript(languageList);
			var select = document.getElementById('lang-selector');
			for (var i=0;i<language.length;i++) {
				select.add(new Option(language[i][2], language[i][0]));
			}	
			document.getElementById('lang-selector').value = lang;
		}
	});	
*/
	var lang = localStorage.getItem('LANG') || "zh-hant";
	if (typeof language != "undefined") {
    for (var i = 0; i < language.length; i++) {
        if (language[i][0] == lang) {
            addScript(language[i][1]);
        }
    }
    addScript(languageList);

    var select = document.getElementById('lang-selector');
    for (var i = 0; i < language.length; i++) {
        select.add(new Option(language[i][2], language[i][0]));
    }

    document.getElementById('lang-selector').value = lang;
	}
			
	
	
	//載入工具箱目錄
	$.ajax({
		type: "GET" ,
		//url: "category/category.xml" ,
		url: "https://h-owar-d.github.io/SpBlocklyC_v3/package.nw/category/category.xml" ,
		dataType: "xml",
		timeout: 3000,
		async: false,
		success: function(xml, textStatus) {
			if (xml.firstChild) {
				var toolbox_ = document.getElementById('toolbox');
				var Nodes = xml.firstChild.childNodes;
				for (var i=0;i<Nodes.length;i++){
					if (Nodes[i].nodeName!="#text") {
						toolbox_.appendChild(Nodes[i]);
					}							
				}
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR.statusText);
		}
	});	
	
	function decode(buf, encoding = cmd_encoding) {
	  return iconv.decode(buf, encoding);
	}
	
	var tmpInoDir = 'sketches/tmp/';
	var tmpInoFilename = 'tmp.ino';
	var tmpBuildDir = 'build/tmp/';
	var fs = require('fs-extra');
	
	function handleUploadButton() {
  closeSerialMonitor().then(function() {
    fs.ensureDirSync(tmpBuildDir);
    writeInoFile(tmpInoDir, tmpInoFilename);
    startUploading(tmpInoDir + tmpInoFilename);
  });
}

	function writeInoFile(dir, filename) {
  fs.ensureDirSync(dir);
  let code = Blockly.Arduino.workspaceToCode();
  fs.writeFileSync(dir + filename, code);
}

	let compilerHasError = false;

	function waitForFile(filePath, callback) {
	  const maxWait = 8000; // 最多等待 8 秒
	  const intervalTime = 500;
	  let waited = 0;
	
	  const interval = setInterval(() => {
	  	console.log("Checking file...", waited); // ← 觀察是否持續執行
	    if (compilerHasError) {
	    	console.log("Compiler error detected, aborting wait.");
	      clearInterval(interval);
	      callback(false); // 中斷，當作沒成功
	      return;
	    }
	
	    if (fs.existsSync(filePath)) {
	    	console.log("File exists! Finish upload.");
	      clearInterval(interval);
	      callback(true);
	    } else {
	      waited += intervalTime;
	      if (waited >= maxWait) {
	      	console.log("Timeout waiting for file.");
	        clearInterval(interval);
	        callback(false); // Timeout
	      }
	    }
	  }, intervalTime);
	}


	var dialogUploadOptions = null;
	
let dotCount = 0;
let spinnerInterval = null;
let spinnerTextBase = "Compiler";
const loadingSteps = [".  ", ".. ", "..."];

function showSpinner(text = "Compiler", showDots = false) {
	spinnerTextBase = text;

  const overlay = document.getElementById('dialog-spinner-overlay');
  const spinner = document.getElementById("dialog-spinner");
  const spinnerText = document.getElementById('spinner-text');
  //const spinner = document.getElementById('dialog-spinner');
  //if (text) spinnerText.innerText = text;
  	
	spinner.classList.remove("dialog-spinner");
  void spinner.offsetWidth; // 強制 reflow
  spinner.classList.add("dialog-spinner");
	
	spinner.style.animationPlayState = "running"; // <-- 這一行是關鍵！
  overlay.style.display = "flex";
  //spinner.style.animationPlayState = "running";
  if (spinnerInterval !== null) {
    clearInterval(spinnerInterval);
    spinnerInterval = null;
  }
  
	if (showDots) {
    const steps = [spinnerTextBase + ".  ", spinnerTextBase + ".. ", spinnerTextBase + "..."];
    let index = 0;
    spinnerText.textContent = steps[0];

    spinnerInterval = setInterval(() => {
      spinnerText.textContent = steps[index];
      index = (index + 1) % steps.length;
    }, 500);
  } else {
    spinnerText.textContent = spinnerTextBase;
  }
}

function hideSpinner(delayMs = 1500) {
  const overlay = document.getElementById('dialog-spinner-overlay');
  const spinner = document.getElementById('dialog-spinner');
  // 停止旋轉
  spinner.style.animationPlayState = "paused";
  // 延遲隱藏
  setTimeout(() => {
    overlay.style.display = "none";
  }, delayMs);
}

function compileAndUpload(inoPath) {
					var code = document.getElementById('upload_code').value;
					document.getElementById('upload_code').style.display = "none";
					document.getElementById('upload_state').style.display = "none";
					document.getElementById('upload_state').value = Blockly.Msg.BUTTON_COMPILER_START + "\n";
					var fs = require('fs');
					fs.writeFile(inoPath, code, function(err) {
						if(err) 
						{
							console.log(err);
							document.getElementById('upload_state').value = err;
						}
					});
					
								
					let board = document.getElementById('board-selector');
					var com = document.getElementById('com-selector');
					var baud = document.getElementById('serial_baud');

					const { spawn } = require('child_process');
					let args = [
						//'--verify', inoPath,
						//'--board', board.value,
						'compile', '--fqbn', 'ideasHatch:AmebaPro2:Ameba_HUB-8735_bit', inoPath,
						'--config-file', './blockly_arduino-cli.yaml',
					];
					
					if (document.getElementById('show_verbose').checked) 
					{
						args.push('--verbose');
					}

					var fs = require('fs');
					var CompilerError = false;
					var filePath = arduino_download_file; 
					var binfileExists = fs.existsSync(filePath);
					if(binfileExists)
						fs.unlinkSync(filePath);	
						
					//const upload = spawn(arduino_path + 'arduino_debug.exe', 
					const upload = spawn('arduino-cli.exe', 
					args,
					{ encoding: 'binary' });
					
					upload.stdout.on('data', function(data) {
						var response = document.getElementById('upload_state');
						response.value += decode(new Buffer(data,'binary'), 'utf-8');
						response.scrollTop = response.scrollHeight;
					});

					upload.stderr.on('data', function(data) {
						var response = document.getElementById('upload_state')
						response.value += decode(new Buffer(data,'binary'), 'utf-8');
						if(response.value.includes('error'))
						{
							//response.value += "\nCompiler Error!!";
							
							CompilerError = true;
							if (dialogUploadOptions) {
					        $("#dialog_upload").dialog(dialogUploadOptions).dialog("open");
					    }
							////$(".btn-compiler").remove();
							document.getElementById('upload_code').style.display = "none";
							document.getElementById('upload_state').style.display = "block";								
							hideSpinner(5000); // 5 秒後移除 spinner
							}
						
					});
					
					upload.on('exit', function(code, signal) {
						var response = document.getElementById('upload_state');
						if(!CompilerError)
						{
								response.value += "\nFinish";
								response.scrollTop = response.scrollHeight;
								showSpinner("OK!!!");
								//if (dialogUploadOptions) {
						    //   $("#dialog_upload").dialog(dialogUploadOptions).dialog("open");
						    //}
								//document.getElementById('upload_code').style.display = "none";
								//document.getElementById('upload_state').style.display = "block";
								hideSpinner(3000); // 2 秒後移除 spinner
						}
						else
						{
								response.value += "\nCompiler Error!!";
								response.scrollTop = response.scrollHeight;	
								showSpinner("Compiler Error!!!");
								if (dialogUploadOptions) {
						       $("#dialog_upload").dialog(dialogUploadOptions).dialog("open");
						    }
								document.getElementById('upload_code').style.display = "none";
								document.getElementById('upload_state').style.display = "block";
								hideSpinner(3000); // 2 秒後移除 spinner
						}
						
					});
/*					upload.on('exit', function(code, signal) {
						var response = document.getElementById('upload_state');

						var fileExists = fs.existsSync(filePath);
						var delayInMilliseconds = 500; //1 second
						
						if(!CompilerError)
						{
						
							waitForFile(filePath, function(success) {
		            if (success) {
		                response.value += "\nFinish";
		                showSpinner("Uploading Finish!!!");
		            } else {
		                response.value += "\nTimeout: File not found!";
		                showSpinner("Uploading Failed!!!");
		            }
		            
		            hideSpinner(2000); // 2 秒後移除 spinner
		            //document.getElementById('upload-spinner').style.display = "none";
		            response.scrollTop = response.scrollHeight;
			        });	
						}
						else
						{
							response.value += "\nCompiler Error!!";
							response.scrollTop = response.scrollHeight;	
							showSpinner("Compiler Error!!!");
							hideSpinner(2000); // 2 秒後移除 spinner	
						}
					});*/
/*

					var code = document.getElementById('upload_code').value;
					document.getElementById('upload_code').style.display = "none";
					document.getElementById('upload_state').style.display = "block";
					document.getElementById('upload_state').value = Blockly.Msg.BUTTON_COMPILER_START + "\n";
					var fs = require('fs');
					fs.writeFile(inoPath, code, function(err) {
						if(err) 
						{
							console.log(err);
							document.getElementById('upload_state').value = err;
						}
					});
					var filePath = arduino_download_file; 
					var CompilerError = false;
					var binfileExists = fs.existsSync(filePath);
					if(binfileExists)
						fs.unlinkSync(filePath);	
								
					let board = document.getElementById('board-selector');
					var com = document.getElementById('com-selector');
					var baud = document.getElementById('serial_baud');
						
					var process = require('child_process');
					var upload = process.execFile(
						arduino_path +'arduino_debug.exe',  
						[
						  '--upload', inoPath,
						  '--board', board.value,
						  '--port', 'COM99',
						  '--verbose'	//for replace to .... use
						], 
						{encoding: 'binary'}
					);
					
					upload.stdout.on('data', function(data) {
						var response = document.getElementById('upload_state');
						response.value += decode(new Buffer(data,'binary'), 'utf-8');
						//response.value += '.';
						response.scrollTop = response.scrollHeight;
						//document.getElementById('upload-spinner').style.display = "block";						
					});

					upload.stderr.on('data', function(data) {
						var response = document.getElementById('upload_state');
						response.value += '\n';
						response.value += decode(new Buffer(data,'binary'), 'utf-8');
						
						if(response.value.includes('error'))
						{
							CompilerError = true;
							compilerHasError = true; // ⬅️ 讓 waitForFile 知道
						}
						response.scrollTop = response.scrollHeight;
					});
					
					upload.on('exit', function(code, signal) {
						var response = document.getElementById('upload_state');

						var fileExists = fs.existsSync(filePath);
						var delayInMilliseconds = 500; //1 second
						
						if(!CompilerError)
						{						
							waitForFile(filePath, function(success) {
		            if (success) {
		                response.value += "\nFinish";
		                showSpinner("Uploading Finish!!!");
		            } else {
		                response.value += "\nTimeout: File not found!";
		                showSpinner("Uploading Failed!!!");
		            }
		            
		            hideSpinner(2000); // 2 秒後移除 spinner
		            //document.getElementById('upload-spinner').style.display = "none";
		            response.scrollTop = response.scrollHeight;
			        });	
						}
						else
						{
							response.value += "\nCompiler Error!!";
							response.scrollTop = response.scrollHeight;		
						}
					}
					);*/
					
}

	//For Compiler 
	function startUploading(inoPath) {
		showSpinner("Compiler", true);
		document.getElementById('upload_code').style.display = "none";
		document.getElementById('upload_state').style.display = "none";	

	
	dialogUploadOptions = {
		draggable: true,			
		autoOpen: false,
		resizable: true,
		modal: false,
		//show: "blind",
		//hide: "blind",			
		width: 700,
		height: 500,
		/*open: function () {
			// 在 dialog 打開時插入 checkbox 到按鈕列
			if (!document.getElementById('show_verbose')) {
				const checkboxHTML = `
					<div id="verbose_option" style="display: flex; align-items: center; gap: 8px; justify-content: flex-end; margin-top: 10px;">
						<label><input type="checkbox" id="show_verbose"> Show verbose</label>
					</div>;
				$('.ui-dialog-buttonpane').prepend(checkboxHTML);
			}
		},*/
		buttons: [
			{
				text: Blockly.Msg.BUTTON_CLOSE,
				click: function() {						
					$(this).dialog("close");
				}
			},
			{
				text: Blockly.Msg.BUTTON_COMPILER_STATE,
				click: function () {
				  const uploadCode = document.getElementById('upload_code');
				  const uploadState = document.getElementById('upload_state');
				
				  const isUploadStateVisible = uploadState.style.display !== "none";
				
				  if (!isUploadStateVisible) {
				    // 顯示 upload_state，隱藏 upload_code
				    uploadCode.style.display = "none";
				    uploadState.style.display = "block";
				  } else {
				    // 第二次點擊，全部隱藏
				    uploadCode.style.display = "none";
				    uploadState.style.display = "none";
				  }
				}
			},				
			{
				text: Blockly.Msg.BUTTON_UPLOAD_CODE,
				click: function() {						
					const uploadCode = document.getElementById('upload_code');
				  const uploadState = document.getElementById('upload_state');
				
				  const isUploadCodeVisible = uploadCode.style.display !== "none";
				
				  if (!isUploadCodeVisible) {
				    // 顯示 upload_state，隱藏 upload_code
				    uploadState.style.display = "none";
				    uploadCode.style.display = "block";
				  } else {
				    // 第二次點擊，全部隱藏
				    uploadCode.style.display = "none";
				    uploadState.style.display = "none";
				  }
				}
			},
			{
				text: Blockly.Msg.BUTTON_COMPILER,
				"class": "btn-compiler",
					click: function() {
						if (dialogUploadOptions) {
					        $("#dialog_upload").dialog(dialogUploadOptions).dialog("close");
					    }
					  showSpinner("Compiler", true);
						compileAndUpload(inoPath);
					}
			}				
		],
		title: Blockly.Msg.BUTTON_COMPILER_TITLE
	};
	//$("#dialog_upload").dialog(dialogUploadOptions).dialog("open");
	$(".ui-dialog-titlebar-close").html('X'); // 這行放在初始化對話框之後
	////$(".btn-compiler").remove();

	document.getElementById('upload_code').value = Blockly.Arduino.workspaceToCode();
	document.getElementById('upload_code').scrollTop = 0;
	document.getElementById('upload_state').value = "";
	
	compileAndUpload(inoPath);
	
}

//For Upload 
function startUploading2(inoPath) {
	document.getElementById('upload_code').style.display = "block";
	document.getElementById('upload_state').style.display = "none";	

	var opt = {
		draggable: true,			
		autoOpen: false,
		resizable: true,
		modal: false,
		//show: "blind",
		//hide: "blind",			
		width: 700,
		height: 500,
		open: function () {
			// 在 dialog 打開時插入 checkbox 到按鈕列
			if (!document.getElementById('show_verbose')) {
				const checkboxHTML = `
					<div id="verbose_option" style="display: flex; align-items: center; gap: 8px; justify-content: flex-end; margin-top: 10px;">
						<label><input type="checkbox" id="show_verbose"> Show verbose</label>
					</div>`;
				$('.ui-dialog-buttonpane').prepend(checkboxHTML);
			}
		},
		buttons: [
			{
				text: Blockly.Msg.BUTTON_CLOSE,
				click: function() {						
					$(this).dialog("close");
				}
			},
			{
				text: Blockly.Msg.BUTTON_UPLOAD_STATE,
				click: function() {						
					document.getElementById('upload_code').style.display = "none";
					document.getElementById('upload_state').style.display = "block";
				}
			},				
			{
				text: Blockly.Msg.BUTTON_UPLOAD_CODE,
				click: function() {						
					document.getElementById('upload_code').style.display = "block";
					document.getElementById('upload_state').style.display = "none";
				}
			},
			{
				text: Blockly.Msg.BUTTON_UPLOAD,
				click: function() {
					var code = document.getElementById('upload_code').value;
					document.getElementById('upload_code').style.display = "none";
					document.getElementById('upload_state').style.display = "block";
					document.getElementById('upload_state').value = Blockly.Msg.BUTTON_UPLOAD_START + "\n";
					var fs = require('fs');
					fs.writeFile(inoPath, code, function(err) {
						if(err) 
						{
							console.log(err);
							document.getElementById('upload_state').value = err;
						}
					});
						
								
					let board = document.getElementById('board-selector');
					var com = document.getElementById('com-selector');
					var baud = document.getElementById('serial_baud');
/*						
					var process = require('child_process');
					var upload = process.execFile(
						arduino_path +'arduino_debug.exe',  
						[
						  '--upload', inoPath,
						  '--board', board.value,
						  '--port', com.value,
						  '--verbose'					
						], 
						{encoding: 'binary'}
						, 
						function (error, stdout, stderr) {
							var response = document.getElementById('upload_state');
							if (error) {
								console.error(error);
							}
							response.value += decode(new Buffer(stdout,'binary'), 'utf-8');
							response.value += decode(new Buffer(stderr,'binary'), 'utf-8');
							response.value = response.value.replace(/DEBUG StatusLogger/g,"");
							response.scrollTop = response.scrollHeight;						
					);
*/
					const { spawn } = require('child_process');
					let args = [
						//'--upload', inoPath,
						//'--board', board.value,
						'upload', '--fqbn', 'ideasHatch:AmebaPro2:Ameba_HUB-8735_bit', inoPath,
						'--port', com.value, '--config-file', './blockly_arduino-cli.yaml', '--verbose',
						
					];
					
					if (document.getElementById('show_verbose').checked) 
					{
						args.push('--verbose');
					}
					//const upload = spawn(arduino_path + 'arduino_debug.exe', 
					const upload = spawn('arduino-cli.exe', 
					args,
					{ encoding: 'binary' });
					
					upload.stdout.on('data', function(data) {
						var response = document.getElementById('upload_state');
						response.value += decode(new Buffer(data,'binary'), 'utf-8');
						response.scrollTop = response.scrollHeight;
					});

					upload.stderr.on('data', function(data) {
						var response = document.getElementById('upload_state')
						response.value += decode(new Buffer(data,'binary'), 'utf-8');
						response.scrollTop = response.scrollHeight;
					});

					upload.on('exit', function(code, signal) {
						var response = document.getElementById('upload_state');
						response.value += "\nFinish";
						response.scrollTop = response.scrollHeight;
					});
				}
			}				
		],
		title: Blockly.Msg.BUTTON_UPLOAD_TITLE
	};
	$("#dialog_upload").dialog(opt).dialog("open");
	$(".ui-dialog-titlebar-close").html('X'); // 這行放在初始化對話框之後

	document.getElementById('upload_code').value = Blockly.Arduino.workspaceToCode();
	document.getElementById('upload_code').scrollTop = 0;
	document.getElementById('upload_state').value = "";
}

	var fs = require('fs-extra');
	//編譯韌體
	document.getElementById('button_compiler').onclick = function () {
		fs.ensureDirSync(tmpBuildDir);
    writeInoFile(tmpInoDir, tmpInoFilename);
    startUploading(tmpInoDir + tmpInoFilename);
}
	
	var fs = require('fs-extra');
	//下載韌體
	document.getElementById('button_upload').onclick = function () {
		fs.ensureDirSync(tmpBuildDir);
    writeInoFile(tmpInoDir, tmpInoFilename);
    startUploading2(tmpInoDir + tmpInoFilename);		
	}
	
	var iconv = require('iconv-lite');	

	//啟動序列部監看視窗
	document.getElementById('baudrate').innerHTML = '' +
		'<select id="serial_baud">'+
		'	<option value="300">300</option>'+
		'	<option value="1200">1200</option>'+
		'	<option value="2400">2400</option>'+
		'	<option value="4800">4800</option>'+
		'	<option value="9600">9600</option>'+		
		'	<option value="19200">19200</option>'+
		'	<option value="38400">38400</option>'+
		'	<option value="57600">57600</option>'+
		'	<option value="74880">74880</option>'+
		'	<option value="115200">115200</option>'+			
		'	<option value="230400">230400</option>'+
		'	<option value="250000">250000</option>'+
		'	<option value="500000">500000</option>'+
		'	<option value="1000000">1000000</option>'+	
		'	<option value="2000000">2000000</option>'+		
		'</select>';
		
	var com = document.getElementById('com-selector');
	var baud = document.getElementById('serial_baud');
	
	document.getElementById('button_putty').onclick = function () {
	
		baud.value = getBaudRate();
		
		var opt = {
			draggable: true,			
			autoOpen: false,
			resizable: true,
			modal: false,
			//show: "blind",
			//hide: "blind",			
			width: 350,
			height: 200,
			buttons: [
				{
					text: Blockly.Msg.BUTTON_CLOSE,
					click: function() {
						var process = require('child_process');
						process.exec('taskkill /F /IM putty.exe', {encoding: 'buffer'});						
						$(this).dialog("close");
					}
				},
				{
					text: Blockly.Msg.BUTTON_SERIAL_OPEN,
					click: function() {
						var process = require('child_process');
						process.execFile('putty.exe', 
							[
								'-serial', com.value, 
								'-sercfg', baud.value + ',8,n,1,N'
							], 
							{encoding: 'buffer'}, 
							function (error, stdout, stderr) {
								if (error) {
									console.error(error);
								}
								console.error(decode(stdout));
								console.error(decode(stderr));

							}
						);
					}
				}
			],
			title: Blockly.Msg.BUTTON_SERIAL_TITLE
		};
		$("#dialog_putty").dialog(opt).dialog("open");
		event.preventDefault();
	}	
	
	//啟動Arduino IDE 開啟檔案
	document.getElementById('button_open_ino').onclick = function () {
		chrome.fileSystem.chooseEntry({type: 'openFile', accepts: [{extensions: ['ino']}] }, function(entry) {
			if (!entry) {
			  console.log("Cancelled");
			  return;
			}
			
			chrome.fileSystem.getDisplayPath(entry, function(path_ino) {
				if (path_ino.indexOf("~\\Desktop")!=-1) {
					const os = require('os');
					const path = require('path');
					const desktopDir = path.join(os.homedir(), "Desktop");
					path_ino = path_ino.replace("~\\Desktop",desktopDir);
				}
				
				//var command = '"arduino-'+arduino_version+'\\arduino.exe"' + ' ' + path_ino;
				var command = arduino_execute + ' ' + path_ino;
				var process = require('child_process');
				process.exec(
					command, 
					{encoding: 'buffer'}, 
					function (error, stdout, stderr) {
						if (error) {
							console.error('stderr', stderr);
							throw error;
						}
						console.log('stdout', stdout);
					}
				);
			});
		})
	}

	setTimeout(function(){
		
			var category = document.getElementById('toolbox');
			xmlValue='<xml id="toolbox">';
			if (category.childNodes.length>0) {
				for (var i=0;i<category.childNodes.length;i++){
					var node = new XMLSerializer().serializeToString(category.childNodes[i]);
					xmlValue+=node;
				}
			}
			xmlValue+='</xml>';			
		
			//初始化工作區
			const workspace = Blockly.inject('root',{
					media: 'media/'
					,toolbox: xmlValue
					,grid:{spacing: 20,length: 3,colour: '#eee',snap: true}
					,zoom:{controls: true, wheel: false, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2}
					,trashcan: true
					,move:{
						scrollbars: {
						  horizontal: true,
						  vertical: true
						},
						drag: true,
						wheel: true
					}
					,plugins: {
						'blockDragger': ScrollBlockDragger,
						'metricsManager': ScrollMetricsManager,
					}	
				}
			);
			
			//新增邊緣捲動插件
			//const AutoScrollOptionsPlugin = new AutoScroll(workspace);
			const scrollOptionsPlugin = new ScrollOptions(workspace);
			scrollOptionsPlugin.init({enableWheelScroll: true, enableEdgeScroll: true});
			ScrollBlockDragger.edgeScrollEnabled = false;
			
			//新增系統自訂積木
			if (typeof systemBlocks != "undefined") {
				for (var i=0;i<systemBlocks.length;i++) {
					var customBlocksPath = systemBlocks[i][0];  //自訂積木連結
					var insertAfterCategoryName = systemBlocks[i][1];  //可將自訂積木插入在指定目錄後
					addSystemBlocks(customBlocksPath, insertAfterCategoryName);
				}
			}
			
			//工具箱目錄執行顯示狀態
			setTimeout(function(){
				//chrome.storage.local.get(['CATEGORY'], function(item) {
				localStorage.getItem(['CATEGORY'], function(item) {
					if(item.CATEGORY) {
						var category =  Blockly.getMainWorkspace().getToolbox().getToolboxItems();
						for (var i=0;i<category.length;i++) {
							for (var j=0;j<item.CATEGORY.length;j++) {
								if (category[i].toolboxItemDef_.id==item.CATEGORY[j][0]) {						
									if (item.CATEGORY[j][1]==0) {
										category[i].hide();
									}
								}
							}
						}
					}
					Blockly.getMainWorkspace().resize();
				});	
			}, 1000);			
			
			newFile();
			detectCOM();
			changeLanguage();

			//當工作區變動
			var blockChange = {};
			function onBlocksChange(event) {
					clearTimeout(myTimer);
					clearTimeout(myTimer1);
					blockChange = {};
					
					myTimer = setTimeout(function(){
						var enabledBlockList = ["initializes_loop"];
						var variableBlockList = ["variables_set","variables_set1","variables_set7"];
						var variableGlobalBlockList = ["variables_set","variables_set1"];
						var blocks = Blockly.mainWorkspace.getAllBlocks();
						var p;
						
						for (var i=0;i<blocks.length;i++) {
							p = blocks[i];
							if (enabledBlockList.includes(p.type)||variableBlockList.includes(p.type)||(p.previousConnection==null&&p.outputConnection==null)) {
								if (topCheck&&blocks[i].getParent()&&!blocks[i].isEnabled()) 
									blockChange[blocks[i].id] = true;
								if (variableGlobalBlockList.includes(blocks[i].type)&&blocks[i].getField("POSITION")) {
									if (blocks[i].getFieldValue("POSITION")=="global")
										continue;
								}
								else
									continue;
							}
							p = p.getParent()||p.getPreviousBlock()?p.getParent()||p.getPreviousBlock():"";
							while(p) {
								if ((enabledBlockList.includes(p.type)||variableBlockList.includes(p.type)||(p.previousConnection==null&&p.outputConnection==null))&&!p.getParent()) {
									if (topCheck&&blocks[i].getParent()&&!blocks[i].isEnabled()) 
										blockChange[blocks[i].id] = true;
									break;
								}
								p = p.getParent()||p.getPreviousBlock()?p.getParent()||p.getPreviousBlock():"";
							}
							if ((!blocks[i].getParent()||!blocks[i].getParent().isEnabled())&&(blocks[i].targetConnection==null||blocks[i].outputConnection==null)) {
								if (topCheck&&(!blocks[i].getParent()||!blocks[i].outputConnection||blocks[i].previousConnection)&&blocks[i].isEnabled()) 
									blockChange[blocks[i].id] = false;
							}
							if (blocks[i].getParent()&&blocks[i].getPreviousBlock()) {
								if (variableBlockList.includes(p.type)&&variableBlockList.includes(blocks[i].getParent().type)) {
									if (topCheck) 
										blocks[i].unplug();
								}
							}
						}
					}, 200);
					
					myTimer1 = setTimeout(function(){
						if (showCode) {
							var code = Blockly.Arduino.workspaceToCode(Blockly.getMainWorkspace());			
							editor.setValue(code);
						}
						if (topCheck) {
							for (var i in blockChange) {
								var block = workspace.getBlockById(i);
								if (block.parentBlock_) {
									while (block.parentBlock_) {
										block = block.parentBlock_;
									}
									if (block.isEnabled())
										workspace.getBlockById(i).setEnabled(true);
									else
										workspace.getBlockById(i).setEnabled(blockChange[i]);
								}
								else 
									workspace.getBlockById(i).setEnabled(blockChange[i]);
							}
						}
					}, 300);
			}
			workspace.addChangeListener(onBlocksChange);	
			
	}, 1000);	
	

	//載入系統自訂積木
	function addSystemBlocks(customBlocksPath, insertAfterCategoryName) {
		var blocks_path = customBlocksPath+"blocks.js";   //載入自訂積木定義檔	
		var javascript_path = customBlocksPath+"javascript.js";   //載入自訂積木轉出程式碼檔	
		var toolbox_path = null;//customBlocksPath+"toolbox.xml";  //載入自訂積木目錄檔	
		var en_path = customBlocksPath+"en.js";  //載入積木文字英文語系設定檔	
		var en_category_path = customBlocksPath+"en_category.xml";  //載入積木目錄文字英文語系設定檔
		var zhhant_path = customBlocksPath+"zh-hant.js";  //載入積木文字繁體語系設定檔(預設繁體語系)
		var zhhant_category_path = customBlocksPath+"zh-hant_category.xml";  //載入積木目錄文字繁體語系設定檔(預設繁體語系)
		
		if (lang=="en")
			addScript(en_path);
		else
			addScript(zhhant_path);	
		
		addScript(blocks_path);
		addScript(javascript_path);
		
		$.ajax({
			type: "GET" ,
			url: toolbox_path ,
			dataType: "xml",
			timeout: 3000,
			async: false,
			success: function(xml, textStatus) {
/*
				if (new XMLSerializer().serializeToString(xml.firstChild))
					customCategory.push([new XMLSerializer().serializeToString(xml.firstChild) ,insertAfterCategoryName ,'']);
				
				try {
					var len = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild.childNodes.length;
					var xmlNewValue='<xml id="toolbox">';
					if (len>0) {
							var exist = false;
							for (var i=0;i<len;i++){
								if (insertAfterCategoryName=="") {
									xmlNewValue+=new XMLSerializer().serializeToString(xml.firstChild);
									insertAfterCategoryName="insertTop";
									exist = true;
								}
								var node = new XMLSerializer().serializeToString(new DOMParser().parseFromString(xmlValue,"text/xml").firstChild.childNodes[i]);
								xmlNewValue+=node;
								if (node.indexOf(insertAfterCategoryName)!=-1&&insertAfterCategoryName!="") {
									xmlNewValue+=new XMLSerializer().serializeToString(xml.firstChild);
									exist = true;
								}
							}
							if (exist == false)
								xmlNewValue+=new XMLSerializer().serializeToString(xml.firstChild);
					}
					xmlNewValue+='</xml>';
					xmlValue = xmlNewValue;
					
					Blockly.getMainWorkspace().updateToolbox(xmlValue);	
				} catch (error) {
					console.log(error);
				}
*/
			},
			error: function (jqXHR, textStatus, errorThrown) {
				//console.log(jqXHR.statusText);
			}
		});	
	}
	
	//載入遠端自訂積木
	function addCustomRemoteBlocks(customBlocksPath) {
		var blocks_path = customBlocksPath+"blocks.js";   //載入自訂積木定義檔	
		var javascript_path = customBlocksPath+"javascript.js";   //載入自訂積木轉出程式碼檔	
		var toolbox_path = customBlocksPath+"toolbox.xml";  //載入自訂積木目錄檔	
		var en_path = customBlocksPath+"en.js";  //載入積木文字英文語系設定檔	
		var en_category_path = customBlocksPath+"en_category.xml";  //載入積木目錄文字英文語系設定檔
		var zhhant_path = customBlocksPath+"zh-hant.js";  //載入積木文字繁體語系設定檔(預設繁體語系)
		var zhhant_category_path = customBlocksPath+"zh-hant_category.xml";  //載入積木目錄文字繁體語系設定檔(預設繁體語系)
		
		if (lang=="en")
			addScript(en_path);
		else
			addScript(zhhant_path);	
		
		addScript(blocks_path);
		addScript(javascript_path);
		
		$.ajax({
			type: "GET" ,
			url: toolbox_path ,
			dataType: "xml",
			timeout: 3000,
			async: false,
			success: function(xml, textStatus) {
/*
				if (xml.firstChild) {
					var category_ = new XMLSerializer().serializeToString(xml.firstChild);
					try {
						if (lang=="en") {
							var xmlCustom = $.ajax({url: en_category_path, async: false}).responseXML.firstChild;
						} else {
							var xmlCustom = $.ajax({url: zhhant_category_path, async: false}).responseXML.firstChild;
						}
						for (var i=0;i<xmlCustom.childNodes.length;i++) {
							if (xmlCustom.childNodes[i].nodeName.toLowerCase()=="category") {
								var ini = xmlCustom.childNodes[i].childNodes[0].firstChild.nodeValue;
								var rep = xmlCustom.childNodes[i].childNodes[1].firstChild.nodeValue;
								category_ = category_.replace('name="'+ini+'"','name="'+rep+'"');								
							}
						}
					}
					catch (e) {
						//console.log(e);
					}
					
					checkCategoryExist(customBlocksPath);
					customCategory.push([category_, customCategoryInsertAfter, customBlocksPath]);
					
					var category = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild;
					if (category.childNodes.length>0) {
						for (var j=0;j<customCategory.length;j++) {
							for (var i=0;i<category.childNodes.length;i++){
								if (category.childNodes[i].id==customCategory[j][1]&&customCategory[j][0])
									category.insertBefore(new DOMParser().parseFromString(customCategory[j][0],"text/xml").firstChild,category.childNodes[i].nextSibling);
							}								
						}
					}
						
					Blockly.getMainWorkspace().updateToolbox(category);				
				}	*/			
			},
			error: function (jqXHR, textStatus, errorThrown) {
				//console.log(jqXHR.statusText);
			}
		});	
	}		

	function addScript(url) {
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = url;
		$("body").append(s);
	}
	
	function checkCategoryExist(child) {
		for (var i=0;i<customCategory.length;i++) {
			if (child==customCategory[i][2])
				customCategory.splice(i, 1);
		}
	}

	//工具箱目錄顯示選單
	document.getElementById('button_toolbox').onclick = function () {
		toolboxCategory();
		var opt = {
			draggable: true,			
			autoOpen: false,
			resizable: true,
			modal: false,
			//show: "blind",
			//hide: "blind",			
			width: 600,
			height: 450,
			buttons: [
				{
					text: Blockly.Msg.BUTTON_CLOSE,
					click: function() {
						$(this).dialog("close");
					}
				}
			],
			title: Blockly.Msg.TOOLBOX_DISPLAY
		};
		$("#dialog_toolbox").dialog(opt).dialog("open");
		event.preventDefault();
	}
	
	//工具箱目錄顯示選單內容
	function toolboxCategory() {
		var categorymenu = '<table width="580">';
		var items = Blockly.getMainWorkspace().getToolbox().getToolboxItems();
		var j=0;
		var checked = "";
		for (var i=0;i<items.length;i++) {
			if (items[i].toolboxItemDef_.kind=="CATEGORY"&&!items[i].parent_) {
				checked = items[i].isHidden_?"":" checked";
				j++;
				if (j%3==1) categorymenu +="<tr>";
				if (items[i].toolboxItemDef_.name.indexOf("%{BKY_")!=-1)
					categorymenu +='<td><input type="checkbox" onchange="toolbox_display(this,\''+items[i].toolboxItemDef_.id+'\')" '+checked+'></td><td align="left">'+eval(items[i].toolboxItemDef_.name.replace("%{BKY_","Blockly.Msg[\"").replace("}","\"]"))+'</td>';
				else
					categorymenu +='<td><input type="checkbox" onchange="toolbox_display(this,\''+items[i].toolboxItemDef_.id+'\')" '+checked+'></td><td align="left">'+items[i].toolboxItemDef_.name+'</td>';
				if (j%3==0) categorymenu +="</tr>";
			}
			
		}
		if (j%3!=0) categorymenu +="</tr>";
		categorymenu +="<table>";
		document.getElementById('dialog_toolbox').innerHTML = categorymenu;
	}

	//程式碼區塊顯示
	document.getElementById('button_code').onclick = function () {
		var div = document.getElementById('arduino_content');
		if (div.style.display == "none")
			div.style.display = "block";
		else
			div.style.display = "none";
	}
	
	//程式碼區塊調整大小功能	
	$(function() {
		$( "#arduino_content" ).draggable();
		$( "#arduino_content" ).resizable();
} );

	function updateMsg() {
		if (typeof msg != "undefined") {
			for (var i=0;i<msg.length;i++) {
				const element = document.getElementById(msg[i][0]);
				const content = msg[i][2];
				if (element && content !== undefined && content !== null) {
					if (msg[i][1] == "innerHTML") {
						element.innerHTML = content;
					} else if (msg[i][1] == "title") {
						element.title = content;
					}
				}
			}
		}
	}
	updateMsg();
	
/* 無法辨識 download 結束
	const downloadLink = document.querySelector('a[download]');
	downloadLink.addEventListener('click',function()
	{
			alert("Start Download!");
	});
	
	downloadLink.addEventListener('progress',function()
	{
			alert("peogress!");
	});
	downloadLink.addEventListener('load',function()
	{
			alert("Download Success!");
	});
	
	downloadLink.addEventListener('error',function()
	{	
			alert("Download firmware error!");
	});
*/
/*
const sourceFilePath = path.join('123', 'arduino-1.8.19', 'portable', 'packages', 'ideasHatch', 'tools', 'ameba_pro2_tools', '1.4.1', 'flash_ntz.bin');
	// 複製檔案到選擇的路徑
	function copyFileToUSB(sourcePath, destinationPath) {
	    try {
	        fs.copyFileSync(sourcePath, destinationPath);  // 複製檔案
	        console.log('檔案已成功複製至: ', destinationPath);
	    } catch (err) {
	        console.error('檔案複製失敗: ', err);
	    }
	}
*/	
	//複製程式碼到剪貼簿
	document.getElementById('button_download').onclick = function () {
		console.log(process.versions['nw']);
/*		
		var downloadBlob, downloadURL;

			downloadBlob = function(data, fileName, mimeType) {
		  var blob, url;
		  blob = new Blob([data], {
		    type: mimeType
		  });
		  url = window.URL.createObjectURL(blob);
		  downloadURL(url, fileName);
		  setTimeout(function() {
		    return window.URL.revokeObjectURL(url);
		  }, 1000);
		};
		
		downloadURL = function(data, fileName) {
		  var a;
		  a = document.createElement('a');
		  a.href = data;
		  a.download = fileName;
		  document.body.appendChild(a);
		  a.style = 'display: none';
		  a.click();
		  a.remove();
		};
		
		downloadBlob(arduino_download_file, arduino_download_file, 'application/octet-stream');*/
	}
	
	//重設工作區
	document.getElementById('button_reset').onclick = function () {
		var result = confirm(Blockly.Msg.BUTTON_RESET);
		if (result) newFile();
		document.getElementById('arduino_content').attributeStyleMap.clear();
	}
	
	//新增擴充自訂積木
	document.getElementById('button_addExtensionBlocks').onclick = function () {
		if (typeof customBlocks != "undefined") {
			for (var i=0;i<customBlocks.length;i++) {
				var customBlocksPath = customBlocks[i][0];  //自訂積木連結
				addCustomRemoteBlocks(customBlocksPath);
			}
		}
		
		setTimeout(function(){
			if (Blockly.getMainWorkspace().getBlocksByType("main").length==0)
				newFile();
		},8000);
	}	
	
	//新增遠端自訂積木
	document.getElementById('button_addRemoteBlocks').onclick = function () {
		var customBlocksPath = prompt(Blockly.Msg["CUSTOMBLOCKS_TITLE"], '');
		if (customBlocksPath) {
			if (!customBlocksPath.endsWith("/"))
				customBlocksPath+="/";
			addCustomRemoteBlocks(customBlocksPath);
		}
	}	

	//匯入備份積木檔
	document.getElementById('button_open_xml').onclick = function () {
		var e = document.getElementById("importBlocks");
		if (e) {
			e.click();
			return;
		}
		
		var input=document.createElement('input');
		input.type="file";
		input.id="importBlocks";
		input.style.display = "none";
		input.accept=".xml";
		input.onchange = function(element) {
			try {	
				var file = this.files[0];
				if (file) {
					var fr = new FileReader();           
					fr.onload = function (event) {
						Blockly.getMainWorkspace().clear();
						var blocks = Blockly.Xml.textToDom(event.target.result);
						Blockly.Xml.domToWorkspace(blocks, Blockly.mainWorkspace);
					};
					fr.readAsText(file);
				}
			} catch (e) {
				alert(e);
			}	  
		}

		document.body.appendChild(input);
		setTimeout(function(){
			input.click();
		},500);
	}
	
	let isSaved = false;
	//匯出工作區積木與原始檔
	document.getElementById('button_save_ino').onclick = function () {
		try {
			
			var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
			var xmlText = Blockly.Xml.domToText(xml);

			var link = document.createElement('a');
			link.download="project.xml";
			link.href="data:application/octet-stream;utf-8," + encodeURIComponent(xmlText);
			document.body.appendChild(link);
			link.click();
			link.remove();
			
			var code = Blockly.Arduino.workspaceToCode();			
			var link = document.createElement('a');
			link.download="project.ino";
			link.href="data:application/octet-stream;utf-8," + encodeURIComponent(code);
			document.body.appendChild(link);
			link.click();
			link.remove();
			
			isSaved = true;		//設定為已儲存
		} catch (e) {
			window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(xmlText);
			alert(e);
		}	
	}
	
	//開啟積木工具
	document.getElementById('button_tool').onclick = function () {
		var link = document.createElement('a');
		link.target="_blank";
		link.href="tool/index.html";
		document.body.appendChild(link);
		link.click();
		link.remove();
	}
		
	function getBaudRate() {
	  var code = Blockly.Arduino.workspaceToCode();
	  var matches = code.match(/Serial\.begin\((\d+)\)/);
	  return (matches)?matches[1]:9600;
	}
	
	//Web Serial
	if (typeof navigator.serial !== "undefined") {
		let serial_port = null;
		let serial_textEncoder = {};
		let serial_writableStreamClosed = {};
		let serial_writer = {};
		let serial_reader = null;
		let serial_readSting = "";
		let serial_keepReading = true;
		let serial_selProductId = "";
		let serial_selVendorId = "";

		let serial_baud = document.getElementById('serial_baud');
		let serial_command = document.getElementById('serial_command');
		let serial_status = document.getElementById('serial_status');
		let serial_buttonRequest = document.getElementById('serial_request_port');
		let serial_buttonClose = document.getElementById('serial_close_port');
		let serial_sendString = document.getElementById('serial_sendString');	
		let serial_clearStatus = document.getElementById('serial_clearStatus');
		let serial_end = document.getElementById('serial_end');		
		let serial_timer;
		
		navigator.serial.addEventListener("connect", (event) => {
		  serial_message("Device connect","red");
		});

		navigator.serial.addEventListener("disconnect", (event) => {
			serial_message("Device disconnect","red");
		});	
					
		async function readUntilClosed() {
		  while (serial_port.readable && serial_keepReading) {
			serial_reader = serial_port.readable.getReader();
			try {
			  while (true) {
				const { value, done } = await serial_reader.read();
				if (done) {
				  // |reader| has been canceled.
				  break;
				}
				if (value) {
					serial_readSting += new TextDecoder().decode(value);
					if (value.includes(10)) {    //Serial.println(data);
						clearTimeout(serial_timer);
						serial_message(serial_readSting,"green");
						serial_readSting = "";
					}
					else {    //Serial.print(data);
						serial_timer = setTimeout(function() {
							if (serial_readSting != "") serial_message(serial_readSting,"green");
							serial_readSting = "";
						}, 100);
					}
				}
			  }
			} catch (error) {
			  // Handle |error|...
			} finally {
			  serial_reader.releaseLock();
			}
		  }
		}

		serial_buttonRequest.addEventListener('click', async () => {

			if ("serial" in navigator) {
				/*
				const filters = [
					{ usbVendorId: 0x2341, usbProductId: 0x0043 },
					{ usbVendorId: 0x2341, usbProductId: 0x0001 }
				];
				*/
				const filters = [];
				
				serial_port = await navigator.serial.requestPort({ filters });
				const { usbProductId, usbVendorId } = serial_port.getInfo();
				serial_selProductId = (usbProductId)?"0x"+usbProductId:"null";
				serial_selVendorId = (usbVendorId)?"0x"+usbVendorId:"null";
				
				serial_keepReading = true;
				
				try {
					var rate =  Number(serial_baud.value);
					await serial_port.open({ baudRate: rate });
					var msg = "VendorId: 0x"+serial_selVendorId.toString(16)+" ProductId: 0x"+serial_selProductId.toString(16)+" Ready!";
					serial_message(msg,"blue");
					
					//await serial_port.setSignals({ dataTerminalReady: false });
					//await new Promise(resolve => setTimeout(resolve, 200));
					//await serial_port.setSignals({ dataTerminalReady: true });			
					
					serial_textEncoder[serial_selProductId] = new TextEncoderStream();
					serial_writableStreamClosed[serial_selProductId] = serial_textEncoder[serial_selProductId].readable.pipeTo(serial_port.writable);
					serial_writer[serial_selProductId] = serial_textEncoder[serial_selProductId].writable.getWriter();			
					
					const closed = readUntilClosed();
				} catch (error) {
					var errorString = error.message;
					if (errorString.indexOf("already open")!=-1) {
						var msg = "VendorId: 0x"+serial_selVendorId.toString(16)+" ProductId: 0x"+serial_selProductId.toString(16)+" Ready!";
						serial_message(msg,"blue");
					}
					else if (errorString.indexOf("Failed to open serial port")!=-1) {
						setTimeout(function(){serial_buttonRequest.click();},1000);
					}
					else {
						serial_message(errorString,"red");
					}
				}
			}
				
		});

		serial_buttonClose.addEventListener('click', async () => {
			try {
				if (serial_port) {	
					/*
					serial_keepReading = false;
					serial_reader.cancel();
					await closed;
					*/
					
					serial_port.close();
					serial_port = null;
					serial_message("Closed","blue");
				}
			} catch (error) {
					serial_message(error.message,"red");
			}	
		});

		serial_sendString.addEventListener('click', async () => {
			if (serial_port&&serial_writer) {
				try {	
					var msg = serial_command.value + serial_end.value;
					serial_message(msg,"orange");
					await serial_writer[serial_selProductId].write(msg);
				} catch (error) {
					serial_message(error.message,"red");
				}
			}
		});

		serial_clearStatus.addEventListener('click', async () => {
			serial_status.innerHTML = "";
		});

		function serial_message(msg, colour) {
			serial_status.innerHTML += "<font color='"+colour+"'>"+msg+"</font><br>";
			serial_status.scrollTop = serial_status.scrollHeight;
		}
	}
	
	//Web Serial
	document.getElementById('button_webSerial').onclick = function () {
		
		if (typeof navigator.serial !== "undefined") {
			var opt = {
				draggable: true,			
				autoOpen: false,
				resizable: true,
				modal: false,
				//show: "blind",
				//hide: "blind",			
				width: 570,
				height: 470,
				buttons: [
					{
						text: Blockly.Msg["BUTTON_UPLOADCODE"],
						click: function() {
							var uploader = document.getElementById('arduino-web-uploader');
							var result = prompt(Blockly.Msg["BUTTON_UPLOADCODE"], 'https://fustyles.github.io/webduino/SPduino_tool/hex/test.hex');
							uploader.setAttribute("hex-href", result);
							document.getElementById('arduino-web-uploader').click();
						}
					},				
					{
						text: Blockly.Msg.BUTTON_CLOSE,
						click: function() {
							$(this).dialog("close");
						}
					}
				],
				title: Blockly.Msg["MSG_WEBSERIAL"]
			};
			$("#dialog_webSerial").dialog(opt).dialog("open");
			event.preventDefault();
		}
		else {
			if (typeof nw !== "undefined")
				nw.Shell.openExternal("http://127.0.0.1:3000/WebSerial.html")
			else
				window.open("https://fustyles.github.io/webduino/WebSerial.html","_blank")
		}
	}
	
	//Web Bluetooth
	if (typeof navigator.bluetooth !== "undefined") {
		let Bluetooth_command = document.getElementById('Bluetooth_command');
		let Bluetooth_status = document.getElementById('Bluetooth_status');
		let Bluetooth_buttonRequest = document.getElementById('Bluetooth_request_device');
		let Bluetooth_buttonDisconnect = document.getElementById('Bluetooth_disconnect_device');
		let Bluetooth_sendString = document.getElementById('Bluetooth_sendString');	
		let Bluetooth_clearText = document.getElementById('Bluetooth_clearText');
		let Bluetooth_end = document.getElementById('Bluetooth_end');
		let Bluetooth_uuid_service = document.getElementById('Bluetooth_uuid_service');
		let Bluetooth_uuid_tx = document.getElementById('Bluetooth_uuid_tx');
		let Bluetooth_uuid_rx = document.getElementById('Bluetooth_uuid_rx');

		let Bluetooth_device = null;
		let Bluetooth_characteristics = null;
		let Bluetooth_readCharacteristic = null;
		let Bluetooth_writeCharacteristic = null;
		let busy = false;
		let commandQueue = [];

		// https://www.uuidgenerator.net/
		var service_uuid = "";
		var CHARACTERISTIC_TX_UUID = "";
		var CHARACTERISTIC_RX_UUID = "";
				
		Bluetooth_buttonRequest.addEventListener('click', async () => {
			service_uuid = Bluetooth_uuid_service.value;
			CHARACTERISTIC_TX_UUID = Bluetooth_uuid_tx.value;
			CHARACTERISTIC_RX_UUID = Bluetooth_uuid_rx.value;

			let options = {};
			options.acceptAllDevices = true;
			options.optionalServices = [service_uuid];
			
			//let filters = [];
			//filters.push({services: [0x1234, 0x12345678, '99999999-0000-1000-8000-00805f9b34fb']});
			//filters.push({name: 'xxx'});
			//filters.push({namePrefix: 'yyy'});		
			//options.filters = filters;
			
			navigator.bluetooth.requestDevice(options)
			.then(device => {
				Bluetooth_device = device;
				var msg = 'Connect to Name:' + device.name;
				Bluetooth_message(msg, "blue");
				Bluetooth_message(service_uuid, "blue");
				
				return device.gatt.connect();
			})
			.then(server => {
				return server.getPrimaryService(service_uuid);
			})
			.then(service => {
				return service.getCharacteristics();
			})
			.then(characteristics => {
				Bluetooth_message("Device connected", "blue");
					
				Bluetooth_characteristics = characteristics;
				Bluetooth_device.addEventListener('gattserverdisconnected', onDisconnected);

				characteristics.forEach(characteristic => {
				
					/*
					console.log('> Characteristic UUID:  ' + characteristic.uuid);
					console.log('> Broadcast:            ' + characteristic.properties.broadcast);
					console.log('> Read:                 ' + characteristic.properties.read);
					console.log('> Write w/o response:   ' + characteristic.properties.writeWithoutResponse);
					console.log('> Write:                ' + characteristic.properties.write);
					console.log('> Notify:               ' + characteristic.properties.notify);
					console.log('> Indicate:             ' + characteristic.properties.indicate);
					console.log('> Signed Write:         ' + characteristic.properties.authenticatedSignedWrites);
					console.log('> Queued Write:         ' + characteristic.properties.reliableWrite);
					console.log('> Writable Auxiliaries: ' + characteristic.properties.writableAuxiliaries);
					*/
					
					Bluetooth_message(characteristic.uuid, "blue");
					
					switch (characteristic.uuid) {
						case CHARACTERISTIC_RX_UUID:
							Bluetooth_readCharacteristic = characteristic;
							break;
						case CHARACTERISTIC_TX_UUID:
							Bluetooth_writeCharacteristic = characteristic;
							break;
					}
				});
				
				Bluetooth_readCharacteristic.startNotifications().then(_ => {
					Bluetooth_message('Notifications started',"blue");
					Bluetooth_readCharacteristic.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged);
				});
				
				return Bluetooth_readCharacteristic.readValue();
			})
			.catch(error => {
				console.log(error);
				Bluetooth_message(error,"red"); 
			});
		});

		Bluetooth_buttonDisconnect.addEventListener('click', async () => {
			if (Bluetooth_device && Bluetooth_device.gatt.connected) {
				if (Bluetooth_device.gatt.connected)
					Bluetooth_device.gatt.disconnect();
			}	
		});

		function handleCharacteristicValueChanged(event) {
			const value = new TextDecoder().decode(event.target.value);
			//console.log(value);
			Bluetooth_message(value, "orange");
		}

		function onDisconnected(event) {
			const device = event.target;
			var msg = "Device " + device.name + " is disconnected.";
			Bluetooth_message(msg,"blue");
			Bluetooth_device = null;
			Bluetooth_characteristics = null;
			Bluetooth_readCharacteristic = null;
			Bluetooth_writeCharacteristic = null;	
		}

		function sendCommand(cmd) {
		  if (Bluetooth_writeCharacteristic) {
			if (busy) {
			  commandQueue.push(cmd);
			  return Promise.resolve();
			}
			busy = true;

			return Bluetooth_writeCharacteristic.writeValue(cmd).then(() => {
			  busy = false;
			  let nextCommand = commandQueue.shift();
			  if (nextCommand) {
				sendCommand(nextCommand);
			  }
			});
		  } else {
			return Promise.resolve();
		  }
		}

		Bluetooth_clearText.addEventListener('click', async () => {
			Bluetooth_status.innerHTML = "";
		});

		Bluetooth_sendString.addEventListener('click', async () => {
			var msg = Bluetooth_command.value + Bluetooth_end.value;
			Bluetooth_message(msg, "green");
			var cmd = new TextEncoder().encode(msg);
			sendCommand(cmd).then(() => {
				//Bluetooth_message(new TextDecoder().decode(cmd), "green");
			})
			.catch(error => {
				console.log(error);
				Bluetooth_message(error,"red"); 
			});
		});
				
		function Bluetooth_message(msg, colour) {
			Bluetooth_status.innerHTML += "<font color='"+colour+"'>"+msg+"</font><br>";
			Bluetooth_status.scrollTop = Bluetooth_status.scrollHeight;
		}
	}
	
	//Web Bluetooth
	document.getElementById('button_webBluetooth').onclick = function () {
		if (typeof navigator.bluetooth !== "undefined") {
			var opt = {
				draggable: true,			
				autoOpen: false,
				resizable: true,
				modal: false,
				//show: "blind",
				//hide: "blind",			
				width: 570,
				height: 470,
				buttons: [					
					{
						text: Blockly.Msg.BUTTON_CLOSE,
						click: function() {
							$(this).dialog("close");
						}
					}
				],
				title: Blockly.Msg["MSG_WEBBLUETOOTH"]
			};
			$("#dialog_webBluetooth").dialog(opt).dialog("open");
			event.preventDefault();
		}
		else {
			if (typeof nw !== "undefined")
				nw.Shell.openExternal("http://127.0.0.1:3000/WebBluetooth.html")
			else
				window.open("https://fustyles.github.io/webduino/WebBluetooth.html")
		}
	}	
	
    //Web MQTT
    document.getElementById('button_webMQTT').addEventListener("click", function(evt) {
	  if (typeof nw !== "undefined")
  		nw.Shell.openExternal("http://127.0.0.1:3000/WebMQTT.html")
  	  else
  		window.open("https://fustyles.github.io/webduino/mqtt_basic_page.html")
    }); 	
	
	function setLang(lang, callback) {
    localStorage.setItem('LANG', lang);
    if (callback) callback();
	}
	
	//切換語言
	document.getElementById('lang-selector').onchange = function () {
		if (this.selectedIndex!=-1) {
			lang = this.options[this.selectedIndex].value;
		//chrome.storage.local.set({'LANG': lang}, function() {
		setLang(lang, function() {
		  console.log('store language setting to ' + lang);
		  changeLanguage();
		});
/*		
		localStorage.getItem({'LANG': lang}, function() {
			console.log('store language setting to ' + lang);
			changeLanguage();
		});
*/
		}
	};
	
	//切換語言
	function changeLanguage() {
		addScript(languageList);
		if (typeof language != "undefined") {
			for (var i=0;i<language.length;i++) {
				if (language[i][0]==lang) {
					addScript(language[i][1]);
				}
			}
			addScript(languageList);			
			for (var i=0;i<language.length;i++) {
				document.getElementById('lang-selector').options[i].text = language[i][2];
			}
		}
		
		if (typeof systemBlocks != "undefined") {
			for (var i=0;i<systemBlocks.length;i++) {
				if (document.getElementById('lang-selector').value=="en")
					addScript(systemBlocks[i][0]+"en.js");
				else
					addScript(systemBlocks[i][0]+"zh-hant.js");
			}
		}
		
		addScript("js/message.js");
		flashToolbox();
		updateMsg();
		
		var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
	}	
	
	function flashToolbox() {
		var category = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild;
		Blockly.getMainWorkspace().updateToolbox(category);
		
		var category = JSON.parse(JSON.stringify(customCategory));
		for (var i=0;i<category.length;i++) {
			if (category[i][2]) addCustomRemoteBlocks(category[i][2]);
		}
	}
	
	//新增初始化積木
	function newFile() {
		var xmlDoc = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml"><block type="main" id="0" x="100" y="50" deletable="false" editable="false"></block></xml>');
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xmlDoc, Blockly.getMainWorkspace());
		//Blockly.utils.toolbox.Position.TOP =100;
		//Blockly.utils.toolbox.Position.RIGHT =100;
		//Blockly.utils.toolbox.Position.LEFT =1;
		//Blockly.utils.toolbox.Position.BOTTOM = 500;
	}
/*		
	//視窗啟動最大化顯示
	var ngui = require('nw.gui');
	var nwin = ngui.Window.get();
	nwin.maximize();
*/	
	//視窗關閉事件
	/*
	nwin.on('close', function(event) {
		var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
		var data = Blockly.Xml.domToText(xml);
		chrome.storage.local.set({'CODE': data}, function() {});
		var yes = confirm(Blockly.Msg.WINDOW_CLOSE_MESSAGE);
		if (yes) {
			nwin.close(true);
		}
	}); 
	*/
	
	//Double Click關閉彈出積木選單
	setTimeout(function() {
		var blocklyWorkspace = document.getElementsByClassName("blocklyFlyout");
		for (var f=0;f<blocklyWorkspace.length;f++) {
			blocklyWorkspace[f].addEventListener('dblclick', function(){ 
				Blockly.hideChaff();
			});
		}
	}, 3000);
});	

function addHeadScript(url) {
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.src = url;
	document.getElementsByTagName('head')[0].append(s);
}

//切換頁籤
var tabs = ['code_content','category_content'];
function displayTab(id) {
	for (var i in tabs) {
		document.getElementById(tabs[i]).style.display= (tabs[i]==id)?"block":"none";
		if (tabs[i]=='code_content') arduinoCode();
	}
}

function arduinoCode() {
	var code = Blockly.Arduino.workspaceToCode();
	document.getElementById('code_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
}

//工具箱目錄顯示與紀錄
function toolbox_display(chk, categoryid) {
	var category =  Blockly.getMainWorkspace().getToolbox().getToolboxItems();
	for (var i=0;i<category.length;i++) {
		if (category[i].toolboxItemDef_.id==categoryid)
			chk.checked==false?category[i].hide():category[i].show();
	}
	Blockly.getMainWorkspace().resize();
	
	category =  Blockly.getMainWorkspace().getToolbox().getToolboxItems();
	var items = [];
	for (var i=0;i<category.length;i++) {
		if (category[i].toolboxItemDef_.id!="category_sep")
			items.push([category[i].toolboxItemDef_.id , category[i].isHidden_==true?0:1]);
	}
	//chrome.storage.local.set({'CATEGORY': items}, function() {});
	localStorage.getItem({'CATEGORY': items}, function() {});
}

//縮放視窗
function contentZoom(content) {
	const div_content = document.getElementById(content+"_content");
	const div_code = document.getElementById(content+"_code");
	if (div_content.style.height!= "40px") {
		div_content.w = div_content.style.width;
		div_content.h = div_content.style.height;
		div_content.l = div_content.style.left;
		div_content.t = div_content.style.top;
		
		div_content.style.width = "calc(20vw)";
		div_content.style.height = "40px";
		div_code.style.display = "none";

		if (content=="arduino") {
			div_content.style.left = "calc(97% - 20vw)";
			div_content.style.top = "75px";
			showCode = false;
		}
	}
	else {
		div_content.style.width = div_content.w;
		div_content.style.height = div_content.h;
		div_code.style.display = "block";	
		
		if (content=="arduino") {
			div_content.style.left = div_content.l;	
			div_content.style.top = div_content.t;	
			
			var code = Blockly.Arduino.workspaceToCode();			
			editor.setValue(code);
			showCode = true;
		}
	}
}
/*
var gui = require('nw.gui');
console.log(process.versions['nw']);
var win = gui.Window.get();
win.show();
win.maximize();
	
win.on('close', function(event) {
	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	var data = Blockly.Xml.domToText(xml);
	//chrome.storage.local.set({'CODE': data}, function() {});
	localStorage.getItem({'CODE': data}, function() {});
	var yes = confirm(Blockly.Msg.WINDOW_CLOSE_MESSAGE);
	if (yes) {
		win.close(true);
	}
}); 

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request ', request.url.split("?")[0]);

    var filePath = './package.nw' + request.url.split("?")[0];
    if (filePath == './package.nw/') {
        filePath = './package.nw/main.html'
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(3000);
*/
// Server: http://127.0.0.1:3000