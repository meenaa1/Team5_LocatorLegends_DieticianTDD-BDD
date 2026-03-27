// Generated from: tests\Features\14AddPatientDetailsFunctionalTestCase.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Add Patient Details - Functional Test Cases', () => {

  test.beforeEach('Background', async ({ Given, addPatientPage }, testInfo) => { if (testInfo.error) return;
    await Given('User is in Add Patient Details dialog box', null, { addPatientPage }); 
  });
  
  test('Presence of values in Allergy dropdown', async ({ When, Then, And, addPatientPage }) => { 
    await When('User clicks on Allergy dropdown', null, { addPatientPage }); 
    await Then('Values should be present inside Allergy dropdown', null, { addPatientPage }); 
    await And('Allergy dropdown should contain 13 values', null, { addPatientPage }); 
  });

  test('Presence of values in Food Preference dropdown', async ({ When, Then, And, addPatientPage }) => { 
    await When('User clicks on Food Preference dropdown', null, { addPatientPage }); 
    await Then('Values should be present inside Food Preference dropdown', null, { addPatientPage }); 
    await And('Food Preference dropdown should contain 5 values', null, { addPatientPage }); 
  });

  test('Presence of values in Cuisine Category dropdown', async ({ When, Then, And, addPatientPage }) => { 
    await When('User clicks on Cuisine Category dropdown', null, { addPatientPage }); 
    await Then('Values should be present inside Cuisine Category dropdown', null, { addPatientPage }); 
    await And('Cuisine Category dropdown should contain 36 values', null, { addPatientPage }); 
  });

  test('State of Submit button after adding values in all field', async ({ When, Then, addPatientPage }) => { 
    await When('User enters valid values in all field', null, { addPatientPage }); 
    await Then('Submit button should be enabled', null, { addPatientPage }); 
  });

  test('Success message validation for adding new patient with valid data', async ({ When, Then, And, addPatientPage }) => { 
    await When('User clicks Submit after entering valid data in all mandatory fields', null, { addPatientPage }); 
    await Then('User should see Patient successfully created - toast message', null, { addPatientPage }); 
    await And('User is directed to My Patient Page with New Patient Details created', null, { addPatientPage }); 
  });

  test.describe('Validate selection from Allergy dropdown', () => {

    test('Example #1', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "Peanuts" from Allergy dropdown', null, { addPatientPage }); 
      await Then('"Peanuts" should be selected in the Allergy field', null, { addPatientPage }); 
    });

    test('Example #2', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "Peanuts, Milk" from Allergy dropdown', null, { addPatientPage }); 
      await Then('"Peanuts, Milk" should be selected in the Allergy field', null, { addPatientPage }); 
    });

    test('Example #3', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "Soybean" from Allergy dropdown', null, { addPatientPage }); 
      await Then('"No selection" should be selected in the Allergy field', null, { addPatientPage }); 
    });

    test('Example #4', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "" from Allergy dropdown', null, { addPatientPage }); 
      await Then('"Allergies is required" should be selected in the Allergy field', null, { addPatientPage }); 
    });

  });

  test.describe('Validate Food Preference dropdown selection', () => {

    test('Example #1', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "Vegan" from Food Preference dropdown', null, { addPatientPage }); 
      await Then('"Vegan" should be selected in the Food Preference field', null, { addPatientPage }); 
    });

    test('Example #2', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "Vegan, Jain" from Food Preference dropdown', null, { addPatientPage }); 
      await Then('"Vegan, Jain" should be selected in the Food Preference field', null, { addPatientPage }); 
    });

    test('Example #3', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "Keto" from Food Preference dropdown', null, { addPatientPage }); 
      await Then('"No selection" should be selected in the Food Preference field', null, { addPatientPage }); 
    });

    test('Example #4', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "" from Food Preference dropdown', null, { addPatientPage }); 
      await Then('"Food Preference is required" should be selected in the Food Preference field', null, { addPatientPage }); 
    });

  });

  test.describe('Validate Cuisine Category dropdown selection', () => {

    test('Example #1', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "Punjabi" from Cuisine Category dropdown', null, { addPatientPage }); 
      await Then('"Punjabi" should be selected in the Cuisine Category field', null, { addPatientPage }); 
    });

    test('Example #2', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "Punjabi, Gujarati" from Cuisine Category dropdown', null, { addPatientPage }); 
      await Then('"Punjabi, Gujarati" should be selected in the Cuisine Category field', null, { addPatientPage }); 
    });

    test('Example #3', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "Italian" from Cuisine Category dropdown', null, { addPatientPage }); 
      await Then('"No selection" should be selected in the Cuisine Category field', null, { addPatientPage }); 
    });

    test('Example #4', async ({ When, Then, addPatientPage }) => { 
      await When('User selects "" from Cuisine Category dropdown', null, { addPatientPage }); 
      await Then('"Cusine Category is required" should be selected in the Cuisine Category field', null, { addPatientPage }); 
    });

  });

  test('Selecting date for DOB field', async ({ When, Then, addPatientPage }) => { 
    await When('User clicks Date of Birth field in the new patient form', null, { addPatientPage }); 
    await Then('User should see calender date picker displayed with Month,Day,Year in the new patient form', null, { addPatientPage }); 
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
  {"pwTestLine":10,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks on Allergy dropdown","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Values should be present inside Allergy dropdown","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And Allergy dropdown should contain 13 values","stepMatchArguments":[{"group":{"start":32,"value":"13","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":16,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on Food Preference dropdown","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Values should be present inside Food Preference dropdown","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And Food Preference dropdown should contain 5 values","stepMatchArguments":[{"group":{"start":40,"value":"5","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User clicks on Cuisine Category dropdown","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Values should be present inside Cuisine Category dropdown","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And Cuisine Category dropdown should contain 36 values","stepMatchArguments":[{"group":{"start":41,"value":"36","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":28,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User enters valid values in all field","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Submit button should be enabled","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User clicks Submit after entering valid data in all mandatory fields","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should see Patient successfully created - toast message","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User selects \"Peanuts\" from Allergy dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"Peanuts\"","children":[{"start":14,"value":"Peanuts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then \"Peanuts\" should be selected in the Allergy field","stepMatchArguments":[{"group":{"start":0,"value":"\"Peanuts\"","children":[{"start":1,"value":"Peanuts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User selects \"Peanuts, Milk\" from Allergy dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"Peanuts, Milk\"","children":[{"start":14,"value":"Peanuts, Milk","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then \"Peanuts, Milk\" should be selected in the Allergy field","stepMatchArguments":[{"group":{"start":0,"value":"\"Peanuts, Milk\"","children":[{"start":1,"value":"Peanuts, Milk","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":51,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User selects \"Soybean\" from Allergy dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"Soybean\"","children":[{"start":14,"value":"Soybean","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then \"No selection\" should be selected in the Allergy field","stepMatchArguments":[{"group":{"start":0,"value":"\"No selection\"","children":[{"start":1,"value":"No selection","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":38,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User selects \"\" from Allergy dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"\"","children":[{"start":14,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":58,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then \"Allergies is required\" should be selected in the Allergy field","stepMatchArguments":[{"group":{"start":0,"value":"\"Allergies is required\"","children":[{"start":1,"value":"Allergies is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":65,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When User selects \"Vegan\" from Food Preference dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"Vegan\"","children":[{"start":14,"value":"Vegan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":67,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then \"Vegan\" should be selected in the Food Preference field","stepMatchArguments":[{"group":{"start":0,"value":"\"Vegan\"","children":[{"start":1,"value":"Vegan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":70,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When User selects \"Vegan, Jain\" from Food Preference dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"Vegan, Jain\"","children":[{"start":14,"value":"Vegan, Jain","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":72,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then \"Vegan, Jain\" should be selected in the Food Preference field","stepMatchArguments":[{"group":{"start":0,"value":"\"Vegan, Jain\"","children":[{"start":1,"value":"Vegan, Jain","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":75,"pickleLine":48,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When User selects \"Keto\" from Food Preference dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"Keto\"","children":[{"start":14,"value":"Keto","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":77,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then \"No selection\" should be selected in the Food Preference field","stepMatchArguments":[{"group":{"start":0,"value":"\"No selection\"","children":[{"start":1,"value":"No selection","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":80,"pickleLine":49,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When User selects \"\" from Food Preference dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"\"","children":[{"start":14,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":82,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then \"Food Preference is required\" should be selected in the Food Preference field","stepMatchArguments":[{"group":{"start":0,"value":"\"Food Preference is required\"","children":[{"start":1,"value":"Food Preference is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":89,"pickleLine":57,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User selects \"Punjabi\" from Cuisine Category dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"Punjabi\"","children":[{"start":14,"value":"Punjabi","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":91,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then \"Punjabi\" should be selected in the Cuisine Category field","stepMatchArguments":[{"group":{"start":0,"value":"\"Punjabi\"","children":[{"start":1,"value":"Punjabi","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":94,"pickleLine":58,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User selects \"Punjabi, Gujarati\" from Cuisine Category dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"Punjabi, Gujarati\"","children":[{"start":14,"value":"Punjabi, Gujarati","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":96,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then \"Punjabi, Gujarati\" should be selected in the Cuisine Category field","stepMatchArguments":[{"group":{"start":0,"value":"\"Punjabi, Gujarati\"","children":[{"start":1,"value":"Punjabi, Gujarati","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":99,"pickleLine":59,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User selects \"Italian\" from Cuisine Category dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"Italian\"","children":[{"start":14,"value":"Italian","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":101,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then \"No selection\" should be selected in the Cuisine Category field","stepMatchArguments":[{"group":{"start":0,"value":"\"No selection\"","children":[{"start":1,"value":"No selection","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":104,"pickleLine":60,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User selects \"\" from Cuisine Category dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"\"","children":[{"start":14,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":106,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then \"Cusine Category is required\" should be selected in the Cuisine Category field","stepMatchArguments":[{"group":{"start":0,"value":"\"Cusine Category is required\"","children":[{"start":1,"value":"Cusine Category is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":111,"pickleLine":62,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is in Add Patient Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field in the new patient form","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then User should see calender date picker displayed with Month,Day,Year in the new patient form","stepMatchArguments":[]}]},
]; // bdd-data-end