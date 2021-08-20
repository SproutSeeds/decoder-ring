const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("Should return false if alphabet is not equal to 26 characters or if any character in the alphabet string is not unique", () => {
    const actual = substitution("hi", "abcdef");
    const expected = false;

    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces when encoding.", () => {
    const actual = substitution("hi there", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "dx jd&b&";

    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces when decoding.", () => {
    const actual = substitution(
      "dx jd&b&",
      "$wae&zrdxtfcygvuhbijnokmpl",
      false
    );
    const expected = "hi there";

    expect(actual).to.equal(expected);
  });
  it("message === ykrrpik", () => {
    const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "ykrrpik";

    expect(actual).to.equal(expected);
  });
});
