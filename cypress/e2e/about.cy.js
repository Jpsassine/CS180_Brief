/// <reference types = "cypress"

context("About Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("About page button should load", () => {
    cy.get("h2").contains("About Us");
  });
});
