// Here are all the functions that will route the app
var express = require("express");
var router = express.Router();
var db = require("../models");

// Change the function names to the standard practice of Sequelize documentation
// First off, using findAll
router.get("/", function(req, res) {

	db.Burger.findAll({}).then(function(data) {

		var hbsObject = { 
			burgers: data 
		};

		console.log(hbsObject);

		res.render("index", hbsObject);
	});
});

// Secondly, create function
router.post("/", function(req, res) {
	
db.Burger.create({
		burger_name: req.body.burger_name,
		devoured: false
	}).then(function(data) {

		var hbsObject = {
			burgers: data
		}

		res.redirect("/");
	});
});

// Update function from sequelize
router.put("/:ID", function(req, res) {

db.Burger.update({ 
		devoured: req.params.devoured 
	}, {
		where: {
			ID: req.params.ID
		}
	}).then(function(data) {
		res.redirect("/");
	});
});

// Lastly, destroy or remove function for IDs
router.delete("/:ID", function(req, res) {

db.Burger.destroy({
	where: {
		ID: req.params.ID
	}
	}).then(function(data) {
		res.redirect("/");
	});
});

module.exports = router;
