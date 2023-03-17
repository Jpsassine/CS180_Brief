/// <reference types = "cypress"

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should find button on homepage", () => {
    cy.get("button").contains("Login")
  });
});