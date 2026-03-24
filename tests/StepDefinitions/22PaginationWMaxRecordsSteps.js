import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);


Given('User is in view patient test report page with multiple records already exist in the system for that user', async ({}) => {
  // Step: Given User is in view patient test report page with multiple records already exist in the system for that user
  // From: tests\Features\PaginationwithMaxRecords.feature:4:1
});

When('User clicks on My Patients button and clicks on View Patient Test Reports button', async ({}) => {
  // Step: When User clicks on My Patients button and clicks on View Patient Test Reports button
  // From: tests\Features\PaginationwithMaxRecords.feature:8:1
});

Then('User should see only {int} records in each page inside the View Test report Popup', async ({}, arg) => {
  // Step: Then User should see only 2 records in each page inside the View Test report Popup
  // From: tests\Features\PaginationwithMaxRecords.feature:9:1
});
