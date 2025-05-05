import { faker } from '@faker-js/faker';

describe('E-commerce Cart Flow', () => {

    beforeEach(() => {
      // Visit this page specifically for each test below
      cy.visit('/auth_ecommerce');
    });
  
  it('Logs in with valid credentials', () => {
    cy.login(); // From custom command, values held externally
    cy.contains('SHOPPING CART')
  });
  
  it('Logs in without credentials', () => {
    cy.get('#submitLoginBtn').click()
    cy.get('#loginSection > #message').contains('Bad credentials!')
  });
  
  it('Add items to the cart', () => {
    cy.login();
    cy.get(':nth-child(1) > .shop-item-details > .btn').click();
    cy.get('.shop-item-title')
      .contains('Apple iPhone 12, 128GB') // verify item title
    cy.get('.shop-item-price')
      .contains('$905.99'); // verify item price
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Shipping Details')

    // Use faker to generate some test data for shipping details form
    const ukMobile = '07' + faker.string.numeric(9); // Uk-style number
    const street = faker.location.streetAddress();
    const city = faker.location.city();
      
    cy.get('#phone').type(ukMobile);
    cy.get(':nth-child(2) > .form-control').type(street);
    cy.get(':nth-child(3) > .form-control').type(city);

    cy.get('#countries_dropdown_menu')
          .find('option') // locate all elements within the dropdown
          .then(options => {
          const index = Math.floor(Math.random() * (options.length - 1)) + 1; // will skip placeholder
          const value = options[index].value; // retrieves the value attr of whats been selected
          cy.get('#countries_dropdown_menu').select(value); // use native select element
    });

  cy.get('#submitOrderBtn').click()

  // Confirmation that the order has gone through
  cy.get('#message').contains('Congrats! Your order of')
    cy.contains(street).should('be.visible');
    cy.contains(city).should('be.visible');

  // Log out of session
    cy.contains('Log Out').click()
    cy.contains('Login - Shop') // ensure user is redirected
  });
  
  it('Handles invalid login', () => {
    cy.get('#email').type('wrong@qa.com');
    cy.get('#password').type('wrongpass');
    cy.get('#submitLoginBtn').click()
    cy.get('#loginSection > #message').should('exist'); // toast message
  });

  it('Handles invalid email format', () => {
    cy.get('#email').type('abc');
    cy.get('#password').type('wrongpass');
    cy.get('#submitLoginBtn').click()
    cy.get('#loginSection > #message').should('exist'); // toast message

    cy.get('#email').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      expect($input[0].validationMessage).to.include("Please include an '@' in the email address."); // Can vary per browser
      })
    });

  it('Session maintenance after refresh', () => {
    // ensure that session persists after logging in and navigating away
    cy.login();
    cy.url().should('include', '/auth_ecommerce'); // Adjust redirect
    cy.reload();
    cy.url().should('include', '/auth_ecommerce'); // Ensure session persists
  });

  it('User profile after successful login', () => {
    cy.login();
    cy.get('.navbar').contains('Log Out') // verifies Log Out button presence
  });

  it('Should mask the password input field', () => {      
    // Type in the password field
    cy.passwordOnly();
    // Check that the input field is of 'type' password
    cy.get('input[name="password"]').should('have.attr', 'type', 'password');
  });

  it('Validate field placeholder text', () => {
    cy.get('#email').should('have.attr', 'placeholder', 'Enter email - insert admin@admin.com');
    cy.get('#password').should('have.attr', 'placeholder', 'Enter Password - insert admin123');
  });

  it.only('checking tab order accessibility', () => {
    // We need to use the cypress-real-events plugin for this test, import
    cy.get('#email').click()
    .realPress('Tab'); // simulates keyboard tab action
    cy.focused().should('have.attr', 'name', 'password');
  });

});
  