var secretNumber = 4;

var guess = Number(prompt("Guess a Number"));

if(guess > secretNumber) {
	alert("Too high. Try it again!");
} else if (guess < secretNumber) {
	alert("Too low. Try it again!");
} else {
	alert("YOU DID IT!");
}