/// <reference types = "cypress"

context("Team Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should find team button on homepage", () => {
    cy.get("button").contains("Our Team");
  });
});
