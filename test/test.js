const PaginationHelper = require("../app/kata");
const expect = require("chai").expect;

describe("Tests", () => {
  it("should pass all tests", () => {
    const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
    expect(helper.pageCount()).to.equal(2);
    expect(helper.itemCount()).to.equal(6);
    expect(helper.pageItemCount(0)).to.equal(4);
    expect(helper.pageItemCount(1)).to.equal(2);
    expect(helper.pageItemCount(2)).to.equal(-1);
    expect(helper.pageIndex(5)).to.equal(1);
    expect(helper.pageIndex(3)).to.equal(0);
    expect(helper.pageIndex(20)).to.equal(-1);
    expect(helper.pageIndex(-1)).to.equal(-1);
  });
});
