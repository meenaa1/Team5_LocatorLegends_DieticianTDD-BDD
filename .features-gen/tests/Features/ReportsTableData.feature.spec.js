// Generated from: tests\Features\ReportsTableData.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Reports table data scenarios', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User logged into the app and patients already exists'); 
  });
  
  test('Verify that Record number is displayed', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Each report should display a record number'); 
  });

  test('Verigying View PDF button display', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Each report should display View PDF button'); 
  });

  test('Verifying that Uploaded time is displayed', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Each report should display uploaded time'); 
  });

  test('Verify that File name is displayed', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Each report should display file or report name'); 
  });

  test('Verify that Vitals information is displayed', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Each report should display vitals information'); 
  });

  test('Verifying the Vitals order', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Vitals should be displayed in the order Weight → Height → Temperature → SP → DP'); 
  });

  test('Verifying Vitals are displayed in multiline format', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Vitals should be displayed in multilines'); 
  });

  test('Verifying Health conditions is displayed', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Each report should display Identified health conditions'); 
  });

  test('Verifying that Health conditions are displayed in multiline format', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Identified health conditions should be displayed in multilines'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\ReportsTableData.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Each report should display a record number","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Each report should display View PDF button","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Each report should display uploaded time","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Each report should display file or report name","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Each report should display vitals information","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Vitals should be displayed in the order Weight → Height → Temperature → SP → DP","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Vitals should be displayed in multilines","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Each report should display Identified health conditions","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then Identified health conditions should be displayed in multilines","stepMatchArguments":[]}]},
]; // bdd-data-end