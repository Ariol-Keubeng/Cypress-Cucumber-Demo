/// <reference types="cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Then(`I type my {string}`, (field) => {
  const id = Math.floor(Math.random() * 9)
  cy.log(id)

  cy.fixture("users").then((users) => {
    cy.get(`[data-test=${field}]`)
      .type(users[id][field], { delay: 100 })

    cy.get(`[data-test=${field}]`)
      .should('have.value', users[id][field])
  });
})

Given("login form is cleared", () => {
  cy.get('[data-test="email"]')
    .clear()
    .should('have.value', '')

  cy.get(`[data-test='password']`)
    .clear()
    .should('have.value', '')
})
