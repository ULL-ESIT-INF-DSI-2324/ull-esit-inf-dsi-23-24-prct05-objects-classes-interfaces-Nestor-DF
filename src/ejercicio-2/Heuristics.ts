import { Heuristic } from "./InterfaceHeuristic";
import { Dish } from "./Dish";
import { Menu } from "./Menu";
import { MenuSolution } from "./MenuSolution";

/**
 * Function that returns the dishes that can be eaten without exceeding the maximum unhealthy score
 * @param menu Is the menu to be analyzed
 * @param maxUnhealthyScore Is the maximum unhealthy score that the menu can have
 * @param sortFn Is the function that will be used to sort the dishes
 * @returns
 */
function Common(menu: Menu, maxUnhealthyScore: number, sortFn: (a: Dish, b: Dish) => number): MenuSolution {
  const dishes = menu.getDishes().sort(sortFn);
  const result: number[] = [];
  let unhealthyScore = 0;
  let i = 0;
  let currentDish = dishes[i];
  while (unhealthyScore + currentDish.unhealthyScore <= maxUnhealthyScore) {
    result.push(menu.getDishes().indexOf(currentDish));
    unhealthyScore += currentDish.unhealthyScore;
    currentDish = dishes[++i];
    if (!currentDish) {
      break;
    }
  }
  return new MenuSolution(result);
}

/**
 * Class that implements the heuristic that introduce the dishes with the highest nutriScore first
 */
export class FirstHeuristic implements Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): MenuSolution {
    return Common(menu, maxUnhealthyScore, (a, b) => b.nutriScore - a.nutriScore);
  }
}

/**
 * Class that implements the heuristic that introduce the dishes with the lowest unhealthyScore first
 */
export class SecondHeuristic implements Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): MenuSolution {
    return Common(menu, maxUnhealthyScore, (a, b) => a.unhealthyScore - b.unhealthyScore);
  }
}

/**
 * Class that implements the heuristic that introduce the dishes with the highest nutriScore / unhealthyScore first
 */
export class ThirdHeuristic implements Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): MenuSolution {
    return Common(menu, maxUnhealthyScore, (a, b) => b.nutriScore / b.unhealthyScore - a.nutriScore / a.unhealthyScore);
  }
}
