const removeZeros = require("../app/kata");
const expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    const input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14],
      solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];

    expect(removeZeros(input)).to.eql(solution);
  });
  it("should ignore non-integer values in the array", () => {
    const input = [1, null, "0", "5", "2", 8, 0, 6, null, false],
      solution = [1, null, "5", "2", 8, 6, null, false, "0", 0];
  });
});
