//hub8735bit
Blockly.Blocks['hub8735bit_openai_init'] = {
  init: function() {
    		this.appendDummyInput()      
        		.appendField(Blockly.Msg.HUB_OPENAI_CHAT)
        		.appendField(Blockly.Msg.HUB_OPENAI_INIT);
        this.appendValueInput("value_api_key_")
        		.setCheck("String")
        		.setAlign(Blockly.ALIGN_RIGHT)
        		.appendField(Blockly.Msg.HUB_OPENAI_APIKEY);
        this.appendValueInput("value_system_prompt_")
        		.setCheck("String")
        		.setAlign(Blockly.ALIGN_RIGHT)
        		.appendField(Blockly.Msg.HUB_OPENAI_SYSTEM_PROMPT);

		this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(268);
  }
};

Blockly.Blocks['hub8735bit_openai_sendmsg'] = {
  init: function() {
    		this.appendDummyInput()      
        		.appendField(Blockly.Msg.HUB_OPENAI_CHAT);
        this.appendValueInput("chat_data_")
        		.setCheck("String")
        		.setAlign(Blockly.ALIGN_RIGHT)
        		.appendField(Blockly.Msg.HUB_OPENAI_SENDMSG);
		this.setInputsInline(true);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(268);
  }
};

Blockly.Blocks['hub8735bit_openai_clearmsg'] = {
  init: function() {
    		this.appendDummyInput()      
        		.appendField(Blockly.Msg.HUB_OPENAI_CHAT)
        		.appendField(Blockly.Msg.HUB_OPENAI_CLEARMSG);
		this.setInputsInline(true);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(268);
  }
};

Blockly.Blocks['hub8735bit_openai_reponsemsg'] = {
  init: function() {
    		this.appendDummyInput()      
        		.appendField(Blockly.Msg.HUB_OPENAI_CHAT)
        		.appendField(Blockly.Msg.HUB_OPENAI_CHAT_COMPLETION)
        		
		this.setInputsInline(true);
		this.setOutput(true);  
    this.setColour(268);
  }
};

Blockly.Blocks['hub8735bit_openai_tts'] = {
  init: function() {  			
    		this.appendDummyInput()      
        		.appendField(Blockly.Msg.HUB_OPENAI_CHAT);
        this.appendValueInput("tts_data_")
        		.setCheck(null)
        		.appendField(Blockly.Msg.HUB_OPENAI_TTS);

		this.setInputsInline(!0);
		this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);       
    this.setColour(328);
  }
};

Blockly.Blocks['hub8735bit_openai_tts2'] = {
  init: function() {  			
    		this.appendDummyInput()      
        		.appendField(Blockly.Msg.HUB_OPENAI_CHAT);
        this.appendValueInput("tts_data_")
        		.setCheck(null)
        		.appendField(Blockly.Msg.HUB_OPENAI_TTS)
        		.setAlign(Blockly.ALIGN_RIGHT);
				this.appendDummyInput()
        		.appendField(Blockly.Msg.HUB_OPENAI_TTS_VOICE)
						.appendField(new Blockly.FieldDropdown([["ALLOY","0"],["ECHO","1"],["FABLE","2"],["ONYX","3"],["NOVA","4"],["SHIMMER","5"]]),"tts_voice_type_")
        		.setAlign(Blockly.ALIGN_RIGHT);
		this.setInputsInline(0);
		this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);       
    this.setColour(328);
  }
};

Blockly.Blocks['hub8735bit_openai_stt_file'] = {
  init: function() {  			
    		this.appendDummyInput()      
        		.appendField(Blockly.Msg.HUB_OPENAI_CHAT);
        this.appendValueInput("stt_data_")
        		.setCheck(null)
        		.appendField(Blockly.Msg.HUB_OPENAI_STT_FILE);
				this.appendStatementInput("do_stt")
        		.setCheck(null)
        		.setAlign(Blockly.ALIGN_RIGHT);
        
		this.setInputsInline(!0);
		this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);   
    this.setColour(328);
  }
};

Blockly.Blocks['hub8735bit_openai_stt'] = {
  init: function() {  			
    		this.appendDummyInput()
    				.appendField(Blockly.Msg.HUB_OPENAI_CHAT)
        		.appendField(Blockly.Msg.HUB_OPENAI_STT);
        
		this.setInputsInline(1);
		this.setOutput(true); 
    this.setColour(328);
  }
};

