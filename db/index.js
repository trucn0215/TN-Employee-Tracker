const connection = require("./connection");

module.exports = {
    getDepartments() {
        return connection.query("SELECT * FROM departments")
    },

    getRole() {
        return connection.query("SELECT * FROM roles");
    },

    getEmployee(){
        return connection.query("SELECT * FROM emmployees");
    },

    endConnection (){
        return connection.end();
    }
}