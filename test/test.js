const Kata = require("../app/kata");
const { towerBuilder } = new Kata();
const expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(towerBuilder(1)).to.eql(["*"]);
    expect(towerBuilder(2)).to.eql([" * ","***"]);
    expect(towerBuilder(3)).to.eql(["  *  "," *** ","*****"]);
  });
});
