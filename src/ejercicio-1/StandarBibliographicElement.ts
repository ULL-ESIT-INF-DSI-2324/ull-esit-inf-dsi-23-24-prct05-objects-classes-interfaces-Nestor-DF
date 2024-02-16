import { BibliographicElement } from "./BibliographicElement";

export class BaseBibliographicElement implements BibliographicElement {
  constructor(
    public title: string,
    public authors: string[],
    public keywords: string[],
    public abstract: string,
    public publicationDate: string,
    public pages: string,
    public publisher: string
  ) {}

  generateIEEEFormat(): string {
    return `${this.authors.join(", ")}, "${this.title}," ${this.publisher}, ${
      this.publicationDate
    }.`;
  }
}
