import { faker } from '@faker-js/faker';

describe('E-commerce Flow', () => {

    beforeEach(() => {
      cy.visit('/auth_ecommerce');
    });
  
    it('Logs in with valid credentials', () => {
      cy.login();
      cy.contains('SHOPPING CART')
    });
  
    it('Logs in without credentials', () => {
        cy.get('#submitLoginBtn').click()
    });
  
    it('Add items to the cart', () => {
      cy.login();
      cy.get(':nth-child(1) > .shop-item-details > .btn').click();
      cy.get('.cart-item-title').contains('Apple iPhone 12, 128GB');
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
    });
  
    it('Handles invalid login', () => {
      cy.get('#email').type('wrong@qa.com');
      cy.get('#password').type('wrongpass');
      cy.get('#submitLoginBtn').click()
      cy.contains('Bad credentials! Please try again!').should('exist');
    });
  });
  