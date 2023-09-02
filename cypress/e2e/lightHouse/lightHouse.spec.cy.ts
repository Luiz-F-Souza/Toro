/// <reference types="Cypress"/>
import '@cypress-audit/lighthouse/commands';


describe("light house tests", () => {
  
  it('should have minimum requirement for accessibility, best practices and seo', () => {
    cy.visit('/')

    cy.lighthouse({
      performance: 0, // Teste de performance pelo cy não costumam funcionar bem. testar quando estiver com a build pronta.
      accessibility: 90,
      "best-practices": 90,
      seo: 90
    })
  })
})
