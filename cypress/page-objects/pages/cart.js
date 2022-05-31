export class Cart {
    url = '/cart';
    title = 'Cart';
    
    elements = {
        getProductNameLnk: () => cy.get('[data-title="Product"]'),
        getProductSubtotalLbl: () => cy.get('[data-title="Subtotal"]'),
    
    }

}

export const CartPage = new Cart();