import { Menu } from "./Menu";
import { MenuSolution } from "./MenuSolution";

/**
 * Common interface to all heuristic used in MenuSolver for creating healthy menus.
 */
export interface Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): MenuSolution;
}
