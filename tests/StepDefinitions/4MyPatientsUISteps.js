import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import logger from '../../utils/Logger.js';

const { Given, When, Then } = createBdd(test);

Given('User is logged into the application', async ({ loggedInPage }) => {
  await loggedInPage.expectDashboardVisible();
  logger.info('User is logged in and on the dashboard page');
});

Given('User is in dietician application dashboard page', async ({ dashboardPage }) => {
  const onDashboard = await dashboardPage.isInDashboardPage();
  if (!onDashboard) {
    await dashboardPage.page.goto(process.env.dashboardUrl);
    logger.info('Navigated to Dashboard page');
  } else {
    logger.info('User already on Dashboard page');
  }
});

When('User clicks on My Patients button', async ({ myPatientsPage }) => {
  await myPatientsPage.goToMyPatients();
  logger.info('Clicked on My Patients button');
});

Then('Page header {string} should be displayed', async ({ myPatientsPage }, expectedHeader) => {
  await myPatientsPage.expectHeaderDisplayed(expectedHeader);
  logger.info(`Verified page header: "${expectedHeader}"`);
});

Then('Search bar should be displayed', async ({ myPatientsPage }) => {
  await myPatientsPage.expectSearchBarVisible();
  logger.info('Verified search bar is visible');
});

Then('Search icon should be displayed inside the search bar', async ({ myPatientsPage }) => {
  await myPatientsPage.expectSearchIconVisible();
  logger.info('Verified search icon is visible inside search bar');
});

Then('Placeholder text {string} should be displayed', async ({ myPatientsPage }, placeholderText) => {
  await myPatientsPage.expectSearchPlaceholder(placeholderText);
  logger.info(`Verified search placeholder text: "${placeholderText}"`);
});

Then('{string}, {string}, {string} , {string}, {string} , {string} should be displayed', async ({ myPatientsPage }, h1, h2, h3, h4, h5, h6) => {
  const expectedHeaders = [h1, h2, h3, h4, h5, h6];
  await myPatientsPage.expectTableHeaders(expectedHeaders);
  logger.info(`Verified table headers: ${expectedHeaders}`);
});

Then('Up and down arrow icons should be displayed in the Patient Id column header', async ({ myPatientsPage }) => {
  await myPatientsPage.expectSortingIconsPatientId();
  logger.info('Verified up and down sorting icons for Patient Id column');
});

Then('Up and down arrow icons should be displayed in the Name column header', async ({ myPatientsPage }) => {
  await myPatientsPage.expectSortingIconsName();
  logger.info('Verified up and down sorting icons for Name column');
});