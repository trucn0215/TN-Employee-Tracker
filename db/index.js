const connection = require("./connection");

module.exports = {
    showAll(){
        return connection.query(
            `SELECT 
                d.id as Department_ID, 
                d.department_name, 
                r.title, 
                r.salary, 
                CONCAT(e.first_name, " ", e.last_name) as Name, 
                e.role_id 
            FROM employees e 
            INNER JOIN roles r ON e.role_id = r.id 
            LEFT JOIN departments d ON e.department_id = d.id 
            GROUP BY e.id 
            ORDER BY e.id;`)
    },

    // View Department Table
    getDepartments() {
        return connection.query("SELECT * FROM departments")
    },

    // View Roles Table
    getRole(data) {
        return connection.query("SELECT * FROM roles WHERE department_id = ?", data);
    },

    // View Employee Table
    getEmployee(){
        return connection.query("SELECT * FROM employees");
    },

    // Add Department to Table
    addDepartment(data){
        return connection.query("INSERT INTO departments SET department_name = ?", data);
    },

    // Remove Department
    removeDepartment(){
        return connection.query("REMOVE");
    },

    // Add Role to Table
    addRole(data) {
        return connection.query("INSERT INTO roles SET ?", data);
    },

    // Remove Role from Table
    removeRole(){

    },

    // Add Employee to Table
    addEmployee(data){
        return connection.query("INSERT INTO employees SET ?", data);
    },

    // Remove Employee from Table
    removeEmployee(){

    },

    // Update Employee
    updateEmployee() {

    },

    // Quit the App
    endConnection (){
        return connection.end();
    }
}