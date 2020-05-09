var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

const port = 3030;

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	Campground.find({}, function(err, allCampgrounds) {
		if(err) {
			console.log(err);
		} else {
			res.render("campgrounds", {campgrounds: allCampgrounds});		
		}
	});
});

app.post("/campgrounds", function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var newCampgound = {name: name, image: image};
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

app.listen(port, function () {
	console.log("The server has started");
});