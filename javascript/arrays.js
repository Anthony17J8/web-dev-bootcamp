// prints out the elements in the array in reverse order
function printReverse(arr) {
	for (var i = arr.length - 1 ; i >= 0; i--) {
		console.log(arr[i]);
	}
}

// check identical element in the array
function isUniform(arr) {
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(first !== arr[i]) {
			return false;
		}
	}
	return true; 
}

// sum of numbers
function sumArray(arr) {
	var result = 0;
	arr.forEach(function(element) {
		result += element;
	});
	return result;
}

// max number in the array
function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}