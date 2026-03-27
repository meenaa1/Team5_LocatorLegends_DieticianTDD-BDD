import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import logger from '../../utils/Logger.js';

const { Given, When, Then } = createBdd(test);

Given('User is in view patient test report page with multiple records already exist in the system for that user', async ({ loginPage, }) => {
  await loginPage.loginValidUser();

});

When('User clicks on My Patients button and clicks on View Patient Test Reports button', async ({ myPatientsPage }) => {
  await myPatientsPage.goToMyPatients();
  await myPatientsPage.clickViewReports();
});

Then('User should see only {int} records in each page inside the View Test report Popup', async ({ viewPDFPage }, expectedCount) => {
  await viewPDFPage.validateNumberOfRecords(expectedCount);

});
