import { Menu } from "./Menu";

/**
 * Common interface to all heuristic objects.
 */
export interface Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): string[];
}
