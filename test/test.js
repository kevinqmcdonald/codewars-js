const factorial = require("../app/kata");
const expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(factorial(1)).to.equal('1');
    expect(factorial(5)).to.equal('120');
    expect(factorial(9)).to.equal('362880');
    expect(factorial(15)).to.equal('1307674368000');
    expect(factorial(25)).to.equal('15511210043330985984000000')
  });
});
