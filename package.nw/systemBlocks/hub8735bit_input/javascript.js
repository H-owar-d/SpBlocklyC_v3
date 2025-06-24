//hub8735 bit
Blockly.Arduino['hub8735bit_button_if'] = function() {
		Blockly.Arduino.definitions_['define_hub8735bit_button_if']='\n'+
											'int buttonA = BTNA;\n'+
											'int buttonB = BTNB;\n'+
											'bool bisPressA = false;\n'+
											'bool bisPressB = false;\n'+
											'bool bisPressAB = false;\n';
											
		Blockly.Arduino.setups_['setup_hub8735_button_if'] = ''
											+' pinMode(buttonA, INPUT_PULLUP);\n'
											+' pinMode(buttonB, INPUT_PULLUP);\n';
									
		var A_button_value;
		var B_button_value;
		var button_pressed;
		var statements_do_ = Blockly.Arduino.statementToCode(this, 'do_');
		//var value_number_ = Blockly.Arduino.valueToCode(this,"value_number_",Blockly.Arduino.ORDER_ATOMIC);
		if(this.getFieldValue("AB_BUTTON_") == 0)
		{
				A_button_value = "false";
				B_button_value = "true";
				button_pressed = "bisPressA";
		}
		else if(this.getFieldValue("AB_BUTTON_") == 1)
		{
				A_button_value = "true";
				B_button_value = "false"
				button_pressed = "bisPressB";
		}
		else
		{
				A_button_value = "false";
				B_button_value = "false"
				button_pressed = "bisPressAB";
		}
			
		var code = 'if ((digitalRead(buttonA) == '+A_button_value+') && (digitalRead(buttonB) == '+B_button_value+')&& (!'+button_pressed+')){\n'+statements_do_+'\n}\n';		
		return code;
}

Blockly.Arduino['hub8735bit_shake_if'] = function() {
		Blockly.Arduino.definitions_['define_hub8735bit_SensorControl']='\n'+
											'#include "SENSORControl.h"\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_acc']='\n'+
											'acc_sensor  acc_m;\n';										
											
		Blockly.Arduino.setups_['setup_hub8735bit_acc'] = '\n'
											+'acc_m.begin();\n';
											
		var shake_type=this.getFieldValue("SHAKE_TYPE_");
		var statements_do_ = Blockly.Arduino.statementToCode(this, 'do_');
		var code = 'if( acc_m.IsGesture(' + shake_type + '))\n{\n'+statements_do_+'\n}\n';;
		return code;
}

Blockly.Arduino['hub8735bit_gpio_if'] = function() {
	var gpio_pin = this.getFieldValue("GPIO_PIN_");
	
	Blockly.Arduino.definitions_['define_hub8735bit_gpio_if_'+ gpio_pin]='\n'+
											'int IFGPIO_' + gpio_pin + '= ' + gpio_pin +';\n';
											
	Blockly.Arduino.setups_['setup_hub8735_gpio_if'+gpio_pin] = ''
											+' pinMode(IFGPIO_'+ gpio_pin +', INPUT_PULLUP);\n';
	var statements_do_ = Blockly.Arduino.statementToCode(this, 'do_');										
	var code = 'if (digitalRead(IFGPIO_'+ gpio_pin +')){\n'+statements_do_+'\n}\n';		
		return code;
}

Blockly.Arduino['hub8735bit_button_condition'] = function() {
		var code;
		Blockly.Arduino.definitions_['hub8735bit_button_condition']='\n'+
											'int buttonA = BTNA;\n'+
											'int buttonB = BTNB;\n'+
											'bool bisPressA = false;\n'+
											'bool bisPressB = false;\n'+
											'bool bisPressAB = false;\n';
											
		Blockly.Arduino.setups_['hub8735bit_button_condition'] = ''
											+' pinMode(buttonA, INPUT_PULLUP);\n'
											+' pinMode(buttonB, INPUT_PULLUP);\n';
											
		if(this.getFieldValue("AB_BUTTON_CON") == 0)
		{
				code = '(digitalRead(buttonA) == false)';
		}
		else if(this.getFieldValue("AB_BUTTON_CON") == 1)
		{
				code = '(digitalRead(buttonB) == false)';
		}
		else
		{
				code = '((digitalRead(buttonA) == false) && (digitalRead(buttonB) == false))';
		}
	
		return code;
}

Blockly.Arduino['hub8735bit_shake_condition'] = function() {
		Blockly.Arduino.definitions_['define_hub8735bit_SensorControl']='\n'+
											'#include "SENSORControl.h"\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_acc']='\n'+
											'acc_sensor  acc_m;\n';		
											
		Blockly.Arduino.setups_['setup_hub8735bit_acc'] = '\n'
											+'acc_m.begin();\n';
		var shake_type=this.getFieldValue("SHAKE_TYPE_CON");
		var code = 'acc_m.IsGesture(' + shake_type + ')';
		return code;
}

Blockly.Arduino['hub8735bit_gpio_condition'] = function() {
		var gpio_pin = this.getFieldValue("GPIO_PIN_CON");
	
		Blockly.Arduino.definitions_['define_hub8735bit_gpio_if_'+ gpio_pin]='\n'+
											'int IFGPIO_' + gpio_pin + '= ' + gpio_pin +';\n';
											
		Blockly.Arduino.setups_['setup_hub8735_gpio_if'+gpio_pin] = ''
											+' pinMode(IFGPIO_'+ gpio_pin +', INPUT_PULLUP);\n';
		var code = 'digitalRead(IFGPIO_'+gpio_pin+')';
		return code;
}

Blockly.Arduino['hub8735bit_gsensor_value'] = function() {
		Blockly.Arduino.definitions_['define_hub8735bit_SensorControl']='\n'+
											'#include "SENSORControl.h"\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_acc']='\n'+
											'acc_sensor  acc_m;\n';		
											
		Blockly.Arduino.setups_['setup_hub8735bit_acc'] = '\n'
											+'acc_m.begin();\n';
		var gsensor_type=this.getFieldValue("GSENSOR_TYPE_CON");
		var code = 'acc_m.getValue(' + gsensor_type + ')';
		return code;
}

Blockly.Arduino['hub8735bit_compass_value'] = function() {
		Blockly.Arduino.definitions_['define_hub8735bit_SensorControl']='\n'+
											'#include "SENSORControl.h"\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_compass']='\n'+
											'compass_sensor compass_m;\n';		
											
		Blockly.Arduino.setups_['setup_hub8735bit_compass'] = '\n'
											+'compass_m.begin();\n';
											
	var code = '(int)compass_m.heading()';
	return code;
}

Blockly.Arduino['hub8735bit_light_L_value'] = function() {
		var code = 'analogRead(A4)';
		return code;
}

Blockly.Arduino['hub8735bit_light_R_value'] = function() {
	var code = 'analogRead(A5)';
		return code;
}

Blockly.Arduino['hub8735bit_temperature_value'] = function() {
		Blockly.Arduino.definitions_['define_hub8735bit_SensorControl']='\n'+
											'#include "SENSORControl.h"\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_acc']='\n'+
											'acc_sensor  acc_m;\n';		
											
		Blockly.Arduino.setups_['setup_hub8735bit_acc'] = '\n'
											+'acc_m.begin();\n';
		var code = '(int)acc_m.temperature()';
		return code;
}