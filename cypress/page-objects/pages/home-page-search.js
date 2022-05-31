export class HomePageSearch{

    elements= {
        inputSearch:(searchItem)=>cy.get('[id="woocommerce-product-search-field-0"]'),
        searchTitle: ()=> cy.get('h1.woocommerce-products-header__title'),
        showingSearch: () => cy.get('p.woocommerce-result-count'),
       
    }

    searchHomePage(searchIt)  {
        this.elements.inputSearch().type(searchIt).type('{enter}'); 

    }

    searchResult(searchIt)  {
        this.elements.searchTitle().type(searchIt).type('{enter}'); 

    }
    
    showingResultsSearch(searchIt){
        this.elements.showingSearch().type(searchIt).type('{enter}'); 
    }
/*
    verifySearchHomePage() {

    }*/
}

export const homePageSearch = new HomePageSearch();