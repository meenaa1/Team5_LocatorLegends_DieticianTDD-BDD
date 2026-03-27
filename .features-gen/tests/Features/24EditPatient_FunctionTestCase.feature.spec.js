// Generated from: tests\Features\24EditPatient_FunctionTestCase.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Edit Patient  - Function test case', () => {

  test.beforeEach('Background: After navigating to the My Patient page, the logged-in user clicks the edit icon', async ({ Given, When, Then }, testInfo) => { if (testInfo.error) return;
    await Given('User is on the My Patients page after login'); 
    await When('User clicks Edit icon for the particular patient'); 
    await Then('User is navigated to the Edit Patient dialog box'); 
  });
  
  test('Presence of place holder in First Name', async ({ Given, When, Then }) => { 
    await Given('User is edit dialog box'); 
    await When('User clear exisiting value in first name field'); 
    await Then('User should see placeholder "First name"'); 
  });

  test('Presence of place holder in  last name', async ({ Given, When, Then }) => { 
    await Given('User is edit dialog box'); 
    await When('User clear exisiting value in last name field'); 
    await Then('User should see placeholder "Last name"'); 
  });

  test('Presence of place holder in email', async ({ Given, When, Then }) => { 
    await Given('User is edit dialog box'); 
    await When('User clear exisiting value in email name field'); 
    await Then('User should see placeholder "Email"'); 
  });

  test('Presence of place holder in  contact no', async ({ Given, When, Then }) => { 
    await Given('User is edit dialog box'); 
    await When('User clear exisiting value in contact no field'); 
    await Then('User should see placeholder  "Contact Number"'); 
  });

  test('Edit first name with valid data', async ({ Given, When, Then }) => { 
    await Given('User is edit dialog box'); 
    await When('User clicks submit after editing first name with valid data'); 
    await Then('User should redirected to my patient with edited value in first name'); 
  });

  test('Edit first name with numeric data', async ({ Given, When, Then }) => { 
    await Given('User is edit dialog box'); 
    await When('User clicks submit after editing first name with numeric data'); 
    await Then('User should  see error message in Patient name accepts only alphabets'); 
  });

  test('Edit first name with spl charac & numeric data', async ({ Given, When, Then }) => { 
    await Given('User is edit dialog box'); 
    await When('User clicks submit after editing first name with spl numeric data'); 
    await Then('User should  see error message in Patient name accepts only alphabets'); 
  });

  test('Edit first name with spl charc data', async ({ Given, When, Then }) => { 
    await Given('User is edit dialog box'); 
    await When('User clicks submit after editing first name with spl charc data'); 
    await Then('User should  see error message in Patient name accepts only alphabets'); 
  });

  test('Edit last name with valid data', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after editing the last name with valid data'); 
    await Then('User should be redirected to My Patient page with the edited value in the last name'); 
  });

  test('Edit last name with numeric data', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after editing the last name with numeric data'); 
    await Then('User should see the error message “Patient name accepts only alphabets”'); 
  });

  test('Edit last name with special characters & numeric data', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after editing the last name with special characters and numeric data'); 
    await Then('User should see the error message “Patient name accepts only alphabets”'); 
  });

  test('Edit last name with special characters data', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after editing the last name with special characters'); 
    await Then('User should see the error message “Patient name accepts only alphabets”'); 
  });

  test('Edit email with valid data', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after editing the email with valid data'); 
    await Then('User should be redirected to My Patient page with the edited value in the email field'); 
  });

  test('Edit email with invalid format', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after editing the email with invalid format'); 
    await Then('User should see the error message “Please enter a valid email address”'); 
  });

  test('Edit email without @ symbol', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after editing the email without @ symbol'); 
    await Then('User should see the error message “Please enter a valid email address”'); 
  });

  test('Edit email with special characters', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after editing the email with invalid special characters'); 
    await Then('User should see the error message “Please enter a valid email address”'); 
  });

  test('Edit email by removing existing value', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User  clicks submit after removes the existing email value'); 
    await Then('User should see the error message “Email field cannot be empty”'); 
  });

  test('Edit CTC number with valid data', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after editing the CTC number with valid data'); 
    await Then('User should be redirected to My Patient page with the edited value in the CTC number field'); 
  });

  test('Edit CTC number with alphabets', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after editing the CTC number with alphabetic data'); 
    await Then('User should see the error message “CTC number accepts only numeric values”'); 
  });

  test('Edit CTC number with special characters', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after editing the CTC number with special characters'); 
    await Then('User should see the error message “CTC number accepts only numeric values”'); 
  });

  test('Edit CTC number with less than required digits', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering a CTC number with fewer digits'); 
    await Then('User should see the error message “Please enter a valid CTC number”'); 
  });

  test('Edit CTC number by removing existing value', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after removing the existing ctc value'); 
    await Then('User should see the error message “CTC number field cannot be empty”'); 
  });

  test('Edit weight with valid value', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering a valid value in the weight field'); 
    await Then('User should be redirected to the My Patient page with the updated weight value'); 
  });

  test('Presence of updated value for weight', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating weight value'); 
    await Then('User should see new value under vitals column in new record number'); 
  });

  test('Edit height with valid value', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering a valid value in the height field'); 
    await Then('User should be redirected to the My Patient page with the updated height value'); 
  });

  test('Presence of updated value for height', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating height value'); 
    await Then('User should see new value under vitals column in new record number'); 
  });

  test('Edit temperature with valid value', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering a valid value in the temperature field'); 
    await Then('User should be redirected to the My Patient page with the updated temperature value'); 
  });

  test('Presence of updated value for temperature', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating temperature value'); 
    await Then('User should see new value under vitals column in new record number'); 
  });

  test('Edit only SP (Systolic Pressure) with valid value', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering a valid value in the SP field only'); 
    await Then('User should recieve error message in DP field'); 
  });

  test('Edit SP and DP with valid value', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering a valid value in SP & DP field'); 
    await Then('User should be redirected to My Patient page'); 
  });

  test('Presence of record number for updated value in SP & DP', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating the SP & DP value'); 
    await Then('User should see new record number'); 
  });

  test('Presence of updated value for SP & DP in record number', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks “View Previous Test Report” after being redirected to the My Patient page for updating the SP & DP value'); 
    await Then('User should see new value under vitals column in new record number'); 
  });

  test('Edit only DP (Diastolic Pressure) with valid value', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering a valid value in the DP field'); 
    await Then('User should recieve error message in SP field'); 
  });

  test('Edit weight with alphabets', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering with alphabets'); 
    await Then('User should see the error message “Please enter a valid weight”'); 
  });

  test('Edit weight with special characters', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering with special characters'); 
    await Then('User should see the error message “Please enter a valid weight”'); 
  });

  test('Edit height with alphabets', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering with alphabets'); 
    await Then('User should see the error message “Please enter a valid height”'); 
  });

  test('Edit height with special characters', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering with special characters'); 
    await Then('User should see the error message “Please enter a valid height”'); 
  });

  test('Edit temperature with alphabets', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering with alphabets'); 
    await Then('User should see the error message “Please enter a valid temperature”'); 
  });

  test('Edit temperature with special characters', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering with special characters'); 
    await Then('User should see the error message “Please enter a valid temperature”'); 
  });

  test('Edit SP with alphabets', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering with alphabets'); 
    await Then('User should see the error message “Please enter a valid SP value”'); 
  });

  test('Edit SP with special characters', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering with special characters'); 
    await Then('User should see the error message “Please enter a valid SP value”'); 
  });

  test('Edit DP with alphabets', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering with alphabets'); 
    await Then('User should see the error message “Please enter a valid DP value”'); 
  });

  test('Edit DP with special characters', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after entering with special characters'); 
    await Then('User should see the error message “Please enter a valid DP value”'); 
  });

  test('Edit date for DOB field', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks Date of Birth field'); 
    await Then('User should see calender date picker displayed with Month,Day,Year'); 
  });

  test('Edit valid date in DOB field', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks Date of Birth field after selects valid date 01/12/2000'); 
    await Then('User should see the selected date 01/12/2000'); 
  });

  test('Verify selected date is displayed in MM/DD/YYYY format', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks Date of Birth field after selects valid date 01/12/2000'); 
    await Then('User should see the selected date in MM/DD/YYYY format'); 
  });

  test('Prevent selection of future date in DOB field', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks calendar Date of Birth field'); 
    await Then('User should see the future date to be disabled'); 
  });

  test('Selecting current date as DOB', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User selects current date as DOB'); 
    await Then('User should see an error message "Invalid date ,Please select valid date"'); 
  });

  test('Selecting Invalid date', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User enters invalid date (34/20/2022)'); 
    await Then('User should see an error message "Invalid date ,Please select valid date"'); 
  });

  test('User enters non-numeric value in DOB field', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User enters "ab/cd/efgh" in the DOB field'); 
    await Then('User should see an error message "Invalid date format"'); 
  });

  test('Selecting partial date in DOB field', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User enters "12/05" in the DOB field'); 
    await Then('User should see an error message "Invalid date format"'); 
  });

  test('Boundary year Navigation', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks calendar Date of Birth navigates to 1980 and selects a date'); 
    await Then('User should see the selected date to be populated on DOB field'); 
  });

  test('Leap year validation', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks calendar Date of Birth and selects Feb 29 2024'); 
    await Then('User should see the selected date Feb 29 2024'); 
  });

  test('Non Leap year validation', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User enter Feb 29 2023'); 
    await Then('User should see an error message "Please select valid date"'); 
  });

  test('File name after Upload valid file - pdf', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User uploads health report in pdf'); 
    await Then('User should see uploaded file name with extension'); 
  });

  test('Upload valid file - pdf', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after uploading a valid file'); 
    await Then('User should be redirected to My Patient page with the uploaded file saved successfully'); 
  });

  test('Presence of record number after file upload', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report'); 
    await Then('User should see new record number in test report page'); 
  });

  test('Presence of PDF file in test report after file upload', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report'); 
    await Then('User should see PDF file in test report'); 
  });

  test('Presence of upload date info', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report'); 
    await Then('User should see upload date info in test report'); 
  });

  test('Presence of health info detected from the health report', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report'); 
    await Then('User should see health condition as the values in health report'); 
  });

  test('Upload invalid file type - docx', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after uploading a file with an invalid file type - docx'); 
    await Then('User should see the error message “Invalid file type. Please upload a valid file”'); 
  });

  test('Upload file exceeding size limit', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after uploading a file larger than allowed size'); 
    await Then('User should see the error message “File size exceeds the allowed limit”'); 
  });

  test('Upload invalid file type - jpeg', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit after  uploading invalid file type - docx'); 
    await Then('User should see the error message “Invalid file type. Please upload a valid file”'); 
  });

  test('Upload without selecting file', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks submit without uploading any file'); 
    await Then('User should see the error message “Please select a file to upload”'); 
  });

  test('Close edit dialog using Close button', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks the Close button'); 
    await Then('User should redirect to My Patient page'); 
  });

  test('Close edit dialog with unsaved changes', async ({ Given, When, Then }) => { 
    await Given('User is in the edit dialog box'); 
    await When('User clicks the Close button after entering the value'); 
    await Then('user should redirect on the My Patient page without saving changes'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\24EditPatient_FunctionTestCase.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User clear exisiting value in first name field","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User should see placeholder \"First name\"","stepMatchArguments":[{"group":{"start":28,"value":"\"First name\"","children":[{"start":29,"value":"First name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User clear exisiting value in last name field","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then User should see placeholder \"Last name\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Last name\"","children":[{"start":29,"value":"Last name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User clear exisiting value in email name field","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see placeholder \"Email\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Email\"","children":[{"start":29,"value":"Email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User clear exisiting value in contact no field","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should see placeholder  \"Contact Number\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Contact Number\"","children":[{"start":30,"value":"Contact Number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing first name with valid data","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then User should redirected to my patient with edited value in first name","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing first name with numeric data","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient name accepts only alphabets","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":38,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing first name with spl numeric data","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient name accepts only alphabets","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing first name with spl charc data","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient name accepts only alphabets","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":48,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":49,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing the last name with valid data","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to My Patient page with the edited value in the last name","stepMatchArguments":[]}]},
  {"pwTestLine":66,"pickleLine":53,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing the last name with numeric data","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Patient name accepts only alphabets”","stepMatchArguments":[]}]},
  {"pwTestLine":72,"pickleLine":58,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing the last name with special characters and numeric data","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Patient name accepts only alphabets”","stepMatchArguments":[]}]},
  {"pwTestLine":78,"pickleLine":63,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":64,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing the last name with special characters","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Patient name accepts only alphabets”","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":68,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing the email with valid data","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to My Patient page with the edited value in the email field","stepMatchArguments":[]}]},
  {"pwTestLine":90,"pickleLine":73,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":74,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing the email with invalid format","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid email address”","stepMatchArguments":[]}]},
  {"pwTestLine":96,"pickleLine":78,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":79,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing the email without @ symbol","stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid email address”","stepMatchArguments":[]}]},
  {"pwTestLine":102,"pickleLine":83,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":84,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing the email with invalid special characters","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid email address”","stepMatchArguments":[]}]},
  {"pwTestLine":108,"pickleLine":88,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":89,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"When User  clicks submit after removes the existing email value","stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Email field cannot be empty”","stepMatchArguments":[]}]},
  {"pwTestLine":114,"pickleLine":93,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":94,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":95,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing the CTC number with valid data","stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":96,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to My Patient page with the edited value in the CTC number field","stepMatchArguments":[]}]},
  {"pwTestLine":120,"pickleLine":98,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":121,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing the CTC number with alphabetic data","stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “CTC number accepts only numeric values”","stepMatchArguments":[]}]},
  {"pwTestLine":126,"pickleLine":103,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":127,"gherkinStepLine":104,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing the CTC number with special characters","stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “CTC number accepts only numeric values”","stepMatchArguments":[]}]},
  {"pwTestLine":132,"pickleLine":108,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":109,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":134,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering a CTC number with fewer digits","stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid CTC number”","stepMatchArguments":[]}]},
  {"pwTestLine":138,"pickleLine":113,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":139,"gherkinStepLine":114,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":115,"keywordType":"Action","textWithKeyword":"When User clicks submit after removing the existing ctc value","stepMatchArguments":[]},{"pwStepLine":141,"gherkinStepLine":116,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “CTC number field cannot be empty”","stepMatchArguments":[]}]},
  {"pwTestLine":144,"pickleLine":118,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":145,"gherkinStepLine":119,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":146,"gherkinStepLine":120,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering a valid value in the weight field","stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":121,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the My Patient page with the updated weight value","stepMatchArguments":[]}]},
  {"pwTestLine":150,"pickleLine":123,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":151,"gherkinStepLine":124,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":152,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating weight value","stepMatchArguments":[]},{"pwStepLine":153,"gherkinStepLine":126,"keywordType":"Outcome","textWithKeyword":"Then User should see new value under vitals column in new record number","stepMatchArguments":[]}]},
  {"pwTestLine":156,"pickleLine":128,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":157,"gherkinStepLine":129,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":130,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering a valid value in the height field","stepMatchArguments":[]},{"pwStepLine":159,"gherkinStepLine":131,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the My Patient page with the updated height value","stepMatchArguments":[]}]},
  {"pwTestLine":162,"pickleLine":133,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":163,"gherkinStepLine":134,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":164,"gherkinStepLine":135,"keywordType":"Action","textWithKeyword":"When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating height value","stepMatchArguments":[]},{"pwStepLine":165,"gherkinStepLine":136,"keywordType":"Outcome","textWithKeyword":"Then User should see new value under vitals column in new record number","stepMatchArguments":[]}]},
  {"pwTestLine":168,"pickleLine":138,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":169,"gherkinStepLine":139,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":140,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering a valid value in the temperature field","stepMatchArguments":[]},{"pwStepLine":171,"gherkinStepLine":141,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the My Patient page with the updated temperature value","stepMatchArguments":[]}]},
  {"pwTestLine":174,"pickleLine":143,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":144,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":145,"keywordType":"Action","textWithKeyword":"When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating temperature value","stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":146,"keywordType":"Outcome","textWithKeyword":"Then User should see new value under vitals column in new record number","stepMatchArguments":[]}]},
  {"pwTestLine":180,"pickleLine":148,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":181,"gherkinStepLine":149,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":150,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering a valid value in the SP field only","stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":151,"keywordType":"Outcome","textWithKeyword":"Then User should recieve error message in DP field","stepMatchArguments":[]}]},
  {"pwTestLine":186,"pickleLine":153,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":187,"gherkinStepLine":154,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":155,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering a valid value in SP & DP field","stepMatchArguments":[]},{"pwStepLine":189,"gherkinStepLine":156,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to My Patient page","stepMatchArguments":[]}]},
  {"pwTestLine":192,"pickleLine":158,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":193,"gherkinStepLine":159,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":160,"keywordType":"Action","textWithKeyword":"When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating the SP & DP value","stepMatchArguments":[]},{"pwStepLine":195,"gherkinStepLine":161,"keywordType":"Outcome","textWithKeyword":"Then User should see new record number","stepMatchArguments":[]}]},
  {"pwTestLine":198,"pickleLine":163,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":199,"gherkinStepLine":164,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":200,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating the SP & DP value","stepMatchArguments":[]},{"pwStepLine":201,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Then User should see new value under vitals column in new record number","stepMatchArguments":[]}]},
  {"pwTestLine":204,"pickleLine":168,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":205,"gherkinStepLine":169,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":206,"gherkinStepLine":170,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering a valid value in the DP field","stepMatchArguments":[]},{"pwStepLine":207,"gherkinStepLine":171,"keywordType":"Outcome","textWithKeyword":"Then User should recieve error message in SP field","stepMatchArguments":[]}]},
  {"pwTestLine":210,"pickleLine":173,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":211,"gherkinStepLine":174,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":212,"gherkinStepLine":175,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering with alphabets","stepMatchArguments":[]},{"pwStepLine":213,"gherkinStepLine":176,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid weight”","stepMatchArguments":[]}]},
  {"pwTestLine":216,"pickleLine":178,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":217,"gherkinStepLine":179,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":218,"gherkinStepLine":180,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering with special characters","stepMatchArguments":[]},{"pwStepLine":219,"gherkinStepLine":181,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid weight”","stepMatchArguments":[]}]},
  {"pwTestLine":222,"pickleLine":183,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":223,"gherkinStepLine":184,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":224,"gherkinStepLine":185,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering with alphabets","stepMatchArguments":[]},{"pwStepLine":225,"gherkinStepLine":186,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid height”","stepMatchArguments":[]}]},
  {"pwTestLine":228,"pickleLine":188,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":229,"gherkinStepLine":189,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":230,"gherkinStepLine":190,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering with special characters","stepMatchArguments":[]},{"pwStepLine":231,"gherkinStepLine":191,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid height”","stepMatchArguments":[]}]},
  {"pwTestLine":234,"pickleLine":193,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":235,"gherkinStepLine":194,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":236,"gherkinStepLine":195,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering with alphabets","stepMatchArguments":[]},{"pwStepLine":237,"gherkinStepLine":196,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid temperature”","stepMatchArguments":[]}]},
  {"pwTestLine":240,"pickleLine":198,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":241,"gherkinStepLine":199,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":242,"gherkinStepLine":200,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering with special characters","stepMatchArguments":[]},{"pwStepLine":243,"gherkinStepLine":201,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid temperature”","stepMatchArguments":[]}]},
  {"pwTestLine":246,"pickleLine":203,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":247,"gherkinStepLine":204,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":248,"gherkinStepLine":205,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering with alphabets","stepMatchArguments":[]},{"pwStepLine":249,"gherkinStepLine":206,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid SP value”","stepMatchArguments":[]}]},
  {"pwTestLine":252,"pickleLine":208,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":253,"gherkinStepLine":209,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":254,"gherkinStepLine":210,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering with special characters","stepMatchArguments":[]},{"pwStepLine":255,"gherkinStepLine":211,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid SP value”","stepMatchArguments":[]}]},
  {"pwTestLine":258,"pickleLine":213,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":259,"gherkinStepLine":214,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":260,"gherkinStepLine":215,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering with alphabets","stepMatchArguments":[]},{"pwStepLine":261,"gherkinStepLine":216,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid DP value”","stepMatchArguments":[]}]},
  {"pwTestLine":264,"pickleLine":218,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":265,"gherkinStepLine":219,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":266,"gherkinStepLine":220,"keywordType":"Action","textWithKeyword":"When User clicks submit after entering with special characters","stepMatchArguments":[]},{"pwStepLine":267,"gherkinStepLine":221,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please enter a valid DP value”","stepMatchArguments":[]}]},
  {"pwTestLine":270,"pickleLine":223,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":271,"gherkinStepLine":224,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":272,"gherkinStepLine":225,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field","stepMatchArguments":[]},{"pwStepLine":273,"gherkinStepLine":226,"keywordType":"Outcome","textWithKeyword":"Then User should see calender date picker displayed with Month,Day,Year","stepMatchArguments":[]}]},
  {"pwTestLine":276,"pickleLine":228,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":277,"gherkinStepLine":229,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":278,"gherkinStepLine":230,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field after selects valid date 01/12/2000","stepMatchArguments":[{"group":{"start":57,"value":"01","children":[]},"parameterTypeName":"int"},{"group":{"start":60,"value":"12","children":[]},"parameterTypeName":"int"},{"group":{"start":63,"value":"2000","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":279,"gherkinStepLine":231,"keywordType":"Outcome","textWithKeyword":"Then User should see the selected date 01/12/2000","stepMatchArguments":[{"group":{"start":34,"value":"01","children":[]},"parameterTypeName":"int"},{"group":{"start":37,"value":"12","children":[]},"parameterTypeName":"int"},{"group":{"start":40,"value":"2000","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":282,"pickleLine":233,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":283,"gherkinStepLine":234,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":284,"gherkinStepLine":235,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field after selects valid date 01/12/2000","stepMatchArguments":[{"group":{"start":57,"value":"01","children":[]},"parameterTypeName":"int"},{"group":{"start":60,"value":"12","children":[]},"parameterTypeName":"int"},{"group":{"start":63,"value":"2000","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":285,"gherkinStepLine":236,"keywordType":"Outcome","textWithKeyword":"Then User should see the selected date in MM/DD/YYYY format","stepMatchArguments":[]}]},
  {"pwTestLine":288,"pickleLine":238,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":289,"gherkinStepLine":239,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":290,"gherkinStepLine":240,"keywordType":"Action","textWithKeyword":"When User clicks calendar Date of Birth field","stepMatchArguments":[]},{"pwStepLine":291,"gherkinStepLine":241,"keywordType":"Outcome","textWithKeyword":"Then User should see the future date to be disabled","stepMatchArguments":[]}]},
  {"pwTestLine":294,"pickleLine":243,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":295,"gherkinStepLine":244,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":296,"gherkinStepLine":245,"keywordType":"Action","textWithKeyword":"When User selects current date as DOB","stepMatchArguments":[]},{"pwStepLine":297,"gherkinStepLine":246,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date ,Please select valid date\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date ,Please select valid date\"","children":[{"start":34,"value":"Invalid date ,Please select valid date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":300,"pickleLine":248,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":301,"gherkinStepLine":249,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":302,"gherkinStepLine":250,"keywordType":"Action","textWithKeyword":"When User enters invalid date (34/20/2022)","stepMatchArguments":[{"group":{"start":26,"value":"34","children":[]},"parameterTypeName":"int"},{"group":{"start":29,"value":"20","children":[]},"parameterTypeName":"int"},{"group":{"start":32,"value":"2022","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":303,"gherkinStepLine":251,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date ,Please select valid date\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date ,Please select valid date\"","children":[{"start":34,"value":"Invalid date ,Please select valid date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":306,"pickleLine":253,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":307,"gherkinStepLine":254,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":308,"gherkinStepLine":255,"keywordType":"Action","textWithKeyword":"When User enters \"ab/cd/efgh\" in the DOB field","stepMatchArguments":[{"group":{"start":12,"value":"\"ab/cd/efgh\"","children":[{"start":13,"value":"ab/cd/efgh","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":309,"gherkinStepLine":256,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date format\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date format\"","children":[{"start":34,"value":"Invalid date format","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":312,"pickleLine":258,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":313,"gherkinStepLine":259,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":314,"gherkinStepLine":260,"keywordType":"Action","textWithKeyword":"When User enters \"12/05\" in the DOB field","stepMatchArguments":[{"group":{"start":12,"value":"\"12/05\"","children":[{"start":13,"value":"12/05","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":315,"gherkinStepLine":261,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date format\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date format\"","children":[{"start":34,"value":"Invalid date format","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":318,"pickleLine":263,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":319,"gherkinStepLine":264,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":320,"gherkinStepLine":265,"keywordType":"Action","textWithKeyword":"When User clicks calendar Date of Birth navigates to 1980 and selects a date","stepMatchArguments":[{"group":{"start":48,"value":"1980","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":321,"gherkinStepLine":266,"keywordType":"Outcome","textWithKeyword":"Then User should see the selected date to be populated on DOB field","stepMatchArguments":[]}]},
  {"pwTestLine":324,"pickleLine":268,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":325,"gherkinStepLine":269,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":326,"gherkinStepLine":270,"keywordType":"Action","textWithKeyword":"When User clicks calendar Date of Birth and selects Feb 29 2024","stepMatchArguments":[{"group":{"start":51,"value":"29","children":[]},"parameterTypeName":"int"},{"group":{"start":54,"value":"2024","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":327,"gherkinStepLine":271,"keywordType":"Outcome","textWithKeyword":"Then User should see the selected date Feb 29 2024","stepMatchArguments":[{"group":{"start":38,"value":"29","children":[]},"parameterTypeName":"int"},{"group":{"start":41,"value":"2024","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":330,"pickleLine":273,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":331,"gherkinStepLine":274,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":332,"gherkinStepLine":275,"keywordType":"Action","textWithKeyword":"When User enter Feb 29 2023","stepMatchArguments":[{"group":{"start":15,"value":"29","children":[]},"parameterTypeName":"int"},{"group":{"start":18,"value":"2023","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":333,"gherkinStepLine":276,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Please select valid date\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Please select valid date\"","children":[{"start":34,"value":"Please select valid date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":336,"pickleLine":278,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":337,"gherkinStepLine":279,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":338,"gherkinStepLine":280,"keywordType":"Action","textWithKeyword":"When User uploads health report in pdf","stepMatchArguments":[]},{"pwStepLine":339,"gherkinStepLine":281,"keywordType":"Outcome","textWithKeyword":"Then User should see uploaded file name with extension","stepMatchArguments":[]}]},
  {"pwTestLine":342,"pickleLine":283,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":343,"gherkinStepLine":284,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":344,"gherkinStepLine":285,"keywordType":"Action","textWithKeyword":"When User clicks submit after uploading a valid file","stepMatchArguments":[]},{"pwStepLine":345,"gherkinStepLine":286,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to My Patient page with the uploaded file saved successfully","stepMatchArguments":[]}]},
  {"pwTestLine":348,"pickleLine":288,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":349,"gherkinStepLine":289,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":350,"gherkinStepLine":290,"keywordType":"Action","textWithKeyword":"When User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report","stepMatchArguments":[]},{"pwStepLine":351,"gherkinStepLine":291,"keywordType":"Outcome","textWithKeyword":"Then User should see new record number in test report page","stepMatchArguments":[]}]},
  {"pwTestLine":354,"pickleLine":293,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":355,"gherkinStepLine":294,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":356,"gherkinStepLine":295,"keywordType":"Action","textWithKeyword":"When User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report","stepMatchArguments":[]},{"pwStepLine":357,"gherkinStepLine":296,"keywordType":"Outcome","textWithKeyword":"Then User should see PDF file in test report","stepMatchArguments":[]}]},
  {"pwTestLine":360,"pickleLine":298,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":361,"gherkinStepLine":299,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":362,"gherkinStepLine":300,"keywordType":"Action","textWithKeyword":"When User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report","stepMatchArguments":[]},{"pwStepLine":363,"gherkinStepLine":301,"keywordType":"Outcome","textWithKeyword":"Then User should see upload date info in test report","stepMatchArguments":[]}]},
  {"pwTestLine":366,"pickleLine":303,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":367,"gherkinStepLine":304,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":368,"gherkinStepLine":305,"keywordType":"Action","textWithKeyword":"When User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report","stepMatchArguments":[]},{"pwStepLine":369,"gherkinStepLine":306,"keywordType":"Outcome","textWithKeyword":"Then User should see health condition as the values in health report","stepMatchArguments":[]}]},
  {"pwTestLine":372,"pickleLine":308,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":373,"gherkinStepLine":309,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":374,"gherkinStepLine":310,"keywordType":"Action","textWithKeyword":"When User clicks submit after uploading a file with an invalid file type - docx","stepMatchArguments":[]},{"pwStepLine":375,"gherkinStepLine":311,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Invalid file type. Please upload a valid file”","stepMatchArguments":[]}]},
  {"pwTestLine":378,"pickleLine":313,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":379,"gherkinStepLine":314,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":380,"gherkinStepLine":315,"keywordType":"Action","textWithKeyword":"When User clicks submit after uploading a file larger than allowed size","stepMatchArguments":[]},{"pwStepLine":381,"gherkinStepLine":316,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “File size exceeds the allowed limit”","stepMatchArguments":[]}]},
  {"pwTestLine":384,"pickleLine":318,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":385,"gherkinStepLine":319,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":386,"gherkinStepLine":320,"keywordType":"Action","textWithKeyword":"When User clicks submit after  uploading invalid file type - docx","stepMatchArguments":[]},{"pwStepLine":387,"gherkinStepLine":321,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Invalid file type. Please upload a valid file”","stepMatchArguments":[]}]},
  {"pwTestLine":390,"pickleLine":323,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":391,"gherkinStepLine":324,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":392,"gherkinStepLine":325,"keywordType":"Action","textWithKeyword":"When User clicks submit without uploading any file","stepMatchArguments":[]},{"pwStepLine":393,"gherkinStepLine":326,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message “Please select a file to upload”","stepMatchArguments":[]}]},
  {"pwTestLine":396,"pickleLine":328,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":397,"gherkinStepLine":329,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":398,"gherkinStepLine":330,"keywordType":"Action","textWithKeyword":"When User clicks the Close button","stepMatchArguments":[]},{"pwStepLine":399,"gherkinStepLine":331,"keywordType":"Outcome","textWithKeyword":"Then User should redirect to My Patient page","stepMatchArguments":[]}]},
  {"pwTestLine":402,"pickleLine":333,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks Edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User is navigated to the Edit Patient dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":403,"gherkinStepLine":334,"keywordType":"Context","textWithKeyword":"Given User is in the edit dialog box","stepMatchArguments":[]},{"pwStepLine":404,"gherkinStepLine":335,"keywordType":"Action","textWithKeyword":"When User clicks the Close button after entering the value","stepMatchArguments":[]},{"pwStepLine":405,"gherkinStepLine":336,"keywordType":"Outcome","textWithKeyword":"Then user should redirect on the My Patient page without saving changes","stepMatchArguments":[]}]},
]; // bdd-data-end