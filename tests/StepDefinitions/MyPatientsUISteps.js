import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();



Given('User is logged into the application', async ({}) => {
  // Step: Given User is logged into the application
  // From: tests\Features\MyPatientsUI.feature:4:1
});

Given('User is in dietician application dashboard page', async ({}) => {
  // Step: Given User is in dietician application dashboard page
  // From: tests\Features\MyPatientsUI.feature:7:1
});

When('User clicks on My Patients button', async ({}) => {
  // Step: When User clicks on My Patients button
  // From: tests\Features\MyPatientsUI.feature:8:1
});

Then('Page header {string} should be displayed', async ({}, arg) => {
  // Step: Then Page header "My Patients" should be displayed
  // From: tests\Features\MyPatientsUI.feature:9:1
});

Then('Search bar should be displayed', async ({}) => {
  // Step: Then Search bar should be displayed
  // From: tests\Features\MyPatientsUI.feature:14:1
});

Then('Search icon should be displayed inside the search bar', async ({}) => {
  // Step: Then Search icon should be displayed inside the search bar
  // From: tests\Features\MyPatientsUI.feature:19:1
});

Then('Placeholder text {string} should be displayed', async ({}, arg) => {
  // Step: Then Placeholder text "Search..." should be displayed
  // From: tests\Features\MyPatientsUI.feature:24:1
});

Then('{string}, {string}, {string} , {string}, {string} , {string} should be displayed', async ({}, arg, arg1, arg2, arg3, arg4, arg5) => {
  // Step: Then "Patient Id", "Name", "Details" , "Last Visit Date", "Actions" , " Edit/Delete" should be displayed
  // From: tests\Features\MyPatientsUI.feature:29:1
});

Then('Up and down arrow icons should be displayed in the Patient Id column header', async ({}) => {
  // Step: Then Up and down arrow icons should be displayed in the Patient Id column header
  // From: tests\Features\MyPatientsUI.feature:34:1
});

Then('Up and down arrow icons should be displayed in the Name column header', async ({}) => {
  // Step: Then Up and down arrow icons should be displayed in the Name column header
  // From: tests\Features\MyPatientsUI.feature:39:1
});