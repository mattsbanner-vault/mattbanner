/// <reference types="cypress" />

let siteName = '';

context('Pages', () => {
  beforeEach(() => {
    //
  })

  // Loop through all of the pages and check they have a title in the correct format.
  it('Page Titles', () => {
    cy.fixture('pages').then(pages => {
      let siteName = Cypress.env('siteName');

      for (let page in pages) {
        if (pages.hasOwnProperty(page)) {
          let pageTitle = pages[page].title === 'Home' ? siteName : pages[page].title;

          cy.visit(pages[page].url);
          cy.title().should('equal', pages[page].title + ' | ' + siteName);
          cy.get('h1').should('contain', pageTitle);
        }
      }
    });
  })

  // Loop through all of the pages and check they have the correct footer text.
  it('Footer Text', () => {
    let siteName = Cypress.env('siteName');

    cy.fixture('pages').then(pages => {
      for (let page in pages) {
        if (pages.hasOwnProperty(page)) {
          cy.visit(pages[page].url);
          cy.get('footer')
              .should('contain', '© ' + new Date().getFullYear() + ' ' + siteName + '. All rights reserved.');
        }
      }
    });
  })

  // Check the homepage "Contact Me" button is set to prompt a mail dialog to the correct email address.
  it('Contact Button', () => {
    let emailAddress = Cypress.env('emailAddress');

    cy.visit('/');
    cy.get('#contact-me-button')
        .should('have.attr', 'href').and('equal', 'mailto:' + emailAddress);
  })


})
