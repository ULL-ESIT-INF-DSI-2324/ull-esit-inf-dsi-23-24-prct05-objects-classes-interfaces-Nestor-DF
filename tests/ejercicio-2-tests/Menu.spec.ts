import "mocha";
import { expect } from "chai";
import { Menu } from "../../src/ejercicio-2/Menu";
import { Dish } from "../../src/ejercicio-2/Dish";

describe("Menu", () => {
  let menu: Menu;
  let dish1: Dish;
  let dish2: Dish;

  beforeEach(() => {
    dish1 = new Dish("Dish 1", 10, 4);
    dish2 = new Dish("Dish 2", 15, 3);
    menu = new Menu([dish1]);
  });

  it("should return the dishes in the menu", () => {
    expect(menu.getDishes()).to.deep.equal([dish1]);
  });

  it("should add a dish to the menu", () => {
    menu.addDish(dish2);
    expect(menu.getDishes()).to.deep.equal([dish1, dish2]);
  });
});
