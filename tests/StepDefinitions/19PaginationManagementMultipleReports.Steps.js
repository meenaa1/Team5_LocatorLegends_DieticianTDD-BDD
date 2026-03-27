import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";

const { Given, When, Then } = createBdd(test);

Given('User is in View Patient Test Reports page with multiple records already existing in the system for that user', async ({ loggedInPage }) => {
    await loggedInPage.expectDashboardVisible();
    await myPatientsPage.goToMyPatients();
    logger.info('User is in dietician dashboard with patient records');
});

Given('User is in View Patient Test Reports page with multiple records for the patient', async ({ myPatientsPage, viewPDFPage }) => {
    await myPatientsPage.clickViewReports();
    await viewPDFPage.verifyPopupVisible();
    await viewPDFPage.verifyRecordsVisible();
    await viewPDFPage.validatePaginationVisible();
});

When('User clicks the next page arrow {string} of the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.storeFirstRow();
    await viewPDFPage.clickNextPage();
});

Then('Next set of patient records should be displayed', async ({ viewPDFPage }) => {
    await viewPDFPage.validatePageChanged();
});

Given('User is in Report table of View Patient Test Reports page', async ({ viewPDFPage }) => {
    await viewPDFPage.verifyPopupVisible();
    await viewPDFPage.verifyRecordsVisible();
    await viewPDFPage.validatePaginationVisible();
});

When('User clicks the previous page arrow {string} of the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.storeFirstRow();
    await viewPDFPage.clickPreviousPage();
});

Then('Previous set of patient records should be displayed in the View Test Reports Pop up', async ({ viewPDFPage }) => {
    await viewPDFPage.validatePageChanged();
});

Given('User is in any page except first page of Report table', async ({ viewPDFPage }) => {
    await viewPDFPage.clickNextPage();
    await viewPDFPage.verifyRecordsVisible();
});

When('User clicks the first page arrow {string} of the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.storeFirstRow();
    await viewPDFPage.clickFirst();
});

Then('First page of patient records should be displayed in the View Test Reports Pop up', async ({ viewPDFPage }) => {
    await viewPDFPage.validatePageChanged();
});

Given('User is in any page except last page of Report table', async ({ viewPDFPage }) => {
    await viewPDFPage.clickNextPage();
    await viewPDFPage.verifyRecordsVisible();
});

When('User clicks the last page arrow {string} of the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.storeFirstRow();
    await viewPDFPage.clickLast();
});

Then('Last page of patient records should be displayed in the View Test Reports Pop up', async ({ viewPDFPage }) => {
    await viewPDFPage.validatePageChanged();
});

Given('User is in any page of Report table', async ({ viewPDFPage }) => {
    await viewPDFPage.verifyRecordsVisible();
});

When('User clicks any page navigation arrow in the View Test Reports Pop up', async ({ viewPDFPage }) => {
    await viewPDFPage.storeFirstRow();
    await viewPDFPage.clickNextPage();
});

Then('Pagination text should display the correct range and total number of patients of the View Test Reports Pop up', async ({ viewPDFPage }) => {
    await viewPDFPage.verifyPaginationText();
});

Given('User is in View Patient Test Reports page with multiple pages of records', async ({ viewPDFPage }) => {
    await viewPDFPage.verifyPopupVisible();
    await viewPDFPage.verifyRecordsVisible();
});

When('User navigates to any page of the View Test Reports Pop up', async ({ viewPDFPage }) => {
    await viewPDFPage.storeFirstRow();
    await viewPDFPage.clickNextPage();
});

Then('Pagination controls should be displayed in the View Test Reports Pop up', async ({ viewPDFPage }) => {
    await viewPDFPage.validatePaginationVisible();
});

When('User navigates to the first page of patient records', async ({ viewPDFPage }) => {
    await viewPDFPage.clickFirst();
});

Then('Previous arrow {string} should be disabled in the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.validateArrowDisabled(viewPDFPage.prevArrow);
});

Then('First page arrow {string} should be disabled in the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.validateArrowDisabled(viewPDFPage.firstArrow);
});

Then('Next arrow {string} should be enabled in the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.validateArrowEnabled(viewPDFPage.nextArrow);
});

Then('Last page arrow {string} should be enabled in the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.validateArrowEnabled(viewPDFPage.lastArrow);
});

When('User navigates to any page after the first page of the View Test Reports Pop up', async ({ viewPDFPage }) => {
    await viewPDFPage.clickNextPage();
});

Then('Previous arrow {string} should be enabled in the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.validateArrowEnabled(viewPDFPage.prevArrow);
});

Then('First page arrow {string} should be enabled in the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.validateArrowEnabled(viewPDFPage.firstArrow);
});

When('User navigates to any page except the last page of the View Test Reports Pop up', async ({ viewPDFPage }) => {
    await viewPDFPage.clickNextPage();
    await viewPDFPage.clickFirst();
});

When('User navigates to any page except the last page of in the View Test Reports Pop up', async ({ viewPDFPage }) => {
    await viewPDFPage.clickNextPage();
    await viewPDFPage.clickFirst();
});

When('User navigates to the last page of the patient records', async ({ viewPDFPage }) => {
    await viewPDFPage.clickLast();
});

Then('Next arrow {string} should be disabled in the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.validateArrowDisabled(viewPDFPage.nextArrow);
});

Then('Last page arrow {string} should be disabled in the View Test Reports Pop up', async ({ viewPDFPage }, arg) => {
    await viewPDFPage.validateArrowDisabled(viewPDFPage.lastArrow);
});