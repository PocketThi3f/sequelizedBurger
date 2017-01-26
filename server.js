// Here is the setup for the main server
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var port = process.env.PORT || 1850;
var app = express();
var db = require("./models");

// Static content for the app 
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({
	extended: false
}));

// Override with POST having a ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Standard documentation to allow sync with Sequelize
db.sequelize.sync().then(function() {
	app.listen(port, function() {
  		console.log("I'm now listening to port: "+ port);
	});
});
