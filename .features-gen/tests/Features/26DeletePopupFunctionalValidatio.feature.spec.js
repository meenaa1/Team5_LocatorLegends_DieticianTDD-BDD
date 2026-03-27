// Generated from: tests\Features\26DeletePopupFunctionalValidatio.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Delete pop up - functional validation', () => {

  test.beforeEach('Background: After navigating to the My Patient page, the logged-in user clicks the delete icon for a particular patient in the patient table', async ({ Given, When, DeletePopup, loggedInPage }, testInfo) => { if (testInfo.error) return;
    await Given('Given User is on the My Patients page after login', null, { loggedInPage }); 
    await When('User clicks the Delete icon for a particular patient in the patient table', null, { DeletePopup }); 
  });
  
  test('Delete patient – confirm deletion- Navigation check', async ({ Given, When, Then }) => { 
    await Given('User sees the confirmation alert'); 
    await When('User accepts the alert'); 
    await Then('User should be navigated back to main page'); 
  });

  test('Delete patient after confirm deletion', async ({ Given, When, Then }) => { 
    await Given('User sees the confirmation alert'); 
    await When('User accepts the alert'); 
    await Then('Patient should be removed from the table and a success message displayed'); 
  });

  test('Delete patient – cancel deletion Navigation check', async ({ Given, When, Then }) => { 
    await Given('User sees the confirmation alert'); 
    await When('User dismiss the alert'); 
    await Then('User should be navigated back to main page'); 
  });

  test('Delete patient after cancel deletion', async ({ Given, When, Then }) => { 
    await Given('User sees the confirmation alert'); 
    await When('User dismiss the alert'); 
    await Then('Alert should close and the patient should remain in the table'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\26DeletePopupFunctionalValidatio.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks the Delete icon for a particular patient in the patient table","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User sees the confirmation alert","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When User accepts the alert","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated back to main page","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks the Delete icon for a particular patient in the patient table","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given User sees the confirmation alert","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User accepts the alert","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Patient should be removed from the table and a success message displayed","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks the Delete icon for a particular patient in the patient table","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given User sees the confirmation alert","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When User dismiss the alert","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated back to main page","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks the Delete icon for a particular patient in the patient table","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given User sees the confirmation alert","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When User dismiss the alert","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Alert should close and the patient should remain in the table","stepMatchArguments":[]}]},
]; // bdd-data-end