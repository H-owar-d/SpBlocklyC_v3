//hub8735bit NN
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