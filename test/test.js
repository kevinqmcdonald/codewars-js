const Kata = require("../app/kata");
const {
  zero, one, two, three, four, five, six, seven, eight, nine,
  plus, minus, times, dividedBy
} = new Kata();
var expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(seven(times(five()))).to.equal(35);
    expect(four(plus(nine()))).to.equal(13);
    expect(eight(minus(three()))).to.equal(5);
    expect(six(dividedBy(two()))).to.equal(3);
    expect(eight(dividedBy(three()))).to.equal(2);
  });
});
