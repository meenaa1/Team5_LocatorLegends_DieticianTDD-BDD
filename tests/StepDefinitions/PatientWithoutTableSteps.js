import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);



Given('User logged into the application without patient added to that user', async ({}) => {
  // Step: Given User logged into the application without patient added to that user
  // From: tests\Features\PatientTableWithoutTable.feature:4:3
});


Then('My Patients page should display with empty table', async ({}) => {
  // Step: Then My Patients page should display with empty table
  // From: tests\Features\PatientTableWithoutTable.feature:8:5
});