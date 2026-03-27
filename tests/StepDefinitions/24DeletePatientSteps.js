import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 
import {EditPagePom} from '../PageObjects/EditPagePom.js';

const { Given, When, Then } = createBdd(test);

Given('Given User is on the My Patients page after login', async ({loggedInPage}) => {
    loggedInPage.navigate();
    loggedInPage.login();
});

Given('User is on the My Patient page', async ({editPage}) => {
    await this.editPage.verifyMyPatientsTitleVisible();
});

When('User clicks the Delete icon for a particular patient in the patient table', async ({DeletePopup}) => {
    await this.DeletePopup.clicDeleteIconForPatient();
});

Then('Alert title should be “Confirm”', async ({DeletePopup}) => {
    await this.DeletePopup.verifyConfirmAlertTitleVisible();
});

Then('Alert text should be “Are you sure to delete [Patient Name]?”', async ({DeletePopup}) => {
    await this.DeletePopup.verifyDeleteAlertMessage(this.patientName);
});

Then('Alert should display a Yes button', async ({DeletePopup}) => {
    await this.DeletePopup.verifyYesButtonVisible();
});

Then('Alert should display a No button', async ({DeletePopup}) => {
    await this.DeletePopup.verifyNoButtonVisible();
});

// -------------------------------------------Delete Popup functional Validation---------------------------------------

Given('User sees the confirmation alert', async ({}) => {
  // Step: Given User sees the confirmation alert
  // From: tests\Features\26DeletePopupFunctionalValidatio.feature:8:1
});

When('User accepts the alert', async ({}) => {
  // Step: When User accepts the alert
  // From: tests\Features\26DeletePopupFunctionalValidatio.feature:9:1
});

Then('User should be navigated back to main page', async ({}) => {
  // Step: Then User should be navigated back to main page
  // From: tests\Features\26DeletePopupFunctionalValidatio.feature:10:1
});

Then('Patient should be removed from the table and a success message displayed', async ({}) => {
  // Step: Then Patient should be removed from the table and a success message displayed
  // From: tests\Features\26DeletePopupFunctionalValidatio.feature:15:1
});

When('User dismiss the alert', async ({}) => {
  // Step: When User dismiss the alert
  // From: tests\Features\26DeletePopupFunctionalValidatio.feature:19:1
});

Then('Alert should close and the patient should remain in the table', async ({}) => {
  // Step: Then Alert should close and the patient should remain in the table
  // From: tests\Features\26DeletePopupFunctionalValidatio.feature:25:1
});