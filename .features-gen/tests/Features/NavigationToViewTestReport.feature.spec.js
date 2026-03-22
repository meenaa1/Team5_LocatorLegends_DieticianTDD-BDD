// Generated from: tests\Features\NavigationToViewTestReport.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Navigation to view patient test reports', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User is in dietician dashboard page with patient records already exist in the system for that user'); 
  });
  
  test('Verify that Navigation of View Previous Test Reports', async ({ Given, When, Then }) => { 
    await Given('User is in My Patients page'); 
    await When('User clicks View Previous Test Reports under action column'); 
    await Then('User should be navigated to "View Patient Test Reports" page'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\NavigationToViewTestReport.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in dietician dashboard page with patient records already exist in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks View Previous Test Reports under action column","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to \"View Patient Test Reports\" page","stepMatchArguments":[{"group":{"start":28,"value":"\"View Patient Test Reports\"","children":[{"start":29,"value":"View Patient Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end