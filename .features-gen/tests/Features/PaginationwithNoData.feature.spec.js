// Generated from: tests\Features\PaginationwithNoData.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Pagination management when no data exists in the table', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User logged into the application without patient added to that user'); 
  });
  
  test('Verify the Pagination when no patient data exists', async ({ Given, When, Then }) => { 
    await Given('User is in dietician application dashboard page'); 
    await When('User clicks on My Patients button'); 
    await Then('"Showing 0 to 0 of 0 patients" should be displayed'); 
  });

  test('Verify that All pagination arrows disabled when no data exists', async ({ Given, When, Then }) => { 
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
  $uri: [({}, use) => use('tests\\Features\\PaginationwithNoData.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the application without patient added to that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then \"Showing 0 to 0 of 0 patients\" should be displayed","stepMatchArguments":[{"group":{"start":0,"value":"\"Showing 0 to 0 of 0 patients\"","children":[{"start":1,"value":"Showing 0 to 0 of 0 patients","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into the application without patient added to that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then First, previous, next, last arrows should be disabled","stepMatchArguments":[]}]},
]; // bdd-data-end