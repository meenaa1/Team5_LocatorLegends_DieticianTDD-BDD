import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);

Given('User is in dietician dashboard page with patient records already exist in the system for that user', async ({}) => {
  // Step: Given User is in dietician dashboard page with patient records already exist in the system for that user
  // From: tests\Features\PatientTableManagement.feature:4:1
});

Given('User is in My Patients page', async ({}) => {
  // Step: Given User is in My Patients page
  // From: tests\Features\PatientTableManagement.feature:7:1
});

When('User clicks up arrow in Patient Id column', async ({}) => {
  // Step: When User clicks up arrow in Patient Id column
  // From: tests\Features\PatientTableManagement.feature:8:1
});

Then('Patient records should be sorted in ascending order by patient id', async ({}) => {
  // Step: Then Patient records should be sorted in ascending order by patient id
  // From: tests\Features\PatientTableManagement.feature:9:1
});

When('User clicks down arrow in Patient Id column', async ({}) => {
  // Step: When User clicks down arrow in Patient Id column
  // From: tests\Features\PatientTableManagement.feature:13:1
});

Then('Patient records should be sorted in descending order by patient id', async ({}) => {
  // Step: Then Patient records should be sorted in descending order by patient id
  // From: tests\Features\PatientTableManagement.feature:14:1
});

When('User clicks up arrow in Name column', async ({}) => {
  // Step: When User clicks up arrow in Name column
  // From: tests\Features\PatientTableManagement.feature:19:1
});

Then('Patient records should be sorted in ascending order by name', async ({}) => {
  // Step: Then Patient records should be sorted in ascending order by name
  // From: tests\Features\PatientTableManagement.feature:20:1
});

When('User clicks down arrow in Name column', async ({}) => {
  // Step: When User clicks down arrow in Name column
  // From: tests\Features\PatientTableManagement.feature:24:1
});

Then('Patient records should be sorted in descending order by name', async ({}) => {
  // Step: Then Patient records should be sorted in descending order by name
  // From: tests\Features\PatientTableManagement.feature:25:1
});


When('User searches using patient name', async ({}) => {
  // Step: When User searches using patient name
  // From: tests\Features\PatientTableManagement.feature:29:1
});

Then('Matching patient details should be displayed', async ({}) => {
  // Step: Then Matching patient details should be displayed
  // From: tests\Features\PatientTableManagement.feature:30:1
});

When('User searched using patient id', async ({}) => {
  // Step: When User searched using patient id
  // From: tests\Features\PatientTableManagement.feature:34:1
});

Then('Matching patient details should be displayed with correct Patient ID', async ({}) => {
  // Step: Then Matching patient details should be displayed with correct Patient ID
  // From: tests\Features\PatientTableManagement.feature:35:1
});

Given('User entered the text in search box in My Patients page', async ({}) => {
  // Step: Given User entered the text in search box in My Patients page
  // From: tests\Features\PatientTableManagement.feature:38:1
});

When('User clears the search text', async ({}) => {
  // Step: When User clears the search text
  // From: tests\Features\PatientTableManagement.feature:39:1
});

Then('All patient records should be displayed again', async ({}) => {
  // Step: Then All patient records should be displayed again
  // From: tests\Features\PatientTableManagement.feature:40:1
});

