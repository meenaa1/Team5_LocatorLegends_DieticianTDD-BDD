import { createBdd } from "playwright-bdd";
import { test, expect } from "../Fixtures/testFixtures.js";


const { Given, When, Then } = createBdd(test);


Given('User is in Add Patient Details dialog box', async ({ addPatientPage }) => {
  await addPatientPage.isHomePageDisplayed();
  await addPatientPage.clickNewPatient();
});

When('User clicks on Allergy dropdown', async ({ addPatientPage }) => {
    await addPatientPage.clickDropdown(addPatientPage.allergies);

});

Then('Values should be present inside Allergy dropdown', async ({addPatientPage }) => {
  const isValid = await addPatientPage.verifyAllergyValues();
  expect(isValid).toBe(true);

});

Then('Allergy dropdown should contain {int} values', async ({ addPatientPage }, expectedCount) => {
  const options = await addPatientPage.getDropdownOptions(addPatientPage.allergies);
  expect(options.length).toBe(expectedCount);

});

Then('Food Preference dropdown should contain {int} values', async ({ addPatientPage }, expectedCount) => {
  const options = await addPatientPage.getDropdownOptions(addPatientPage.foodPreferences);
  expect(options.length).toBe(expectedCount);

});

Then('Cuisine Category dropdown should contain {int} values', async ({ addPatientPage }, expectedCount) => {
  const options = await addPatientPage.getDropdownOptions(addPatientPage.cuisineCategory);
  expect(options.length).toBe(expectedCount);

});

When('User clicks on Food Preference dropdown', async ({ addPatientPage }) => {
   await addPatientPage.clickDropdown(addPatientPage.foodPreferences);

});

Then('Values should be present inside Food Preference dropdown', async ({ addPatientPage }) => {
  const isValid = await addPatientPage.verifyFoodPreferenceValues();
  expect(isValid).toBe(true);

});

When('User clicks on Cuisine Category dropdown', async ({ addPatientPage }) => {
   await addPatientPage.clickDropdown(addPatientPage.cuisineCategory);

});

Then('Values should be present inside Cuisine Category dropdown', async ({ addPatientPage }) => {
  const isValid = await addPatientPage.verifyCuisineCategoryValues();
  expect(isValid).toBe(true);

});

When('User enters valid values in all field', async ({ addPatientPage }) => {
  await addPatientPage.fillPatientDetails();

});

Then('Submit button should be enabled', async ({ addPatientPage }) => {
  await addPatientPage.isSubmitEnabled();

});
When('User clicks Submit after entering valid data in all mandatory fields', async ({ addPatientPage }) => {
  await addPatientPage.fillPatientDetails();
  await addPatientPage.clickSubmit();
});

Then('User should see Patient successfully created - toast message', async ({ addPatientPage}) => {
  await addPatientPage.getSuccessToastText();

});

Then('User is directed to My Patient Page with New Patient Details created', async ({ addPatientPage }) => {
  await addPatientPage.isMyPatientPageDisplayed();

});

When("User selects {string} from Allergy dropdown", async ({ addPatientPage }, values) => {
  await addPatientPage.selectValue(addPatientPage.allergies, values);
});

Then("{string} should be selected in the Allergy field", async ({ addPatientPage }, expected) => {
  await addPatientPage.verifyAllergySelection(expected);
});

When("User selects {string} from Food Preference dropdown", async ({ addPatientPage }, values) => {
  await addPatientPage.selectValue(addPatientPage.foodPreferences, values);
});

Then("{string} should be selected in the Food Preference field", async ({ addPatientPage }, expected) => {
  await addPatientPage.verifyFoodPreferenceSelection(expected);
});

When("User selects {string} from Cuisine Category dropdown", async ({ addPatientPage }, values) => {
  await addPatientPage.selectValue(addPatientPage.cuisineCategory, values);
});

Then("{string} should be selected in the Cuisine Category field", async ({ addPatientPage }, expected) => {
  await addPatientPage.verifyCuisineCategorySelection(expected);
});

When('User clicks Date of Birth field in the new patient form', async ({ addPatientPage }) => {
  await addPatientPage.clickDobField();
  
});
Then('User should see calender date picker displayed with Month,Day,Year in the new patient form', async ({ addPatientPage }) => {
  await addPatientPage.isCalendarDisplayed();

});

