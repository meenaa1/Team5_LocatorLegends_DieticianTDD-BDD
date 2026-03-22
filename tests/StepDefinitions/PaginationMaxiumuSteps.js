import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);



Given('User is logged into the application with maximum of {int} patient records in a page', async ({}, arg) => {
  // Step: Given User is logged into the application with maximum of 5 patient records in a page
  // From: tests\Features\PaginationMaximum.feature:4:1
});

Then('User should see only {int} records in each page', async ({}, arg) => {
  // Step: Then User should see only 5 records in each page
  // From: tests\Features\PaginationMaximum.feature:9:1
});

Given('User is in My Patients page with table displays maximum of {int} record per page', async ({}, arg) => {
  // Step: Given User is in My Patients page with table displays maximum of 5 record per page
  // From: tests\Features\PaginationMaximum.feature:12:1
});

When('User adds 6th record', async ({}) => {
  // Step: When User adds 6th record
  // From: tests\Features\PaginationMaximum.feature:13:1
});

Then('User should see the newly added record in the next page', async ({}) => {
  // Step: Then User should see the newly added record in the next page
  // From: tests\Features\PaginationMaximum.feature:14:1
});