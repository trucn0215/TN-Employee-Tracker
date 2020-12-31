DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;
USE employeeDB;

CREATE TABLE departments (
	id INT AUTO_INCREMENT,
	department_name VARCHAR(30),
	PRIMARY KEY (id)
);

CREATE TABLE roles (
	id INT AUTO_INCREMENT,
	title VARCHAR(30),
    salary DECIMAL(9,2) ,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES departments (id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES departments (id),
    FOREIGN KEY (role_id) REFERENCES roles (id)
);
