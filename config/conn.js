const mysql = require("mysql");


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "upkar",
});

db.connect();

module.exports = db;