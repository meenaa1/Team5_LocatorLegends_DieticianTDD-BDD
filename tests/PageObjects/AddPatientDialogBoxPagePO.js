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
 // Vitals
    this.weight = page.locator('#weight');
    this.height = page.locator('#height');
    this.temperature = page.locator('#temperature');
    this.sp = page.locator('#sp');
    this.dp = page.locator('#dp');
//dob
    this.dob = page.locator('#dob');
//dropdowns
    this.allergies = page.locator('#allergies');
    this.foodPreference = page.locator('#foodPreference');
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

  async getPlaceholder(locator) {
    return await locator.getAttribute('placeholder');
  }

  


}