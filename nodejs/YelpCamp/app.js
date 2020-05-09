var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const port = 3030;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
{name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg"},
{name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg"},
{name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587_960_720.jpg"}
];

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var newCampgound = {name: name, image: image};
	campgrounds.push(newCampgound);

	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
	res.render("new");
});

app.listen(port, function () {
	console.log("The server has started");
});