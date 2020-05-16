var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
Campground = require("./models/campground"),
seedDB = require("./seeds");


const port = 3030;
mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	Campground.find({}, function(err, allCampgrounds) {
		if(err) {
			console.log(err);
		} else {
			res.render("index", {campgrounds: allCampgrounds});		
		}
	});
});

app.post("/campgrounds", function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var newCampgound = {name: name, image: image, description: description};
	Campground.create(newCampgound, function(err, newlyCreated) {
		if(err) {
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	});

});

app.get("/campgrounds/new", function(req, res) {
	res.render("new");
});

app.get("/campgrounds/:id", function(req, res) {

	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
		if(err) {
			console.log(err);
		} else {
			console.log(foundCampground);
			res.render("show", {campground: foundCampground});
		}
	});

});

app.listen(port, function () {
	console.log("The server has started");
});