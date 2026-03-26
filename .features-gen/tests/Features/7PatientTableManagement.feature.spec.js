// Generated from: tests\Features\7PatientTableManagement.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Patient table Management', () => {

  test.beforeEach('Background', async ({ Given, loggedInPage, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('User is in dietician dashboard page with patient records already exist in the system for that user', null, { loggedInPage, loginPage }); 
  });
  
  test('Verify that Patient Id ascending sorting', async ({ Given, When, Then, myPatientsPage }) => { 
    await Given('User is in My Patients page', null, { myPatientsPage }); 
    await When('User clicks up arrow in Patient Id column', null, { myPatientsPage }); 
    await Then('Patient records should be sorted in ascending order by patient id', null, { myPatientsPage }); 
  });

  test('Verify that Patient Id descending sorting', async ({ Given, When, Then, myPatientsPage }) => { 
    await Given('User is in My Patients page', null, { myPatientsPage }); 
    await When('User clicks down arrow in Patient Id column'); 
    await Then('Patient records should be sorted in descending order by patient id', null, { myPatientsPage }); 
  });

  test('Verify that Name ascending sorting', async ({ Given, When, Then, myPatientsPage }) => { 
    await Given('User is in My Patients page', null, { myPatientsPage }); 
    await When('User clicks up arrow in Name column', null, { myPatientsPage }); 
    await Then('Patient records should be sorted in ascending order by name', null, { myPatientsPage }); 
  });

  test('Verify that Name descending sorting', async ({ Given, When, Then, myPatientsPage }) => { 
    await Given('User is in My Patients page', null, { myPatientsPage }); 
    await When('User clicks down arrow in Name column', null, { myPatientsPage }); 
    await Then('Patient records should be sorted in descending order by name', null, { myPatientsPage }); 
  });

  test('Verify that Search functionality using patient name', async ({ Given, When, Then, myPatientsPage }) => { 
    await Given('User is in My Patients page', null, { myPatientsPage }); 
    await When('User searches using patient name', null, { myPatientsPage }); 
    await Then('Matching patient details should be displayed', null, { myPatientsPage }); 
  });

  test('Verify that Search funcionality using patient id', async ({ Given, When, Then, myPatientsPage }) => { 
    await Given('User is in My Patients page', null, { myPatientsPage }); 
    await When('User searched using patient id', null, { myPatientsPage }); 
    await Then('Matching patient details should be displayed with correct Patient ID', null, { myPatientsPage }); 
  });

  test('Verify that Search is cleared', async ({ Given, When, Then, myPatientsPage }) => { 
    await Given('User entered the text in search box in My Patients page', null, { myPatientsPage }); 
    await When('User clears the search text', null, { myPatientsPage }); 
    await Then('All patient records should be displayed again', null, { myPatientsPage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\7PatientTableManagement.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in dietician dashboard page with patient records already exist in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks up arrow in Patient Id column","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Patient records should be sorted in ascending order by patient id","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in dietician dashboard page with patient records already exist in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks down arrow in Patient Id column","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Patient records should be sorted in descending order by patient id","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in dietician dashboard page with patient records already exist in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User clicks up arrow in Name column","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Patient records should be sorted in ascending order by name","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in dietician dashboard page with patient records already exist in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks down arrow in Name column","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Patient records should be sorted in descending order by name","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in dietician dashboard page with patient records already exist in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When User searches using patient name","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Matching patient details should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in dietician dashboard page with patient records already exist in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given User is in My Patients page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User searched using patient id","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Matching patient details should be displayed with correct Patient ID","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in dietician dashboard page with patient records already exist in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given User entered the text in search box in My Patients page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When User clears the search text","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then All patient records should be displayed again","stepMatchArguments":[]}]},
]; // bdd-data-end