import 'cypress-file-upload' // required for file upload test

Cypress.Commands.add('login', () => {
  cy.visit('/auth_ecommerce');
  cy.contains('Login - Shop');
  cy.get('#email').type('admin@admin.com');
  cy.get('#password').type('admin123');
  cy.get('#submitLoginBtn').click()
});