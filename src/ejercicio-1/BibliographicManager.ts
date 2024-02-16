import { BibliographicElement } from "./BibliographicElement";

export class BibliographicManager {
  elements: BibliographicElement[] = [];

  showAllElements(): void {
    console.table(this.elements);
  }

  searchByKeyword(keyword: string): BibliographicElement[] {
    return this.elements.filter((element) =>
      element.keywords.includes(keyword)
    );
  }

  searchByAuthor(author: string): BibliographicElement[] {
    return this.elements.filter((element) => element.authors.includes(author));
  }

  ExportIEEEFormat(elements: BibliographicElement[]): string {
    const ieeeFormatResults = elements.map((result) =>
      result.generateIEEEFormat()
    );
    return ieeeFormatResults.join("\n");
  }
}
