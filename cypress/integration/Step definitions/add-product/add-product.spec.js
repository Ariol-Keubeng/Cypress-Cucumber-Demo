/// <reference types="cypress" />

import { Then } from "cypress-cucumber-preprocessor/steps";


Then('go back home', () => {
    cy.log("step executed.")
})