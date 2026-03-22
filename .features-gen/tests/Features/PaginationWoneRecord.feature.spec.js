// Generated from: tests\Features\PaginationWoneRecord.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Pagination management with only one record', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User is logged into the application and only one patient record already exist in the system for that user'); 
  });
  
  test('All pagination arrows disabled when only one page exists', async ({ Given, When, Then }) => { 
    await Given('User is in dietician application dashboard page'); 
    await When('User clicks on My Patients button'); 
    await Then('First, previous, next, last arrows should be disabled'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\PaginationWoneRecord.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the application and only one patient record already exist in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then First, previous, next, last arrows should be disabled","stepMatchArguments":[]}]},
]; // bdd-data-end