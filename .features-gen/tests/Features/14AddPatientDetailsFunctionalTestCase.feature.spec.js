// Generated from: tests\Features\14AddPatientDetailsFunctionalTestCase.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Add Patient Details - Functional Test Cases', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is in Add Patient Details dialog box', null, { page }); 
  });
  
  test('Presence of values in Allergy dropdown', async ({ When, Then, And }) => { 
    await When('User clicks on Allergy dropdown'); 
    await Then('Values should be present inside Allergy dropdown'); 
    await And('Allergy Dropdown should contain 13 values'); 
  });

  test('Presence of values in Food Preference dropdown', async ({ When, Then, And }) => { 
    await When('User clicks on Food Preference dropdown'); 
    await Then('Values should be present inside Food Preference dropdown'); 
    await And('Food Preference Dropdown should contain 5 values'); 
  });

  test('Presence of values in Cuisine Category dropdown', async ({ When, Then, And }) => { 
    await When('User clicks on Cuisine Category dropdown'); 
    await Then('Values should be present inside Cuisine Category dropdown'); 
    await And('Cuisine Dropdown should contain 36 values'); 
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
    await When('User clicks Date of Birth field'); 
    await Then('User should see calender date picker displayed with Month,Day,Year'); 
  });

  test('Validate DOB input scenarios', async ({ When, Then }) => { 
    await When('User enters DOB'); 
    await Then('System should show Expected Result for DOB field'); 
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
  {"pwTestLine":10,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks on Allergy dropdown","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Values should be present inside Allergy dropdown","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And Allergy Dropdown should contain 13 values","stepMatchArguments":[{"group":{"start":32,"value":"13","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":16,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on Food Preference dropdown","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Values should be present inside Food Preference dropdown","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And Food Preference Dropdown should contain 5 values","stepMatchArguments":[{"group":{"start":40,"value":"5","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User clicks on Cuisine Category dropdown","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Values should be present inside Cuisine Category dropdown","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And Cuisine Dropdown should contain 36 values","stepMatchArguments":[{"group":{"start":32,"value":"36","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":28,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User enters valid values in all field","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Submit button should be enabled","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User clicks Submit after entering valid data in all mandatory fields","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should see Patient successfully created - toast message","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User selects Values from Allergy dropdown","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Expected Result should be selected in the Allergy field","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When User selects Values from Food Preference dropdown","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then Expected Result should be selected in Food Preference field","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When User selects Values from Cuisine Category dropdown","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Expected Result should be selected in Cuisine Category field","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then User should see calender date picker displayed with Month,Day,Year","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When User enters DOB","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then System should show Expected Result for DOB field","stepMatchArguments":[]}]},
]; // bdd-data-end