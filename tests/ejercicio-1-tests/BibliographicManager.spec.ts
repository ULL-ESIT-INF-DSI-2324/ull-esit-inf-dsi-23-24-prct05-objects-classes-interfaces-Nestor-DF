import "mocha";
import { expect } from "chai";
import { BibliographicManager } from "../../src/ejercicio-1/BibliographicManager";
import {
  Patent,
  TechnicalReport,
  TechnicalRules,
  AcademicWorks,
  JournalArticle,
  Book,
} from "../../src/ejercicio-1/EspecificBibliographicElements";

describe("BibliographicManager", () => {
  let bibliographicManager: BibliographicManager;

  beforeEach(() => {
    const patente = new Patent(
      "Title",
      ["Author 1", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "10",
      "Publisher",
      "Country",
      "Patent Number"
    );
    const informeTecnico = new TechnicalReport(
      "Title",
      ["Author 1", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "10",
      "Publisher",
      "Institution",
      "Country",
      "Report Type",
      "Report Number"
    );
    const normaTecnica = new TechnicalRules(
      "Title",
      ["Author 1", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "10",
      "Publisher",
      "Standard Number"
    );
    const trabajosAcademicos = new AcademicWorks(
      "Title",
      ["Author 1", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "10",
      "Publisher",
      "Type",
      "Department",
      "Institution",
      "Country"
    );
    const articuloRevista = new JournalArticle(
      "Holaa",
      ["Jhon", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "Publisher",
      "Journal",
      "Volume",
      1,
      "Pages"
    );
    const libro = new Book(
      "Holaa",
      ["Jhon", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "10",
      "Edition",
      "Place",
      "Publisher"
    );
    bibliographicManager = new BibliographicManager([
      patente,
      informeTecnico,
      normaTecnica,
      trabajosAcademicos,
      articuloRevista,
      libro,
    ]);
  });

  it("should export elements in IEEE format based on given filters", () => {
    const filters = { title: "Holaa", author: "Jhon" };
    const expectedResults = 'Jhon, Author 2, "Holaa," Journal, Volume, 1 Pages, Feb 2024.\nJhon, Author 2, Holaa, Edition. Place: Publisher, 2024.';
    const actualResults = bibliographicManager.exportIEEEFormat(filters);
    expect(expectedResults).to.equal(actualResults);
  });
});
