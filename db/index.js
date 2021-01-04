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

    getDepartments() {
        return connection.query("SELECT * FROM departments")
    },

    addDepartment(data){
        return connection.query("INSERT INTO departments SET department_name = ?", data);
    },

    getRole() {
        return connection.query("SELECT * FROM roles");
    },

    addRole(data) {
        return connection.query("INSERT INTO roles SET ?", data);
    },

    getEmployee(){
        return connection.query("SELECT * FROM employees");
    },

    addEmployee(){

    },

    updateEmployeeRole() {

    },

    endConnection (){
        return connection.end();
    }
}