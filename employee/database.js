var mysql = require('mysql');

var connection = mysql.createConnection({
    host :"localhost",
    database:"employee",
    user:"root",
    password:"sivakumar12345"
});

connection.connect();
module.exports = connection;