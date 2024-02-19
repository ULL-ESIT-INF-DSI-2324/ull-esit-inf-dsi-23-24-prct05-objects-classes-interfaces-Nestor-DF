import { Producto } from "./Producto";

/**
 *  Clase Alimento
 */
export class Alimento implements Producto {
  constructor(public nombre: string, public valor_nutricional: number, public gramos: number) {}
}
