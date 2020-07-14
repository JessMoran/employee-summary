const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let teamMembers = [];

function getRole() {
  return inquirer.prompt([
    {
      type: "checkbox",
      message: "What type of team member would you like to add?",
      name: "role",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members",
      ]
    }
  ])
    .then(function (data) {
      if (data.role[0] === "Engineer") {
        promptEngineerQtns();
      } else if (data.role[0] === "Intern") {
        promptInternQtns();
      } else {
        createHTML();
      }
    })
}

function promptManagerQtns() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your manager's id?",
      name: "id"
    },
    {
      type: "input",
      message: "What is your manager's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your manager's office number?",
      name: "officeNumber"
    },
  ]).then((data) => {
    let manager = new Manager (data.name, data.id, data.email, data.officeNumber);
    teamMembers.push(manager);
    getRole()
  })
}

function promptEngineerQtns() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your engineer's id?",
      name: "id"
    },
    {
      type: "input",
      message: "What is your engineer's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your engineer's Github username?",
      name: "github"
    },
  ]).then((data) => {
    let engineer = new Engineer (data.name, data.id, data.email, data.github);
    teamMembers.push(engineer);
    getRole()
  })
}

function promptInternQtns() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your intern's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your intern's id?",
      name: "id"
    },
    {
      type: "input",
      message: "What is your intern's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your intern's school?",
      name: "school"
    },
  ]).then((data) => {
    let intern = new Intern (data.name, data.id, data.email, data.school);
    teamMembers.push(intern);
    getRole()
  })
}

promptManagerQtns();

function createHTML() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
//******  teamMembers in fs.writeFileSync(outPath,render(teamMembers),"utf-8); is the array variable you are pushing team member objects to. IF your array is labeled differently make sure to change it here as well
  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

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
