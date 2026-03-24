import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 
import { expect } from "@playwright/test";
import logger from '../../utils/Logger.js';

const { Given, When, Then } = createBdd(test);


Given('User is on the browser', async ({ }) => {
  logger.info('User Opened the Browser');
});

When('user enters app url', async ({ loginPage }) => {
  await loginPage.navigate();
  logger.info('User enters the application URL');
});

Then('User should see the text {string} on the navigation bar', async ({ loginPage }, expectedText) => {
  await expect(loginPage.navBarText).toBeVisible();
  await expect(loginPage.navBarText).toContainText(expectedText);
});

Then('User should see the home icon on left side of the navigation bar', async ({ loginPage }) => {
  await expect(loginPage.homeIcon).toBeVisible();
  const isLeft = await loginPage.isIconOnLeft();
  expect(isLeft).toBeTruthy();
  logger.info('Verifying home icon is visible and on the left side');
});

Then('Navigation bar background should have a blue color', async ({ loginPage }) => {
  const bgColor = await loginPage.getNavBarBackgroundColor();
  expect(bgColor).toBe(loginPage.EXPECTED_COLORS.BLUE_PURPLE);
  logger.info(`Navbar background color is "${bgColor}"`);
});

Then('Heading {string} should be visible', async ({ loginPage }, headingText) => {
  await expect(loginPage.heading).toBeVisible();
  await expect(loginPage.heading).toHaveText(headingText);
  logger.info(`Checking heading text is "${headingText}"`);
});

Then('User should see the label text {string}', async ({ loginPage }, labelText) => {
  const label = labelText.toLowerCase().includes('username') ? loginPage.usernameLabel : loginPage.passwordLabel;
  await expect(label).toBeVisible();
  await expect(label).toContainText(labelText);
  logger.info("");

});

Then('Username input field should be visible', async ({ loginPage }) => {
  await expect(loginPage.usernameInput).toBeVisible();
  logger.info('Verifying username input is visible');
});

Then('Password input field should be visible', async ({ loginPage }) => {
  await expect(loginPage.passwordInput).toBeVisible();
  logger.info('Verifying password input is visible');
});

Then('Login button should be visible', async ({ loginPage }) => {
  await expect(loginPage.loginButton).toBeVisible();
  logger.info('Verifying login button is visible');
});

Then('Login button should be displayed with a blue color and white text', async ({ loginPage }) => {
  const styles = await loginPage.getLoginButtonStyles();
  expect(styles.backgroundColor).toBe(loginPage.EXPECTED_COLORS.BLUE_PURPLE);
  expect(styles.color).toBe(loginPage.EXPECTED_COLORS.WHITE);
});

Then('Username and Password labels should be left aligned to the input fields', async ({ loginPage }) => {
  const alignment = await loginPage.getLabelAlignment();
  expect(['left', 'start']).toContain(alignment);
});

Then('User should see exactly two input fields', async ({ loginPage }) => {
  const count = await loginPage.getInputFieldCount();
  expect(count).toBe(2);
  logger.info(`Number of input fields: ${count}`);
});

Then('User should see login button enabled', async ({ loginPage }) => {
  await expect(loginPage.loginButton).toBeEnabled();
});
