import { BibliographicElement } from "./BibliographicElement";
import { IEEEFormattable } from "./IEEEFormattable";

/**
 * Base class that represents a bibliographic element.
 */
export class BaseBibliographicElement implements BibliographicElement, IEEEFormattable {
  constructor(
    public title: string,
    public authors: string[],
    public keywords: string[],
    public abstract: string,
    public publicationDate: Date,
    public pages: string,
    public publisher: string
  ) {}

  exportToIEEEFormat(): string {
    return `${this.authors.join(", ")}, "${this.title}," ${this.publicationDate}.`;
  }
}
