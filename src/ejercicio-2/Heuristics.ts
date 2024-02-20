import { Heuristic } from "./InterfaceHeuristic";
import { Dish } from "./Dish";
import { Menu } from "./Menu";

function Common(menu: Menu, maxUnhealthyScore: number, sortFn: (a: Dish, b: Dish) => number): string[] {
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

export class FirstHeuristic implements Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): string[] {
    return Common(menu, maxUnhealthyScore, (a, b) => b.nutriScore - a.nutriScore);
  }
}

export class SecondHeuristic implements Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): string[] {
    return Common(menu, maxUnhealthyScore, (a, b) => a.unhealthyScore - b.unhealthyScore);
  }
}

export class ThirdHeuristic implements Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): string[] {
    return Common(menu, maxUnhealthyScore, (a, b) => b.nutriScore / b.unhealthyScore - a.nutriScore / a.unhealthyScore);
  }
}
