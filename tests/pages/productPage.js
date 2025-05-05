const {expect} = require('@playwright/test')
class ProductPage{

    constructor(page){
    this.page = page;
    // Define locators for the Add to Cart button and Cart icon
    this.addToCart = page.locator("#add-to-cart-sauce-labs-fleece-jacket");
    this.shoppingCart = page.locator(".shopping_cart_badge");



    }


    async addProductToCart(){
        await this.addToCart.click(); // Click on the Add to Cart button
        await this.shoppingCart.click();
    }
}

module.exports= {ProductPage} ;


