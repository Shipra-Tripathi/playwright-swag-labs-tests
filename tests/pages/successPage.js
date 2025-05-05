class SuccessPage {
    constructor(page) {
      this.page = page;
      this.successMessage = page.locator('.complete-header');

    }

    async verifySuccess() {
        const text = await this.successMessage.textContent();
        console.log("Success Message:", text);
      }
}


module.exports = { SuccessPage };