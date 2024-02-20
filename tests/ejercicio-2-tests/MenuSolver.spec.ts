import "mocha";
import { expect } from "chai";
import { MenuSolver } from "../../src/ejercicio-2/MenuSolver";
import { FirstHeuristic, SecondHeuristic, ThirdHeuristic } from "../../src/ejercicio-2/Heuristics";
import { Menu } from "../../src/ejercicio-2/Menu";
import { Dish } from "../../src/ejercicio-2/Dish";

const h1 = new FirstHeuristic();
const h2 = new SecondHeuristic();
const h3 = new ThirdHeuristic();

let menuSolver: MenuSolver;
let menu1: Menu;
let menu2: Menu;

beforeEach(() => {
  menuSolver = new MenuSolver(h1);
  const dish1 = new Dish("10-5", 10, 5);
  const dish2 = new Dish("8-3", 8, 3);
  const dish3 = new Dish("12-6", 12, 6);
  const dish4 = new Dish("6-2", 6, 2);
  const dish5 = new Dish("9-4", 9, 4);
  menu1 = new Menu([dish1, dish2, dish3, dish4, dish5]);

  const dish6 = new Dish("15-7", 15, 7);
  const dish7 = new Dish("11-4", 11, 4);
  const dish8 = new Dish("13-8", 13, 8);
  const dish9 = new Dish("7-3", 7, 3);
  const dish10 = new Dish("10-6", 10, 6);
  menu2 = new Menu([dish6, dish7, dish8, dish9, dish10]);
});

describe("MenuSolver", () => {
  describe("h1", () => {
    beforeEach(() => {
      // Set the heuristic to h1 before each test in this describe block
      menuSolver.setHeuristic(h1);
    });

    it("menu1", () => {
      const maxUnhealthyScore = 10;
      const expected = [
        "12-6", // Nutritional value: 12, Unhealthy score: 6
      ];
      const result = menuSolver.calculateMenu(menu1, maxUnhealthyScore);
      expect(result).to.deep.equal(expected);
    });

    it("menu2", () => {
      const maxUnhealthyScore = 10;
      const expected = [
        "15-7", // Nutritional value: 15, Unhealthy score: 7
      ];
      const result = menuSolver.calculateMenu(menu2, maxUnhealthyScore);
      expect(result).to.deep.equal(expected);
    });
  });

  describe("h2", () => {
    beforeEach(() => {
      // Set the heuristic to h2 before each test in this describe block
      menuSolver.setHeuristic(h2);
    });

    it("menu1", () => {
      const maxUnhealthyScore = 10;
      const expected = [
        "6-2", // Nutritional value: 6, Unhealthy score: 2
        "8-3", // Nutritional value: 8, Unhealthy score: 3
        "9-4", // Nutritional value: 9, Unhealthy score: 4
      ];
      const result = menuSolver.calculateMenu(menu1, maxUnhealthyScore);
      expect(result).to.deep.equal(expected);
    });

    it("menu2", () => {
      const maxUnhealthyScore = 10;
      const expected = ["7-3", "11-4"];
      const result = menuSolver.calculateMenu(menu2, maxUnhealthyScore);
      expect(result).to.deep.equal(expected);
    });
  });

  describe("h3", () => {
    beforeEach(() => {
      // Set the heuristic to h3 before each test in this describe block
      menuSolver.setHeuristic(h3);
    });

    it("menu1", () => {
      const maxUnhealthyScore = 10;
      const expected = [
        "6-2", // Nutritional value: 6, Unhealthy score: 2, Ratio: 3
        "8-3", // Nutritional value: 8, Unhealthy score: 3, Ratio: 2.6666666666666665
        "9-4", // Nutritional value: 9, Unhealthy score: 4, Ratio: 2.25
      ];
      const result = menuSolver.calculateMenu(menu1, maxUnhealthyScore);
      expect(result).to.deep.equal(expected);
    });

    it("menu2", () => {
      const maxUnhealthyScore = 10;
      const expected = [
        "11-4", // Nutritional value: 11, Unhealthy score: 4, Ratio: 2.75
        "7-3", // Nutritional value: 7, Unhealthy score: 3, Ratio: 2.3333333333333335
      ];
      const result = menuSolver.calculateMenu(menu2, maxUnhealthyScore);
      expect(result).to.deep.equal(expected);
    });
  });
});
