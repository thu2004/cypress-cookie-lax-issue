describe('test redirect', () => {
  it('it', () => {
    cy.visit('https://localhost:3000');
    cy.get('button').click();
    cy.origin('https://oauth-simulator.mocklab.io', () => {
      cy.get('body').contains('The XSRF-TOKEN is pressent')
    })
  });
});
