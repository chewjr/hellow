var pi = 22/7
function calcCircumference(radius) {
	var circ = 2 * pi * radius;
	console.log(`The circumference is ${circ}`)
}	

function calcArea(radius) {
	var area = pi * radius ** 2;
	console.log(`The area is ${area}`)
}

calcCircumference(3)
calcArea(2)