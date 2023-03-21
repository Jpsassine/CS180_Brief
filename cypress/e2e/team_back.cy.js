/// <reference types = "cypress"

context("Team Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/ourteam");
  });

  it("Back button should load", () => {
    cy.get("button").contains("Back");
  });
});
