import { createBdd } from "playwright-bdd";
const{Given,When, Then} = createBdd();

Given('User is on the dashboard page after login', async ({}) => {
  // Step: Given User is on the dashboard page after login
  // From: tests\Features\EditPatient.feature:4:1
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
