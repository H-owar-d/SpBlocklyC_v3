//hub8735 bit
Blockly.Arduino['hub8735bit_led_set_xy'] = function() {
	Blockly.Arduino.definitions_['define_hub8735_LEDMatrix']='\n'+
											'#include "LEDMatrix.h"\n'+
											'\n'+
											'extern LED_Matrix LED_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735_ShowLEDMatrix_setups'] = ''
											+' LED_m.begin();\n';
	var x_value =this.getFieldValue("value_number_x_set");
	var y_value =this.getFieldValue("value_number_y_set");
	var code = 'LED_m.display_xy(' + x_value + ', ' + y_value + ', 1, 0);\n';
		return code;
}

Blockly.Arduino['hub8735bit_led_switch_xy'] = function() {
	Blockly.Arduino.definitions_['define_hub8735_LEDMatrix']='\n'+
											'#include "LEDMatrix.h"\n'+
											'\n'+
											'extern LED_Matrix LED_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735_ShowLEDMatrix_setups'] = ''
											+' LED_m.begin();\n';
		var x_value =this.getFieldValue("value_number_x_switch");	//modify bug 0623, x y error
		var y_value =this.getFieldValue("value_number_y_switch");
		var code = 'LED_m.display_xy(' + x_value + ', ' + y_value + ', 1, 1);\n';
		return code;
}

Blockly.Arduino['hub8735bit_led_clr_xy'] = function() {
	Blockly.Arduino.definitions_['define_hub8735_LEDMatrix']='\n'+
											'#include "LEDMatrix.h"\n'+
											'\n'+
											'extern LED_Matrix LED_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735_ShowLEDMatrix_setups'] = ''
											+' LED_m.begin();\n';
		var x_value =this.getFieldValue("value_number_x_clear");
		var y_value =this.getFieldValue("value_number_y_clear");
		var code = 'LED_m.display_xy(' + x_value + ', ' + y_value + ', 0, 0);\n';
		return code;
}

Blockly.Arduino['hub8735bit_led_status_xy'] = function() {
	Blockly.Arduino.definitions_['define_hub8735_LEDMatrix']='\n'+
											'#include "LEDMatrix.h"\n'+
											'\n'+
											'extern LED_Matrix LED_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735_ShowLEDMatrix_setups'] = ''
											+' LED_m.begin();\n';
		var x_value =this.getFieldValue("value_number_x_status");
		var y_value =this.getFieldValue("value_number_y_status");
		var code = 'LED_m.read_xy(' + x_value + ', ' + y_value + ');\n';
		return code;
}