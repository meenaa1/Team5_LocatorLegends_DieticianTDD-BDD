// Generated from: tests\Features\16ViewPatientTestReportsTable.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('View patient test reports - table', () => {

  test.beforeEach('Background', async ({ Given, loggedInPage }, testInfo) => { if (testInfo.error) return;
    await Given('User logged into the app and patients already exists', null, { loggedInPage }); 
  });
  
  test('Verify that Report table is displayed', async ({ Given, When, Then, myPatientsPage }) => { 
    await Given('User is in My Patients page after logged in', null, { myPatientsPage }); 
    await When('User clicks View Previous Test Reports button for a specific record', null, { myPatientsPage }); 
    await Then('Reports table shouldbe displayed', null, { myPatientsPage }); 
  });

  test('Verify that Table headers column are displayed', async ({ Given, When, Then, myPatientsPage }) => { 
    await Given('User is in My Patients page after logged in', null, { myPatientsPage }); 
    await When('User clicks View Previous Test Reports button for a specific record', null, { myPatientsPage }); 
    await Then('Table headers should have Record Number, File, Uploaded Time,File or Report Name, Vitals, Identified Health Conditions', null, { myPatientsPage }); 
  });

  test('Verify that Table headers column order', async ({ Given, When, Then, myPatientsPage }) => { 
    await Given('User is in My Patients page after logged in', null, { myPatientsPage }); 
    await When('User clicks View Previous Test Reports button for a specific record', null, { myPatientsPage }); 
    await Then('Record header should be in the exact order Record Number → File → Uploaded Time → File or Report Name → Vitals → Identified Health Conditions should be displayed', null, { myPatientsPage }); 
  });

  test('Verify that Pagination controls are displayed', async ({ Given, When, Then, myPatientsPage }) => { 
    await Given('User is in My Patients page after logged in', null, { myPatientsPage }); 
    await When('User clicks View Previous Test Reports button for a specific record', null, { myPatientsPage }); 
    await Then('Pagination controls First, previous, next, last arrows should be displayed', null, { myPatientsPage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\16ViewPatientTestReportsTable.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Reports table shouldbe displayed","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Table headers should have Record Number, File, Uploaded Time,File or Report Name, Vitals, Identified Health Conditions","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Record header should be in the exact order Record Number → File → Uploaded Time → File or Report Name → Vitals → Identified Health Conditions should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged in","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports button for a specific record","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Pagination controls First, previous, next, last arrows should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end