// https://docs.cypress.io/api/introduction/api.html

describe("Navigate through the site", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "All Blog Articles");
  });

  it("Navigate to add new blog", () => {
    cy.visit("/");
    cy.contains("Add a New Blog").click();
    cy.url().should("include", "/add");
    cy.contains("h2", "Add a New Blog Post");
  });

  it("Navigate to add new blog and navigate back to home", () => {
    cy.visit("/");
    cy.contains("Add a New Blog").click();
    cy.url().should("include", "/add");
    cy.contains("Blog").click();
    cy.url().should("include", "/");
  });
});
