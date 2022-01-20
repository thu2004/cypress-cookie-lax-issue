describe('test redirect', () => {
  it('it', () => {
    cy.visit('https://localhost:3000');
    cy.get('button').click();
    cy.get('body').contains('is present')
  });
});
