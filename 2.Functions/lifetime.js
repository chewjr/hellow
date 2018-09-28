function calculateSupply(age, amount) {
	var consume = age * 365 * amount;
	console.log(`You will need ${consume} to last you until the ripe old age of ${age}`)
}

calculateSupply(50,100)
calculateSupply(90,35)
calculateSupply(100,79)