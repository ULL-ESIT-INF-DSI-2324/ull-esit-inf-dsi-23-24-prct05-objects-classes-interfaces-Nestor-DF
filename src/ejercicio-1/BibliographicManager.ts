import { BaseBibliographicElement } from "./BaseBibliographicElement";

/**
 * @class BibliographicManager class that manages a list of bibliographic elements and provides methods to filter and export them.
 */
export class BibliographicManager {
  elements: BaseBibliographicElement[] = [];

  constructor(list: BaseBibliographicElement[] = []) {
    this.elements = list;
  }

  /**
   * Method that adds a bibliographic element to the list.
   * @param element Is the bibliographic element to add.
   */
  addElement(element: BaseBibliographicElement): void {
    this.elements.push(element);
  }

  /**
   * Method that shows the list of bibliographic elements in a table format.
   */
  showTable(): void {
    console.table(this.elements);
  }

  /**
   * Method that filters the list of bibliographic elements and shows the result in a table format.
   * @param filters Is an object with the filters to apply to the list of bibliographic elements.
   */
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

  /**
   * Method that exports the list of bibliographic elements in IEEE format.
   * @param filters Is an object with the filters to apply to the list of bibliographic elements.
   * @returns The list of bibliographic elements in IEEE format.
   */
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
