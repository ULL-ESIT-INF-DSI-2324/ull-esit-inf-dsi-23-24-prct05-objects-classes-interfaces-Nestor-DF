import { Heuristic } from "./InterfaceHeuristic";
import { Menu } from "./Menu";

/**
 *  Class MenuSolver represents a menu solver that calculates the best menu for a given maximum unhealthy score.
 */
export class MenuSolver {
  constructor(private heuristic: Heuristic) {}

  /**
   * Method to set the heuristic.
   * @param heuristic The heuristic to set.
   */
  setHeuristic(heuristic: Heuristic): void {
    this.heuristic = heuristic;
  }

  /**
   * Calculates the best menu for a given maximum unhealthy score.
   * @param menu The menu to calculate the best dishes from.
   * @param maxUnhealthyScore The maximum unhealthy score.
   * @returns The best menu for a given maximum unhealthy score.
   */
  calculateMenu(menu: Menu, maxUnhealthyScore: number): string[] {
    return this.heuristic.execute(menu, maxUnhealthyScore);
  }
}
