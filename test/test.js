var kata = require("../app/kata");
var expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(kata.addBinary(1, 1)).to.equal("10");
    expect(kata.addBinary(1, 2)).to.equal("11");
    expect(kata.addBinary(5, 9)).to.equal("1110");
    expect(kata.addBinary(123, 456)).to.equal("1001000011");
  });
});
