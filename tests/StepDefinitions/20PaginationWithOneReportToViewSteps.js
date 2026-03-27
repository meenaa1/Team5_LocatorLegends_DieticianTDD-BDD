import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import logger from '../../utils/Logger.js';

const { Given, When, Then } = createBdd(test);


Given('User is in My Patient page', async ({ loginPage }) => {
  await loginPage.loginwithOnePatients();
  await myPatientsPage.goToMyPatients();
  logger.info('User is on My Patients page');

});

When('User clicks on View Patient Test Reports button', async ({ viewPDFPage }) => {
  await viewPDFPage.clickViewPdf();
});

Then('First, previous, next, last arrows should be disabled in the View Test Reports Pop up', async ({ viewPDFPage }) => {
  await viewPDFPage.validateAllPaginationArrowsDisabled();
});