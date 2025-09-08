const { expect } = require('@playwright/test');
class AppointmentPag {
constructor(page){
this.page = page;
this.heading = page.locator('h2:has-text("Make Appointment")');
this.facilityDropdown = page.locator('#combo_facility');
this.readmissionCheckbox = page.locator('#chk_hospotal_readmission');
this.healthcareProgram = page.locator('#radio_program_medicaid');
this.visitdate = page.locator('#txt_visit_date');
this.commentMsg = page.locator('#txt_comment');
this.bookButton = page.locator('#btn-book-appointment');

}

// Ensure we're on the appointment page (after login)
  async expectLoaded() {
    await this.heading.waitFor();
  }


async makeAppointment(facility,program, date, comment ){

 await this.facilityDropdown.selectOption(facility);

 await this.healthcareProgram.check();

//The date field (#txt_visit_date) on the Cura site isn’t a regular text input – it’s tied to a datepicker widget.
  await this.page.$eval('#txt_visit_date', (el, value) => { //Runs the function inside the browser on the element
    //pass in the date string from the test as value
    el.value = value;      
    el.dispatchEvent(new Event('input', { bubbles: true })); //tell the app "user typed"
    el.dispatchEvent(new Event('change', { bubbles: true })); //tell the app "user changed date
  }, date);

  // Debug log what’s actually in the field
  const currentValue = await this.visitdate.inputValue();
  console.log("DEBUG: Date field now contains:", currentValue); //that confirmed the field really contained date
  await this.commentMsg.fill(comment);

  

  

     // Click 'Book Appointment' and wait for the Summary page to appear
    await Promise.all([
      this.page.waitForURL('https://katalon-demo-cura.herokuapp.com/appointment.php#summary'),
      this.bookButton.click()
    ]);


  }


}

module.exports = { AppointmentPag };