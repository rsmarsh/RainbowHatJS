var RainbowLED = require('apa102-spi');

//if this doesn't work, look at https://github.com/jonnypage-d3/hooloovoo

var ledDriver = new RainbowLED(6, 100);
// ledDriver.setClearOnExit();

var enable = function(lightNum) {
	if (lightNum > 6 || lightNum < 0) {
		console.error("attempted to light an invalid LED of: " + lightNum);
		return;
	}
	 //(led num, brightness 0-31, red 0-255, green 0-255, blue 0-255)
	ledDriver.setLedColor(lightNum,5,0,255,0);
	ledDriver.sendLeds();
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
	for (var i = 0; i < 7; i++) {
		ledDriver.setLedColor(i, 255, 0, 0, 200);
	}
	ledDriver.sendLeds();
};

var disableAll = function() {
	for (var i = 0; i < 7; i++) {
		ledDriver.setLedColor(i, 0, 0, 0, 0);
	}
	ledDriver.sendLeds();
};

module.exports = {
	enableLight: enable,
	disableLight: disable,
	enableAll: enableAll,
	disableAll: disableAll
};