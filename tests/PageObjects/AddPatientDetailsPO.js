import AddPatientDialogBoxPagePO from "./AddPatientDialogBoxPagePO.js";

class AddPatientDetailsPO {
  constructor(page) {
    this.page = page;
    this.dialogPO = new AddPatientDialogBoxPagePO(page);
  }

  async openAddPatientDialog() {
    await this.dialogPO.clickNewPatient();
  }

  async openDropdown(dropdownKey) {
    const dropdown = this.getDropdown(dropdownKey);
    await dropdown.click();
  }

  getDropdown(dropdownKey) {
    if (dropdownKey === "allergy") return this.dialogPO.allergies;
    if (dropdownKey === "foodPreference") return this.dialogPO.foodPreferences;
    if (dropdownKey === "cuisine") return this.dialogPO.cuisineCategory;
    throw new Error(`Unsupported dropdown key: ${dropdownKey}`);
  }

  async getDropdownOptions(dropdownKey) {
    const dropdown = this.getDropdown(dropdownKey);
    const optionLocator = dropdown.locator("option");
    const options = await optionLocator.allTextContents();

    return options.map((text) => (text || "").trim()).filter((text) => text !== "");
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

  async verifyValuesFromText(dropdownKey, valuesText) {
    const expectedValues = valuesText
      .split(",")
      .map((item) => item.replace(/"/g, "").trim())
      .filter((item) => item !== "");

    return await this.verifyDropdownValues(dropdownKey, expectedValues);
  }

  async verifyAllergyValues() {
    const expected = [
      "Egg",
      "Milk",
      "Soy",
      "Almond",
      "Peanuts",
      "Walnut",
      "Pistachio",
      "Sesame",
      "Hazelnut",
      "Pecan",
      "Cashew",
      "NONE",
    ];
    return await this.verifyDropdownValues("allergy", expected);
  }

  async verifyFoodPreferenceValues() {
    const expected = ["Vegan", "Vegetarian", "Jain", "Eggitarian", "NonVeg"];
    return await this.verifyDropdownValues("foodPreference", expected);
  }

  async verifyCuisineValues() {
    const expected = [
      "Indian",
      "South Indian",
      "Rajasthani",
      "Punjabi",
      "Bengali",
      "Orissa",
      "Gujarati",
      "Maharashtrian",
      "Andhra",
      "Kerala",
      "Goan",
      "Kashmiri",
      "Himachali",
      "Tamil Nadu",
      "Karnataka",
      "Sindhi",
      "Chhattisgarhi",
      "Madhya Pradesh",
      "Assamese",
      "Manipuri",
      "Tripuri",
      "Sikkimese",
      "Mizo",
      "Arunachali",
      "Uttarakhand",
      "Haryanvi",
      "Awadhi",
      "Bihari",
      "Uttar Pradesh",
      "Delhi",
      "North Indian",
    ];
    return await this.verifyDropdownValues("cuisine", expected);
  }

  async fillMandatoryFields() {
    await this.dialogPO.validpatientDetails(
      "John",
      "Doe",
      "john.doe@email.com",
      "9876543210",
      "70",
      "175",
      "98.6",
      "120",
      "80",
      "01/12/2000"
    );

    await this.dialogPO.selectDropdownValue("Peanuts", "Vegan", "Punjabi");
  }

  async isSubmitEnabled() {
    return await this.dialogPO.submitBtn.isEnabled();
  }

  async clickSubmit() {
    await this.dialogPO.clickSubmit();
  }

  async selectExampleValue(dropdownKey) {
    const dropdown = this.getDropdown(dropdownKey);

    // Simple beginner-friendly strategy: try native select first.
    try {
      await dropdown.selectOption({ index: 1 });
      return;
    } catch {
      // Non-native dropdown fallback.
    }

    await dropdown.click();
    const option = this.page.locator('[role="option"], .dropdown-option').first();
    await option.click();
  }

  async hasAnySelection(dropdownKey) {
    const dropdown = this.getDropdown(dropdownKey);

    try {
      const value = await dropdown.inputValue();
      return value.trim().length > 0;
    } catch {
      const text = await dropdown.textContent();
      return (text || "").trim().length > 0;
    }
  }

  async openDob() {
    await this.dialogPO.dob.click();
  }

  async isCalendarVisible() {
    const calendar = this.page.locator(
      '#dob, [data-testid="dob-calendar"], [role="dialog"], .calendar, .datepicker'
    );
    return await calendar.first().isVisible();
  }

  async enterDob(value) {
    await this.dialogPO.dob.fill(value);
  }
}

export default AddPatientDetailsPO;
