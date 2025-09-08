class CuraLoginPage {

constructor(page){   
this.page = page;
this.usernameInput = page.locator('#txt-username');
this.passwordInput = page.locator('#txt-password');
this.loginBtn = page.locator('#btn-login');
this.ErrorMsg = page.locator("//p[@class='lead text-danger']");  //invalid login msg locator
this.makeAppointmentHeading = page.locator('h2:has-text("Make Appointment")');

}

//go to login page 
async goto(){
await this.page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login')

}


//perform login 
async login(username, password){
await this.usernameInput.fill(username);
await this.passwordInput.fill(password);
await this.loginBtn.click();

}

// Assertion helper for invalid login
  async expectInvalidLoginMessage() {
    await expect(this.ErrorMsg).toHaveText(
      'Login failed! Please ensure the username and password are valid.'
    );
}

}
module.exports = {CuraLoginPage};