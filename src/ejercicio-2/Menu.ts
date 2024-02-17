import { Dish } from "./Dish";

export class Menu {
  constructor(private dishes: Dish[], private maxUnhealthyScore: number) {}

  getDishes(): Dish[] {
    return this.dishes;
  }

  getMaxUnhealthyScore(): number {
    return this.maxUnhealthyScore;
  }

  addDish(dish: Dish): void {
    this.dishes.push(dish);
  }
}
