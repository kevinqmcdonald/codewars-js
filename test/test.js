var kata = require("../app/kata");
var expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(kata.countSmileys([])).to.equal(0);
    expect(kata.countSmileys([':D',':~)',';~D',':)'])).to.equal(4);
    expect(kata.countSmileys([':)',':(',':D',':O',':;'])).to.equal(2);
    expect(kata.countSmileys([';]', ':[', ';*', ':$', ';-D'])).to.equal(1);
  });
});
