import { BaseBibliographicElement } from "./BaseBibliographicElement";

export class Patente extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    public country: string,
    public patentNumber: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.country} ${this.patentNumber}, ${fechaFormateada}.`;
  }
}

export class InformeTecnico extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    public institution: string,
    public country: string,
    public reportType: string,
    public reportNumber: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.institution}, ${this.country}, ${this.reportType} ${
      this.reportNumber
    }, ${fechaFormateada}.`;
  }
}

export class NormaTecnica extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    public standardNumber: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }
  exportToIEEEFormat(): string {
    return `${this.title}, ${this.standardNumber}, ${this.authors.join(", ")}, ${this.publicationDate}`;
  }
}

export class TrabajosAcademicos extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    public type: string,
    public department: string,
    public institution: string,
    public country: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.type}, ${this.department}, ${this.institution} ${
      this.country
    }, ${fechaFormateada}.`;
  }
}

export class ArticuloRevista extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    public journal: string,
    public volume: string,
    public number: number,
    public pages: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.journal}, ${this.volume}, ${this.number} ${
      this.pages
    }, ${fechaFormateada}.`;
  }
}

export class Libro extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    public edition: string,
    public place: string,
    public publisher: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, ${this.title}, ${this.edition}. ${this.place}: ${this.publisher}, 
    ${fechaFormateada}.`;
  }
}
