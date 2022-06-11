/// <reference types="cypress" />
import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`Error {string} shows`, (msg) => {
  cy.contains(msg)
});
