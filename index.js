const inquirer = require("inquirer");
const db = require("./db");

function startingPromt() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Pick an option!",
                name: "tracker",
                choices:
                    [
                        "View Department",
                        "View Roles",
                        "View Employee",
                        "Add Department",
                        "Add Roles",
                        "Add Employee",
                        "QUIT"
                    ]
            }
        ]).then((trackerchoises) => {
            switch (trackerchoises.tracker) {
                case "View Department":
                    console.log("Let's view department table!");
                    startingPromt();
                    break;

                case "View Roles":
                    console.log("Lets View Role Table!");
                    startingPromt();
                    break;

                case "View Employee":
                    console.log("Lets View Employee Table!");
                    startingPromt();
                    break;

                case "QUIT":
                    db.endConnection();
                    break;
            }
        })
}

startingPromt();