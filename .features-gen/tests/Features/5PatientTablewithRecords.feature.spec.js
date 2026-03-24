// Generated from: tests\Features\5PatientTablewithRecords.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Patient Table details with record', () => {

  test('Verify the Patient list display', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('All columns should have values'); 
  });

  test('Verify the Patient Id displayed for each row', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Patient Id should be displayed for each patient record'); 
  });

  test('Verify the Patient name displayed for each row', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Patient name should be displayed for each patient record'); 
  });

  test('Verify the Details column displays patient information', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Details column should display "phone number", email", " date of birth" for each patient record'); 
  });

  test('Verify the Details are displayed in multiline format', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Phone number, email , date of birth should be displayed on separate lines for each patient record'); 
  });

  test('Verify the Email format in details column', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Email should be displayed in valid email format for each patient record'); 
  });

  test('Verify the Phone number format in details column', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Phone number displayed in details column should contain valid digits for each patient record'); 
  });

  test('Verify the DOB format in details column', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Date of birth should be displayed in "dd-mm-yyyy" format for each patient record'); 
  });

  test('Verify the Last visit date displayed for each row', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Last visit date should be displayed for each patient record'); 
  });

  test('Verify the Last visit date format', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Last visit date should be displayed in \'dd-mm-yyyy" format for each patient record'); 
  });

  test('Verify the 3 button under Actions column for each row', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('"View Previous Test Reports", "View Previous Diet Plans", "Create New Report/plan" should be displayed for each patient record'); 
  });

  test('Verify the Edit icon displayed for each row', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Edit icon should be displayed for each patient record'); 
  });

  test('Verify the Delete icon displayed for each row', async ({ Given, When, Then, dashboardPage, myPatientsPage }) => { 
    await Given('User is in dietician application dashboard page', null, { dashboardPage }); 
    await When('User clicks on My Patients button', null, { myPatientsPage }); 
    await Then('Delete icon should be displayed for each patient record'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\5PatientTablewithRecords.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then All columns should have values","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Patient Id should be displayed for each patient record","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Patient name should be displayed for each patient record","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Details column should display \"phone number\", email\", \" date of birth\" for each patient record","stepMatchArguments":[{"group":{"start":30,"value":"\"phone number\"","children":[{"start":31,"value":"phone number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\" date of birth\"","children":[{"start":55,"value":" date of birth","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Phone number, email , date of birth should be displayed on separate lines for each patient record","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Email should be displayed in valid email format for each patient record","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then Phone number displayed in details column should contain valid digits for each patient record","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then Date of birth should be displayed in \"dd-mm-yyyy\" format for each patient record","stepMatchArguments":[{"group":{"start":37,"value":"\"dd-mm-yyyy\"","children":[{"start":38,"value":"dd-mm-yyyy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":55,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then Last visit date should be displayed for each patient record","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":50,"tags":[],"steps":[{"pwStepLine":61,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Last visit date should be displayed in 'dd-mm-yyyy\" format for each patient record","stepMatchArguments":[]}]},
  {"pwTestLine":66,"pickleLine":55,"tags":[],"steps":[{"pwStepLine":67,"gherkinStepLine":56,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":57,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then \"View Previous Test Reports\", \"View Previous Diet Plans\", \"Create New Report/plan\" should be displayed for each patient record","stepMatchArguments":[{"group":{"start":0,"value":"\"View Previous Test Reports\"","children":[{"start":1,"value":"View Previous Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":30,"value":"\"View Previous Diet Plans\"","children":[{"start":31,"value":"View Previous Diet Plans","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":58,"value":"\"Create New Report/plan\"","children":[{"start":59,"value":"Create New Report/plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":60,"tags":[],"steps":[{"pwStepLine":73,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":62,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then Edit icon should be displayed for each patient record","stepMatchArguments":[]}]},
  {"pwTestLine":78,"pickleLine":65,"tags":[],"steps":[{"pwStepLine":79,"gherkinStepLine":66,"keywordType":"Context","textWithKeyword":"Given User is in dietician application dashboard page","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":67,"keywordType":"Action","textWithKeyword":"When User clicks on My Patients button","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then Delete icon should be displayed for each patient record","stepMatchArguments":[]}]},
]; // bdd-data-end