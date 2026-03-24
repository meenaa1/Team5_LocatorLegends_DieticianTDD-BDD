import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import logger from '../../utils/Logger.js';

const { Given, When, Then } = createBdd(test);


Given('User is on the login page to login', async ({ loginPage }) => {
  await loginPage.navigate();
  logger.info('User enters the application and is on login page to login');
});

When('User clicks login button after entering with valid credentials', async ({ loginPage }) => {
  await loginPage.loginValidUser();
  logger.info('Login step completed - Dashboard loaded');
});

Then('Navigation bar should display exactly four links {string}, {string}, {string}, and {string}', async ({ dashboardPage }, link1, link2, link3, link4) => {
  await dashboardPage.expectNavLinksVisible([link1, link2, link3, link4]);
  logger.info(`Navigation bar links validated: ${link1}, ${link2}, ${link3}, ${link4}`);
});

Given('User is on the Dashboard page', async ({dashboardPage}) => {
  const onDashboard = await dashboardPage.isInDashboardPage();

  if (onDashboard) {
    console.log('User is already on the Dashboard page');
  } else {
    console.log('User is Not on the Dashboard page');
    await page.goto(process.env.dashboardUrl);
  }
});

When('User clicks the My Patients link in the navigation bar', async ({dashboardPage}) => {
  await dashboardPage.clickMyPatients();
  logger.info('Clicked My Patients link');
});

Then('User should be redirected to the {string} page', async ({dashboardPage}, pageName) => {
  await dashboardPage.expectRedirectTo(pageName);
  logger.info(`User redirected to ${pageName} page`);
});

When('User clicks the New Patient link in the navigation bar', async ({dashboardPage}) => {
  await dashboardPage.clickNewPatient();
  logger.info('Clicked New Patient link');
});

When('User clicks the Logout link in the navigation bar', async ({dashboardPage}) => {
  await dashboardPage.clickLogout();
  logger.info('Clicked Logout link');
});

Then('User should be logged out of the application', async ({dashboardPage}) => {
  await dashboardPage.expectLoggedOut();
  logger.info('User successfully logged out');
});

When('User clicks the Home icon on the navigation bar', async ({dashboardPage}) => {
  await dashboardPage.clickHomeIcon();
  logger.info('Clicked Home icon');
});

Then('User should be navigated to the dashboard page', async ({dashboardPage}) => {
  await dashboardPage.expectDashboardPage();
  logger.info('User navigated back to Dashboard page');
});
