/// <reference types="cypress" />
import { Then, Given } from "cypress-cucumber-preprocessor/steps";

Given(`I open the {string} page`, (page) => {
  cy.visit("/" + page);
  cy.url().should('contain', page)
});

Then(`{string} page opens`, (page) => {
    cy.visit("/" + page);
    cy.url().should('contain', page)
  });
