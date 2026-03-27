// Generated from: tests\Features\4MyPatientsUI.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('My Patients Page UI', () => {

  test.beforeEach('Background', async ({ Given, loggedInPage }, testInfo) => { if (testInfo.error) return;
    await Given('User is logged into the application', null, { loggedInPage }); 
  });
  
  test('Verify the Title is displayed', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Page header "My Patients" should be displayed', null, { myPatientsPage }); 
  });

  test('Verify the Search bar display', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Search bar should be displayed', null, { myPatientsPage }); 
  });

  test('Verify the Search icon', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Search icon should be displayed inside the search bar', null, { myPatientsPage }); 
  });

  test('Verify the Search placeholder text', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Placeholder text "Search..." should be displayed', null, { myPatientsPage }); 
  });

  test('Verify the Table column header', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('"Patient Id", "Name", "Details" , "Last Visit Date", "Actions" , " Edit/Delete" should be displayed', null, { myPatientsPage }); 
  });

  test('Verify the Patient Id column sorting icon', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Up and down arrow icons should be displayed in the Patient Id column header', null, { myPatientsPage }); 
  });

  test('Verify the Name column sorting icon', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Up and down arrow icons should be displayed in the Name column header', null, { myPatientsPage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\4MyPatientsUI.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Page header \"My Patients\" should be displayed","stepMatchArguments":[{"group":{"start":12,"value":"\"My Patients\"","children":[{"start":13,"value":"My Patients","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Search bar should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Search icon should be displayed inside the search bar","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Placeholder text \"Search...\" should be displayed","stepMatchArguments":[{"group":{"start":17,"value":"\"Search...\"","children":[{"start":18,"value":"Search...","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then \"Patient Id\", \"Name\", \"Details\" , \"Last Visit Date\", \"Actions\" , \" Edit/Delete\" should be displayed","stepMatchArguments":[{"group":{"start":0,"value":"\"Patient Id\"","children":[{"start":1,"value":"Patient Id","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":14,"value":"\"Name\"","children":[{"start":15,"value":"Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":22,"value":"\"Details\"","children":[{"start":23,"value":"Details","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"Last Visit Date\"","children":[{"start":35,"value":"Last Visit Date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"Actions\"","children":[{"start":54,"value":"Actions","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":65,"value":"\" Edit/Delete\"","children":[{"start":66,"value":" Edit/Delete","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Up and down arrow icons should be displayed in the Patient Id column header","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Up and down arrow icons should be displayed in the Name column header","stepMatchArguments":[]}]},
]; // bdd-data-end