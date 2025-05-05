const { test, expect } = require('@playwright/test'); // Import test & assertion tools
const { LoginPage } = require('./pages/loginPage');   // Import login page
const { ProductPage } = require('./pages/productPage');
const { CheckoutPage } = require('./pages/checkoutPage');
const { SuccessPage } = require('./pages/successPage');


test('User should be able to add a product and complete payment successfully on Swag Labs', async ({ page }) => {

    // Create instances of all page objects
    const loginPage = new LoginPage(page);     //Capital class names
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);
    const successPage = new SuccessPage(page);

  //Navigate to login page
  await loginPage.goto();

  // Check if the URL is correct
  await expect(page).toHaveURL('https://www.saucedemo.com/');

  //Login with valid credentials
  await loginPage.login('standard_user','secret_sauce');

  //Add product to cart and go to cart
  await productPage.addProductToCart();


  // Fill checkout form
  await checkoutPage.checkout('Shipra', 'Tripathi', '2196');

  // Step 5: Verify payment info and complete purchase
  await checkoutPage.finishOrder();

  // Step 6: Verify success message is shown
  await successPage.verifySuccess();
});






