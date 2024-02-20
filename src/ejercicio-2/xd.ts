import { MenuSolver } from "../../src/ejercicio-2/MenuSolver";
import { FirstHeuristic } from "../../src/ejercicio-2/Heuristics";
import { Menu } from "../../src/ejercicio-2/Menu";
import { Dish } from "../../src/ejercicio-2/Dish";

const h1 = new FirstHeuristic();
const menuSolver = new MenuSolver(h1);

const dish1 = new Dish("10-5", 10, 5);
const dish2 = new Dish("8-3", 8, 3);
const dish3 = new Dish("12-6", 12, 6);
const dish4 = new Dish("6-2", 6, 2);
const dish5 = new Dish("9-4", 9, 4);
const menu1 = new Menu([dish1, dish2, dish3, dish4, dish5]);

const dish6 = new Dish("15-7", 15, 7);
const dish7 = new Dish("11-4", 11, 4);
const dish8 = new Dish("13-8", 13, 8);
const dish9 = new Dish("7-3", 7, 3);
const dish10 = new Dish("10-6", 10, 6);
const menu2 = new Menu([dish6, dish7, dish8, dish9, dish10]);

const maxUnhealthyScore = 10;

menuSolver.calculateMenu(menu1, maxUnhealthyScore);

const maxUnhealthyScore2 = 10;

menuSolver.calculateMenu(menu2, maxUnhealthyScore2);
