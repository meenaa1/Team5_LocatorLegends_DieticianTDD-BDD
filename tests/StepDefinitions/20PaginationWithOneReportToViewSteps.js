import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);


Given('User is in My Patient page', async ({}) => {
  // Step: Given User is in My Patient page
  // From: tests\Features\PaginationReportWOneReport.feature:7:1
});

When('User clicks on View Patient Test Reports button', async ({}) => {
  // Step: When User clicks on View Patient Test Reports button
  // From: tests\Features\PaginationReportWOneReport.feature:8:1
});

Then('First, previous, next, last arrows should be disabled in the View Test Reports Pop up', async ({}) => {
  // Step: Then First, previous, next, last arrows should be disabled in the View Test Reports Pop up
  // From: tests\Features\PaginationReportWOneReport.feature:9:1
});