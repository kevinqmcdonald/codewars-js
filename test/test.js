const Kata = require("../app/kata");
const { countBits } = new Kata();
const expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(countBits(0)).to.equal(0);
    expect(countBits(4)).to.equal(1);
    expect(countBits(7)).to.equal(3);
    expect(countBits(9)).to.equal(2);
    expect(countBits(10)).to.equal(2);
  });
});
