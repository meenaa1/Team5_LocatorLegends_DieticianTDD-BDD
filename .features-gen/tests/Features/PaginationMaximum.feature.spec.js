// Generated from: tests\Features\PaginationMaximum.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Pagination management with maximum record in a page', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User is logged into the application with maximum of 5 patient records in a page'); 
  });
  
  test('Verify that Each page should display only 5 records', async ({ Given, When, Then }) => { 
    await Given('User is in dietician application dashboard page'); 
    await When('User clicks on My Patients button'); 
    await Then('User should see only 5 records in each page'); 
  });

  test('Verify that Newly added record move to the next page when 6th record is added', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page with table displays maximum of 5 record per page'); 
    await When('User adds 6th record'); 
    await Then('User should see the newly added record in the next page'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\PaginationMaximum.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the application with maximum of 5 patient records in a page","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"5","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should see only 5 records in each page","stepMatchArguments":[{"group":{"start":21,"value":"5","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the application with maximum of 5 patient records in a page","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"5","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page with table displays maximum of 5 record per page","stepMatchArguments":[{"group":{"start":59,"value":"5","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User adds 6th record","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should see the newly added record in the next page","stepMatchArguments":[]}]},
]; // bdd-data-end