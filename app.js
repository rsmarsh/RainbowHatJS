var rainbowHAT = require('./rainbowHAT.js');


var turnOnLeds = function() {

	console.log("ok lets toggle");
	rainbowHAT.led.toggle(0);
	// rainbowHAT.disable(1);
	// rainbowHAT.enable(3);

};

var playPiezo = function() {
	console.log("play piezo");
	rainbowHAT.piezo.playNote(0, 500); //frequency/ ms until stop playing
};

var stopPiezo = function() {
	console.log("stop piezo");
	rainbowHAT.piezo.stop();
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
	rainbowHAT.rainbowLED.enable(3);
	// rainbowHAT.rainbowLED.enableAll();
};

var clearRainbow = function() {
	rainbowHAT.rainbow.disable(1);

};	

var clearAllRainbow = function() {
	rainbowHAT.rainbow.disableAll();
};

