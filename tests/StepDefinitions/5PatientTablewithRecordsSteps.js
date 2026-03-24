import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import logger from '../../utils/Logger.js';

const { Given, When, Then } = createBdd(test);

Then('All columns should have values', async ({}) => {
  // Step: Then All columns should have values
  // From: tests\Features\PatientTablewithRecords.feature:8:5
});

Then('Patient Id should be displayed for each patient record', async ({}) => {
  // Step: Then Patient Id should be displayed for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:13:5
});

Then('Patient name should be displayed for each patient record', async ({}) => {
  // Step: Then Patient name should be displayed for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:18:5
});

Then('Details column should display {string}, email", {string} for each patient record', async ({}, arg, arg1) => {
  // Step: Then Details column should display "phone number", email", " date of birth" for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:23:5
});

Then('Phone number, email , date of birth should be displayed on separate lines for each patient record', async ({}) => {
  // Step: Then Phone number, email , date of birth should be displayed on separate lines for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:28:5
});

Then('Email should be displayed in valid email format for each patient record', async ({}) => {
  // Step: Then Email should be displayed in valid email format for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:33:5
});

Then('Phone number displayed in details column should contain valid digits for each patient record', async ({}) => {
  // Step: Then Phone number displayed in details column should contain valid digits for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:38:5
});

Then('Date of birth should be displayed in {string} format for each patient record', async ({}, arg) => {
  // Step: Then Date of birth should be displayed in "dd-mm-yyyy" format for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:43:5
});

Then('Last visit date should be displayed for each patient record', async ({}) => {
  // Step: Then Last visit date should be displayed for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:48:5
});

Then('Last visit date should be displayed in \'dd-mm-yyyy" format for each patient record', async ({}) => {
  // Step: Then Last visit date should be displayed in 'dd-mm-yyyy" format for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:53:5
});

Then('{string}, {string}, {string} should be displayed for each patient record', async ({}, arg, arg1, arg2) => {
  // Step: Then "View Previous Test Reports", "View Previous Diet Plans", "Create New Report/plan" should be displayed for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:58:5
});

Then('Edit icon should be displayed for each patient record', async ({}) => {
  // Step: Then Edit icon should be displayed for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:63:5
});

Then('Delete icon should be displayed for each patient record', async ({}) => {
  // Step: Then Delete icon should be displayed for each patient record
  // From: tests\Features\PatientTablewithRecords.feature:68:5
});

//Navigation to View Test Reports Steps

When('User clicks View Previous Test Reports under action column', async ({}) => {
  // Step: When User clicks View Previous Test Reports under action column
  // From: tests\Features\NavigationToViewTestReport.feature:8:5
});

Then('User should be navigated to {string} page', async ({}, arg) => {
  // Step: Then User should be navigated to "View Patient Test Reports" page
  // From: tests\Features\NavigationToViewTestReport.feature:9:5
});
