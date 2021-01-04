const inquirer = require("inquirer");
const db = require("./db");
const dbIndex = require("./db/index");
// const connecting = require("./db/connection");
const table = require("console.table");

// SHOW COMBINED DATA
function combineTable() {

    db
        .showAll()
        .then((result) => {
            console.log("\nCOMBINE TABLE");
            console.table(result);

            startingPromt();
        })
}

combineTable(); // Call Back the function

// Starting with the choises TO DO
function startingPromt() {
    inquirer
        .prompt(
            {
                type: "list",
                message: "Pick an option!",
                name: "choisesOption",
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
            switch (trackerchoises.choisesOption) {
                case "View Department":
                    console.log("\n\n---LET'S VIEW DEPARTMENT TABLE!---\n\n");
                    view_Department_Table();
                    break;

                case "View Roles":
                    console.log("\n\n---LET'S VIEW ROLE TABLE!---\n\n");
                    view_Role_Table();
                    break;

                case "View Employee":
                    console.log("\n\n---LET'S VIEW EMPLOYEE TABLE!---\n\n");
                    view_Employee_Table();
                    break;

                case "Add Department":
                    console.log("\n\n---ADD YOUR NEW DEPARTMENT!---\n\n");
                    add_Department();
                    break;

                case "Add Roles":
                    console.log("\n\n---ADD YOUR NEW ROLE!---\n\n");
                    add_Role();
                    break;

                case "Add Employee":
                    console.log("\n\n---ADD YOUR NEW EMPLOYEE!---\n\n");
                    add_Employee();
                    break;

                case "Update Employee Role":
                    console.log("\n\n---UPDATE YOUR EMPLOYEE ROLE!---\n\n");
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

            console.log("-----------------------------------------");
            startingPromt();
        })
}

function view_Role_Table() {
    db
        .getRole()
        .then((result) => {
            console.table(result);

            console.log("-----------------------------------------");
            startingPromt();
        })
}

function view_Employee_Table() {
    db
        .getEmployee()
        .then((result) => {
            console.table(result);

            console.log("-----------------------------------------");
            startingPromt();
        })
}

function add_Department() {
    // console.log("Adding a Department");
    inquirer
        .prompt(
            {
                type: "input",
                name: "departmentName",
                message: "what Department do you want to add?"
            }
        )
        .then((response) => {
            db.addDepartment(response.departmentName);

            console.log("-----------------------------------------");
            startingPromt();
        })
}

function add_Role() {
    // console.log("Adding a Role");
    db
        .getDepartments()
        .then((departmentData) => {
            const departmentList = departmentData.map((getData) => ({
                value: getData.id,
                name: getData.department_name
            }))

            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "departmentChoices_id",
                        message: "Choose a DEPARTMENT to Add role!",
                        choices: departmentList
                    },
                    {
                        type: "input",
                        name: "roleTitle",
                        message: "What is role TITLE?"
                    },
                    {
                        type: "input",
                        name: "roleSalary",
                        message: "What is SALARY of this role?"
                    }
                ])
                .then((response) => {
                    // console.log("Department Choise: " + response.departmentChoices_id);
                    // console.log("Role Title: " + response.roleTitle);
                    // console.log("Role Salary: " + response.roleSalary);
                    const newRole = {
                        title: response.roleTitle,
                        salary: response.roleSalary,
                        department_id: response.departmentChoices_id
                    }

                    db.addRole(newRole);

                    console.log("-----------------------------------------");
                    startingPromt();
                })
        })
}

// TODO: Stil trying to figure out how to add employee without Manager and Department_ID
function add_Employee() {
    // console.log("Adding a Empployee");

    // Select Department THEN list the roles in that departments
    db
        .getDepartments()
        .then((departmentData) => {
            const departmentList = departmentData.map((getdata) => ({
                value: getData.id,
                name: getData.department_name
            }))

            inquirer
                .prompt(
                    {
                        type: "list",
                        name: "departmentChoices_id",
                        message: "Choose a DEPARTMENT to Add role!",
                        choices: departmentList
                    })
                .then((response) => {

                    // const 

                    db
                        .getRole()
                        .then((roleData) => {
                            const roleList = roleData.map((getData) => ({
                                value: getData.id,
                                name: getData.title
                            }))

                            inquirer
                                .prompt([
                                    {
                                        type: "list",
                                        name: "roleChoices_id",
                                        message: "Choose a ROLE of employee!",
                                        choices: roleList
                                    },
                                    {
                                        type: "input",
                                        name: "employeeFirstName",
                                        message: "What is employee First Name?"
                                    },
                                    {
                                        type: "input",
                                        name: "employeeLastName",
                                        message: "What is employee Last Name?"
                                    }
                                ])
                                .then((response) => {
                                    // console.log("Department Choise: " + response.departmentChoices_id);
                                    // console.log("Role Title: " + response.roleTitle);
                                    // console.log("Role Salary: " + response.roleSalary);
                                    const newEmployee = {
                                        first_name: response.employeeFirstName,
                                        last_name: response.employeeLastName,
                                        role_id: response.roleChoices_id
                                    }

                                    db.addEmployee(newEmployee);

                                    console.log("-----------------------------------------");
                                    startingPromt();
                                })
                        })
                })

        })
}

function update_Employee_Role() {
    // startingPromt();
}