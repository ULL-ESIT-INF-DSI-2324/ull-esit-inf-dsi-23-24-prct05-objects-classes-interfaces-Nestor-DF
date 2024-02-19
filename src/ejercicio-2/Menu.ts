import { Dish } from "./Dish";

/**
 * @class Class Menu represents a menu with its dishes.
 */
export class Menu {
  constructor(private dishes: Dish[]) {}

  /**
   * Get the dishes from the menu.
   * @returns The dishes from the menu.
   */
  getDishes(): Dish[] {
    return this.dishes;
  }

  /**
   * Add a dish to the menu.
   * @param dish The dish to add to the menu.
   */
  addDish(dish: Dish): void {
    this.dishes.push(dish);
  }
}
