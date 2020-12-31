USE employeeDB;

INSERT INTO departments (department_name)
VALUES 
	("Engineer"),
	("Accounting"),
	("Production");

INSERT INTO roles (title, salary, department_id)
VALUES 
	("Electrical", 80000, 1),
	("Accountant", 50000, 2),
    ("Assistant", 40000, 2),
	("Assembler", 40000, 3),
    ("Soldering", 45000, 3);

INSERT INTO employees (first_name, last_name, role_id, department_id)
VALUES 
	("Truc", " Nguyen", 1, 1),
    ("Eric", "Nguyen", 2, 2),
    ("Mike", "Nguyen", 3, 2),
    ("John", "Nguyen", 4, 3),
    ("Thomas", "Nguyen", 5, 3),
    ("Ken", "Nguyen", 5, 3);

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;