const hamming = require("../app/kata");
const expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(hamming(1)).to.equal(1);
    expect(hamming(2)).to.equal(2);
    expect(hamming(3)).to.equal(3);
    expect(hamming(4)).to.equal(4);
    expect(hamming(5)).to.equal(5);
    expect(hamming(6)).to.equal(6);
    expect(hamming(7)).to.equal(8);
    expect(hamming(8)).to.equal(9);
    expect(hamming(9)).to.equal(10);
    expect(hamming(10)).to.equal(12);
    expect(hamming(11)).to.equal(15);
    expect(hamming(12)).to.equal(16);
    expect(hamming(13)).to.equal(18);
    expect(hamming(14)).to.equal(20);
    expect(hamming(15)).to.equal(24);
    expect(hamming(16)).to.equal(25);
    expect(hamming(17)).to.equal(27);
    expect(hamming(18)).to.equal(30);
    expect(hamming(19)).to.equal(32);
  });
});
