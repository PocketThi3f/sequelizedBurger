/*Here is where the user is going to make the connection to the mySQL database
and the export made by the ORM */
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_ROSE_URL) {
  connection = mysql.createPool(process.env.JAWSDB_ROSE_URL);
  console.log("I am Jaws");
} else {
  connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
  //console.log("the issue");
}

module.exports = connection;
