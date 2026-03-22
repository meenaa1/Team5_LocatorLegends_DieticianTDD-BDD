import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();

Given('User is in home page after login', async ({}) => {
  // Step: Given User is in home page after login
  // From: tests\Features\AddPatientDialogBoxValidation.feature:4:3
});

When('User clicks on New Patient in the header section', async ({}) => {
  // Step: When User clicks on New Patient in the header section
  // From: tests\Features\AddPatientDialogBoxValidation.feature:5:3
});

Then('User should see Add Patient Details on the dialog box', async ({}) => {
  // Step: Then User should see Add Patient Details on the dialog box
  // From: tests\Features\AddPatientDialogBoxValidation.feature:9:3
});

Then('User should see {int} input boxes in the Add Patient Details dialog box', async ({}, arg) => {
  // Step: Then User should see 9 input boxes in the Add Patient Details dialog box
  // From: tests\Features\AddPatientDialogBoxValidation.feature:12:3
});

Then('User should see {int} dropdowns in the Add Patient Details dialog box', async ({}, arg) => {
  // Step: Then User should see 3 dropdowns in the Add Patient Details dialog box
  // From: tests\Features\AddPatientDialogBoxValidation.feature:15:3
});

Then('User should see a date picker for DOB field with MM\\/DD\\/YYYY displayed', async ({}) => {
  // Step: Then User should see a date picker for DOB field with MM/DD/YYYY displayed
  // From: tests\Features\AddPatientDialogBoxValidation.feature:18:3
});

Then('User should see exactly {int} file upload option in Add Patient Details dialog box', async ({}, arg) => {
  // Step: Then User should see exactly 1 file upload option in Add Patient Details dialog box
  // From: tests\Features\AddPatientDialogBoxValidation.feature:21:3
});

Then('User should see one Submit button', async ({}) => {
  // Step: Then User should see one Submit button
  // From: tests\Features\AddPatientDialogBoxValidation.feature:24:3
});

Then('User should see one Submit button in disabled state', async ({}) => {
  // Step: Then User should see one Submit button in disabled state
  // From: tests\Features\AddPatientDialogBoxValidation.feature:27:3
});

Then('User should see one Close button', async ({}) => {
  // Step: Then User should see one Close button
  // From: tests\Features\AddPatientDialogBoxValidation.feature:30:3
});

Then('User should see one Close button in enabled state', async ({}) => {
  // Step: Then User should see one Close button in enabled state
  // From: tests\Features\AddPatientDialogBoxValidation.feature:33:3
}); 

                        
