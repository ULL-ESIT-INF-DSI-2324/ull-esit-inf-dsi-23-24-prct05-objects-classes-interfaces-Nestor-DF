import "mocha";
import { expect } from "chai";
import {
  Patent,
  TechnicalReport,
  TechnicalRules,
  AcademicWorks,
  JournalArticle,
  Book,
} from "../../src/ejercicio-1/EspecificBibliographicElements";

describe("Patent", () => {
  it("should export to IEEE format correctly", () => {
    const patent = new Patent(
      "Title",
      ["Author 1", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "10-20",
      "Publisher",
      "Country",
      "Patent Number"
    );

    const expected = 'Author 1, Author 2, "Title," Country Patent Number, Feb 17, 2024.';
    const result = patent.exportToIEEEFormat();

    expect(result).to.equal(expected);
  });
});

describe("TechnicalReport", () => {
  it("should export to IEEE format correctly", () => {
    const technicalReport = new TechnicalReport(
      "Title",
      ["Author 1", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "10-20",
      "Publisher",
      "Institution",
      "Country",
      "Report Type",
      "Report Number"
    );

    const expected = 'Author 1, Author 2, "Title," Institution, Country, Report Type Report Number, Feb 17, 2024.';
    const result = technicalReport.exportToIEEEFormat();

    expect(result).to.equal(expected);
  });
});

describe("TechnicalRules", () => {
  it("should export to IEEE format correctly", () => {
    const technicalRules = new TechnicalRules(
      "Title",
      ["Author 1"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "10-20",
      "Publisher",
      "Standard Number"
    );

    const expected = "Title, Standard Number, Author 1, 2024.";
    const result = technicalRules.exportToIEEEFormat();

    expect(result).to.equal(expected);
  });
});

describe("AcademicWorks", () => {
  it("should export to IEEE format correctly", () => {
    const academicWork = new AcademicWorks(
      "Title",
      ["Author 1", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "10-20",
      "Publisher",
      "Type",
      "Department",
      "Institution",
      "Country"
    );

    const expected = 'Author 1, Author 2, "Title," Type, Department, Institution Country, 2024.';
    const result = academicWork.exportToIEEEFormat();

    expect(result).to.equal(expected);
  });
});

describe("JournalArticle", () => {
  it("should export to IEEE format correctly", () => {
    const journalArticle = new JournalArticle(
      "Title",
      ["Author 1", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "Publisher",
      "Journal",
      "Volume",
      1,
      "10-20"
    );

    const expected = 'Author 1, Author 2, "Title," Journal, Volume, 1 10-20, Feb 2024.';
    const result = journalArticle.exportToIEEEFormat();

    expect(result).to.equal(expected);
  });
});

describe("Book", () => {
  it("should export to IEEE format correctly", () => {
    const book = new Book(
      "Title",
      ["Author 1", "Author 2"],
      ["Keyword 1", "Keyword 2"],
      "Abstract",
      new Date(),
      "10-20",
      "Edition",
      "Place",
      "Publisher"
    );

    const expected = "Author 1, Author 2, Title, Edition. Place: Publisher, 2024.";
    const result = book.exportToIEEEFormat();

    expect(result).to.equal(expected);
  });
});
