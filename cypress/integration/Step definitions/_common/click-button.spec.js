/// <reference types="cypress" />
import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I click the {string} button`, (btn) => {
  cy.get(`[data-test=${btn}]`).click()
});
