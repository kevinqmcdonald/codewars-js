var kata = require("../app/kata");
var expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(kata.domainName("http://google.com")).to.equal("google");
    expect(kata.domainName("http://google.co.jp")).to.equal("google");
    expect(kata.domainName("www.xakep.ru")).to.equal("xakep");
    expect(kata.domainName("https://youtube.com")).to.equal("youtube");
    expect(kata.domainName("http://www.zombie-bites.com")).to.equal("zombie-bites");
  });
});
