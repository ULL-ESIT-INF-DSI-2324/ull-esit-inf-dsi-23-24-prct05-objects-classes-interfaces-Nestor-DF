/**
 * @interface Interface that represents a bibliographic element.
 */
export interface BibliographicElement {
  title: string;
  authors: string[];
  keywords: string[];
  abstract: string;
  publicationDate: Date;
  pages: string;
  publisher: string;
}

/**
 * @interface Interface IEEEFormattable
 */
export interface IEEEFormattable {
  exportToIEEEFormat(): string;
}
