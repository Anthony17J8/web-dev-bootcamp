const express = require('express');
const app = express();
const port = 3030;


app.get("/", function(req, resp) {
	resp.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, resp) {
	const sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof woof",
		cat: "I hate you human"
	}

	const animal = req.params.animal.toLowerCase();	
	resp.send(`The ${animal} says '${sounds[animal]}'`);
});

app.get("/repeat/:word/:count", function(req, resp) {
	const count = Number.parseInt(req.params.count);
	let result = "";
	for(let i = 0; i < count; i++) {
		result += req.params.word + " ";
	}
	resp.send(result);
});

app.get("*", function(req, resp) {
	resp.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(port, function() {
	console.log("Server has started!");
});