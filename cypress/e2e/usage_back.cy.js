/// <reference types = "cypress"

context("Usage Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/usagepage");
  });

  it("Back button should load", () => {
    cy.get("button").contains("Back");
  });
});
