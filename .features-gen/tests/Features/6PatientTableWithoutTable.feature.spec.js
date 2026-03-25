// Generated from: tests\Features\6PatientTableWithoutTable.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Patient table without record', () => {

  test.beforeEach('Background', async ({ Given, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('User logged into the application without patient added to that user', null, { loginPage }); 
  });
  
  test('Verify that My Patient page loads with empty table', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('My Patients page should display with empty table', null, { myPatientsPage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\6PatientTableWithoutTable.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the application without patient added to that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then My Patients page should display with empty table","stepMatchArguments":[]}]},
]; // bdd-data-end