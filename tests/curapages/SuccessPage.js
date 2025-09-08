const { expect } = require('@playwright/test');  
class SuccessPage {
constructor(page){
this.page = page;
this.confirmationMsg = page.locator('h2:has-text("Appointment Confirmation")');
this.facilityText = page.locator('#facility');
this.healthcareProgram = page.locator('#program');
 this.visitDate = page.locator('#visit_date');
this.commentText = page.locator('#comment');


}
 // Verify we are on the correct page and all values match
async verifySuccess(facility , program, date,comment){

    // Ensure URL is the summary page
    await expect(this.page).toHaveURL('https://katalon-demo-cura.herokuapp.com/appointment.php#summary');

// then Assert all values
await expect(this.confirmationMsg).toBeVisible();
await expect(this.facilityText).toHaveText(facility);
await expect(this.healthcareProgram).toHaveText(program);
await expect(this.visitDate).toHaveText(date);   // checks date
 await expect(this.commentText).toHaveText(comment); //now checks comment




}

}

module.exports ={SuccessPage};