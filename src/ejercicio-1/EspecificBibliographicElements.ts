import { BaseBibliographicElement } from "./BaseBibliographicElement";

export class Patente extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: string,
    public country: string,
    public patentNumber: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }

  // Puedes añadir métodos específicos para la clase Patente si es necesario
}

export class InformeTecnico extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: string,
    public institution: string,
    public country: string,
    public reportType: string,
    public reportNumber: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }

  // Puedes añadir métodos específicos para la clase InformeTecnico si es necesario
}

export class NormaTecnica extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: string,
    public standardNumber: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }

  // Puedes añadir métodos específicos para la clase NormaTecnica si es necesario
}

export class TrabajosAcademicos extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: string,
    public type: string,
    public department: string,
    public institution: string,
    public country: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }

  // Puedes añadir métodos específicos para la clase TrabajosAcademicos si es necesario
}

export class ArticuloRevista extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: string,
    public journal: string,
    public volume: string,
    public number: number,
    public pages: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }

  // Puedes añadir métodos específicos para la clase ArticuloRevista si es necesario
}

export class Libro extends BaseBibliographicElement {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: string,
    public edition: string,
    public place: string,
    public publisher: string
  ) {
    super(title, authors, keywords, abstract, publicationDate);
  }

  // Puedes añadir métodos específicos para la clase Libro si es necesario
}
