const Employee = require ('./Employee');

class Manager extends Employee {
    constructor(name,id,email){
        super (name,id,email);
        this.officeNumber = "";
        this.role = "Manager" 
    }
    getRole() {
        return this.role;
      }
}

module.exports = Manager; 