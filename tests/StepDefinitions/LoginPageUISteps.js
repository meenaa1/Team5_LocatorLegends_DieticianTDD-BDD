import { createBdd } from "playwright-bdd";
const{Given,When, Then} = createBdd();
// import { Login } from './../pom/Login';
// import { expect } from '@playwright/test';

Given('User is on the browser', async ({}) => {
  // Step: Given User is on the browser
  // From: tests\Features\LoginPageUIVerification.feature:4:5
});

When('user enters app url', async ({}) => {
  // Step: When user enters app url
  // From: tests\Features\LoginPageUIVerification.feature:7:5
});

Then('User should see the text {string} on the navigation bar', async ({}, arg) => {
  // Step: Then User should see the text "Dietician Project" on the navigation bar
  // From: tests\Features\LoginPageUIVerification.feature:8:5
});

Then('User should see the home icon on left side of the navigation bar', async ({}) => {
  // Step: Then User should see the home icon on left side of the navigation bar
  // From: tests\Features\LoginPageUIVerification.feature:12:5
});

Then('Navigation bar background should have a blue color', async ({}) => {
  // Step: Then Navigation bar background should have a blue color
  // From: tests\Features\LoginPageUIVerification.feature:16:5
});

Then('Heading {string} should be visible', async ({}, arg) => {
  // Step: Then Heading "Dietician Application" should be visible
  // From: tests\Features\LoginPageUIVerification.feature:20:5
});

Then('User should see the label text {string}', async ({}, arg) => {
  // Step: Then User should see the label text "username"
  // From: tests\Features\LoginPageUIVerification.feature:24:5
});

Then('Username input field should be visible', async ({}) => {
  // Step: Then Username input field should be visible
  // From: tests\Features\LoginPageUIVerification.feature:32:5
});

Then('Password input field should be visible', async ({}) => {
  // Step: Then Password input field should be visible
  // From: tests\Features\LoginPageUIVerification.feature:36:5
});

Then('Login button should be visible', async ({}) => {
  // Step: Then Login button should be visible
  // From: tests\Features\LoginPageUIVerification.feature:40:5
});

Then('Login button should be displayed with a blue color and white text', async ({}) => {
  // Step: Then Login button should be displayed with a blue color and white text
  // From: tests\Features\LoginPageUIVerification.feature:44:5
});

Then('Username and Password labels should be left aligned to the input fields', async ({}) => {
  // Step: Then Username and Password labels should be left aligned to the input fields
  // From: tests\Features\LoginPageUIVerification.feature:48:5
});

Then('User should see exactly two input fields', async ({}) => {
  // Step: Then User should see exactly two input fields
  // From: tests\Features\LoginPageUIVerification.feature:52:5
});

Then('User should see login button enabled', async ({}) => {
  // Step: Then User should see login button enabled
  // From: tests\Features\LoginPageUIVerification.feature:56:5
});
