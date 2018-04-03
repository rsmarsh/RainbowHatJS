var rainbowHAT = require('./rainbowHAT.js');


var turnOnLeds = function() {

	rainbowHAT.led.enable(0);
	rainbowHAT.led.enable(1);
	rainbowHAT.led.enable(2);
	// rainbowHAT.enable(3);
	// rainbowHAT.disable(1);

};

var turnOffLeds  = function() {

	rainbowHAT.led.disable(0);
	rainbowHAT.led.disable(1);
	rainbowHAT.led.disable(2);
	// rainbowHAT.enable(3);
	// rainbowHAT.disable(1);

};

var playPiezo = function() {
	console.log("play piezo");
	rainbowHAT.piezo.playNote(0.5, 500); //frequency/ ms until stop playing
};

var stopPiezo = function() {
	console.log("stop piezo");
	rainbowHAT.piezo.stopNote();
};

var readTemp = function(){
	// rainbowHAT.barometer.getPressure(printResults);
	// / rainbowHAT.barometer.getTemperature(printResults);
	rainbowHAT.barometer.getTempAndPressure(printResults)
};

var printResults = function(results){
	console.log(results);
};

var displayOnLCD = function() {
	rainbowHAT.lcd.write();
};

var clearLCD = function() {
	rainbowHAT.lcd.clear();
};

var colourRainbow = function() {
	// rainbowHAT.rainbow.enableLight(0);
	// rainbowHAT.rainbow.enableLight(1);
	// rainbowHAT.rainbow.enableLight(2);
	// rainbowHAT.rainbow.enableLight(3);
	// rainbowHAT.rainbow.enableLight(4);
	// rainbowHAT.rainbow.enableLight(5);

};


var clearAllRainbow = function() {
	rainbowHAT.rainbow.disableAll();
};