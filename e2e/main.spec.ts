describe('Main', () => {
  it('should contain default elements', () => {
    cy.visit('/')
    cy.get('.search-container').should('exist')
    cy.get('.card-container').should('exist')
    cy.get('footer').should('exist')
  });
});
