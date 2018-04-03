var RainbowLED = require('hooloovoo');


RainbowLED.setup(7);
RainbowLED.clear(); //the leds seem to light up incorrectly unless cleared prior to use

var enable = function(lightNum, r, g, b) {
	if (lightNum > 6 || lightNum < 0) {
		console.error("attempted to light an invalid LED of: " + lightNum);
		return;
	}

	//default to red if a colour is not provided
	if (isNaN(r)) { //undefined
		r = 255;
	}
	if (isNaN(g)) {
		g = 0;
	}
	if (isNaN(b)) {
		b = 0;
	}
	
	 //(led num, red 0-255, green 0-255, blue 0-255)
	 RainbowLED.set_pixel_RGB(lightNum, r, g, b);
	//  RainbowLED.sendLeds();
};

var disable = function(lightNum) {
	if (lightNum > 6 || lightNum < 0) {
		console.error("attempted to light an invalid LED of: " + lightNum);
		return;
	}

	ledDriver.setLedColor(lightNum,0,0,0,0);
	ledDriver.sendLeds();
};

var enableAll = function() {
	var lightNum;
	for (var i = 0; i < 7; i++) {
		lightNum = i;
		ledDriver.setLedColor(lightNum, 255, 0, 0, 200);
	}
	ledDriver.sendLeds();
};

var disableAll = function() {
	// for (var i = 0; i < 7; i++) {
	// 	ledDriver.setLedColor(i, 0, 0, 0, 0);
	// }
	// ledDriver.sendLeds();
	RainbowLED.clear();
};

module.exports = {
	enableLight: enable,
	disableLight: disable,
	enableAll: enableAll,
	disableAll: disableAll
};