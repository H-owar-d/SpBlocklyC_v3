Blockly.Arduino['hub8735bit_blockly_ir_r_read'] = function() {
		Blockly.Arduino.definitions_['define_hub8735bit_IR']='\n'+
											'#include "IRControl.h"\n'+
											'\n'+
											'IRControl IR_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735bit_IR_setups'] = ''
											+'IR_m.begin();\n';
		var code = 'IR_m.readIR_R()';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_ir_l_read'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_IR']='\n'+
											'#include "IRControl.h"\n'+
											'\n'+
											'IRControl IR_m;\n';
											
	Blockly.Arduino.setups_['begin_hub8735bit_IR_setups'] = ''
										+'IR_m.begin();\n';
	var code = 'IR_m.readIR_L()';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_ir_r_truefalse'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_IR']='\n'+
											'#include "IRControl.h"\n'+
											'\n'+
											'IRControl IR_m;\n';
											
	Blockly.Arduino.setups_['begin_hub8735bit_IR_setups'] = ''
										+'IR_m.begin();\n';
	var ir_r_number = Blockly.Arduino.valueToCode(this,"ir_r_number_",Blockly.Arduino.ORDER_ATOMIC);
	var code = 'IR_m.checkIR_R(' + ir_r_number + ')';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_ir_l_truefalse'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_IR']='\n'+
											'#include "IRControl.h"\n'+
											'\n'+
											'IRControl IR_m;\n';
											
	Blockly.Arduino.setups_['begin_hub8735bit_IR_setups'] = ''
										+'IR_m.begin();\n';
	var ir_l_number = Blockly.Arduino.valueToCode(this,"ir_l_number_",Blockly.Arduino.ORDER_ATOMIC);										
	var code = 'IR_m.checkIR_L(' + ir_l_number + ')';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_go'] = function() {
		Blockly.Arduino.definitions_['define_hub8735bit_Motor']='\n'+
											'#include "MotorControl.h"\n'+
											'\n'+
											'MotorControl Motor_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735bit_Motor_setups'] = ''
											+'Motor_m.begin();\n';
												
		var code = 'Motor_m.forward();\n';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_back'] = function() {
		Blockly.Arduino.definitions_['define_hub8735bit_Motor']='\n'+
											'#include "MotorControl.h"\n'+
											'\n'+
											'MotorControl Motor_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735bit_Motor_setups'] = ''
											+'Motor_m.begin();\n';
												
		var code = 'Motor_m.backward();\n';
		return code;
}


Blockly.Arduino['hub8735bit_blockly_stop'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_Motor']='\n'+
											'#include "MotorControl.h"\n'+
											'\n'+
											'MotorControl Motor_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735bit_Motor_setups'] = ''
											+'Motor_m.begin();\n';
												
		var code = 'Motor_m.stopwalk();\n';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_turn_right'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_Motor']='\n'+
											'#include "MotorControl.h"\n'+
											'\n'+
											'MotorControl Motor_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735bit_Motor_setups'] = ''
											+'Motor_m.begin();\n';
												
		var code = 'Motor_m.rightward();\n';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_turn_left'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_Motor']='\n'+
											'#include "MotorControl.h"\n'+
											'\n'+
											'MotorControl Motor_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735bit_Motor_setups'] = ''
											+'Motor_m.begin();\n';
												
		var code = 'Motor_m.leftward();\n';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_stop_turn'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_Motor']='\n'+
											'#include "MotorControl.h"\n'+
											'\n'+
											'MotorControl Motor_m;\n';
											
		Blockly.Arduino.setups_['begin_hub8735bit_Motor_setups'] = ''
											+'Motor_m.begin();\n';
												
		var code = 'Motor_m.stopturn();\n';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_buzzer_control'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_Buzzer']='\n'+
											'#define NOTE_    0\n'+
											'#define NOTE_B0  31\n'+
											'#define NOTE_C1  33\n'+
											'#define NOTE_CS1 35\n'+
											'#define NOTE_D1  37\n'+
											'#define NOTE_DS1 39\n'+
											'#define NOTE_E1  41\n'+
											'#define NOTE_F1  44\n'+
											'#define NOTE_FS1 46\n'+
											'#define NOTE_G1  49\n'+
											'#define NOTE_GS1 52\n'+
											'#define NOTE_A1  55\n'+
											'#define NOTE_AS1 58\n'+
											'#define NOTE_B1  62\n'+
											'#define NOTE_C2  65\n'+
											'#define NOTE_CS2 69\n'+
											'#define NOTE_D2  73\n'+
											'#define NOTE_DS2 78\n'+
											'#define NOTE_E2  82\n'+
											'#define NOTE_F2  87\n'+
											'#define NOTE_FS2 93\n'+
											'#define NOTE_G2  98\n'+
											'#define NOTE_GS2 104\n'+
											'#define NOTE_A2  110\n'+
											'#define NOTE_AS2 117\n'+
											'#define NOTE_B2  123\n'+
											'#define NOTE_C3  131\n'+
											'#define NOTE_CS3 139\n'+
											'#define NOTE_D3  147\n'+
											'#define NOTE_DS3 156\n'+
											'#define NOTE_E3  165\n'+
											'#define NOTE_F3  175\n'+
											'#define NOTE_FS3 185\n'+
											'#define NOTE_G3  196\n'+
											'#define NOTE_GS3 208\n'+
											'#define NOTE_A3  220\n'+
											'#define NOTE_AS3 233\n'+
											'#define NOTE_B3  247\n'+
											'#define NOTE_C4  262\n'+
											'#define NOTE_CS4 277\n'+
											'#define NOTE_D4  294\n'+
											'#define NOTE_DS4 311\n'+
											'#define NOTE_E4  330\n'+
											'#define NOTE_F4  349\n'+
											'#define NOTE_FS4 370\n'+
											'#define NOTE_G4  392\n'+
											'#define NOTE_GS4 415\n'+
											'#define NOTE_A4  440\n'+
											'#define NOTE_AS4 466\n'+
											'#define NOTE_B4  494\n'+
											'#define NOTE_C5  523\n'+
											'#define NOTE_CS5 554\n'+
											'#define NOTE_D5  587\n'+
											'#define NOTE_DS5 622\n'+
											'#define NOTE_E5  659\n'+
											'#define NOTE_F5  698\n'+
											'#define NOTE_FS5 740\n'+
											'#define NOTE_G5  784\n'+
											'#define NOTE_GS5 831\n'+
											'#define NOTE_A5  880\n'+
											'#define NOTE_AS5 932\n'+
											'#define NOTE_B5  988\n'+
											'#define NOTE_C6  1047\n'+
											'#define NOTE_CS6 1109\n'+
											'#define NOTE_D6  1175\n'+
											'#define NOTE_DS6 1245\n'+
											'#define NOTE_E6  1319\n'+
											'#define NOTE_F6  1397\n'+
											'#define NOTE_FS6 1480\n'+
											'#define NOTE_G6  1568\n'+
											'#define NOTE_GS6 1661\n'+
											'#define NOTE_A6  1760\n'+
											'#define NOTE_AS6 1865\n'+
											'#define NOTE_B6  1976\n'+
											'#define NOTE_C7  2093\n'+
											'#define NOTE_CS7 2217\n'+
											'#define NOTE_D7  2349\n'+
											'#define NOTE_DS7 2489\n'+
											'#define NOTE_E7  2637\n'+
											'#define NOTE_F7  2794\n'+
											'#define NOTE_FS7 2960\n'+
											'#define NOTE_G7  3136\n'+
											'#define NOTE_GS7 3322\n'+
											'#define NOTE_A7  3520\n'+
											'#define NOTE_AS7 3729\n'+
											'#define NOTE_B7  3951\n'+
											'#define NOTE_C8  4186\n'+
											'#define NOTE_CS8 4435\n'+
											'#define NOTE_D8  4699\n'+
											'#define NOTE_DS8 4978\n'+											
											'#define PWM_PIN 	P0\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_melody']='\n'+
											'int melody[] = {\n' + 
											'NOTE_G4, NOTE_G4, NOTE_E4, NOTE_D4, NOTE_E4, NOTE_D4, NOTE_C4, \n'+
											'NOTE_E4, NOTE_D4, NOTE_C4, NOTE_A3, NOTE_G3, NOTE_A3, NOTE_G3, \n'+
											'NOTE_A3, NOTE_A3, NOTE_C4, NOTE_A3, NOTE_C4, NOTE_D4, NOTE_E4, \n'+
											'NOTE_D4, NOTE_D4, NOTE_G4, NOTE_G4, NOTE_E4, NOTE_D4, NOTE_C4 \n'+
											'};\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_noteDurations']='\n'+
											'int noteDurations[] = {\n' + 
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											'};\n';
		
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_play_function']='\n'+
										'void play(int *melody, int *noteDurations, int num) {\n' +
										'for (int note = 0; note < num; note++) {\n' +
										'int noteDuration = 3000 / noteDurations[note];\n\n' +
										'tone(0, melody[note], noteDuration);\n' +
										'delay(noteDuration * 1.30);\n'+
										'}\n}\n';
												
		var code = 'play(melody, noteDurations, (sizeof(melody) / sizeof(int)));\n';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_buzzer_in_control'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_Buzzer']='\n'+
											'#define NOTE_    0\n'+
											'#define NOTE_B0  31\n'+
											'#define NOTE_C1  33\n'+
											'#define NOTE_CS1 35\n'+
											'#define NOTE_D1  37\n'+
											'#define NOTE_DS1 39\n'+
											'#define NOTE_E1  41\n'+
											'#define NOTE_F1  44\n'+
											'#define NOTE_FS1 46\n'+
											'#define NOTE_G1  49\n'+
											'#define NOTE_GS1 52\n'+
											'#define NOTE_A1  55\n'+
											'#define NOTE_AS1 58\n'+
											'#define NOTE_B1  62\n'+
											'#define NOTE_C2  65\n'+
											'#define NOTE_CS2 69\n'+
											'#define NOTE_D2  73\n'+
											'#define NOTE_DS2 78\n'+
											'#define NOTE_E2  82\n'+
											'#define NOTE_F2  87\n'+
											'#define NOTE_FS2 93\n'+
											'#define NOTE_G2  98\n'+
											'#define NOTE_GS2 104\n'+
											'#define NOTE_A2  110\n'+
											'#define NOTE_AS2 117\n'+
											'#define NOTE_B2  123\n'+
											'#define NOTE_C3  131\n'+
											'#define NOTE_CS3 139\n'+
											'#define NOTE_D3  147\n'+
											'#define NOTE_DS3 156\n'+
											'#define NOTE_E3  165\n'+
											'#define NOTE_F3  175\n'+
											'#define NOTE_FS3 185\n'+
											'#define NOTE_G3  196\n'+
											'#define NOTE_GS3 208\n'+
											'#define NOTE_A3  220\n'+
											'#define NOTE_AS3 233\n'+
											'#define NOTE_B3  247\n'+
											'#define NOTE_C4  262\n'+
											'#define NOTE_CS4 277\n'+
											'#define NOTE_D4  294\n'+
											'#define NOTE_DS4 311\n'+
											'#define NOTE_E4  330\n'+
											'#define NOTE_F4  349\n'+
											'#define NOTE_FS4 370\n'+
											'#define NOTE_G4  392\n'+
											'#define NOTE_GS4 415\n'+
											'#define NOTE_A4  440\n'+
											'#define NOTE_AS4 466\n'+
											'#define NOTE_B4  494\n'+
											'#define NOTE_C5  523\n'+
											'#define NOTE_CS5 554\n'+
											'#define NOTE_D5  587\n'+
											'#define NOTE_DS5 622\n'+
											'#define NOTE_E5  659\n'+
											'#define NOTE_F5  698\n'+
											'#define NOTE_FS5 740\n'+
											'#define NOTE_G5  784\n'+
											'#define NOTE_GS5 831\n'+
											'#define NOTE_A5  880\n'+
											'#define NOTE_AS5 932\n'+
											'#define NOTE_B5  988\n'+
											'#define NOTE_C6  1047\n'+
											'#define NOTE_CS6 1109\n'+
											'#define NOTE_D6  1175\n'+
											'#define NOTE_DS6 1245\n'+
											'#define NOTE_E6  1319\n'+
											'#define NOTE_F6  1397\n'+
											'#define NOTE_FS6 1480\n'+
											'#define NOTE_G6  1568\n'+
											'#define NOTE_GS6 1661\n'+
											'#define NOTE_A6  1760\n'+
											'#define NOTE_AS6 1865\n'+
											'#define NOTE_B6  1976\n'+
											'#define NOTE_C7  2093\n'+
											'#define NOTE_CS7 2217\n'+
											'#define NOTE_D7  2349\n'+
											'#define NOTE_DS7 2489\n'+
											'#define NOTE_E7  2637\n'+
											'#define NOTE_F7  2794\n'+
											'#define NOTE_FS7 2960\n'+
											'#define NOTE_G7  3136\n'+
											'#define NOTE_GS7 3322\n'+
											'#define NOTE_A7  3520\n'+
											'#define NOTE_AS7 3729\n'+
											'#define NOTE_B7  3951\n'+
											'#define NOTE_C8  4186\n'+
											'#define NOTE_CS8 4435\n'+
											'#define NOTE_D8  4699\n'+
											'#define NOTE_DS8 4978\n'+											
											'#define PWM_PIN 	P0\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_in_melody']='\n'+
											'int melody[] = {\n' + 
											'NOTE_G4, NOTE_G4, NOTE_E4, NOTE_D4, NOTE_E4, NOTE_D4, NOTE_C4, \n'+
											'NOTE_E4, NOTE_D4, NOTE_C4, NOTE_A3, NOTE_G3, NOTE_A3, NOTE_G3, \n'+
											'NOTE_A3, NOTE_A3, NOTE_C4, NOTE_A3, NOTE_C4, NOTE_D4, NOTE_E4, \n'+
											'NOTE_D4, NOTE_D4, NOTE_G4, NOTE_G4, NOTE_E4, NOTE_D4, NOTE_C4 \n'+
											'};\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_in_noteDurations']='\n'+
											'int noteDurations[] = {\n' + 
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											'};\n';
		
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_in_play_function']='\n'+
										'void play(int *melody, int *noteDurations, int num) {\n' +
										'for (int note = 0; note < num; note++) {\n' +
										'int noteDuration = 3000 / noteDurations[note];\n\n' +
										'tone(3, melody[note], noteDuration);\n' +
										'delay(noteDuration * 1.30);\n'+
										'}\n}\n';
												
		var code = 'play(melody, noteDurations, (sizeof(melody) / sizeof(int)));\n';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_buzzer_control1'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_Buzzer']='\n'+
											'#define NOTE_    0\n'+
											'#define NOTE_B0  31\n'+
											'#define NOTE_C1  33\n'+
											'#define NOTE_CS1 35\n'+
											'#define NOTE_D1  37\n'+
											'#define NOTE_DS1 39\n'+
											'#define NOTE_E1  41\n'+
											'#define NOTE_F1  44\n'+
											'#define NOTE_FS1 46\n'+
											'#define NOTE_G1  49\n'+
											'#define NOTE_GS1 52\n'+
											'#define NOTE_A1  55\n'+
											'#define NOTE_AS1 58\n'+
											'#define NOTE_B1  62\n'+
											'#define NOTE_C2  65\n'+
											'#define NOTE_CS2 69\n'+
											'#define NOTE_D2  73\n'+
											'#define NOTE_DS2 78\n'+
											'#define NOTE_E2  82\n'+
											'#define NOTE_F2  87\n'+
											'#define NOTE_FS2 93\n'+
											'#define NOTE_G2  98\n'+
											'#define NOTE_GS2 104\n'+
											'#define NOTE_A2  110\n'+
											'#define NOTE_AS2 117\n'+
											'#define NOTE_B2  123\n'+
											'#define NOTE_C3  131\n'+
											'#define NOTE_CS3 139\n'+
											'#define NOTE_D3  147\n'+
											'#define NOTE_DS3 156\n'+
											'#define NOTE_E3  165\n'+
											'#define NOTE_F3  175\n'+
											'#define NOTE_FS3 185\n'+
											'#define NOTE_G3  196\n'+
											'#define NOTE_GS3 208\n'+
											'#define NOTE_A3  220\n'+
											'#define NOTE_AS3 233\n'+
											'#define NOTE_B3  247\n'+
											'#define NOTE_C4  262\n'+
											'#define NOTE_CS4 277\n'+
											'#define NOTE_D4  294\n'+
											'#define NOTE_DS4 311\n'+
											'#define NOTE_E4  330\n'+
											'#define NOTE_F4  349\n'+
											'#define NOTE_FS4 370\n'+
											'#define NOTE_G4  392\n'+
											'#define NOTE_GS4 415\n'+
											'#define NOTE_A4  440\n'+
											'#define NOTE_AS4 466\n'+
											'#define NOTE_B4  494\n'+
											'#define NOTE_C5  523\n'+
											'#define NOTE_CS5 554\n'+
											'#define NOTE_D5  587\n'+
											'#define NOTE_DS5 622\n'+
											'#define NOTE_E5  659\n'+
											'#define NOTE_F5  698\n'+
											'#define NOTE_FS5 740\n'+
											'#define NOTE_G5  784\n'+
											'#define NOTE_GS5 831\n'+
											'#define NOTE_A5  880\n'+
											'#define NOTE_AS5 932\n'+
											'#define NOTE_B5  988\n'+
											'#define NOTE_C6  1047\n'+
											'#define NOTE_CS6 1109\n'+
											'#define NOTE_D6  1175\n'+
											'#define NOTE_DS6 1245\n'+
											'#define NOTE_E6  1319\n'+
											'#define NOTE_F6  1397\n'+
											'#define NOTE_FS6 1480\n'+
											'#define NOTE_G6  1568\n'+
											'#define NOTE_GS6 1661\n'+
											'#define NOTE_A6  1760\n'+
											'#define NOTE_AS6 1865\n'+
											'#define NOTE_B6  1976\n'+
											'#define NOTE_C7  2093\n'+
											'#define NOTE_CS7 2217\n'+
											'#define NOTE_D7  2349\n'+
											'#define NOTE_DS7 2489\n'+
											'#define NOTE_E7  2637\n'+
											'#define NOTE_F7  2794\n'+
											'#define NOTE_FS7 2960\n'+
											'#define NOTE_G7  3136\n'+
											'#define NOTE_GS7 3322\n'+
											'#define NOTE_A7  3520\n'+
											'#define NOTE_AS7 3729\n'+
											'#define NOTE_B7  3951\n'+
											'#define NOTE_C8  4186\n'+
											'#define NOTE_CS8 4435\n'+
											'#define NOTE_D8  4699\n'+
											'#define NOTE_DS8 4978\n'+											
											'#define PWM_PIN 	P0\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_melody1']='\n'+
											'int melody1[] = {\n' + 
											'NOTE_E7, NOTE_E7, 0, NOTE_E7, \n' +
										  '0, NOTE_C7, NOTE_E7, 0, \n' +
										  'NOTE_G7, 0, 0,  0, \n' +
										  'NOTE_G6, 0, 0, 0, \n' +
										
											'NOTE_C7, 0, 0, NOTE_G6, \n' +
											'0, 0, NOTE_E6, 0, \n' +
											'0, NOTE_A6, 0, NOTE_B6, \n' +
											'0, NOTE_AS6, NOTE_A6, 0, \n' +
										
										  'NOTE_G6, NOTE_E7, NOTE_G7, \n' +
										  'NOTE_A7, 0, NOTE_F7, NOTE_G7, \n' +
										  '0, NOTE_E7, 0, NOTE_C7, \n' +
										  'NOTE_D7, NOTE_B6, 0, 0, \n' +
										
										  'NOTE_C7, 0, 0, NOTE_G6, \n' +
										  '0, 0, NOTE_E6, 0, \n' +
										  '0, NOTE_A6, 0, NOTE_B6, \n' +
										  '0, NOTE_AS6, NOTE_A6, 0, \n' +
										
										  'NOTE_G6, NOTE_E7, NOTE_G7, \n' +
										  'NOTE_A7, 0, NOTE_F7, NOTE_G7, \n' +
										  '0, NOTE_E7, 0, NOTE_C7, \n' +
										  'NOTE_D7, NOTE_B6, 0, 0 \n' +
											'};\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_noteDurations1']='\n'+
											'int noteDurations1[] = {\n' + 
											'12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										
											'12, 12, 12, 12, \n' +
											'12, 12, 12, 12, \n' +
											'12, 12, 12, 12, \n' +
											'12, 12, 12, 12, \n' +
										
										  '9, 9, 9, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										
										  '9, 9, 9, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12 \n' +
											'};\n';
		
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_play_function']='\n'+
										'void play(int *melody, int *noteDurations, int num) {\n' +
										'for (int note = 0; note < num; note++) {\n' +
										'int noteDuration = 3000 / noteDurations[note];\n\n' +
										'tone(0, melody[note], noteDuration);\n' +
										'delay(noteDuration * 1.30);\n'+
										'}\n}\n';
												
		var code = 'play(melody1, noteDurations1, (sizeof(melody1) / sizeof(int)));\n';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_buzzer_in_control1'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_Buzzer']='\n'+
											'#define NOTE_    0\n'+
											'#define NOTE_B0  31\n'+
											'#define NOTE_C1  33\n'+
											'#define NOTE_CS1 35\n'+
											'#define NOTE_D1  37\n'+
											'#define NOTE_DS1 39\n'+
											'#define NOTE_E1  41\n'+
											'#define NOTE_F1  44\n'+
											'#define NOTE_FS1 46\n'+
											'#define NOTE_G1  49\n'+
											'#define NOTE_GS1 52\n'+
											'#define NOTE_A1  55\n'+
											'#define NOTE_AS1 58\n'+
											'#define NOTE_B1  62\n'+
											'#define NOTE_C2  65\n'+
											'#define NOTE_CS2 69\n'+
											'#define NOTE_D2  73\n'+
											'#define NOTE_DS2 78\n'+
											'#define NOTE_E2  82\n'+
											'#define NOTE_F2  87\n'+
											'#define NOTE_FS2 93\n'+
											'#define NOTE_G2  98\n'+
											'#define NOTE_GS2 104\n'+
											'#define NOTE_A2  110\n'+
											'#define NOTE_AS2 117\n'+
											'#define NOTE_B2  123\n'+
											'#define NOTE_C3  131\n'+
											'#define NOTE_CS3 139\n'+
											'#define NOTE_D3  147\n'+
											'#define NOTE_DS3 156\n'+
											'#define NOTE_E3  165\n'+
											'#define NOTE_F3  175\n'+
											'#define NOTE_FS3 185\n'+
											'#define NOTE_G3  196\n'+
											'#define NOTE_GS3 208\n'+
											'#define NOTE_A3  220\n'+
											'#define NOTE_AS3 233\n'+
											'#define NOTE_B3  247\n'+
											'#define NOTE_C4  262\n'+
											'#define NOTE_CS4 277\n'+
											'#define NOTE_D4  294\n'+
											'#define NOTE_DS4 311\n'+
											'#define NOTE_E4  330\n'+
											'#define NOTE_F4  349\n'+
											'#define NOTE_FS4 370\n'+
											'#define NOTE_G4  392\n'+
											'#define NOTE_GS4 415\n'+
											'#define NOTE_A4  440\n'+
											'#define NOTE_AS4 466\n'+
											'#define NOTE_B4  494\n'+
											'#define NOTE_C5  523\n'+
											'#define NOTE_CS5 554\n'+
											'#define NOTE_D5  587\n'+
											'#define NOTE_DS5 622\n'+
											'#define NOTE_E5  659\n'+
											'#define NOTE_F5  698\n'+
											'#define NOTE_FS5 740\n'+
											'#define NOTE_G5  784\n'+
											'#define NOTE_GS5 831\n'+
											'#define NOTE_A5  880\n'+
											'#define NOTE_AS5 932\n'+
											'#define NOTE_B5  988\n'+
											'#define NOTE_C6  1047\n'+
											'#define NOTE_CS6 1109\n'+
											'#define NOTE_D6  1175\n'+
											'#define NOTE_DS6 1245\n'+
											'#define NOTE_E6  1319\n'+
											'#define NOTE_F6  1397\n'+
											'#define NOTE_FS6 1480\n'+
											'#define NOTE_G6  1568\n'+
											'#define NOTE_GS6 1661\n'+
											'#define NOTE_A6  1760\n'+
											'#define NOTE_AS6 1865\n'+
											'#define NOTE_B6  1976\n'+
											'#define NOTE_C7  2093\n'+
											'#define NOTE_CS7 2217\n'+
											'#define NOTE_D7  2349\n'+
											'#define NOTE_DS7 2489\n'+
											'#define NOTE_E7  2637\n'+
											'#define NOTE_F7  2794\n'+
											'#define NOTE_FS7 2960\n'+
											'#define NOTE_G7  3136\n'+
											'#define NOTE_GS7 3322\n'+
											'#define NOTE_A7  3520\n'+
											'#define NOTE_AS7 3729\n'+
											'#define NOTE_B7  3951\n'+
											'#define NOTE_C8  4186\n'+
											'#define NOTE_CS8 4435\n'+
											'#define NOTE_D8  4699\n'+
											'#define NOTE_DS8 4978\n'+											
											'#define PWM_PIN 	P0\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_melody1']='\n'+
											'int melody1[] = {\n' + 
											'NOTE_E7, NOTE_E7, 0, NOTE_E7, \n' +
										  '0, NOTE_C7, NOTE_E7, 0, \n' +
										  'NOTE_G7, 0, 0,  0, \n' +
										  'NOTE_G6, 0, 0, 0, \n' +
										
											'NOTE_C7, 0, 0, NOTE_G6, \n' +
											'0, 0, NOTE_E6, 0, \n' +
											'0, NOTE_A6, 0, NOTE_B6, \n' +
											'0, NOTE_AS6, NOTE_A6, 0, \n' +
										
										  'NOTE_G6, NOTE_E7, NOTE_G7, \n' +
										  'NOTE_A7, 0, NOTE_F7, NOTE_G7, \n' +
										  '0, NOTE_E7, 0, NOTE_C7, \n' +
										  'NOTE_D7, NOTE_B6, 0, 0, \n' +
										
										  'NOTE_C7, 0, 0, NOTE_G6, \n' +
										  '0, 0, NOTE_E6, 0, \n' +
										  '0, NOTE_A6, 0, NOTE_B6, \n' +
										  '0, NOTE_AS6, NOTE_A6, 0, \n' +
										
										  'NOTE_G6, NOTE_E7, NOTE_G7, \n' +
										  'NOTE_A7, 0, NOTE_F7, NOTE_G7, \n' +
										  '0, NOTE_E7, 0, NOTE_C7, \n' +
										  'NOTE_D7, NOTE_B6, 0, 0 \n' +
											'};\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_noteDurations1']='\n'+
											'int noteDurations1[] = {\n' + 
											'12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										
											'12, 12, 12, 12, \n' +
											'12, 12, 12, 12, \n' +
											'12, 12, 12, 12, \n' +
											'12, 12, 12, 12, \n' +
										
										  '9, 9, 9, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										
										  '9, 9, 9, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12, \n' +
										  '12, 12, 12, 12 \n' +
											'};\n';
		
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_in_play_function']='\n'+
										'void play(int *melody, int *noteDurations, int num) {\n' +
										'for (int note = 0; note < num; note++) {\n' +
										'int noteDuration = 3000 / noteDurations[note];\n\n' +
										'tone(3, melody[note], noteDuration);\n' +
										'delay(noteDuration * 1.30);\n'+
										'}\n}\n';
												
		var code = 'play(melody1, noteDurations1, (sizeof(melody1) / sizeof(int)));\n';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_buzzer_control2'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_Buzzer']='\n'+
											'#define NOTE_    0\n'+
											'#define NOTE_B0  31\n'+
											'#define NOTE_C1  33\n'+
											'#define NOTE_CS1 35\n'+
											'#define NOTE_D1  37\n'+
											'#define NOTE_DS1 39\n'+
											'#define NOTE_E1  41\n'+
											'#define NOTE_F1  44\n'+
											'#define NOTE_FS1 46\n'+
											'#define NOTE_G1  49\n'+
											'#define NOTE_GS1 52\n'+
											'#define NOTE_A1  55\n'+
											'#define NOTE_AS1 58\n'+
											'#define NOTE_B1  62\n'+
											'#define NOTE_C2  65\n'+
											'#define NOTE_CS2 69\n'+
											'#define NOTE_D2  73\n'+
											'#define NOTE_DS2 78\n'+
											'#define NOTE_E2  82\n'+
											'#define NOTE_F2  87\n'+
											'#define NOTE_FS2 93\n'+
											'#define NOTE_G2  98\n'+
											'#define NOTE_GS2 104\n'+
											'#define NOTE_A2  110\n'+
											'#define NOTE_AS2 117\n'+
											'#define NOTE_B2  123\n'+
											'#define NOTE_C3  131\n'+
											'#define NOTE_CS3 139\n'+
											'#define NOTE_D3  147\n'+
											'#define NOTE_DS3 156\n'+
											'#define NOTE_E3  165\n'+
											'#define NOTE_F3  175\n'+
											'#define NOTE_FS3 185\n'+
											'#define NOTE_G3  196\n'+
											'#define NOTE_GS3 208\n'+
											'#define NOTE_A3  220\n'+
											'#define NOTE_AS3 233\n'+
											'#define NOTE_B3  247\n'+
											'#define NOTE_C4  262\n'+
											'#define NOTE_CS4 277\n'+
											'#define NOTE_D4  294\n'+
											'#define NOTE_DS4 311\n'+
											'#define NOTE_E4  330\n'+
											'#define NOTE_F4  349\n'+
											'#define NOTE_FS4 370\n'+
											'#define NOTE_G4  392\n'+
											'#define NOTE_GS4 415\n'+
											'#define NOTE_A4  440\n'+
											'#define NOTE_AS4 466\n'+
											'#define NOTE_B4  494\n'+
											'#define NOTE_C5  523\n'+
											'#define NOTE_CS5 554\n'+
											'#define NOTE_D5  587\n'+
											'#define NOTE_DS5 622\n'+
											'#define NOTE_E5  659\n'+
											'#define NOTE_F5  698\n'+
											'#define NOTE_FS5 740\n'+
											'#define NOTE_G5  784\n'+
											'#define NOTE_GS5 831\n'+
											'#define NOTE_A5  880\n'+
											'#define NOTE_AS5 932\n'+
											'#define NOTE_B5  988\n'+
											'#define NOTE_C6  1047\n'+
											'#define NOTE_CS6 1109\n'+
											'#define NOTE_D6  1175\n'+
											'#define NOTE_DS6 1245\n'+
											'#define NOTE_E6  1319\n'+
											'#define NOTE_F6  1397\n'+
											'#define NOTE_FS6 1480\n'+
											'#define NOTE_G6  1568\n'+
											'#define NOTE_GS6 1661\n'+
											'#define NOTE_A6  1760\n'+
											'#define NOTE_AS6 1865\n'+
											'#define NOTE_B6  1976\n'+
											'#define NOTE_C7  2093\n'+
											'#define NOTE_CS7 2217\n'+
											'#define NOTE_D7  2349\n'+
											'#define NOTE_DS7 2489\n'+
											'#define NOTE_E7  2637\n'+
											'#define NOTE_F7  2794\n'+
											'#define NOTE_FS7 2960\n'+
											'#define NOTE_G7  3136\n'+
											'#define NOTE_GS7 3322\n'+
											'#define NOTE_A7  3520\n'+
											'#define NOTE_AS7 3729\n'+
											'#define NOTE_B7  3951\n'+
											'#define NOTE_C8  4186\n'+
											'#define NOTE_CS8 4435\n'+
											'#define NOTE_D8  4699\n'+
											'#define NOTE_DS8 4978\n'+											
											'#define PWM_PIN 	P0\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_melody2']='\n'+
											'int melody2[] = {\n' + 
											'NOTE_G4, NOTE_G4, NOTE_E4, NOTE_D4, NOTE_E4, NOTE_D4, NOTE_C4, \n'+
											'NOTE_E4, NOTE_D4, NOTE_C4, NOTE_A3, NOTE_G3, NOTE_A3, NOTE_G3, \n'+
											'NOTE_A3, NOTE_A3, NOTE_C4, NOTE_A3, NOTE_C4, NOTE_D4, NOTE_E4, \n'+
											'NOTE_D4, NOTE_D4, NOTE_G4, NOTE_G4, NOTE_E4, NOTE_D4, NOTE_C4 \n'+
											'};\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_noteDurations2']='\n'+
											'int noteDurations2[] = {\n' + 
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											'};\n';
		
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_play_function']='\n'+
										'void play(int *melody, int *noteDurations, int num) {\n' +
										'for (int note = 0; note < num; note++) {\n' +
										'int noteDuration = 3000 / noteDurations[note];\n\n' +
										'tone(0, melody[note], noteDuration);\n' +
										'delay(noteDuration * 1.30);\n'+
										'}\n}\n';
												
		var code = 'play(melody2, noteDurations2, (sizeof(melody2) / sizeof(int)));\n';
		return code;
}

Blockly.Arduino['hub8735bit_blockly_buzzer_in_control2'] = function() {
	Blockly.Arduino.definitions_['define_hub8735bit_Buzzer']='\n'+
											'#define NOTE_    0\n'+
											'#define NOTE_B0  31\n'+
											'#define NOTE_C1  33\n'+
											'#define NOTE_CS1 35\n'+
											'#define NOTE_D1  37\n'+
											'#define NOTE_DS1 39\n'+
											'#define NOTE_E1  41\n'+
											'#define NOTE_F1  44\n'+
											'#define NOTE_FS1 46\n'+
											'#define NOTE_G1  49\n'+
											'#define NOTE_GS1 52\n'+
											'#define NOTE_A1  55\n'+
											'#define NOTE_AS1 58\n'+
											'#define NOTE_B1  62\n'+
											'#define NOTE_C2  65\n'+
											'#define NOTE_CS2 69\n'+
											'#define NOTE_D2  73\n'+
											'#define NOTE_DS2 78\n'+
											'#define NOTE_E2  82\n'+
											'#define NOTE_F2  87\n'+
											'#define NOTE_FS2 93\n'+
											'#define NOTE_G2  98\n'+
											'#define NOTE_GS2 104\n'+
											'#define NOTE_A2  110\n'+
											'#define NOTE_AS2 117\n'+
											'#define NOTE_B2  123\n'+
											'#define NOTE_C3  131\n'+
											'#define NOTE_CS3 139\n'+
											'#define NOTE_D3  147\n'+
											'#define NOTE_DS3 156\n'+
											'#define NOTE_E3  165\n'+
											'#define NOTE_F3  175\n'+
											'#define NOTE_FS3 185\n'+
											'#define NOTE_G3  196\n'+
											'#define NOTE_GS3 208\n'+
											'#define NOTE_A3  220\n'+
											'#define NOTE_AS3 233\n'+
											'#define NOTE_B3  247\n'+
											'#define NOTE_C4  262\n'+
											'#define NOTE_CS4 277\n'+
											'#define NOTE_D4  294\n'+
											'#define NOTE_DS4 311\n'+
											'#define NOTE_E4  330\n'+
											'#define NOTE_F4  349\n'+
											'#define NOTE_FS4 370\n'+
											'#define NOTE_G4  392\n'+
											'#define NOTE_GS4 415\n'+
											'#define NOTE_A4  440\n'+
											'#define NOTE_AS4 466\n'+
											'#define NOTE_B4  494\n'+
											'#define NOTE_C5  523\n'+
											'#define NOTE_CS5 554\n'+
											'#define NOTE_D5  587\n'+
											'#define NOTE_DS5 622\n'+
											'#define NOTE_E5  659\n'+
											'#define NOTE_F5  698\n'+
											'#define NOTE_FS5 740\n'+
											'#define NOTE_G5  784\n'+
											'#define NOTE_GS5 831\n'+
											'#define NOTE_A5  880\n'+
											'#define NOTE_AS5 932\n'+
											'#define NOTE_B5  988\n'+
											'#define NOTE_C6  1047\n'+
											'#define NOTE_CS6 1109\n'+
											'#define NOTE_D6  1175\n'+
											'#define NOTE_DS6 1245\n'+
											'#define NOTE_E6  1319\n'+
											'#define NOTE_F6  1397\n'+
											'#define NOTE_FS6 1480\n'+
											'#define NOTE_G6  1568\n'+
											'#define NOTE_GS6 1661\n'+
											'#define NOTE_A6  1760\n'+
											'#define NOTE_AS6 1865\n'+
											'#define NOTE_B6  1976\n'+
											'#define NOTE_C7  2093\n'+
											'#define NOTE_CS7 2217\n'+
											'#define NOTE_D7  2349\n'+
											'#define NOTE_DS7 2489\n'+
											'#define NOTE_E7  2637\n'+
											'#define NOTE_F7  2794\n'+
											'#define NOTE_FS7 2960\n'+
											'#define NOTE_G7  3136\n'+
											'#define NOTE_GS7 3322\n'+
											'#define NOTE_A7  3520\n'+
											'#define NOTE_AS7 3729\n'+
											'#define NOTE_B7  3951\n'+
											'#define NOTE_C8  4186\n'+
											'#define NOTE_CS8 4435\n'+
											'#define NOTE_D8  4699\n'+
											'#define NOTE_DS8 4978\n'+											
											'#define PWM_PIN 	P0\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_melody2']='\n'+
											'int melody2[] = {\n' + 
											'NOTE_G4, NOTE_G4, NOTE_E4, NOTE_D4, NOTE_E4, NOTE_D4, NOTE_C4, \n'+
											'NOTE_E4, NOTE_D4, NOTE_C4, NOTE_A3, NOTE_G3, NOTE_A3, NOTE_G3, \n'+
											'NOTE_A3, NOTE_A3, NOTE_C4, NOTE_A3, NOTE_C4, NOTE_D4, NOTE_E4, \n'+
											'NOTE_D4, NOTE_D4, NOTE_G4, NOTE_G4, NOTE_E4, NOTE_D4, NOTE_C4 \n'+
											'};\n';
											
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_noteDurations2']='\n'+
											'int noteDurations2[] = {\n' + 
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											' 6, 16, 8, 8, 8, 8, 4, \n'+
											'};\n';
		
		Blockly.Arduino.definitions_['define_hub8735bit_Buzzer_in_play_function']='\n'+
										'void play(int *melody, int *noteDurations, int num) {\n' +
										'for (int note = 0; note < num; note++) {\n' +
										'int noteDuration = 3000 / noteDurations[note];\n\n' +
										'tone(3, melody[note], noteDuration);\n' +
										'delay(noteDuration * 1.30);\n'+
										'}\n}\n';
												
		var code = 'play(melody2, noteDurations2, (sizeof(melody2) / sizeof(int)));\n';
		return code;
}
/*

Blockly.Arduino['hub8735bit_compass_value'] = function() {
	var code = '//[hub8735bit_compass_value] need add\n';
		return code;
}


//hub8735 bit example
Blockly.Arduino['hub8735bit_blockly'] = function() {
		Blockly.Arduino.definitions_['define_hub8735bit_blockly']='\n'+
											'int buttonA = BTNA;';+
											'int buttonB = BTNB;'+
											'bool bisPressA = false;'+
											'bool bisPressB = false;'+
											'bool bisPressAB = false;';
											
		Blockly.Arduino.setups_['setup_hub8735bit_blockly'] = ''
											+' pinMode(buttonA, INPUT_PULLUP);\n'
											+' pinMode(buttonB, INPUT_PULLUP);\n';
									
		var A_button_value;
		var B_button_value;
		var button_pressed;
		var statements_do_ = Blockly.Arduino.statementToCode(this, 'do_');
		if(this.getFieldValue("AB_BUTTON_") == "A")
		{
				A_button_value = "false";
				B_button_value = "true";
				button_pressed = "bisPressA";
		}
		else if(this.getFieldValue("AB_BUTTON_") == "B")
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
*/