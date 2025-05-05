// Import the Playwright 'Page' class from the test module
const{expect } = require('@playwright/test');

class LoginPage {

constructor(page){ 
this.page = page;

// Define locators for the login fields and login button.
this.usernameInput = page.locator('#user-name');
this.passwordInput = page.locator('#password');
this.loginButton = page.locator('#login-button');
}

async goto() {
    await this.page.goto('https://www.saucedemo.com'); // Navigate to the login page
  }


  async login(username, password){  //create a method to fill login credentials

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
 module.exports = {LoginPage};  //let use in other test files like login.spec.js


