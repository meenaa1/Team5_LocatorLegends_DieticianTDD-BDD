import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import logger from '../../utils/Logger.js';


const { Given, When, Then } = createBdd(test);

Given('User is in My Patients page after logged into the app and patients already exists', async ({ loggedInPage }) => {
  await loggedInPage.expectDashboardVisible();
  logger.info('User is in dietician dashboard with patient records');
});

Given('User is in View Plan Test Reports page', async ({ myPatientsPage }) => {
  await myPatientsPage.clickViewReports();
});

When('User clicks View PDF button for a particular record', async ({ viewPDFPage }) => {
  await viewPDFPage.clickViewPdf();
});

Then('Corresponding report for that record should be opened for that particular record', async ({ viewPDFPage }) => {
  await viewPDFPage.validatePdfOpened();
});
