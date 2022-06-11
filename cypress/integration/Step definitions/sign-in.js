/// <reference types="cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Then(`I type my {string}`, (field) => {
  const id = Math.floor(Math.random() * 10)

  cy.fixture("users").then((users) => {
    cy.get(`[data-test=${field}]`)
      .type(users[id][field], { delay: 100 })

    cy.get(`[data-test=${field}]`)
      .should('have.value', users[id][field])
  });
})

Given("form is cleared", () => {
  cy.get('[data-test="email"]')
    .clear()
    .should('have.value', '')

  cy.get(`[data-test='password']`)
    .clear()
    .should('have.value', '')
})
