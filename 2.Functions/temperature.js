function celsiusToFarenheit(temp) {
	var faren = temp * 9/5 + 32;
	console.log(`${temp}°C is ${faren}°F`)
}

function fahrenheitToCelcius(temp) {
	var celc = (temp - 32) / 9/5;
	console.log(`${temp}°F is ${celc}°C.`)
}

celsiusToFarenheit(37)
fahrenheitToCelcius(100)