import { Alimento } from "./Alimento";
import { Bebida } from "./Bebida";

/**
 * Clase nevera
 */
export class Nevera {
  alimentos: [Alimento, number][];
  bebidas: [Bebida, number][];
  listaCompra: (Alimento | Bebida)[];

  constructor() {
    this.alimentos = [];
    this.bebidas = [];
    this.listaCompra = [];
  }

  /**
   * Función que añade un alimento a a lisa de alimentos, si está aumenta la cantidad
   * @param alimento alimento a ser añadido
   */
  aniadirAlimento(alimento: Alimento) {
    if (this.alimentos.find((value) => value[0].nombre === alimento.nombre) !== undefined) {
      this.alimentos.forEach((item) => {
        if (item[0].nombre === alimento.nombre) {
          item[1]++;
        }
      });
    } else {
      this.alimentos.push([alimento, 1]);
    }
  }

  /**
   * Función que añade una bebida a a lista de bebidas, si está aumenta la cantidad
   * @param bebida bebida a ser añadida
   */
  aniadirBebida(bebida: Bebida) {
    if (this.bebidas.find((value) => value[0].nombre === bebida.nombre) !== undefined) {
      this.bebidas.forEach((item) => {
        if (item[0].nombre === bebida.nombre) {
          item[1]++;
        }
      });
    } else {
      this.bebidas.push([bebida, 1]);
    }
  }

  /**
   * Función que quita un alimento a a lista de alimentos, si está disminuye la cantidad
   * Si se llega a cantidad 0 la añade a la lista de la compra
   * @param alimento alimento a ser quitado
   */
  consumirAlimento(alimento: Alimento) {
    if (this.alimentos.find((value) => value[0].nombre === alimento.nombre) === undefined) {
      console.log("No existe");
    }
    this.alimentos.map((item) => {
      if (item[0] === alimento) {
        if (item[1] > 1) {
          item[1]--;
        } else {
          item[1]--;
          this.aniadirAListaCompra(alimento);
        }
      }
    });
  }

  /**
   * Función que quita una bebida a a lista de bebidas, si está disminuye la cantidad
   * Si se llega a cantidad 0 la añade a la lista de la compra
   * @param bebida bebida a ser quitada
   */
  consumirBebida(bebida: Bebida) {
    if (this.bebidas.find((value) => value[0].nombre === bebida.nombre) === undefined) {
      console.log("No existe");
    }
    this.bebidas.map((item) => {
      if (item[0] === bebida) {
        if (item[1] > 1) {
          item[1]--;
        } else {
          item[1]--;
          this.aniadirAListaCompra(bebida);
        }
      }
    });
  }

  private aniadirAListaCompra(item: Alimento | Bebida) {
    this.listaCompra.push(item);
  }

  ListaCompra(): string {
    const lista = this.listaCompra.map((item) => item.nombre);
    return lista.join(", ");
  }
}
