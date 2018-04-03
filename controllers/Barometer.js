var BMP280 = require('node-bmp280');

var barometer = new BMP280({
		address: 0x77
});

//initiate the barometer and prepare it for reading, or catch any errors
barometer.begin(function(err) {
	if (err) {
		console.log("error occured starting barometer/BMP280:");
		console.log(err);
		return;
	} 

});


//this function enabled different varieties of reads to be called
var readBMP280 = function(callback, readAll, readPressureOnly){
	barometer.readPressureAndTemparature(function(err, pressure, temperature) {
		if (err) {
			console.log("error reading from the BMP280:");
			console.log(err);
			return;
		}

		if (readAll){
			callback({
				pressure: pressure/100,
				temperature: temperature
			});
		} else if (readPressureOnly) {
			callback({
				pressure: pressure/100
			});
		} else {
			callback({
				temperature: temperature
			});
		}

	});
};

var getTemperature = function(callback) {
	readBMP280(callback, false, false);
};

var getPressure = function(callback) {
	readBMP280(callback, false, true);
};

var getTempAndPressure = function(callback) {
	readBMP280(callback, true);
};

module.exports = {
	getTemperature: getTemperature,
	getPressure: getPressure,
	getTempAndPressure: getTempAndPressure
};