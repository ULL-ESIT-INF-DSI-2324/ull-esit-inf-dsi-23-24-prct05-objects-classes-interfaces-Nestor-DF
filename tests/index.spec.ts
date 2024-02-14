import "mocha";
import { expect } from "chai";
import { contieneSoloPrimos } from "../src/index";

describe("contieneSoloPrimos", () => {
  it("should return true when the array contains only prime numbers", () => {
    const array = [2, 3, 5, 7, 11];
    const result = contieneSoloPrimos(array);
    expect(result).to.be.true;
  });

  it("should return false when the array contains non-prime numbers", () => {
    const array = [2, 3, 4, 5, 6];
    const result = contieneSoloPrimos(array);
    expect(result).to.be.false;
  });

});
