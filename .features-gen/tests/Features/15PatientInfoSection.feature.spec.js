// Generated from: tests\Features\15PatientInfoSection.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Patient information section', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User logged into the app and patients already exists'); 
  });
  
  test('Verify that Correct report opens for selected record', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Corresponding report for that record should be opened'); 
  });

  test('Verify the Title is displayed', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Title " View Patient Test Reports" should be displayed'); 
  });

  test('Verify the Patient Id is displayed', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Patient id corresponding to the record selected in My Patients page should be displayed'); 
  });

  test('Verify the Name is displayed', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Patient name corresponding to the record selected in My Patients page should be displayed'); 
  });

  test('Verify the Email is displayed', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Patient email corresponding to the record selected in My Patients page should be displayed'); 
  });

  test('Verify Contact number is displayed', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Patient contact number corresponding to the record selected in My Patients page should be displayed'); 
  });

  test('Verify the Close icon is displayed', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page after logged in'); 
    await When('User clicks View Previous Test Reports button for a specific record'); 
    await Then('Close icon "x" should be displayed'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\15PatientInfoSection.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Corresponding report for that record should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Title \" View Patient Test Reports\" should be displayed","stepMatchArguments":[{"group":{"start":6,"value":"\" View Patient Test Reports\"","children":[{"start":7,"value":" View Patient Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Patient id corresponding to the record selected in My Patients page should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Patient name corresponding to the record selected in My Patients page should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Patient email corresponding to the record selected in My Patients page should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Patient contact number corresponding to the record selected in My Patients page should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Close icon \"x\" should be displayed","stepMatchArguments":[{"group":{"start":11,"value":"\"x\"","children":[{"start":12,"value":"x","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end