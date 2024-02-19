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
      new Date(2020, 4, 4),
      "10",
      "ULL",
      "Country",
      "Patent Number"
    );
    const informeTecnico = new TechnicalReport(
      "Title",
      ["Author 1", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(2020, 4, 4),
      "10",
      "ULL",
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
      new Date(2020, 4, 4),
      "10",
      "ULL",
      "Standard Number"
    );
    const trabajosAcademicos = new AcademicWorks(
      "Title",
      ["Author 1", "Author 2"],
      ["Keyword 1", "gatito"],
      "Abstract",
      new Date(2024, 1, 17),
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
      ["gatito", "Keyword 2"],
      "Abstract",
      new Date(2024, 1, 17),
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
      new Date(2024, 1, 17),
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

  it("should add a bibliographic element to the list", () => {
    const element = new Book(
      "New Book",
      ["Author 1", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(2024, 1, 17),
      "10",
      "Edition",
      "Place",
      "Publisher"
    );
    bibliographicManager.addElement(element);
    expect(bibliographicManager.elements).to.include(element);
  });

  it("should export elements in IEEE format based on given filters", () => {
    const filters = { title: "Holaa", author: "Jhon" };
    const expectedResults =
      'Jhon, Author 2, "Holaa," Journal, Volume, 1 Pages, Feb 2024.\nJhon, Author 2, Holaa, Edition. Place: Publisher, 2024.';
    const actualResults = bibliographicManager.exportIEEEFormat(filters);
    expect(expectedResults).to.equal(actualResults);
  });

  it("should export elements in IEEE format based on given filters", () => {
    const filters = { keyword: "gatito" };
    const expectedResults =
      'Author 1, Author 2, "Title," Type, Department, Institution Country, 2024.\nJhon, Author 2, "Holaa," Journal, Volume, 1 Pages, Feb 2024.';
    const actualResults = bibliographicManager.exportIEEEFormat(filters);
    expect(expectedResults).to.equal(actualResults);
  });

  it("should export elements in IEEE format based on given filters", () => {
    const filters = { date: new Date(2020, 4, 4), publisher: "ULL" };
    const expectedResults =
      'Author 1, Author 2, "Title," Country Patent Number, May 4, 2020.\nAuthor 1, Author 2, "Title," Institution, Country, Report Type Report Number, May 4, 2020.\nTitle, Standard Number, Author 1, Author 2, 2020.';
    const actualResults = bibliographicManager.exportIEEEFormat(filters);
    expect(expectedResults).to.equal(actualResults);
  });

  it("Table", () => {
    bibliographicManager.showTable();
  });
});
