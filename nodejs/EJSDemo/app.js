const express = require('express');
const app = express();
const port = 3030;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
	var thing = req.params.thing;
	res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "Post 2", author: "Fedor"},
		{title: "Post 3", author: "Tom"}
	];
	
	res.render("posts", {posts: posts});
});


app.listen(port, function(){
	console.log("Server is listening");
});