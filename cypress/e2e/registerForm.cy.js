import { faker } from '@faker-js/faker';

describe ('Registation test', () => {
    it('Submits the registration form', () => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const phone = '07' + faker.string.numeric(9);
        const email = faker.internet.email();
        const password = faker.internet.password();
        
        cy.visit('/register')
        cy.get('#firstName').type(firstName)
        cy.get('#lastName').type(lastName)
        cy.get('#phone').type(phone)
        cy.get('#countries_dropdown_menu')
            .find('option') // locate all elements within the dropdown
            .then(options => {
            const index = Math.floor(Math.random() * (options.length - 1)) + 1; // will skip placeholder
            const value = options[index].value; // retrieves the value attr of whats been selected
            cy.get('#countries_dropdown_menu').select(value); // use native select element
        });
        cy.get('#emailAddress').type(email)
        cy.get('#password').type(password)
        cy.get('input[name="password"]').should('have.attr', 'type', 'password'); // password masking
        cy.get('.form-check-label').contains('agree with the terms').click()
        cy.get('#registerBtn').click()

        // check confirmation of successful registration
        cy.contains('The account has been successfully created!')
    });

    it('Handles invalid email format', () => {
        cy.visit('/register')
        cy.get('#emailAddress').type('abc')
        cy.get('#password').type('wrongpass');
        cy.get('#registerBtn').click()
        cy.get('#message').should('exist'); // toast message
    
        cy.get('#emailAddress').then(($input) => {
          expect($input[0].checkValidity()).to.be.false;
          expect($input[0].validationMessage).to.include("Please include an '@' in the email address."); // Can vary per browser
          })
    });
});