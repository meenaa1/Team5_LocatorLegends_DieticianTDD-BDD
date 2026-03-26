import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 



const { Given, When, Then } = createBdd(test);

Given('User is on the dashboard page after login', async ({ loggedInPage }) => {
    loggedInPage.navigate();
    loggedInPage.login();
});

When('User clicks {string} button', async ({ editPage }, arg) => {
    await editPage.clickMyPatientsButton();
});

Then('User should be navigated to the {string} page and should see the list of existing patients', async ({ editPage }, arg) => {
    await editPage.verifyMyPatientsTitleVisible();
    await editPage.verifyPatientsListVisible();
});

Given('User is in my patient page', async ({ editPage }) => {
    await editPage.verifyMyPatientsTitleVisible();
});

When('User clicks edit icon for the particular patient', async ({ editPage }) => {
    await editPage.clickEditIconForPatient();
});

Then('User should see  Edit Patient page on the dialog box', async ({ editPage }) => {
    await editPage.verifyEditPatientTitleVisible();
});

Then('User should see  submit button', async ({ editPage }) => {
    await editPage.isSubmitButtonVisible();
});

Then('User should see submit button in enable mode', async ({ editPage }) => {
    await editPage.isSubmitButtonEnabled();
});

Then('User should see  close button', async ({ editPage }) => {
    await editPage.iscloseButtonVisible();
});

Then('User should see close button in enable mode', async ({ editPage }) => {
    await editPage.isCloseButtonEnabled();
});
Then('User should see {int} input field', async ({ editPage }, expectedCount) => {

    await editPage.VerifyInputFieldCount(expectedCount);
});

Then('User should see {int} drop down', async ({ editPage }, expectedCount) => {
    await editPage.VerifyDropdownCount(expectedCount);
});

Then('User should see exactly {int} file upload option', async ({ editPage }, expectedCount) => {
    await editPage.VerifyFileUploadOptionCount(expectedCount);
});

Then('User should see the {string} field populated with the value entered during patient creation for first name field.', async ({ editPage }, expectedFirstName) => {
    await editPage.VerifyFirstNameFieldPopulated(this.createdPatientData.firstName);
});

Then('User should see the {string} field populated with the value entered during patient creation for last name field.', async ({ editPage }, expectedLastName) => {
    await editPage.VerifyLastNameFieldPopulated(this.createdPatientData.lastName);
});

Then('User should see the {string} field populated with the value entered during patient creation for email field.', async ({ editPage }, expectedEmail) => {
    await editPage.VerifyEmailFieldPopulated(this.createdPatientData.email);
});

Then('User should see the {string} field populated with the value entered during patient creation for contact number field.', async ({ editPage }, expectedContactNumber) => {
    await editPage.VerifyContactNumberFieldPopulated(this.createdPatientData.contactNumber);
});

Then('User should see the {string} field populated with the value entered during patient creation for allergy info field.', async ({ editPage }, expectedAllergy) => {
    await editPage.VerifyAllergyInfoFieldPopulated(this.createdPatientData.allergyInfo);
});

Then('User should see the {string} field populated with the value entered during patient creation for food preference field.', async ({ editPage }, expectedFoodPreference) => {
    await editPage.verifyFoodPreferenceFieldPopulated(this.createdPatientData.foodPreference);
});

Then('User should see the {string} field populated with the value entered during patient creation for cuisine preference field.', async ({ editPage }, expectedCuisinePreference) => {
    await editPage.verifyCuisinePreferenceFieldPopulated(this.createdPatientData.cuisinePreference);
});

Then('User should see the {string} field populated with the value entered during patient creation for DOB field.', async ({ editPage }, expectedDOB) => {
    await editPage.verifyDOBFieldPopulated(this.createdPatientData.DOB);
});

Then('User should see vitals title after DOB field', async ({ editPage }) => {
    await editPage.isVitalsTitleAfterDOBField();
});
Then('User should see SP place holder in SP field', async ({ editPage }) => {
    await editPage.isSPPlaceHolderInSPField();
});

Then('User should see DP place holder in DP field', async ({ editPage }) => {
    await editPage.isDPPlaceHolderInDPField();
});

Then('User should see Weight place holder in Weight field', async ({ editPage }) => {
    await editPage.isWeightPlaceHolderInWeightField();
});

Then('User should see Height place holder in Height field', async ({ editPage }) => {
    await editPage.isHeightPlaceHolderInHeightField();
});

Then('User should see Tempature place holder in Tempature field', async ({ editPage }) => {
    await editPage.isTempaturePlaceHolderInTempatureField();
});

Then('User should not see mandatory indicators for Vitals Information fields', async ({ editPage }) => {
    await editPage.verifyVitalFieldsAreNotMandatory();
});

Then('User should see Upload health report : text for Upload button', async ({ editPage }) => {
    await editPage.isUploadHealthReportTextVisible();
});

Then('User should see {string} text', async ({ editPage }, arg) => {
    await editPage.isNoFilesChoosenTextVisible();
});

Then('Close button should have red color', async ({ editPage }) => {
    await editPage.verifyCloseButtonColor();
});

// --------------------------------------------------EditPatient_FunctionTestCase-------------------------------------------------

Given('User is on the My Patients page after login', async ({}) => {
  // Step: Given User is on the My Patients page after login
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:4:1
});

When('User clicks Edit icon for the particular patient', async ({}) => {
  // Step: When User clicks Edit icon for the particular patient
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:5:1
});

Then('User is navigated to the Edit Patient dialog box', async ({}) => {
  // Step: Then User is navigated to the Edit Patient dialog box
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:6:1
});

Given('User is edit dialog box', async ({}) => {
  // Step: Given User is edit dialog box
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:9:1
});

When('User clear exisiting value in first name field', async ({}) => {
  // Step: When User clear exisiting value in first name field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:10:1
});

Then('User should see placeholder {string}', async ({}, arg) => {
  // Step: Then User should see placeholder "First name"
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:11:1
});

When('User clear exisiting value in last name field', async ({}) => {
  // Step: When User clear exisiting value in last name field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:15:1
});

When('User clear exisiting value in email name field', async ({}) => {
  // Step: When User clear exisiting value in email name field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:20:1
});

When('User clear exisiting value in contact no field', async ({}) => {
  // Step: When User clear exisiting value in contact no field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:25:1
});

Then('User should see placeholder  {string}', async ({}, arg) => {
  // Step: Then User should see placeholder  "Contact Number"
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:26:1
});

When('User clicks submit after editing first name with valid data', async ({}) => {
  // Step: When User clicks submit after editing first name with valid data
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:30:1
});

Then('User should redirected to my patient with edited value in first name', async ({}) => {
  // Step: Then User should redirected to my patient with edited value in first name
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:31:1
});

When('User clicks submit after editing first name with numeric data', async ({}) => {
  // Step: When User clicks submit after editing first name with numeric data
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:35:1
});

Then('User should  see error message in Patient name accepts only alphabets', async ({}) => {
  // Step: Then User should  see error message in Patient name accepts only alphabets
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:36:1
});

When('User clicks submit after editing first name with spl numeric data', async ({}) => {
  // Step: When User clicks submit after editing first name with spl numeric data
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:40:1
});

When('User clicks submit after editing first name with spl charc data', async ({}) => {
  // Step: When User clicks submit after editing first name with spl charc data
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:45:1
});

Given('User is in the edit dialog box', async ({}) => {
  // Step: Given User is in the edit dialog box
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:49:1
});

When('User clicks submit after editing the last name with valid data', async ({}) => {
  // Step: When User clicks submit after editing the last name with valid data
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:50:1
});

Then('User should be redirected to My Patient page with the edited value in the last name', async ({}) => {
  // Step: Then User should be redirected to My Patient page with the edited value in the last name
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:51:1
});

When('User clicks submit after editing the last name with numeric data', async ({}) => {
  // Step: When User clicks submit after editing the last name with numeric data
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:55:1
});

Then('User should see the error message “Patient name accepts only alphabets”', async ({}) => {
  // Step: Then User should see the error message “Patient name accepts only alphabets”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:56:1
});

When('User clicks submit after editing the last name with special characters and numeric data', async ({}) => {
  // Step: When User clicks submit after editing the last name with special characters and numeric data
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:60:1
});

When('User clicks submit after editing the last name with special characters', async ({}) => {
  // Step: When User clicks submit after editing the last name with special characters
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:65:1
});

When('User clicks submit after editing the email with valid data', async ({}) => {
  // Step: When User clicks submit after editing the email with valid data
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:70:1
});

Then('User should be redirected to My Patient page with the edited value in the email field', async ({}) => {
  // Step: Then User should be redirected to My Patient page with the edited value in the email field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:71:1
});

When('User clicks submit after editing the email with invalid format', async ({}) => {
  // Step: When User clicks submit after editing the email with invalid format
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:75:1
});

Then('User should see the error message “Please enter a valid email address”', async ({}) => {
  // Step: Then User should see the error message “Please enter a valid email address”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:76:1
});

When('User clicks submit after editing the email without @ symbol', async ({}) => {
  // Step: When User clicks submit after editing the email without @ symbol
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:80:1
});

When('User clicks submit after editing the email with invalid special characters', async ({}) => {
  // Step: When User clicks submit after editing the email with invalid special characters
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:85:1
});

When('User  clicks submit after removes the existing email value', async ({}) => {
  // Step: When User  clicks submit after removes the existing email value
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:90:1
});

Then('User should see the error message “Email field cannot be empty”', async ({}) => {
  // Step: Then User should see the error message “Email field cannot be empty”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:91:1
});

When('User clicks submit after editing the CTC number with valid data', async ({}) => {
  // Step: When User clicks submit after editing the CTC number with valid data
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:95:1
});

Then('User should be redirected to My Patient page with the edited value in the CTC number field', async ({}) => {
  // Step: Then User should be redirected to My Patient page with the edited value in the CTC number field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:96:1
});

When('User clicks submit after editing the CTC number with alphabetic data', async ({}) => {
  // Step: When User clicks submit after editing the CTC number with alphabetic data
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:100:1
});

Then('User should see the error message “CTC number accepts only numeric values”', async ({}) => {
  // Step: Then User should see the error message “CTC number accepts only numeric values”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:101:1
});

When('User clicks submit after editing the CTC number with special characters', async ({}) => {
  // Step: When User clicks submit after editing the CTC number with special characters
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:105:1
});

When('User clicks submit after entering a CTC number with fewer digits', async ({}) => {
  // Step: When User clicks submit after entering a CTC number with fewer digits
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:110:1
});

Then('User should see the error message “Please enter a valid CTC number”', async ({}) => {
  // Step: Then User should see the error message “Please enter a valid CTC number”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:111:1
});

When('User clicks submit after removing the existing ctc value', async ({}) => {
  // Step: When User clicks submit after removing the existing ctc value
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:115:1
});

Then('User should see the error message “CTC number field cannot be empty”', async ({}) => {
  // Step: Then User should see the error message “CTC number field cannot be empty”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:116:1
});

When('User clicks submit after entering a valid value in the weight field', async ({}) => {
  // Step: When User clicks submit after entering a valid value in the weight field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:120:1
});

Then('User should be redirected to the My Patient page with the updated weight value', async ({}) => {
  // Step: Then User should be redirected to the My Patient page with the updated weight value
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:121:1
});

When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating weight value', async ({}) => {      
  // Step: When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating weight value
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:125:1
});

Then('User should see new value under vitals column in new record number', async ({}) => {
  // Step: Then User should see new value under vitals column in new record number
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:126:1
});

When('User clicks submit after entering a valid value in the height field', async ({}) => {
  // Step: When User clicks submit after entering a valid value in the height field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:130:1
});

Then('User should be redirected to the My Patient page with the updated height value', async ({}) => {
  // Step: Then User should be redirected to the My Patient page with the updated height value
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:131:1
});

When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating height value', async ({}) => {      
  // Step: When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating height value
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:135:1
});

When('User clicks submit after entering a valid value in the temperature field', async ({}) => {
  // Step: When User clicks submit after entering a valid value in the temperature field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:140:1
});

Then('User should be redirected to the My Patient page with the updated temperature value', async ({}) => {
  // Step: Then User should be redirected to the My Patient page with the updated temperature value
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:141:1
});

When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating temperature value', async ({}) => { 
  // Step: When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating temperature value
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:145:1
});

When('User clicks submit after entering a valid value in the SP field only', async ({}) => {
  // Step: When User clicks submit after entering a valid value in the SP field only
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:150:1
});

Then('User should recieve error message in DP field', async ({}) => {
  // Step: Then User should recieve error message in DP field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:151:1
});

When('User clicks submit after entering a valid value in SP & DP field', async ({}) => {
  // Step: When User clicks submit after entering a valid value in SP & DP field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:155:1
});

Then('User should be redirected to My Patient page', async ({}) => {
  // Step: Then User should be redirected to My Patient page
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:156:1
});

When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating the SP & DP value', async ({}) => { 
  // Step: When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating the SP & DP value
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:160:1
});

Then('User should see new record number', async ({}) => {
  // Step: Then User should see new record number
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:161:1
});

When('User clicks submit after entering a valid value in the DP field', async ({}) => {
  // Step: When User clicks submit after entering a valid value in the DP field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:170:1
});

Then('User should recieve error message in SP field', async ({}) => {
  // Step: Then User should recieve error message in SP field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:171:1
});

When('User clicks submit after entering with alphabets', async ({}) => {
  // Step: When User clicks submit after entering with alphabets
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:175:1
});

Then('User should see the error message “Please enter a valid weight”', async ({}) => {
  // Step: Then User should see the error message “Please enter a valid weight”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:176:1
});

When('User clicks submit after entering with special characters', async ({}) => {
  // Step: When User clicks submit after entering with special characters
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:180:1
});

Then('User should see the error message “Please enter a valid height”', async ({}) => {
  // Step: Then User should see the error message “Please enter a valid height”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:186:1
});

Then('User should see the error message “Please enter a valid temperature”', async ({}) => {
  // Step: Then User should see the error message “Please enter a valid temperature”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:196:1
});

Then('User should see the error message “Please enter a valid SP value”', async ({}) => {
  // Step: Then User should see the error message “Please enter a valid SP value”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:206:1
});

Then('User should see the error message “Please enter a valid DP value”', async ({}) => {
  // Step: Then User should see the error message “Please enter a valid DP value”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:216:1
});

When('User clicks Date of Birth field', async ({}) => {
  // Step: When User clicks Date of Birth field
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:225:1
});

Then('User should see calender date picker displayed with Month,Day,Year', async ({}) => {
  // Step: Then User should see calender date picker displayed with Month,Day,Year
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:226:1
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

When('User uploads health report in pdf', async ({}) => {
  // Step: When User uploads health report in pdf
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:280:1
});

Then('User should see uploaded file name with extension', async ({}) => {
  // Step: Then User should see uploaded file name with extension
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:281:1
});

When('User clicks submit after uploading a valid file', async ({}) => {
  // Step: When User clicks submit after uploading a valid file
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:285:1
});

Then('User should be redirected to My Patient page with the uploaded file saved successfully', async ({}) => {
  // Step: Then User should be redirected to My Patient page with the uploaded file saved successfully
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:286:1
});

When('User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report', async ({}) => {    
  // Step: When User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:290:1
});

Then('User should see new record number in test report page', async ({}) => {
  // Step: Then User should see new record number in test report page
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:291:1
});

Then('User should see PDF file in test report', async ({}) => {
  // Step: Then User should see PDF file in test report
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:296:1
});

Then('User should see upload date info in test report', async ({}) => {
  // Step: Then User should see upload date info in test report
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:301:1
});

Then('User should see health condition as the values in health report', async ({}) => {
  // Step: Then User should see health condition as the values in health report
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:306:1
});

When('User clicks submit after uploading a file with an invalid file type - docx', async ({}) => {
  // Step: When User clicks submit after uploading a file with an invalid file type - docx
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:310:1
});

Then('User should see the error message “Invalid file type. Please upload a valid file”', async ({}) => {
  // Step: Then User should see the error message “Invalid file type. Please upload a valid file”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:311:1
});

When('User clicks submit after uploading a file larger than allowed size', async ({}) => {
  // Step: When User clicks submit after uploading a file larger than allowed size
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:315:1
});

Then('User should see the error message “File size exceeds the allowed limit”', async ({}) => {
  // Step: Then User should see the error message “File size exceeds the allowed limit”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:316:1
});

When('User clicks submit after  uploading invalid file type - docx', async ({}) => {
  // Step: When User clicks submit after  uploading invalid file type - docx
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:320:1
});

When('User clicks submit without uploading any file', async ({}) => {
  // Step: When User clicks submit without uploading any file
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:325:1
});

Then('User should see the error message “Please select a file to upload”', async ({}) => {
  // Step: Then User should see the error message “Please select a file to upload”
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:326:1
});

When('User clicks the Close button', async ({}) => {
  // Step: When User clicks the Close button
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:330:1
});

Then('User should redirect to My Patient page', async ({}) => {
  // Step: Then User should redirect to My Patient page
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:331:1
});

When('User clicks the Close button after entering the value', async ({}) => {
  // Step: When User clicks the Close button after entering the value
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:335:1
});

Then('user should redirect on the My Patient page without saving changes', async ({}) => {
  // Step: Then user should redirect on the My Patient page without saving changes
  // From: tests\Features\24EditPatient_FunctionTestCase.feature:336:1
});



