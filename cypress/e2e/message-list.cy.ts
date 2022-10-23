import { Timestamp } from "firebase/firestore";

describe("show messages", () => {
  afterEach(() => {
    cy.teardown();
  });
  it("passes", () => {
    cy.task("createUser", {
      email: "taro@example.test",
      password: "test1234",
      uid: "USERUID",
    });
    cy.task("createDoc", {
      path: "messages/message1",
      data: {
        content: "test1",
        senderId: "USERUID",
        createdAt: Timestamp.fromDate(new Date(2022, 0, 2, 1)),
      },
    });
    cy.task("createDoc", {
      path: "messages/message2",
      data: {
        content: "test2",
        senderId: "USERUID",
        createdAt: Timestamp.fromDate(new Date(2022, 0, 2, 2)),
      },
    });
    cy.visit("/");
    cy.get(':nth-child(1) > .input').type('taro@example.test');
    cy.get(':nth-child(2) > .input').clear();
    cy.get(':nth-child(2) > .input').type('test1234');
    cy.get('.btn').should('have.text', ' ログイン ');
    cy.get('.btn').click();
    cy.get(':nth-child(1) > .message-item').should('have.text', 'test1');
    cy.get(':nth-child(2) > .message-item').should('have.text', 'test2');
  });
});
