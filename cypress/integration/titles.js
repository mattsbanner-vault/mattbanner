/// <reference types="cypress" />

let siteName = 'Matt Banner';

context('Titles', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Check Home', () => {
    cy.title().should('equal', 'Home | ' + siteName);
  })

  it('Check 404', () => {
    cy.visit('/404');
    cy.title().should('equal', '404 - Not Found | ' + siteName);
  })
})
