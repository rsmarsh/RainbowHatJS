//pull in the controlling functions for each sensor, each will be initiated within 
var BarometerController 	= require('./controllers/Barometer.js');
var ButtonLEDController 	= require('./controllers/LEDButtons.js');
var PiezoController 		= require('./controllers/Piezo.js');
var RainbowLEDController 	= require('./controllers/RainbowLED.js');
// var SegmentLCDController 	= require('./controllers/SevenSegmentLCD.js');
//TODO: create touch button controller


//if using raspi-i2c on npm

//to write a bit of data, 
//write(address, register, buffer, cb)

//which for the hat this would be:
//write(0x70, nothingforregister, BUFFER? WHAT THE letter is or individual led is?, a callback)


module.exports = {
 	barometer:	BarometerController,
 	led:		ButtonLEDController,
 	piezo:		PiezoController,
 	rainbow:	RainbowLEDController,
 	// lcd:		SegmentLCDController
};