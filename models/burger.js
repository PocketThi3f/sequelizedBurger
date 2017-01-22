// Here is the setup for the model to interface with the mySQL database
var orm = require("../config/orm.js");

var burger = {
	// select the table to display all values within the mySQL database
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	insertOne: function(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	// update the mySQL database with user input
	updateOne: function(objColVals, condition, cb) {
		orm.updateOne("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	},
	deleteOne: function(condition, cb) {
		orm.deleteOne("burgers", condition, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;