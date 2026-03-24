import { createBdd } from "playwright-bdd";
import { EditPage } from "../PageObjects/EditPagePom";
const{Given,When, Then} = createBdd();

Given('User is on the dashboard page after login', async ({}) => {
  
    
});

When('User clicks {string} button', async ({}, arg) => {
  // Step: When User clicks "My patients" button
  // From: tests\Features\EditPatient.feature:5:1
});

Then('User should be navigated to the {string} page and should see the list of existing patients', async ({}, arg) => {
  // Step: Then User should be navigated to the "My Patients" page and should see the list of existing patients
  // From: tests\Features\EditPatient.feature:6:1
});

Given('User is in my patient page', async ({}) => {
  // Step: Given User is in my patient page
  // From: tests\Features\EditPatient.feature:9:1
});

When('User clicks edit icon for the particular patient', async ({}) => {
  // Step: When User clicks edit icon for the particular patient
  // From: tests\Features\EditPatient.feature:10:1
});

Then('User should see  Edit Patient page on the dialog box', async ({}) => {
  // Step: Then User should see  Edit Patient page on the dialog box
  // From: tests\Features\EditPatient.feature:11:1
});

Then('User should see  submit button', async ({}) => {
  // Step: Then User should see  submit button
  // From: tests\Features\EditPatient.feature:16:1
});

Then('User should see submit button in enable mode', async ({}) => {
  // Step: Then User should see submit button in enable mode
  // From: tests\Features\EditPatient.feature:21:1
});

Then('User should see  close button', async ({}) => {
  // Step: Then User should see  close button
  // From: tests\Features\EditPatient.feature:26:1
});

Then('User should see close button in enable mode', async ({}) => {
  // Step: Then User should see close button in enable mode
  // From: tests\Features\EditPatient.feature:31:1
});
Then('User should see {int} input field', async ({}, arg) => {
  // Step: Then User should see 9 input field
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:36:1
});

Then('User should see {int} drop down', async ({}, arg) => {
  // Step: Then User should see 3 drop down
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:41:1
});

Then('User should see exactly {int} file upload option', async ({}, arg) => {
  // Step: Then User should see exactly 1 file upload option
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:46:1
});

Then('User should see the ‘First Name’ field populated with the value entered during patient creation.', async ({}) => {
  // Step: Then User should see the ‘First Name’ field populated with the value entered during patient creation.
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:51:1
});

Then('User should see the {string} field populated with the value entered during patient creation', async ({}, arg) => {
  // Step: Then User should see the "Last Name" field populated with the value entered during patient creation
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:56:1
});

Then('User should see vitals title after DOB field', async ({}) => {
  // Step: Then User should see vitals title after DOB field
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:91:1
});

Then('User should see SP place holder in SP field', async ({}) => {
  // Step: Then User should see SP place holder in SP field
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:96:1
});

Then('User should see DP place holder in DP field', async ({}) => {
  // Step: Then User should see DP place holder in DP field
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:101:1
});

Then('User should see Weight place holder in Weight field', async ({}) => {
  // Step: Then User should see Weight place holder in Weight field
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:106:1
});

Then('User should see Height place holder in Height field', async ({}) => {
  // Step: Then User should see Height place holder in Height field
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:111:1
});

Then('User should see Tempature place holder in Tempature field', async ({}) => {
  // Step: Then User should see Tempature place holder in Tempature field
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:116:1
});

Then('User should not see mandatory indicators for Vitals Information fields', async ({}) => {
  // Step: Then User should not see mandatory indicators for Vitals Information fields
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:121:1
});

Then('User should see Upload health report : text for Upload button', async ({}) => {
  // Step: Then User should see Upload health report : text for Upload button
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:126:1
});

Then('User should see {string} text', async ({}, arg) => {
  // Step: Then User should see "No File Choosen" text
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:131:1
});

Then('Close button should have red color', async ({}) => {
  // Step: Then Close button should have red color
  // From: tests\Features\EditPatient_DialogBoxValidation.feature:136:1
});
