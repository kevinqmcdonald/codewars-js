var kata = require("../app/kata");
var expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(kata.angrams("abba", ["aabb", "abcd", "bbaa", "dada"])).to.have.members(["aabb", "bbaa"]);
    expect(kata.angrams("racer", ["crazer", "carer", "racar", "caers", "racer"])).to.have.members(["carer", "racer"]);
    expect(kata.angrams("laser", ["lazing", "lazy", "lacer"])).to.be.empty;
  });
});
