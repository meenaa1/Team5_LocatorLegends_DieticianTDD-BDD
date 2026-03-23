import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);

Given('User logged into the app and patients already exists', async ({}) => {
  // Step: Given User logged into the app and patients already exists
  // From: tests\Features\PatientInfoSection.feature:4:5
});

Given('User is in My Patients page after logged in', async ({}) => {
  // Step: Given User is in My Patients page after logged in
  // From: tests\Features\PatientInfoSection.feature:7:5
});

When('User clicks View Previous Test Reports button for a specific record', async ({}) => {
  // Step: When User clicks View Previous Test Reports button for a specific record
  // From: tests\Features\PatientInfoSection.feature:8:5
});

Then('Corresponding report for that record should be opened', async ({}) => {
  // Step: Then Corresponding report for that record should be opened
  // From: tests\Features\PatientInfoSection.feature:9:5
});

Then('Title {string} should be displayed', async ({}, arg) => {
  // Step: Then Title " View Patient Test Reports" should be displayed
  // From: tests\Features\PatientInfoSection.feature:14:5
});

Then('Patient id corresponding to the record selected in My Patients page should be displayed', async ({}) => {
  // Step: Then Patient id corresponding to the record selected in My Patients page should be displayed
  // From: tests\Features\PatientInfoSection.feature:19:5
});

Then('Patient name corresponding to the record selected in My Patients page should be displayed', async ({}) => {
  // Step: Then Patient name corresponding to the record selected in My Patients page should be displayed
  // From: tests\Features\PatientInfoSection.feature:24:5
});

Then('Patient email corresponding to the record selected in My Patients page should be displayed', async ({}) => {
  // Step: Then Patient email corresponding to the record selected in My Patients page should be displayed
  // From: tests\Features\PatientInfoSection.feature:29:5
});

Then('Patient contact number corresponding to the record selected in My Patients page should be displayed', async ({}) => {
  // Step: Then Patient contact number corresponding to the record selected in My Patients page should be displayed
  // From: tests\Features\PatientInfoSection.feature:34:5
});

Then('Close icon {string} should be displayed', async ({}, arg) => {
  // Step: Then Close icon "x" should be displayed
  // From: tests\Features\PatientInfoSection.feature:39:5
});

// ViewPatient Test Reports Table Steps


Then('Reports table shouldbe displayed', async ({}) => {
  // Step: Then Reports table shouldbe displayed
  // From: tests\Features\ViewPatientTestReportsTable.feature:9:5
});

Then('Table headers should have Record Number, File, Uploaded Time,File or Report Name, Vitals, Identified Health Conditions', async ({}) => {
  // Step: Then Table headers should have Record Number, File, Uploaded Time,File/Report Name, Vitals, Identified Health Conditions
  // From: tests\Features\ViewPatientTestReportsTable.feature:14:5
});

Then('Record header should be in the exact order Record Number → File → Uploaded Time → File or Report Name → Vitals → Identified Health Conditions should be displayed', async ({}) => {
  // Step: Then Record header should be in the exact order Record Number → File → Uploaded Time → File/Report Name → Vitals → Identified Health Conditions should be displayed    
  // From: tests\Features\ViewPatientTestReportsTable.feature:19:5
});

Then('Pagination controls First, previous, next, last arrows should be displayed', async ({}) => {
  // Step: Then Pagination controls First, previous, next, last arrows should be displayed
  // From: tests\Features\ViewPatientTestReportsTable.feature:24:5
});
