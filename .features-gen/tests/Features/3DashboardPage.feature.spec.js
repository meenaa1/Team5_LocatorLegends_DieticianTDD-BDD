// Generated from: tests\Features\3DashboardPage.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Dashboard page', () => {

  test('Verify Navigation bar links presence', async ({ Given, When, Then, dashboardPage, loginPage }) => { 
    await Given('User is on the login page to login', null, { loginPage }); 
    await When('User clicks login button after entering with valid credentials', null, { loginPage }); 
    await Then('Navigation bar should display exactly four links "My Patients", "New Patient", "Login", and "Logout"', null, { dashboardPage }); 
  });

  test('Verify "My Patients" navigation link is clickable', async ({ Given, When, Then, dashboardPage }) => { 
    await Given('User is on the Dashboard page', null, { dashboardPage }); 
    await When('User clicks the My Patients link in the navigation bar', null, { dashboardPage }); 
    await Then('User should be redirected to the "My Patients" page', null, { dashboardPage }); 
  });

  test('Verify "New Patient" navigation link is clickable', async ({ Given, When, Then, dashboardPage }) => { 
    await Given('User is on the Dashboard page', null, { dashboardPage }); 
    await When('User clicks the New Patient link in the navigation bar', null, { dashboardPage }); 
    await Then('User should be redirected to the "New Patient" page', null, { dashboardPage }); 
  });

  test('Verify "Logout" navigation link is clickable', async ({ Given, When, Then, dashboardPage }) => { 
    await Given('User is on the Dashboard page', null, { dashboardPage }); 
    await When('User clicks the Logout link in the navigation bar', null, { dashboardPage }); 
    await Then('User should be logged out of the application', null, { dashboardPage }); 
  });

  test('Verify Home icon is clickable', async ({ Given, When, Then, dashboardPage }) => { 
    await Given('User is on the Dashboard page', null, { dashboardPage }); 
    await When('User clicks the Home icon on the navigation bar', null, { dashboardPage }); 
    await Then('User should be navigated to the dashboard page', null, { dashboardPage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\3DashboardPage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the login page to login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks login button after entering with valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Navigation bar should display exactly four links \"My Patients\", \"New Patient\", \"Login\", and \"Logout\"","stepMatchArguments":[{"group":{"start":49,"value":"\"My Patients\"","children":[{"start":50,"value":"My Patients","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"New Patient\"","children":[{"start":65,"value":"New Patient","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":79,"value":"\"Login\"","children":[{"start":80,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":92,"value":"\"Logout\"","children":[{"start":93,"value":"Logout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is on the Dashboard page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User clicks the My Patients link in the navigation bar","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the \"My Patients\" page","stepMatchArguments":[{"group":{"start":33,"value":"\"My Patients\"","children":[{"start":34,"value":"My Patients","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User is on the Dashboard page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User clicks the New Patient link in the navigation bar","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the \"New Patient\" page","stepMatchArguments":[{"group":{"start":33,"value":"\"New Patient\"","children":[{"start":34,"value":"New Patient","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on the Dashboard page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User clicks the Logout link in the navigation bar","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should be logged out of the application","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given User is on the Dashboard page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User clicks the Home icon on the navigation bar","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to the dashboard page","stepMatchArguments":[]}]},
]; // bdd-data-end