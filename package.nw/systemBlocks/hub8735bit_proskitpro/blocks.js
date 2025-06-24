//hub8735bit 積木類型

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
//有下拉式

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