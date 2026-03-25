import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import logger from '../../utils/Logger.js';

const { Given, When, Then } = createBdd(test);

Given('User is in dietician dashboard page with patient records already exist in the system for that user', async ({ loggedInPage }) => {
  await loggedInPage.expectDashboardVisible();
  logger.info('User is in dietician dashboard with patient records');
});

Given('User is in My Patients page', async ({ myPatientsPage }) => {
  await myPatientsPage.goToMyPatients();
  logger.info('User is on My Patients page');
});

When('User clicks up arrow in Patient Id column', async ({ myPatientsPage }) => {
  await myPatientsPage.sortPatientIdAscending();
  logger.info('Clicked Patient Id ascending sort');
});

Then('Patient records should be sorted in ascending order by patient id', async ({ myPatientsPage }) => {
  await myPatientsPage.validateAscending(myPatientsPage.PatientIdColumn);
  logger.info('Patient IDs sorted in ascending order');
});

When('User clicks down arrow in Patient Id column', async ({ }) => {
  await myPatientsPage.sortPatientIdDescending();
});

Then('Patient records should be sorted in descending order by patient id', async ({ myPatientsPage }) => {
  await myPatientsPage.validateDescending(myPatientsPage.PatientIdColumn);
  logger.info('Patient IDs sorted in descending order');
});

When('User clicks up arrow in Name column', async ({ myPatientsPage }) => {
  await myPatientsPage.sortNameAscending();
});

Then('Patient records should be sorted in ascending order by name', async ({ myPatientsPage }) => {
  await myPatientsPage.validateAscending(myPatientsPage.NameColumn);
  logger.info('Patient names sorted in ascending order');
});

When('User clicks down arrow in Name column', async ({ myPatientsPage }) => {
  await myPatientsPage.sortNameDescending();
});

Then('Patient records should be sorted in descending order by name', async ({ myPatientsPage }) => {
  await myPatientsPage.validateDescending(myPatientsPage.NameColumn);
  logger.info('Patient names sorted in descending order');
});


When('User searches using patient name', async ({ myPatientsPage }, patientName) => {
  await myPatientsPage.searchPatient(patientName);
});

Then('Matching patient details should be displayed', async ({ myPatientsPage }, patientName) => {
  await myPatientsPage.validateSearchResults(patientName);
  logger.info(`Search results displayed for patient name: ${patientName}`);
});

When('User searched using patient id', async ({ myPatientsPage }, patientId) => {
  await myPatientsPage.searchPatient(patientId);
});

Then('Matching patient details should be displayed with correct Patient ID', async ({ myPatientsPage }, patientId) => {
  await myPatientsPage.validateSearchResults(patientId);
  logger.info(`Search results displayed for patient ID: ${patientId}`);
});

Given('User entered the text in search box in My Patients page', async ({ myPatientsPage }, searchText) => {
  await myPatientsPage.searchPatient(searchText);
});

When('User clears the search text', async ({ myPatientsPage }) => {
  await myPatientsPage.clearSearch();
});

Then('All patient records should be displayed again', async ({ myPatientsPage }) => {
  await myPatientsPage.validateAllRecordsVisible();
  logger.info('All patient records are displayed after clearing search');
});

