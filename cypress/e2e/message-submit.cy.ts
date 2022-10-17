describe('empty spec', () => {
  afterEach(() => {
    cy.teardown()
  })
  it('passes', () => {
    cy.visit('/')
    cy.task('createUser', {email: 'taro@example.test', password: 'test1234', uid: 'USERUID'})
    cy.get(':nth-child(1) > .input').type('taro@example.test');
    cy.get(':nth-child(2) > .input').type('test1234');
    cy.get('.btn').click();
    cy.get('.message-form').type('test');
    cy.get('.btn').click();
    cy.get('.message-item').should('have.text', 'test');
  })
})