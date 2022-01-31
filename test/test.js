const topThreeWords = require("../app/kata");
const expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    expect(topThreeWords("a a a  b  c c  d d d d  e e e e e")).to.eql(['e','d','a'])
    expect(topThreeWords("a a c b b")).to.eql(['a','b','c'])
    expect(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")).to.eql(['e','ddd','aa'])
    expect(topThreeWords("  //wont won't won't ")).to.eql(["won't", "wont"])
    expect(topThreeWords("  , e   .. ")).to.eql(["e"])
    expect(topThreeWords("  ...  ")).to.eql([])
    expect(topThreeWords("  '  ")).to.eql([])
    expect(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
      mind, there lived not long since one of those gentlemen that keep a lance
      in the lance-rack, an old buckler, a lean hack, and a greyhound for
      coursing. An olla of rather more beef than mutton, a salad on most
      nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
      on Sundays, made away with three-quarters of his income.`)).to.eql(['a','of','on'])
  });
});
