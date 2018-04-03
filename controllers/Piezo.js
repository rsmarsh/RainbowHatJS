var Piezo = require('raspi');
var pwm = require('raspi-pwm');

var piezoBuzzer;

Piezo.init(function () {
	//uses pwm for piezo buzzer
  	piezoBuzzer = new pwm.PWM(23); //23 is wiring pi's definition for the piezo pin
});

//TODO, add a piezo note queue if one is already playing
var startPiezo = function(frequency, length) {
	piezoBuzzer.write(frequency); // 0.5 freq would be 50% Duty Cycle, aka half brightness
	if (length) {
		setTimeout(function() {
			stopNote();
		}, length);
	}
};

var stopPiezo = function() {
	piezoBuzzer.destroy();
};


var playNote = function(frequency, length) {
	if (isNaN(frequency)) {
		console.log("playNote requires a note frequency to operate");
		return;
	}
	startPiezo(frequency, length);
}; 

var stopNote = function() {
	startPiezo(0);
	stopPiezo();
};



module.exports = {
	playNote: playNote,
	stopNote: stopNote

};