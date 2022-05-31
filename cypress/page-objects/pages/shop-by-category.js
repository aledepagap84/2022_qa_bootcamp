export class shopByCategory{
    elements = {
        getCategoryByTextLnk: (productTitle) => cy.get(`a[href*=${productTitle}]`),
    }
    selectCategory(category) {
        this.elements.getCategoryByTextLnk(category).click();
    }
}

export const shopByCategoryPage = new shopByCategory();
