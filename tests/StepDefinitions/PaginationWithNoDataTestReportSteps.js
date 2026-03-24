import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);



Given('User logged into the application without patient added to that user to view Reports', async ({}) => {
  // Step: Given User logged into the application without patient added to that user to view Reports
  // From: tests\Features\PaginationWithNoDataTestReport.feature:4:1
});

Then('{string} should be displayed inside the Test Report Popup', async ({}, arg) => {
  // Step: Then "Showing 0 to 0 of 0 patients" should be displayed inside the Test Report Popup
  // From: tests\Features\PaginationWithNoDataTestReport.feature:9:1
});

Then('First, previous, next, last arrows should be disabled inside the Test Report Popup', async ({}) => {
  // Step: Then First, previous, next, last arrows should be disabled inside the Test Report Popup
  // From: tests\Features\PaginationWithNoDataTestReport.feature:14:1
});