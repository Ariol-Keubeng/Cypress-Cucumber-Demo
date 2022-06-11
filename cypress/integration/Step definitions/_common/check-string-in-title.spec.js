import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});

Then(`I click {string} on admin page`, (action) => {
  cy.title().should("include", action);
});
