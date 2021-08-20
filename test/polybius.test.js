const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("Should output numbers when encoding.", () => {
    const actual = polybius("AAA");
    const expected = "111111";

    expect(actual).to.equal(expected);
  });
  it("The input should be even when decoding, otherwise return false.", () => {
    const actual = polybius("111 11", false);
    const expected = false;

    expect(actual).to.equal(expected);
  });
  it("Should keep track of spaces when encoding.", () => {
    const actual = polybius("AA AA");
    const expected = "1111 1111";

    expect(actual).to.equal(expected);
  });
  it("Should keep track of spaces when decoding", () => {
    const actual = polybius("2111 2111", false);
    const expected = "ba ba";

    expect(actual).to.equal(expected);
  });
  it("Should return i/j correctly.", () => {
    const actual = polybius("3242 42115251", false);
    const expected = "h(i/j) (i/j)ake";

    expect(actual).to.equal(expected);
  });
  it("Should return z correctly.", () => {
    const actual = polybius("55 55", false);
    const expected = "z z";

    expect(actual).to.equal(expected);
  });

  it("message === 23513434112251", () => {
    const actual = polybius("message");
    const expected = "23513434112251";

    expect(actual).to.equal(expected);
  });
});
