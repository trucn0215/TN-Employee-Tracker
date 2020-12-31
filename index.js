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
                    console.log("Let's view department table!");
                    // startingPromt();
                    viewDepartmentTable();
                    break;

                case "View Roles":
                    console.log("Lets View Role Table!");
                    startingPromt();
                    break;

                case "View Employee":
                    console.log("Lets View Employee Table!");
                    startingPromt();
                    break;

                default:
                    dbIndex.endConnection(); // TODO: This giving error when QUIT
                    // break;
            }
        })
}

function viewDepartmentTable (){
    db
    .getDepartments()
    .then((result) => {
        console.table(result);
        startingPromt();
    })
}

startingPromt();