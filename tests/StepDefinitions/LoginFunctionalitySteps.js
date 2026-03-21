import { createBdd } from "playwright-bdd";
const{Given,When, Then} = createBdd();

Given('User is on the login page', async ({}) => {
  // Step: Given User is on the login page
  // From: tests\Features\LoginPageFunctionalVerification.feature:4:5
});

When('User clicks login button after entering valid credentials', async ({}) => {
  // Step: When User clicks login button after entering valid credentials
  // From: tests\Features\LoginPageFunctionalVerification.feature:7:5
});

Then('User should be redirected to dashboard page', async ({}) => {
  // Step: Then User should be redirected to dashboard page
  // From: tests\Features\LoginPageFunctionalVerification.feature:8:5
});

When('User clicks login button after entering non existing user', async ({}) => {
  // Step: When User clicks login button after entering non existing user
  // From: tests\Features\LoginPageFunctionalVerification.feature:11:5
});

Then('An error message {string} should be displayed', async ({}, arg) => {
  // Step: Then An error message "Invalid username or password" should be displayed
  // From: tests\Features\LoginPageFunctionalVerification.feature:12:5
});

When('User clicks login button after entering spl charac in username', async ({}) => {
  // Step: When User clicks login button after entering spl charac in username
  // From: tests\Features\LoginPageFunctionalVerification.feature:15:5
});

When('User clicks login button after entering only few charac of username', async ({}) => {
  // Step: When User clicks login button after entering only few charac of username
  // From: tests\Features\LoginPageFunctionalVerification.feature:19:5
});

When('User clicks login button after entering wrong password', async ({}) => {
  // Step: When User clicks login button after entering wrong password
  // From: tests\Features\LoginPageFunctionalVerification.feature:23:5
});

When('User clicks login button after entering spl charach in password', async ({}) => {
  // Step: When User clicks login button after entering spl charach in password
  // From: tests\Features\LoginPageFunctionalVerification.feature:27:5
});

When('User clicks login button after entering only password', async ({}) => {
  // Step: When User clicks login button after entering only password
  // From: tests\Features\LoginPageFunctionalVerification.feature:31:5
});

Then('An error message Username is Required should be displayed', async ({}) => {
  // Step: Then An error message Username is Required should be displayed
  // From: tests\Features\LoginPageFunctionalVerification.feature:32:5
});


When('User clicks login button after entering only username', async ({}) => {
  // Step: When User clicks login button after entering only username
  // From: tests\Features\LoginPageFunctionalVerification.feature:35:5
});

Then('An error message Password is Required should be displayed', async ({}) => {
  // Step: Then An error message Password is Required should be displayed
  // From: tests\Features\LoginPageFunctionalVerification.feature:36:5
});