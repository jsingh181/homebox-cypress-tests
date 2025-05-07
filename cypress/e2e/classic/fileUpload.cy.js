describe('File Upload', () => {
    it('uploads a file successfully', () => {
      const fileName = 'sample.pdf';

      cy.visit('/file-upload'); // only directory not full URL
      cy.get('input[type="file"]').attachFile('sample.pdf'); // in fixtures
      cy.get('.custom-file > .btn').contains('Submit').click()

      // This should be sufficient given there is no actual network request to spy on
      cy.get('#file_upload_response')
        .should('contain.text', fileName); // assert file name is present
    });
  });