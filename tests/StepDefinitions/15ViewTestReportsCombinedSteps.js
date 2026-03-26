import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";


const { Given, When, Then } = createBdd(test);

Given('User logged into the app and patients already exists', async ({ loggedInPage }) => {
  await loggedInPage.expectDashboardVisible();
  logger.info('User is in dietician dashboard with patient records');
});

Given('User is in My Patients page after logged in', async ({ myPatientsPage }) => {
  await myPatientsPage.goToMyPatients();
  await myPatientsPage.expectHeaderDisplayed();
  logger.info('Navigated to My Patients page');
});

When('User clicks View Previous Test Reports button for a specific record', async ({ myPatientsPage }) => {
  await myPatientsPage.clickViewReports();
  logger.info('Clicked View Previous Test Reports');
});

Then('Corresponding report for that record should be opened', async ({ myPatientsPage }) => {
  await myPatientsPage.validateReportOpened();
  logger.info('Report Popup opened successfully');
});

Then('Title {string} should be displayed', async ({ myPatientsPage }, title) => {
  await myPatientsPage.validateReportTitle(title);
});

Then('Patient id corresponding to the record selected in My Patients page should be displayed', async ({ myPatientsPage }) => {
  await myPatientsPage.validatePatientId();
});

Then('Patient name corresponding to the record selected in My Patients page should be displayed', async ({ myPatientsPage }) => {
  await myPatientsPage.validatePatientName();
});

Then('Patient email corresponding to the record selected in My Patients page should be displayed', async ({ myPatientsPage }) => {
  await myPatientsPage.validatePatientEmail();
});

Then('Patient contact number corresponding to the record selected in My Patients page should be displayed', async ({ myPatientsPage }) => {
  await myPatientsPage.validatePatientPhone();
});

Then('Close icon {string} should be displayed', async ({ myPatientsPage }, arg) => {
  await myPatientsPage.validateCloseIcon();
});



// 16 ViewPatient Test Reports Table Steps


Then('Reports table shouldbe displayed', async ({ myPatientsPage }) => {
  await myPatientsPage.validateReportsTableVisible();
});

Then('Table headers should have Record Number, File, Uploaded Time,File or Report Name, Vitals, Identified Health Conditions', async ({ myPatientsPage }) => {
  await myPatientsPage.validateReportHeaders(['Record Number', 'File', 'Uploaded Time', 'File or Report Name', 'Vitals', 'Identified Health Conditions']);
});

Then('Record header should be in the exact order Record Number → File → Uploaded Time → File or Report Name → Vitals → Identified Health Conditions should be displayed', async ({ myPatientsPage }) => {
  await myPatientsPage.validateReportHeaders(['Record Number', 'File', 'Uploaded Time', 'File or Report Name', 'Vitals', 'Identified Health Conditions']);
});

Then('Pagination controls First, previous, next, last arrows should be displayed', async ({ myPatientsPage }) => {
  await myPatientsPage.validatePopupPagination();
});



// 17 Report Table Data Scenarios Stepdefinitions


Then('Each report should display a record number', async ({ myPatientsPage }) => {
  await myPatientsPage.validateRecordNumbers();
});

Then('Each report should display View PDF button', async ({ myPatientsPage }) => {
  await myPatientsPage.validateViewPdfButtons();
});

Then('Each report should display uploaded time', async ({ myPatientsPage }) => {
  await myPatientsPage.validateUploadedTime();
});

Then('Each report should display file or report name', async ({ myPatientsPage }) => {
  await myPatientsPage.validateReportNames();
});

Then('Each report should display vitals information', async ({ myPatientsPage }) => {
  await myPatientsPage.validateVitals();
});

Then('Vitals should be displayed in the order Weight → Height → Temperature → SP → DP', async ({ myPatientsPage }) => {
  await myPatientsPage.validateVitalsOrder();
});

Then('Vitals should be displayed in multilines', async ({ myPatientsPage }) => {
  await myPatientsPage.validateMultiline(myPatientsPage.vitalsColumn);
});

Then('Each report should display Identified health conditions', async ({ myPatientsPage }) => {
  await myPatientsPage.validateHealthConditions();
});

Then('Identified health conditions should be displayed in multilines', async ({ myPatientsPage }) => {
  await myPatientsPage.validateMultiline(myPatientsPage.healthConditionColumn);
});