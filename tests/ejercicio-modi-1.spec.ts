import "mocha";
import { expect } from "chai";
import { getAllergens } from "../src/ejercicio-modi-1";

describe("getAlergens", () => {
  it("should return the correct alergens", () => {
    const result = getAllergens(144);
    expect(result).to.deep.equal(["Tomate", "Gato"]);
  });

  it("should return the correct alergens", () => {
    const result = getAllergens(8);
    expect(result).to.deep.equal(["Fresa"]);
  });

  it("should return the correct alergens", () => {
    const result = getAllergens(7);
    expect(result).to.deep.equal(["Huevo", "Cacahuete", "Marisco"]);
  });

  it("should return [] when called with 256", () => {
    const result = getAllergens(256);
    expect(result).to.deep.equal([]);
  });

  it("should return [] when called with 1024", () => {
    const result = getAllergens(1024);
    expect(result).to.deep.equal([]);
  });

  it("should return undefined when called with -14", () => {
    const result = getAllergens(-14);
    expect(result).to.be.undefined;
  });

  it("should return undefined when called with -213", () => {
    const result = getAllergens(-213);
    expect(result).to.be.undefined;
  });
});