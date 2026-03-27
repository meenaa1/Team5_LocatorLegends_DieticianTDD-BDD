// Generated from: tests\Features\14AddPatientDetailsFunctionalTestCase.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Add Patient Details - Functional Test Cases', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is in Add Patient Details dialog box', null, { page }); 
  });
  
  test('Presence of values in Allergy dropdown', async ({ When, Then, And }) => { 
    await When('User clicks on Allergy dropdown'); 
    await Then('Values should be present inside Allergy dropdown'); 
    await And('Dropdown should contain 13 values'); 
  });

  test('Presence of values in Food Preference dropdown', async ({ When, Then, And }) => { 
    await When('User clicks on Food Preference dropdown'); 
    await Then('Values should be present inside Food Preference dropdown'); 
    await And('Dropdown should contain 5 values'); 
  });

  test('Presence of values in Cuisine Category dropdown', async ({ When, Then, And }) => { 
    await When('User clicks on Cuisine Category dropdown'); 
    await Then('Values should be present inside Cuisine Category dropdown'); 
    await And('Dropdown should contain 36 values'); 
  });

  test('State of Submit button after adding values in all field', async ({ When, Then }) => { 
    await When('User enters valid values in all field'); 
    await Then('Submit button should be enabled'); 
  });

  test('Success message validation for adding new patient with valid data', async ({ When, Then, And }) => { 
    await When('User clicks Submit after entering valid data in all mandatory fields'); 
    await Then('User should see Patient successfully created - toast message'); 
    await And('User is directed to My Patient Page with New Patient Details created'); 
  });

  test('Validate selection from Allergy dropdown', async ({ When, Then }) => { 
    await When('User selects Values from Allergy dropdown'); 
    await Then('Expected Result should be selected in the Allergy field'); 
  });

  test('Validate Food Preference dropdown selection', async ({ When, Then }) => { 
    await When('User selects Values from Food Preference dropdown'); 
    await Then('Expected Result should be selected in Food Preference field'); 
  });

  test('Validate Cuisine Category dropdown selection', async ({ When, Then }) => { 
    await When('User selects Values from Cuisine Category dropdown'); 
    await Then('Expected Result should be selected in Cuisine Category field'); 
  });

  test('Selecting date for DOB field', async ({ When, Then }) => { 
    await When('User clicks Date of Birth field in the new patient form'); 
    await Then('User should see calender date picker displayed with Month,Day,Year in the new patient form'); 
  });

  test('Validate DOB input scenarios', async ({ When, Then }) => { 
    await When('User enters DOB'); 
    await Then('System should show Expected Result for DOB field'); 
  });

  test('Validate First and Last Name fields', async ({ When, Then }) => { 
    await When('User enters values in  field and navigates to next field'); 
    await Then('User should see error message'); 
  });

  test('Validate Email field', async ({ When, Then }) => { 
    await When('User enters Email and navigates to next field'); 
    await Then('User should see error message'); 
  });

  test('Validate Contact Number field', async ({ When, Then }) => { 
    await When('User enters values in Contact Number field and navigates to next field'); 
    await Then('User should see error message'); 
  });

  test('Add weight with valid data', async ({ When, Then }) => { 
    await When('User navigate to next field after entering valid weight'); 
    await Then('User is directed to My Patient Page with New Patient Details created'); 
  });

  test('Validate Weight field', async ({ When, Then }) => { 
    await When('User enters values in Weight field and navigates to next field'); 
    await Then('User should see error message'); 
  });

  test('Add height with valid data', async ({ When, Then }) => { 
    await When('User navigate to next field after entering valid height'); 
    await Then('User is directed to My Patient Page with New Patient Details created'); 
  });

  test('Validate Height field', async ({ When, Then }) => { 
    await When('User enters values in Height field and navigates to next field'); 
    await Then('User should see error message'); 
  });

  test('Add temperature with valid data', async ({ When, Then }) => { 
    await When('User clicks Submit after entering valid temperature'); 
    await Then('User is directed to My Patient Page with New Patient Details created'); 
  });

  test('Validate Temperature field', async ({ When, Then }) => { 
    await When('User enters values in Temperature field and navigates to next field'); 
    await Then('User should see error message'); 
  });

  test('Add SP,DP with valid data', async ({ When, Then }) => { 
    await When('User clicks Submitafter entering valid SP and DP'); 
    await Then('User is directed to My Patient Page with New Patient Details created'); 
  });

  test('Validate Blood Pressure fields (SP & DP)', async ({ When, Then }) => { 
    await When('User enters values in SP and DP fields and navigates to next field'); 
    await Then('User should see error message'); 
  });

  test('Upload valid file - pdf', async ({ When, Then }) => { 
    await When('User clicks Submit after uploading a valid file'); 
    await Then('User should be redirected to My Patient page with the uploaded file saved successfully after adding the new patient'); 
  });

  test('File name after Upload valid file - pdf', async ({ When, Then }) => { 
    await When('User uploads health report in pdf format'); 
    await Then('User should see uploaded file name with correct extension'); 
  });

  test('Verify uploaded test report details', async ({ When, Then }) => { 
    await When('User clicks View Previous Test Report after being redirected to My Patient page for newly created patient'); 
    await Then('User should see Verification in test report'); 
  });

  test('Validate file upload behavior', async ({ When, Then }) => { 
    await When('User uploads files'); 
    await Then('User should see Expected Result'); 
  });

  test('Close add dialog using Close button', async ({ When, Then }) => { 
    await When('User clicks Close button after submit'); 
    await Then('Add dialog should close and user should be on my patient page without new patient created'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\14AddPatientDetailsFunctionalTestCase.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks on Allergy dropdown","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Values should be present inside Allergy dropdown","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And Dropdown should contain 13 values","stepMatchArguments":[{"group":{"start":24,"value":"13","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":16,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on Food Preference dropdown","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Values should be present inside Food Preference dropdown","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And Dropdown should contain 5 values","stepMatchArguments":[{"group":{"start":24,"value":"5","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User clicks on Cuisine Category dropdown","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Values should be present inside Cuisine Category dropdown","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And Dropdown should contain 36 values","stepMatchArguments":[{"group":{"start":24,"value":"36","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":28,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User enters valid values in all field","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Submit button should be enabled","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User clicks Submit after entering valid data in all mandatory fields","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should see Patient successfully created - toast message","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User selects Values from Allergy dropdown","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Expected Result should be selected in the Allergy field","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When User selects Values from Food Preference dropdown","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then Expected Result should be selected in Food Preference field","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When User selects Values from Cuisine Category dropdown","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Expected Result should be selected in Cuisine Category field","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field in the new patient form","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then User should see calender date picker displayed with Month,Day,Year in the new patient form","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When User enters DOB","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then System should show Expected Result for DOB field","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":50,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When User enters values in  field and navigates to next field","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then User should see error message","stepMatchArguments":[]}]},
  {"pwTestLine":69,"pickleLine":55,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When User enters Email and navigates to next field","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then User should see error message","stepMatchArguments":[]}]},
  {"pwTestLine":74,"pickleLine":60,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":61,"keywordType":"Action","textWithKeyword":"When User enters values in Contact Number field and navigates to next field","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then User should see error message","stepMatchArguments":[]}]},
  {"pwTestLine":79,"pickleLine":64,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering valid weight","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":68,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":69,"keywordType":"Action","textWithKeyword":"When User enters values in Weight field and navigates to next field","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then User should see error message","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":72,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering valid height","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":94,"pickleLine":76,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":77,"keywordType":"Action","textWithKeyword":"When User enters values in Height field and navigates to next field","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"Then User should see error message","stepMatchArguments":[]}]},
  {"pwTestLine":99,"pickleLine":80,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":81,"keywordType":"Action","textWithKeyword":"When User clicks Submit after entering valid temperature","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":82,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":104,"pickleLine":84,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"When User enters values in Temperature field and navigates to next field","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then User should see error message","stepMatchArguments":[]}]},
  {"pwTestLine":109,"pickleLine":88,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"When User clicks Submitafter entering valid SP and DP","stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":90,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":114,"pickleLine":92,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":93,"keywordType":"Action","textWithKeyword":"When User enters values in SP and DP fields and navigates to next field","stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":94,"keywordType":"Outcome","textWithKeyword":"Then User should see error message","stepMatchArguments":[]}]},
  {"pwTestLine":119,"pickleLine":96,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":97,"keywordType":"Action","textWithKeyword":"When User clicks Submit after uploading a valid file","stepMatchArguments":[]},{"pwStepLine":121,"gherkinStepLine":98,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to My Patient page with the uploaded file saved successfully after adding the new patient","stepMatchArguments":[]}]},
  {"pwTestLine":124,"pickleLine":100,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":101,"keywordType":"Action","textWithKeyword":"When User uploads health report in pdf format","stepMatchArguments":[]},{"pwStepLine":126,"gherkinStepLine":102,"keywordType":"Outcome","textWithKeyword":"Then User should see uploaded file name with correct extension","stepMatchArguments":[]}]},
  {"pwTestLine":129,"pickleLine":104,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Report after being redirected to My Patient page for newly created patient","stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then User should see Verification in test report","stepMatchArguments":[]}]},
  {"pwTestLine":134,"pickleLine":108,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"When User uploads files","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":110,"keywordType":"Outcome","textWithKeyword":"Then User should see Expected Result","stepMatchArguments":[]}]},
  {"pwTestLine":139,"pickleLine":112,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":113,"keywordType":"Action","textWithKeyword":"When User clicks Close button after submit","stepMatchArguments":[]},{"pwStepLine":141,"gherkinStepLine":114,"keywordType":"Outcome","textWithKeyword":"Then Add dialog should close and user should be on my patient page without new patient created","stepMatchArguments":[]}]},
]; // bdd-data-end