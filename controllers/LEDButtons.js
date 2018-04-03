/////////3x Front LEDs///////////////

var GPIO = require('rpi-gpio');

//array to remember which leds are currently lit
var ledStatus = [false, false, false];
var ledsPrepared = false;
var pinsReady = 0;
var pinLookup = {
	//red, green, blue / A, B, C
	led: [31, 35, 37], 
};

//initiate the 3 LED pins
for (var i = 0; i < pinLookup.led.length; i++) {
	GPIO.setup(pinLookup.led[i], GPIO.DIR_OUT, function(error){
		if (typeof error !== 'undefined') {
			console.error(error);
		}

		//until all pins are prepared, increment this
		pinsReady+=1;

		if (pinsReady >= pinLookup.led.length) {
			ledsPrepared = true;
		}

	});
}

//internal function, activates/deactivates an led pin, called by the exposed enable/disable functions
var ledEnable = function(ledNo, setTo) {
	GPIO.write(pinLookup.led[ledNo], setTo);
	ledStatus[ledNo] = setTo;
};


var enable = function(ledNo) {
	if (!ledsPrepared) {
		console.log("leds not yet ready, cancelling");
		return;
	}
	if (ledNo < ledStatus.length && !ledStatus[ledNo]) {
		ledEnable(ledNo, true);
	} else if (!ledStatus[ledNo]) {
		console.log("not lighting LED "+ledNo+" because it is already lit" );
	} else if (ledNo >= ledStatis.length){
		console.error("LED number "+ledNo+" is out of range");
	}
};

//disable an LED, if lit
var disable = function(ledNo) {
	ledEnable(ledNo, false);
};

//toggle an LED to be in the opposite state
var toggle = function(ledNo) {
	if (!ledsPrepared) {
		console.log("leds not yet ready, cancelling");
		return;
	}
	ledEnable(ledNo, !ledStatus[ledNo]);

};

module.exports = {
	enable: enable,
	disable: disable,
	toggle: toggle
}
