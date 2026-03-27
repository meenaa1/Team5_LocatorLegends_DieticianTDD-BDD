import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import { expect } from "@playwright/test";
import logger from '../../utils/Logger.js';

const { Given, Then } = createBdd(test);



Given('User logged into the application without patient added to that user to view Reports', async ({ loginPage }) => {
  await loginPage.loginwithNoPatients();
  logger.info('User logged in with No patient record');// There will be no View Patient Test reports Button because the user has no patient So "When" is invalid.

});

Then('{string} should be displayed inside the Test Report Popup', async ({ viewPDFPage }, arg) => {
  const text = await viewPDFPage.paginationText.textContent();
  expect(text.trim()).toBe(expectedText);
  await viewPDFPage.validateAllPaginationArrowsDisabled();
});

Then('First, previous, next, last arrows should be disabled inside the Test Report Popup', async ({ viewPDFPage }) => {
  await viewPDFPage.validateAllPaginationArrowsDisabled();
});