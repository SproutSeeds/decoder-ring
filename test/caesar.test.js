const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesarMod", () => {
  it("Should return false if shift value is equal to 0.", () => {
    let actual = caesar("test1", 0);
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("Should return false if shift is less than -25.", () => {
    let actual = caesar("test1", -26);
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("Should return false if shift is greater than 25.", () => {
    let actual = caesar("test1", 26);
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("Capital letters are ignored and turned into lowercase & handles positive SHIFT values", () => {
    let actual = caesar("AAA", 1);
    let expected = "bbb";
    expect(actual).to.equal(expected);
  });
  it("Should handle negative numbers for the SHIFT value.", () => {
    let actual = caesar("AAA", -1);
    let expected = "zzz";
    expect(actual).to.equal(expected);
  });
  it("Handles a mix of letters.", () => {
    let actual = caesar("thinkful", 3);
    let expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it("Maintains spaces throughout.", () => {
    let actual = caesar("thinkful A B C", 3);
    let expected = "wklqnixo d e f";
    expect(actual).to.equal(expected);
  });
  it("Should properly decode a message when encode is set to false", () => {
    let actual = caesar("ifmmp", 1, false);
    let expected = "hello";
    expect(actual).to.equal(expected);
  });
  it("Zebra Magazine === cheud pdjdclqh", () => {
    let actual = caesar("Zebra Magazine", 3);
    let expected = "cheud pdjdclqh";
    expect(actual).to.equal(expected);
  });
});
