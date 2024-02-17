import { BaseBibliographicElement } from "./BaseBibliographicElement";

/**
 * Class that represents a patent.
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

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.country} ${this.patentNumber}, ${fechaFormateada}.`;
  }
}

/**
 * Class that represents a technical report.
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

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.institution}, ${this.country}, ${this.reportType} ${this.reportNumber}, ${fechaFormateada}.`;
  }
}


/**
 * Class that represents a technical rule.
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
  exportToIEEEFormat(): string {
    return `${this.title}, ${this.standardNumber}, ${this.authors.join(", ")}, ${this.publicationDate}.`;
  }
}

/**
 * Class that represents an academic work.
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

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.type}, ${this.department}, ${this.institution} ${this.country}, ${fechaFormateada}.`;
  }
}

/**
 * Class that represents a journal article.
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

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, "${this.title}," ${this.journal}, ${this.volume}, ${this.number} ${this.pages}, ${fechaFormateada}.`;
  }
}

/**
 * Class that represents a book.
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

  exportToIEEEFormat(): string {
    const opcionesFormato: Intl.DateTimeFormatOptions = { year: "numeric" };
    const fechaFormateada: string = this.publicationDate.toLocaleDateString("en-US", opcionesFormato);
    return `${this.authors.join(", ")}, ${this.title}, ${this.edition}. ${this.place}: ${this.publisher}, ${fechaFormateada}.`;
  }
}
