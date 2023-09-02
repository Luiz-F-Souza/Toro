/// <reference types="Cypress"/>
import 'cypress-axe/dist'

describe("Testing Accessibilitys rules", () => {


  it("should respect accessibility rules", () => {
    cy.visit('/')
    cy.injectAxe()
    cy.checkA11y()
  });


});