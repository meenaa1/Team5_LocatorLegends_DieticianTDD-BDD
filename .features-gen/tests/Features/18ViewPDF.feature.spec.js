// Generated from: tests\Features\18ViewPDF.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('View PDF', () => {

  test.beforeEach('Background', async ({ Given, loggedInPage }, testInfo) => { if (testInfo.error) return;
    await Given('User is in My Patients page after logged into the app and patients already exists', null, { loggedInPage }); 
  });
  
  test('Verify that Corresponding PDF report opens for a record', async ({ Given, When, Then, myPatientsPage, viewPDFPage }) => { 
    await Given('User is in View Plan Test Reports page', null, { myPatientsPage }); 
    await When('User clicks View PDF button for a particular record', null, { viewPDFPage }); 
    await Then('Corresponding report for that record should be opened for that particular record', null, { viewPDFPage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\18ViewPDF.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page after logged into the app and patients already exists","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in View Plan Test Reports page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks View PDF button for a particular record","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Corresponding report for that record should be opened for that particular record","stepMatchArguments":[]}]},
]; // bdd-data-end