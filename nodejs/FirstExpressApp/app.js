var express = require("express");
var app = express();

app.get("/", function(req, resp) {
	resp.send("Hi There!")
});

app.get("/bye", function(req, resp) {
	resp.send("Goodbye!");
});

app.get("/dog", function(req, resp) {
	resp.send("MEOW!");
});

app.get("/r/:subredditName", function(req, resp) {
	var subreddit = req.params.subredditName;
	resp.send("Welcome to the" + subreddit + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, resp) {
	resp.send("Welcome to the comments page");
});

app.get("*", function(req, resp) {
	resp.send("You are a star");
});

app.listen(3000, function() {
	console.log('Server listening on port 3000'); 
});