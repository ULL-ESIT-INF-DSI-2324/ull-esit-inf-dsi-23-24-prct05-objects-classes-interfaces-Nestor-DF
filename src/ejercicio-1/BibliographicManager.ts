import { BaseBibliographicElement } from "./BaseBibliographicElement";

/**
 * BibliographicManager class that manages a list of bibliographic elements and provides methods to filter and export them.
 */
export class BibliographicManager {
  elements: BaseBibliographicElement[] = [];

  constructor(list: BaseBibliographicElement[] = []) {
    this.elements = list;
  }

  addElement(element: BaseBibliographicElement): void {
    this.elements.push(element);
  }

  showTable(): void {
    console.table(this.elements);
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
