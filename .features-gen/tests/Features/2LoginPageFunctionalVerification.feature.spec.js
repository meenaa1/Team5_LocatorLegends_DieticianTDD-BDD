// Generated from: tests\Features\2LoginPageFunctionalVerification.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Login page Functional Verification', () => {

  test.beforeEach('Background', async ({ Given, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('User is on the login page', null, { loginPage }); 
  });
  
  test('Verify Login with valid credential', async ({ When, Then, loginPage }) => { 
    await When('User clicks login button after entering valid credentials', null, { loginPage }); 
    await Then('User should be redirected to dashboard page', null, { loginPage }); 
  });

  test('Verify Login with non-existing user', async ({ When, Then, loginPage }) => { 
    await When('User clicks login button after entering non existing user', null, { loginPage }); 
    await Then('An error message "Invalid username or password" should be displayed', null, { loginPage }); 
  });

  test('Verify Login with spl charac in user name', async ({ When, Then, loginPage }) => { 
    await When('User clicks login button after entering spl charac in username', null, { loginPage }); 
    await Then('An error message "Invalid username or password" should be displayed', null, { loginPage }); 
  });

  test('Verify Login with only few charac of username', async ({ When, Then, loginPage }) => { 
    await When('User clicks login button after entering only few charac of username', null, { loginPage }); 
    await Then('An error message "Invalid username or password" should be displayed', null, { loginPage }); 
  });

  test('Verify Login with wrong password', async ({ When, Then, loginPage }) => { 
    await When('User clicks login button after entering wrong password', null, { loginPage }); 
    await Then('An error message "Invalid username or password" should be displayed', null, { loginPage }); 
  });

  test('Verify Login with spl charac in password', async ({ When, Then, loginPage }) => { 
    await When('User clicks login button after entering spl charach in password', null, { loginPage }); 
    await Then('An error message "Invalid username or password" should be displayed', null, { loginPage }); 
  });

  test('Verify Login with empty username field', async ({ When, Then, loginPage }) => { 
    await When('User clicks login button after entering only password', null, { loginPage }); 
    await Then('An error message Username is Required should be displayed', null, { loginPage }); 
  });

  test('Verify Login with empty password field', async ({ When, Then, loginPage }) => { 
    await When('User clicks login button after entering only username', null, { loginPage }); 
    await Then('An error message Password is Required should be displayed', null, { loginPage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\2LoginPageFunctionalVerification.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User clicks login button after entering valid credentials","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks login button after entering non existing user","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then An error message \"Invalid username or password\" should be displayed","stepMatchArguments":[{"group":{"start":17,"value":"\"Invalid username or password\"","children":[{"start":18,"value":"Invalid username or password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User clicks login button after entering spl charac in username","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then An error message \"Invalid username or password\" should be displayed","stepMatchArguments":[{"group":{"start":17,"value":"\"Invalid username or password\"","children":[{"start":18,"value":"Invalid username or password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When User clicks login button after entering only few charac of username","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then An error message \"Invalid username or password\" should be displayed","stepMatchArguments":[{"group":{"start":17,"value":"\"Invalid username or password\"","children":[{"start":18,"value":"Invalid username or password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks login button after entering wrong password","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then An error message \"Invalid username or password\" should be displayed","stepMatchArguments":[{"group":{"start":17,"value":"\"Invalid username or password\"","children":[{"start":18,"value":"Invalid username or password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks login button after entering spl charach in password","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then An error message \"Invalid username or password\" should be displayed","stepMatchArguments":[{"group":{"start":17,"value":"\"Invalid username or password\"","children":[{"start":18,"value":"Invalid username or password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User clicks login button after entering only password","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then An error message Username is Required should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User clicks login button after entering only username","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then An error message Password is Required should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end