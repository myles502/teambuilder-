const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor(name,id,email){
        super (name,id,email);
        this.officeNumber = "";
        this.github = "";
        this.role = "Engineer" 
    }
    getRole() {
        return this.role;
      }
    getGithub() {
        return "github.com";
    }
}

module.exports = Engineer; 