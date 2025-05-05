class CheckoutPage {
constructor(page){

this.page = page;
// Locators for checkout button and form fields
this.checkoutBtn = page.locator('#checkout');
this.firstName = page.locator('#first-name');
this.lastName = page.locator('#last-name');
this.postalCode = page.locator('#postal-code');
this.continueBtn = page.locator('#continue');
 // Locator to check payment info and finish button
 this.paymentInfo = page.locator("//div[text()='Payment Information:']");
this.finishBtn = page.locator('#finish')

}
 
async checkout(first, last, zip) {
    await this.checkoutBtn.click();
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueBtn.click();
  }

  async finishOrder() {
     // Get the payment text and print it to console
    const info = await this.paymentInfo.textContent();
    console.log("Payment Info:", info); 
    await this.finishBtn.click();
  }
}

module.exports = { CheckoutPage };


