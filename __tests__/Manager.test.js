const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe('Initialization', () => {
    it.todo("check manager init");
  });
  describe('getRole', () => {
    it('should return "manager"', () => {
      const name = "Homer Simpson";
      const manager = new Manager(name, 1, "fake@email.com",10);
      const actual = manager.getRole();
      expect(actual).toBe("Manager"); 
    });
  });
});