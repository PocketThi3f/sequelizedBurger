// Here is the setup for the main server
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var app = express();


// Static content for the app 
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({
	extended: false
}));

// Override with POST having a ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

var port = process.env.PORT || 1850;
app.listen(port, function() {
  console.log("I'm now listening to port: "+ port);
});
