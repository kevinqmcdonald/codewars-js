var kata = require("../app/kata");
var expect = require("chai").expect;

function testing(actual, expected) {
  expect(actual).to.equal(expected)
}

describe("Tests", () => {
  it("should pass all tests", () => {
    testing(kata.longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
    testing(kata.longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
    testing(kata.longestConsec([], 3), "")
    testing(kata.longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
    testing(kata.longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
    testing(kata.longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
    testing(kata.longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
    testing(kata.longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
    testing(kata.longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
  });
});
