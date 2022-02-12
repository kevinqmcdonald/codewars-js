const multiply = require("../app/kata");
const expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(multiply("2", "3")).to.equal("6");
    expect(multiply("30", "69")).to.equal("2070");
    expect(multiply("11", "85")).to.equal("935");

    expect(multiply("2" ,"0")).to.equal("0");
    expect(multiply("0", "30")).to.equal("0");
    expect(multiply("0000001", "3")).to.equal("3");
    expect(multiply("1009", "03")).to.equal("3027");

    expect(multiply("98765", "56894")).to.equal("5619135910");
    expect(multiply("1020303004875647366210", "2774537626200857473632627613")).to.equal("2830869077153280552556547081187254342445169156730");
    expect(multiply("58608473622772837728372827", "7586374672263726736374")).to.equal("444625839871840560024489175424316205566214109298");
    expect(multiply("9007199254740991", "9007199254740991")).to.equal("81129638414606663681390495662081");

  });
});
