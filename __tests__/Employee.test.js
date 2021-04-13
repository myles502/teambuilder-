const Employee = require("../lib/Employee");
describe("Employee", () => {
  // initialization group
  describe("initialization", () => {
    it("should have a name", () => {
      const name = "Javier";
      const id = 1;
      const email = "javier@fake.com";
      const emp = new Employee(name, id, email);
      expect(emp.name).toBe(name);
      expect(emp.id).toBe(id);
      expect(emp.email).toBe(email);
    });
  });
  describe("getName()", () => {
    it("should return the name", () => {
      const name = "Fakey Jakey";
      const emp = new Employee(name, 1, "fake@email.com");
      const actual = emp.getName();
      expect(actual).toBe(name);
    });
  });
  // group for getId()
  // group for getEmail()
  // group for getRole()—returns 'Employee'
});