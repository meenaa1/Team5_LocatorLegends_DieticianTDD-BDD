import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import logger from '../../utils/Logger.js';

const { Given, Then } = createBdd(test);

Given('User logged into the application without patient added to that user', async ({ loginPage }) => {
  await loginPage.loginwithNoPatients();
  logger.info('User is logged in with no patients userId');
});

Then('My Patients page should display with empty table', async ({ myPatientsPage }) => {
  await myPatientsPage.validateEmptyTable();
  logger.info('Verified that My Patients table is empty');
});