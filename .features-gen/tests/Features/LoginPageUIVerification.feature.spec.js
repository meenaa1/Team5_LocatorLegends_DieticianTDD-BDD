// Generated from: tests\Features\LoginPageUIVerification.feature
import { test } from "playwright-bdd";

test.describe('Login Page UI Verification', () => {

  test('Verify navigation bar text', async ({ Given, When, Then }) => { 
    await Given('User is on the browser'); 
    await When('User enters the application URL'); 
    await Then('User should see the text "Dietician Project" on the left side of the navigation bar'); 
  });

  test('Verify navigation bar icon', async ({ Given, Then }) => { 
    await Given('User is on the login page'); 
    await Then('User should see the home icon on the left side of the navigation bar'); 
  });

  test('Verify navigation bar background color', async ({ Given, Then }) => { 
    await Given('User is on the login page'); 
    await Then('Navigation bar background should be blue-purple in color'); 
  });

  test('Verify page title in login card', async ({ Given, Then }) => { 
    await Given('User is on the login page'); 
    await Then('User should see the heading "Dietician Application" inside the login card'); 
  });

  test('Verify username label', async ({ Given, Then }) => { 
    await Given('User is on the login page'); 
    await Then('User should see the label text "username"'); 
  });

  test('Verify password label', async ({ Given, Then }) => { 
    await Given('User is on the login page'); 
    await Then('User should see the label text "password"'); 
  });

  test('Verify username input field presence', async ({ Given, Then }) => { 
    await Given('User is on the login page'); 
    await Then('Username input field should be visible'); 
  });

  test('Verify password input field presence', async ({ Given, Then }) => { 
    await Given('User is on the login page'); 
    await Then('Password input field should be visible'); 
  });

  test('Verify login button presence', async ({ Given, Then }) => { 
    await Given('User is on the login page'); 
    await Then('Login button should be visible'); 
  });

  test('Verify login button styling', async ({ Given, Then, And }) => { 
    await Given('User is on the login page'); 
    await Then('Login button should have blue-purple background'); 
    await And('Login button text color should be white'); 
  });

  test('Verify input field label alignment', async ({ Given, Then, And }) => { 
    await Given('User is on the login page'); 
    await Then('Username label should be left-aligned above the username input field'); 
    await And('Password label should be left-aligned above the password input field'); 
  });

  test('Verify total number of input fields', async ({ Given, Then }) => { 
    await Given('User is on the login page'); 
    await Then('User should see exactly 2 input fields'); 
  });

  test('Verify login button enabled state', async ({ Given, Then }) => { 
    await Given('User is on the login page'); 
    await Then('Login button should be enabled'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\LoginPageUIVerification.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters the application URL","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Dietician Project\" on the left side of the navigation bar","stepMatchArguments":[{"group":{"start":25,"value":"\"Dietician Project\"","children":[{"start":26,"value":"Dietician Project","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see the home icon on the left side of the navigation bar","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Navigation bar background should be blue-purple in color","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then User should see the heading \"Dietician Application\" inside the login card","stepMatchArguments":[{"group":{"start":28,"value":"\"Dietician Application\"","children":[{"start":29,"value":"Dietician Application","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":28,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then User should see the label text \"username\"","stepMatchArguments":[{"group":{"start":31,"value":"\"username\"","children":[{"start":32,"value":"username","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should see the label text \"password\"","stepMatchArguments":[{"group":{"start":31,"value":"\"password\"","children":[{"start":32,"value":"password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":38,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Username input field should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Password input field should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":48,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then Login button should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":53,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then Login button should have blue-purple background","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"And Login button text color should be white","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":59,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then Username label should be left-aligned above the username input field","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"And Password label should be left-aligned above the password input field","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":50,"tags":[],"steps":[{"pwStepLine":65,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then User should see exactly 2 input fields","stepMatchArguments":[{"group":{"start":24,"value":"2","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":69,"pickleLine":54,"tags":[],"steps":[{"pwStepLine":70,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Login button should be enabled","stepMatchArguments":[]}]},
]; // bdd-data-end