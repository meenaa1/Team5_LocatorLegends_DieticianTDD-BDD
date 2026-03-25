import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";

const { Given, Then } = createBdd(test);


Given('User is logged into the application and only one patient record already exist in the system for that user', async ({ loginPage }) => {
  await loginPage.loginwithOnePatients();
  logger.info('User logged in with only one patient record');
});

Then('First, previous, next, last arrows should be disabled', async ({paginationPage }) => {
  await paginationPage.validateAllPaginationArrowsDisabled();
  logger.info('All pagination arrows are disabled as only one page exists');
});

