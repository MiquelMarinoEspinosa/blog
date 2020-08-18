describe("create a blog and accessing to its details", () => {
  it("creates the blog", () => {
    cy.visit("/");
    cy.contains("Add a New Blog").click();
    const blogTitle = "E2E test blog title";
    cy.get("input[type=text]")
      .type(blogTitle)
      .should("have.value", blogTitle);
    const blogContent = "E2E test blog content";
    cy.get("textarea")
      .type(blogContent)
      .should("have.value", blogContent);

    cy.get("input[value=vue]").click();
    cy.get("input[value=nodejs]").click();
    cy.get("select").select("Mike Fernandez");
    cy.get("button").click();
    cy.contains("h3", "Thanks for adding your post");
  });

  it("show the blog in the list", () => {
    cy.visit("/");
    const blogTitle = "E2E TEST BLOG TITLE";
    const blogContent = "E2E test blog content...";
    cy.contains("h2", blogTitle);
    cy.contains("article", blogContent);
  });

  it("access to the blog details", () => {
    cy.visit("/");
    const blogTitle = "E2E test blog title";
    cy.get("input[type=text]").type(blogTitle);
    cy.contains("h2", "E2E TEST BLOG TITLE")
      .first()
      .click();
    const blogContent = "E2E test blog content";
    const categories = ["vue", "nodejs"];
    const author = "Mike Fernandez";
    cy.url().should("include", "/blog");
    cy.contains("h1", blogTitle);
    cy.contains("article", blogContent);
    cy.contains("p", author);
    categories.forEach((category) => cy.contains("li", category));
  });
});
