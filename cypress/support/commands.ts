/// <reference types="cypress" />

Cypress.Commands.add('teardown', () => {
  cy.exec(
    `curl -v -X DELETE "http://localhost:8080/emulator/v1/projects/kontikun-simple-chat/databases/(default)/documents"`
  );
  cy.exec(`curl -v -X DELETE "http://localhost:9099/emulator/v1/projects/kontikun-simple-chat/accounts"`);
});

declare namespace Cypress {
  interface Chainable {
    teardown(): Cypress.Chainable<void>;
  }
}