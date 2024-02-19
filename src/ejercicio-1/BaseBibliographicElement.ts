import { BibliographicElement } from "./interfaces";
import { IEEEFormattable } from "./interfaces";

/**
 *  Base class that represents a bibliographic element.
 */
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

  /**
   * @method Method that returns the bibliographic element in IEEE format.
   */
  abstract exportToIEEEFormat(): string;
}
