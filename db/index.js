const connection = require("./connection");

module.exports = {
    getDepartments() {
        return connection.query("SELECT * FROM departments")
    },

    getRole() {
        return connection.query("SELECT * FROM roles");
    },

    getEmployee(){
        return connection.query("SELECT * FROM employees");
    },

    addDepartment(){

    },

    addRole() {

    },

    addEmployee(){

    },

    endConnection (){
        return connection.end();
    }
}