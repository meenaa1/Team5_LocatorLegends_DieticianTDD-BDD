import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);

Given('User is in My Patients page after logged into the app and patients already exists', async ({}) => {
  // Step: Given User is in My Patients page after logged into the app and patients already exists
  // From: tests\Features\ViewPDF.feature:4:1
});

Given('User is in View Plan Test Reports page', async ({}) => {
  // Step: Given User is in View Plan Test Reports page
  // From: tests\Features\ViewPDF.feature:7:1
});

When('User clicks View PDF button for a particular record', async ({}) => {
  // Step: When User clicks View PDF button for a particular record
  // From: tests\Features\ViewPDF.feature:8:1
});

Then('Corresponding report for that record should be opened for that particular record', async ({}) => {
  // Step: Then Corresponding report for that record should be opened for that particular record
  // From: tests\Features\ViewPDF.feature:9:1
});
