const inquirer = require("inquirer");
const db = require("./db");
const dbIndex = require("./db/index");
const connecting = require("./db/connection");
const table = require("console.table");

function startingPromt() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Pick an option!",
                name: "tracker",
                choices:
                    [
                        "View Department",
                        "View Roles",
                        "View Employee",
                        "Add Department",
                        "Add Roles",
                        "Add Employee",
                        "QUIT"
                    ]
            }
        ]).then((trackerchoises) => {
            switch (trackerchoises.tracker) {
                case "View Department":
                    console.log("\n\nLet's view department table!");
                    // startingPromt();
                    view_Department_Table();
                    break;

                case "View Roles":
                    console.log("\n\n Lets View Role Table!");
                    view_Role_Table();
                    break;

                case "View Employee":
                    console.log("\n\n Lets View Employee Table!");
                    view_Employee_Table();
                    break;

                case "Add Department":
                    console.log("\n\n Lets Add a Department to Table!");
                    add_Department();
                    break;

                case "Add Roles":
                    console.log("\n\n Lets Add a Role to Table!");
                    add_Role();
                    break;

                case "Add Employee":
                    console.log("\n\n Lets Add a Employee to Table!");
                    add_Employee();
                    break;

                default:
                    dbIndex.endConnection();
                // break;
            }
        })
}

function view_Department_Table() {
    db
        .getDepartments()
        .then((result) => {
            console.table(result);
            startingPromt();
        })
}

function view_Role_Table() {
    db
        .getRole()
        .then((result) => {
            console.table(result);
            startingPromt();
        })
}

function view_Employee_Table() {
    db
        .getEmployee()
        .then((result) => {
            console.table(result);
            startingPromt();
        })
}

function add_Department() {
    console.log("Adding a Department");
    startingPromt();
}

function add_Role() {
    console.log("Adding a Role");
    startingPromt();
}

function add_Employee() {
    console.log("Adding a Empployee");
    startingPromt();
}

startingPromt();