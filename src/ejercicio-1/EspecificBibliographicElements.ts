import { BaseBibliographicElement } from "./BaseBibliographicElement";

/**
 * @class Class that represents a bibliographic patent.
 */
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

  /**
   * Method to export the patent in IEEE format.
   * @returns The patent in IEEE format.
   */
  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.country} ${this.patentNumber}, ${fechaFormateada}.`;
  }
}

/**
 * @class Class that represents a bibliographic technical report.
 */
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

  /**
   * Method to export the technical report in IEEE format.
   * @returns The technical report in IEEE format.
   */
  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.institution}, ${this.country}, ${this.reportType} ${this.reportNumber}, ${fechaFormateada}.`;
  }
}


/**
 * @class Class that represents a bibliographic technical rule.
 */
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
  
  /**
   * Method to export the technical rule in IEEE format.
   * @returns The technical rule in IEEE format.
   */
  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.title}, ${this.standardNumber}, ${this.authors.join(", ")}, ${fechaFormateada}.`;
  }
}

/**
 * @class Class that represents a bibliographic academic work.
 */
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

  /**
   * Method to export the academic work in IEEE format.
   * @returns The academic work in IEEE format.
   */
  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.type}, ${this.department}, ${this.institution} ${this.country}, ${fechaFormateada}.`;
  }
}

/**
 * @class Class that represents a bibliographic journal article.
 */
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

  /**
   * Method to export the journal article in IEEE format.
   * @returns The journal article in IEEE format.
   */
  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.journal}, ${this.volume}, ${this.number} ${this.pages}, ${fechaFormateada}.`;
  }
}

/**
 * @class Class that represents a bibliographic book.
 */
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

  /**
   * Method to export the book in IEEE format.
   * @returns The book in IEEE format.
   */
  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, ${this.title}, ${this.edition}. ${this.place}: ${this.publisher}, ${fechaFormateada}.`;
  }
}

/**
 * @class Class that represents a bibliographic book part.
 */
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

  /**
   * Method to export the book part in IEEE format.
   * @returns The book part in IEEE format.
   */
  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, ${this.title}, ${this.place}: ${this.publisher}, ${fechaFormateada}, ${this.pages}.`;
  }
}