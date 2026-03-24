import { createBdd } from "playwright-bdd";
import { EditPage } from "../PageObjects/EditPagePom";
import { LoginPagePo } from "../PageObjects/LoginPagePO";
import { test } from "../Fixtures/testFixtures.js"; 
const{Given,When, Then} = createBdd();
// const editPage = new EditPage();
// const loginPage = new LoginPagePo();

Given('User is on the dashboard page after login', async ({loggedInPage}) => {
  
    loggedInPage.navigate();
    loggedInPage.login();

});

When('User clicks {string} button', async ({editPage}, arg) => {
  
    await editPage.clickMyPatientsButton();
});

Then('User should be navigated to the {string} page and should see the list of existing patients', async ({editPage}, arg) => {
    await editPage.verifyMyPatientsTitleVisible();
    await editPage.verifyPatientsListVisible();
});

Given('User is in my patient page', async ({editPage}) => {
    await editPage.verifyMyPatientsTitleVisible();
});

When('User clicks edit icon for the particular patient', async ({editPage}) => {
    await editPage.clickEditIconForPatient();
});

Then('User should see  Edit Patient page on the dialog box', async ({editPage}) => {
    await editPage.verifyEditPatientTitleVisible();
});

Then('User should see  submit button', async ({editPage}) => {
    await editPage.isSubmitButtonVisible();
});

Then('User should see submit button in enable mode', async ({editPage}) => {
    await editPage.isSubmitButtonEnabled();
});

Then('User should see  close button', async ({editPage}) => {
    await editPage.iscloseButtonVisible();
});

Then('User should see close button in enable mode', async ({editPage}) => {
    await editPage.isCloseButtonEnabled();
});
Then('User should see {int} input field', async ({editPage}, expectedCount) => {
  
    await editPage.VerifyInputFieldCount(expectedCount);
});

Then('User should see {int} drop down', async ({editPage}, expectedCount) => {
    await editPage.VerifyDropdownCount(expectedCount);
});

Then('User should see exactly {int} file upload option', async ({editPage}, expectedCount) => {
    await editPage.VerifyFileUploadOptionCount(expectedCount);
});

Then('User should see the {string} field populated with the value entered during patient creation for first name field.', async ({editPage}, expectedFirstName) => {
    await editPage.VerifyFirstNameFieldPopulated(this.createdPatientData.firstName);
});

Then('User should see the {string} field populated with the value entered during patient creation for last name field.', async ({editPage}, expectedLastName) => {
    await editPage.VerifyLastNameFieldPopulated(this.createdPatientData.lastName);
});

Then('User should see the {string} field populated with the value entered during patient creation for email field.', async ({editPage}, expectedEmail) => {
    await editPage.VerifyEmailFieldPopulated(this.createdPatientData.email);
});

Then('User should see the {string} field populated with the value entered during patient creation for contact number field.', async ({editPage}, expectedContactNumber) => {       
    await editPage.VerifyContactNumberFieldPopulated(this.createdPatientData.contactNumber);
});

Then('User should see the {string} field populated with the value entered during patient creation for allergy info field.', async ({editPage}, expectedAllergy) => {
    await editPage.VerifyAllergyInfoFieldPopulated(this.createdPatientData.allergyInfo);
});

Then('User should see the {string} field populated with the value entered during patient creation for food preference field.', async ({editPage}, expectedFoodPreference) => {      
    await editPage.verifyFoodPreferenceFieldPopulated(this.createdPatientData.foodPreference);
});

Then('User should see the {string} field populated with the value entered during patient creation for cuisine preference field.', async ({editPage}, expectedCuisinePreference) => {   
    await editPage.verifyCuisinePreferenceFieldPopulated(this.createdPatientData.cuisinePreference);
});

Then('User should see the {string} field populated with the value entered during patient creation for DOB field.', async ({editPage}, expectedDOB) => {
    await editPage.verifyDOBFieldPopulated(this.createdPatientData.DOB);
});

Then('User should see vitals title after DOB field', async ({editPage}) => {
    await editPage.isVitalsTitleAfterDOBField();
});
Then('User should see SP place holder in SP field', async ({editPage}) => {
   await editPage.isSPPlaceHolderInSPField();
});

Then('User should see DP place holder in DP field', async ({editPage}) => {
  await editPage.isDPPlaceHolderInDPField();
});

Then('User should see Weight place holder in Weight field', async ({editPage}) => {
  await editPage.isWeightPlaceHolderInWeightField();
});

Then('User should see Height place holder in Height field', async ({editPage}) => {
  await editPage.isHeightPlaceHolderInHeightField();
});

Then('User should see Tempature place holder in Tempature field', async ({editPage}) => {
   await editPage.isTempaturePlaceHolderInTempatureField();
});

Then('User should not see mandatory indicators for Vitals Information fields', async ({editPage}) => {
    await editPage.verifyVitalFieldsAreNotMandatory();
});

Then('User should see Upload health report : text for Upload button', async ({editPage}) => {
    await editPage.isUploadHealthReportTextVisible();
});

Then('User should see {string} text', async ({editPage}, arg) => {
    await editPage.isNoFilesChoosenTextVisible();
});

Then('Close button should have red color', async ({editPage}) => {
    await editPage.verifyCloseButtonColor();
});
