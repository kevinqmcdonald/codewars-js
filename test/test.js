const Kata = require("../app/kata");
const { add } = new Kata();
const expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(add("1", "1")).to.equal("2");
    expect(add("123", "456")).to.equal("579");
    expect(add("888", "222")).to.equal("1110");
    expect(add("1372", "69")).to.equal("1441");
    expect(add("12", "456")).to.equal("468");
    expect(add("101", "100")).to.equal("201");
    expect(add('63829983432984289347293874', '90938498237058927340892374089')).to.equal("91002328220491911630239667963")
  });
});
