const Manager = require("../lib/Manager");

describe("getRole()", () => {
    it("should return a role", () => {
      const role = "Manager";
      const change = new Employee(role);
      const actual = change.getRole();
      expect(actual).toBe(role);
    });

});
