function validateCreditCard(num) {
	for (i = 0; i < num.length; i++) {
		num = num.replace('-','')
	}
	//console.log(num)

	for (i = 0; i < num.length; i++) {
		if (typeof parseInt(num) == Number) {
			return true
		} 
	}

	if (num.length === 16) {
		return true;
	}
	return false;

	for (i = 0; )
}

console.log(validateCreditCard('9999-9999-8888-0000'))