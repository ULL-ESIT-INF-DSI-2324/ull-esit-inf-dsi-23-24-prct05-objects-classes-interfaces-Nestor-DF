import { BaseBibliographicElement } from "./BaseBibliographicElement";

export class BibliographicManager {
  elements: BaseBibliographicElement[] = [];

  showTable(): void {
    console.table(this.elements);
  }

  filter(filters: { keyword?: string; title?: string; author?: string; date?: string; publisher?: string }): void {
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
    date?: string;
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
