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

// Starting with the choises
function startingPromt() {
    inquirer
        .prompt(
            {
                type: "list",
                message: "Pick an option!",
                name: "choisesOption",
                choices:
                    [
                        "1. View Department",
                        "2. View Roles",
                        "3. View Employees",
                        "4. Add Department",
                        "5. Delete Department",
                        "6. Add Role",
                        "7. Delete Role",
                        "8. Add Employee",
                        "9. Delete Employee",
                        "10. Update Employee",
                        "11. QUIT"
                    ]
            }
        )
        .then((trackerchoises) => {
            switch (trackerchoises.choisesOption) {
                case "1. View Department":
                    console.log("\n\n---LET'S VIEW DEPARTMENT TABLE!---\n\n");
                    view_Department_Table();
                    break;

                case "2. View Roles":
                    console.log("\n\n---LET'S VIEW ROLE TABLE!---\n\n");
                    view_Role_Table();
                    break;

                case "3. View Employee":
                    console.log("\n\n---LET'S VIEW EMPLOYEE TABLE!---\n\n");
                    view_Employee_Table();
                    break;

                case "4. Add Department":
                    console.log("\n\n---ADD A DEPARTMENT!---\n\n");
                    add_Department();
                    break;

                case "5. Delete Department":
                    console.log("\n\n---DELETE DEPARTMENT!---\n\n");
                    remove_department();
                    break;

                case "6. Add Roles":
                    console.log("\n\n---ADD NEW ROLE!---\n\n");
                    add_Role();
                    break;

                case "7. Delete Role":
                    console.log("\n\n---DELETE ROLE!---\n\n");
                    remove_Role();
                    break;

                case "8. Add Employee":
                    console.log("\n\n---ADD NEW EMPLOYEE!---\n\n");
                    add_Employee();
                    break;

                case "9. Delete Employee":
                    console.log("\n\n---DELETE EMPLOYEE!---\n\n");
                    remove_Employee();
                    break;

                case "10. Update Employee":
                    console.log("\n\n---UPDATE EMPLOYEE!---\n\n");
                    update_Employee();
                    break;

                default:
                    dbIndex.endConnection();
                // break;
            }
        })
}

// 1. VIEW DEPARTMENT TABLE FUNCTION
function view_Department_Table() {
    db
        .getDepartments()
        .then((result) => {
            console.table(result);

            console.log("-----------------------------------------");
            startingPromt();
        })
}

// 2. VIEW ROLE TABLE FUNCTION
function view_Role_Table() {
    db
        .getRole()
        .then((result) => {
            console.table(result);

            console.log("-----------------------------------------");
            startingPromt();
        })
}

// 3. VIEW EMPLOYEE TABLE FUNCTION
function view_Employee_Table() {
    db
        .getEmployee()
        .then((result) => {
            console.table(result);

            console.log("-----------------------------------------");
            startingPromt();
        })
}

// 4. ADDING DEPARTMENT FUNCTION
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

// 5. REMOVE DEPARTMENT
function remove_department(){

}

// 6. ADDING ROLE FUNCTION
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

// 7. REMOVE ROLE
function remove_Role(){

}

// 8. ADDING EMPLOYEE FUNCTION
function add_Employee() {

    db
        .getDepartments()
        .then((departmentData) => {
            const departmentList = departmentData.map((getData) => ({
                value: getData.id,
                name: getData.department_name
            }))

            inquirer
                .prompt(
                    {
                        type: "list",
                        name: "departmentChoices_id",
                        message: "Choose a DEPARTMENT to Add Employee!",
                        choices: departmentList
                    })
                .then((response) => {

                    const departmentDataPick = response.departmentChoices_id;

                    db
                        .getRole(departmentDataPick)
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
                                        role_id: response.roleChoices_id,
                                        department_id: departmentDataPick
                                    }

                                    db.addEmployee(newEmployee);

                                    console.log("-----------------------------------------");
                                    startingPromt();
                                })
                        })
                })
        })
}

// 9. REMOVE EMPLOYEE
function remove_Employee(){

}

// 10. Update Employee
function update_Employee() {
    // startingPromt();
}