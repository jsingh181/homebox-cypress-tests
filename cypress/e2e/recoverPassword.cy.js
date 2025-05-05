import { faker } from '@faker-js/faker';

describe('Password reset flow', () => {

    beforeEach(() => {
      cy.visit('/recover-password');
      cy.contains('Recover Password')
    });
  
    it('Submit email reset', () => {
        const email = faker.internet.email();
        cy.get('#email').type(email)
        cy.get('#recover-pw-form > #recover-password').click()
        cy.get('#message').contains('An email with the new password has been sent to')
         .and('contain.text', email) // Verify toast contains email sent to
    });
  
    it('Recover password without email', () => {
        cy.get('#recover-pw-form > #recover-password').click()
        
        // Check that the input is considered invalid since browser validation is not exposed via DOM
        cy.get('#email').then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.eq('Please fill in this field.'); // Can vary per browser
        });
    });
});
  