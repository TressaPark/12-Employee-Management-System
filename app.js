const path = require('path');
const fs = require('fs');
let mysql = require('mysql');
let inquirer = require("inquirer");
//const chalk = require('chalk');

// Connection for SQL database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'root1234',
    database: 'employee_db'
});

// module.exports = connection;

connection.connect(function (err) {
    if (err) throw err;

    console.log(`connected as id ${connection.threadId}`);

    // const Queries = require('./tools/queries');
    // const queries = new Queries(connection);

    // connection.query = util.promisify(connection.query);

    // const actions = require('./tools/actions');
    // actions.main(queries);
});

function viewEmployee() {
    console.log("Selecting all employees...\n");
    connection.query("SELECT * FROM employees", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);

    });
  }

  viewEmployee();