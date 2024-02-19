import { Producto } from "./Producto";

/**
 * Clase bebida
 */
export class Bebida implements Producto {
  constructor(public nombre: string, public valor_nutricional: number, public litros: number) {}
}
