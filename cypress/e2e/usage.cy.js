/// <reference types = "cypress"

context("Usage Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("Usage page button should load", () => {
      cy.get("h2").contains("Usage Page")
    });
  });