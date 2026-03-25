import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import logger from '../../utils/Logger.js';
import { expect } from "@playwright/test";

const { When, Then } = createBdd(test);

Then('All columns should have values', async ({ patientTablePage }) => {
  await patientTablePage.validateColumnNotEmpty(patientTablePage.patientIdColumn);
  await patientTablePage.validateColumnNotEmpty(patientTablePage.nameColumn);
  await patientTablePage.validateColumnNotEmpty(patientTablePage.detailsColumn);
  await patientTablePage.validateColumnNotEmpty(patientTablePage.lastVisitDateColumn);
  await patientTablePage.validateColumnNotEmpty(patientTablePage.actionsColumn);
  await patientTablePage.validateColumnNotEmpty(patientTablePage.editDeleteColumn);
  logger.info('All columns have values for each row');

});

Then('Patient Id should be displayed for each patient record', async ({ patientTablePage }) => {
  await patientTablePage.validateColumnNotEmpty(patientTablePage.patientIdColumn);
});

Then('Patient name should be displayed for each patient record', async ({ patientTablePage  }) => {
  await patientTablePage.validateColumnNotEmpty(patientTablePage.nameColumn);
});

Then('Details column should display {string}, email", {string} for each patient record', async ({ patientTablePage}, phoneLabel, dobLabel) => {
  await patientTablePage.validatePhoneNumbers();
  await patientTablePage.validateEmails();
  await patientTablePage.validateDOBs();
  logger.info(`Validated Details column contains ${phoneLabel}, email, ${dobLabel} for all patients`);
});

Then('Phone number, email , date of birth should be displayed on separate lines for each patient record', async ({ }) => {
  await patientTablePage.validatePhoneNumbers();
    await patientTablePage.validateEmails();
    await patientTablePage.validateDOBs();
    logger.info('Phone, Email, DOB displayed on separate lines for all rows');
});

Then('Email should be displayed in valid email format for each patient record', async ({ }) => {
   await patientTablePage.validateEmails();
    logger.info('Validated emails format for all patient records');
});

Then('Phone number displayed in details column should contain valid digits for each patient record', async ({ }) => {
  await patientTablePage.validatePhoneNumbers();
    logger.info('Validated phone numbers format for all patient records');
});

Then('Date of birth should be displayed in {string} format for each patient record', async ({ }, arg) => {
  await patientTablePage.validateDOBs();
    logger.info('Validated DOB in dd-mm-yyyy format for all rows');
});

Then('Last visit date should be displayed for each patient record', async ({ }) => {
  await patientTablePage.validateColumnNotEmpty(patientTablePage.lastVisitDateColumn);
    logger.info('Last visit date displayed for all patient records');
});

Then('Last visit date should be displayed in \'dd-mm-yyyy" format for each patient record', async ({ }) => {
  await patientTablePage.validateLastVisitDates();
    logger.info('Validated Last Visit Date in dd-mm-yyyy format for all rows');
});

Then('{string}, {string}, {string} should be displayed for each patient record', async ({ }, arg, arg1, arg2) => {
  await patientTablePage.validateActionButtons([arg1, arg2, arg3]);
    logger.info(`Validated action buttons: ${arg1}, ${arg2}, ${arg3} for all patient rows`);
});

Then('Edit icon should be displayed for each patient record', async ({ }) => {
   await patientTablePage.validateIcons(patientTablePage.editIcon);
    logger.info('Edit icon is visible for all patient records');
});

Then('Delete icon should be displayed for each patient record', async ({ }) => {
  await patientTablePage.validateIcons(patientTablePage.deleteIcon);
    logger.info('Delete icon is visible for all patient records');
});

//Navigation to View Test Reports Steps

When('User clicks View Previous Test Reports under action column', async ({ }) => {
   await patientTablePage.viewReportsBtn.first().click();
    logger.info('Clicked "View Previous Test Reports" button');
});

Then('User should be navigated to {string} page', async ({ }, popupName) => {
  await expect(patientTablePage.popupTitle).toHaveText(popupName);
 await patientTablePage.validateViewTestReportPopup();
});
