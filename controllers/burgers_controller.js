// Here are all the functions that will route the app
var express = require("express");
var router = express.Router();
var db = require("../models");

// Change the function names to the standard practice of Sequelize documentation
// First off, using findAll
router.get("/", function(req, res) {
	db.burger.findAll(function(data) {
		var hbsObject = { 
			burgers: data 
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

// Secondly, create function
router.post("/", function(req, res) {
	
db.burger.create([
		"burger_name"
	], [
		req.body.burger_name
	], function() {
		res.redirect("/");
	});
});

// Update function from sequelize
router.put("/:ID", function(req, res) {

db.burger.update({ 
		devoured: req.body.devoured 
	}, condition, function() {
		res.redirect("/");
	});
});

// Lastly, destroy or remove function
router.delete("/:ID", function(req, res) {

db.burger.destroy({
	where: {
		req.body.ID
	}
	}).then(function(err, results) {
		

module.exports = router;
