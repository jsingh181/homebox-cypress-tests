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
    });
  
    it('Handles invalid login', () => {
      cy.get('#email').type('wrong@qa.com');
      cy.get('#password').type('wrongpass');
      cy.contains('Login').click();
      cy.contains('Invalid credentials').should('exist');
    });
  });
  