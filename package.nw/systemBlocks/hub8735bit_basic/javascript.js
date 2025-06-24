//hub8735 bit
Blockly.Arduino['ShowLEDMatrix_number'] = function() {
		Blockly.Arduino.definitions_['define_hub8735_LEDMatrix']='\n'+
											'#include "LEDMatrix.h"\n'+
											'\n'+
											'extern LED_Matrix LED_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735_ShowLEDMatrix_setups'] = ''
											+' LED_m.begin();\n';
											
		var value_number_ = Blockly.Arduino.valueToCode(this,"value_number_",Blockly.Arduino.ORDER_ATOMIC);
		var led_direct_=this.getFieldValue("led_direct_");
		var code = 'LED_m.showNumbers('+value_number_+','+led_direct_+');\n';
		return code;
}

Blockly.Arduino['ShowLEDMatrix'] = function() {
	Blockly.Arduino.definitions_['define_hub8735_LEDMatrix']='\n'+
											'#include "LEDMatrix.h"\n'+
											'\n'+
											'extern LED_Matrix LED_m;\n';
											
	Blockly.Arduino.setups_['begin_hub8735_ShowLEDMatrix_setups'] = ''
											+'LED_m.begin();\n';
/*											
	Blockly.Arduino.setups_['hub8735_ShowLEDMatrix_setups'] = ''
											+' LED_m.showLEDs(
    									+' "# # # # # " \n'
    									+' "# . . . # " \n'
    									+' "# . . . # " \n'
    									+' "# . . . # " \n'
    									+' "# # # # # ");\n';	*/								
	
	var L01 = (this.getFieldValue('L01') == 'TRUE')?"# ":". ";
	var L02 = (this.getFieldValue('L02') == 'TRUE')?"# ":". ";
	var L03 = (this.getFieldValue('L03') == 'TRUE')?"# ":". ";
	var L04 = (this.getFieldValue('L04') == 'TRUE')?"# ":". ";
	var L05 = (this.getFieldValue('L05') == 'TRUE')?"# ":". ";
	var L06 = (this.getFieldValue('L06') == 'TRUE')?"# ":". ";
	var L07 = (this.getFieldValue('L07') == 'TRUE')?"# ":". ";
	var L08 = (this.getFieldValue('L08') == 'TRUE')?"# ":". ";
	var L09 = (this.getFieldValue('L09') == 'TRUE')?"# ":". ";
	var L10 = (this.getFieldValue('L10') == 'TRUE')?"# ":". ";
	var L11 = (this.getFieldValue('L11') == 'TRUE')?"# ":". ";
	var L12 = (this.getFieldValue('L12') == 'TRUE')?"# ":". ";
	var L13 = (this.getFieldValue('L13') == 'TRUE')?"# ":". ";
	var L14 = (this.getFieldValue('L14') == 'TRUE')?"# ":". ";
	var L15 = (this.getFieldValue('L15') == 'TRUE')?"# ":". ";
	var L16 = (this.getFieldValue('L16') == 'TRUE')?"# ":". ";
	var L17 = (this.getFieldValue('L17') == 'TRUE')?"# ":". ";
	var L18 = (this.getFieldValue('L18') == 'TRUE')?"# ":". ";
	var L19 = (this.getFieldValue('L19') == 'TRUE')?"# ":". ";
	var L20 = (this.getFieldValue('L20') == 'TRUE')?"# ":". ";
	var L21 = (this.getFieldValue('L21') == 'TRUE')?"# ":". ";
	var L22 = (this.getFieldValue('L22') == 'TRUE')?"# ":". ";
	var L23 = (this.getFieldValue('L23') == 'TRUE')?"# ":". ";
	var L24 = (this.getFieldValue('L24') == 'TRUE')?"# ":". ";
	var L25 = (this.getFieldValue('L25') == 'TRUE')?"# ":". ";
	//var code = 'LED_m.showLEDs("'+L21+L22+L23+L24+L25+L16+L17+L18+L19+L20+L11+L12+L13+L14+L15+L06+L07+L08+L09+L10+L01+L02+L03+L04+L05+'");\n';
	var code = 'LED_m.showLEDs(\n\t"'+L01+L02+L03+L04+L05+'"\t\\\n\t"'+L06+L07+L08+L09+L10+'"\t\\\n\t"'+L11+L12+L13+L14+L15+'"\t\\\n\t"'+L16+L17+L18+L19+L20+'"\t\\\n\t"'+L21+L22+L23+L24+L25+'");\n';
	
	return code;
};

Blockly.Arduino['ShowLEDMatrix_String'] = function() {
		Blockly.Arduino.definitions_['define_hub8735_LEDMatrix']='\n'+
											'#include "LEDMatrix.h"\n'+
											'\n'+
											'extern LED_Matrix LED_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735_ShowLEDMatrix_setups'] = ''
											+' LED_m.begin();\n';
											
		//var value_text_=this.getFieldValue("value_text_");									
		var value_text_= Blockly.Arduino.valueToCode(this,"value_text_",Blockly.Arduino.ORDER_ATOMIC);
		var led_direct_=this.getFieldValue("led_direct_");
		var code = 'LED_m.showString('+value_text_+','+led_direct_+');\n';
		return code;
}

Blockly.Arduino['ShowLEDMatrix_Icon'] = function() {
		Blockly.Arduino.definitions_['define_hub8735_LEDMatrix']='\n'+
											'#include "LEDMatrix.h"\n'+
											'\n'+
											'extern LED_Matrix LED_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735_ShowLEDMatrix_setups'] = ''
											+' LED_m.begin();\n';
		var icon_index_=this.getFieldValue("icon_index_");											
		//var icon_index_=this.getFieldValue("icon_index_");
		var code = 'LED_m.showIcon('+icon_index_+');\n';
		return code;
}

Blockly.Arduino['ShowLEDMatrix_Clear'] = function() {
		Blockly.Arduino.definitions_['define_hub8735_LEDMatrix']='\n'+
											'#include "LEDMatrix.h"\n'+
											'\n'+
											'extern LED_Matrix LED_m;\n';
											
		var code = 'LED_m.clear();\n';
		return code;
}

Blockly.Arduino['ShowLEDMatrix_Arrow'] = function() {
		Blockly.Arduino.definitions_['define_hub8735_LEDMatrix']='\n'+
											'#include "LEDMatrix.h"\n'+
											'\n'+
											'extern LED_Matrix LED_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735_ShowLEDMatrix_setups'] = ''
											+' LED_m.begin();\n';
		var map_direct_=this.getFieldValue("map_direct_");
		var code = 'LED_m.showArrow('+map_direct_+');\n';
		return code;
}