import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 
import {EditPagePom} from '../PageObjects/EditPagePom.js';

const { Given, When, Then } = createBdd(test);

Given('User is on the dashboard page after login', async ({ loggedInPage }) => {
    loggedInPage.navigate();
    loggedInPage.login();
});

When('User clicks {string} button', async ({ editPage }, arg) => {
    await this.editPage.clickMyPatientsButton();
});

Then('User should be navigated to the {string} page and should see the list of existing patients', async ({ editPage }, arg) => {
    await this.editPage.verifyMyPatientsTitleVisible();
    await this.editPage.verifyPatientsListVisible();
});

Given('User is in my patient page', async ({ editPage }) => {
    await this.editPage.verifyMyPatientsTitleVisible();
});

When('User clicks edit icon for the particular patient', async ({ editPage }) => {
    await this.editPage.clickEditIconForPatient();
});

Then('User should see  Edit Patient page on the dialog box', async ({ editPage }) => {
    await this.editPage.verifyEditPatientTitleVisible();
});

Then('User should see  submit button', async ({ editPage }) => {
    await this.editPage.isSubmitButtonVisible();
});

Then('User should see submit button in enable mode', async ({ editPage }) => {
    await this.editPage.isSubmitButtonEnabled();
});

Then('User should see  close button', async ({ editPage }) => {
    await this.editPage.iscloseButtonVisible();
});

Then('User should see close button in enable mode', async ({ editPage }) => {
    await this.editPage.isCloseButtonEnabled();
});
Then('User should see {int} input field', async ({ editPage }, expectedCount) => {

    await this.editPage.VerifyInputFieldCount(expectedCount);
});

Then('User should see {int} drop down', async ({ editPage }, expectedCount) => {
    await this.editPage.VerifyDropdownCount(expectedCount);
});

Then('User should see exactly {int} file upload option', async ({ editPage }, expectedCount) => {
    await this.editPage.VerifyFileUploadOptionCount(expectedCount);
});

Then('User should see the {string} field populated with the value entered during patient creation for first name field.', async ({ editPage }, expectedFirstName) => {
    await this.editPage.VerifyFirstNameFieldPopulated(this.createdPatientData.firstName);
});

Then('User should see the {string} field populated with the value entered during patient creation for last name field.', async ({ editPage }, expectedLastName) => {
    await this.editPage.VerifyLastNameFieldPopulated(this.createdPatientData.lastName);
});

Then('User should see the {string} field populated with the value entered during patient creation for email field.', async ({ editPage }, expectedEmail) => {
    await this.editPage.VerifyEmailFieldPopulated(this.createdPatientData.email);
});

Then('User should see the {string} field populated with the value entered during patient creation for contact number field.', async ({ editPage }, expectedContactNumber) => {
    await this.editPage.VerifyContactNumberFieldPopulated(this.createdPatientData.contactNumber);
});

Then('User should see the {string} field populated with the value entered during patient creation for allergy info field.', async ({ editPage }, expectedAllergy) => {
    await this.editPage.VerifyAllergyInfoFieldPopulated(this.createdPatientData.allergyInfo);
});

Then('User should see the {string} field populated with the value entered during patient creation for food preference field.', async ({ editPage }, expectedFoodPreference) => {
    await this.editPage.verifyFoodPreferenceFieldPopulated(this.createdPatientData.foodPreference);
});

Then('User should see the {string} field populated with the value entered during patient creation for cuisine preference field.', async ({ editPage }, expectedCuisinePreference) => {
    await this.editPage.verifyCuisinePreferenceFieldPopulated(this.createdPatientData.cuisinePreference);
});

Then('User should see the {string} field populated with the value entered during patient creation for DOB field.', async ({ editPage }, expectedDOB) => {
    await this.editPage.verifyDOBFieldPopulated(this.createdPatientData.DOB);
});

Then('User should see vitals title after DOB field', async ({ editPage }) => {
    await this.editPage.isVitalsTitleAfterDOBField();
});
Then('User should see SP place holder in SP field', async ({ editPage }) => {
    await this.editPage.isSPPlaceHolderInSPField();
});

Then('User should see DP place holder in DP field', async ({ editPage }) => {
    await this.editPage.isDPPlaceHolderInDPField();
});

Then('User should see Weight place holder in Weight field', async ({ editPage }) => {
    await this.editPage.isWeightPlaceHolderInWeightField();
});

Then('User should see Height place holder in Height field', async ({ editPage }) => {
    await this.editPage.isHeightPlaceHolderInHeightField();
});

Then('User should see Tempature place holder in Tempature field', async ({ editPage }) => {
    await this.editPage.isTempaturePlaceHolderInTempatureField();
});

Then('User should not see mandatory indicators for Vitals Information fields', async ({ editPage }) => {
    await this.editPage.verifyVitalFieldsAreNotMandatory();
});

Then('User should see Upload health report : text for Upload button', async ({ editPage }) => {
    await this.editPage.isUploadHealthReportTextVisible();
});

Then('User should see {string} text', async ({ editPage }, arg) => {
    await this.editPage.isNoFilesChoosenTextVisible();
});

Then('Close button should have red color', async ({ editPage }) => {
    await this.editPage.verifyCloseButtonColor();
});

// --------------------------------------------------EditPatient_FunctionTestCase-------------------------------------------------

Given('User is on the My Patients page after login', async ({editPage}) => {
    loggedInPage.login();
    await this.editPage.clickMyPatientsButton();
    await this.editPage.verifyMyPatientsTitleVisible();

});

When('User clicks Edit icon for the particular patient', async ({editPage}) => {
   await this.editPage.clickEditIconForPatient();
});

Then('User is navigated to the Edit Patient dialog box', async ({editPage}) => {
   await this.editPage.verifyEditPageTitleVisible();
});

Given('User is in the edit dialog box', async ({}) => {
   await this.editPage.verifyEditPageTitleVisible();
});

When('User clear exisiting value in first name field', async ({editPage}) => {
   await this.editPage.clearFirstNameField();
});

Then('User should see placeholder {string}', async ({editPage}, Firstname) => {
   await this.editPage.verifyFirstNamePlaceholdervisible();
});

When('User clear exisiting value in last name field', async ({editPage}) => {
   await this.editPage.clearLastNameField();
});

Then('User should see placeholder {string} for last name', async ({editPage}, Lastname) => {
   await this.editPage.verifyLastNamePlaceholdervisible();
});

When('User clear exisiting value in email name field', async ({editPage}) => {
   await this.editPage.clearEmailField();
});

Then('User should see placeholder {string} for Email', async ({editPage}, Email) => {
   await this.editPage.verifyEmailPlaceholdervisible();
});

When('User clear exisiting value in contact no field', async ({editPage}) => {
   await this.editPage.clearContactNumberField();
});
Then('User should see placeholder  {string} for contact Number', async ({editPage}, arg) => {
   await this.editPage.verifyContactNumberPlaceholdervisible();
});

When('User clicks submit after editing first name with valid data', async ({editPage}) => {
    await this.editPage.clearFirstNameField();
    const updatedFirstNameValue = await this.editPage.editFirstNameWithValidData();
    await this.editPage.clickSubmitButton();
    this.updatedPatientData  = { FirstName: updatedFirstNameValue };
});

Then('User should redirected to my patient with edited value in first name', async ({editPage}) => {
      await this.editPage.verifyMyPatientsTitleVisible();
      await this.editPage.verifyeditedFirstNameVisible(this.updatedPatientData.FirstName);

});

When('User clicks submit after editing first name with numeric data', async ({editPage}) => {
      await this.editPage.clearFirstNameField();
      await this.editPage.editFirstNameWithNumericData();
      await this.editPage.clickSubmitButton();
});

Then('User should  see error message in Patient name accepts only alphabets', async ({editPage}) => {
      await this.editPage.verifyPatientNameErrorMessage();
});

When('User clicks submit after editing first name with spl numeric data', async ({editPage}) => {
     await this.editPage.clearFirstNameField();
     await this.editPage.editFirstNameWithSplCharNumericData();
     await this.editPage.clickSubmitButton();
});

When('User clicks submit after editing first name with spl charc data', async ({editPage}) => {
    await this.editPage.clearFirstNameField();
    await this.editPage.editFirstNameWithSplCharData();
    await this.editPage.clickSubmitButton();
});

When('User clicks submit after editing the last name with valid data', async ({editPage}) => {
    await this.editPage.clearLastNameField();
    const updatedLastNameValue = await this.editPage.editLastNameWithValidData();
    await this.editPage.clickSubmitButton();
    this.updatedPatientData = { LastName: updatedLastNameValue };
});

Then('User should be redirected to My Patient page with the edited value in the last name', async ({editPage}) => {
      await this.editPage.verifyMyPatientsTitleVisible();
      await this.editPage.verifyeditedLastNameVisible(this.updatedPatientData.LastName);
    
});

When('User clicks submit after editing the last name with numeric data', async ({editPage}) => {
      await this.editPage.clearLastNameField();
      await this.editPage.editLastNameWithNumericData();
      await this.editPage.clickSubmitButton();
});

Then('User should see the error message “Patient name accepts only alphabets”', async ({editPage}) => {
     await this.editPage.verifyPatientNameErrorMessage();
});

When('User clicks submit after editing the last name with special characters and numeric data', async ({editPage}) => {
      await this.editPage.clearLastNameField();
      await this.editPage.editLastNameWithSplCharNumericData();
      await this.editPage.clickSubmitButton();
});

When('User clicks submit after editing the last name with special characters', async ({editPage}) => {
     await this.editPage.clearLastNameField();
     await this.editPage.editLastNameWithSplCharData();
     await this.editPage.clickSubmitButton();
});

When('User clicks submit after editing the email with valid data', async ({editPage}) => {
    await this.editPage.clearEmailField();
    const updatedEmailValue = await this.editPage.editEmailWithValidData();
    await this.editPage.clickSubmitButton();
    this.updatedPatientData = { LastName: updatedEmailValue };
});

Then('User should be redirected to My Patient page with the edited value in the email field', async ({editPage}) => {
      await this.editPage.verifyMyPatientsTitleVisible();
      await this.editPage.verifyeditedEmailVisible(this.updatedPatientData.Email); 
});

When('User clicks submit after editing the email with invalid format', async ({editPage}) => {
      await this.editPage.clearEmailField();
      await this.editPage.editEmailWithInvalidFormat();
      await this.editPage.clickSubmitButton();
});

Then('User should see the error message “Please enter a valid email address”', async ({editPage}) => {
     await this.editPage.verifyEmailErrorMessage();
});

When('User clicks submit after editing the email without @ symbol', async ({editPage}) => {
     await this.editPage.clearEmailField();
     await this.editPage.editEmailWithoutAtSymbol();
     await this.editPage.clickSubmitButton();
});

When('User clicks submit after editing the email with invalid special characters', async ({editPage}) => {
    await this.editPage.clearEmailField();
    await this.editPage.editEmailWithSpecCharacters();
    await this.editPage.clickSubmitButton();
});

When('User  clicks submit after removes the existing email value', async ({editPage}) => {
    await this.editPage.clearEmailField();
    await this.editPage.clickSubmitButton();
});

Then('User should see the error message “Email field cannot be empty”', async ({editPage}) => {
    await this.editPage.verifyEmptyEmailErrorMesage();
});

When('User clicks submit after editing the CTC number with valid data', async ({editPage}) => {
     await this.editPage.clearContactNumberField();
    const updatedCTCNoValue = await this.editPage.editContactNumberWithValidData();
    await this.editPage.clickSubmitButton();
    this.updatedPatientData = { ContactNumber: updatedCTCNoValue };
});

Then('User should be redirected to My Patient page with the edited value in the CTC number field', async ({editPage}) => {
      await this.editPage.verifyMyPatientsTitleVisible();
      await this.editPage.verifyeditedCTCNumberVisible(this.updatedPatientData.Email);
});

When('User clicks submit after editing the CTC number with alphabetic data', async ({editPage}) => {
     await this.editPage.clearContactNumberField();
    await this.editPage.editContactNumberWithAlphabets();
    await this.editPage.clickSubmitButton();
});

Then('User should see the error message “CTC number accepts only numeric values”', async ({editPage}) => {
    await this.editPage.verifyContactNumberErrorMessage();
});

When('User clicks submit after editing the CTC number with special characters', async ({editPage}) => {
      await this.editPage.clearContactNumberField();
      await this.editPage.editContactWithSpecChar();
      await this.editPage.clickSubmitButton();
});

When('User clicks submit after entering a CTC number with fewer digits', async ({editPage}) => {
     await this.editPage.clearContactNumberField();
    await this.editPage.editContactNumberWithFewerDigits();
    await this.editPage.clickSubmitButton();
});

Then('User should see the error message “Please enter a valid CTC number” for fewer Digits', async ({editPage}) => {
    await this.editPage.verifycontactNumberErrorMsgFewerDigitsVisible();
});

When('User clicks submit after removing the existing ctc value', async ({editPage}) => {
    await this.editPage.clearContactNumberField();
    await this.editPage.clickSubmitButton();
});

Then('User should see the error message “CTC number field cannot be empty”', async ({editPage}) => {
    await this.editPage.verifyemptyContactNumberErrorMessageVisible();
});

When('User clicks submit after entering a valid value in the weight field', async ({editPage}) => {
      await this.editPage.clearWeightField();
      const updatedWeight = await this.editPage.editWeightWithValidData();
      await this.editPage.clickSubmitButton();
      this.updatedPatientData = { Weight: updatedWeight }; 

});

Then('User should be redirected to the My Patient page with the updated weight value', async ({editPage}) => {
      await this.editPage.verifyMyPatientsTitleVisible();
      await this.editPage.verifyeditedWeightVisible(this.updatedPatientData.Weight);
});

When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating weight value', async ({editPage}) => {      
    await this.editPage.clickPreviousTestReportsButton();

});

Then('User should see new value under vitals column in new record number', async ({editPage}) => {
    
      await this.editPage.verifyNewRecordWeightValue(this.updatedPatientData.Weight);
});

When('User clicks submit after entering a valid value in the height field', async ({editPage}) => {
      await this.editPage.clearHeightField();
      const updatedHeight = await this.editPage.editHeightWithValidData();
      await this.editPage.clickSubmitButton();
      this.updatedPatientData = { Height: updatedHeight }; 
});

Then('User should be redirected to the My Patient page with the updated height value', async ({editPage}) => {
      await this.editPage.verifyMyPatientsTitleVisible();
      await this.editPage.verifyeditedHeightVisible(this.updatedPatientData.Height);
});

When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating height value', async ({editPage}) => {      
    await this.editPage.clickPreviousTestReportsButton();
});

When('User clicks submit after entering a valid value in the temperature field', async ({editPage}) => {
      await this.editPage.clearTemperatureField();
      const updatedTemperature = await this.editPage.editTemperatureWithValidData();
      await this.editPage.clickSubmitButton();
      this.updatedPatientData = { Temperature: updatedTemperature };
});

Then('User should be redirected to the My Patient page with the updated temperature value', async ({editPage}) => {
      await this.editPage.verifyMyPatientsTitleVisible();
      await this.editPage.verifyeditedTemperatureVisible(this.updatedPatientData.Temperature);
});

When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating temperature value', async ({editPage}) => { 
      await this.editPage.clickPreviousTestReportsButton();
});

When('User clicks submit after entering a valid value in the SP field only', async ({editPage}) => {
      await this.editPage.editOnlySPWithValidData();
      await this.editPage.clickSubmitButton();
});

Then('User should recieve error message in DP field', async ({editPage}) => {
    await this.editPage.verifySPErrorMessage();
});

When('User clicks submit after entering a valid value in SP & DP field', async ({editPage}) => {
      const updatedSP = await this.editPage.editOnlySPWithValidData();
      const updatedDP = await this.editPage.editOnlyDPWithValidData();
      await this.editPage.clickSubmitButton();
      this.updatedPatientData = { SP: updatedSP };
      this.updatedPatientData = { DP: updatedDP };
});

Then('User should be redirected to My Patient page', async ({editPage}) => {
      await this.editPage.verifyMyPatientsTitleVisible();
});

When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating the SP & DP value', async ({editPage}) => { 
    await this.editPage.clickPreviousTestReportsButton();
});

Then('User should see new record number', async ({editPage}) => {
    await this.editPage.verifyNewRecordNumber();
});

When('User clicks submit after entering a valid value in the DP field', async ({editPage}) => {
      await this.editPage.editOnlyDPWithValidData();
      await this.editPage.clickSubmitButton();
});

Then('User should recieve error message in SP field', async ({editPage}) => {
      await this.editPage.verifyDPErrorMessage();
});

When('User clicks submit after entering with alphabets for weight', async ({editPage}) => {
    await this.editPage.editWeightWithAlphabets();
});

Then('User should see the error message “Please enter a valid weight”', async ({editPage}) => {
    await this.editPage.verifyWeightErrorMessage();
});
When('User clicks submit after entering with special characters for weight', async ({editPage}) => {
    await this.editPage.editWeightWithSpecialCharacters();
});

When('User clicks submit after entering with alphabets for height', async ({editPage}) => {
    await this.editPage.editHeightWithAlphabets();
});

Then('User should see the error message “Please enter a valid height”', async ({editPage}) => {
    await this.editPage.verifyHeightErrorMessage();
});

When('User clicks submit after entering with special characters for height', async ({editPage}) => {
    await this.editPage.editHeightWithSpecialCharacters();
});
When('User clicks submit after entering with alphabets for temperature', async ({editPage}) => {
      await this.editPage.editTemperaturetWithAlphabets();
});

When('User clicks submit after entering with special characters for temperature', async ({editPage}) => {
    await this.editPage.editTemperatureWithSpecialCharacters();
});

Then('User should see the error message “Please enter a valid temperature”', async ({editPage}) => {
    await this.editPage.verifyTemperatureErrorMessage();
});
When('User clicks submit after entering with alphabets for SP', async ({editPage}) => {
    await this.editPage.editSPWithAlphabets();
});
Then('User should see the error message “Please enter a valid SP value”', async ({editPage}) => {
    await this.editPage.verifySPInvalidDataErrorMessage();
});

When('User clicks submit after entering with special characters for SP', async ({editPage}) => {
      await this.editPage.editSPWithSpecialCharacters();
});
When('User clicks submit after entering with alphabets for DP', async ({editPage}) => {
    await this.editPage.editDPWithAlphabets();
});

Then('User should see the error message “Please enter a valid DP value”', async ({editPage}) => {
    await this.editPage.verifyDPInvalidDataErrorMessage();
});

When('User clicks submit after entering with special characters for DP', async ({editPage}) => {
    await this.editPage.editDPWithSpecialCharacters();
});

When('User clicks Date of Birth field for edit', async ({editPage}) => {
    await this.editPage.openDateOfBirthCalenderPicker();
});

Then('User should see calender date picker displayed with Month,Day,Year for edit', async ({editPage}) => {
    await this.editPage.verifyDateMonthAndYearVisible();
});

When('User clicks Date of Birth field after selects valid date {int}\\/{int}\\/{int}', async ({}, arg, arg1, arg2) => {
  // Step: When User clicks Date of Birth field after selects valid date 01/12/2000
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:230:1
});

Then('User should see the selected date {int}\\/{int}\\/{int}', async ({}, arg, arg1, arg2) => {
  // Step: Then User should see the selected date 01/12/2000
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:231:1
});

Then('User should see the selected date in MM\\/DD\\/YYYY format', async ({}) => {
  // Step: Then User should see the selected date in MM/DD/YYYY format
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:236:1
});

When('User clicks calendar Date of Birth field', async ({}) => {
  // Step: When User clicks calendar Date of Birth field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:240:1
});

Then('User should see the future date to be disabled', async ({}) => {
  // Step: Then User should see the future date to be disabled
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:241:1
});

When('User selects current date as DOB', async ({}) => {
  // Step: When User selects current date as DOB
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:245:1
});

Then('User should see an error message {string}', async ({}, arg) => {
  // Step: Then User should see an error message "Invalid date ,Please select valid date"
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:246:1
});

When('User enters invalid date \\({int}\\/{int}\\/{int})', async ({}, arg, arg1, arg2) => {
  // Step: When User enters invalid date (34/20/2022)
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:250:1
});

When('User enters {string} in the DOB field', async ({}, arg) => {
  // Step: When User enters "ab/cd/efgh" in the DOB field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:255:1
});

When('User clicks calendar Date of Birth navigates to {int} and selects a date', async ({}, arg) => {
  // Step: When User clicks calendar Date of Birth navigates to 1980 and selects a date
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:265:1
});

Then('User should see the selected date to be populated on DOB field', async ({}) => {
  // Step: Then User should see the selected date to be populated on DOB field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:266:1
});

When('User clicks calendar Date of Birth and selects Feb {int} {int}', async ({}, arg, arg1) => {
  // Step: When User clicks calendar Date of Birth and selects Feb 29 2024
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:270:1
});

Then('User should see the selected date Feb {int} {int}', async ({}, arg, arg1) => {
  // Step: Then User should see the selected date Feb 29 2024
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:271:1
});

When('User enter Feb {int} {int}', async ({}, arg, arg1) => {
  // Step: When User enter Feb 29 2023
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:275:1
});

When('User uploads health report in pdf during edit', async ({editPage}) => {
    await this.editPage.uploadHealthReportFile();
});

Then('User should see uploaded file name with extension during edit', async ({editPage}) => {
    await this.editPage.verifyUploadedFileName();
});

When('User clicks submit after uploading a valid file', async ({editPage}) => {
      await this.editPage.uploadHealthReportFile();
      await this.editPage.clickSubmitButton();
});

Then('User should be redirected to My Patient page with the uploaded file saved successfully during edit', async ({editPage}) => {
    await this.editPage.verifyMyPatientsTitleVisible();
});

When('User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report', async ({editPage}) => {    
    await this.editPage.clickPreviousTestReportsButton();
});

Then('User should see new record number in test report page', async ({editPage}) => {
  await this.editPage.verifyNewRecordNumber();
});
When('User uploads health report in pdf  during edit', async ({editPage}) => {
  await this.editPage.uploadHealthReportFile();
});

Then('User should see PDF file in test report', async ({editPage}) => {
    await this.editPage.verifyPdfFileNameVisible();
});

Then('User should see upload date info in test report', async ({editPage}) => {
    await this.editPage.verifyUpoadedTimeVisible();
});

Then('User should see health condition as the values in health report', async ({editPage}) => {
   await this.editPage.verifyHealthConditionValuesVisible();
});

When('User clicks submit after uploading a file with an invalid file type - docx', async ({editPage}) => {
    await this.editPage.verifyInvalidFileUpload();
    await this.editPage.clickSubmitButton();
});

Then('User should see the error message “Invalid file type. Please upload a valid file”', async ({editPage}) => {
    await this.editPage.verifyUploadInvalidFileErrorMessage();
});

When('User clicks submit after uploading a file larger than allowed size', async ({editPage}) => {
    await this.editPage.verifyExceedingFileSizeFileUpload();
    await this.editPage.clickSubmitButton();
});

Then('User should see the error message “File size exceeds the allowed limit”', async ({editPage}) => {
    await this.editPage.verifyuploadExceedingFileSizeErrorMessageVisible();
});

When('User clicks submit after  uploading invalid file type - docx', async ({}) => {
  // Step: When User clicks submit after  uploading invalid file type - docx
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:320:1
});

When('User clicks submit without uploading any file', async ({editPage}) => {
    await this.editPage.clickSubmitButton();
});

Then('User should see the error message “Please select a file to upload”', async ({editPage}) => {
  await this.editPage.verifyUploadInvalidFileErrorMessage();
});

When('User clicks the Close button', async ({editPage}) => {
   await this.editPage.clickCloseButton();
});

Then('User should redirect to My Patient page', async ({editPage}) => {
  await this.editPage.verifyMyPatientsTitleVisible();
});

When('User clicks the Close button after entering the value', async ({editPage}) => {
    await this.editPage.editFirstName();
    await this.editPage.clickCloseButton();
});

Then('user should redirect on the My Patient page without saving changes', async ({editPage}) => {
    await this.editPage.verifyFirstNameNotUpdated();
    await this.editPage.verifyMyPatientsTitleVisible();
});



