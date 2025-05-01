describe('File Upload', () => {
    it('uploads a file successfully', () => {
      cy.visit('/file-upload');
      cy.get('input[type="file"]').attachFile('sample.pdf'); // in fixtures
      cy.get('.custom-file > .btn').contains('Submit').click()
      // This should be sufficient given there is no actual network request to spy on
      cy.contains('You have successfully uploaded').should('exist');
      cy.contains('sample.pdf').should('exist');
    });
  });