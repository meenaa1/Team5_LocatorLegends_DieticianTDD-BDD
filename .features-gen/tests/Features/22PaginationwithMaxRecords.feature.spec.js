// Generated from: tests\Features\22PaginationwithMaxRecords.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Pagination management with maximum record in a page to view the TestReports', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User is in view patient test report page with multiple records already exist in the system for that user'); 
  });
  
  test('Verify that Each page should display only 2  records', async ({ Given, When, Then, dashboardPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button and clicks on View Patient Test Reports button'); 
    await Then('User should see only 2 records in each page inside the View Test report Popup'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\22PaginationwithMaxRecords.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in view patient test report page with multiple records already exist in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button and clicks on View Patient Test Reports button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should see only 2 records in each page inside the View Test report Popup","stepMatchArguments":[{"group":{"start":21,"value":"2","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end