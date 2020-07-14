// Define and export the Engineer class. This class inherit from Employee.
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name,id,email,github) {
     super(name,id,email)
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer'
  }
}

module.exports = Engineer;
