// Generated from: tests\Features\LoginPageUIVerification.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Login page UI verification', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User is on the browser'); 
  });
  
  test('Verify Navigation bar text visibility', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('User should see the text "Dietician Project" on the navigation bar', null, { loginPage }); 
  });

  test('Navigation bar icon visibility', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('User should see the home icon on left side of the navigation bar', null, { loginPage }); 
  });

  test('Verify Navigation bar background colour', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('Navigation bar background should have a blue color', null, { loginPage }); 
  });

  test('Verify Page title visibility', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('Heading "Dietician Application" should be visible', null, { loginPage }); 
  });

  test('Verify label for first field', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('User should see the label text "username"', null, { loginPage }); 
  });

  test('Verify label for second field', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('User should see the label text "password"', null, { loginPage }); 
  });

  test('Verify Username input field presence', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('Username input field should be visible', null, { loginPage }); 
  });

  test('Verify Password input field presence', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('Password input field should be visible', null, { loginPage }); 
  });

  test('Verify Login button presence', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('Login button should be visible', null, { loginPage }); 
  });

  test('Verify Login button color and styling', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('Login button should be displayed with a blue color and white text', null, { loginPage }); 
  });

  test('Verify Input field label alignment', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('Username and Password labels should be left aligned to the input fields', null, { loginPage }); 
  });

  test('Verify Total number of input fields', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('User should see exactly two input fields', null, { loginPage }); 
  });

  test('Verify Login button enabled state', async ({ When, Then, loginPage }) => { 
    await When('user enters app url', null, { loginPage }); 
    await Then('User should see login button enabled', null, { loginPage }); 
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
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Dietician Project\" on the navigation bar","stepMatchArguments":[{"group":{"start":25,"value":"\"Dietician Project\"","children":[{"start":26,"value":"Dietician Project","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see the home icon on left side of the navigation bar","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Navigation bar background should have a blue color","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Heading \"Dietician Application\" should be visible","stepMatchArguments":[{"group":{"start":8,"value":"\"Dietician Application\"","children":[{"start":9,"value":"Dietician Application","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User should see the label text \"username\"","stepMatchArguments":[{"group":{"start":31,"value":"\"username\"","children":[{"start":32,"value":"username","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the label text \"password\"","stepMatchArguments":[{"group":{"start":31,"value":"\"password\"","children":[{"start":32,"value":"password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Username input field should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Password input field should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":38,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Login button should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Login button should be displayed with a blue color and white text","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then Username and Password labels should be left aligned to the input fields","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":50,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then User should see exactly two input fields","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":54,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When user enters app url","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then User should see login button enabled","stepMatchArguments":[]}]},
]; // bdd-data-end