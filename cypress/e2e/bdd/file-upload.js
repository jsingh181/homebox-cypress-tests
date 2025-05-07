import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import 'cypress-file-upload';

const fileName = 'sample.pdf';

Given('I am on the file upload page', () => {
  cy.visit('/file-upload');
});

When('I select a file to upload', () => {
  cy.get('input[type="file"]').attachFile(fileName);
});

When('I submit the file', () => {
  cy.get('.custom-file > .btn').contains('Submit').click();
});

Then('I should see the uploaded file name in the confirmation', () => {
  cy.get('#file_upload_response').should('contain.text', fileName);
});
