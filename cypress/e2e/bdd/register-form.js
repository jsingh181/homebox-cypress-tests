import { faker } from '@faker-js/faker';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let testData = {};

Given('I am on the registration page', () => {
  cy.visit('/register');
});

When('I enter valid registration details', () => {
  testData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: '07' + faker.string.numeric(9),
    email: faker.internet.email(),
    password: faker.internet.password()
  };

  cy.get('#firstName').type(testData.firstName);
  cy.get('#lastName').type(testData.lastName);
  cy.get('#phone').type(testData.phone);

  cy.get('#countries_dropdown_menu')
    .find('option')
    .then((options) => {
      const index = Math.floor(Math.random() * (options.length - 1)) + 1;
      const value = options[index].value;
      cy.get('#countries_dropdown_menu').select(value);
    });

  cy.get('#emailAddress').type(testData.email);
  cy.get('#password').type(testData.password);
  cy.get('input[name="password"]').should('have.attr', 'type', 'password'); // mask check
  cy.get('.form-check-label').contains('agree with the terms').click();
});

When('I enter an invalid email format', () => {
  cy.get('#emailAddress').type('abc');
  cy.get('#password').type('wrongpass');
});

When('I submit the registration form', () => {
  cy.get('#registerBtn').click();
});

Then('I should see a confirmation that the account was created', () => {
  cy.contains('The account has been successfully created!');
});

Then('I should see an invalid email error message', () => {
  cy.get('#message').should('exist');

  cy.get('#emailAddress').then(($input) => {
    expect($input[0].checkValidity()).to.be.false;
    expect($input[0].validationMessage).to.include("Please include an '@' in the email address.");
  });
});
