///<reference types ="Cypress"/>

import { homePageSearch } from '../page-objects/pages/home-page-search';
const { title } = require("process");


describe('Search from Product Name', ()=> {
    beforeEach(() => {
        cy.visit('/');
    })
  
    it ('should search by Product Name and verify the Product is showing up', ()=> {
        const searchCriteria = 'tshirt';
        homePageSearch.searchHomePage(searchCriteria);
        homePageSearch.elements.searchTitle().invoke('text').should('contain', 'Search results: “'+ searchCriteria +'”');
        homePageSearch.elements.showingSearch().invoke('text').should('contain', 'Showing all');
    });
})