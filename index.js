const inquirer = require("inquirer");
const db = require("./db");
const dbIndex = require("./db/index");
// const connecting = require("./db/connection");
const table = require("console.table");

function combineTable() {

    db
        .showAll()
        .then((result) => {
            console.log("\nCOMBINE TABLE");
            console.table(result);

            startingPromt();
        })
}

combineTable();

function startingPromt() {
    inquirer
        .prompt(
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
                        "Update Employee Role",
                        "QUIT"
                    ]
            }
        )
        .then((trackerchoises) => {
            switch (trackerchoises.tracker) {
                case "View Department":
                    console.log("\n\nLet's view department table!");
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

                case "Update Employee Role":
                    console.log("\n\nLets Update Employee Roles");
                    update_Employee_Role();
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
    // console.log("Adding a Department");
    inquirer
        .prompt([
            {
                type: "input",
                name: "departmentName",
                message: "what Department do you want to add?"
            }
        ])
        .then((response) => {
            db.addDepartment(response.departmentName);
            startingPromt();
        })
}

function add_Role() {
    console.log("Adding a Role");
    startingPromt();
}

function add_Employee() {
    console.log("Adding a Empployee");
    startingPromt();
}

function update_Employee_Role() {
    startingPromt();
}