const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe('Initialization', () => {
    it.todo("check Engineer init");
  });
  describe('getRole', () => {
    it('should return "Engineer"', () => {
      const name = "Fakey Jakey";
      const engineer = new Engineer(name, 2, "fake@email2.com",11);
      const actual = engineer.getRole();
      expect(actual).toBe("Engineer"); 
    });
    describe("getGithub()", () => {
        it("should return 'github.com'",() => {
          const name = "Fakey Jakey";
          const emp = new Employee(name, 3, "fake@email.com",12);
          const actual = getGithub();
          expect(actual).toBe("github.com");
        })
      })  
  });
});