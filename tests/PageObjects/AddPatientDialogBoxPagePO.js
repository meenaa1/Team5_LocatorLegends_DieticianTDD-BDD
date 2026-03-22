class AddPatientPage {
  constructor(page) {
    this.page = page;
     this.homePageHeader = page.locator('.home-title');

    this.newPatientBtn = page.locator('#new-patient-btn');
    this.submitBtn = page.locator('#submitBtn');
    this.closeBtn = page.locator('#closeBtn');
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#email');
    this.contactNumber = page.locator('#contactNumber');

    this.weight = page.locator('#weight');
    this.height = page.locator('#height');
    this.temperature = page.locator('#temperature');
    this.sp = page.locator('#sp');
    this.dp = page.locator('#dp');

    this.dob = page.locator('#dob');
    this.allergies = page.locator('#allergies');
    this.foodPreference = page.locator('#foodPreference');
    this.cuisineCategory = page.locator('#cuisineCategory');

    this.dialogTitle = page.locator('.dialog-title');
    this.uploadHealthReportText = page.locator('.upload-label');
    this.noFileText = page.locator('.no-file-text');

    this.dialogContainer = page.locator('.dialog-container');
    this.vitalsSection = page.locator('.dialog-container .vitals-section');
    this.uploadSection = page.locator('.dialog-container .upload-section');

    this.allInputs = page.locator('.dialog-container input');
    this.allDropdowns = page.locator('.dialog-container select');

    this.fileUpload = page.locator('input[type="file]');
  }
    
  async isHomePageVisible() {
    return await this.homePageHeader.isVisible();
  }

 
  async clickNewPatient() {
    await this.newPatientBtn.click();
  }

  async submitForm() {
    await this.submitBtn.click();
  }

  async closeDialog() {
    await this.closeBtn.click();
  }

  

  async fillPatientDetails(patient) {
    await this.firstName.fill(patient.firstName);
    await this.lastName.fill(patient.lastName);
    await this.email.fill(patient.email);
    await this.contactNumber.fill(patient.contactNumber);

    await this.weight.fill(patient.weight);
    await this.height.fill(patient.height);
    await this.temperature.fill(patient.temperature);
    await this.sp.fill(patient.sp);
    await this.dp.fill(patient.dp);

    await this.dob.fill(patient.dob);

   
    await this.allergies.selectOption(patient.allergies);
    await this.foodPreference.selectOption(patient.foodPreference);
    await this.cuisineCategory.selectOption(patient.cuisineCategory);
  }

 
  async getDialogTitle() {
    return await this.dialogTitle.textContent();
  }

  async getUploadHealthReportText() {
    return await this.uploadHealthReportText.textContent();
  }

  async getNoFileText() {
    return await this.noFileText.textContent();
  }

  

  async isDialogVisible() {
    return await this.dialogContainer.isVisible();
  }

  async isVitalsSectionVisible() {
    return await this.vitalsSection.isVisible();
  }

  async isUploadSectionVisible() {
    return await this.uploadSection.isVisible();
  }

  async isFileUploadVisible() {
    return await this.fileUpload.isVisible();
  }


  async getInputFieldCount() {
    return await this.allInputs.count();
  }

  async getDropdownCount() {
    return await this.allDropdowns.count();
  }


  async getDatePlaceholder() {
    return await this.dob.getAttribute('placeholder');
  }

 

  async isScrollPresent() {
    return await this.dialogContainer.evaluate(el => {
      return el.scrollHeight > el.clientHeight;
    });
  }
    
}

