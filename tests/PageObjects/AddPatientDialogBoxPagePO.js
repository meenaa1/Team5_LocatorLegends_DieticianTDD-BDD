import { expect } from '@playwright/test';

class AddPatientDialogBoxPagePO {

  constructor(page) {
    this.page = page;
    this.homeTitle = page.locator('.home-title');
    this.newPatientBtn = page.locator('#new-patient-btn');
    // dialog locators
    this.dialogContainer = page.locator('.dialog-container');
    this.dialogTitle = page.locator('.dialog-title');
    //input fields
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#email');
    this.contactNumber = page.locator('#contactNumber');
    // Vitals placeholders
    this.weight = page.locator('#weight');
    this.height = page.locator('#height');
    this.temperature = page.locator('#temperature');
    this.sp = page.locator('#sp');
    this.dp = page.locator('#dp');
    //dob
    this.dob = page.locator('#dob');
    //dropdowns
    this.dropdownOptions = page.locator('.dropdown-menu option');
    this.allergies = page.locator('#allergies');
    this.foodPreferences = page.locator('#foodPreferences');
    this.cuisineCategory = page.locator('#cuisineCategory');
    // Buttons
    this.submitBtn = page.locator('#submitBtn');
    this.closeBtn = page.locator('#closeBtn');
    // File upload
    this.fileUpload = page.locator('input[type="file"]');
    this.uploadText = page.locator('.upload-label');
    this.noFileText = page.locator('.no-file-text');
    //collection locators
    this.allInputs = page.locator('.dialog-container input');
    this.allDropdowns = page.locator('.dialog-container select');
  }

  async isHomePageDisplayed() {
    return await this.homeTitle.isVisible();
  }


  async clickNewPatient() {
    await this.newPatientBtn.click();
  }

  async getInputCount() {
    return await this.allInputs.count();
  }


  async getDropdownCount() {
    return await this.allDropdowns.count();
  }

  async getFileUploadCount() {
    return await this.fileUpload.count();
  }


  async isSubmitDisabled() {
    return await this.submitBtn.isDisabled();
  }

  async isCloseEnabled() {
    return await this.closeBtn.isEnabled();
  }

  async getPlaceholder(locator) {

    return await locator.getAttribute('placeholder');
  }

  async getDialogTitle() {
    return await this.dialogTitle.textContent();
  }

  async getUploadText() {
    return await this.uploadText.textContent();
  }

  async getNoFileText() {
    return await this.noFileText.textContent();
  }

  async hasVerticalScrollBar() {
    return await this.dialogContainer.evaluate(el =>
      el.scrollHeight > el.clientHeight
    );
  }

  async validpatientDetails(patientData) {
    await this.firstName.fill(patientData.firstName);
    await this.lastName.fill(patientData.lastName);
    await this.email.fill(patientData.email);
    await this.contactNumber.fill(patientData.contactNumber);
    await this.weight.fill(patientData.weight);
    await this.height.fill(patientData.height);
    await this.temperature.fill(patientData.temperature);
    await this.sp.fill(patientData.sp);
    await this.dp.fill(patientData.dp);
    await this.dob.fill(patientData.dob);
  }
  async selectDropdownValue(options) {
    await this.allergies.selectOption(options.allergy);
    await this.foodPreferences.selectOption(options.foodPref);
    await this.cuisineCategory.selectOption(options.cuisine);
  }


  async clickSubmit() {
    await this.submitBtn.click();
  }
  async fillInputField(locator, value) {
    await locator.fill(value);
  }


  async selectDropdownOption(locator, value, expectedValue) {
    await expect(locator.selectOption(value)).toHaveText(expectedValue);
  }

  async clearField(locator) {
    await locator.fill('');
  }
  async getdobValue(dob) {
<<<<<<< HEAD
    return await this.dob.inputValue();

   
  }
 
=======
    const dobValue = await this.dob.inputValue();
    await this.dob.click();
    await this.dob.fill(dob);

  }
  async clickDropdown(dropdown) {

    await dropdown.first().click();
  }
>>>>>>> main

  async selectValue(dropdown, value) {
    await dropdown.selectOption({ label: value });
  }

<<<<<<< HEAD
 
 }
=======
  async dropdownOptions(dropdown) {
    await dropdown.first().isVisible();
  }
}
>>>>>>> main

export default AddPatientDialogBoxPagePO;