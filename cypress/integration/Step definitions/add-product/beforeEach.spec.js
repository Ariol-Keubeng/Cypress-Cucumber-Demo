beforeEach(() => {
  cy.log(
    "This will run before every scenario of add-product feature test, but NEVER for other feature files"
  );
});
