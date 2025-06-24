//hub8735bit
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