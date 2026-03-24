import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 


const { Given, When, Then } = createBdd(test);

Given('User is on the login page', async ({ loginPage }) => {
  await loginPage.navigate();
});

When('User clicks login button after entering valid credentials', async ({ loginPage }) => {
  await loginPage.loginValidUser();
});

Then('User should be redirected to dashboard page', async ({ loginPage }) => {
  await loginPage.expectDashboardVisible();
   logger.info('User is in Dashboard')
});

When('User clicks login button after entering non existing user', async ({ loginPage }) => {
  await loginPage.loginNonExistingUser();
   logger.info('User clicked the login button with Non existing user credentials')
});

Then('An error message {string} should be displayed', async ({ loginPage }, expectedError) => {
  await loginPage.expectErrorMsg(expectedError);
  logger.info('Error Message Displayed')
});

When('User clicks login button after entering spl charac in username', async ({ loginPage }) => {
  await loginPage.loginSpecialCharUsername();
  logger.info('User entered special Characters in Username')
});

When('User clicks login button after entering only few charac of username', async ({ loginPage }) => {
  await loginPage.loginShortUsername();
  logger.info('User entered only few character of username')
});

When('User clicks login button after entering wrong password', async ({ loginPage }) => {
  await loginPage.loginWrongPassword();
});

When('User clicks login button after entering spl charach in password', async ({ loginPage }) => {
  await loginPage.loginSpecialCharPassword();
  logger.info('User entered special Characters in Password')
});

When('User clicks login button after entering only password', async ({ loginPage }) => {
  await loginPage.loginEmptyUsername();
  logger.info('Only Password entered')
});

Then('An error message Username is Required should be displayed', async ({ loginPage }) => {
  await loginPage.expectErrorEmptyUsername();
  logger.info('Username required- Error message displayed ')
});

When('User clicks login button after entering only username', async ({ loginPage }) => {
  await loginPage.loginEmptyPassword();
  logger.info('Only Username entered')
});

Then('An error message Password is Required should be displayed', async ({ loginPage }) => {
  await loginPage.expectErrorEmptyPassword();
  logger.info('Password required- Error message displayed ')
});