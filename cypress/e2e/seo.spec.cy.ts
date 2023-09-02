/// <reference types="Cypress"/>

describe("Testing SEO Rules for HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should contain only 01 h1 per page", () => {
    cy.get("h1").should("have.length", 1);
  });

  it("should always find estimated width and height on img tags and have alt setted", () => {
    cy.get("img").each(img => {
      expect(img, 'image must contain alt').to.have.attr('alt')
      expect(img, 'image must contain estimated width').to.have.attr('width')
      expect(img, 'image must contain estimated height').to.have.attr('height')
    })
  });
});
