const mysql = require("mysql");
// const inquirer = require("inquirer");
const util = require("util");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "password",
    database: "employee"
});

connection.connect((err) => {

    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports.connection;