//hub8735bit
Blockly.Blocks['hub8735bit_led_set_xy'] = {
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
