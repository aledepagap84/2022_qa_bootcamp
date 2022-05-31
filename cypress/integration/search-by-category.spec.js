///<reference types ="Cypress"/>

const { title } = require("process");

describe('Search from Category', ()=> {
    beforeEach(() => {
        cy.visit('/');
    })
    it ('should search by category and add product to cart', ()=> {
        //Go to Categories and select 1 (Hoodies)
        cy.get('a[href*=hoodies]').click();
        //Select the first tile/product => add to cart
        cy.get('.add_to_cart_button').first().click();
        
        // Go to cart and validate
        cy.get('li .added_to_cart').click();
        //Validate
        cy.url().should('include', '/cart');
        cy.title().should('include', 'Cart');
        cy.contains('[data-title="Product"]', 'Hoodie with Logo').should('be.visible');
        cy.contains('[data-title="Subtotal"]', '45.00').should('be.visible');
    });
})