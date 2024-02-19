import { AlimentoBebidaComun } from "./interfaces";

/**
 * Clase bebida
 */
export class Bebida implements AlimentoBebidaComun {
  constructor(public nombre: string, public valor_nutricional: number, public litros: number) {}
}
