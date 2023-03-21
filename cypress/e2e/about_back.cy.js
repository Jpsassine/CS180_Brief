/// <reference types = "cypress"

context("About Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about");
  });

  it("Back button should load", () => {
    cy.get("button").contains("Back");
  });
});
