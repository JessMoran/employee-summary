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

function promptUserInfo() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your Github username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "address"
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "title"
    },
    {
      type: "input",
      message: "Please! Write a description of your project",
      name: "description"
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "usages"
    },
    {
      type: "input",
      message: "Please, write your file's demo name",
      name: "demo"
    },
    {
      type: "input",
      message: "How to run?",
      name: "run"
    },
    {
      type: "checkbox",
      message: "What kind of licence should your project have?",
      name: "license",
      choices: [
        "MIT",
        "APACHE 2.0",
        "GPL 3.0",
        "Boost Software License 1.0",
        "Mozilla Public License 2.0",
      ]
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "dependencies"
    },
    {
      type: "input",
      message: "What command should be run to run test?",
      name: "test"
    },
  ]);
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
