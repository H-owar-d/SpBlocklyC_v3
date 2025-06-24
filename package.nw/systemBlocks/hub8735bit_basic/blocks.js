//hub8735bit

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