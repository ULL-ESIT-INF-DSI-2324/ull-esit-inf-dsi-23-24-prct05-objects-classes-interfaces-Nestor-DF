import "mocha";
import { expect } from "chai";
import { MenuSolver } from "../../src/ejercicio-2/MenuSolver";
import { FirstHeuristic, SecondHeuristic, ThirdHeuristic } from "../../src/ejercicio-2/Heuristics";
import { Menu } from "../../src/ejercicio-2/Menu";
import { Dish } from "../../src/ejercicio-2/Dish";
import { MenuSolution } from "../../src/ejercicio-2/MenuSolution";

const h1 = new FirstHeuristic();
const h2 = new SecondHeuristic();
const h3 = new ThirdHeuristic();

let menuSolver: MenuSolver;
let menu1: Menu;
let menu2: Menu;

beforeEach(() => {
  menuSolver = new MenuSolver(h1);
  const dish1 = new Dish("Chicken Salad", 10, 5);
  const dish2 = new Dish("Pasta Carbonara", 8, 3);
  const dish3 = new Dish("Grilled Salmon", 12, 6);
  const dish4 = new Dish("Caesar Salad", 6, 2);
  const dish5 = new Dish("Beef Burger", 9, 4);
  menu1 = new Menu([dish1, dish2, dish3, dish4, dish5]);

  const dish6 = new Dish("Steak with Chimichurri Sauce", 15, 7);
  const dish7 = new Dish("Fish and Chips", 11, 4);
  const dish8 = new Dish("Vegetable Curry", 13, 8);
  const dish9 = new Dish("Mushroom Risotto", 7, 3);
  const dish10 = new Dish("Shrimp Scampi", 10, 6);
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
        2, // Nutritional value: 12, Unhealthy score: 6
      ];
      const result = menuSolver.calculateMenu(menu1, maxUnhealthyScore);
      expect(result).to.deep.equal(new MenuSolution(expected));
    });

    it("menu2", () => {
      const maxUnhealthyScore = 10;
      const expected = [
        0, // Nutritional value: 15, Unhealthy score: 7
      ];
      const result = menuSolver.calculateMenu(menu2, maxUnhealthyScore);
      expect(result).to.deep.equal(new MenuSolution(expected));
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
        3, // Nutritional value: 6, Unhealthy score: 2
        1, // Nutritional value: 8, Unhealthy score: 3
        4, // Nutritional value: 9, Unhealthy score: 4
      ];
      const result = menuSolver.calculateMenu(menu1, maxUnhealthyScore);
      expect(result).to.deep.equal(new MenuSolution(expected));
    });

    it("menu2", () => {
      const maxUnhealthyScore = 10;
      const expected = [3, 1];
      const result = menuSolver.calculateMenu(menu2, maxUnhealthyScore);
      expect(result).to.deep.equal(new MenuSolution(expected));
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
        3, // Nutritional value: 6, Unhealthy score: 2, Ratio: 3
        1, // Nutritional value: 8, Unhealthy score: 3, Ratio: 2.6666666666666665
        4, // Nutritional value: 9, Unhealthy score: 4, Ratio: 2.25
      ];
      const result = menuSolver.calculateMenu(menu1, maxUnhealthyScore);
      expect(result).to.deep.equal(new MenuSolution(expected));
    });

    it("menu2", () => {
      const maxUnhealthyScore = 10;
      const expected = [
        1, // Nutritional value: 11, Unhealthy score: 4, Ratio: 2.75
        3, // Nutritional value: 7, Unhealthy score: 3, Ratio: 2.3333333333333335
      ];
      const result = menuSolver.calculateMenu(menu2, maxUnhealthyScore);
      expect(result).to.deep.equal(new MenuSolution(expected));
    });
  });
});
