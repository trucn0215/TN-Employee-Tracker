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
                    console.log("\n\nLets View Role Table!");
                    view_Role_Table();
                    break;

                case "View Employee":
                    console.log("\n\nLets View Employee Table!");
                    view_Employee_Table();
                    break;

                default:
                    dbIndex.endConnection(); // TODO: This giving error when QUIT
                    // break;
            }
        })
}

function view_Department_Table (){
    db
    .getDepartments()
    .then((result) => {
        console.table(result);
        startingPromt();
    })
}

function view_Role_Table (){
    db
    .getRole()
    .then((result) => {
        console.table(result);
        startingPromt();
    })
}

function view_Employee_Table (){
    db
    .getEmployee()
    .then((result) => {
        console.table(result);
        startingPromt();
    })
}

function add_Department (){

}

function add_Role (){

}

function add_Employee (){
    
}

startingPromt();