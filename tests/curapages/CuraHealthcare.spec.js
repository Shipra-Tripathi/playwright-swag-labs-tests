const{test, expect}= require('@playwright/test'); // Import test & assertion tools
const{CuraLoginPage}= require('./CuraLoginPage');     //Import login page
const { AppointmentPag } = require('./AppointmentPag');//import appointment page 
const{SuccessPage} =require('./SuccessPage');  //import Successpage

// Run these tests in order: positive first, then negative
test('Positive:  valid login, make appointment, verify summary', async ({ page }) => {

const loginPage = new CuraLoginPage (page); //creating the object for all pages 
const appointment= new AppointmentPag(page);
const success= new SuccessPage(page);

//call login method and fill the username and password details
await loginPage.goto();
await loginPage.login('John Doe','ThisIsNotAPassword');
await page.waitForTimeout(2000);
    

 // Define date & comment here
  const facility = 'Hongkong CURA Healthcare Center';
  const program = 'Medicaid';
  const date = '03/12/2025';   
  const comment = 'Routine healthcare visit';

  await appointment.makeAppointment(facility, program, date, comment);
  

 await success.verifySuccess(facility, program, date, comment);

})

test('Negative: invalid login shows error', async ({ page }) => {

    const loginPage = new CuraLoginPage(page);
    await loginPage.goto();
    await loginPage.login('user@123','*123#');

//Verify error message 
await expect(loginPage.ErrorMsg).toHaveText('Login failed! Please ensure the username and password are valid.');
})











