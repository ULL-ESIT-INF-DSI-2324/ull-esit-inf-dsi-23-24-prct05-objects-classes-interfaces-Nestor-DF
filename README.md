# Práctica 5 - Objetos, clases e interfaces
- Autor: Néstor Delgado Feliciano
- Correo: alu0101488998@ull.edu.es



## **Índice**
- [Práctica 5 - Objetos, clases e interfaces](#práctica-5---objetos-clases-e-interfaces)
  - [**Índice**](#índice)
  - [**Introducción**](#introducción)
  - [**Ejercicio 1 - Gestor de referencias bibliográficas**](#ejercicio-1---gestor-de-referencias-bibliográficas)
  - [**Ejercicio 2 - Menús saludables orientados a objetos**](#ejercicio-2---menús-saludables-orientados-a-objetos)
  - [**Conclusiones**](#conclusiones)
  - [**Referencias**](#referencias)



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
- PATENTE
- INFORME TÉCNICO
- NORMA TÉCNICA
- TRABAJOS ACADÉMICOS
- ARTÍCULO DE REVISTA
- LIBRO

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
    return this.dishes;
  }

  addDish(dish: Dish): void {
    this.dishes.push(dish);
  }
}
```
En esta ocasión añado métodos para poder trabajar con los platos, un getter y un método para añadir un plato al menú después de creado.

Por último, implementé la clase `MenuSolver` que se encargará de crear menús saludables a través de sus métodos:
```ts
export class MenuSolver {
  constructor() {}

  private calculateMenu(menu: Menu, maxUnhealthyScore: number, sortFn: (a: Dish, b: Dish) => number): string[] {
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

  h1(menu: Menu, maxUnhealthyScore: number): string[] {
    return this.calculateMenu(menu, maxUnhealthyScore, (a, b) => b.nutriScore - a.nutriScore);
  }

  h2(menu: Menu, maxUnhealthyScore: number): string[] {
    return this.calculateMenu(menu, maxUnhealthyScore, (a, b) => a.unhealthyScore - b.unhealthyScore);
  }

  h3(menu: Menu, maxUnhealthyScore: number): string[] {
    return this.calculateMenu(
      menu,
      maxUnhealthyScore,
      (a, b) => b.nutriScore / b.unhealthyScore - a.nutriScore / a.unhealthyScore
    );
  }
}
```

Donde h1, h2, h3 son las distintas heurísticas (métodos públicos) que usan el método privado calculateMenu para así devolver una lista de nombres de platos que conformarán el menú saludable.



## **Conclusiones**
En conclusión, la resolución de los ejercicios de programación me han ayudado a conocer más en profundidad los objetos, clases e interfaces del lenguaje TypeScript.



## **Referencias**

1. OpenAI Chat: [https://chat.openai.com/](https://chat.openai.com/)

2. W3Schools JavaScript Reference: [https://www.w3schools.com/jsrEF/default.asp](https://www.w3schools.com/jsrEF/default.asp)

3. MDN Web Docs - JavaScript Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)