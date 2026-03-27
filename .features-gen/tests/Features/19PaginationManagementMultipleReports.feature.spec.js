// Generated from: tests\Features\19PaginationManagementMultipleReports.feature
import { test } from "../../../tests/Fixtures/testFixtures.js";

test.describe('Pagination management with multiple records in View Patient Test Reports', () => {

  test.beforeEach('Background', async ({ Given, loggedInPage }, testInfo) => { if (testInfo.error) return;
    await Given('User is in View Patient Test Reports page with multiple records already existing in the system for that user', null, { loggedInPage }); 
  });
  
  test('Navigate to the next page using pagination', async ({ Given, When, Then, myPatientsPage, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple records for the patient', null, { myPatientsPage, viewPDFPage }); 
    await When('User clicks the next page arrow \'(>)\' of the View Test Reports Pop up', null, { viewPDFPage }); 
    await Then('Next set of patient records should be displayed', null, { viewPDFPage }); 
  });

  test('Navigate to the previous page using pagination', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in Report table of View Patient Test Reports page', null, { viewPDFPage }); 
    await When('User clicks the previous page arrow \'(<)\' of the View Test Reports Pop up', null, { viewPDFPage }); 
    await Then('Previous set of patient records should be displayed in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Navigate to the first page using pagination', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in any page except first page of Report table', null, { viewPDFPage }); 
    await When('User clicks the first page arrow \'(<<)\' of the View Test Reports Pop up', null, { viewPDFPage }); 
    await Then('First page of patient records should be displayed in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Navigate to the last page using pagination', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in any page except last page of Report table', null, { viewPDFPage }); 
    await When('User clicks the last page arrow \'(>>)\' of the View Test Reports Pop up', null, { viewPDFPage }); 
    await Then('Last page of patient records should be displayed in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Pagination count is updated correctly', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in any page of Report table', null, { viewPDFPage }); 
    await When('User clicks any page navigation arrow in the View Test Reports Pop up', null, { viewPDFPage }); 
    await Then('Pagination text should display the correct range and total number of patients of the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Pagination is displayed when patient records exceed one page', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple pages of records', null, { viewPDFPage }); 
    await When('User navigates to any page of the View Test Reports Pop up', null, { viewPDFPage }); 
    await Then('Pagination controls should be displayed in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Previous page arrow disabled on first page', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple pages of records', null, { viewPDFPage }); 
    await When('User navigates to the first page of patient records', null, { viewPDFPage }); 
    await Then('Previous arrow \'(<)\' should be disabled in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('First page arrow disabled on first page', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple pages of records', null, { viewPDFPage }); 
    await When('User navigates to the first page of patient records', null, { viewPDFPage }); 
    await Then('First page arrow \'(<<)\' should be disabled in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Next page arrow enabled on first page', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple pages of records', null, { viewPDFPage }); 
    await When('User navigates to the first page of patient records', null, { viewPDFPage }); 
    await Then('Next arrow \'(>)\' should be enabled in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Last page arrow enabled on first page', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple pages of records', null, { viewPDFPage }); 
    await When('User navigates to the first page of patient records', null, { viewPDFPage }); 
    await Then('Last page arrow \'(>>)\' should be enabled in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Previous page arrow is enabled on all pages except the first page', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple pages of records', null, { viewPDFPage }); 
    await When('User navigates to any page after the first page of the View Test Reports Pop up', null, { viewPDFPage }); 
    await Then('Previous arrow \'(<)\' should be enabled in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('First page arrow is enabled on all pages except the first page', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple pages of records', null, { viewPDFPage }); 
    await When('User navigates to any page after the first page of the View Test Reports Pop up', null, { viewPDFPage }); 
    await Then('First page arrow \'(<<)\' should be enabled in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Last page arrow is enabled on all pages except the last page', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple pages of records', null, { viewPDFPage }); 
    await When('User navigates to any page except the last page of the View Test Reports Pop up', null, { viewPDFPage }); 
    await Then('Last page arrow \'(>>)\' should be enabled in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Next page arrow is enabled on all pages except the last page', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple pages of records', null, { viewPDFPage }); 
    await When('User navigates to any page except the last page of in the View Test Reports Pop up', null, { viewPDFPage }); 
    await Then('Next arrow \'(>)\' should be enabled in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Next page arrow is disabled on last page', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple pages of records', null, { viewPDFPage }); 
    await When('User navigates to the last page of the patient records', null, { viewPDFPage }); 
    await Then('Next arrow \'(>)\' should be disabled in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

  test('Last page arrow is disabled on last page', async ({ Given, When, Then, viewPDFPage }) => { 
    await Given('User is in View Patient Test Reports page with multiple pages of records', null, { viewPDFPage }); 
    await When('User navigates to the last page of the patient records', null, { viewPDFPage }); 
    await Then('Last page arrow \'(>>)\' should be disabled in the View Test Reports Pop up', null, { viewPDFPage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\19PaginationManagementMultipleReports.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records for the patient","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks the next page arrow '(>)' of the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":32,"value":"'(>)'","children":[{"children":[{"children":[]}]},{"start":33,"value":"(>)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Next set of patient records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is in Report table of View Patient Test Reports page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks the previous page arrow '(<)' of the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":36,"value":"'(<)'","children":[{"children":[{"children":[]}]},{"start":37,"value":"(<)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Previous set of patient records should be displayed in the View Test Reports Pop up","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User is in any page except first page of Report table","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User clicks the first page arrow '(<<)' of the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":33,"value":"'(<<)'","children":[{"children":[{"children":[]}]},{"start":34,"value":"(<<)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then First page of patient records should be displayed in the View Test Reports Pop up","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User is in any page except last page of Report table","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks the last page arrow '(>>)' of the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":32,"value":"'(>>)'","children":[{"children":[{"children":[]}]},{"start":33,"value":"(>>)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Last page of patient records should be displayed in the View Test Reports Pop up","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given User is in any page of Report table","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When User clicks any page navigation arrow in the View Test Reports Pop up","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Pagination text should display the correct range and total number of patients of the View Test Reports Pop up","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple pages of records","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User navigates to any page of the View Test Reports Pop up","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Pagination controls should be displayed in the View Test Reports Pop up","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple pages of records","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When User navigates to the first page of patient records","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Previous arrow '(<)' should be disabled in the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":15,"value":"'(<)'","children":[{"children":[{"children":[]}]},{"start":16,"value":"(<)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":52,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple pages of records","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When User navigates to the first page of patient records","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then First page arrow '(<<)' should be disabled in the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":17,"value":"'(<<)'","children":[{"children":[{"children":[]}]},{"start":18,"value":"(<<)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":58,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple pages of records","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When User navigates to the first page of patient records","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then Next arrow '(>)' should be enabled in the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":11,"value":"'(>)'","children":[{"children":[{"children":[]}]},{"start":12,"value":"(>)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":64,"pickleLine":51,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple pages of records","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When User navigates to the first page of patient records","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then Last page arrow '(>>)' should be enabled in the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":16,"value":"'(>>)'","children":[{"children":[{"children":[]}]},{"start":17,"value":"(>>)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":70,"pickleLine":56,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple pages of records","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When User navigates to any page after the first page of the View Test Reports Pop up","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Previous arrow '(<)' should be enabled in the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":15,"value":"'(<)'","children":[{"children":[{"children":[]}]},{"start":16,"value":"(<)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":76,"pickleLine":61,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple pages of records","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User navigates to any page after the first page of the View Test Reports Pop up","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then First page arrow '(<<)' should be enabled in the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":17,"value":"'(<<)'","children":[{"children":[{"children":[]}]},{"start":18,"value":"(<<)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":82,"pickleLine":66,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":67,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple pages of records","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When User navigates to any page except the last page of the View Test Reports Pop up","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then Last page arrow '(>>)' should be enabled in the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":16,"value":"'(>>)'","children":[{"children":[{"children":[]}]},{"start":17,"value":"(>>)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":88,"pickleLine":71,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple pages of records","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"When User navigates to any page except the last page of in the View Test Reports Pop up","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then Next arrow '(>)' should be enabled in the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":11,"value":"'(>)'","children":[{"children":[{"children":[]}]},{"start":12,"value":"(>)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":94,"pickleLine":76,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":77,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple pages of records","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When User navigates to the last page of the patient records","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Next arrow '(>)' should be disabled in the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":11,"value":"'(>)'","children":[{"children":[{"children":[]}]},{"start":12,"value":"(>)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":100,"pickleLine":81,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple records already existing in the system for that user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":82,"keywordType":"Context","textWithKeyword":"Given User is in View Patient Test Reports page with multiple pages of records","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When User navigates to the last page of the patient records","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then Last page arrow '(>>)' should be disabled in the View Test Reports Pop up","stepMatchArguments":[{"group":{"start":16,"value":"'(>>)'","children":[{"children":[{"children":[]}]},{"start":17,"value":"(>>)","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end