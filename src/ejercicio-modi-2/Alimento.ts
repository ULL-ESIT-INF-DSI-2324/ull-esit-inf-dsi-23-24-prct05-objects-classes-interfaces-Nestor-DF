import { AlimentoBebidaComun } from "./interfaces";

/**
 * Clase Alimento
 */
export class Alimento implements AlimentoBebidaComun {
  constructor(public nombre: string, public valor_nutricional: number, public gramos: number) {}
}
