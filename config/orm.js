// Here is the O.R.M. where the functions are written to take inputs and conditions
var connection = require("./connection.js");

// function for when vals are placed into the SQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for(var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(ob) {
	// column1=value, column2=value...
	var arr = [];

	for(var key in ob) {
		if(ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
	// use the select method to display all burger contents
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, tableInput, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// vals is an array of values that we want to save into cols
	// cols are the names of columns we want to insert values into
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += ' (';
		queryString += cols.toString();
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += printQuestionMarks(vals.length);
		queryString += ') ';

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// manually update a burger on user input
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	deleteOne: function(table, condition, cb) {
		var queryString = "DELETE FROM " + table;
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;