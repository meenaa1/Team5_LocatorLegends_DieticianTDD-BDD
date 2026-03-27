import { expect } from '@playwright/test';
const addPatientData = require('../TestData/AddPatientData.json');


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
    this.calendar = page.locator('.calendar');
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
    this.myPatientPage = page.locator('.my-patient-page');
    this.successToast = page.locator('.toast-success');

  }

  async isHomePageDisplayed() {
    return await this.homeTitle.isVisible();
  }
  async clickNewPatient() {
    await this.newPatientBtn.click();
  }
  async getDialogTitle() {
    return await this.dialogTitle.textContent();
  }
  async getFileUploadCount() {
    return await this.fileUpload.count();
  }
  async getUploadText() {
    return await this.uploadText.textContent();
  }
  async getNoFileText() {
    return await this.noFileText.textContent();
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



  async getPlaceholder(locator) {

    return await locator.getAttribute('placeholder');
  }

  async getDialogTitle() {
    return await this.dialogTitle.textContent();
  }


  async clickDobField() {
    await this.dob.click();
  }

  async isCalendarDisplayed() {
    return await this.calendar.isVisible();
  }



  async hasVerticalScrollBar() {
    return await this.dialogContainer.evaluate(el =>
      el.scrollHeight > el.clientHeight
    );
  }

  async fillPatientDetails() {
    const patientInfo = addPatientData[" validPatientDetails"];

    const patientData = {
      firstName: patientInfo.firstName,
      lastName: patientInfo.lastName,
      email: patientInfo.email,
      contactNumber: patientInfo.contactNumber,
      weight: patientInfo.weight,
      height: patientInfo.height,
      temperature: patientInfo.temperature,
      sp: patientInfo.SP,
      dp: patientInfo.DP,
      dob: patientInfo.dob
    };

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


  async clickDropdown(dropdownLocator) {
    await dropdownLocator.click();
  }

  getDropdownLocator(dropdownKey) {
    if (dropdownKey === 'allergy') return this.allergies;
    if (dropdownKey === 'foodPreference') return this.foodPreferences;
    if (dropdownKey === 'cuisine' || dropdownKey === 'cuisineCategory') return this.cuisineCategory;
    return dropdownKey;
  }

  async getDropdownOptions(dropdownKeyOrLocator) {
    const dropdownLocator = this.getDropdownLocator(dropdownKeyOrLocator);
    const optionLocator = dropdownLocator.locator("option");
    const options = await optionLocator.allTextContents();
    return options.map((text) => (text || '').trim()).filter((text) => text !== '');
  }

  async clickSubmit() {
    await this.submitBtn.click();
  }
  async fillInputField(locator, value) {
    await locator.fill(value);
  }

  async navigateToMyPatientPage() {
    await this.page.click('.my-patient-page-link');
  }

  async getSuccessToastText() {
    return await this.successToast.textContent();
  }

  async isMyPatientPageDisplayed() {
    return await this.myPatientPage.isVisible();
  }


  async selectDropdownOption(locator, value, expectedValue) {
    await expect(locator.selectOption(value)).toHaveText(expectedValue);
  }




  async selectValue(dropdown, value) {
    await dropdown.selectOption({ label: value });
  }

  async verifyAllergySelection(expected) {

    if (expected === "Allergies is required") {
      const error = this.page.locator('.error-message');
      await expect(error).toContainText("Allergies is required");

    } else if (expected === "No selection") {
      const selectedValue = await this.allergies.inputValue();
      expect(selectedValue).toBe("");

    } else {
      const selectedValue = await this.allergies.inputValue();
      expect(selectedValue).toBe(expected);
    }
  }

  async verifyFoodPreferenceSelection(expected) {
    if (expected === "Food Preference is required") {
      await expect(this.page.locator('.error-message')).toContainText("Food Preference is required");
    } else if (expected === "No selection") {
      expect(await this.foodPreferences.inputValue()).toBe("");
    } else {
      expect(await this.foodPreferences.inputValue()).toBe(expected);
    }
  }

  async verifyCuisineCategorySelection(expected) {
    if (expected === "Cusine Category is required") {
      await expect(this.page.locator('.error-message')).toContainText("Cusine Category is required");
    } else if (expected === "No selection") {
      expect(await this.cuisineCategory.inputValue()).toBe("");
    } else {
      expect(await this.cuisineCategory.inputValue()).toBe(expected);
    }
  }

  async verifyAllergyValues() {
    const expected = ["Egg", "Milk", "Soy", "Almond", "Peanuts", "Walnut",
      "Pistachio", "Sesame", "Hazelnut", "Pecan", "Cashew", "NONE"];
    return await this.verifyDropdownValues("allergy", expected);
  }

  async verifyFoodPreferenceValues() {
    const expected = ["Vegan", "Vegetarian", "Jain", "Eggitarian", "NonVeg"];
    return await this.verifyDropdownValues("foodPreference", expected);
  }

  async verifyCuisineCategoryValues() {
    const expected = ["Indian", "South Indian", "Rajasthani", "Punjabi", "Bengali", "Orissa", "Gujarati", "Maharashtrian", "Andhra", "Kerala", "Goan", "Kashmiri", "Himachali", "Tamil Nadu", "Karnataka", "Sindhi", "Chhattisgarhi", "Madhya Pradesh", "Assamese", "Manipuri", "Tripuri", "Sikkimese", "Mizo", "Arunachali", "Uttarakhand", "Haryanvi", "Awadhi", "Bihari", "Uttar Pradesh", "Delhi", "North Indian"];
    return await this.verifyDropdownValues("cuisineCategory", expected);
  }
  async verifyDropdownValues(dropdownKey, expectedValues) {
    const actualValues = await this.getDropdownOptions(dropdownKey);

    if (actualValues.length !== expectedValues.length) {
      return false;
    }

    for (const value of expectedValues) {
      if (!actualValues.includes(value)) {
        return false;
      }
    }

    return true;
  }
}
export default AddPatientDialogBoxPagePO;