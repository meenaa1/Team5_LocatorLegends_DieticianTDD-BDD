import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);


Given('User is logged into the application and only one patient record already exist in the system for that user', async ({}) => {
  // Step: Given User is logged into the application and only one patient record already exist in the system for that user
  // From: tests\Features\PaginationWoneRecord.feature:4:5
});

Then('First, previous, next, last arrows should be disabled', async ({}) => {
  // Step: Then First, previous, next, last arrows should be disabled
  // From: tests\Features\PaginationWoneRecord.feature:9:5
});

//Zero RECORDS Then Steps

Then('{string} should be displayed', async ({}, arg) => {
  // Step: Then "Showing 0 to 0 of 0 patients" should be displayed
  // From: tests\Features\PaginationwithNoData.feature:9:1
});