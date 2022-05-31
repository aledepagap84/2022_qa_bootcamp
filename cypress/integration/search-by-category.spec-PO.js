///<reference types ="Cypress"/>
import { shopByCategoryPage } from '../page-objects/pages/shop-by-category'
import { ProductTile } from '../page-objects/pages/product-tile';
import { CartPage } from '../page-objects/pages/cart';
const { title } = require("process");

describe('Search from Type of Clothe', ()=> {
    beforeEach(() => {
        cy.visit('/');
    })
  
    it ('should search by category and add product to cart', ()=> {
        shopByCategoryPage.selectCategory('hoodies');
        ProductTile.addToCart(0);
        ProductTile.goToCart();
        cy.url().should('include', CartPage.url);
        cy.title().should('include', CartPage.title);
        CartPage.elements.getProductNameLnk().invoke('text').should('contain', 'Hoodie with Logo');
        CartPage.elements.getProductSubtotalLbl().invoke('text').should('contain', '45.00');
    });
})