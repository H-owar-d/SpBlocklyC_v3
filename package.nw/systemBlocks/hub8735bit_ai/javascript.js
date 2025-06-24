//hub8735 bit
Blockly.Arduino['hub8735bit_openai_init'] = function() {
	Blockly.Arduino.definitions_['define_hub8735_openAI_init']='\n'+
											'#include "OpenAI.h"\n'+
											'\n'+
											'OpenAI open_ai;\n';
											
		Blockly.Arduino.setups_['begin_hub8735_openAI_init_setups'] = '';

		//var api_key =this.getFieldValue("value_api_key_");
		var api_key =Blockly.Arduino.valueToCode(this,"value_api_key_",Blockly.Arduino.ORDER_NONE);
		var system_prompt =Blockly.Arduino.valueToCode(this,"value_system_prompt_",Blockly.Arduino.ORDER_NONE);
		//var system_prompt =this.getFieldValue("value_system_prompt_");
		var code = 'open_ai.begin(' + api_key + ');\n' +
		           'open_ai.chatAddSystemPrompt(' + system_prompt +');\n';
		return code;
}

Blockly.Arduino['hub8735bit_openai_sendmsg'] = function() {
	Blockly.Arduino.definitions_['define_hub8735_openAI_init']='\n'+
											'#include "OpenAI.h"\n'+
											'\n'+
											'OpenAI open_ai;\n';

		var char_data =Blockly.Arduino.valueToCode(this,"chat_data_",Blockly.Arduino.ORDER_NONE);
		var code = 'open_ai.chatAddUserMessage(' + char_data + ');\n';
		return code;
}

Blockly.Arduino['hub8735bit_openai_clearmsg'] = function() {
		Blockly.Arduino.definitions_['define_hub8735_openAI_init']='\n'+
											'#include "OpenAI.h"\n'+
											'\n'+
											'OpenAI open_ai;\n';
											
		var code = 'open_ai.chatClearUserMessage();\n';
		return code;
}

Blockly.Arduino['hub8735bit_openai_reponsemsg'] = function() {
		Blockly.Arduino.definitions_['define_hub8735_openAI_init']='\n'+
											'#include "OpenAI.h"\n'+
											'\n'+
											'OpenAI open_ai;\n';
		/*Blockly.Arduino.setups_['define_response_init']	= 
											'String myString = open_ai.chatCompletion();\n' +
											'char* dynamicCharArray = new char[myString.length() + 1];' + 
											'myString.toCharArray(dynamicCharArray, myString.length() + 1);';								
		var code = 'myString';
		*/
		var code = 'open_ai.chatCompletion()';
		
		return code;
}

Blockly.Arduino['hub8735bit_openai_tts'] = function() {
		Blockly.Arduino.definitions_['define_hub8735_openAI_init']='\n'+
											'#include "OpenAI.h"\n'+
											'\n'+
											'OpenAI open_ai;\n';
		Blockly.Arduino.definitions_['define_openAI_tts_init']='\n'+
											'#include "AmebaFatFS.h"\n'+
											'#include "MP3_Player.h"\n'+
											'\n' +
											'MP3Player mp3Player;\n' +
											'AmebaFatFS fs;\n' + 
											'File file_tts;\n' + 
											'File file_mp3;';
											
		Blockly.Arduino.setups_['begin_hub8735_fs_setups'] = 'fs.begin();\n';
		
		var tts_data=Blockly.Arduino.valueToCode(this,"tts_data_",Blockly.Arduino.ORDER_ATOMIC)||"";
		var code = 'file_tts = fs.open("tts.mp3");\n' +
							'open_ai.textToSpeech(file_tts, ' + tts_data + ');\n' +
							'file_tts.close();\n\n' + 
							'Serial.println("----Text To Speech END----");\n\n'+
  						'Serial.println("----Play MP3 Start----");\n'+
  						'mp3Player.begin();\n' +
  						'file_mp3 = fs.open("tts.mp3");\n' +
  						'mp3Player.play(file_mp3);\n' +
  						'file_mp3.close();\n' +
  						'Serial.println("----Play MP3 End----");\n';
    
		return code;
}

Blockly.Arduino['hub8735bit_openai_tts2'] = function() {
		Blockly.Arduino.definitions_['define_hub8735_openAI_init']='\n'+
											'#include "OpenAI.h"\n'+
											'\n'+
											'OpenAI open_ai;\n';
											
		Blockly.Arduino.definitions_['define_openAI_tts_init']='\n'+
											'#include "AmebaFatFS.h"\n'+
											'#include "MP3_Player.h"\n'+
											'\n' +
											'MP3Player mp3Player;\n' +
											'AmebaFatFS fs;\n' +
											'File file_tts;\n' + 
											'File file_mp3;' ;
											
		Blockly.Arduino.setups_['begin_hub8735_fs_setups'] = 'fs.begin();\n';
		var tts_data=Blockly.Arduino.valueToCode(this,"tts_data_",Blockly.Arduino.ORDER_ATOMIC)||"";									
		var tts_voice_type = Blockly.Arduino.valueToCode(this, 'tts_voice_type_', Blockly.Arduino.ORDER_ATOMIC);
		var code = 'file_tts = fs.open("tts.mp3");\n' +
							'open_ai.textToSpeech(file_tts, ' + tts_voice_type + ',' + tts_data + ');\n' +
							'file_tts.close();\n\n' + 
							'Serial.println("----Text To Speech END----");\n\n'+
  						'Serial.println("----Play MP3 Start----");\n'+
  						'mp3Player.begin();\n' +
  						'file_mp3 = fs.open("tts.mp3");\n' +
  						'mp3Player.play(file_mp3);\n' +
  						'file_mp3.close();\n' +
  						'Serial.println("----Play MP3 End----");\n';

		return code;
}


Blockly.Arduino['hub8735bit_openai_stt_file'] = function() {
		Blockly.Arduino.definitions_['define_hub8735_openAI_init']='\n'+
											'#include "OpenAI.h"\n'+
											'\n'+
											'OpenAI open_ai;\n';
											
		Blockly.Arduino.definitions_['define_openAI_stt_init']='\n'+
											'#include "AmebaFatFS.h"\n'+
											'\n' +
											'AmebaFatFS fs;\n';
											
		Blockly.Arduino.setups_['begin_hub8735_fs_setups'] = 'fs.begin();\n';									
		//var stt_data=Blockly.Arduino.valueToCode(this,"stt_data_",Blockly.Arduino.ORDER_ATOMIC)||"";
		var stt_data=Blockly.Arduino.valueToCode(this,"stt_data_",Blockly.Arduino.ORDER_ATOMIC)||"";
		if (stt_data.startsWith('"') && stt_data.endsWith('"')) 
		{
    	stt_data = stt_data.slice(1, -1); // 安全剪掉兩側的引號
		}
		var statements_do_stt = Blockly.Arduino.statementToCode(this, 'do_stt');
		var code = 	'File file = fs.open("' + stt_data +'.mp4");\n' +
								statements_do_stt	+
								'file.close();\n';
																
		return code;
}

Blockly.Arduino['hub8735bit_openai_stt'] = function() {
		Blockly.Arduino.definitions_['define_hub8735_openAI_init']='\n'+
											'#include "OpenAI.h"\n'+
											'\n'+
											'OpenAI open_ai;\n';
											
		Blockly.Arduino.definitions_['define_openAI_stt_init']='\n'+
											'#include "AmebaFatFS.h"\n'+
											'\n' +
											'AmebaFatFS fs;\n';
											
		Blockly.Arduino.setups_['begin_hub8735_fs_setups'] = 'fs.begin();\n';
		var code = 'open_ai.speechToText(file)';
																
		return code;
}