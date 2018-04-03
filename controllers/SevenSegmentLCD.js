// var SevenSegment = require('@thingssdk/ht16k33-sevensegment-display');
	
//TODO replace with the following:
var SevenSegment = require('@thingssdk/ht16k33/espruino');

var segmentDisplay = new SevenSegment(0x70, 1);

//TODO:
//	Scroll message when message is longer than 4 chars
//	Flash Message function
//	Custom Message Lengths

var write = function(){
	console.log("about to write");
	//writeDigit args are, first number is 0 - 3 which char number to write to. 2nd is 

	segmentDisplay.writeDigit(0, 0);
	// sevenSegment.writeDigit(0, 'A');
	console.log("written");
};

var clear = function() {
		segmentDisplay.clear();
};

//TODO
var scrollMesssage = function() {

};

module.exports = {
	show: write,
	clear: clear,
	scroll: scroll
}