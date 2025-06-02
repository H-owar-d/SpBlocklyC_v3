/*------------------------------------
*					hub8735bit AI ¬ÛÃö¿n¤ì
------------------------------------*/
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

/*------------------------------------
*					hub8735bit Basic ¬ÛÃö¿n¤ì
------------------------------------*/
Blockly.Blocks['ShowLEDMatrix_number'] = {
  init: function() {
    this.appendValueInput("value_number_")
    		.setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.SHOWLED_NUM);
    this.appendDummyInput()
			.appendField(Blockly.Msg.SHOWLED_DIR)		
		  .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.SHOWLED_LR,"0"],
			[Blockly.Msg.SHOWLED_RL,"1"]			
			]), "led_direct_");
		//this.setInputsInline(true);
    /*this.appendDummyInput("direct_")
				.appendField(Blockly.Msg.Blockly.Msg.SHOWLED_LR)
				.appendField(new Blockly.FieldDropdown([[Blockly.Msg.SHOWLED_LR,"0"],[Blockly.Msg.SHOWLED_RL,"1"]]));
				*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(210);
  }
};
Blockly.Blocks['ShowLEDMatrix'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.SHOWLED);

    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L04")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L05");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L06")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L07")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L08")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L09")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L10");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L11")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L12")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L13")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L14")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L15");
    this.appendDummyInput()	
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L16")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L17")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L18")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L19")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L20");
    this.appendDummyInput()	
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L21")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L22")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L23")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L24")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L25");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);	
  }
};

Blockly.Blocks['ShowLEDMatrix_Icon'] = {
  init: function() {
  	var input = this.appendDummyInput()
        .appendField(Blockly.Msg.SHOWLED_ICON);
    var options = [
        [{'src': 'media/0.png', 'width': 80, 'height': 80}, '0'],
        [{'src': 'media/1.png', 'width': 80, 'height': 80}, '1'],
        [{'src': 'media/2.png', 'width': 80, 'height': 80}, '2'],
        [{'src': 'media/3.png', 'width': 80, 'height': 80}, '3'],
        [{'src': 'media/4.png', 'width': 80, 'height': 80}, '4'],
        [{'src': 'media/5.png', 'width': 80, 'height': 80}, '5'],
        [{'src': 'media/6.png', 'width': 80, 'height': 80}, '6'],
        [{'src': 'media/7.png', 'width': 80, 'height': 80}, '7'],
        [{'src': 'media/8.png', 'width': 80, 'height': 80}, '8'],
        [{'src': 'media/9.png', 'width': 80, 'height': 80}, '9'],
        [{'src': 'media/10.png', 'width': 80, 'height': 80}, '10'],
        [{'src': 'media/11.png', 'width': 80, 'height': 80}, '11'],
        [{'src': 'media/12.png', 'width': 80, 'height': 80}, '12'],
        [{'src': 'media/13.png', 'width': 80, 'height': 80}, '13'],
        [{'src': 'media/14.png', 'width': 80, 'height': 80}, '14'],
        [{'src': 'media/15.png', 'width': 80, 'height': 80}, '15'],
        [{'src': 'media/16.png', 'width': 80, 'height': 80}, '16'],
        [{'src': 'media/17.png', 'width': 80, 'height': 80}, '17'],
        [{'src': 'media/18.png', 'width': 80, 'height': 80}, '18'],
        [{'src': 'media/19.png', 'width': 80, 'height': 80}, '19'],
        [{'src': 'media/20.png', 'width': 80, 'height': 80}, '20'],
        [{'src': 'media/21.png', 'width': 80, 'height': 80}, '21'],
        [{'src': 'media/22.png', 'width': 80, 'height': 80}, '22'],
        [{'src': 'media/23.png', 'width': 80, 'height': 80}, '23'],
        [{'src': 'media/24.png', 'width': 80, 'height': 80}, '24'],
        [{'src': 'media/25.png', 'width': 80, 'height': 80}, '25'],
        [{'src': 'media/26.png', 'width': 80, 'height': 80}, '26'],
        [{'src': 'media/27.png', 'width': 80, 'height': 80}, '27'],
        [{'src': 'media/28.png', 'width': 80, 'height': 80}, '28'],
        [{'src': 'media/29.png', 'width': 80, 'height': 80}, '29'],
        [{'src': 'media/30.png', 'width': 80, 'height': 80}, '30'],
        [{'src': 'media/31.png', 'width': 80, 'height': 80}, '31'],
        [{'src': 'media/32.png', 'width': 80, 'height': 80}, '32'],
        [{'src': 'media/33.png', 'width': 80, 'height': 80}, '33'],
        [{'src': 'media/34.png', 'width': 80, 'height': 80}, '34'],
        [{'src': 'media/35.png', 'width': 80, 'height': 80}, '35'],
        [{'src': 'media/36.png', 'width': 80, 'height': 80}, '36'],
        [{'src': 'media/37.png', 'width': 80, 'height': 80}, '37'],
        [{'src': 'media/38.png', 'width': 80, 'height': 80}, '38'],
        [{'src': 'media/39.png', 'width': 80, 'height': 80}, '39']
    ];
    input.appendField(new Blockly.FieldDropdown(options), 'icon_index_');
/* 	
    this.appendDummyInput()      
        .appendField(Blockly.Msg.SHOWLED_ICON);
*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(210);
  }
};

Blockly.Blocks['ShowLEDMatrix_String'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck("String")
        .appendField(Blockly.Msg.SHOWLED_STRING);
		this.appendDummyInput()
			.appendField(Blockly.Msg.SHOWLED_DIR)		
		  .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.SHOWLED_LR,"0"],
			[Blockly.Msg.SHOWLED_RL,"1"]			
			]), "led_direct_");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(210);
  }
};

Blockly.Blocks['ShowLEDMatrix_Clear'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.SHOWLED_CLEAR);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(210);
  }
};

Blockly.Blocks['ShowLEDMatrix_Arrow'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.SHOWLED_ARROW)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.SHOWLED_NORTH,"0"],
			[Blockly.Msg.SHOWLED_NORTHEAST,"1"],
			[Blockly.Msg.SHOWLED_EAST,"2"],
			[Blockly.Msg.SHOWLED_SOUTHEAST,"3"],
			[Blockly.Msg.SHOWLED_SOUTH,"4"],
			[Blockly.Msg.SHOWLED_SOUTHWEST,"5"],
			[Blockly.Msg.SHOWLED_WEST,"6"],
			[Blockly.Msg.SHOWLED_NORTHWEST,"7"]
			]), "map_direct_");
		  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(210);
  }
};

/*------------------------------------
*					hub8735bit Blockly ¬ÛÃö¿n¤ì
------------------------------------*/
//£V’Ø?£D
Blockly.Blocks['hub8735bit_blockly'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["HUB_BLOCKLY_TEST"])
	    
			this.setInputsInline(true);
			this.setOutput(true);	
	    this.setColour(300);	
	  }
};

Blockly.Blocks['delay_custom'] = {
  init: function() {
  		this.appendValueInput("DELAY_TIME")
    		.setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.HUB_BLOCKLY_DELAYMS);
	    
			this.setInputsInline(false);
			this.setOutput(false);
			this.setPreviousStatement(true, null);
    	this.setNextStatement(true, null);   
	    this.setColour(90);	
	  }
};

Blockly.Blocks['delayMicroseconds_custom'] = {
  init: function() {
	    this.appendValueInput("DELAY_TIME")
    		.setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.HUB_BLOCKLY_DELAYUS);
			this.setInputsInline(false);
			this.setOutput(false);	
			this.setPreviousStatement(true, null);
    	this.setNextStatement(true, null);   
	    this.setColour(90);	
	  }
};

Blockly.Blocks.hub8735bit_buzzer={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_BUZZER_PIN);
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["    [0]","0"],
				["B 0 [31]","31"],
				["C 1 [33]","33"],
				["C# 1 [35]","35"],
				["D 1 [37]","37"],
				["D# 1 [39]","39"],
				["E 1 [41]","41"],
				["F 1 [44]","44"],
				["F# 1 [46]","46"],
				["G 1 [49]","49"],
				["G# 1 [52]","52"],
				["A 1 [55]","55"],
				["A# 1 [58]","58"],
				["B 1 [62]","62"],
				["C 2 [65]","65"],
				["C# 2 [69]","69"],
				["D 2 [73]","73"],
				["D# 2 [78]","78"],
				["E 2 [82]","82"],
				["F 2 [87]","87"],
				["F# 2 [93]","93"],
				["G 2 [98]","98"],
				["G# 2 [104]","104"],
				["A 2 [110]","110"],
				["A# 2 [117]","117"],				
				["B 2 [123]","123"],
				["C 3 [131]","131"],
				["C# 3 [139]","139"],
				["D 3 [147]","147"],
				["D# 3 [156]","156"],
				["E 3 [165]","165"],
				["F 3 [175]","175"],
				["F# 3 [185]","185"],
				["G 3 [196]","196"],
				["G# 3 [208]","208"],
				["A 3 [220]","220"],
				["A# 3 [233]","233"],
				["B 3 [247]","247"],
				["C 4 [262]","262"],
				["C# 4 [277]","277"],
				["D 4 [294]","294"],
				["D# 4 [311]","311"],
				["E 4 [330]","330"],
				["F 4 [349]","349"],
				["F# 4 [370]","370"],
				["G 4 [392]","392"],
				["G# 4 [415]","415"],
				["A 4 [440]","440"],
				["A# 4 [466]","466"],
				["B 4 [494]","494"],
				["C 5 [523]","523"],
				["C# 5 [554]","554"],
				["D 5 [587]","587"],
				["D# 5 [622]","622"],
				["E 5 [659]","659"],
				["F 5 [698]","698"],
				["F# 5 [740]","740"],
				["G 5 [784]","784"],
				["G# 5 [831]","831"],
				["A 5 [880]","880"],
				["A# 5 [932]","932"],
				["B 5 [988]","988"],			
				["C 6 [1047]","1047"],
				["C# 6 [1109]","1109"],
				["D 6 [1175]","1175"],
				["D# 6 [1245]","1245"],
				["E 6 [1319]","1319"],
				["F 6 [1397]","1397"],
				["F# 6 [1480]","1480"],
				["G 6 [1568]","1568"],
				["G# 6 [1661]","1661"],
				["A 6 [1760]","1760"],
				["A# 6 [1864]","1864"],
				["B 6 [1975]","1975"],
				["C 7 [2093]","2093"],
				["C# 7 [2218]","2218"],
				["D 7 [2349]","2349"],
				["D# 7 [2489]","2489"],
				["E 7 [2637]","2637"],
				["F 7 [2794]","2794"],
				["F# 7 [2960]","2960"],
				["G 7 [3136]","3136"],
				["G# 7 [3322]","3322"],
				["A 7 [3520]","3520"],
				["A# 7 [3729]","3729"],
				["B 7 [3951]","3951"],
				["C 8 [4186]","4186"],
				["C# 8 [4435]","4435"],
				["D 8 [4699]","4699"],
				["D# 8 [4978]","4978"],
				["E 8 [5274]","5274"],
				["F 8 [5588]","5588"],
				["F# 8 [5920]","5920"],
				["G 8 [6272]","6272"],
				["G# 8 [6645]","6645"],
				["A 8 [7040]","7040"],
				["A# 8 [7459]","7459"],
				["B 8 [7902]","7902"]				
			]),"frequency");
		this.appendValueInput("delaytime")
			.setCheck(null)
			.appendField(Blockly.Msg.HUB_BUZZER_DELAYTIME);
				
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(120);			
	}
};

Blockly.Blocks.hub8735bit_buzzer1={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_BUZZER_PIN);
		this.appendValueInput("frequency")
			.setCheck(null)
			.appendField(Blockly.Msg.HUB_BUZZER_FREQUENCY);
		this.appendValueInput("delaytime")
			.setCheck(null)
			.appendField(Blockly.Msg.HUB_BUZZER_DELAYTIME);				
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setHelpUrl("https://zh.wikipedia.org/wiki/%E9%9F%B3%E9%AB%98");
		this.setColour(120);			
	}
};

Blockly.Blocks.hub8735bit_buzzer_tone1={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["    [0]","0"],
				["B 0 [31]","31"],
				["C 1 [33]","33"],
				["C# 1 [35]","35"],
				["D 1 [37]","37"],
				["D# 1 [39]","39"],
				["E 1 [41]","41"],
				["F 1 [44]","44"],
				["F# 1 [46]","46"],
				["G 1 [49]","49"],
				["G# 1 [52]","52"],
				["A 1 [55]","55"],
				["A# 1 [58]","58"],
				["B 1 [62]","62"],
				["C 2 [65]","65"],
				["C# 2 [69]","69"],
				["D 2 [73]","73"],
				["D# 2 [78]","78"],
				["E 2 [82]","82"],
				["F 2 [87]","87"],
				["F# 2 [93]","93"],
				["G 2 [98]","98"],
				["G# 2 [104]","104"],
				["A 2 [110]","110"],
				["A# 2 [117]","117"],				
				["B 2 [123]","123"],
				["C 3 [131]","131"],
				["C# 3 [139]","139"],
				["D 3 [147]","147"],
				["D# 3 [156]","156"],
				["E 3 [165]","165"],
				["F 3 [175]","175"],
				["F# 3 [185]","185"],
				["G 3 [196]","196"],
				["G# 3 [208]","208"],
				["A 3 [220]","220"],
				["A# 3 [233]","233"],
				["B 3 [247]","247"],
				["C 4 [262]","262"],
				["C# 4 [277]","277"],
				["D 4 [294]","294"],
				["D# 4 [311]","311"],
				["E 4 [330]","330"],
				["F 4 [349]","349"],
				["F# 4 [370]","370"],
				["G 4 [392]","392"],
				["G# 4 [415]","415"],
				["A 4 [440]","440"],
				["A# 4 [466]","466"],
				["B 4 [494]","494"],
				["C 5 [523]","523"],
				["C# 5 [554]","554"],
				["D 5 [587]","587"],
				["D# 5 [622]","622"],
				["E 5 [659]","659"],
				["F 5 [698]","698"],
				["F# 5 [740]","740"],
				["G 5 [784]","784"],
				["G# 5 [831]","831"],
				["A 5 [880]","880"],
				["A# 5 [932]","932"],
				["B 5 [988]","988"],			
				["C 6 [1047]","1047"],
				["C# 6 [1109]","1109"],
				["D 6 [1175]","1175"],
				["D# 6 [1245]","1245"],
				["E 6 [1319]","1319"],
				["F 6 [1397]","1397"],
				["F# 6 [1480]","1480"],
				["G 6 [1568]","1568"],
				["G# 6 [1661]","1661"],
				["A 6 [1760]","1760"],
				["A# 6 [1864]","1864"],
				["B 6 [1975]","1975"],
				["C 7 [2093]","2093"],
				["C# 7 [2218]","2218"],
				["D 7 [2349]","2349"],
				["D# 7 [2489]","2489"],
				["E 7 [2637]","2637"],
				["F 7 [2794]","2794"],
				["F# 7 [2960]","2960"],
				["G 7 [3136]","3136"],
				["G# 7 [3322]","3322"],
				["A 7 [3520]","3520"],
				["A# 7 [3729]","3729"],
				["B 7 [3951]","3951"],
				["C 8 [4186]","4186"],
				["C# 8 [4435]","4435"],
				["D 8 [4699]","4699"],
				["D# 8 [4978]","4978"],
				["E 8 [5274]","5274"],
				["F 8 [5588]","5588"],
				["F# 8 [5920]","5920"],
				["G 8 [6272]","6272"],
				["G# 8 [6645]","6645"],
				["A 8 [7040]","7040"],
				["A# 8 [7459]","7459"],
				["B 8 [7902]","7902"]				
			]),"frequency");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(120);			
	}
};

Blockly.Blocks.hub8735bit_buzzer_in={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_BUZZER_PIN);
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["    [0]","0"],
				["B 0 [31]","31"],
				["C 1 [33]","33"],
				["C# 1 [35]","35"],
				["D 1 [37]","37"],
				["D# 1 [39]","39"],
				["E 1 [41]","41"],
				["F 1 [44]","44"],
				["F# 1 [46]","46"],
				["G 1 [49]","49"],
				["G# 1 [52]","52"],
				["A 1 [55]","55"],
				["A# 1 [58]","58"],
				["B 1 [62]","62"],
				["C 2 [65]","65"],
				["C# 2 [69]","69"],
				["D 2 [73]","73"],
				["D# 2 [78]","78"],
				["E 2 [82]","82"],
				["F 2 [87]","87"],
				["F# 2 [93]","93"],
				["G 2 [98]","98"],
				["G# 2 [104]","104"],
				["A 2 [110]","110"],
				["A# 2 [117]","117"],				
				["B 2 [123]","123"],
				["C 3 [131]","131"],
				["C# 3 [139]","139"],
				["D 3 [147]","147"],
				["D# 3 [156]","156"],
				["E 3 [165]","165"],
				["F 3 [175]","175"],
				["F# 3 [185]","185"],
				["G 3 [196]","196"],
				["G# 3 [208]","208"],
				["A 3 [220]","220"],
				["A# 3 [233]","233"],
				["B 3 [247]","247"],
				["C 4 [262]","262"],
				["C# 4 [277]","277"],
				["D 4 [294]","294"],
				["D# 4 [311]","311"],
				["E 4 [330]","330"],
				["F 4 [349]","349"],
				["F# 4 [370]","370"],
				["G 4 [392]","392"],
				["G# 4 [415]","415"],
				["A 4 [440]","440"],
				["A# 4 [466]","466"],
				["B 4 [494]","494"],
				["C 5 [523]","523"],
				["C# 5 [554]","554"],
				["D 5 [587]","587"],
				["D# 5 [622]","622"],
				["E 5 [659]","659"],
				["F 5 [698]","698"],
				["F# 5 [740]","740"],
				["G 5 [784]","784"],
				["G# 5 [831]","831"],
				["A 5 [880]","880"],
				["A# 5 [932]","932"],
				["B 5 [988]","988"],			
				["C 6 [1047]","1047"],
				["C# 6 [1109]","1109"],
				["D 6 [1175]","1175"],
				["D# 6 [1245]","1245"],
				["E 6 [1319]","1319"],
				["F 6 [1397]","1397"],
				["F# 6 [1480]","1480"],
				["G 6 [1568]","1568"],
				["G# 6 [1661]","1661"],
				["A 6 [1760]","1760"],
				["A# 6 [1864]","1864"],
				["B 6 [1975]","1975"],
				["C 7 [2093]","2093"],
				["C# 7 [2218]","2218"],
				["D 7 [2349]","2349"],
				["D# 7 [2489]","2489"],
				["E 7 [2637]","2637"],
				["F 7 [2794]","2794"],
				["F# 7 [2960]","2960"],
				["G 7 [3136]","3136"],
				["G# 7 [3322]","3322"],
				["A 7 [3520]","3520"],
				["A# 7 [3729]","3729"],
				["B 7 [3951]","3951"],
				["C 8 [4186]","4186"],
				["C# 8 [4435]","4435"],
				["D 8 [4699]","4699"],
				["D# 8 [4978]","4978"],
				["E 8 [5274]","5274"],
				["F 8 [5588]","5588"],
				["F# 8 [5920]","5920"],
				["G 8 [6272]","6272"],
				["G# 8 [6645]","6645"],
				["A 8 [7040]","7040"],
				["A# 8 [7459]","7459"],
				["B 8 [7902]","7902"]				
			]),"frequency");
		this.appendValueInput("delaytime")
			.setCheck(null)
			.appendField(Blockly.Msg.HUB_BUZZER_DELAYTIME);
				
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(120);			
	}
};

Blockly.Blocks.hub8735bit_buzzer_in1={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_BUZZER_PIN);
		this.appendValueInput("frequency")
			.setCheck(null)
			.appendField(Blockly.Msg.HUB_BUZZER_FREQUENCY);
		this.appendValueInput("delaytime")
			.setCheck(null)
			.appendField(Blockly.Msg.HUB_BUZZER_DELAYTIME);				
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setHelpUrl("https://zh.wikipedia.org/wiki/%E9%9F%B3%E9%AB%98");
		this.setColour(120);			
	}
};




Blockly.Blocks['amb82_mini_rtp_audio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])	
        .appendField(Blockly.Msg["AMB82_MINI_RTP_AUDIO"]);			
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_14"]);			
  }
};

Blockly.Blocks['amb82_mini_video_qrcode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])	
        .appendField(Blockly.Msg["AMB82_MINI_VIDEO_QRCODE"]);			
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(Blockly.Msg["HUE_18"]);		
  }
};

Blockly.Blocks['amb82_mini_video_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])	
        .appendField(Blockly.Msg["AMB82_MINI_VIDEO_INITIAL"]);		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_VIDEO_RESOLUTION"])	
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			["FHD (1920¡ó1080)","VIDEO_FHD"],
			["HD (1280¡ó720)","VIDEO_HD"],
			["D1 (720¡ó480)","VIDEO_D1"],
			["VGA (640¡ó480)","VIDEO_VGA"],
			["WVGA (640¡ó360)","VIDEO_WVGA"],
			["QVGA (320¡ó240)","VIDEO_QVGA"],
			["QCIF (176¡ó144)","VIDEO_QCIF"],
			[Blockly.Msg["AMB82_MINI_VIDEO_RESOLUTION_CUSTOM"],"VIDEO_CUSTOM"]
		], this.validate), "resolution");
	this.appendValueInput("width")
		.setCheck("Number")
		.appendField(Blockly.Msg["WIDTH"]);
	this.appendValueInput("height")
		.setCheck("Number")
		.appendField(Blockly.Msg["HEIGHT"]);
    this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI_VIDEO_SETTINGS_ROTATION"])
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			["0", "0"],
			["90", "1"],
			["180", "3"],		
			["270", "2"]
		]), "rotation");	  
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_12"]);		
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="VIDEO_CUSTOM") {
			block.getInput("width").setVisible(true);
			block.getInput("height").setVisible(true);
		} else {
			block.getInput("width").setVisible(false);
			block.getInput("height").setVisible(false);		
		}
  }
};

Blockly.Blocks['amb82_mini_video_settings'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_VIDEO_SETTINGS"]);		
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_VIDEO_SETBRIGHTNESS"], "setBrightness"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETCONTRAST"], "setContrast"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETSATURATION"], "setSaturation"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETSHARPNESS"], "setSharpness"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETLDC"], "setLDC"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETWDR"], "setWDR"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETWDRLEVEL"], "setWDRLevel"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETEXPOSUREMODE"], "setExposureMode"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETEXPOSURETIME"], "setExposureTime"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETAEGAIN"], "setAEGain"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETPOWERLINEFREQ"], "setPowerLineFreq"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETAWB"], "setAWB"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETREDBALANCE"], "setRedBalance"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETBLUEBALANCE"], "setBlueBalance"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETGRAYMODE"], "setGrayMode"],
			[Blockly.Msg["AMB82_MINI_VIDEO_SETDAYNIGHTMODE"], "setDayNightMode"],
			[Blockly.Msg["AMB82_MINI_VIDEO_RESET"], "reset"]
		], this.validate), "setting");
    this.appendValueInput("val")
        .appendField(Blockly.Msg["AMB82_MINI_VIDEO_SETTINGS_VALUE"])	
		.setAlign(Blockly.ALIGN_RIGHT);	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://www.amebaiot.com/zh/amebapro2-arduino-multimedia-isp-control/");	
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="reset") {
			block.getInput("val").setVisible(false);
		} else {
			block.getInput("val").setVisible(true);	
		}	
  }
};
/*
  AE          Set Auto Exposure, 0: Manual, 1: Auto
  AE           Get value of Auto Exposure
  EXPTIME     Set Exposure Time: Max: 33333us
  EXPTIME      Get Exposure Time
  GAIN        Set AE Gain: Range from 256 to 32768
  GAIN         Get AE Gain
  PLF         Set Power Line Frequency, 0: Disabled, 1: 50Hz, 2: 60Hz, 3: Auto
  PLF          Get value of Power Line Frequency
  BRIGHTNESS  Set Brightness: Range from -64 to 64
  BRIGHTNESS   Get Brightness level
  CONTRAST    Set Contrast: Range from 0 to 100
  CONTRAST     Get Contrast level
  SATURATION  Set Contrast: Range from 0 to 100
  SATURATION   Get Contrast level
  SHARPNESS   Set Sharpness: Range from 0 to 100
  SHARPNESS    Get Sharpness level
  LDC         Len Distortion Correction: 0: Disabled, 1: Enabled
  LDC          Get value of Len Distortion Correction
  DAYNIGHT  	Set Day/Night Mode: 0: Day, 1: Night
  DAYNIGHT   	Get value of DayNight Mode to determine whether is day or night mode
  GRAY      	Set Gray Mode:  0: Color Mode, 1: Gray Mode
  GRAY       	Get value of Gray Mode to determine whether if it is gray mode
  AWB         Set Auto White Balance, 0:Manual, 1: Auto
  AWB          Get value of Auto White Balance
  RED         Set Red balance gain: Range from 256 to 2047
  RED          Get Red balance gain
  BLUE        Set Blue balance gain: Range from 256 to 2047
  BLUE         Get Blue balance gain
  WBTEMP       Get White Balance Temperature
  WDR       	Set Wide Dynamic Range, 0: Disabled, 1: Manual, 2: Auto
  WDR        	Get value of WDR
  LEVEL     	Set WDR level: Range from 0 to 100
  LEVEL      	Get WDR level
  RESET      	Reset to default
 */

Blockly.Blocks['amb82_mini_video_settings_bitrate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_VIDEO_SETTINGS_BITRATE"]);
    this.appendValueInput("val")
        .appendField(Blockly.Msg["AMB82_MINI_VIDEO_SETTINGS_VALUE"])	
		.setAlign(Blockly.ALIGN_RIGHT);	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_12"]);	
  }
};

Blockly.Blocks['amb82_mini_video_getstill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_VIDEO_GETSTILL"]);	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_7"]);	
  }
};

Blockly.Blocks['amb82_mini_video_tcp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_TCPSTREAM"]);	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_17"]);	
  }
};

Blockly.Blocks['amb82_mini_video_capture_sd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])	
        .appendField(Blockly.Msg["AMB82_MINI_VIDEO_CAPTURE_SD"]);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["VIDEO_BASE64_ORIGIN"])		
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_STILL_NEW"],"1"],		
			[Blockly.Msg["AMB82_MINI_STILL_OLD"],"0"]
		]), "origin");			
    this.appendValueInput("filename")
        .appendField(Blockly.Msg["AMB82_MINI_FILENAME"]+"(.mp4)")	
		.setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(".jpg");		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_12"]);		
  }
};

Blockly.Blocks['fu_mqtt_sendimage'] = {
  init: function() {
    this.appendValueInput("topic")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField("MQTT")
		.appendField(Blockly.Msg["MQTT_FU_TO_TOPIC"]);
    this.appendDummyInput()	
		.appendField(Blockly.Msg["MQTT_FU_PUBLISH_IMAGE"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			["HUB-8735_ultra","HUB-8735_ultra"],
			["AmebaPro2","AMB82-MINI"]
		], this.validate), "board");
    this.appendDummyInput("source")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["VIDEO_BASE64_ORIGIN"])		
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_STILL_NEW"],"1"],		
			[Blockly.Msg["AMB82_MINI_STILL_OLD"],"0"]
		]), "source");				
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="AMB82-MINI") {
			block.getInput("source").setVisible(true);
		} else {
			block.getInput("source").setVisible(false);			
		}
  }
};

Blockly.Blocks['amb82_mini_spreadsheet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_SPREADSHEET"]);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["VIDEO_BASE64_ORIGIN"])		
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_STILL_NEW"],"1"],		
			[Blockly.Msg["AMB82_MINI_STILL_OLD"],"0"]
		]), "source");	
	this.appendDummyInput()  
		.appendField(Blockly.Msg.VIDEO_BASE64_FORMAT)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["ESP32_CAM_SPREADSHEET_BASE64_SHOW"],"base64"], 
			[Blockly.Msg["ESP32_CAM_SPREADSHEET_LINK_SHOW"],"link"], 
			[Blockly.Msg["ESP32_CAM_SPREADSHEET_IMAGE_SHOW"],"jpg"]
		]), "format");		
	this.appendValueInput("spreadsheeturl")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETURL);
	this.appendValueInput("spreadsheetname")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETNAME);
	this.appendDummyInput()  
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["CONTROLS_SPREADSHEET_INSERT"])
		.appendField(new Blockly.FieldDropdown([
			["",""],		
			["A("+Blockly.Msg["CONTROLS_SPREADSHEET_DATE"]+"),B("+Blockly.Msg["CONTROLS_SPREADSHEET_TIME"]+")","gmt_datetime"],
			["A("+Blockly.Msg["CONTROLS_SPREADSHEET_DATE"]+")","gmt_date"],
			["A("+Blockly.Msg["CONTROLS_SPREADSHEET_TIME"]+")","gmt_time"]	
		]), "datetime");
	this.appendDummyInput() 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_CAM_SPREADSHEET_ROW_SHOW)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.ESP32_CAM_SPREADSHEET_CUSTOMROW_SHOW,"custom"],
			[Blockly.Msg.ESP32_CAM_SPREADSHEET_INSERTFIRSTROW_SHOW,"insertfirst"],
			[Blockly.Msg.ESP32_CAM_SPREADSHEET_INSERTSECONDROW_SHOW,"insertsecond"],
			[Blockly.Msg.ESP32_CAM_SPREADSHEET_INSERTLASTROW_SHOW,"insertlast"]	
	], this.validate), "position");		
	this.appendValueInput("row")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_ROW);		
	this.appendValueInput("column")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_COLUMN);		
	this.appendValueInput("spreadsheet_script")
		.setCheck("String")	  
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL);
	//this.getInput("spreadsheet_script").setVisible(false);		
	this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/SendCapturedImageToSpreadsheet_base64_doPost.gs");
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (newValue=="custom") {
		 block.getInput("row").setVisible(true);
	 }
	 else {
		 block.getInput("row").setVisible(false);	 
	 }	 
  }
};

Blockly.Blocks['amb82_mini_googledrive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_GOOGLEDRIVE"]);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["VIDEO_BASE64_ORIGIN"])		
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_STILL_NEW"],"1"],		
			[Blockly.Msg["AMB82_MINI_STILL_OLD"],"0"]
		]), "source");				
    this.appendValueInput("scriptid")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_SCRIPTID_SHOW);		
    this.appendValueInput("foldername")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_FOLDERNAME_SHOW);		
    this.appendValueInput("filename")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_FILENAME_SHOW);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			["LineBot","bot"]
		]), "linetype");			
    this.appendValueInput("linetoken")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_LINETOKEN_SHOW);
	this.appendValueInput("lineuserid")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_LINE_USERID_SHOW);	
	this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/SendCapturedImageToGoogleDriveAndLinenotify_doPost.gs");
  }
};

Blockly.Blocks['amb82_mini_openai_vision'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OPENAI_VISION"]);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["VIDEO_BASE64_ORIGIN"])		
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_STILL_NEW"],"1"],		
			[Blockly.Msg["AMB82_MINI_STILL_OLD"],"0"]
		]), "source");				
    this.appendValueInput("key")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_OPENAI_KEY"]);		
    this.appendValueInput("message")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_OPENAI_MESSAGE"]);			
	this.setInputsInline(false);
    this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://platform.openai.com/docs/guides/vision");	
  }
};

Blockly.Blocks['amb82_mini_gemini_vision'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_GEMINI_VISION"]);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["VIDEO_BASE64_ORIGIN"])		
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_STILL_NEW"],"1"],		
			[Blockly.Msg["AMB82_MINI_STILL_OLD"],"0"]
		]), "source");			
    this.appendValueInput("key")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_GEMINI_KEY"]);		
    this.appendValueInput("message")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_GEMINI_MESSAGE"]);			
	this.setInputsInline(false);
    this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://ai.google.dev/gemini-api/docs/vision");	
  }
};

Blockly.Blocks['amb82_mini_custom_vision'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_CUSTOM_VISION"]);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["VIDEO_BASE64_ORIGIN"])		
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_STILL_NEW"],"1"],		
			[Blockly.Msg["AMB82_MINI_STILL_OLD"],"0"]
		]), "source");
    this.appendValueInput("domain")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_CUSTOM_DOMAIN"]);
    this.appendValueInput("path")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_CUSTOM_PATH"]);		
    this.appendValueInput("model")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_CUSTOM_MODEL"]);		
    this.appendValueInput("key")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_CUSTOM_KEY"]);		
    this.appendValueInput("message")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_CUSTOM_MESSAGE"]);			
	this.setInputsInline(false);
    this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://console.groq.com/docs/overview");
  }
};

Blockly.Blocks['amb82_mini_linenotify'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_LINENOTIFY"]);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["VIDEO_BASE64_ORIGIN"])		
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_STILL_NEW"],"1"],		
			[Blockly.Msg["AMB82_MINI_STILL_OLD"],"0"]
		]), "source");			
    this.appendValueInput("linetoken")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_LINETOKEN_SHOW);
    this.appendValueInput("linemessage")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_LINEMESSAGE_SHOW);			
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['amb82_mini_telegram'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_TELEGRAMBOT"]);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["VIDEO_BASE64_ORIGIN"])		
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_STILL_NEW"],"1"],		
			[Blockly.Msg["AMB82_MINI_STILL_OLD"],"0"]
		]), "source");			
    this.appendValueInput("token")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_TOKEN_SHOW);
    this.appendValueInput("chatid")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_CHATID_SHOW);			
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_12"]);
  }
};


Blockly.Blocks['amb82_mini_rtsp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_RTSP_INITIAL"]);		
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_VIDEOONLY"],"VideoOnly"],		
			[Blockly.Msg["AMB82_MINI_DOUBLEVIDEO"],"DoubleVideo"],
			[Blockly.Msg["AMB82_MINI_SINGLEVIDEOWITHAUDIO"],"SingleVideoWithAudio"],
			[Blockly.Msg["AMB82_MINI_DOUBLEVIDEOWITHAUDIO"],"DoubleVideoWithAudio"],
			[Blockly.Msg["AMB82_MINI_V7RC"],"V7RC"],
			[Blockly.Msg["AMB82_MINI_AUDIO"],"AudioOnly"]
		], this.validate), "type");		
    this.appendDummyInput("cha")
        .appendField(Blockly.Msg["AMB82_MINI_CHANNEL"])	
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_1920X1080_30FPS_H264"],"0"],		
			[Blockly.Msg["AMB82_MINI_1280X720_30FPS_H264"],"1"],
			[Blockly.Msg["AMB82_MINI_1280X720_30FPS_MJPEG"],"2"]
		]), "channel");	
    this.appendDummyInput("aud")
        .appendField(Blockly.Msg["AMB82_MINI_AUDIO"])	
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_8KHZ_MONO_ANALOG_MIC"],"0"],		
			[Blockly.Msg["AMB82_MINI_16KHZ_MONO_ANALOG_MIC"],"1"],
			[Blockly.Msg["AMB82_MINI_8KHZ_MONO_DIGITAL_PDM_MIC"],"2"],
			[Blockly.Msg["AMB82_MINI_16KHZ_MONO_DIGITAL_PDM_MIC"],"3"]
		]), "audio");
    this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI_VIDEO_SETTINGS_ROTATION"])
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			["0", "0"],
			["90", "1"],
			["180", "3"],		
			["270", "2"]
		]), "rotation");
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="SingleVideoWithAudio"||newValue=="DoubleVideoWithAudio"||newValue=="AudioOnly") {
			block.getInput("aud").setVisible(true);
			block.getField("audio").setValue("3");
		} else {
			block.getInput("aud").setVisible(false);	
		}
		if (newValue=="DoubleVideoWithAudio"||newValue=="AudioOnly") {
			block.getInput("cha").setVisible(false);
		} else {
			block.getInput("cha").setVisible(true);	
		}		
  }
};

Blockly.Blocks['amb82_mini_stream_url'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_STILL_URL"],"/?getstill"],
			[Blockly.Msg["AMB82_MINI_STREAM_URL"],":81/?stream"]
		]), "type");		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['amb82_mini_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])	
        .appendField(Blockly.Msg["AMB82_MINI_INITIAL"]);		
    this.appendValueInput("ssid")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
    this.appendValueInput("ssid_ap")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_AP_SHOW);
    this.appendValueInput("password_ap")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_AP_SHOW);		
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");	
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			//["2K (2560¡ó1440)","VIDEO_2K"],
			//["5M (2448¡ó2050)","VIDEO_5M"], 
			//["3M (2048¡ó1536)","VIDEO_3M"],
			["FHD (1920¡ó1080)","VIDEO_FHD"],
			["HD (1280¡ó720)","VIDEO_HD"],
			["D1 (720¡ó480)","VIDEO_D1"],
			["VGA (640¡ó480)","VIDEO_VGA"],
			["WVGA (640¡ó360)","VIDEO_WVGA"],
			["QVGA (320¡ó240)","VIDEO_QVGA"],
			["QCIF (176¡ó144)","VIDEO_QCIF"],
			[Blockly.Msg["AMB82_MINI_VIDEO_RESOLUTION_CUSTOM"],"VIDEO_CUSTOM"]
		], this.validate), "framesize");
	this.appendValueInput("width")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("Number")
		.appendField(Blockly.Msg["WIDTH"]);
	this.appendValueInput("height")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("Number")	
		.appendField(Blockly.Msg["HEIGHT"]);
    this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI_VIDEO_SETTINGS_ROTATION"])
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			["0", "0"],
			["90", "1"],
			["180", "3"],		
			["270", "2"]
		]), "rotation");		
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="VIDEO_CUSTOM") {
			block.getInput("width").setVisible(true);
			block.getInput("height").setVisible(true);
		} else {
			block.getInput("width").setVisible(false);
			block.getInput("height").setVisible(false);		
		}
  }
};

Blockly.Blocks['amb82_mini_stream'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])	
        .appendField(Blockly.Msg["AMB82_MINI_INITIAL"])
		.appendField(Blockly.Msg["ESP32_CAM_SERVERMODULE_STREAM_SHOW"]);		
    this.appendValueInput("ssid")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
    this.appendValueInput("ssid_ap")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_AP_SHOW);
    this.appendValueInput("password_ap")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_AP_SHOW);		
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");	
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			//["2K (2560¡ó1440)","VIDEO_2K"],
			//["5M (2448¡ó2050)","VIDEO_5M"], 
			//["3M (2048¡ó1536)","VIDEO_3M"],
			["FHD (1920¡ó1080)","VIDEO_FHD"],
			["HD (1280¡ó720)","VIDEO_HD"],
			["D1 (720¡ó480)","VIDEO_D1"],
			["VGA (640¡ó480)","VIDEO_VGA"],
			["WVGA (640¡ó360)","VIDEO_WVGA"],
			["QVGA (320¡ó240)","VIDEO_QVGA"],
			["QCIF (176¡ó144)","VIDEO_QCIF"],
			[Blockly.Msg["AMB82_MINI_VIDEO_RESOLUTION_CUSTOM"],"VIDEO_CUSTOM"]
		], this.validate), "framesize");
	this.appendValueInput("width")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("Number")
		.appendField(Blockly.Msg["WIDTH"]);
	this.appendValueInput("height")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("Number")	
		.appendField(Blockly.Msg["HEIGHT"]);
    this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI_VIDEO_SETTINGS_ROTATION"])
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			["0", "0"],
			["90", "1"],
			["180", "3"],		
			["270", "2"]
		]), "rotation");		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="VIDEO_CUSTOM") {
			block.getInput("width").setVisible(true);
			block.getInput("height").setVisible(true);
		} else {
			block.getInput("width").setVisible(false);
			block.getInput("height").setVisible(false);		
		}
  }
};

Blockly.Blocks['amb82_mini_mp4_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_MP4"])
        .appendField(Blockly.Msg["AMB82_MINI_MP4_INITIAL"]);		
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_VIDEOONLY"],"VideoOnly"],
			[Blockly.Msg["AMB82_MINI_SINGLEVIDEOWITHAUDIO"],"SingleVideoWithAudio"],
			[Blockly.Msg["AMB82_MINI_AUDIO"],"AudioOnly"]
		], this.validate), "type");		
    this.appendDummyInput("cha")
        .appendField(Blockly.Msg["AMB82_MINI_CHANNEL"])	
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_1920X1080_30FPS_H264"],"0"],		
			[Blockly.Msg["AMB82_MINI_1280X720_30FPS_H264"],"1"]
		]), "channel");	
    this.appendDummyInput("aud")
        .appendField(Blockly.Msg["AMB82_MINI_AUDIO"])	
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_8KHZ_MONO_ANALOG_MIC"],"0"],		
			[Blockly.Msg["AMB82_MINI_16KHZ_MONO_ANALOG_MIC"],"1"],
			[Blockly.Msg["AMB82_MINI_8KHZ_MONO_DIGITAL_PDM_MIC"],"2"],
			[Blockly.Msg["AMB82_MINI_16KHZ_MONO_DIGITAL_PDM_MIC"],"3"]
		]), "audio");
    this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI_VIDEO_SETTINGS_ROTATION"])
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			["0", "0"],
			["90", "1"],
			["180", "3"],		
			["270", "2"]
		]), "rotation");
    this.appendValueInput("filename")
        .appendField(Blockly.Msg["AMB82_MINI_FILENAME"]+"(.mp4)")	
		.setAlign(Blockly.ALIGN_RIGHT);	
    this.appendValueInput("fileduration")
        .appendField(Blockly.Msg["AMB82_MINI_FILEDURATION"])	
		.setAlign(Blockly.ALIGN_RIGHT);	
    this.appendValueInput("filecount")
        .appendField(Blockly.Msg["AMB82_MINI_FILECOUNT"])	
		.setAlign(Blockly.ALIGN_RIGHT);
	this.appendStatementInput("waiting")
		.appendField(Blockly.Msg["AMB82_MINI_MP4_WAITING"]);		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_10"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		
		if (newValue=="SingleVideoWithAudio"||newValue=="DoubleVideoWithAudio"||newValue=="AudioOnly") {
			block.getInput("aud").setVisible(true);
			block.getField("audio").setValue("3");
		} else {
			block.getInput("aud").setVisible(false);	
		}
		
		if (newValue=="DoubleVideoWithAudio"||newValue=="AudioOnly") {
			block.getInput("cha").setVisible(false);
		} else {
			block.getInput("cha").setVisible(true);	
		}		
  }
  
};

Blockly.Blocks['amb82_mini_mp4_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])	
        .appendField(Blockly.Msg["AMB82_MINI_MP4"]);	
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_MP4_BEGIN"],"begin"],		
			[Blockly.Msg["AMB82_MINI_MP4_END"],"end"]
		]), "state");		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_10"]);		
  }
};

Blockly.Blocks['amb82_mini_mp4_getstate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI"])	
        .appendField(Blockly.Msg["AMB82_MINI_MP4"])
		.appendField(Blockly.Msg["AMB82_MINI_MP4_STATE"]);			
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(Blockly.Msg["HUE_10"]);	
  }
};

Blockly.Blocks['amb82_mini_sd_initial'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_SD_INITIAL"]);	
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg["AMB82_MINI_SD_BEGIN"],"begin"],		
		  [Blockly.Msg["AMB82_MINI_SD_END"],"end"]
		]), "type");			
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_29"]);	
  }
};

Blockly.Blocks['amb82_mini_sd_folder'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_SD_FOLDER"]);		
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg["AMB82_MINI_FOLDER_OPEN"],"open"],		
		  [Blockly.Msg["AMB82_MINI_FOLDER_CREATE"],"create"],		
		  [Blockly.Msg["AMB82_MINI_FOLDER_ROOT"],"root"]
		], this.validate), "type");
	this.appendValueInput("foldername")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("String");	
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_29"]);	
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="root") {
			block.getInput("foldername").setVisible(false);		
		} else {
			block.getInput("foldername").setVisible(true);			
		}
  }
};

Blockly.Blocks['amb82_mini_folder'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_FOLDER"]);		
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg["AMB82_MINI_FOLDER_OPEN"],"open"],		
		  [Blockly.Msg["AMB82_MINI_FOLDER_CREATE"],"create"],		
		  [Blockly.Msg["AMB82_MINI_FOLDER_ROOT"],"root"]
		], this.validate), "type");
	this.appendValueInput("foldername")
		.setCheck("String");
    this.appendStatementInput("statement")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["AMB82_MINI_FOLDER_EXECUTE"]);		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_29"]);	
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="root") {
			block.getInput("foldername").setVisible(false);		
		} else {
			block.getInput("foldername").setVisible(true);			
		}
  }
};

Blockly.Blocks['amb82_mini_file_open'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"]);
	this.appendValueInput("filename")
		.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["AMB82_MINI_FILE_OPEN"]);	
    this.appendStatementInput("statement")
        .setCheck(null)
		.appendField(Blockly.Msg["AMB82_MINI_FILE_EXECUTE"]);		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_29"]);	
  }
};

Blockly.Blocks['amb82_mini_file_remove'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_FILEREMOVE"]);
	this.appendValueInput("filename")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FILE_NAME"]);		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_29"]);	
  }
};

Blockly.Blocks['amb82_mini_file_write'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"]);
	this.appendValueInput("content")
		.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["AMB82_MINI_FILE_WRITE"]);		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_29"]);	
  }
};

Blockly.Blocks['amb82_mini_file_read'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_FILE_READ"]);
    this.appendValueInput("buf")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FILE_READ_SIZE"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_29"]);	
  }
};

Blockly.Blocks['amb82_mini_file_read_char'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_FILE_READ_CHAR"]);
    this.appendStatementInput("statement")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_28"]);		
  }
};

Blockly.Blocks['amb82_mini_file_read_char_get'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_FILE_READ_CHAR_GET"]);	
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_28"]);	
  }
};

Blockly.Blocks['amb82_mini_file_play'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_PLAY"]); 
	this.appendValueInput("filename_")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FILE_NAME"]);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			[".mp3","MP3"]
		]), "type_");	
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_VOLUME"])	
		.appendField(new Blockly.FieldDropdown([
			["10","10"],
			["20","20"],
			["30","30"],
			["40","40"],
			["50","50"],
			["60","60"],
			["70","70"],
			["80","80"],
			["90","90"],
			["100","100"],
			["110","110"],
			["120","120"],
			["130","130"],
			["140","140"],
			["150","150"],
			["160","160"],
			["170","170"]		
		]), "volume_");
    this.appendDummyInput()
	    .appendField("(dB)");
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(Blockly.Msg["HUE_28"]);
  }
};

Blockly.Blocks['amb82_mini_file_googletts'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_GOOGLETTS"]);
	this.appendValueInput("message_")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_GOOGLETTS_TEXT"]);	  
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg["AMB82_MINI_GOOGLETTS_SPEED"])
		.appendField(new Blockly.FieldDropdown([
				["1","1"],
				["0.9","0.9"],
				["0.8","0.8"],
				["0.7","0.7"],
				["0.6","0.6"],	  
				["0.5","0.5"],
				["0.4","0.4"],
				["0.3","0.3"],
				["0.2","0.2"],
				["0.1","0.1"],	
				["0","0"]	   
		]), "speed_");		
	this.appendDummyInput()
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["AMB82_MINI_GOOGLETTS_LANGUAGE"])
		  .appendField(new Blockly.FieldDropdown([
				["Afrikaans","af"],
				["Albanian","sq"],
				["Amharic","am"],
				["Arabic","ar"],
				["Armenian","hy"],
				["Azerbaijani","az"],
				["Basque","eu"],
				["Belarusian","be"],
				["Bengali","bn"],
				["Bihari","bh"],
				["Bosnian","bs"],
				["Breton","br"],
				["Bulgarian","bg"],
				["Cambodian","km"],
				["Catalan","ca"],
				["Chinese (Simplified)","zh-CN"],
				["Chinese (Traditional)","zh-TW"],
				["Corsican","co"],
				["Croatian","hr"],
				["Czech","cs"],
				["Danish","da"],
				["Dutch","nl"],
				["English","en"],
				["Esperanto","eo"],
				["Estonian","et"],
				["Faroese","fo"],
				["Filipino","tl"],
				["Finnish","fi"],
				["French","fr"],
				["Frisian","fy"],
				["Galician","gl"],
				["Georgian","ka"],
				["German","de"],
				["Greek","el"],
				["Guarani","gn"],
				["Gujarati","gu"],
				["Hausa","ha"],
				["Hebrew","iw"],
				["Hindi","hi"],
				["Hungarian","hu"],
				["Icelandic","is"],
				["Indonesian","id"],
				["Interlingua","ia"],
				["Irish","ga"],
				["Italian","it"],
				["Japanese","ja"],
				["Javanese","jw"],
				["Kannada","kn"],
				["Kazakh","kk"],
				["Kinyarwanda","rw"],
				["Kirundi","rn"],
				["Korean","ko"],
				["Kurdish","ku"],
				["Kyrgyz","ky"],
				["Laothian","lo"],
				["Latin","la"],
				["Latvian","lv"],
				["Lingala","ln"],
				["Lithuanian","lt"],
				["Macedonian","mk"],
				["Malagasy","mg"],
				["Malay","ms"],
				["Malayalam","ml"],
				["Maltese","mt"],
				["Maori","mi"],
				["Marathi","mr"],
				["Moldavian","mo"],
				["Mongolian","mn"],
				["Montenegrin","sr-ME"],
				["Nepali","ne"],
				["Norwegian","no"],
				["Norwegian (Nynorsk)","nn"],
				["Occitan","oc"],
				["Oriya","or"],
				["Oromo","om"],
				["Pashto","ps"],
				["Persian","fa"],
				["Polish","pl"],
				["Portuguese (Brazil)","pt-BR"],
				["Portuguese (Portugal)","pt-PT"],
				["Punjabi","pa"],
				["Quechua","qu"],
				["Romanian","ro"],
				["Romansh","rm"],
				["Russian","ru"],
				["Scots Gaelic","gd"],
				["Serbian","sr"],
				["Serbo-Croatian","sh"],
				["Sesotho","st"],
				["Shona","sn"],
				["Sindhi","sd"],
				["Sinhalese","si"],
				["Slovak","sk"],
				["Slovenian","sl"],
				["Somali","so"],
				["Spanish","es"],
				["Sundanese","su"],
				["Swahili","sw"],
				["Swedish","sv"],
				["Tajik","tg"],
				["Tamil","ta"],
				["Tatar","tt"],
				["Telugu","te"],
				["Thai","th"],
				["Tigrinya","ti"],
				["Tonga","to"],
				["Turkish","tr"],
				["Turkmen","tk"],
				["Twi","tw"],
				["Uighur","ug"],
				["Ukrainian","uk"],
				["Urdu","ur"],
				["Uzbek","uz"],
				["Vietnamese","vi"],
				["Welsh","cy"],
				["Xhosa","xh"],
				["Yiddish","yi"],
				["Yoruba","yo"],
				["Zulu","zu"]
			]), "language_");
	this.appendValueInput("filename_")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FILE_NAME"]+"(.mp3)");	  
	this.setInputsInline(false);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(Blockly.Msg["HUE_28"]);
  }
};

Blockly.Blocks['amb82_mini_file_openai_whisper'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OPENAI_WHISPER"]);
    this.appendValueInput("key_")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_OPENAI_KEY"]);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
		.appendField(new Blockly.FieldDropdown([
			["whisper-1","whisper-1"],
			["gpt-4o-mini-transcribe","gpt-4o-mini-transcribe"],
			["gpt-4o-transcribe","gpt-4o-transcribe"]
		]), "model_");			
	this.appendValueInput("filename_")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FILE_NAME"]);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			["MP4 (audio/mp4)","audio/mp4"],
			["MP3 (audio/mp3)","audio/mp3"],
			["MPA (audio/m4a)","audio/m4a"],
			["MPEG (audio/mpeg)","audio/mpeg"],
			["MPGA (audio/mpga)","audio/mpga"],
			["WAV (audio/wav)","audio/wav"],
			["WEBM (audio/webm)","audio/webm"]
		]), "mimetype_");	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(Blockly.Msg["HUE_28"]);
  }
};

Blockly.Blocks['amb82_mini_file_groq_whisper'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_GROQ_WHISPER"]);
    this.appendValueInput("key_")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_GROQ_KEY"]);			
	this.appendValueInput("filename_")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FILE_NAME"]);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			["MP4 (audio/mp4)","audio/mp4"],
			["MP3 (audio/mp3)","audio/mp3"],
			["MPA (audio/m4a)","audio/m4a"],
			["MPEG (audio/mpeg)","audio/mpeg"],
			["MPGA (audio/mpga)","audio/mpga"],
			["WAV (audio/wav)","audio/wav"],
			["WEBM (audio/webm)","audio/webm"]
		]), "mimetype_");		
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(Blockly.Msg["HUE_28"]);
  }
};

Blockly.Blocks['amb82_mini_file_gemini_stt'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_GEMINI_STT"]);
    this.appendValueInput("key_")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_GEMINI_KEY"]);	
    this.appendValueInput("message_")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_GEMINI_MESSAGE"]);		
	this.appendValueInput("filename_")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FILE_NAME"]);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			["MP4 (audio/mp4)","audio/mp4"],		
			["AAC (audio/aac)","audio/aac"],
			["FLAC (audio/flac)","audio/flac"],
			["MP3 (audio/mp3)","audio/mp3"],
			["MPA (audio/m4a)","audio/m4a"],
			["MPEG (audio/mpeg)","audio/mpeg"],
			["MPGA (audio/mpga)","audio/mpga"],
			["OPUS (audio/opus)","audio/opus"],
			["PCM (audio/pcm)","audio/pcm"],
			["WAV (audio/wav)","audio/wav"],
			["WEBM (audio/webm)","audio/webm"],
			["MP4 (video/mp4)","video/mp4"],			
			["FLV (video/x-flv)","video/x-flv"],
			["MOV (video/quicktime)","video/quicktime"],
			["MPEG (video/mpeg)","video/mpeg"],
			["MPEGS (video/mpegs)","video/mpegs"],
			["MPGS (video/mpgs)","video/mpgs"],
			["MPG (video/mpg)","video/mpg"],
			["WEBM (video/webm)","video/webm"],
			["WMV (video/wmv)","video/wmv"],
			["3GPP (video/3gpp)","video/3gpp"]
		]), "mimetype_");	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(Blockly.Msg["HUE_28"]);
  }
};

Blockly.Blocks['amb82_mini_folder_list'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_FOLDER_LIST"]);		
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg["AMB82_MINI_FOLDER_OPEN"],"open"],		
		  [Blockly.Msg["AMB82_MINI_FOLDER_ROOT"],"root"]
		], this.validate), "type");
	this.appendValueInput("foldername")
		.setCheck("String");		
    this.appendStatementInput("statement")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FILE_ATTRIBUTE_LIST"]);		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_27"]);	
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="root") {
			block.getInput("foldername").setVisible(false);		
		} else {
			block.getInput("foldername").setVisible(true);			
		}
  }
};

Blockly.Blocks['amb82_mini_folder_list_attribute'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
		.appendField(Blockly.Msg["AMB82_MINI_FOLDER_LIST"]);	
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg["AMB82_MINI_FILE_ATTRIBUTE_DIR"],"dir"],		
		  [Blockly.Msg["AMB82_MINI_FILE_ATTRIBUTE_FILE"],"file"],		
		  [Blockly.Msg["AMB82_MINI_FILE_ATTRIBUTE_NAME"],"filename"],		
		  [Blockly.Msg["AMB82_MINI_FILE_ATTRIBUTE_FILEPATH"],"filepath"],		
		  [Blockly.Msg["AMB82_MINI_FILE_ATTRIBUTE_DIRPATH"],"dirpath"]
		]), "type");
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_27"]);	
  }
};

Blockly.Blocks['amb82_mini_usb_uvcd'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_USB_UVCD"]);	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_14"]);
  }
};

Blockly.Blocks['amb82_mini_flashmemory_write'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FLASHMEMORY"])	
        .appendField(Blockly.Msg["AMB82_MINI_FLASHMEMORY_WRITE"]);
    this.appendValueInput("address")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FLASHMEMORY_ADDRESS"]);		
    this.appendValueInput("val")
        .setCheck("Number")
		.appendField(Blockly.Msg["AMB82_MINI_FLASHMEMORY_VALUE"]);	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_17"]);
  }
};

Blockly.Blocks['amb82_mini_flashmemory_read'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FLASHMEMORY"])	
        .appendField(Blockly.Msg["AMB82_MINI_FLASHMEMORY_READ"]);
    this.appendValueInput("address")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FLASHMEMORY_ADDRESS"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_17"]);
  }
};

Blockly.Blocks['amb82_mini_emotionclassification_rtsp'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["IMGCLASS","DEFAULT_IMGCLASS"],
 				["IMGCLASS_SD","CUSTOMIZED_IMGCLASS"]
		]), "model");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MODE"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_RTSP"],"rtsp"],		
			[Blockly.Msg["AMB82_MINI_RTSP_STILL"],"still"],
			[Blockly.Msg["AMB82_MINI_TCP"]+" (PORT:80)","tcp80"],			
			[Blockly.Msg["AMB82_MINI_TCP"]+" (PORT:81)","tcp"],
			[Blockly.Msg["AMB82_MINI_STILL"],""]
		], this.validate), "mode");
	this.appendDummyInput("size")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			//["2K (2560¡ó1440)","VIDEO_2K"],
			//["5M (2448¡ó2050)","VIDEO_5M"], 
			//["3M (2048¡ó1536)","VIDEO_3M"],
			["FHD (1920¡ó1080)","VIDEO_FHD"],
			["HD (1280¡ó720)","VIDEO_HD"],
			["D1 (720¡ó480)","VIDEO_D1"],
			["VGA (640¡ó480)","VIDEO_VGA"],
			["WVGA (640¡ó360)","VIDEO_WVGA"],
			["QVGA (320¡ó240)","VIDEO_QVGA"],
			["QCIF (176¡ó144)","VIDEO_QCIF"]
		]), "framesize");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_FINISH"]);	  
    this.appendStatementInput("statement_finish")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_22"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="still") {
			block.getInput("size").removeField("framesize");
			block.getInput("size").appendField(new Blockly.FieldDropdown(amb82_mini_still_options), "framesize");
			block.getInput("size").setVisible(true);			
		} else {
			block.getInput("size").removeField("framesize");
			block.getInput("size").appendField(new Blockly.FieldDropdown(amb82_mini_options), "framesize");
			block.getInput("size").setVisible(true);	
		}
  }
};

Blockly.Blocks['amb82_mini_emotionclassification_rtsp_count'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_COUNT"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_emotionclassification_rtsp_get'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_ITEMLIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_MAXCLASS"],"maxClass"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_MAXSCORE"],"maxScore"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_ANGRY"], "angry"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_DISGUST"], "disgust"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_FEAR"], "fear"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_HAPPY"], "happy"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_NEUTRAL"], "neutral"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_SAD"], "sad"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_SURPRISE"], "surprise"]				
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_emotionclassification_rtsp_emotion'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_EMOTION"]);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_ANGRY"], "angry"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_DISGUST"], "disgust"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_FEAR"], "fear"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_HAPPY"], "happy"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_NEUTRAL"], "neutral"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_SAD"], "sad"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_SURPRISE"], "surprise"]
		]), "emption");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_emotionclassification_rtsp_emotion_name'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_EMOTION"]);
    this.appendValueInput("emption")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_xy_in_triangle'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"]);		
	this.appendValueInput("x")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X")
		.setCheck("Number");		
	this.appendValueInput("y")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y")
		.setCheck("Number");
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI_XY_IN_TRIANGLE"]);			
	this.appendValueInput("x1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X1")
		.setCheck("Number");		
	this.appendValueInput("y1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y1")
		.setCheck("Number");
	this.appendValueInput("x2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X2")
		.setCheck("Number");		
	this.appendValueInput("y2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y2")
		.setCheck("Number");
	this.appendValueInput("x3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X3")
		.setCheck("Number");		
	this.appendValueInput("y3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y3")
		.setCheck("Number");			
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(Blockly.Msg["HUE_20"]);
  }
};

Blockly.Blocks['amb82_mini_xy_in_quadrilateral'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"]);		
	this.appendValueInput("x")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X")
		.setCheck("Number");		
	this.appendValueInput("y")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y")
		.setCheck("Number");
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI_XY_IN_QUADRILATERAL"]);			
	this.appendValueInput("x1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X1")
		.setCheck("Number");		
	this.appendValueInput("y1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y1")
		.setCheck("Number");
	this.appendValueInput("x2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X2")
		.setCheck("Number");		
	this.appendValueInput("y2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y2")
		.setCheck("Number");
	this.appendValueInput("x3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X3")
		.setCheck("Number");		
	this.appendValueInput("y3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y3")
		.setCheck("Number");
	this.appendValueInput("x4")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X4")
		.setCheck("Number");		
	this.appendValueInput("y4")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y4")
		.setCheck("Number");
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_XY_ARRANGE"]);
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(Blockly.Msg["HUE_20"]);
  }
};

Blockly.Blocks['amb82_mini_draw_createBitmap'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_CREATEBITMAP"]);
    this.appendStatementInput("statement")
        .setCheck(null);		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['amb82_mini_drawline'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_DRAWLINE"]);		
	this.appendValueInput("x")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X0")
			.setCheck("Number");		
	this.appendValueInput("y")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y0")
			.setCheck("Number");
	this.appendValueInput("x1")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X1")
			.setCheck("Number");		
	this.appendValueInput("y1")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y1")
			.setCheck("Number");
	this.appendValueInput("linewidth")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_LINEWIDTH"])
			.setCheck("Number");
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_COLOR"])
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_COLOR_RED"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLUE"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GREEN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_CYAN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_MAGENTA"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_YELLOW"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_WHITE"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLACK"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GRAY"], "ARGB((uint8_t) alpha, 0x7f, 0x7f, 0x7f)"],
				[Blockly.Msg["AMB82_MINI_COLOR_ORANGE"], "ARGB((uint8_t) alpha, 0xf3, 0x70, 0x21)"]
			]), "color");
	this.appendValueInput("alpha")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_ALPHA"]+" (0-255)")
			.setCheck("Number");		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['amb82_mini_drawpoint'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_DRAWPOINT"]);
	this.appendValueInput("x")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X")
			.setCheck("Number");		
	this.appendValueInput("y")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y")
			.setCheck("Number");
	this.appendValueInput("pointwidth")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_POINTWIDTH"])
			.setCheck("Number");
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_COLOR"])
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_COLOR_RED"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLUE"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GREEN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_CYAN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_MAGENTA"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_YELLOW"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_WHITE"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLACK"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GRAY"], "ARGB((uint8_t) alpha, 0x7f, 0x7f, 0x7f)"],
				[Blockly.Msg["AMB82_MINI_COLOR_ORANGE"], "ARGB((uint8_t) alpha, 0xf3, 0x70, 0x21)"]
			]), "color");
	this.appendValueInput("alpha")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_ALPHA"]+" (0-255)")
			.setCheck("Number");		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['amb82_mini_drawrect'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_DRAWRECT"]);
	this.appendValueInput("x")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X0")
			.setCheck("Number");		
	this.appendValueInput("y")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y0")
			.setCheck("Number");
	this.appendValueInput("x1")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X1")
			.setCheck("Number");		
	this.appendValueInput("y1")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y1")
			.setCheck("Number");
	this.appendValueInput("linewidth")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_LINEWIDTH"])
			.setCheck("Number");
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_COLOR"])
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_COLOR_RED"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLUE"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GREEN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_CYAN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_MAGENTA"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_YELLOW"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_WHITE"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLACK"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GRAY"], "ARGB((uint8_t) alpha, 0x7f, 0x7f, 0x7f)"],
				[Blockly.Msg["AMB82_MINI_COLOR_ORANGE"], "ARGB((uint8_t) alpha, 0xf3, 0x70, 0x21)"]
			]), "color");
	this.appendValueInput("alpha")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_ALPHA"]+" (0-255)")
			.setCheck("Number");		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['amb82_mini_drawtext'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_DRAWTEXT"])		
	this.appendValueInput("x")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X")
			.setCheck("Number");		
	this.appendValueInput("y")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y")
			.setCheck("Number");
	this.appendValueInput("txt")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_TEXT"])
			.setCheck("String");
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_COLOR"])
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_COLOR_RED"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLUE"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GREEN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_CYAN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_MAGENTA"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_YELLOW"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_WHITE"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLACK"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GRAY"], "ARGB((uint8_t) alpha, 0x7f, 0x7f, 0x7f)"],
				[Blockly.Msg["AMB82_MINI_COLOR_ORANGE"], "ARGB((uint8_t) alpha, 0xf3, 0x70, 0x21)"]
			]), "color");
	this.appendValueInput("alpha")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_ALPHA"]+" (0-255)")
			.setCheck("Number");		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["YOLOv7","DEFAULT_YOLOV7TINY"],			
 				["YOLOv4","DEFAULT_YOLOV4TINY"],
 				["YOLOv3","DEFAULT_YOLOV3TINY"],
 				["YOLOv7_SD", "CUSTOMIZED_YOLOV7TINY"],				
 				["YOLOv4_SD", "CUSTOMIZED_YOLOV4TINY"],
 				["YOLOv3_SD", "CUSTOMIZED_YOLOV3TINY"]
		]), "model");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_LABEL"])
		.appendField(new Blockly.FieldDropdown([
			["Y","Y"],
			["N","N"]
		]), "label");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MODE"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_RTSP"],"rtsp"],		
			[Blockly.Msg["AMB82_MINI_RTSP_STILL"],"still"],
			[Blockly.Msg["AMB82_MINI_TCP"]+" (PORT:80)","tcp80"],			
			[Blockly.Msg["AMB82_MINI_TCP"]+" (PORT:81)","tcp"],
			[Blockly.Msg["AMB82_MINI_USB_UVCD"],"uvc"],
			[Blockly.Msg["AMB82_MINI_STILL"],""]			
		], this.validate), "mode");
	this.appendDummyInput("size")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			//["2K (2560¡ó1440)","VIDEO_2K"],
			//["5M (2448¡ó2050)","VIDEO_5M"], 
			//["3M (2048¡ó1536)","VIDEO_3M"],
			["FHD (1920¡ó1080)","VIDEO_FHD"],
			["HD (1280¡ó720)","VIDEO_HD"],
			["D1 (720¡ó480)","VIDEO_D1"],
			["VGA (640¡ó480)","VIDEO_VGA"],
			["WVGA (640¡ó360)","VIDEO_WVGA"],
			["QVGA (320¡ó240)","VIDEO_QVGA"],
			["QCIF (176¡ó144)","VIDEO_QCIF"]
		]), "framesize");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_FINISH"]);	  
    this.appendStatementInput("statement_finish")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_22"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="still") {
			block.getInput("size").removeField("framesize");
			block.getInput("size").appendField(new Blockly.FieldDropdown(amb82_mini_still_options), "framesize");
			block.getInput("size").setVisible(true);			
		} else if (newValue=="uvc") {
			block.getInput("size").setVisible(false);
		} else {
			block.getInput("size").removeField("framesize");
			block.getInput("size").appendField(new Blockly.FieldDropdown(amb82_mini_options), "framesize");
			block.getInput("size").setVisible(true);	
		}
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_count'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_COUNT"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_rect'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ITEMLIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_OBJECT"],"OBJECT"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SCORE"],"SCORE"],			
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_X_MIN"],"X"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_Y_MIN"],"Y"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_X_MIDDLE"],"XM"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_Y_MIDDLE"],"YM"],				
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_X_MAX"],"X1"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_Y_MAX"],"Y1"],				
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_WIDTH"],"WIDTH"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HIGHT"],"HEIGHT"],
				[Blockly.Msg.PROPERTY_INDEX,"INDEX"]
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_object'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ITEMOBJECT"]);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_PERSON"], "person"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BICYCLE"], "bicycle"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CAR"], "car"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_MOTORBIKE"], "motorbike"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_AEROPLANE"], "aeroplane"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BUS"], "bus"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TRAIN"], "train"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TRUCK"], "truck"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOAT"], "boat"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TRAFFICLIGHT"], "traffic light"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_FIREHYDRANT"], "fire hydrant"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_STOPSIGN"], "stop sign"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_PARKINGMETER"], "parking meter"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BENCH"], "bench"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BIRD"], "bird"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CAT"], "cat"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_DOG"], "dog"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HORSE"], "horse"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SHEEP"], "sheep"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_COW"], "cow"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ELEPHANT"], "elephant"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BEAR"], "bear"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ZEBRA"], "zebra"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_GIRAFFE"], "giraffe"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BACKPACK"], "backpack"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_UMBRELLA"], "umbrella"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HANDBAG"], "handbag"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TIE"], "tie"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SUITCASE"], "suitcase"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_FRISBEE"], "frisbee"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SKIS"], "skis"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SNOWBOARD"], "snowboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SPORTSBALL"], "sportsball"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_KITE"], "kite"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BASEBALLBAT"], "baseball bat"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BASEBALLGLOVE"], "baseball glove"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SKATEBOARD"], "skateboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SURFBOARD"], "surfboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TENNISRACKET"], "tennis racket"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOTTLE"], "bottle"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_WINEGLASS"], "wine glass"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CUP"], "cup"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_FORK"], "fork"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_KNIFE"], "knife"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SPOON"], "spoon"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOWL"], "bowl"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BANANA"], "banana"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_APPLE"], "apple"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SANDWICH"], "sandwich"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ORANGE"], "orange"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BROCCOLI"], "broccoli"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CARROT"], "carrot"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HOTDOG"], "hot dog"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_PIZZA"], "pizza"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_DONUT"], "donut"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CAKE"], "cake"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CHAIR"], "chair"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SOFA"], "sofa"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_POTTEDPLANT"], "pottedplant"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BED"], "bed"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_DININGTABLE"], "diningtable"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TOILET"], "toilet"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TVMONITOR"], "tvmonitor"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_LAPTOP"], "laptop"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_MOUSE"], "mouse"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_REMOTE"], "remote"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_KEYBOARD"], "keyboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CELLPHONE"], "cell phone"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_MICROWAVE"], "microwave"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_OVEN"], "oven"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TOASTER"], "toaster"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SINK"], "sink"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_REFRIGERATOR"], "refrigerator"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOOK"], "book"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CLOCK"], "clock"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_VASE"], "vase"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SCISSORS"], "scissors"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TEDDYBEAR"], "teddy bear"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HAIRDRYER"], "hair dryer"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TOOTHBRUSH"], "toothbrush"]
		]), "objclass");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_objectname'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ITEMOBJECT"]);
    this.appendValueInput("objclass")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_object_custom'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
	    .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CLASS_CUSTOM"]);				
	this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(330);	
	this.setMutator(new Blockly.Mutator(["amb82_mini_objectdetection_rtsp_object_custom_class"]));
  }
	,itemCount_:0
	,className_:[]	
	,suppressPrefixSuffix:!0
	,mutationWorkspace:null
	,mutationToDom:function(){
		if(!this.itemCount_&&!this.topCount_)return null;
		var a=Blockly.utils.xml.createElement("mutation");
		this.itemCount_&&a.setAttribute("items",this.itemCount_);
		return a
	}
	,domToMutation:function(a){
		this.itemCount_=parseInt(a.getAttribute("items"),10)||0;
		this.initialShape_()
	}
	,decompose:function(a){
		mutationWorkspace = a;
		var b=a.newBlock("amb82_mini_objectdetection_rtsp_object_custom_default");
		b.initSvg();
		for(var c=b.nextConnection,d=1;d<=this.itemCount_;d++){
			var e=a.newBlock("amb82_mini_objectdetection_rtsp_object_custom_class");
			e.initSvg();
			if (this.getFieldValue("CLASS"+d))
				e.setFieldValue(this.getFieldValue("CLASS"+d), 'classname');			
			c.connect(e.previousConnection);
			c=e.nextConnection
		}
		return b
	}
	,compose:function(a){
		a=a.nextConnection.targetBlock();
		this.itemCount_=0;
		this.className_=[];
		for(var i;a&&!a.isInsertionMarker();){
			switch(a.type){
				case "amb82_mini_objectdetection_rtsp_object_custom_class":
					this.itemCount_++;
					this.className_.push(a.getFieldValue("classname"));					
					break;
				default:throw TypeError("Unknown block type: "+a.type);
			}
			a=a.nextConnection&&a.nextConnection.targetBlock()
		}		
		this.updateShape_();
	}
	,initialShape_:function(){	
		for(var a=1;a<=this.itemCount_;a++) {
			this.appendDummyInput("CLASS"+a)
				.appendField(new Blockly.FieldLabelSerializable(""),"CLASS"+a)
				.setAlign(Blockly.ALIGN_RIGHT);
		}
	}	
	,updateShape_:function(){
		for(var a=1;this.getInput("CLASS"+a);)
			this.removeInput("CLASS"+a),a++;
		a=1;
		var blockDB = mutationWorkspace.blockDB_;
		if (blockDB) {
			for (var blockid in blockDB) {
				var block = mutationWorkspace.getBlockById(blockid);
				if (block.type!="amb82_mini_objectdetection_rtsp_object_custom_default") {
					this.appendDummyInput("CLASS"+a)
						.appendField(new Blockly.FieldLabelSerializable(this.className_[a-1]),"CLASS"+a)
						.setAlign(Blockly.ALIGN_RIGHT);
					a++;
				}
			}
		}
	}
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_object_custom_default'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CLASS_LIST"]);			
	this.setInputsInline(true);
	this.setNextStatement(!0);
	this.setColour(330);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_object_custom_class'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CLASS_NAME"]);	
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(""), "classname");	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(330);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_state'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_RESUME"],"1"],
			[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_PAUSE"],"0"]
		]), "state");		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_imageclassification'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["IMGCLASS","DEFAULT_IMGCLASS"],
 				["IMGCLASS_SD","CUSTOMIZED_IMGCLASS"]
		]), "model");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_28"]);
  }
};

Blockly.Blocks['amb82_mini_imageclassification_get'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION_LIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION_NAME"],"NAME"],
				[Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION_SCORE"],"SCORE"]				
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_28"]);
  }
};

Blockly.Blocks['amb82_mini_imageclassification_class_name'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION_CLASS"]);
	this.appendValueInput("property")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT); 			
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_28"]);
  }
};

Blockly.Blocks['amb82_mini_audioclassification'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["YAMNET","DEFAULT_YAMNET"],
 				["YAMNET_SD","CUSTOMIZED_YAMNET"]
		]), "model");
    this.appendDummyInput("aud")
        .appendField(Blockly.Msg["AMB82_MINI_AUDIO"])	
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_ANALOG_MIC"],"USE_AUDIO_AMIC"],
			[Blockly.Msg["AMB82_MINI_DIGITAL_PDM_MIC"],"USE_AUDIO_LEFT_DMIC"]
		]), "audio");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FINISH"]);	  
    this.appendStatementInput("statement_finish")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_24"]);
  }
};

Blockly.Blocks['amb82_mini_audioclassification_count'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COUNT"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_24"]);
  }
};

Blockly.Blocks['amb82_mini_audioclassification_get'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_NAME"],"NAME"],
				[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCORE"],"SCORE"]				
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_24"]);
  }
};

Blockly.Blocks['amb82_mini_audioclassification_object'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ITEMAUDIO"]);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SPEECH"], "Speech"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHILD_SPEECH_KID_SPEAKING"], "Child speech, kid speaking"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CONVERSATION"], "Conversation"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_NARRATION_MONOLOGUE"], "Narration, monologue"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BABBLING"], "Babbling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SPEECH_SYNTHESIZER"], "Speech synthesizer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHOUT"], "Shout"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BELLOW"], "Bellow"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHOOP"], "Whoop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_YELL"], "Yell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHILDREN_SHOUTING"], "Children shouting"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCREAMING"], "Screaming"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHISPERING"], "Whispering"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LAUGHTER"], "Laughter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BABY_LAUGHTER"], "Baby laughter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GIGGLE"], "Giggle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNICKER"], "Snicker"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BELLY_LAUGH"], "Belly laugh"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHUCKLE_CHORTLE"], "Chuckle, chortle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRYING_SOBBING"], "Crying, sobbing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BABY_CRY_INFANT_CRY"], "Baby cry, infant cry"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHIMPER"], "Whimper"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WAIL_MOAN"], "Wail, moan"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SIGH"], "Sigh"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SINGING"], "Singing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHOIR"], "Choir"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_YODELING"], "Yodeling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHANT"], "Chant"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MANTRA"], "Mantra"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHILD_SINGING"], "Child singing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SYNTHETIC_SINGING"], "Synthetic singing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAPPING"], "Rapping"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HUMMING"], "Humming"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GROAN"], "Groan"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GRUNT"], "Grunt"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHISTLING"], "Whistling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BREATHING"], "Breathing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHEEZE"], "Wheeze"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNORING"], "Snoring"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GASP"], "Gasp"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PANT"], "Pant"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNORT"], "Snort"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COUGH"], "Cough"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THROAT_CLEARING"], "Throat clearing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNEEZE"], "Sneeze"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNIFF"], "Sniff"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RUN"], "Run"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHUFFLE"], "Shuffle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WALK_FOOTSTEPS"], "Walk, footsteps"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHEWING_MASTICATION"], "Chewing, mastication"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BITING"], "Biting"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GARGLING"], "Gargling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STOMACH_RUMBLE"], "Stomach rumble"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BURPING_ERUCTATION"], "Burping, eructation"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HICCUP"], "Hiccup"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FART"], "Fart"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HANDS"], "Hands"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FINGER_SNAPPING"], "Finger snapping"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLAPPING"], "Clapping"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HEART_SOUNDS_HEARTBEAT"], "Heart sounds, heartbeat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HEART_MURMUR"], "Heart murmur"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHEERING"], "Cheering"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_APPLAUSE"], "Applause"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHATTER"], "Chatter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CROWD"], "Crowd"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HUBBUB_SPEECH_NOISE_SPEECH_BABBLE"], "Hubbub, speech noise, speech babble"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHILDREN_PLAYING"], "Children playing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ANIMAL"], "Animal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DOMESTIC_ANIMALS_PETS"], "Domestic animals, pets"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DOG"], "Dog"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BARK"], "Bark"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_YIP"], "Yip"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HOWL"], "Howl"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOW_WOW"], "Bow-wow"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GROWLING"], "Growling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHIMPER_DOG"], "Whimper (dog)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAT"], "Cat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PURR"], "Purr"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MEOW"], "Meow"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HISS"], "Hiss"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CATERWAUL"], "Caterwaul"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LIVESTOCK_FARM_ANIMALS_WORKING_ANIMALS"], "Livestock, farm animals, working animals"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HORSE"], "Horse"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLIP_CLOP"], "Clip-clop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_NEIGH_WHINNY"], "Neigh, whinny"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CATTLE_BOVINAE"], "Cattle, bovinae"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOO"], "Moo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COWBELL"], "Cowbell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PIG"], "Pig"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OINK"], "Oink"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GOAT"], "Goat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BLEAT"], "Bleat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHEEP"], "Sheep"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FOWL"], "Fowl"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHICKEN_ROOSTER"], "Chicken, rooster"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLUCK"], "Cluck"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CROWING_COCK_A_DOODLE_DOO"], "Crowing, cock-a-doodle-doo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TURKEY"], "Turkey"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GOBBLE"], "Gobble"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_QUACK"], "Quack"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DUCK"], "Duck"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GOOSE"], "Goose"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HONK"], "Honk"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WILD_ANIMALS"], "Wild animals"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROARING_CATS_LIONS_TIGERS"], "Roaring cats (lions, tigers)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROAR"], "Roar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BIRD"], "Bird"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BIRD_VOCALIZATION_BIRD_CALL_BIRD_SONG"], "Bird vocalization, bird call, bird song"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHIRP_TWEET"], "Chirp, tweet"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SQUAWK"], "Squawk"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PIGEON_DOVE"], "Pigeon, dove"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COO"], "Coo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CROW"], "Crow"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAW"], "Caw"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OWL"], "Owl"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HOOT"], "Hoot"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BIRD_FLIGHT_FLAPPING_WINGS"], "Bird flight, flapping wings"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CANIDAE_DOGS_WOLVES"], "Canidae, dogs, wolves"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RODENTS_RATS_MICE"], "Rodents, rats, mice"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOUSE"], "Mouse"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PATTER"], "Patter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_INSECT"], "Insect"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRICKET"], "Cricket"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOSQUITO"], "Mosquito"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FLY_HOUSEFLY"], "Fly, housefly"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BUZZ"], "Buzz"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BEE_WASP_ETC"], "Bee, wasp, etc."],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FROG"], "Frog"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CROAK"], "Croak"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNAKE"], "Snake"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RATTLE"], "Rattle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHALE_VOCALIZATION"], "Whale vocalization"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC"], "Music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSICAL_INSTRUMENT"], "Musical instrument"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PLUCKED_STRING_INSTRUMENT"], "Plucked string instrument"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GUITAR"], "Guitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRIC_GUITAR"], "Electric guitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BASS_GUITAR"], "Bass guitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ACOUSTIC_GUITAR"], "Acoustic guitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STEEL_GUITAR_SLIDE_GUITAR"], "Steel guitar, slide guitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TAPPING_GUITAR_TECHNIQUE"], "Tapping (guitar technique)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STRUM"], "Strum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BANJO"], "Banjo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SITAR"], "Sitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MANDOLIN"], "Mandolin"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ZITHER"], "Zither"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_UKULELE"], "Ukulele"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_KEYBOARD_MUSICAL"], "Keyboard (musical)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PIANO"], "Piano"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRIC_PIANO"], "Electric piano"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ORGAN"], "Organ"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRONIC_ORGAN"], "Electronic organ"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HAMMOND_ORGAN"], "Hammond organ"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SYNTHESIZER"], "Synthesizer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SAMPLER"], "Sampler"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HARPSICHORD"], "Harpsichord"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PERCUSSION"], "Percussion"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRUM_KIT"], "Drum kit"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRUM_MACHINE"], "Drum machine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRUM"], "Drum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNARE_DRUM"], "Snare drum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RIMSHOT"], "Rimshot"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRUM_ROLL"], "Drum roll"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BASS_DRUM"], "Bass drum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TIMPANI"], "Timpani"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TABLA"], "Tabla"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CYM_BAL"], "Cymbal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HI_HAT"], "Hi-hat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WOOD_BLOCK"], "Wood block"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TAMBOURINE"], "Tambourine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RATTLE_INSTRUMENT"], "Rattle (instrument)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MARACA"], "Maraca"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GONG"], "Gong"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TUBULAR_BELLS"], "Tubular bells"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MALLET_PERCUSSION"], "Mallet percussion"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MARIMBA_XYLOPHONE"], "Marimba, xylophone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GLOCKENSPIEL"], "Glockenspiel"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VIBRAPHONE"], "Vibraphone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STEELPAN"], "Steelpan"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ORCHESTRA"], "Orchestra"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BRASS_INSTRUMENT"], "Brass instrument"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FRENCH_HORN"], "French horn"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRUMPET"], "Trumpet"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TROMBONE"], "Trombone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOWED_STRING_INSTRUMENT"], "Bowed string instrument"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STRING_SECTION"], "String section"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VIOLIN_FIDDLE"], "Violin, fiddle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PIZZICATO"], "Pizzicato"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CELL"], "Cello"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DOUBLE_BASS"], "Double bass"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WIND_INSTRUMENT_WOODWIND_INSTRUMENT"], "Wind instrument, woodwind instrument"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FLUTE"], "Flute"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SAXOPHONE"], "Saxophone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLARINET"], "Clarinet"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HARP"], "Harp"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BELL"], "Bell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHURCH_BELL"], "Church bell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JINGLE_BELL"], "Jingle bell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BICYCLE_BELL"], "Bicycle bell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TUNING_FORK"], "Tuning fork"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHIME"], "Chime"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WIND_CHIME"], "Wind chime"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHANGE_RINGING_CAMPANOLOGY"], "Change ringing (campanology)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HARMONICA"], "Harmonica"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ACCORDION"], "Accordion"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BAGPIPES"], "Bagpipes"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DIDGERIDOO"], "Didgeridoo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHOFAR"], "Shofar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THEREMIN"], "Theremin"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SINGING_BOWL"], "Singing bowl"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCRATCHING_PERFORMANCE_TECHNIQUE"], "Scratching (performance technique)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_POP_MUSIC"], "Pop music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HIP_HOP_MUSIC"], "Hip hop music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BEATBOXING"], "Beatboxing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROCK_MUSIC"], "Rock music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HEAVY_METAL"], "Heavy metal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PUNK_ROCK"], "Punk rock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GRUNGE"], "Grunge"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PROGRESSIVE_ROCK"], "Progressive rock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROCK_AND_ROLL"], "Rock and roll"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PSYCHEDELIC_ROCK"], "Psychedelic rock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RHYTHM_AND_BLUES"], "Rhythm and blues"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SOUL_MUSIC"], "Soul music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_REGGAE"], "Reggae"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COUNTRY"], "Country"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SWING_MUSIC"], "Swing music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BLUEGRASS"], "Bluegrass"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FUNK"], "Funk"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FOLK_MUSIC"], "Folk music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MIDDLE_EASTERN_MUSIC"], "Middle Eastern music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JAZZ"], "Jazz"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DISCO"], "Disco"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLASSICAL_MUSIC"], "Classical music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OPERA"], "Opera"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRONIC_MUSIC"], "Electronic music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HOUSE_MUSIC"], "House music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TECHNO"], "Techno"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DUBSTEP"], "Dubstep"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRUM_AND_BASS"], "Drum and bass"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRONICA"], "Electronica"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRONIC_DANCE_MUSIC"], "Electronic dance music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AMBIENT_MUSIC"], "Ambient music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRANCE_MUSIC"], "Trance music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC_OF_LATIN_AMERICA"], "Music of Latin America"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SALSA_MUSIC"], "Salsa music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FLAMENCO"], "Flamenco"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BLUES"], "Blues"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC_FOR_CHILDREN"], "Music for children"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_NEW_AGE_MUSIC"], "New-age music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VOCAL_MUSIC"], "Vocal music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_A_CAPELLA"], "A capella"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC_OF_AFRICA"], "Music of Africa"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AFROBEAT"], "Afrobeat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHRISTIAN_MUSIC"], "Christian music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GOSPEL_MUSIC"], "Gospel music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC_OF_ASIA"], "Music of Asia"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CARNATIC_MUSIC"], "Carnatic music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC_OF_BOLLYWOOD"], "Music of Bollywood"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SKA"], "Ska"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRADITIONAL_MUSIC"], "Traditional music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_INDEPENDENT_MUSIC"], "Independent music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SONG"], "Song"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BACKGROUND_MUSIC"], "Background music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THEME_MUSIC"], "Theme music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JINGLE_MUSIC"], "Jingle (music)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SOUNDTRACK_MUSIC"], "Soundtrack music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LULLABY"], "Lullaby"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VIDEO_GAME_MUSIC"], "Video game music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHRISTMAS_MUSIC"], "Christmas music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DANCE_MUSIC"], "Dance music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WEDDING_MUSIC"], "Wedding music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HAPPY_MUSIC"], "Happy music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SAD_MUSIC"], "Sad music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TENDER_MUSIC"], "Tender music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_EXCITING_MUSIC"], "Exciting music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ANGRY_MUSIC"], "Angry music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCARY_MUSIC"], "Scary music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WIND"], "Wind"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RUSTLING_LEAVES"], "Rustling leaves"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WIND_NOISE_MICROPHONE"], "Wind noise (microphone)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THUNDERSTORM"], "Thunderstorm"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THUNDER"], "Thunder"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WATER"], "Water"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAIN"], "Rain"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAINDROP"], "Raindrop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAIN_ON_SURFACE"], "Rain on surface"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STREAM"], "Stream"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WATERFALL"], "Waterfall"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OCEAN"], "Ocean"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WAVES_SURF"], "Waves, surf"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STEAM"], "Steam"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GURGLING"], "Gurgling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIRE"], "Fire"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRACKLE"], "Crackle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VEHICLE"], "Vehicle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOAT_WATER_VEHICLE"], "Boat, Water vehicle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SAILBOAT_SAILING_SHIP"], "Sailboat, sailing ship"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROWBAY_CANOE_KAYAK"], "Rowboat, canoe, kayak"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOTORBOAT_SPEEDBOAT"], "Motorboat, speedboat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHIP"], "Ship"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOTOR_VEHICLE_ROAD"], "Motor vehicle (road)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAR"], "Car"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VEHICLE_HORN_CAR_HORN_HONKING"], "Vehicle horn, car horn, honking"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TOOT"], "Toot"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAR_ALARM"], "Car alarm"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_POWER_WINDOWS_ELECTRIC_WINDOWS"], "Power windows, electric windows"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SKIDDING"], "Skidding"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TIRE_SQUEAL"], "Tire squeal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAR_PASSING_BY"], "Car passing by"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RACE_CAR_AUTO_RACING"], "Race car, auto racing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRUCK"], "Truck"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AIR_BRAKE"], "Air brake"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AIR_HORN_TRUCK_HORN"], "Air horn, truck horn"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_REVERSING_BEEPS"], "Reversing beeps"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ICE_CREAM_TRUCK_ICE_CREAM_VAN"], "Ice cream truck, ice cream van"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BUS"], "Bus"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_EMERGENCY_VEHICLE"], "Emergency vehicle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_POLICE_CAR_SIREN"], "Police car (siren)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AMBULANCE_SIREN"], "Ambulance (siren)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIRE_ENGINE_FIRE_TRUCK_SIREN"], "Fire engine, fire truck (siren)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOTORCYCLE"], "Motorcycle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRAFFIC_NOISE_ROADWAY_NOISE"], "Traffic noise, roadway noise"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAIL_TRANSPORT"], "Rail transport"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRAIN"], "Train"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRAIN_WHISTLE"], "Train whistle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRAIN_HORN"], "Train horn"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAILROAD_CAR_TRAIN_WAGON"], "Railroad car, train wagon"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRAIN_WHEELS_SQUEALING"], "Train wheels squealing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SUBWAY_METRO_UNDERGROUND"], "Subway, metro, underground"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AIRCRAFT"], "Aircraft"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AIRCRAFT_ENGINE"], "Aircraft engine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JET_ENGINE"], "Jet engine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PROPELLER_AIRSCREW"], "Propeller, airscrew"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HELICOPTER"], "Helicopter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIXED_WING_AIRCRAFT_AIRPLANE"], "Fixed-wing aircraft, airplane"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BICYCLE"], "Bicycle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SKADEBOARD"], "Skateboard"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ENGINE"], "Engine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LIGHT_ENGINE_HIGH_FREQUENCY"], "Light engine (high frequency)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DENTAL_DRILL_DENTISTS_DRILL"], "Dental drill, dentist's drill"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LAWN_MOWER"], "Lawn mower"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHAINSAW"], "Chainsaw"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MEDIUM_ENGINE_MID_FREQUENCY"], "Medium engine (mid frequency)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HEAVY_ENGINE_LOW_FREQUENCY"], "Heavy engine (low frequency)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ENGINE_KNOCKING"], "Engine knocking"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ENGINE_STARTING"], "Engine starting"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_IDLING"], "Idling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ACCELERATING_REVVING_VROOM"], "Accelerating, revving, vroom"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DOOR"], "Door"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DOORBELL"], "Doorbell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DING_DONG"], "Ding-dong"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SLIDING_DOOR"], "Sliding door"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SLAM"], "Slam"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_KNOCK"], "Knock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TAP"], "Tap"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SQUEAK"], "Squeak"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CUPBOARD_OPEN_OR_CLOSE"], "Cupboard open or close"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRAWER_OPEN_OR_CLOSE"], "Drawer open or close"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DISHES_POTS_AND_PANS"], "Dishes, pots, and pans"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CUTLERY_SILVERWARE"], "Cutlery, silverware"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHOPPING_FOOD"], "Chopping (food)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FRYING_FOOD"], "Frying (food)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MICROWAVE_OVEN"], "Microwave oven"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BLENDER"], "Blender"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WATER_TAP_FAUCET"], "Water tap, faucet"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SINK_FILLING_OR_WASHING"], "Sink (filling or washing)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BATHTUB_FILLING_OR_WASHING"], "Bathtub (filling or washing)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HAIR_DRYER"], "Hair dryer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TOILET_FLUSH"], "Toilet flush"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TOOTHBRUSH"], "Toothbrush"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRIC_TOOTHBRUSH"], "Electric toothbrush"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VACUUM_CLEANER"], "Vacuum cleaner"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ZIPPER_CLOTHING"], "Zipper (clothing)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_KEYS_JANGLING"], "Keys jangling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COIN_DROPPING"], "Coin (dropping)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCISSORS"], "Scissors"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRIC_SHAVER_ELECTRIC_RAZOR"], "Electric shaver, electric razor"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHUFFLING_CARDS"], "Shuffling cards"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TYPING"], "Typing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TYPEWRITER"], "Typewriter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COMPUTER_KEYBOARD"], "Computer keyboard"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WRITING"], "Writing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ALARM"], "Alarm"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TELEPHONE"], "Telephone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TELEPHONE_BELL_RINGING"], "Telephone bell ringing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RINGTONE"], "Ringtone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TELEPHONE_DIALING_DTMF"], "Telephone dialing, DTMF"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DIAL_TONE"], "Dial tone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BUSY_SIGNAL"], "Busy signal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ALARM_CLOCK"], "Alarm clock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SIREN"], "Siren"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CIVIL_DEFENSE_SIREN"], "Civil defense siren"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BUZZER"], "Buzzer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SMOKE_DETECTOR_SMOKE_ALARM"], "Smoke detector, smoke alarm"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIRE_ALARM"], "Fire alarm"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FOGHORN"], "Foghorn"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHISTLE"], "Whistle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STEAM_WHISTLE"], "Steam whistle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MECHANISMS"], "Mechanisms"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RATCHET_PAWL"], "Ratchet, pawl"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLOCK"], "Clock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TICK"], "Tick"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TICK_TOCK"], "Tick-tock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GEARS"], "Gears"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PULLEYS"], "Pulleys"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SEWING_MACHINE"], "Sewing machine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MECHANICAL_FAN"], "Mechanical fan"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AIR_CONDITIONING"], "Air conditioning"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CASH_REGISTER"], "Cash register"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PRINTER"], "Printer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAMERA"], "Camera"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SINGLE_LENS_REFLEX_CAMERA"], "Single-lens reflex camera"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TOOLS"], "Tools"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HAMMER"], "Hammer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JACKHAMMER"], "Jackhammer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SAWING"], "Sawing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FILING_RASP"], "Filing (rasp)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SANDING"], "Sanding"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_POWER_TOOL"], "Power tool"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRILL"], "Drill"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_EXPLOSION"], "Explosion"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GUNSHOT_GUNFIRE"], "Gunshot, gunfire"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MACHINE_GUN"], "Machine gun"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FUSILLADE"], "Fusillade"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ARTILLERY_FIRE"], "Artillery fire"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAP_GUN"], "Cap gun"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIREWORKS"], "Fireworks"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIRECRACKER"], "Firecracker"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BURST_POP"], "Burst, pop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ERUPTION"], "Eruption"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOOM"], "Boom"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WOOD"], "Wood"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHOP"], "Chop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SPLINTER"], "Splinter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRACK"], "Crack"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GLASS"], "Glass"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHINK_CLINK"], "Chink, clink"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHATTER"], "Shatter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LIQUID"], "Liquid"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SPLASH_SPLATTER"], "Splash, splatter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SLOSH"], "Slosh"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SQUISH"], "Squish"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRIP"], "Drip"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_POUR"], "Pour"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRICKLE_DRIBBLE"], "Trickle, dribble"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GUSH"], "Gush"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FILL_WITH_LIQUID"], "Fill (with liquid)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SPRAY"], "Spray"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PUMP_LIQUID"], "Pump (liquid)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STIR"], "Stir"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOILING"], "Boiling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SONAR"], "Sonar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ARROW"], "Arrow"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHOOSH_SWOOSH_SWISH"], "Whoosh, swoosh, swish"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THUMP_THUD"], "Thump, thud"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THUNK"], "Thunk"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRONIC_TUNER"], "Electronic tuner"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_EFFECTS_UNIT"], "Effects unit"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHORUS_EFFECT"], "Chorus effect"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BASKETBALL_BOUNCE"], "Basketball bounce"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BANG"], "Bang"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SLAP_SMACK"], "Slap, smack"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHACK_THWACK"], "Whack, thwack"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SMASH_CRASH"], "Smash, crash"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BREAKING"], "Breaking"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOUNCING"], "Bouncing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHIP"], "Whip"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FLAP"], "Flap"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCRATCH"], "Scratch"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCRAPE"], "Scrape"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RUB"], "Rub"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROLL"], "Roll"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRUSHING"], "Crushing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRUMPLING_CRINKLING"], "Crumpling, crinkling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TEARING"], "Tearing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BEEP_BLEEP"], "Beep, bleep"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PING"], "Ping"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DING"], "Ding"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLANG"], "Clang"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SQUEAL"], "Squeal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CREAK"], "Creak"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RUSTLE"], "Rustle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHIR"], "Whir"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLATTER"], "Clatter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SIZZLE"], "Sizzle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLICKING"], "Clicking"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLICKETY_CLACK"], "Clickety-clack"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RUMBLE"], "Rumble"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PLOP"], "Plop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JINGLE_TINKLE"], "Jingle, tinkle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HUM"], "Hum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ZING"], "Zing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOING"], "Boing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRUNCH"], "Crunch"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SILENCE"], "Silence"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SINE_WAVE"], "Sine wave"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HARMONIC"], "Harmonic"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHIRP_TONE"], "Chirp tone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SOUND_EFFECT"], "Sound effect"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PULSE"], "Pulse"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_INSIDE_SMALL_ROOM"], "Inside, small room"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_INSIDE_LARGE_ROOM_OR_HALL"], "Inside, large room or hall"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_INSIDE_PUBLIC_SPACE"], "Inside, public space"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OUTSIDE_URBAN_OR_MANMADE"], "Outside, urban or manmade"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OUTSIDE_RURAL_OR_NATURAL"], "Outside, rural or natural"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_REVERBERATION"], "Reverberation"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ECHO"], "Echo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_NOISE"], "Noise"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ENVIRONMENTAL_NOISE"], "Environmental noise"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STATIC"], "Static"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MAINS_HUM"], "Mains hum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DISTORTION"], "Distortion"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SIDETONE"], "Sidetone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CACOPHONY"], "Cacophony"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHITE_NOISE"], "White noise"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PINK_NOISE"], "Pink noise"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THROBBING"], "Throbbing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VIBRATION"], "Vibration"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TELEVISION"], "Television"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RADIO"], "Radio"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIELD_RECORDING"], "Field recording"]
		]), "audioclass");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_24"]);
  }
};

Blockly.Blocks['amb82_mini_audioclassification_object_name'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ITEMAUDIO"]);
	this.appendValueInput("audioclass")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_24"]);
  }
};

Blockly.Blocks['amb82_mini_facedetectionrecognition_rtsp'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["SCRFD","DEFAULT_SCRFD"],
 				["SCRFD_SD","CUSTOMIZED_SCRFD"]
		]), "model");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_LABEL"])
		.appendField(new Blockly.FieldDropdown([
			["Y","Y"],
			["N","N"]
		]), "label");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MODE"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_RTSP"],"rtsp"],		
			[Blockly.Msg["AMB82_MINI_RTSP_STILL"],"still"],
			[Blockly.Msg["AMB82_MINI_TCP"]+" (PORT:80)","tcp80"],			
			[Blockly.Msg["AMB82_MINI_TCP"]+" (PORT:81)","tcp"],
			[Blockly.Msg["AMB82_MINI_STILL"],""]
		], this.validate), "mode");
	this.appendDummyInput("size")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			//["2K (2560¡ó1440)","VIDEO_2K"],
			//["5M (2448¡ó2050)","VIDEO_5M"], 
			//["3M (2048¡ó1536)","VIDEO_3M"],
			["FHD (1920¡ó1080)","VIDEO_FHD"],
			["HD (1280¡ó720)","VIDEO_HD"],
			["D1 (720¡ó480)","VIDEO_D1"],
			["VGA (640¡ó480)","VIDEO_VGA"],
			["WVGA (640¡ó360)","VIDEO_WVGA"],
			["QVGA (320¡ó240)","VIDEO_QVGA"],
			["QCIF (176¡ó144)","VIDEO_QCIF"]
		]), "framesize");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_FINISH"]);	  
    this.appendStatementInput("statement_finish")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_23"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="still") {
			block.getInput("size").removeField("framesize");
			block.getInput("size").appendField(new Blockly.FieldDropdown(amb82_mini_still_options), "framesize");
			block.getInput("size").setVisible(true);			
		} else {
			block.getInput("size").removeField("framesize");
			block.getInput("size").appendField(new Blockly.FieldDropdown(amb82_mini_options), "framesize");
			block.getInput("size").setVisible(true);	
		}
  }
};

Blockly.Blocks['amb82_mini_facedetectionrecognition_rtsp_count'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_COUNT"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_23"]);
  }
};

Blockly.Blocks['amb82_mini_facedetectionrecognition_rtsp_rect'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_LIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_NAME"],"NAME"],		
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_X_MIN"],"X"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_Y_MIN"],"Y"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_X_MIDDLE"],"XM"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_Y_MIDDLE"],"YM"],				
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_X_MAX"],"X1"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_Y_MAX"],"Y1"],				
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_WIDTH"],"WIDTH"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_HIGHT"],"HEIGHT"],
				[Blockly.Msg.PROPERTY_INDEX,"INDEX"]			
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_23"]);
  }
};

Blockly.Blocks['amb82_mini_facedetectionrecognition_rtsp_action'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([			
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_REG"],"reg"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_DEL"],"del"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_RESET"],"reset"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_BACKUP"],"backup"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_RESTORE"],"restore"]		
		], this.validate), "action");
	this.appendValueInput("regname")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)   
		.appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_NAME"]); 		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_23"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="reg"||newValue=="del") {
			block.getInput("regname").setVisible(true);
		} else {
			block.getInput("regname").setVisible(false);	
		}
  }
};

Blockly.Blocks['amb82_mini_facedetectionrecognition_rtsp_notunknown'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_NOTUNKNOWN"]);	
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_23"]);
  }
};

Blockly.Blocks['amb82_mini_facedetection_rtsp'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["SCRFD","DEFAULT_SCRFD"],
 				["SCRFD_SD","CUSTOMIZED_SCRFD"]
		]), "model");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_LABEL"])
		.appendField(new Blockly.FieldDropdown([
			["Y","Y"],
			["N","N"]
		]), "label");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MODE"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_RTSP"],"rtsp"],		
			[Blockly.Msg["AMB82_MINI_RTSP_STILL"],"still"],
			[Blockly.Msg["AMB82_MINI_TCP"]+" (PORT:80)","tcp80"],			
			[Blockly.Msg["AMB82_MINI_TCP"]+" (PORT:81)","tcp"],
			[Blockly.Msg["AMB82_MINI_STILL"],""]
		], this.validate), "mode");
	this.appendDummyInput("size")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["FHD (1920¡ó1080)","VIDEO_FHD"],
			["HD (1280¡ó720)","VIDEO_HD"],
			["WVGA (640¡ó360)","VIDEO_WVGA"]
		]), "framesize");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_FINISH"]);	  
    this.appendStatementInput("statement_finish")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_12"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="still") {
			block.getInput("size").removeField("framesize");
			block.getInput("size").appendField(new Blockly.FieldDropdown(amb82_mini_still_options), "framesize");
			block.getInput("size").setVisible(true);			
		} else {
			block.getInput("size").removeField("framesize");
			block.getInput("size").appendField(new Blockly.FieldDropdown(amb82_mini_options), "framesize");
			block.getInput("size").setVisible(true);	
		}
  }
};

Blockly.Blocks['amb82_mini_facedetection_rtsp_count'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_COUNT"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['amb82_mini_facedetection_rtsp_rect'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_LIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_NAME"],"NAME"],			
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_SCORE"],"SCORE"],			
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_X_MIN"],"X"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_Y_MIN"],"Y"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_X_MIDDLE"],"XM"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_Y_MIDDLE"],"YM"],				
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_X_MAX"],"X1"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_Y_MAX"],"Y1"],				
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_WIDTH"],"WIDTH"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_HIGHT"],"HEIGHT"],
				[Blockly.Msg.PROPERTY_INDEX,"INDEX"]
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['amb82_mini_facedetection_rtsp_point'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_POINT"]);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
				["0", "0"],
				["1", "1"],
				["2", "2"],
				["3", "3"],
				["4", "4"]
		]), "index");
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([			
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_X_MIN"],"X"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_Y_MIN"],"Y"]		
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_12"]);
  }
};


Blockly.Blocks['amb82_mini_rtc_initial'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_RTC_INITIAL"]);
    this.appendValueInput("year_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_RTC_YEAR"]);			
    this.appendValueInput("month_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_RTC_MONTH"]);			
    this.appendValueInput("day_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_RTC_DAY"]);			
    this.appendValueInput("hour_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_RTC_HOUR"]);			
    this.appendValueInput("minute_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_RTC_MINUTE"]);			
    this.appendValueInput("second_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_RTC_SECOND"]);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_13"]);
  }
};

Blockly.Blocks['amb82_mini_rtc_enablealarm'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_RTC_ENABLEALARM"]);
    this.appendValueInput("days_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_RTC_DAY"]);			
    this.appendValueInput("hours_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_RTC_HOUR"]);			
    this.appendValueInput("minutes_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_RTC_MINUTE"]);
    this.appendValueInput("seconds_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_RTC_SECOND"]);			
    this.appendStatementInput("statement")
        .setCheck(null)
		.appendField(Blockly.Msg["AMB82_MINI_RTC_EXECUTE"]);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_13"]);
  }
};

Blockly.Blocks['amb82_mini_rtc_disablealarm'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_RTC_DISABLEALARM"]);			
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_13"]);
  }
};

Blockly.Blocks['amb82_mini_rtc_gettime'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_RTC_GETTIME"]);
	this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.NTPSERVER_GET_YEAR_SHOW,"year"],
		  [Blockly.Msg.NTPSERVER_GET_MONTH_SHOW,"month"],		  
		  [Blockly.Msg.NTPSERVER_GET_DAY_SHOW,"day"],
		  [Blockly.Msg.NTPSERVER_GET_HOUR_SHOW,"hour"],		  
		  [Blockly.Msg.NTPSERVER_GET_MINUTE_SHOW,"minute"],
		  [Blockly.Msg.NTPSERVER_GET_SECOND_SHOW,"second"],		  
		  [Blockly.Msg.NTPSERVER_GET_DATE_SHOW,"date"],		  
		  [Blockly.Msg.NTPSERVER_GET_TIME_SHOW,"time"],		  
		  [Blockly.Msg.NTPSERVER_GET_FULL_SHOW,"full"]				  
	  ]), "option");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_13"]);
  }
};


Blockly.Blocks['amb82_mini_interrupt'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_INTERRUPT"]);	
    this.appendValueInput("pin_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["AMB82_MINI_INTERRUPT_GPIO"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
 				[Blockly.Msg["AMB82_MINI_INTERRUPT_HIGH"],"INPUT_IRQ_RISE"],		
 				[Blockly.Msg["AMB82_MINI_INTERRUPT_LOW"],"INPUT_IRQ_FALL"]
		]), "mode_");		
    this.appendStatementInput("statement")
        .setCheck(null)
		.appendField(Blockly.Msg["AMB82_MINI_INTERRUPT_EXECUTE"]);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_17"]);
  }
};

Blockly.Blocks['amb82_mini_deepsleep_initial'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_DEEPSLEEP_INITIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_DEEPSLEEP_MODE"])
		.appendField(new Blockly.FieldDropdown([
 				["AON timer","0"],
 				["AON GPIO","1"],
 				["RTC","2"]
		], this.validate), "mode_");
    this.appendValueInput("days_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["AMB82_MINI_DEEPSLEEP_DAY"]);
    this.appendValueInput("hours_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["AMB82_MINI_DEEPSLEEP_HOUR"]);		
    this.appendValueInput("minutes_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["AMB82_MINI_DEEPSLEEP_MINUTE"]);
    this.appendValueInput("seconds_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["AMB82_MINI_DEEPSLEEP_SECOND"]);		
    this.appendDummyInput("pin")	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_DEEPSLEEP_GPIO"])
		.appendField(new Blockly.FieldDropdown([
 				["21","21"],
 				["22","22"]
		]), "pin_");			
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_26"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="0") {
			block.getInput("days_").setVisible(false);
			block.getInput("hours_").setVisible(false);
			block.getInput("minutes_").setVisible(false);
			block.getInput("seconds_").setVisible(true);
			block.getInput("pin").setVisible(false);
		} else if (newValue=="1") {
			block.getInput("days_").setVisible(false);
			block.getInput("hours_").setVisible(false);
			block.getInput("minutes_").setVisible(false);
			block.getInput("seconds_").setVisible(false);
			block.getInput("pin").setVisible(true);			
		} else if (newValue=="2") {
			block.getInput("days_").setVisible(true);
			block.getInput("hours_").setVisible(true);
			block.getInput("minutes_").setVisible(true);
			block.getInput("seconds_").setVisible(true);
			block.getInput("pin").setVisible(false);			
		}
  }
};

Blockly.Blocks['amb82_mini_deepsleep_start'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_DEEPSLEEP_START"]);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_26"]);
  }
};

Blockly.Blocks['amb82_mini_gtimer_initial'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_GTIMER"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(new Blockly.FieldDropdown([
 				["0","0"],
 				["1","1"],
 				["2","2"],
 				["3","3"],
 				["4","4"]
		]), "index_");
    this.appendValueInput("interval_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["AMB82_MINI_GTIMER_INTERVAL1"]);
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI_GTIMER_INTERVAL2"]);		
    this.appendStatementInput("statement")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_23"]);
  }
};

Blockly.Blocks['amb82_mini_gtimer_function'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_GTIMER"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_GTIMER_FUNCTION"])
			.appendField(new Blockly.FieldDropdown([
 				["0","0"],
 				["1","1"],
 				["2","2"],
 				["3","3"],
 				["4","4"]
		]), "index_");	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_23"]);
  }
};



Blockly.Blocks['amb82_mini_ntpserver_initial'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg.NTPSERVER_INITIAL_SHOW);
    this.appendValueInput("gmtOffset")
        .setCheck("Number")
		.appendField(Blockly.Msg.NTPSERVER_GMTOFFSET_SHOW);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(170);
  }
};

Blockly.Blocks['amb82_mini_ntpserver_getlocaltime'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg.NTPSERVER_GETLOCALTIME_SHOW);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(170);
  }
};

Blockly.Blocks['amb82_mini_ntpserver_get'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg.NTPSERVER_GET_SHOW);
	this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.NTPSERVER_GET_YEAR_SHOW,"year"],
		  [Blockly.Msg.NTPSERVER_GET_MONTH_SHOW,"month"],		  
		  [Blockly.Msg.NTPSERVER_GET_DAY_SHOW,"day"],
		  [Blockly.Msg.NTPSERVER_GET_HOUR_SHOW,"hour"],		  
		  [Blockly.Msg.NTPSERVER_GET_MINUTE_SHOW,"minute"],
		  [Blockly.Msg.NTPSERVER_GET_SECOND_SHOW,"second"],		  
		  [Blockly.Msg.NTPSERVER_GET_DATE_SHOW,"date"],		  
		  [Blockly.Msg.NTPSERVER_GET_TIME_SHOW,"time"],		  
		  [Blockly.Msg.NTPSERVER_GET_FULL_SHOW,"full"]				  
	  ]), "option"); 
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(170);
    
    
  }
};




Blockly.Blocks['udp_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["UDP"])	
        .appendField(Blockly.Msg["UDP_INITIAL"]);
    this.appendValueInput("port")
        .setCheck("Number")
		.appendField(Blockly.Msg["UDP_PORT"]);
    this.appendDummyInput()		
		.appendField(Blockly.Msg["UDP_EXECUTE"]);
    this.appendStatementInput("statement")
        .setCheck(null);	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};


Blockly.Blocks['udp_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["UDP"])
        .appendField(Blockly.Msg["UDP_GET"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["UDP_IP"],"ip"],
			[Blockly.Msg["UDP_PORT"],"port"],
			[Blockly.Msg["UDP_DATA"],"data"]
		]), "property");
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['udp_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["UDP"])
        .appendField(Blockly.Msg["UDP_WRITE"]);
    this.appendValueInput("ip")
        .setCheck("String")
		.appendField(Blockly.Msg["UDP_IP"]);		
    this.appendValueInput("port")
        .setCheck("Number")
		.appendField(Blockly.Msg["UDP_PORT"]);		
    this.appendValueInput("data")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["UDP_DATA"]);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};


Blockly.Blocks['amb82_mini_board_pins'] = {
  init: function() {
    this.appendDummyInput()
	    	.appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_BOARD_PIN"]);	
    this.appendDummyInput("hub8735")	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([		
			[" (P0) GPF9/PWM3","0"],			
			[" (P1) GPA2/ADC6/SERIAL1_TX [*IRINL]","1"],
			[" (P2) GPA3/ADC7/SERIAL1_RX [*IRINR]","2"],
			["*(P3) GPF0/ADC0 [LED_COLR3]","3"],
			["*(P4) GPF2/ADC2 [LED_COLR1]","4"],
			["*(P5) GPD17	[BTN A]","5"],
			["*(P6) GPF14/PWM8 [LED_COLR4]","6"],
			["*(P7) GPF12/PWM6 [LED_COLR2]","7"],
			[" (P8) GPE2/SERIAL3_RX ","8"],
			[" (P9) GPE1/SERIAL3_TX ","9"],
			["*(P10)GPF1/ADC1 [LED_COLR5]","10"],
			["*(P11)GPD16/SERIAL2_RX [BTN B]","11"],
			[" (P12)GPD15/SERIAL2_TX [*IRLED]","12"],
			[" (P13)GPF6/PWM1/SPI_SCLK ","13"],
			[" (P14)GPF5/SPI_MISO ","14"],
			[" (P15)GPF7/PWM0/SPI_MOSI ","15"],
			[" (P16)GPF8/PWM2/SPI_SS ","16"],
			["*(P19)GPE3/I2C1_SCL ","19"],
			["*(P20)GPE2/I2C1_SDA ","20"]
		]), "func_hub8735");
	//this.getInput("hub8735").setVisible(false);
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_8"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="amb82") {
			block.getInput("amb82").setVisible(true);
			block.getInput("hub8735").setVisible(false);
		} else {
			block.getInput("amb82").setVisible(false);
			block.getInput("hub8735").setVisible(true);			
		}
  }
};

/*------------------------------------
*					hub8735bit Input ¬ÛÃö¿n¤ì
------------------------------------*/
Blockly.Blocks['hub8735bit_button_if'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["HUB8735BIT_BUTTON"])
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["A","0"],["B","1"],["A+B","2"]]),"AB_BUTTON_");
		this.appendDummyInput()
	    .appendField(Blockly.Msg["HUB8735BIT_BUTTON_CHECK"]);
    this.appendStatementInput("do_")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);

			this.setInputsInline(true);
	    this.setPreviousStatement(true, null);
	    this.setNextStatement(true, null);
	    this.setColour(300);	
	  }
};

Blockly.Blocks['hub8735bit_shake_if'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["HUB8735BIT_SHAKE"])
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.HUB8735BIT_SHAKE_0,"GESTURE_SHAKE"],[Blockly.Msg.HUB8735BIT_SHAKE_1,"GESTURE_USBUP"],[Blockly.Msg.HUB8735BIT_SHAKE_2,"GESTURE_USBDOWN"],[Blockly.Msg.HUB8735BIT_SHAKE_3,"GESTURE_CAMUP"],[Blockly.Msg.HUB8735BIT_SHAKE_4,"GESTURE_CAMDOWN"],[Blockly.Msg.HUB8735BIT_SHAKE_5,"GESTURE_TILTLEFT"],[Blockly.Msg.HUB8735BIT_SHAKE_6,"GESTURE_TILTRIGHT"],[Blockly.Msg.HUB8735BIT_SHAKE_7,"GESTURE_FALL"],[Blockly.Msg.HUB8735BIT_SHAKE_8,"GESTURE_3G"],[Blockly.Msg.HUB8735BIT_SHAKE_9,"GESTURE_6G"],[Blockly.Msg.HUB8735BIT_SHAKE_10,"GESTURE_8G"]]),"SHAKE_TYPE_");
		this.appendDummyInput()
	    .appendField(Blockly.Msg["HUB8735BIT_SHAKE_CHECK"]);
    this.appendStatementInput("do_")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);

			this.setInputsInline(true);		
	    this.setPreviousStatement(true, null);
	    this.setNextStatement(true, null);
	    this.setColour(300);	
	  }
};

Blockly.Blocks['hub8735bit_gpio_if'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["HUB8735BIT_GPIO"])
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["P0","0"],["P1","1"],["P2","2"]]),"GPIO_PIN_");
		this.appendDummyInput()
	    .appendField(Blockly.Msg["HUB8735BIT_GPIO_CHECK"]);
    this.appendStatementInput("do_")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);

			this.setInputsInline(true);		
	    this.setPreviousStatement(true, null);
	    this.setNextStatement(true, null);
	    this.setColour(300);	
	  }
};

Blockly.Blocks['hub8735bit_button_condition'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_BUTTON)
			.appendField(new Blockly.FieldDropdown([["A","0"],["B","1"],["A+B","2"]]),"AB_BUTTON_CON");
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_BUTTON_CHECK);
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(300);			
	}
};

Blockly.Blocks['hub8735bit_shake_condition'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_SHAKE)
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.HUB8735BIT_SHAKE_0,"GESTURE_SHAKE"],[Blockly.Msg.HUB8735BIT_SHAKE_1,"GESTURE_USBUP"],[Blockly.Msg.HUB8735BIT_SHAKE_2,"GESTURE_USBDOWN"],[Blockly.Msg.HUB8735BIT_SHAKE_3,"GESTURE_CAMUP"],[Blockly.Msg.HUB8735BIT_SHAKE_4,"GESTURE_CAMDOWN"],[Blockly.Msg.HUB8735BIT_SHAKE_5,"GESTURE_TILTLEFT"],[Blockly.Msg.HUB8735BIT_SHAKE_6,"GESTURE_TILTRIGHT"],[Blockly.Msg.HUB8735BIT_SHAKE_7,"GESTURE_FALL"],[Blockly.Msg.HUB8735BIT_SHAKE_8,"GESTURE_3G"],[Blockly.Msg.HUB8735BIT_SHAKE_9,"GESTURE_6G"],[Blockly.Msg.HUB8735BIT_SHAKE_10,"GESTURE_8G"]]),"SHAKE_TYPE_CON");
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_SHAKE_CHECK);
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(300);			
	}
};

Blockly.Blocks['hub8735bit_gpio_condition'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_GPIO)
			.appendField(new Blockly.FieldDropdown([["P0","0"],["P1","1"],["P2","2"]]),"GPIO_PIN_CON");
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_GPIO_CHECK);
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(300);			
	}
};

Blockly.Blocks['hub8735bit_gsensor_value'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_GSENSOR_VALUE)
			.appendField(new Blockly.FieldDropdown([["x","1"],["y","2"],["z","3"],[Blockly.Msg.HUB8735BIT_GSENSOR_STR,"4"]]),"GSENSOR_TYPE_CON");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(300);			
	}
};

Blockly.Blocks['hub8735bit_compass_value'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_COMP_VALUE)

		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(300);			
	}
};

Blockly.Blocks['hub8735bit_light_L_value'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_LIGHT_R_VALUE)

		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(300);			
	}
};

Blockly.Blocks['hub8735bit_light_R_value'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_LIGHT_L_VALUE)

		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(300);			
	}
};

Blockly.Blocks['hub8735bit_temperature_value'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_TMP_VALUE)

		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(300);			
	}
};

/*------------------------------------
*					hub8735bit LED ¬ÛÃö¿n¤ì
------------------------------------*/
lockly.Blocks['hub8735bit_led_set_xy'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.SHOWLED_SET)
        .appendField(Blockly.Msg.SHOWLED_LED_X)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.SHOWLED_LED_0,"0"],
			[Blockly.Msg.SHOWLED_LED_1,"1"],
			[Blockly.Msg.SHOWLED_LED_2,"2"],
			[Blockly.Msg.SHOWLED_LED_3,"3"],
			[Blockly.Msg.SHOWLED_LED_4,"4"],
			]), "value_number_x_set")
				.appendField(Blockly.Msg.SHOWLED_LED_Y)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.SHOWLED_LED_0,"0"],
			[Blockly.Msg.SHOWLED_LED_1,"1"],
			[Blockly.Msg.SHOWLED_LED_2,"2"],
			[Blockly.Msg.SHOWLED_LED_3,"3"],
			[Blockly.Msg.SHOWLED_LED_4,"4"],
			]), "value_number_y_set");
		  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(268);
  }
};

Blockly.Blocks['hub8735bit_led_switch_xy'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.SHOWLED_SWITCH)
        .appendField(Blockly.Msg.SHOWLED_LED_X)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.SHOWLED_LED_0,"0"],
			[Blockly.Msg.SHOWLED_LED_1,"1"],
			[Blockly.Msg.SHOWLED_LED_2,"2"],
			[Blockly.Msg.SHOWLED_LED_3,"3"],
			[Blockly.Msg.SHOWLED_LED_4,"4"],
			]), "value_number_x_switch")
				.appendField(Blockly.Msg.SHOWLED_LED_Y)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.SHOWLED_LED_0,"0"],
			[Blockly.Msg.SHOWLED_LED_1,"1"],
			[Blockly.Msg.SHOWLED_LED_2,"2"],
			[Blockly.Msg.SHOWLED_LED_3,"3"],
			[Blockly.Msg.SHOWLED_LED_4,"4"],
			]), "value_number_y_switch");
		  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(268);
  }
};

Blockly.Blocks['hub8735bit_led_clr_xy'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.SHOWLED_CLEAR_XY)
        .appendField(Blockly.Msg.SHOWLED_LED_X)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.SHOWLED_LED_0,"0"],
			[Blockly.Msg.SHOWLED_LED_1,"1"],
			[Blockly.Msg.SHOWLED_LED_2,"2"],
			[Blockly.Msg.SHOWLED_LED_3,"3"],
			[Blockly.Msg.SHOWLED_LED_4,"4"],
			]), "value_number_x_clear")
				.appendField(Blockly.Msg.SHOWLED_LED_Y)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.SHOWLED_LED_0,"0"],
			[Blockly.Msg.SHOWLED_LED_1,"1"],
			[Blockly.Msg.SHOWLED_LED_2,"2"],
			[Blockly.Msg.SHOWLED_LED_3,"3"],
			[Blockly.Msg.SHOWLED_LED_4,"4"],
			]), "value_number_y_clear");
		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(268);
  }
};

Blockly.Blocks['hub8735bit_led_status_xy'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.SHOWLED_STATUS)
        .appendField(Blockly.Msg.SHOWLED_LED_X)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.SHOWLED_LED_0,"0"],
			[Blockly.Msg.SHOWLED_LED_1,"1"],
			[Blockly.Msg.SHOWLED_LED_2,"2"],
			[Blockly.Msg.SHOWLED_LED_3,"3"],
			[Blockly.Msg.SHOWLED_LED_4,"4"],
			]), "value_number_x_status")
				.appendField(Blockly.Msg.SHOWLED_LED_Y)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.SHOWLED_LED_0,"0"],
			[Blockly.Msg.SHOWLED_LED_1,"1"],
			[Blockly.Msg.SHOWLED_LED_2,"2"],
			[Blockly.Msg.SHOWLED_LED_3,"3"],
			[Blockly.Msg.SHOWLED_LED_4,"4"],
			]), "value_number_y_status");
		  
    this.setInputsInline(true);
		this.setOutput(true);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);    
    this.setColour(268);
  }
};
/*------------------------------------
*					hub8735bit NN ¬ÛÃö¿n¤ì
------------------------------------*/
Blockly.Blocks['amb82_mini_motiondetection_rtsp'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_MOTIONDETECTION"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MOTIONDETECTION_LABEL"])
		.appendField(new Blockly.FieldDropdown([
			["Y","Y"],
			["N","N"]
		]), "label");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MODE"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_RTSP"],"rtsp"],
			[Blockly.Msg["AMB82_MINI_STILL"],"still"]
		], this.validate), "mode");
	this.appendDummyInput("size")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			//["2K (2560x1440)","VIDEO_2K"],
			//["5M (2448x2050)","VIDEO_5M"], 
			//["3M (2048x1536)","VIDEO_3M"],
			["FHD (1920x1080)","VIDEO_FHD"],
			["HD (1280x720)","VIDEO_HD"],
			["D1 (720x480)","VIDEO_D1"],
			["VGA (640x480)","VIDEO_VGA"],
			["WVGA (640x360)","VIDEO_WVGA"],
			["QVGA (320x240)","VIDEO_QVGA"],
			["QCIF (176x144)","VIDEO_QCIF"]
		]), "framesize");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_MOTIONDETECTION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_MOTIONDETECTION_FINISH"]);	  
    this.appendStatementInput("statement_finish")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_19"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="rtsp") {
			block.getInput("size").setVisible(false);
		} else {
			block.getInput("size").setVisible(true);	
		}
  }
};

Blockly.Blocks['amb82_mini_motiondetection_rtsp_count'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_MOTIONDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_MOTIONDETECTION_COUNT"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_19"]);
  }
};

Blockly.Blocks['amb82_mini_motiondetection_rtsp_rect'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_MOTIONDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_MOTIONDETECTION_ITEMLIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([			
				[Blockly.Msg["AMB82_MINI_MOTIONDETECTION_X_MIN"],"X"],
				[Blockly.Msg["AMB82_MINI_MOTIONDETECTION_Y_MIN"],"Y"],
				[Blockly.Msg["AMB82_MINI_MOTIONDETECTION_X_MIDDLE"],"XM"],
				[Blockly.Msg["AMB82_MINI_MOTIONDETECTION_Y_MIDDLE"],"YM"],				
				[Blockly.Msg["AMB82_MINI_MOTIONDETECTION_X_MAX"],"X1"],
				[Blockly.Msg["AMB82_MINI_MOTIONDETECTION_Y_MAX"],"Y1"],				
				[Blockly.Msg["AMB82_MINI_MOTIONDETECTION_WIDTH"],"WIDTH"],
				[Blockly.Msg["AMB82_MINI_MOTIONDETECTION_HIGHT"],"HEIGHT"],
				[Blockly.Msg.PROPERTY_INDEX,"INDEX"]
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_19"]);
  }
};

Blockly.Blocks['amb82_mini_imageclassification'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["IMGCLASS","DEFAULT_IMGCLASS"],
 				["IMGCLASS_SD","CUSTOMIZED_IMGCLASS"]
		]), "model");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_28"]);
  }
};

Blockly.Blocks['amb82_mini_imageclassification_get'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION_LIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION_NAME"],"NAME"],
				[Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION_SCORE"],"SCORE"]				
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_28"]);
  }
};

Blockly.Blocks['amb82_mini_imageclassification_class_name'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_IMAGECLASSIFICATION_CLASS"]);
	this.appendValueInput("property")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT); 			
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_28"]);
  }
};

Blockly.Blocks['amb82_mini_audioclassification'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["YAMNET","DEFAULT_YAMNET"],
 				["YAMNET_SD","CUSTOMIZED_YAMNET"]
		]), "model");
    this.appendDummyInput("aud")
        .appendField(Blockly.Msg["AMB82_MINI_AUDIO"])	
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_ANALOG_MIC"],"USE_AUDIO_AMIC"],
			[Blockly.Msg["AMB82_MINI_DIGITAL_PDM_MIC"],"USE_AUDIO_LEFT_DMIC"]
		]), "audio");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FINISH"]);	  
    this.appendStatementInput("statement_finish")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_24"]);
  }
};

Blockly.Blocks['amb82_mini_audioclassification_count'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COUNT"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_24"]);
  }
};

Blockly.Blocks['amb82_mini_audioclassification_get'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_NAME"],"NAME"],
				[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCORE"],"SCORE"]				
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_24"]);
  }
};

Blockly.Blocks['amb82_mini_audioclassification_object'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ITEMAUDIO"]);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SPEECH"], "Speech"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHILD_SPEECH_KID_SPEAKING"], "Child speech, kid speaking"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CONVERSATION"], "Conversation"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_NARRATION_MONOLOGUE"], "Narration, monologue"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BABBLING"], "Babbling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SPEECH_SYNTHESIZER"], "Speech synthesizer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHOUT"], "Shout"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BELLOW"], "Bellow"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHOOP"], "Whoop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_YELL"], "Yell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHILDREN_SHOUTING"], "Children shouting"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCREAMING"], "Screaming"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHISPERING"], "Whispering"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LAUGHTER"], "Laughter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BABY_LAUGHTER"], "Baby laughter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GIGGLE"], "Giggle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNICKER"], "Snicker"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BELLY_LAUGH"], "Belly laugh"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHUCKLE_CHORTLE"], "Chuckle, chortle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRYING_SOBBING"], "Crying, sobbing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BABY_CRY_INFANT_CRY"], "Baby cry, infant cry"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHIMPER"], "Whimper"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WAIL_MOAN"], "Wail, moan"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SIGH"], "Sigh"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SINGING"], "Singing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHOIR"], "Choir"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_YODELING"], "Yodeling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHANT"], "Chant"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MANTRA"], "Mantra"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHILD_SINGING"], "Child singing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SYNTHETIC_SINGING"], "Synthetic singing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAPPING"], "Rapping"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HUMMING"], "Humming"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GROAN"], "Groan"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GRUNT"], "Grunt"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHISTLING"], "Whistling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BREATHING"], "Breathing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHEEZE"], "Wheeze"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNORING"], "Snoring"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GASP"], "Gasp"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PANT"], "Pant"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNORT"], "Snort"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COUGH"], "Cough"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THROAT_CLEARING"], "Throat clearing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNEEZE"], "Sneeze"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNIFF"], "Sniff"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RUN"], "Run"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHUFFLE"], "Shuffle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WALK_FOOTSTEPS"], "Walk, footsteps"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHEWING_MASTICATION"], "Chewing, mastication"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BITING"], "Biting"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GARGLING"], "Gargling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STOMACH_RUMBLE"], "Stomach rumble"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BURPING_ERUCTATION"], "Burping, eructation"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HICCUP"], "Hiccup"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FART"], "Fart"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HANDS"], "Hands"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FINGER_SNAPPING"], "Finger snapping"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLAPPING"], "Clapping"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HEART_SOUNDS_HEARTBEAT"], "Heart sounds, heartbeat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HEART_MURMUR"], "Heart murmur"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHEERING"], "Cheering"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_APPLAUSE"], "Applause"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHATTER"], "Chatter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CROWD"], "Crowd"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HUBBUB_SPEECH_NOISE_SPEECH_BABBLE"], "Hubbub, speech noise, speech babble"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHILDREN_PLAYING"], "Children playing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ANIMAL"], "Animal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DOMESTIC_ANIMALS_PETS"], "Domestic animals, pets"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DOG"], "Dog"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BARK"], "Bark"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_YIP"], "Yip"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HOWL"], "Howl"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOW_WOW"], "Bow-wow"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GROWLING"], "Growling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHIMPER_DOG"], "Whimper (dog)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAT"], "Cat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PURR"], "Purr"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MEOW"], "Meow"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HISS"], "Hiss"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CATERWAUL"], "Caterwaul"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LIVESTOCK_FARM_ANIMALS_WORKING_ANIMALS"], "Livestock, farm animals, working animals"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HORSE"], "Horse"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLIP_CLOP"], "Clip-clop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_NEIGH_WHINNY"], "Neigh, whinny"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CATTLE_BOVINAE"], "Cattle, bovinae"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOO"], "Moo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COWBELL"], "Cowbell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PIG"], "Pig"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OINK"], "Oink"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GOAT"], "Goat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BLEAT"], "Bleat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHEEP"], "Sheep"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FOWL"], "Fowl"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHICKEN_ROOSTER"], "Chicken, rooster"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLUCK"], "Cluck"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CROWING_COCK_A_DOODLE_DOO"], "Crowing, cock-a-doodle-doo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TURKEY"], "Turkey"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GOBBLE"], "Gobble"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_QUACK"], "Quack"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DUCK"], "Duck"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GOOSE"], "Goose"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HONK"], "Honk"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WILD_ANIMALS"], "Wild animals"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROARING_CATS_LIONS_TIGERS"], "Roaring cats (lions, tigers)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROAR"], "Roar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BIRD"], "Bird"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BIRD_VOCALIZATION_BIRD_CALL_BIRD_SONG"], "Bird vocalization, bird call, bird song"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHIRP_TWEET"], "Chirp, tweet"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SQUAWK"], "Squawk"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PIGEON_DOVE"], "Pigeon, dove"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COO"], "Coo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CROW"], "Crow"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAW"], "Caw"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OWL"], "Owl"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HOOT"], "Hoot"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BIRD_FLIGHT_FLAPPING_WINGS"], "Bird flight, flapping wings"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CANIDAE_DOGS_WOLVES"], "Canidae, dogs, wolves"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RODENTS_RATS_MICE"], "Rodents, rats, mice"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOUSE"], "Mouse"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PATTER"], "Patter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_INSECT"], "Insect"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRICKET"], "Cricket"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOSQUITO"], "Mosquito"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FLY_HOUSEFLY"], "Fly, housefly"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BUZZ"], "Buzz"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BEE_WASP_ETC"], "Bee, wasp, etc."],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FROG"], "Frog"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CROAK"], "Croak"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNAKE"], "Snake"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RATTLE"], "Rattle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHALE_VOCALIZATION"], "Whale vocalization"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC"], "Music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSICAL_INSTRUMENT"], "Musical instrument"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PLUCKED_STRING_INSTRUMENT"], "Plucked string instrument"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GUITAR"], "Guitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRIC_GUITAR"], "Electric guitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BASS_GUITAR"], "Bass guitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ACOUSTIC_GUITAR"], "Acoustic guitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STEEL_GUITAR_SLIDE_GUITAR"], "Steel guitar, slide guitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TAPPING_GUITAR_TECHNIQUE"], "Tapping (guitar technique)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STRUM"], "Strum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BANJO"], "Banjo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SITAR"], "Sitar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MANDOLIN"], "Mandolin"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ZITHER"], "Zither"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_UKULELE"], "Ukulele"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_KEYBOARD_MUSICAL"], "Keyboard (musical)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PIANO"], "Piano"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRIC_PIANO"], "Electric piano"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ORGAN"], "Organ"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRONIC_ORGAN"], "Electronic organ"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HAMMOND_ORGAN"], "Hammond organ"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SYNTHESIZER"], "Synthesizer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SAMPLER"], "Sampler"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HARPSICHORD"], "Harpsichord"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PERCUSSION"], "Percussion"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRUM_KIT"], "Drum kit"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRUM_MACHINE"], "Drum machine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRUM"], "Drum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SNARE_DRUM"], "Snare drum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RIMSHOT"], "Rimshot"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRUM_ROLL"], "Drum roll"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BASS_DRUM"], "Bass drum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TIMPANI"], "Timpani"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TABLA"], "Tabla"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CYM_BAL"], "Cymbal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HI_HAT"], "Hi-hat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WOOD_BLOCK"], "Wood block"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TAMBOURINE"], "Tambourine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RATTLE_INSTRUMENT"], "Rattle (instrument)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MARACA"], "Maraca"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GONG"], "Gong"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TUBULAR_BELLS"], "Tubular bells"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MALLET_PERCUSSION"], "Mallet percussion"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MARIMBA_XYLOPHONE"], "Marimba, xylophone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GLOCKENSPIEL"], "Glockenspiel"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VIBRAPHONE"], "Vibraphone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STEELPAN"], "Steelpan"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ORCHESTRA"], "Orchestra"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BRASS_INSTRUMENT"], "Brass instrument"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FRENCH_HORN"], "French horn"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRUMPET"], "Trumpet"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TROMBONE"], "Trombone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOWED_STRING_INSTRUMENT"], "Bowed string instrument"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STRING_SECTION"], "String section"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VIOLIN_FIDDLE"], "Violin, fiddle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PIZZICATO"], "Pizzicato"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CELL"], "Cello"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DOUBLE_BASS"], "Double bass"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WIND_INSTRUMENT_WOODWIND_INSTRUMENT"], "Wind instrument, woodwind instrument"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FLUTE"], "Flute"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SAXOPHONE"], "Saxophone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLARINET"], "Clarinet"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HARP"], "Harp"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BELL"], "Bell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHURCH_BELL"], "Church bell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JINGLE_BELL"], "Jingle bell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BICYCLE_BELL"], "Bicycle bell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TUNING_FORK"], "Tuning fork"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHIME"], "Chime"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WIND_CHIME"], "Wind chime"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHANGE_RINGING_CAMPANOLOGY"], "Change ringing (campanology)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HARMONICA"], "Harmonica"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ACCORDION"], "Accordion"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BAGPIPES"], "Bagpipes"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DIDGERIDOO"], "Didgeridoo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHOFAR"], "Shofar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THEREMIN"], "Theremin"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SINGING_BOWL"], "Singing bowl"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCRATCHING_PERFORMANCE_TECHNIQUE"], "Scratching (performance technique)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_POP_MUSIC"], "Pop music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HIP_HOP_MUSIC"], "Hip hop music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BEATBOXING"], "Beatboxing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROCK_MUSIC"], "Rock music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HEAVY_METAL"], "Heavy metal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PUNK_ROCK"], "Punk rock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GRUNGE"], "Grunge"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PROGRESSIVE_ROCK"], "Progressive rock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROCK_AND_ROLL"], "Rock and roll"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PSYCHEDELIC_ROCK"], "Psychedelic rock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RHYTHM_AND_BLUES"], "Rhythm and blues"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SOUL_MUSIC"], "Soul music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_REGGAE"], "Reggae"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COUNTRY"], "Country"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SWING_MUSIC"], "Swing music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BLUEGRASS"], "Bluegrass"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FUNK"], "Funk"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FOLK_MUSIC"], "Folk music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MIDDLE_EASTERN_MUSIC"], "Middle Eastern music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JAZZ"], "Jazz"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DISCO"], "Disco"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLASSICAL_MUSIC"], "Classical music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OPERA"], "Opera"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRONIC_MUSIC"], "Electronic music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HOUSE_MUSIC"], "House music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TECHNO"], "Techno"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DUBSTEP"], "Dubstep"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRUM_AND_BASS"], "Drum and bass"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRONICA"], "Electronica"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRONIC_DANCE_MUSIC"], "Electronic dance music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AMBIENT_MUSIC"], "Ambient music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRANCE_MUSIC"], "Trance music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC_OF_LATIN_AMERICA"], "Music of Latin America"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SALSA_MUSIC"], "Salsa music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FLAMENCO"], "Flamenco"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BLUES"], "Blues"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC_FOR_CHILDREN"], "Music for children"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_NEW_AGE_MUSIC"], "New-age music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VOCAL_MUSIC"], "Vocal music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_A_CAPELLA"], "A capella"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC_OF_AFRICA"], "Music of Africa"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AFROBEAT"], "Afrobeat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHRISTIAN_MUSIC"], "Christian music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GOSPEL_MUSIC"], "Gospel music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC_OF_ASIA"], "Music of Asia"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CARNATIC_MUSIC"], "Carnatic music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MUSIC_OF_BOLLYWOOD"], "Music of Bollywood"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SKA"], "Ska"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRADITIONAL_MUSIC"], "Traditional music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_INDEPENDENT_MUSIC"], "Independent music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SONG"], "Song"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BACKGROUND_MUSIC"], "Background music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THEME_MUSIC"], "Theme music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JINGLE_MUSIC"], "Jingle (music)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SOUNDTRACK_MUSIC"], "Soundtrack music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LULLABY"], "Lullaby"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VIDEO_GAME_MUSIC"], "Video game music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHRISTMAS_MUSIC"], "Christmas music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DANCE_MUSIC"], "Dance music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WEDDING_MUSIC"], "Wedding music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HAPPY_MUSIC"], "Happy music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SAD_MUSIC"], "Sad music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TENDER_MUSIC"], "Tender music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_EXCITING_MUSIC"], "Exciting music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ANGRY_MUSIC"], "Angry music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCARY_MUSIC"], "Scary music"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WIND"], "Wind"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RUSTLING_LEAVES"], "Rustling leaves"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WIND_NOISE_MICROPHONE"], "Wind noise (microphone)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THUNDERSTORM"], "Thunderstorm"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THUNDER"], "Thunder"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WATER"], "Water"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAIN"], "Rain"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAINDROP"], "Raindrop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAIN_ON_SURFACE"], "Rain on surface"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STREAM"], "Stream"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WATERFALL"], "Waterfall"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OCEAN"], "Ocean"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WAVES_SURF"], "Waves, surf"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STEAM"], "Steam"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GURGLING"], "Gurgling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIRE"], "Fire"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRACKLE"], "Crackle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VEHICLE"], "Vehicle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOAT_WATER_VEHICLE"], "Boat, Water vehicle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SAILBOAT_SAILING_SHIP"], "Sailboat, sailing ship"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROWBAY_CANOE_KAYAK"], "Rowboat, canoe, kayak"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOTORBOAT_SPEEDBOAT"], "Motorboat, speedboat"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHIP"], "Ship"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOTOR_VEHICLE_ROAD"], "Motor vehicle (road)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAR"], "Car"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VEHICLE_HORN_CAR_HORN_HONKING"], "Vehicle horn, car horn, honking"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TOOT"], "Toot"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAR_ALARM"], "Car alarm"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_POWER_WINDOWS_ELECTRIC_WINDOWS"], "Power windows, electric windows"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SKIDDING"], "Skidding"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TIRE_SQUEAL"], "Tire squeal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAR_PASSING_BY"], "Car passing by"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RACE_CAR_AUTO_RACING"], "Race car, auto racing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRUCK"], "Truck"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AIR_BRAKE"], "Air brake"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AIR_HORN_TRUCK_HORN"], "Air horn, truck horn"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_REVERSING_BEEPS"], "Reversing beeps"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ICE_CREAM_TRUCK_ICE_CREAM_VAN"], "Ice cream truck, ice cream van"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BUS"], "Bus"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_EMERGENCY_VEHICLE"], "Emergency vehicle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_POLICE_CAR_SIREN"], "Police car (siren)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AMBULANCE_SIREN"], "Ambulance (siren)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIRE_ENGINE_FIRE_TRUCK_SIREN"], "Fire engine, fire truck (siren)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MOTORCYCLE"], "Motorcycle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRAFFIC_NOISE_ROADWAY_NOISE"], "Traffic noise, roadway noise"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAIL_TRANSPORT"], "Rail transport"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRAIN"], "Train"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRAIN_WHISTLE"], "Train whistle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRAIN_HORN"], "Train horn"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RAILROAD_CAR_TRAIN_WAGON"], "Railroad car, train wagon"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRAIN_WHEELS_SQUEALING"], "Train wheels squealing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SUBWAY_METRO_UNDERGROUND"], "Subway, metro, underground"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AIRCRAFT"], "Aircraft"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AIRCRAFT_ENGINE"], "Aircraft engine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JET_ENGINE"], "Jet engine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PROPELLER_AIRSCREW"], "Propeller, airscrew"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HELICOPTER"], "Helicopter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIXED_WING_AIRCRAFT_AIRPLANE"], "Fixed-wing aircraft, airplane"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BICYCLE"], "Bicycle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SKADEBOARD"], "Skateboard"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ENGINE"], "Engine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LIGHT_ENGINE_HIGH_FREQUENCY"], "Light engine (high frequency)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DENTAL_DRILL_DENTISTS_DRILL"], "Dental drill, dentist's drill"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LAWN_MOWER"], "Lawn mower"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHAINSAW"], "Chainsaw"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MEDIUM_ENGINE_MID_FREQUENCY"], "Medium engine (mid frequency)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HEAVY_ENGINE_LOW_FREQUENCY"], "Heavy engine (low frequency)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ENGINE_KNOCKING"], "Engine knocking"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ENGINE_STARTING"], "Engine starting"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_IDLING"], "Idling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ACCELERATING_REVVING_VROOM"], "Accelerating, revving, vroom"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DOOR"], "Door"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DOORBELL"], "Doorbell"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DING_DONG"], "Ding-dong"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SLIDING_DOOR"], "Sliding door"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SLAM"], "Slam"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_KNOCK"], "Knock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TAP"], "Tap"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SQUEAK"], "Squeak"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CUPBOARD_OPEN_OR_CLOSE"], "Cupboard open or close"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRAWER_OPEN_OR_CLOSE"], "Drawer open or close"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DISHES_POTS_AND_PANS"], "Dishes, pots, and pans"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CUTLERY_SILVERWARE"], "Cutlery, silverware"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHOPPING_FOOD"], "Chopping (food)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FRYING_FOOD"], "Frying (food)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MICROWAVE_OVEN"], "Microwave oven"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BLENDER"], "Blender"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WATER_TAP_FAUCET"], "Water tap, faucet"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SINK_FILLING_OR_WASHING"], "Sink (filling or washing)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BATHTUB_FILLING_OR_WASHING"], "Bathtub (filling or washing)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HAIR_DRYER"], "Hair dryer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TOILET_FLUSH"], "Toilet flush"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TOOTHBRUSH"], "Toothbrush"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRIC_TOOTHBRUSH"], "Electric toothbrush"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VACUUM_CLEANER"], "Vacuum cleaner"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ZIPPER_CLOTHING"], "Zipper (clothing)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_KEYS_JANGLING"], "Keys jangling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COIN_DROPPING"], "Coin (dropping)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCISSORS"], "Scissors"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRIC_SHAVER_ELECTRIC_RAZOR"], "Electric shaver, electric razor"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHUFFLING_CARDS"], "Shuffling cards"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TYPING"], "Typing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TYPEWRITER"], "Typewriter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_COMPUTER_KEYBOARD"], "Computer keyboard"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WRITING"], "Writing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ALARM"], "Alarm"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TELEPHONE"], "Telephone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TELEPHONE_BELL_RINGING"], "Telephone bell ringing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RINGTONE"], "Ringtone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TELEPHONE_DIALING_DTMF"], "Telephone dialing, DTMF"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DIAL_TONE"], "Dial tone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BUSY_SIGNAL"], "Busy signal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ALARM_CLOCK"], "Alarm clock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SIREN"], "Siren"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CIVIL_DEFENSE_SIREN"], "Civil defense siren"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BUZZER"], "Buzzer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SMOKE_DETECTOR_SMOKE_ALARM"], "Smoke detector, smoke alarm"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIRE_ALARM"], "Fire alarm"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FOGHORN"], "Foghorn"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHISTLE"], "Whistle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STEAM_WHISTLE"], "Steam whistle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MECHANISMS"], "Mechanisms"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RATCHET_PAWL"], "Ratchet, pawl"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLOCK"], "Clock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TICK"], "Tick"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TICK_TOCK"], "Tick-tock"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GEARS"], "Gears"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PULLEYS"], "Pulleys"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SEWING_MACHINE"], "Sewing machine"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MECHANICAL_FAN"], "Mechanical fan"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_AIR_CONDITIONING"], "Air conditioning"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CASH_REGISTER"], "Cash register"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PRINTER"], "Printer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAMERA"], "Camera"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SINGLE_LENS_REFLEX_CAMERA"], "Single-lens reflex camera"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TOOLS"], "Tools"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HAMMER"], "Hammer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JACKHAMMER"], "Jackhammer"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SAWING"], "Sawing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FILING_RASP"], "Filing (rasp)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SANDING"], "Sanding"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_POWER_TOOL"], "Power tool"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRILL"], "Drill"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_EXPLOSION"], "Explosion"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GUNSHOT_GUNFIRE"], "Gunshot, gunfire"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MACHINE_GUN"], "Machine gun"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FUSILLADE"], "Fusillade"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ARTILLERY_FIRE"], "Artillery fire"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CAP_GUN"], "Cap gun"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIREWORKS"], "Fireworks"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIRECRACKER"], "Firecracker"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BURST_POP"], "Burst, pop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ERUPTION"], "Eruption"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOOM"], "Boom"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WOOD"], "Wood"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHOP"], "Chop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SPLINTER"], "Splinter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRACK"], "Crack"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GLASS"], "Glass"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHINK_CLINK"], "Chink, clink"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SHATTER"], "Shatter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_LIQUID"], "Liquid"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SPLASH_SPLATTER"], "Splash, splatter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SLOSH"], "Slosh"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SQUISH"], "Squish"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DRIP"], "Drip"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_POUR"], "Pour"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TRICKLE_DRIBBLE"], "Trickle, dribble"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_GUSH"], "Gush"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FILL_WITH_LIQUID"], "Fill (with liquid)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SPRAY"], "Spray"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PUMP_LIQUID"], "Pump (liquid)"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STIR"], "Stir"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOILING"], "Boiling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SONAR"], "Sonar"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ARROW"], "Arrow"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHOOSH_SWOOSH_SWISH"], "Whoosh, swoosh, swish"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THUMP_THUD"], "Thump, thud"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THUNK"], "Thunk"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ELECTRONIC_TUNER"], "Electronic tuner"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_EFFECTS_UNIT"], "Effects unit"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHORUS_EFFECT"], "Chorus effect"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BASKETBALL_BOUNCE"], "Basketball bounce"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BANG"], "Bang"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SLAP_SMACK"], "Slap, smack"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHACK_THWACK"], "Whack, thwack"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SMASH_CRASH"], "Smash, crash"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BREAKING"], "Breaking"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOUNCING"], "Bouncing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHIP"], "Whip"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FLAP"], "Flap"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCRATCH"], "Scratch"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SCRAPE"], "Scrape"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RUB"], "Rub"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ROLL"], "Roll"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRUSHING"], "Crushing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRUMPLING_CRINKLING"], "Crumpling, crinkling"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TEARING"], "Tearing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BEEP_BLEEP"], "Beep, bleep"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PING"], "Ping"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DING"], "Ding"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLANG"], "Clang"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SQUEAL"], "Squeal"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CREAK"], "Creak"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RUSTLE"], "Rustle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHIR"], "Whir"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLATTER"], "Clatter"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SIZZLE"], "Sizzle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLICKING"], "Clicking"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CLICKETY_CLACK"], "Clickety-clack"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RUMBLE"], "Rumble"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PLOP"], "Plop"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_JINGLE_TINKLE"], "Jingle, tinkle"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HUM"], "Hum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ZING"], "Zing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_BOING"], "Boing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CRUNCH"], "Crunch"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SILENCE"], "Silence"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SINE_WAVE"], "Sine wave"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_HARMONIC"], "Harmonic"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CHIRP_TONE"], "Chirp tone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SOUND_EFFECT"], "Sound effect"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PULSE"], "Pulse"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_INSIDE_SMALL_ROOM"], "Inside, small room"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_INSIDE_LARGE_ROOM_OR_HALL"], "Inside, large room or hall"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_INSIDE_PUBLIC_SPACE"], "Inside, public space"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OUTSIDE_URBAN_OR_MANMADE"], "Outside, urban or manmade"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_OUTSIDE_RURAL_OR_NATURAL"], "Outside, rural or natural"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_REVERBERATION"], "Reverberation"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ECHO"], "Echo"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_NOISE"], "Noise"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ENVIRONMENTAL_NOISE"], "Environmental noise"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_STATIC"], "Static"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_MAINS_HUM"], "Mains hum"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_DISTORTION"], "Distortion"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_SIDETONE"], "Sidetone"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_CACOPHONY"], "Cacophony"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_WHITE_NOISE"], "White noise"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_PINK_NOISE"], "Pink noise"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_THROBBING"], "Throbbing"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_VIBRATION"], "Vibration"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_TELEVISION"], "Television"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_RADIO"], "Radio"],
		[Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_FIELD_RECORDING"], "Field recording"]
		]), "audioclass");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_24"]);
  }
};

Blockly.Blocks['amb82_mini_audioclassification_object_name'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_AUDIOCLASSIFICATION_ITEMAUDIO"]);
	this.appendValueInput("audioclass")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_24"]);
  }
};

Blockly.Blocks['amb82_mini_facedetectionrecognition_rtsp'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["SCRFD","DEFAULT_SCRFD"],
 				["SCRFD_SD","CUSTOMIZED_SCRFD"]
		]), "model");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_LABEL"])
		.appendField(new Blockly.FieldDropdown([
			["Y","Y"],
			["N","N"]
		]), "label");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MODE"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_RTSP"],"rtsp"],
			[Blockly.Msg["AMB82_MINI_STILL"],"still"]
		], this.validate), "mode");
	this.appendDummyInput("size")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			//["2K (2560x1440)","VIDEO_2K"],
			//["5M (2448x2050)","VIDEO_5M"], 
			//["3M (2048x1536)","VIDEO_3M"],
			["FHD (1920x1080)","VIDEO_FHD"],
			["HD (1280x720)","VIDEO_HD"],
			["D1 (720x480)","VIDEO_D1"],
			["VGA (640x480)","VIDEO_VGA"],
			["WVGA (640x360)","VIDEO_WVGA"],
			["QVGA (320x240)","VIDEO_QVGA"],
			["QCIF (176x144)","VIDEO_QCIF"]
		]), "framesize");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_FINISH"]);	  
    this.appendStatementInput("statement_finish")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_23"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="rtsp") {
			block.getInput("size").setVisible(false);
		} else {
			block.getInput("size").setVisible(true);	
		}
  }
};

Blockly.Blocks['amb82_mini_facedetectionrecognition_rtsp_count'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_COUNT"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_23"]);
  }
};

Blockly.Blocks['amb82_mini_facedetectionrecognition_rtsp_rect'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_LIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_NAME"],"NAME"],		
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_X_MIN"],"X"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_Y_MIN"],"Y"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_X_MIDDLE"],"XM"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_Y_MIDDLE"],"YM"],				
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_X_MAX"],"X1"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_Y_MAX"],"Y1"],				
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_WIDTH"],"WIDTH"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_HIGHT"],"HEIGHT"],
				[Blockly.Msg.PROPERTY_INDEX,"INDEX"]			
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_23"]);
  }
};

Blockly.Blocks['amb82_mini_facedetectionrecognition_rtsp_action'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([			
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_REG"],"reg"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_DEL"],"del"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_RESET"],"reset"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_BACKUP"],"backup"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_RESTORE"],"restore"]		
		], this.validate), "action");
	this.appendValueInput("regname")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)   
		.appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_NAME"]); 		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_23"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="reg"||newValue=="del") {
			block.getInput("regname").setVisible(true);
		} else {
			block.getInput("regname").setVisible(false);	
		}
  }
};

Blockly.Blocks['amb82_mini_facedetectionrecognition_rtsp_notunknown'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTIONRECOGNITION_NOTUNKNOWN"]);	
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_23"]);
  }
};

Blockly.Blocks['amb82_mini_facedetection_rtsp'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["SCRFD","DEFAULT_SCRFD"],
 				["SCRFD_SD","CUSTOMIZED_SCRFD"]
		]), "model");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_LABEL"])
		.appendField(new Blockly.FieldDropdown([
			["Y","Y"],
			["N","N"]
		]), "label");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MODE"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_RTSP"],"rtsp"],
			[Blockly.Msg["AMB82_MINI_STILL"],"still"]
		], this.validate), "mode");
	this.appendDummyInput("size")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["FHD (1920x1080)","VIDEO_FHD"],
			["HD (1280x720)","VIDEO_HD"],
			["WVGA (640x360)","VIDEO_WVGA"]
		]), "framesize");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_FINISH"]);	  
    this.appendStatementInput("statement_finish")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_12"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="rtsp") {
			block.getInput("size").setVisible(false);
		} else {
			block.getInput("size").setVisible(true);	
		}
  }
};

Blockly.Blocks['amb82_mini_facedetection_rtsp_count'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_COUNT"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['amb82_mini_facedetection_rtsp_rect'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_LIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_NAME"],"NAME"],			
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_SCORE"],"SCORE"],			
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_X_MIN"],"X"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_Y_MIN"],"Y"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_X_MIDDLE"],"XM"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_Y_MIDDLE"],"YM"],				
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_X_MAX"],"X1"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_Y_MAX"],"Y1"],				
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_WIDTH"],"WIDTH"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_HIGHT"],"HEIGHT"],
				[Blockly.Msg.PROPERTY_INDEX,"INDEX"]
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['amb82_mini_facedetection_rtsp_point'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_FACEDETECTION_POINT"]);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
				["0", "0"],
				["1", "1"],
				["2", "2"],
				["3", "3"],
				["4", "4"]
		]), "index");
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([			
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_X_MIN"],"X"],
				[Blockly.Msg["AMB82_MINI_FACEDETECTION_Y_MIN"],"Y"]		
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_12"]);
  }
};


Blockly.Blocks['amb82_mini_objectdetection_rtsp'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["YOLOv7","DEFAULT_YOLOV7TINY"],			
 				["YOLOv4","DEFAULT_YOLOV4TINY"],
 				["YOLOv3","DEFAULT_YOLOV3TINY"],
 				["YOLOv7_SD", "CUSTOMIZED_YOLOV7TINY"],				
 				["YOLOv4_SD", "CUSTOMIZED_YOLOV4TINY"],
 				["YOLOv3_SD", "CUSTOMIZED_YOLOV3TINY"]
		]), "model");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_LABEL"])
		.appendField(new Blockly.FieldDropdown([
			["Y","Y"],
			["N","N"]
		]), "label");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MODE"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_RTSP"],"rtsp"],
			[Blockly.Msg["AMB82_MINI_RTSP_STILL"],"still"],
			[Blockly.Msg["AMB82_MINI_STILL"],""],
			[Blockly.Msg["AMB82_MINI_TCP"],"tcp"],
			[Blockly.Msg["AMB82_MINI_USB_UVCD"],"uvc"]
		], this.validate), "mode");
	this.appendDummyInput("size")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			//["2K (2560x1440)","VIDEO_2K"],
			//["5M (2448x2050)","VIDEO_5M"], 
			//["3M (2048x1536)","VIDEO_3M"],
			["FHD (1920x1080)","VIDEO_FHD"],
			["HD (1280x720)","VIDEO_HD"],
			["D1 (720x480)","VIDEO_D1"],
			["VGA (640x480)","VIDEO_VGA"],
			["WVGA (640x360)","VIDEO_WVGA"],
			["QVGA (320x240)","VIDEO_QVGA"],
			["QCIF (176x144)","VIDEO_QCIF"]
		]), "framesize");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_FINISH"]);	  
    this.appendStatementInput("statement_finish")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_22"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="rtsp"||newValue=="uvc") {
			block.getInput("size").setVisible(false);
		} else {
			block.getInput("size").setVisible(true);	
		}
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_count'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_COUNT"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_rect'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ITEMLIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_OBJECT"],"OBJECT"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SCORE"],"SCORE"],			
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_X_MIN"],"X"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_Y_MIN"],"Y"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_X_MIDDLE"],"XM"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_Y_MIDDLE"],"YM"],				
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_X_MAX"],"X1"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_Y_MAX"],"Y1"],				
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_WIDTH"],"WIDTH"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HIGHT"],"HEIGHT"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CHAR"],"CHAR"],
				[Blockly.Msg.PROPERTY_INDEX,"INDEX"]
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_object'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ITEMOBJECT"]);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_PERSON"], "person"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BICYCLE"], "bicycle"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CAR"], "car"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_MOTORBIKE"], "motorbike"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_AEROPLANE"], "aeroplane"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BUS"], "bus"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TRAIN"], "train"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TRUCK"], "truck"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOAT"], "boat"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TRAFFICLIGHT"], "traffic light"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_FIREHYDRANT"], "fire hydrant"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_STOPSIGN"], "stop sign"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_PARKINGMETER"], "parking meter"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BENCH"], "bench"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BIRD"], "bird"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CAT"], "cat"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_DOG"], "dog"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HORSE"], "horse"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SHEEP"], "sheep"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_COW"], "cow"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ELEPHANT"], "elephant"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BEAR"], "bear"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ZEBRA"], "zebra"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_GIRAFFE"], "giraffe"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BACKPACK"], "backpack"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_UMBRELLA"], "umbrella"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HANDBAG"], "handbag"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TIE"], "tie"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SUITCASE"], "suitcase"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_FRISBEE"], "frisbee"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SKIS"], "skis"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SNOWBOARD"], "snowboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SPORTSBALL"], "sportsball"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_KITE"], "kite"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BASEBALLBAT"], "baseball bat"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BASEBALLGLOVE"], "baseball glove"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SKATEBOARD"], "skateboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SURFBOARD"], "surfboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TENNISRACKET"], "tennis racket"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOTTLE"], "bottle"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_WINEGLASS"], "wine glass"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CUP"], "cup"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_FORK"], "fork"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_KNIFE"], "knife"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SPOON"], "spoon"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOWL"], "bowl"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BANANA"], "banana"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_APPLE"], "apple"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SANDWICH"], "sandwich"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ORANGE"], "orange"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BROCCOLI"], "broccoli"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CARROT"], "carrot"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HOTDOG"], "hot dog"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_PIZZA"], "pizza"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_DONUT"], "donut"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CAKE"], "cake"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CHAIR"], "chair"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SOFA"], "sofa"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_POTTEDPLANT"], "pottedplant"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BED"], "bed"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_DININGTABLE"], "diningtable"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TOILET"], "toilet"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TVMONITOR"], "tvmonitor"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_LAPTOP"], "laptop"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_MOUSE"], "mouse"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_REMOTE"], "remote"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_KEYBOARD"], "keyboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CELLPHONE"], "cell phone"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_MICROWAVE"], "microwave"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_OVEN"], "oven"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TOASTER"], "toaster"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SINK"], "sink"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_REFRIGERATOR"], "refrigerator"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOOK"], "book"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CLOCK"], "clock"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_VASE"], "vase"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SCISSORS"], "scissors"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TEDDYBEAR"], "teddy bear"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HAIRDRYER"], "hair dryer"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TOOTHBRUSH"], "toothbrush"]
		]), "objclass");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_object_char'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ITEMOBJECT_CHAR"]);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_PERSON"], "person"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BICYCLE"], "bicycle"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CAR"], "car"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_MOTORBIKE"], "motorbike"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_AEROPLANE"], "aeroplane"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BUS"], "bus"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TRAIN"], "train"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TRUCK"], "truck"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOAT"], "boat"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TRAFFICLIGHT"], "traffic light"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_FIREHYDRANT"], "fire hydrant"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_STOPSIGN"], "stop sign"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_PARKINGMETER"], "parking meter"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BENCH"], "bench"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BIRD"], "bird"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CAT"], "cat"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_DOG"], "dog"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HORSE"], "horse"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SHEEP"], "sheep"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_COW"], "cow"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ELEPHANT"], "elephant"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BEAR"], "bear"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ZEBRA"], "zebra"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_GIRAFFE"], "giraffe"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BACKPACK"], "backpack"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_UMBRELLA"], "umbrella"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HANDBAG"], "handbag"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TIE"], "tie"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SUITCASE"], "suitcase"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_FRISBEE"], "frisbee"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SKIS"], "skis"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SNOWBOARD"], "snowboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SPORTSBALL"], "sportsball"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_KITE"], "kite"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BASEBALLBAT"], "baseball bat"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BASEBALLGLOVE"], "baseball glove"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SKATEBOARD"], "skateboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SURFBOARD"], "surfboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TENNISRACKET"], "tennis racket"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOTTLE"], "bottle"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_WINEGLASS"], "wine glass"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CUP"], "cup"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_FORK"], "fork"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_KNIFE"], "knife"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SPOON"], "spoon"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOWL"], "bowl"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BANANA"], "banana"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_APPLE"], "apple"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SANDWICH"], "sandwich"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ORANGE"], "orange"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BROCCOLI"], "broccoli"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CARROT"], "carrot"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HOTDOG"], "hot dog"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_PIZZA"], "pizza"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_DONUT"], "donut"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CAKE"], "cake"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CHAIR"], "chair"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SOFA"], "sofa"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_POTTEDPLANT"], "pottedplant"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BED"], "bed"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_DININGTABLE"], "diningtable"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TOILET"], "toilet"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TVMONITOR"], "tvmonitor"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_LAPTOP"], "laptop"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_MOUSE"], "mouse"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_REMOTE"], "remote"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_KEYBOARD"], "keyboard"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CELLPHONE"], "cell phone"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_MICROWAVE"], "microwave"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_OVEN"], "oven"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TOASTER"], "toaster"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SINK"], "sink"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_REFRIGERATOR"], "refrigerator"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_BOOK"], "book"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CLOCK"], "clock"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_VASE"], "vase"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_SCISSORS"], "scissors"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TEDDYBEAR"], "teddy bear"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_HAIRDRYER"], "hair dryer"],
				[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_TOOTHBRUSH"], "toothbrush"]
		]), "objclass");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_objectname'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_ITEMOBJECT"]);
    this.appendValueInput("objclass")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_object_custom'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
	    .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CLASS_CUSTOM"]);				
	this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(330);	
	this.setMutator(new Blockly.Mutator(["amb82_mini_objectdetection_rtsp_object_custom_class"]));
  }
	,itemCount_:0
	,className_:[]	
	,suppressPrefixSuffix:!0
	,mutationWorkspace:null
	,mutationToDom:function(){
		if(!this.itemCount_&&!this.topCount_)return null;
		var a=Blockly.utils.xml.createElement("mutation");
		this.itemCount_&&a.setAttribute("items",this.itemCount_);
		return a
	}
	,domToMutation:function(a){
		this.itemCount_=parseInt(a.getAttribute("items"),10)||0;
		this.initialShape_()
	}
	,decompose:function(a){
		mutationWorkspace = a;
		var b=a.newBlock("amb82_mini_objectdetection_rtsp_object_custom_default");
		b.initSvg();
		for(var c=b.nextConnection,d=1;d<=this.itemCount_;d++){
			var e=a.newBlock("amb82_mini_objectdetection_rtsp_object_custom_class");
			e.initSvg();
			if (this.getFieldValue("CLASS"+d))
				e.setFieldValue(this.getFieldValue("CLASS"+d), 'classname');			
			c.connect(e.previousConnection);
			c=e.nextConnection
		}
		return b
	}
	,compose:function(a){
		a=a.nextConnection.targetBlock();
		this.itemCount_=0;
		this.className_=[];
		for(var i;a&&!a.isInsertionMarker();){
			switch(a.type){
				case "amb82_mini_objectdetection_rtsp_object_custom_class":
					this.itemCount_++;
					this.className_.push(a.getFieldValue("classname"));					
					break;
				default:throw TypeError("Unknown block type: "+a.type);
			}
			a=a.nextConnection&&a.nextConnection.targetBlock()
		}		
		this.updateShape_();
	}
	,initialShape_:function(){	
		for(var a=1;a<=this.itemCount_;a++) {
			this.appendDummyInput("CLASS"+a)
				.appendField(new Blockly.FieldLabelSerializable(""),"CLASS"+a)
				.setAlign(Blockly.ALIGN_RIGHT);
		}
	}	
	,updateShape_:function(){
		for(var a=1;this.getInput("CLASS"+a);)
			this.removeInput("CLASS"+a),a++;
		a=1;
		var blockDB = mutationWorkspace.blockDB_;
		if (blockDB) {
			for (var blockid in blockDB) {
				var block = mutationWorkspace.getBlockById(blockid);
				if (block.type!="amb82_mini_objectdetection_rtsp_object_custom_default") {
					this.appendDummyInput("CLASS"+a)
						.appendField(new Blockly.FieldLabelSerializable(this.className_[a-1]),"CLASS"+a)
						.setAlign(Blockly.ALIGN_RIGHT);
					a++;
				}
			}
		}
	}
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_object_custom_default'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CLASS_LIST"]);			
	this.setInputsInline(true);
	this.setNextStatement(!0);
	this.setColour(330);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_rtsp_object_custom_class'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_CLASS_NAME"]);	
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(""), "classname");	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(330);
  }
};

Blockly.Blocks['amb82_mini_objectdetection_state'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_RESUME"],"1"],
			[Blockly.Msg["AMB82_MINI_OBJECTDETECTION_PAUSE"],"0"]
		]), "state");		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_22"]);
  }
};
/*
Blockly.Blocks['amb82_mini_emotionclassification_rtsp'] = {
	init: function() {
			this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION"]);
      this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["IMGCLASS","DEFAULT_IMGCLASS"],
 				["IMGCLASS_SD","CUSTOMIZED_IMGCLASS"]
		]), "model");
			this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MODE"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_RTSP"],"rtsp"],
			[Blockly.Msg["AMB82_MINI_STILL"],"still"]
		], this.validate), "mode");
        this.setPreviousStatement(!0);
				this.setNextStatement(!0);
    		this.setColour(Blockly.Msg["HUE_22"]);
		}
};*/

Blockly.Blocks['amb82_mini_emotionclassification_rtsp'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_MODEL"])
			.appendField(new Blockly.FieldDropdown([
 				["IMGCLASS","DEFAULT_IMGCLASS"],
 				["IMGCLASS_SD","CUSTOMIZED_IMGCLASS"]
		]), "model");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["AMB82_MINI_MODE"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["AMB82_MINI_RTSP"],"rtsp"],
			[Blockly.Msg["AMB82_MINI_STILL"],"still"]
		], this.validate), "mode");
	this.appendDummyInput("size")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg["SERVERMODULE_FRAMESIZE_SHOW"])	
		.appendField(new Blockly.FieldDropdown([
			//["2K (2560x1440)","VIDEO_2K"],
			//["5M (2448x2050)","VIDEO_5M"], 
			//["3M (2048x1536)","VIDEO_3M"],
			["FHD (1920x1080)","VIDEO_FHD"],
			["HD (1280x720)","VIDEO_HD"],
			["D1 (720x480)","VIDEO_D1"],
			["VGA (640x480)","VIDEO_VGA"],
			["WVGA (640x360)","VIDEO_WVGA"],
			["QVGA (320x240)","VIDEO_QVGA"],
			["QCIF (176x144)","VIDEO_QCIF"]
		]), "framesize");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_AFTER"]);	  
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_FINISH"]);	  
    this.appendStatementInput("statement_finish")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_22"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (!block) return;
		if (newValue=="rtsp") {
			block.getInput("size").setVisible(false);
		} else {
			block.getInput("size").setVisible(true);	
		}
  }
};

Blockly.Blocks['amb82_mini_emotionclassification_rtsp_count'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_COUNT"]);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_emotionclassification_rtsp_get'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_ITEMLIST"]);
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_MAXCLASS"],"maxClass"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_MAXSCORE"],"maxScore"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_ANGRY"], "angry"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_DISGUST"], "disgust"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_FEAR"], "fear"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_HAPPY"], "happy"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_NEUTRAL"], "neutral"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_SAD"], "sad"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_SURPRISE"], "surprise"]				
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_emotionclassification_rtsp_emotion'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_EMOTION"]);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_ANGRY"], "angry"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_DISGUST"], "disgust"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_FEAR"], "fear"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_HAPPY"], "happy"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_NEUTRAL"], "neutral"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_SAD"], "sad"],
				[Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_SURPRISE"], "surprise"]
		]), "emption");		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_emotionclassification_rtsp_emotion_name'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION"])
        .appendField(Blockly.Msg["AMB82_MINI_EMOTIONCLASSIFICATION_EMOTION"]);
    this.appendValueInput("emption")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT);		
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['amb82_mini_xy_in_triangle'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"]);		
	this.appendValueInput("x")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X")
		.setCheck("Number");		
	this.appendValueInput("y")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y")
		.setCheck("Number");
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI_XY_IN_TRIANGLE"]);			
	this.appendValueInput("x1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X1")
		.setCheck("Number");		
	this.appendValueInput("y1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y1")
		.setCheck("Number");
	this.appendValueInput("x2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X2")
		.setCheck("Number");		
	this.appendValueInput("y2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y2")
		.setCheck("Number");
	this.appendValueInput("x3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X3")
		.setCheck("Number");		
	this.appendValueInput("y3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y3")
		.setCheck("Number");			
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(Blockly.Msg["HUE_20"]);
  }
};

Blockly.Blocks['amb82_mini_xy_in_quadrilateral'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"]);		
	this.appendValueInput("x")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X")
		.setCheck("Number");		
	this.appendValueInput("y")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y")
		.setCheck("Number");
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI_XY_IN_QUADRILATERAL"]);			
	this.appendValueInput("x1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X1")
		.setCheck("Number");		
	this.appendValueInput("y1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y1")
		.setCheck("Number");
	this.appendValueInput("x2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X2")
		.setCheck("Number");		
	this.appendValueInput("y2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y2")
		.setCheck("Number");
	this.appendValueInput("x3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X3")
		.setCheck("Number");		
	this.appendValueInput("y3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y3")
		.setCheck("Number");
	this.appendValueInput("x4")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X4")
		.setCheck("Number");		
	this.appendValueInput("y4")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y4")
		.setCheck("Number");
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI_OBJECTDETECTION_XY_ARRANGE"]);
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(Blockly.Msg["HUE_20"]);
  }
};

Blockly.Blocks['amb82_mini_draw_createBitmap'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_CREATEBITMAP"]);
    this.appendStatementInput("statement")
        .setCheck(null);		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['amb82_mini_drawline'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_DRAWLINE"]);		
	this.appendValueInput("x")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X0")
			.setCheck("Number");		
	this.appendValueInput("y")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y0")
			.setCheck("Number");
	this.appendValueInput("x1")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X1")
			.setCheck("Number");		
	this.appendValueInput("y1")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y1")
			.setCheck("Number");
	this.appendValueInput("linewidth")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_LINEWIDTH"])
			.setCheck("Number");
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_COLOR"])
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_COLOR_RED"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLUE"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GREEN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_CYAN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_MAGENTA"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_YELLOW"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_WHITE"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLACK"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GRAY"], "ARGB((uint8_t) alpha, 0x7f, 0x7f, 0x7f)"],
				[Blockly.Msg["AMB82_MINI_COLOR_ORANGE"], "ARGB((uint8_t) alpha, 0xf3, 0x70, 0x21)"]
			]), "color");
	this.appendValueInput("alpha")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_ALPHA"]+" (0-255)")
			.setCheck("Number");		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['amb82_mini_drawpoint'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_DRAWPOINT"]);
	this.appendValueInput("x")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X")
			.setCheck("Number");		
	this.appendValueInput("y")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y")
			.setCheck("Number");
	this.appendValueInput("pointwidth")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_POINTWIDTH"])
			.setCheck("Number");
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_COLOR"])
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_COLOR_RED"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLUE"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GREEN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_CYAN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_MAGENTA"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_YELLOW"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_WHITE"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLACK"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GRAY"], "ARGB((uint8_t) alpha, 0x7f, 0x7f, 0x7f)"],
				[Blockly.Msg["AMB82_MINI_COLOR_ORANGE"], "ARGB((uint8_t) alpha, 0xf3, 0x70, 0x21)"]
			]), "color");
	this.appendValueInput("alpha")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_ALPHA"]+" (0-255)")
			.setCheck("Number");		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['amb82_mini_drawrect'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_DRAWRECT"]);
	this.appendValueInput("x")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X0")
			.setCheck("Number");		
	this.appendValueInput("y")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y0")
			.setCheck("Number");
	this.appendValueInput("x1")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X1")
			.setCheck("Number");		
	this.appendValueInput("y1")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y1")
			.setCheck("Number");
	this.appendValueInput("linewidth")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_LINEWIDTH"])
			.setCheck("Number");
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_COLOR"])
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_COLOR_RED"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLUE"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GREEN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_CYAN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_MAGENTA"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_YELLOW"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_WHITE"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLACK"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GRAY"], "ARGB((uint8_t) alpha, 0x7f, 0x7f, 0x7f)"],
				[Blockly.Msg["AMB82_MINI_COLOR_ORANGE"], "ARGB((uint8_t) alpha, 0xf3, 0x70, 0x21)"]
			]), "color");
	this.appendValueInput("alpha")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_ALPHA"]+" (0-255)")
			.setCheck("Number");		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['amb82_mini_drawtext'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["AMB82_MINI"])
        .appendField(Blockly.Msg["AMB82_MINI_DRAWTEXT"])		
	this.appendValueInput("x")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("X")
			.setCheck("Number");		
	this.appendValueInput("y")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField("Y")
			.setCheck("Number");
	this.appendValueInput("txt")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_TEXT"])
			.setCheck("String");
    this.appendDummyInput()	 
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg["AMB82_MINI_COLOR"])
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg["AMB82_MINI_COLOR_RED"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLUE"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GREEN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_CYAN"], "ARGB((uint8_t) alpha, 0x00, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_MAGENTA"], "ARGB((uint8_t) alpha, 0xff, 0x00, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_YELLOW"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_WHITE"], "ARGB((uint8_t) alpha, 0xff, 0xff, 0xff)"],
				[Blockly.Msg["AMB82_MINI_COLOR_BLACK"], "ARGB((uint8_t) alpha, 0x00, 0x00, 0x00)"],
				[Blockly.Msg["AMB82_MINI_COLOR_GRAY"], "ARGB((uint8_t) alpha, 0x7f, 0x7f, 0x7f)"],
				[Blockly.Msg["AMB82_MINI_COLOR_ORANGE"], "ARGB((uint8_t) alpha, 0xf3, 0x70, 0x21)"]
			]), "color");
	this.appendValueInput("alpha")
			.setAlign(Blockly.ALIGN_RIGHT) 		
			.appendField(Blockly.Msg["AMB82_MINI_ALPHA"]+" (0-255)")
			.setCheck("Number");		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['esp32_wifi_wait_until_ready'] = {
  init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.SET_WIFI_UNTIL_READY_TITLE);
	this.appendValueInput("SSID")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
	this.appendValueInput("PASSWORD")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_wifi_disconnect'] = {
  init:function(){
	this.appendDummyInput()
		.appendField(Blockly.Msg.SET_WIFI_DISCONNECT);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_wifi_reconnect'] = {
  init:function(){
	this.appendDummyInput()
		.appendField(Blockly.Msg.SET_WIFI_RECONNECT);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_wifi_settings'] = {
  init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.SET_WIFI_SETTINGS);
	this.appendValueInput("SSID")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
	this.appendValueInput("PASSWORD")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_wifi_status'] = {
  init:function(){
	this.appendDummyInput()
		.appendField(Blockly.Msg.GET_WIFI_STATUS);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.GET_WIFI_STATUS_Y,"=="],
			[Blockly.Msg.GET_WIFI_STATUS_N,"!="]
		]), "status"); 
	this.setInputsInline(true);		
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['esp32_wifi_localip'] = {
  init:function(){
	this.appendDummyInput()
		.appendField(Blockly.Msg.GET_WIFI_LOCALIP);
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['ip_format'] = {
  init:function(){
    this.appendValueInput("ip")
        .setCheck("String")
	    .setAlign(Blockly.ALIGN_RIGHT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["IP_2IP"],"String2Ip"],
			[Blockly.Msg["IP_2STRING"],"Ip2String"]
		]), "type"); 
	this.setInputsInline(true);		
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['udp_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["UDP"])	
        .appendField(Blockly.Msg["UDP_INITIAL"]);
    this.appendValueInput("port")
        .setCheck("Number")
		.appendField(Blockly.Msg["UDP_PORT"]);
    this.appendDummyInput()		
		.appendField(Blockly.Msg["UDP_EXECUTE"]);
    this.appendStatementInput("statement")
        .setCheck(null);	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};


Blockly.Blocks['udp_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["UDP"])
        .appendField(Blockly.Msg["UDP_GET"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["UDP_IP"],"ip"],
			[Blockly.Msg["UDP_PORT"],"port"],
			[Blockly.Msg["UDP_DATA"],"data"]
		]), "property");
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['udp_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["UDP"])
        .appendField(Blockly.Msg["UDP_WRITE"]);
    this.appendValueInput("ip")
        .setCheck("String")
		.appendField(Blockly.Msg["UDP_IP"]);		
    this.appendValueInput("port")
        .setCheck("Number")
		.appendField(Blockly.Msg["UDP_PORT"]);		
    this.appendValueInput("data")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["UDP_DATA"]);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['tcp_https_esp32'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE4_HEAD_HTTPS_SHOW);
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE2_REQUEST_TYPE_SHOW)
		.appendField(new Blockly.FieldDropdown([
			["GET","GET"],
			["POST","POST"]  
			]), "type");		
    this.appendValueInput("domain")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_DOMAIN_SHOW);
    this.appendValueInput("request")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_REQUEST_SHOW); 	  
    this.appendValueInput("port")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_PORT_SHOW); 
    this.appendValueInput("timeout")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_TIMEOUT_SHOW)
		.appendField(Blockly.Msg.FRANCE2_SECOND_SHOW);	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(20);   
  }
};

Blockly.Blocks['tcp_http_esp32'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE4_HEAD_HTTP_SHOW);
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE2_REQUEST_TYPE_SHOW)
		.appendField(new Blockly.FieldDropdown([
			["GET","GET"],
			["POST","POST"]  
			]), "type");		
    this.appendValueInput("domain")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_DOMAIN_SHOW); 
    this.appendValueInput("request")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_REQUEST_SHOW); 	  
    this.appendValueInput("port")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_PORT_SHOW); 
    this.appendValueInput("timeout")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_TIMEOUT_SHOW)
		.appendField(Blockly.Msg.FRANCE2_SECOND_SHOW);	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(20);   
  }
};

/*------------------------------------
*					hub8735bit Proskit ¬ÛÃö¿n¤ì
------------------------------------*/

Blockly.Blocks['hub8735bit_blockly_ir_r_read'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg["HUB_PROSKITPRO_IR_R_READ"])
			
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(28);			
	}
};

Blockly.Blocks['hub8735bit_blockly_ir_l_read'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg["HUB_PROSKITPRO_IR_L_READ"])
			
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(28);			
	}
};

Blockly.Blocks['hub8735bit_blockly_ir_r_truefalse'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_PROSKITPRO_IR_R_TRUEFALSE);		
		this.appendValueInput("ir_r_number_")
    		.setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUB_PROSKITPRO_VALUE);
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(28);			
	}
};

Blockly.Blocks['hub8735bit_blockly_ir_l_truefalse'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_PROSKITPRO_IR_L_TRUEFALSE);		
		this.appendValueInput("ir_l_number_")
    		.setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUB_PROSKITPRO_VALUE);
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(28);			
	}
};

Blockly.Blocks['hub8735bit_blockly_go'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_GO);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(28);
  }
};

Blockly.Blocks['hub8735bit_blockly_back'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_BACK);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(28);
  }
};

Blockly.Blocks['hub8735bit_blockly_stop'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_STOP);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(28);
  }
};

Blockly.Blocks['hub8735bit_blockly_turn_right'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_TURN_RIGHT);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(28);
  }
};

Blockly.Blocks['hub8735bit_blockly_turn_left'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_TURN_LEFT);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(28);
  }
};

Blockly.Blocks['hub8735bit_blockly_stop_turn'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_STOP_TURN);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(28);
  }
};

Blockly.Blocks['hub8735bit_blockly_buzzer_control'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_PLAY_BZ);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(120);
  }
};

Blockly.Blocks['hub8735bit_blockly_buzzer_control1'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_PLAY_BZ1);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(120);
  }
};

Blockly.Blocks['hub8735bit_blockly_buzzer_control2'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_PLAY_BZ2);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(120);
  }
};

Blockly.Blocks['hub8735bit_blockly_buzzer_in_control'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_PLAY_BZ);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(120);
  }
};

Blockly.Blocks['hub8735bit_blockly_buzzer_in_control1'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_PLAY_BZ1);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(120);
  }
};

Blockly.Blocks['hub8735bit_blockly_buzzer_in_control2'] = {
  init: function() {
    this.appendDummyInput()      
        .appendField(Blockly.Msg.HUB_PROSKITPRO_PLAY_BZ2);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(120);
  }
};

/*
//¦³¤U©Ô¦¡

Blockly.Blocks['hub8735bit_blockly'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["HUB_BLOCKLY"])
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["A","A"],["B","B"],["A+B","AB"]]),"AB_BUTTON_");
		this.appendDummyInput()
	    .appendField(Blockly.Msg["HUB8735BIT_BUTTON_CHECK"]);
    this.appendStatementInput("do_")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);

			this.setInputsInline(true);		
	    this.setPreviousStatement(true, null);
	    this.setNextStatement(true, null);
	    this.setColour(300);	
	  }
};

Blockly.Blocks['hub8735bit_blockly_condition'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_BUTTON)
			.appendField(new Blockly.FieldDropdown([["A","A"],["B","B"],["A+B","AB"]]),"AB_BUTTON");
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_BUTTON_CHECK);
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(300);			
	}
};

Blockly.Blocks['hub8735bit_blockly_value'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB8735BIT_GSENSOR_VALUE)
			.appendField(new Blockly.FieldDropdown([["x","0"],["y","1"],["z","2"],[Blockly.Msg.HUB8735BIT_GSENSOR_STR,"3"]]),"GSENSOR_TYPE");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(300);			
	}
};
*/

/*------------------------------------
*					hub8735bit FU IO ¬ÛÃö¿n¤ì
------------------------------------*/
Blockly.Blocks['fu_io_pinmode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_IO_PIN"]);
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_IO_MODE"])
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["FU_IO_OUTPUT"],"OUTPUT"], [Blockly.Msg["FU_IO_INPUT"],"INPUT"], [Blockly.Msg["FU_IO_INPUT_PULLUP"],"INPUT_PULLUP"]]), "type");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_IO_HUE"]);
 this.setTooltip("I/O");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/");
  }
};

Blockly.Blocks['fu_io_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["FU_IO_DIGITALWRITE"],"digitalWrite(%1, %2);\n"], [Blockly.Msg["FU_IO_ANALOGWRITE"],"analogWrite(%1, %2);\n"]]), "type");
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_IO_PIN"]);
    this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_IO_VALUE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_IO_HUE"]);
 this.setTooltip("I/O");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/");
  }
};

Blockly.Blocks['fu_io_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["FU_IO_DIGITALREAD"],"digitalRead(%1)"], [Blockly.Msg["FU_IO_ANALOGREAD"],"analogRead(%1)"]]), "type");
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_IO_PIN"]);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["FU_IO_HUE"]);
 this.setTooltip("I/O");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/digital-io/digitalread/");
  }
};

/*------------------------------------
*					hub8735bit FU Serial ¬ÛÃö¿n¤ì
------------------------------------*/
Blockly.Blocks['fu_serial_newline'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(Blockly.Msg["FU_SERIAL_NEWLINE"]);
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
  }
};

Blockly.Blocks['fu_serial_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"]
		]), "serial");		
    this.appendValueInput("baudrate")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/");
  }
};

Blockly.Blocks['fu_serial_begin_select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"]
		]), "serial");		
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/");
  }
};

Blockly.Blocks['fu_serial_begin_config'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"]			
		]), "serial");		
    this.appendValueInput("baudrate")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_CONFIG"])
        .appendField(new Blockly.FieldDropdown([
			["SERIAL_5N1", "SERIAL_5N1"],
			["SERIAL_6N1", "SERIAL_6N1"],
			["SERIAL_7N1", "SERIAL_7N1"],
			["SERIAL_8N1", "SERIAL_8N1"],
			["SERIAL_5N2", "SERIAL_5N2"],
			["SERIAL_6N2", "SERIAL_6N2"],
			["SERIAL_7N2", "SERIAL_7N2"],
			["SERIAL_8N2", "SERIAL_8N2"],
			["SERIAL_5E1", "SERIAL_5E1"],
			["SERIAL_6E1", "SERIAL_6E1"],
			["SERIAL_7E1", "SERIAL_7E1"],
			["SERIAL_8E1", "SERIAL_8E1"],
			["SERIAL_5E2", "SERIAL_5E2"],
			["SERIAL_6E2", "SERIAL_6E2"],
			["SERIAL_7E2", "SERIAL_7E2"],
			["SERIAL_8E2", "SERIAL_8E2"],
			["SERIAL_5O1", "SERIAL_5O1"],
			["SERIAL_6O1", "SERIAL_6O1"],
			["SERIAL_7O1", "SERIAL_7O1"],
			["SERIAL_8O1", "SERIAL_8O1"],
			["SERIAL_5O2", "SERIAL_5O2"],
			["SERIAL_6O2", "SERIAL_6O2"],
			["SERIAL_7O2", "SERIAL_7O2"],
			["SERIAL_8O2", "SERIAL_8O2"]	
		]), "config");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/");
  }
};

Blockly.Blocks['fu_serial_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"],
			["SoftwareSerial","mySerial"]
		]), "serial");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_READY"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/ifserial/");
  }
};

Blockly.Blocks['fu_serial_end'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"],
			["SoftwareSerial","mySerial"]
		]), "serial");		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_END"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/end/");
  }
};

Blockly.Blocks['fu_serial_print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"],
			["SoftwareSerial","mySerial"]
		]), "serial");		
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.Msg["FU_SERIAL_PRINT"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};

Blockly.Blocks['fu_serial_print_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"],
			["SoftwareSerial","mySerial"]
		]), "serial");		
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_PRINT"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};

Blockly.Blocks['fu_serial_println'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"],
			["SoftwareSerial","mySerial"]
		]), "serial");		
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.Msg["FU_SERIAL_PRINTLN"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/println/");
  }
};

Blockly.Blocks['fu_serial_println_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"],
			["SoftwareSerial","mySerial"]
		]), "serial");		
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_PRINTLN"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/println/");
  }
};

Blockly.Blocks['fu_serial_write'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"],
			["SoftwareSerial","mySerial"]
		]), "serial");		
    this.appendValueInput("data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_WRITE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/write/");
  }
};

Blockly.Blocks['fu_serial_write_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"],
			["SoftwareSerial","mySerial"]
		]), "serial");		
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_WRITE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};