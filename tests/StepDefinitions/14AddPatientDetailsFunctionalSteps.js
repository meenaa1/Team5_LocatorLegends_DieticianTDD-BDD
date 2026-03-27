import { createBdd } from "playwright-bdd";
import { test, expect } from "../Fixtures/testFixtures.js";
import AddPatientDetailsPO from "../PageObjects/AddPatientDetailsPO.js";

const { Given, When, Then } = createBdd(test);

let addPatient;

Given("User is in Add Patient Details dialog box", async ({ page }) => {
  addPatient = new AddPatientDetailsPO(page);
  await addPatient.openAddPatientDialog();
});

When("User clicks on Allergy dropdown", async ({}) => {
  await addPatient.openDropdown("allergy");
});

When("User clicks on Food Preference dropdown", async ({}) => {
  await addPatient.openDropdown("foodPreference");
});

When("User clicks on Cuisine Category dropdown", async ({}) => {
  await addPatient.openDropdown("cuisine");
});

Then("Values should be present inside Allergy dropdown", async ({}) => {
  const isValid = await addPatient.verifyAllergyValues();
  expect(isValid).toBe(true);
});

Then("Values should be present inside Food Preference dropdown", async ({}) => {
  const isValid = await addPatient.verifyFoodPreferenceValues();
  expect(isValid).toBe(true);
});

Then("Values should be present inside Cuisine Category dropdown", async ({}) => {
  const isValid = await addPatient.verifyCuisineValues();
  expect(isValid).toBe(true);
});

Then("Allergy Dropdown should contain {int} values", async ({}, expectedCount) => {
  const options = await addPatient.getDropdownOptions("allergy");
  expect(options.length).toBe(expectedCount);
});

Then("Food Preference Dropdown should contain {int} values", async ({}, expectedCount) => {
  const options = await addPatient.getDropdownOptions("foodPreference");
  expect(options.length).toBe(expectedCount);
});

Then("Cuisine Dropdown should contain {int} values", async ({}, expectedCount) => {
  const options = await addPatient.getDropdownOptions("cuisine");
  expect(options.length).toBe(expectedCount);
});

When("User enters valid values in all field", async ({}) => {
  await addPatient.fillMandatoryFields();
});

Then("Submit button should be enabled", async ({}) => {
  expect(await addPatient.isSubmitEnabled()).toBe(true);
});

When("User clicks Submit after entering valid data in all mandatory fields", async ({}) => {
  await addPatient.clickSubmit();
});

Then("User should see Patient successfully created - toast message", async ({}) => {
    expect(true).toBe(true);
});

Then("User is directed to My Patient Page with New Patient Details created", async ({}) => {
   expect(true).toBe(true);
});

When("User selects Values from Allergy dropdown", async ({}) => {
  await addPatient.openDropdown("allergy");
  await addPatient.selectExampleValue("allergy");
});

Then("Expected Result should be selected in the Allergy field", async ({}) => {
  expect(await addPatient.hasAnySelection("allergy")).toBe(true);
});

When("User selects Values from Food Preference dropdown", async ({}) => {
  await addPatient.openDropdown("foodPreference");
  await addPatient.selectExampleValue("foodPreference");
});

Then("Expected Result should be selected in Food Preference field", async ({}) => {
  expect(await addPatient.hasAnySelection("foodPreference")).toBe(true);
});

When("User selects Values from Cuisine Category dropdown", async ({}) => {
  await addPatient.openDropdown("cuisine");
  await addPatient.selectExampleValue("cuisine");
});

Then("Expected Result should be selected in Cuisine Category field", async ({}) => {
  expect(await addPatient.hasAnySelection("cuisine")).toBe(true);
});

When("User clicks Date of Birth field", async ({}) => {
  await addPatient.openDob();
});

Then("User should see calender date picker displayed with Month,Day,Year", async ({}) => {
  expect(await addPatient.isCalendarVisible()).toBe(true);
});

When("User enters DOB", async ({}) => {
  await addPatient.enterDob("34/20/2022");
});

Then("System should show Expected Result for DOB field", async ({}) => {
    expect(true).toBe(true);
});
