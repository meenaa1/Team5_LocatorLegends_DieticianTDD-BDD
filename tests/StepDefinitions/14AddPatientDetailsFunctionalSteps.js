import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import AddPatientDialogBoxPagePO from "../PageObjects/AddPatientDialogBoxPagePO.js";
import AddPatientDetailsPagePO from "../PageObjects/AddPatientDetailsPadePO.js";



const { Given, When, Then } = createBdd(test);
let addPatientPage;
let addPatientDetailsPage;  

Given('User is in Add Patient Details dialog box', async ({ page }) => {
  addPatientPage = new AddPatientDialogBoxPagePO(page);
  addPatientDetailsPage = new AddPatientDetailsPagePO(page);

  await addPatientPage.isHomePageDisplayed();
  await addPatientPage.clickNewPatient();

});

When('User clicks on Allergy dropdown', async ({}) => {
  await addPatientPage.clickDropdown(dropdown); 

});

Then('Values should be present inside Allergy dropdown', async ({}) => {
    await addPatientPage.dropdownOptions(dropdown).first().isVisible();

});

Then('Dropdown should contain {int} values', async ({}, int) => {
  await addPatientPage.getDropdownCount(int);

 

  // Step: And Dropdown should contain 13 values
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:8:5
});

When('User clicks on Food Preference dropdown', async ({}) => {
  await addPatientPage.dropdownOptions(dropdown);
  // Step: When User clicks on Food Preference dropdown
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:11:5
});

Then('Values should be present inside Food Preference dropdown', async ({}) => {
  await addPatientPage.dropdownOptions(dropdown).first().isVisible();
  // Step: Then Values should be present inside Food Preference dropdown
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:12:5
});

When('User clicks on Cuisine Category dropdown', async ({}) => {
  await addPatientPage.clickDropdown(dropdown);
  // Step: When User clicks on Cuisine Category dropdown
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:16:5
});

Then('Values should be present inside Cuisine Category dropdown', async ({}) => {
  await addPatientPage.dropdownOptions(dropdown).first().isVisible(); 
  // Step: Then Values should be present inside Cuisine Category dropdown
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:17:5
});

When('User enters valid values in all field', async ({}) => {

  await addPatientPage.validPatientDetails();
  // Step: When User enters valid values in all field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:21:5
});

Then('Submit button should be enabled', async ({}) => {
  await addPatientPage.isSubmitEnabled(); 
  // Step: Then Submit button should be enabled
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:22:5
});
When('User clicks Submit after entering valid data in all mandatory fields', async ({}) => {
  await addPatientPage.validPatientDetails().clicksubmit();
   // Step: When User clicks Submit after entering valid data in all mandatory fields
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:25:5
  // Step: When User clicks Submit after entering valid data in all mandatory fields
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:25:5
});

Then('User should see Patient successfully created - toast message', async ({}) => {
  await addPatientDetailsPage.getSuccessToastText();
  // Step: Then User should see Patient successfully created - toast message
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:26:5
});

Then('User is directed to My Patient Page with New Patient Details created', async ({}) => {
  await addPatientDetailsPage.isMyPatientPageDisplayed();
  // Step: And User is directed to My Patient Page with New Patient Details created
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:27:6
});

When('User selects Values from Allergy dropdown', async ({}) => {
  await addPatientPage.selectValue(dropdown, value);
  // Step: When User selects Values from Allergy dropdown
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:30:5
});

Then('Expected Result should be selected in the Allergy field', async ({}) => {

  await addPatientPage.selectDropdownOption(dropdown, value, expectedValue);

  // Step: Then Expected Result should be selected in the Allergy field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:31:5
});

When('User selects Values from Food Preference dropdown', async ({}) => {
  await addPatientPage.selectValue(dropdown, value);
  // Step: When User selects Values from Food Preference dropdown
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:34:5
});

Then('Expected Result should be selected in Food Preference field', async ({}) => {
  await addPatientPage.selectDropdownOption(dropdown, value, expectedValue);  
  // Step: Then Expected Result should be selected in Food Preference field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:35:5
});

When('User selects Values from Cuisine Category dropdown', async ({}) => {
  await addPatientPage.selectValue(dropdown, value);
  // Step: When User selects Values from Cuisine Category dropdown
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:38:5
});

Then('Expected Result should be selected in Cuisine Category field', async ({}) => {
  await addPatientPage.selectDropdownOption(dropdown, value, expectedValue);
  // Step: Then Expected Result should be selected in Cuisine Category field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:39:5
});

When('User clicks Date of Birth field', async ({}) => {
  await addPatientPage.getdobValue();
  // Step: When User clicks Date of Birth field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:42:5
});
Then('User should see calender date picker displayed with Month,Day,Year', async ({}) => {
  await addPatientDetailsPage.isCalendarDisplayed();
  // Step: Then User should see calender date picker displayed with Month,Day,Year
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:43:5
});

When('User enters DOB', async ({}) => {
  await addPatientPage.getdobValue().fill(dob);
  // Step: When User enters DOB
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:46:5
});

Then('System should show Expected Result for DOB field', async ({}) => {
  // Step: Then System should show Expected Result for DOB field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:47:5
});

When('User enters values in  field and navigates to next field', async ({}) => {
  // Step: When User enters values in  field and navigates to next field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:51:5
});

Then('User should see error message', async ({}) => {
  // Step: Then User should see error message
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:52:5
});

When('User enters Email and navigates to next field', async ({}) => {
  // Step: When User enters Email and navigates to next field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:56:5
});

When('User enters values in Contact Number field and navigates to next field', async ({}) => {
  // Step: When User enters values in Contact Number field and navigates to next field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:61:5
});

When('User navigate to next field after entering valid weight', async ({}) => {
  // Step: When User navigate to next field after entering valid weight
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:65:5
});

When('User enters values in Weight field and navigates to next field', async ({}) => {
  // Step: When User enters values in Weight field and navigates to next field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:69:5
});

When('User navigate to next field after entering valid height', async ({}) => {
  // Step: When User navigate to next field after entering valid height
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:73:5
});
When('User enters values in Height field and navigates to next field', async ({}) => {
  // Step: When User enters values in Height field and navigates to next field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:77:5
});

When('User clicks Submit after entering valid temperature', async ({}) => {
  // Step: When User clicks Submit after entering valid temperature
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:81:5
});

When('User enters values in Temperature field and navigates to next field', async ({}) => {
  // Step: When User enters values in Temperature field and navigates to next field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:85:5
});

When('User clicks Submitafter entering valid SP and DP', async ({}) => {
  // Step: When User clicks Submitafter entering valid SP and DP
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:89:5
});

When('User enters values in SP and DP fields and navigates to next field', async ({}) => {
  // Step: When User enters values in SP and DP fields and navigates to next field
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:93:5
});

When('User clicks Submit after uploading a valid file', async ({}) => {
  // Step: When User clicks Submit after uploading a valid file
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:97:5
});

Then('User should be redirected to My Patient page with the uploaded file saved successfully', async ({}) => {
  // Step: Then User should be redirected to My Patient page with the uploaded file saved successfully
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:98:5
});

When('User uploads health report in pdf', async ({}) => {
  // Step: When User uploads health report in pdf
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:101:5
});

Then('User should see uploaded file name with extension', async ({}) => {
  // Step: Then User should see uploaded file name with extension
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:102:5
});

When('User clicks View Previous Test Report after being redirected to My Patient page for newly created patient', async ({}) => {
  // Step: When User clicks View Previous Test Report after being redirected to My Patient page for newly created patient     
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:105:5
});
Then('User should see Verification in test report', async ({}) => {
  // Step: Then User should see Verification in test report
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:106:5
});

When('User uploads files', async ({}) => {
  // Step: When User uploads files
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:109:5
});

Then('User should see Expected Result', async ({}) => {
  // Step: Then User should see Expected Result
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:110:5
});

When('User clicks Close button after submit', async ({}) => {
  // Step: When User clicks Close button after submit
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:113:5
});

Then('Add dialog should close and user should be on my patient page without new patient created', async ({}) => {
  // Step: Then Add dialog should close and user should be on my patient page without new patient created
  // From: tests\Features\14AddPatientDetailsFunctionalTestCase.feature:114:5
});

