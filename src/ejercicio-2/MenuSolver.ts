import { Dish } from "./Dish";
import { Menu } from "./Menu";

/**
 * Class MenuSolver represents a menu solver that calculates the best menu for a given maximum unhealthy score.
 */
export class MenuSolver {
  constructor() {}

  /**
   * Calculates the best menu for a given maximum unhealthy score.
   * @param menu The menu to calculate the best dishes from.
   * @param maxUnhealthyScore The maximum unhealthy score.
   * @returns The best menu for a given maximum unhealthy score.
   */
  private calculateMenu(menu: Menu, maxUnhealthyScore: number, sortFn: (a: Dish, b: Dish) => number): string[] {
    const dishes = menu.getDishes().sort(sortFn);
    const result: string[] = [];
    let unhealthyScore = 0;
    let i = 0;
    let currentDish = dishes[i];
    while (unhealthyScore + currentDish.unhealthyScore <= maxUnhealthyScore) {
      result.push(currentDish.name);
      unhealthyScore += currentDish.unhealthyScore;
      currentDish = dishes[++i];
      if (!currentDish) {
        break;
      }
    }
    return result;
  }

  /**
   * Method that uses calculateMenu and a heuristic to calculate the best menu.
   * Heuristic: Order by nutritional value.
   * @param menu Is the menu to calculate the best dishes from.
   * @param maxUnhealthyScore Is the maximum unhealthy score.
   * @returns The best menu for a given maximum unhealthy score.
   */
  h1(menu: Menu, maxUnhealthyScore: number): string[] {
    return this.calculateMenu(menu, maxUnhealthyScore, (a, b) => b.nutriScore - a.nutriScore);
  }

  /**
   * Method that uses calculateMenu and a heuristic to calculate the best menu.
   * Heuristic: Order by unhealthy value value.
   * @param menu Is the menu to calculate the best dishes from.
   * @param maxUnhealthyScore Is the maximum unhealthy score.
   * @returns The best menu for a given maximum unhealthy score.
   */
  h2(menu: Menu, maxUnhealthyScore: number): string[] {
    return this.calculateMenu(menu, maxUnhealthyScore, (a, b) => a.unhealthyScore - b.unhealthyScore);
  }

  /**
   * Method that uses calculateMenu and a heuristic to calculate the best menu.
   * Heuristic: Order by nutritional value / unhealthy value  value.
   * @param menu Is the menu to calculate the best dishes from.
   * @param maxUnhealthyScore Is the maximum unhealthy score.
   * @returns The best menu for a given maximum unhealthy score.
   */
  h3(menu: Menu, maxUnhealthyScore: number): string[] {
    return this.calculateMenu(
      menu,
      maxUnhealthyScore,
      (a, b) => b.nutriScore / b.unhealthyScore - a.nutriScore / a.unhealthyScore
    );
  }
}
