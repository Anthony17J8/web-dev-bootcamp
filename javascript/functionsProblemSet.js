function isEven(num) {
	return num % 2 === 0;  
}

function factorial(num) {
	if (num === 0) {
		return 1;
	}
	return num * factorial(--num);
}


function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}
