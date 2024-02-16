export interface BibliographicElement {
  title: string;
  authors: string[];
  keywords: string[];
  abstract: string;
  publicationDate: string;
  pages: string;
  publisher: string;
  generateIEEEFormat(): string;
}
