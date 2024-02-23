# Práctica 5 - Objetos, clases e interfaces
- Autor: Néstor Delgado Feliciano
- Correo: alu0101488998@ull.edu.es


[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-Nestor-DF/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-Nestor-DF?branch=main)


## **Índice**
- [Práctica 5 - Objetos, clases e interfaces](#práctica-5---objetos-clases-e-interfaces)
  - [**Índice**](#índice)
  - [**Introducción**](#introducción)
  - [**Ejercicio 1 - Gestor de referencias bibliográficas**](#ejercicio-1---gestor-de-referencias-bibliográficas)
  - [**Ejercicio 2 - Menús saludables orientados a objetos**](#ejercicio-2---menús-saludables-orientados-a-objetos)
  - [**Ejercicio PE 1**](#ejercicio-pe-1)
  - [**Ejercicio PE 2**](#ejercicio-pe-2)
  - [**Conclusiones**](#conclusiones)
  - [**Recursos Empleados**](#recursos-empleados)



## **Introducción**
En esta práctica resolveré una serie de ejercicios de programación que me permitirán conocer más en profundidad los objetos, clases e interfaces del lenguaje TypeScript.



## **Ejercicio 1 - Gestor de referencias bibliográficas**

En primer lugar, definí dos interfaces, una para los elementos bibliográficos y otra para implementar la función de exportar a formato IEEE. Las dividí principalmente por seguir el **principio SOLID "Interface segregation principle"**.
```ts
export interface BibliographicElement {
  title: string;
  authors: string[];
  keywords: string[];
  abstract: string;
  publicationDate: Date;
  pages: string;
  publisher: string;
}

export interface IEEEFormattable {
  exportToIEEEFormat(): string;
}
```

A continuación, definí una clase abstracta de donde partirán el conjunto de clases de elementos bilbiográficos específicos (Obtenidos del apartado de ["Casos prácticos"](https://ull-es.libguides.com/c.php?g=674761&p=4808130) de la guía de la ULL)
Es *importante* destacar que, por ejemplo, **TRABAJOS ACADÉMICOS** se divide en *Trabajo de Fin de Grado* y *Trabajo de Fin de Máster* o que **PARTE DE UN LIBRO** se divide en *Contribución a un Congreso* y *Capítulo de Libro*, no obstante, opté por no subdivir más la jerarquía por no complicarlo más y porque las diferencias son mínimas entre los subapartados.
- PATENTE
- INFORME TÉCNICO
- NORMA TÉCNICA
- TRABAJOS ACADÉMICOS
- ARTÍCULO DE REVISTA
- LIBRO
- PARTE DE UN LIBRO

```ts
export abstract class BaseBibliographicElement implements BibliographicElement, IEEEFormattable {
  constructor(
    public title: string,
    public authors: string[],
    public keywords: string[],
    public abstract: string,
    public publicationDate: Date,
    public pages: string,
    public publisher: string
  ) {}

  abstract exportToIEEEFormat(): string;
}
```

Todos ellos tendrán que implementar su correspondiente método para exportar a formato IEEE (ya que es específico en cada caso).

En el siguiente código se pueden ver las clases específicas definidas junto a sus atributos adicionales y el método exportar a formato IEEE también específico. Cabe destacar que decidí este diseño por seguir la **primera regla SOLID o "Single responsibility principle"**.
```ts
export class Patent extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    public country: string,
    public patentNumber: string
  ) {
    super(title, authors, keywords, abstract, publicationDate, pages, publisher);
  }

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.country} ${this.patentNumber}, ${fechaFormateada}.`;
  }
}

export class TechnicalReport extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    public institution: string,
    public country: string,
    public reportType: string,
    public reportNumber: string
  ) {
    super(title, authors, keywords, abstract, publicationDate, pages, publisher);
  }

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.institution}, ${this.country}, ${this.reportType} ${this.reportNumber}, ${fechaFormateada}.`;
  }
}

export class TechnicalRules extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    public standardNumber: string
  ) {
    super(title, authors, keywords, abstract, publicationDate, pages, publisher);
  }
  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.title}, ${this.standardNumber}, ${this.authors.join(", ")}, ${fechaFormateada}.`;
  }
}

export class AcademicWorks extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    public type: string,
    public department: string,
    public institution: string,
    public country: string
  ) {
    super(title, authors, keywords, abstract, publicationDate, pages, publisher);
  }

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.type}, ${this.department}, ${this.institution} ${this.country}, ${fechaFormateada}.`;
  }
}

export class JournalArticle extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    publisher: string,
    public journal: string,
    public volume: string,
    public number: number,
    public pages: string
  ) {
    super(title, authors, keywords, abstract, publicationDate, pages, publisher);
  }

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.journal}, ${this.volume}, ${this.number} ${this.pages}, ${fechaFormateada}.`;
  }
}

export class Book extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    public edition: string,
    public place: string,
    public publisher: string
  ) {
    super(title, authors, keywords, abstract, publicationDate, pages, publisher);
  }

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, ${this.title}, ${this.edition}. ${this.place}: ${this.publisher}, ${fechaFormateada}.`;
  }
}

export class BookPart extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    public place: string,
    public publisher: string
  ) {
    super(title, authors, keywords, abstract, publicationDate, pages, publisher);
  }

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, ${this.title}, ${this.place}: ${this.publisher}, ${fechaFormateada}, ${this.pages}.`;
  }
}
```

Por último, implementé la clase `BibliographicManager` que se encargará de almacenar los diferentes elementos bibliográficos y de tener métodos como mostrarlos en formato tabla, filtralos y exportarlos en formato IEEE:
```ts
export class BibliographicManager {
  elements: BaseBibliographicElement[] = [];

  constructor(list: BaseBibliographicElement[] = []) {
    this.elements = list;
  }

  addElement(element: BaseBibliographicElement): void {
    this.elements.push(element);
  }

  showTable(): void {
    console.table(
      this.elements.map((element) => ({
        Title: element.title,
        Authors: element.authors,
        PublicationDate: element.publicationDate.toDateString(),
        Pages: element.pages,
        Publisher: element.publisher,
      }))
    );
  }

  filter(filters: { keyword?: string; title?: string; author?: string; date?: Date; publisher?: string }): void {
    console.table(
      this.elements.filter(
        (element) =>
          (!filters.keyword || element.keywords.includes(filters.keyword)) &&
          (!filters.title || element.title === filters.title) &&
          (!filters.author || element.authors.includes(filters.author)) &&
          (!filters.date || element.publicationDate === filters.date) &&
          (!filters.publisher || element.publisher === filters.publisher)
      )
    );
  }

  exportIEEEFormat(filters: {
    keyword?: string;
    title?: string;
    author?: string;
    date?: Date;
    publisher?: string;
  }): string {
    const ieeeFormatResults = this.elements
      .filter(
        (element) =>
          (!filters.keyword || element.keywords.includes(filters.keyword)) &&
          (!filters.title || element.title === filters.title) &&
          (!filters.author || element.authors.includes(filters.author)) &&
          (!filters.date || element.publicationDate === filters.date) &&
          (!filters.publisher || element.publisher === filters.publisher)
      )
      .map((result) => result.exportToIEEEFormat());
    return ieeeFormatResults.join("\n");
  }
}
```

Cabe destacar que `BibliographicManager` guarda una lista de `BaseBibliographicElement` que es una clase abstracta que a su vez implementa una interfaz, de esta manera `BibliographicManager` no tiene porque guardar los elementos bibliográficos como una lista usando unión de tipos (por ejemplo). Siguiendo así el **principio "Dependency inversion principle"**.




## **Ejercicio 2 - Menús saludables orientados a objetos**

En primer lugar, cree una clase para poder representar a un plato de comida:
```ts
export class Dish {
  constructor(public name: string, public nutriScore: number, public unhealthyScore: number) {}
}
```
La cual es muy simple ya que solo guarda el nombre del plato, su valor nutriconal y su valor de insalubridad. Eso sí, el diseño permite añadir métodos si se necesitaran.

Seguidamente, cree una clase para representar una carta de restaurante o menú, que contendrá una lista de platos (los disponibles en el menú):
```ts
export class Menu {
  constructor(private dishes: Dish[]) {}

  getDishes(): Dish[] {
    return [...this.dishes];
  }

  addDish(dish: Dish): void {
    this.dishes.push(dish);
  }
}
```
En esta ocasión añado métodos para poder trabajar con los platos, un getter (devuelve por valor) y un método para añadir un plato al menú después de creado.

Después, siguiendo el patron de diseño `Strategy` creé una interfaz común a las heurísticas que serán implementadas como clases individuales.
```ts
export interface Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): MenuSolution;
}
```

La implemetación de las clases es la siguiente:
```ts
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

export class FirstHeuristic implements Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): MenuSolution {
    return Common(menu, maxUnhealthyScore, (a, b) => b.nutriScore - a.nutriScore);
  }
}


export class SecondHeuristic implements Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): MenuSolution {
    return Common(menu, maxUnhealthyScore, (a, b) => a.unhealthyScore - b.unhealthyScore);
  }
}

export class ThirdHeuristic implements Heuristic {
  execute(menu: Menu, maxUnhealthyScore: number): MenuSolution {
    return Common(menu, maxUnhealthyScore, (a, b) => b.nutriScore / b.unhealthyScore - a.nutriScore / a.unhealthyScore);
  }
}
```

Se puede apreciar como cada heurística es una clase distinta que implementa la interfaz y todas usan una función en común ya que todas hacen lo mismo al final, añadir platos a un `MenuSolution`. Que en mi caso no es más que un array de number con el índice del plato que se añade al menú saluble generado. 
**¿Por qué opté por esta aproximación?** 
Inicialmente, me basé en la solución propuesta por el profesor *Eduardo Segredo*, que consistía en utilizar un array de booleanos para indicar qué platos se añadían y cuáles no. Sin embargo, al analizarla, busqué una alternativa más eficiente. 
Desde el principio, no me convenció esta solución, ya que para determinar exactamente qué platos compondrían la elección final, era necesario recurrir a ambas estructuras de datos: tanto al menú original como al menú de la solución. Este enfoque resultaba engorroso. Además, consideré que si partimos de la premisa de que en un menú hay una gran cantidad de platos para elegir, mientras que en un menú de solución solo hay unos pocos, la mayoría de los elementos en la solución serían 0, indicando que esos platos no se elegían. Por lo tanto, concluí que era más eficiente utilizar un array de números (number[]) para almacenar los índices de los platos que forman parte de la solución. Este enfoque no solo simplifica la búsqueda, sino que también consume menos memoria, especialmente en menús MUY extensos.

La clase `MenuSolution` es esta, se observa como el atributo que tiene es de solo lectura ya que no tiene sentido que dada la solución al problema se quiera modificar esta (o al menos eso pienso).
```ts
export class MenuSolution {
  constructor(readonly menu: number[]) {}
}
```

Ya por último implementé la clase `MenuSolver` que se encargará de guardar una heurística determinada pudiendo cambiarla a través de un método setter y de ejecutar el método que calculará el `MenuSolution` basándose en esa heurística:
```ts
export class MenuSolver {
  constructor(private heuristic: Heuristic) {}

  setHeuristic(heuristic: Heuristic): void {
    this.heuristic = heuristic;
  }

  calculateMenu(menu: Menu, maxUnhealthyScore: number): MenuSolution {
    return this.heuristic.execute(menu, maxUnhealthyScore);
  }
}
```




## **Ejercicio PE 1**
```ts
enum Allergens {
  "Gato",
  "Polen",
  "Chocolate",
  "Tomate",
  "Fresa",
  "Marisco",
  "Cacahuete",
  "Huevo",
}

export function getAllergens(N: number): string[] | undefined {
  const result: string[] = [];
  if (N < 0) {
    return undefined;
  }
  const binary: string = N.toString(2).slice(-8).padStart(8, "0");
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      result.push(Allergens[i]);
    }
  }
  return result;
}
```

Función que recibe un número y devuelve un array de strings con los alérgenos correspondientes. 
Se crea un tipo enumerado para almacenar las diferentes acciones. 
En la función:
1. Comprueba que el número sea positivo
2. Convierte el número a una string con su representación en binario, se queda con los últimos 8 elementos y la rellena con "0" por el principio hasta tener longuitud 8. Esto asegura que siempre la cadena resultante sea de longuitud 8.
3. Lee la cadena de atrás hacia delante y si hay un "1" pushea la acción correspondiente al array de resultados. Lo hago así para que se conserve el mismo orden que en el enunciado.
4. Retorna el resultado.




## **Ejercicio PE 2**
En primer lugar, creé una interfaz `Producto` ya que tanto los alimentos como las bebidas comparten elementos en común por ser productos:
```ts
export interface Producto {
  nombre: string;
  valor_nutricional: number;
}
```

A continuación, creo las correspondientes clases `Alimento` y `Bebida` implementando la interfaz `Producto` previamente definida y añadiendo los atributos específicos de cada una:
```ts
export class Alimento implements Producto {
  constructor(public nombre: string, public valor_nutricional: number, public gramos: number) {}
}

export class Bebida implements Producto {
  constructor(public nombre: string, public valor_nutricional: number, public litros: number) {}
}
```

Por último, creo la clase `Nevera` que contendrá un array de tuplas de alimentos y bebidas con sus correspondientes cantidades, y un array con la unión de ambos para representar la lista de la compra.
Hago los atributos hard private porque ya existen los correspondientes métodos de añadir / consumir y ver la lista de la compra por lo que no me interesa que se tenga acceso a ellos fuera de la clase.
```ts
export class Nevera {
  #alimentos: [Alimento, number][];
  #bebidas: [Bebida, number][];
  #listaCompra: (Alimento | Bebida)[];

  constructor() {
    this.#alimentos = [];
    this.#bebidas = [];
    this.#listaCompra = [];
  }

  private aniadirAListaCompra(item: Alimento | Bebida) {
    this.#listaCompra.push(item);
  }

  aniadirAlimento(alimento: Alimento) {
    if (this.#alimentos.find((value) => value[0].nombre === alimento.nombre) !== undefined) {
      this.#alimentos.forEach((item) => {
        if (item[0].nombre === alimento.nombre) {
          item[1]++;
        }
      });
    } else {
      this.#alimentos.push([alimento, 1]);
    }
  }

  aniadirBebida(bebida: Bebida) {
    if (this.#bebidas.find((value) => value[0].nombre === bebida.nombre) !== undefined) {
      this.#bebidas.forEach((item) => {
        if (item[0].nombre === bebida.nombre) {
          item[1]++;
        }
      });
    } else {
      this.#bebidas.push([bebida, 1]);
    }
  }

  consumirAlimento(alimento: Alimento) {
    if (this.#alimentos.find((value) => value[0].nombre === alimento.nombre) === undefined) {
      console.log("No existe");
    }
    this.#alimentos.map((item) => {
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

  consumirBebida(bebida: Bebida) {
    if (this.#bebidas.find((value) => value[0].nombre === bebida.nombre) === undefined) {
      console.log("No existe");
    }
    this.#bebidas.map((item) => {
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

  ListaCompra(): string {
    const lista = this.#listaCompra.map((item) => item.nombre);
    return lista.join(", ");
  }
}
```




## **Conclusiones**
En conclusión, la resolución de los ejercicios de programación me han ayudado a conocer más en profundidad los objetos, clases e interfaces del lenguaje TypeScript.




## **Recursos Empleados**

1. OpenAI Chat: [https://chat.openai.com/](https://chat.openai.com/)

2. W3Schools JavaScript Reference: [https://www.w3schools.com/jsrEF/default.asp](https://www.w3schools.com/jsrEF/default.asp)

3. MDN Web Docs - JavaScript Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)