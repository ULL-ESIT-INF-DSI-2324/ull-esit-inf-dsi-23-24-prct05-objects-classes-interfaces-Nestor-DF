import "mocha";
import { expect } from "chai";
import { Alimento } from "../../src/ejercicio-pe-2/Alimento";
import { Bebida } from "../../src/ejercicio-pe-2/Bebida";
import { Nevera } from "../../src/ejercicio-pe-2/Nevera";

describe("Nevera", () => {
  it("Se añaden y se consumen los elementos correctamente, se añaden a lista también", () => {
    const nevera = new Nevera();
    const alimento1 = new Alimento("chocolate", 1, 1);
    const alimento2 = new Alimento("mazana", 10, 1);
    const bebida1 = new Bebida("fanta", 1, 1);
    const bebida2 = new Bebida("agua", 10, 1);

    nevera.aniadirAlimento(alimento1);
    nevera.aniadirAlimento(alimento1);
    nevera.aniadirAlimento(alimento2);

    nevera.aniadirBebida(bebida1);
    nevera.aniadirBebida(bebida1);
    nevera.aniadirBebida(bebida2);

    nevera.consumirAlimento(alimento1);
    nevera.consumirAlimento(alimento1);

    nevera.consumirBebida(bebida1);
    nevera.consumirBebida(bebida1);

    const result = nevera.ListaCompra();
    expect(result).to.deep.equal("chocolate, fanta");
  });

  it("No están en la nevera los alimentos o bebidas que se quieren consumir", () => {
    const alimento1 = new Alimento("chocolate", 1, 1);
    const bebida1 = new Bebida("fanta", 1, 1);
    const nevera = new Nevera();
    nevera.consumirAlimento(alimento1);
    nevera.consumirBebida(bebida1);
  });
});
