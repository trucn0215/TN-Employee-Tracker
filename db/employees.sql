CREATE DATABASE employeeDB;
USE employeeDB;
CREATE TABLE departments (
    id INT AUTO_INCREMENT;
    name VARCHAR(30);
    PRIMARY KEY (id);
);
CREATE TABLE roles (
    department_id INT AUTO_INCREMENT;
    title VARCHAR(30);
    salary DECIMAL;
    PRIMARY KEY (department_id);
);

CREATE TABLE employees (
    manager_id INT AUTO_INCREMENT;
    first_name VARCHAR(30);
    last_name VARCHAR(30);
    role_id INT;
    PRIMARY KEY (manager_id);
);