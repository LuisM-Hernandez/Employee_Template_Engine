const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { prompt } = require("inquirer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function createManager() {

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is your manager's name?",
      },

      {
        type: 'input',
        name: 'managerId',
        message: "What is your manager's id?",
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is your manager's email?",
      },
      {
        type: 'input',
        name: 'managerOffice',
        message: "What is your manager's office number?",
      },
      {
        type: 'list',
        name: 'newEmployee',
        message: "Do you want to add another employee?",
        choices: ['Yes', 'No']
      }
    ])
    .then((answers) => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
      console.log(manager);
      if (answers.newEmployee = 'Yes') {
        addEmployee();
      }

    })
    .catch((error) => {
      if (error.isTtyError) {

      } else {
        console.log("Something else went wrong");
      }
    });
}


function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberRole",
        message: "What is this employee's role?",
        choices: ["Engineer", "Intern"]
      },
      {
        type: 'input',
        name: 'employeeName',
        message: "What is your employee name?",
      },

      {
        type: 'input',
        name: 'employeeId',
        message: "What is your employee id?",
      },
      {
        type: 'input',
        name: 'employeeEmail',
        message: "What is your employee email?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is your engineer's github page?",
      },
      {
        type: 'input',
        name: 'school',
        message: "What is your intern's school?",
      },
      {
        type: 'list',
        name: 'newEmployee',
        message: "Do you want to add a another employee?",
        choices: ['Yes', 'No']
      },
    ])
    .then((answers) => {
      if (answers.memberRole === 'Engineer') {
        const engineer = new Engineer (answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github)
        console.log(engineer);
      }
      if (answers.memberRole === 'Intern') {
        const intern = new Intern (answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school)
        console.log(intern);
      }
      if (answers.newEmployee === 'Yes') {
        return addEmployee();
      }
      else{
        console.log('It is done!');
      }
      

    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
        console.log("Something else went wrong");
      }
    });
}

function renderTeam() {

}
createManager()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
