import { createBdd } from "playwright-bdd";
const{Given,When, Then} = createBdd();
// import { Login } from './../pom/Login';
// import { expect } from '@playwright/test';

Given('User is on the browser', async ({}) => {
  // Step: Given User is on the browser
  // From: tests\Features\LoginPageUIVerification.feature:4:5
});

When('User enters the application URL', async ({}) => {
  // Step: When User enters the application URL
  // From: tests\Features\LoginPageUIVerification.feature:5:5
});

Then('User should see the text {string} on the left side of the navigation bar', async ({}, arg) => {
  // Step: Then User should see the text "Dietician Project" on the left side of the navigation bar
  // From: tests\Features\LoginPageUIVerification.feature:6:5
});

Given('User is on the login page', async ({}) => {
  // Step: Given User is on the login page
  // From: tests\Features\LoginPageUIVerification.feature:9:5
});

Then('User should see the home icon on the left side of the navigation bar', async ({}) => {
  // Step: Then User should see the home icon on the left side of the navigation bar
  // From: tests\Features\LoginPageUIVerification.feature:10:5
});

Then('Navigation bar background should be blue-purple in color', async ({}) => {
  // Step: Then Navigation bar background should be blue-purple in color
  // From: tests\Features\LoginPageUIVerification.feature:14:5
});

Then('User should see the heading {string} inside the login card', async ({}, arg) => {
  // Step: Then User should see the heading "Dietician Application" inside the login card
  // From: tests\Features\LoginPageUIVerification.feature:18:5
});

Then('User should see the label text {string}', async ({}, arg) => {
  // Step: Then User should see the label text "username"
  // From: tests\Features\LoginPageUIVerification.feature:22:5
});

Then('Username input field should be visible', async ({}) => {
  // Step: Then Username input field should be visible
  // From: tests\Features\LoginPageUIVerification.feature:30:5
});

Then('Password input field should be visible', async ({}) => {
  // Step: Then Password input field should be visible
  // From: tests\Features\LoginPageUIVerification.feature:34:5
});


Then('Login button should be visible', async ({}) => {
  // Step: Then Login button should be visible
  // From: tests\Features\LoginPageUIVerification.feature:38:5
});

Then('Login button should have blue-purple background', async ({}) => {
  // Step: Then Login button should have blue-purple background
  // From: tests\Features\LoginPageUIVerification.feature:42:5
});

Then('Login button text color should be white', async ({}) => {
  // Step: And Login button text color should be white
  // From: tests\Features\LoginPageUIVerification.feature:43:5
});

Then('Username label should be left-aligned above the username input field', async ({}) => {
  // Step: Then Username label should be left-aligned above the username input field
  // From: tests\Features\LoginPageUIVerification.feature:47:5
});

Then('Password label should be left-aligned above the password input field', async ({}) => {
  // Step: And Password label should be left-aligned above the password input field
  // From: tests\Features\LoginPageUIVerification.feature:48:5
});

Then('User should see exactly {int} input fields', async ({}, arg) => {
  // Step: Then User should see exactly 2 input fields
  // From: tests\Features\LoginPageUIVerification.feature:52:5
});

Then('Login button should be enabled', async ({}) => {
  // Step: Then Login button should be enabled
  // From: tests\Features\LoginPageUIVerification.feature:56:5
});