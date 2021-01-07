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
    viewRole(){
        return connection.query("SELECT r.id, r.title, r.salary, d.department_name as Department FROM roles r "+  
        "INNER JOIN departments d "+
        "ON r.department_id = d.id;");
    },

    // Get Role Table
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
    removeDepartment(data){
        return connection.query("DELETE FROM departments WHERE id = ?", data);
    },

    // Add Role to Table
    addRole(data) {
        return connection.query("INSERT INTO roles SET ?", data);
    },

    // Remove Role from Table
    removeRole(data){
        return connection.query("DELETE FROM roles WHERE id = ?", data);
    },

    // Add Employee to Table
    addEmployee(data){
        return connection.query("INSERT INTO employees SET ?", data);
    },

    // Remove Employee from Table
    removeEmployee(data){
        return connection.query("DELETE FROM employees WHERE id = ? ", data)
    },

    // Update Employee
    updateEmployee(data) {
        return connection.query("UPDATE employees SET ? WHERE ?", data)
    },

    // Quit the App
    endConnection (){
        return connection.end();
    }
}