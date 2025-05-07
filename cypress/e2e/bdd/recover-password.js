import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';

let email; // Declare a shared variable

Given('I am on the password recovery page', () => {
  cy.visit('/recover-password');
  cy.contains('Recover Password');
});

When('I submit a valid email for password recovery', () => {
  const email = faker.internet.email();
  cy.get('#email').type(email);
  cy.get('#recover-pw-form > #recover-password').click();
});

Then('I should see a confirmation message that an email has been sent to the provided address', () => {
  cy.get('#message')
    // Ensure that the email entered by the user is included in the confirmation
    .should('contain.text', `An email with the new password has been sent to ${email}`);
});

When('I submit the form without entering an email', () => {
  cy.get('#recover-pw-form > #recover-password').click();
});

Then('I should see a validation message asking to fill in the email field', () => {
  cy.get('#email').then(($input) => {
    expect($input[0].checkValidity()).to.be.false;
    expect($input[0].validationMessage).to.eq('Please fill in this field.');
  });
});
