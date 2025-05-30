// cypress/e2e/demoblaze_cart_flow.cy.ts

describe('Demoblaze Cart Flow Tests', () => {
  const baseUrl = 'https://www.demoblaze.com';

  it('TC-001: Browse and click on a product from the homepage', () => {
    cy.visit(baseUrl);
    cy.contains('Samsung galaxy s6').click();
    cy.url().should('include', 'prod.html');
    cy.get('.name').should('contain.text', 'Samsung galaxy s6');
    cy.get('.price-container').should('exist');
    cy.get('#more-information').should('exist');
  });

  it('TC-002: Add a product to the cart', () => {
    cy.visit(baseUrl);
    cy.contains('Samsung galaxy s6').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });
    cy.contains('Add to cart').click();
  });

  it('TC-003: View cart after adding a product', () => {
    cy.visit(baseUrl);
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.wait(1000);
    cy.get('#cartur').click();
    cy.url().should('include', 'cart.html');
    cy.contains('Samsung galaxy s6').should('exist');
  });

  it('TC-004: Add multiple different products to the cart', () => {
    cy.visit(baseUrl);
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.wait(1000);
    cy.visit(baseUrl);
    cy.contains('Nokia lumia 1520').click();
    cy.contains('Add to cart').click();
    cy.wait(1000);
    cy.get('#cartur').click();
    cy.contains('Samsung galaxy s6').should('exist');
    cy.contains('Nokia lumia 1520').should('exist');
  });

  it('TC-005: Submit order with invalid data (Bug)', () => {
    cy.visit(baseUrl);
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.wait(1000);
    cy.get('#cartur').click();
    cy.contains('Place Order').click();

    cy.get('#name').type('xxx');
    cy.get('#country').type('yyy');
    cy.get('#city').type('zzz');
    cy.get('#card').type('000');
    cy.get('#month').type('00');
    cy.get('#year').type('00');
    cy.contains('Purchase').click();

    cy.get('.sweet-alert').should('be.visible');
    cy.get('.confirm').click();
    cy.visit(baseUrl);
  });
});
