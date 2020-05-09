var express = require("express");
var app = express();
const port = 3030;

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg"},
		{name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg"},
		{name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587_960_720.jpg"}
	];

	res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(port, function () {
	console.log("The server has started");
});