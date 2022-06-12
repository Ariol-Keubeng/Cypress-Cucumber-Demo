/// <reference types="cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";


Given("user is logged in", () => {
    cy.visit("/" + 'login')
    const id = Math.floor(Math.random() * 9)

    cy.fixture("users").then((users) => {
        cy.get(`[data-test='email']`)
            .type(users[id]['email'], { delay: 100 })

        cy.get(`[data-test='email']`)
            .should('have.value', users[id]['email'])

        cy.get(`[data-test='password']`)
            .type(users[id]['password'], { delay: 100 })

        cy.get(`[data-test='password']`)
            .should('have.value', users[id]['password'])
    });
})


