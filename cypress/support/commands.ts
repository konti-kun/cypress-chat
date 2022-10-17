/// <reference types="cypress" />

Cypress.Commands.add('teardown', () => {
  cy.exec(
    `curl -v -X DELETE "http://localhost:8080/emulator/v1/projects/cypress-chat-test/databases/(default)/documents"`
  );
  cy.exec(`curl -v -X DELETE "http://localhost:9099/emulator/v1/projects/cypress-chat-test/accounts"`);
});

declare namespace Cypress {
  interface Chainable {
    teardown(): Cypress.Chainable<void>;
  }
}