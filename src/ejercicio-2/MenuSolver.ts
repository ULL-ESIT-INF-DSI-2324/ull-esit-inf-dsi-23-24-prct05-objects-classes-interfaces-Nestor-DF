import { Dish } from "./Dish";
import { Menu } from "./Menu";

export class MenuSolver {
  constructor() {}

  private calculateMenu(menu: Menu, sortFn: (a: Dish, b: Dish) => number): string[] {
    const dishes = menu.getDishes().sort(sortFn);
    const result: string[] = [];
    let unhealthyScore = 0;
    let i = 0;
    let currentDish = dishes[i];
    while (unhealthyScore + currentDish.unhealthyScore <= menu.getMaxUnhealthyScore()) {
      result.push(currentDish.name);
      unhealthyScore += currentDish.unhealthyScore;
      currentDish = dishes[++i];
      if (!currentDish) {
        break;
      }
    }
    return result;
  }

  h1(menu: Menu): string[] {
    return this.calculateMenu(menu, (a, b) => b.nutriScore - a.nutriScore);
  }

  h2(menu: Menu): string[] {
    return this.calculateMenu(menu, (a, b) => a.unhealthyScore - b.unhealthyScore);
  }

  h3(menu: Menu): string[] {
    return this.calculateMenu(menu, (a, b) => b.nutriScore / b.unhealthyScore - a.nutriScore / a.unhealthyScore);
  }
}
