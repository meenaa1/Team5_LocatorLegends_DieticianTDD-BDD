import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);


Given('User is in dietician dashboard page with multiple patient records already exist in the system for that user', async ({ loggedInPage }) => {
  await loggedInPage.expectDashboardVisible();
  logger.info('User is in dietician dashboard with patient records');
});

Given('User is in My Patients page with multiple pages of patient record', async ({ myPatientsPage }) => {
  await myPatientsPage.goToMyPatients();
  logger.info('User is on My Patients page');
});

When('User clicks the next page arrow {string}', async ({ paginationPage }, arg) => {
  await paginationPage.clickNext();
  await paginationPage.storeFirstRow();
});

Then('Next set of  patient records should be displayed', async ({ paginationPage }) => {
  await paginationPage.validatePageChanged();
  logger.info('Next page records displayed');
});

Given('User is in later page of My Patients page', async ({ loggedInPage, myPatientsPage, paginationPage }) => {
  await loggedInPage.expectDashboardVisible();
  await myPatientsPage.goToMyPatients();
  await paginationPage.clickNext();
});

When('User clicks the previous page arrow {string}', async ({ paginationPage }, arg) => {
  await paginationPage.clickPrevious();
});

Then('Previous set of patient records should be displayed', async ({ paginationPage }) => {
  await paginationPage.validatePageChanged(before);
  logger.info('Previous page records displayed');
});

Given('User is in any page except first page of My Patients page', async ({ loggedInPage, myPatientsPage, paginationPage }) => {
  await loggedInPage.expectDashboardVisible();
  await myPatientsPage.goToMyPatients();
  await paginationPage.clickNext();
  await paginationPage.clickNext();
});

When('User clicks the first page arrow {string}', async ({ paginationPage }, arg) => {
  await paginationPage.clickFirst();
});

Then('First page of patient records should be displayed', async ({ }) => {
  await paginationPage.validatePaginationText();
});

Given('User is in any page except last page of My Patients page', async ({ loggedInPage, myPatientsPage, paginationPage }) => {
  await loggedInPage.expectDashboardVisible();
  await myPatientsPage.goToMyPatients();
  await paginationPage.clickNext();
  await paginationPage.clickNext();
});

When('User clicks the last page arrow {string}', async ({ }, arg) => {
  await paginationPage.clickLast();
});

Then('Last page of patient records should be displayed', async ({ }) => {
  await paginationPage.validatePaginationText();
});

Given('User is in any page of My Patients page', async ({ loggedInPage, myPatientsPage, paginationPage }) => {
  await loggedInPage.expectDashboardVisible();
  await myPatientsPage.goToMyPatients();
  await paginationPage.clickNext();
});

When('User clicks any page navigation arrow', async ({ paginationPage }) => {
  await paginationPage.clickNext();
});

Then('Pagination text should display the correct range and total number of patients', async ({ paginationPage }) => {
  await paginationPage.validatePaginationText();
});

When('User navigates to any page', async ({ paginationPage }) => {
  await paginationPage.clickNext();

});

Then('Pagination controls should be displayed', async ({ paginationPage }) => {
  await paginationPage.validatePaginationVisible();
});

When('User navigates to the first page of patient record', async ({ paginationPage }) => {
  await paginationPage.clickFirst();
});

Then('Previous arrow {string} should be disabled', async ({ paginationPage }, arg) => {
  await paginationPage.validateArrowDisabled(paginationPage.prevArrow);
});

Then('First page arrow {string} should be disabled', async ({ }, arg) => {
  await paginationPage.validateArrowDisabled(paginationPage.firstArrow);
});

Then('Next arrow {string} should be enabled', async ({ paginationPage }, arg) => {
  await paginationPage.validateArrowEnabled(paginationPage.nextArrow);
});

Then('Last page arrow {string} should be enabled', async ({ paginationPage }, arg) => {
  await paginationPage.validateArrowEnabled(paginationPage.lastArrow);
});

When('User navigates to any page after the first page', async ({ paginationPage }) => {
  await paginationPage.clickNext();
});

Then('Previous arrow {string} should be enabled', async ({ paginationPage }, arg) => {
  await paginationPage.validateArrowEnabled(paginationPage.prevArrow);
});

Then('First page arrow {string} should be enabled', async ({ paginationPage }, arg) => {
  await paginationPage.validateArrowEnabled(paginationPage.firstArrow);
});

When('User navigates to any page except the last page', async ({ paginationPage }) => {
  await paginationPage.clickNext();
});

When('User navigates to the last page of the patient record', async ({ paginationPage }) => {
  await paginationPage.clickLast();
});

Then('Next arrow {string} should be disabled', async ({ paginationPage }, arg) => {
  await paginationPage.validateArrowDisabled(paginationPage.nextArrow);
});

Then('Last page arrow {string} should be  disabled', async ({ paginationPage }, arg) => {
  await paginationPage.validateArrowDisabled(paginationPage.lastArrow);
});