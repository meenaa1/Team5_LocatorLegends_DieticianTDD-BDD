// Generated from: tests\Features\25DeletePopupInfoValidation.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Delete pop up info validation', () => {

  test.beforeEach('Background: Navigating to the My Patient page after logged-in', async ({ Given, loggedInPage }, testInfo) => { if (testInfo.error) return;
    await Given('Given User is on the My Patients page after login', null, { loggedInPage }); 
  });
  
  test('Delete patient – alert title verification', async ({ Given, When, Then, DeletePopup, editPage }) => { 
    await Given('User is on the My Patient page', null, { editPage }); 
    await When('User clicks the Delete icon for a particular patient in the patient table', null, { DeletePopup }); 
    await Then('Alert title should be “Confirm”', null, { DeletePopup }); 
  });

  test('Delete patient – alert text verification', async ({ Given, When, Then, DeletePopup, editPage }) => { 
    await Given('User is on the My Patient page', null, { editPage }); 
    await When('User clicks the Delete icon for a particular patient in the patient table', null, { DeletePopup }); 
    await Then('Alert text should be “Are you sure to delete [Patient Name]?”', null, { DeletePopup }); 
  });

  test('Delete patient – Yes button verification', async ({ Given, When, Then, DeletePopup, editPage }) => { 
    await Given('User is on the My Patient page', null, { editPage }); 
    await When('User clicks the Delete icon for a particular patient in the patient table', null, { DeletePopup }); 
    await Then('Alert should display a Yes button', null, { DeletePopup }); 
  });

  test('Delete patient – No button verification', async ({ Given, When, Then, DeletePopup, editPage }) => { 
    await Given('User is on the My Patient page', null, { editPage }); 
    await When('User clicks the Delete icon for a particular patient in the patient table', null, { DeletePopup }); 
    await Then('Alert should display a No button', null, { DeletePopup }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\25DeletePopupInfoValidation.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is on the My Patient page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks the Delete icon for a particular patient in the patient table","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Alert title should be “Confirm”","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is on the My Patient page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks the Delete icon for a particular patient in the patient table","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Alert text should be “Are you sure to delete [Patient Name]?”","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User is on the My Patient page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User clicks the Delete icon for a particular patient in the patient table","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Alert should display a Yes button","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Given User is on the My Patients page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User is on the My Patient page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks the Delete icon for a particular patient in the patient table","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Alert should display a No button","stepMatchArguments":[]}]},
]; // bdd-data-end