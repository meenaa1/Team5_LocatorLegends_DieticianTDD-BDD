import { createBdd } from "playwright-bdd";
const{Given,When, Then} = createBdd();


Given('User is on the login page to login', async ({}) => {
  // Step: Given User is on the login page to login
  // From: tests\Features\DashboardPage.feature:4:5
});

When('User clicks login button after entering with valid credentials', async ({}) => {
  // Step: When User clicks login button after entering with valid credentials
  // From: tests\Features\DashboardPage.feature:5:5
});

Then('Navigation bar should display exactly four links {string}, {string}, {string}, and {string}', async ({}, arg, arg1, arg2, arg3) => {
  // Step: Then Navigation bar should display exactly four links "My Patients", "New Patient", "Login", and "Logout"
  // From: tests\Features\DashboardPage.feature:6:5
});

Given('User is on the Dashboard page', async ({}) => {
  // Step: Given User is on the Dashboard page
  // From: tests\Features\DashboardPage.feature:9:5
});

When('User clicks the My Patients link in the navigation bar', async ({}) => {
  // Step: When User clicks the My Patients link in the navigation bar
  // From: tests\Features\DashboardPage.feature:10:5
});

Then('User should be redirected to the {string} page', async ({}, arg) => {
  // Step: Then User should be redirected to the "My Patients" page
  // From: tests\Features\DashboardPage.feature:11:5
});

When('User clicks the New Patient link in the navigation bar', async ({}) => {
  // Step: When User clicks the New Patient link in the navigation bar
  // From: tests\Features\DashboardPage.feature:15:5
});

When('User clicks the Logout link in the navigation bar', async ({}) => {
  // Step: When User clicks the Logout link in the navigation bar
  // From: tests\Features\DashboardPage.feature:20:5
});

Then('User should be logged out of the application', async ({}) => {
  // Step: Then User should be logged out of the application
  // From: tests\Features\DashboardPage.feature:21:5
});

When('User clicks the Home icon on the navigation bar', async ({}) => {
  // Step: When User clicks the Home icon on the navigation bar
  // From: tests\Features\DashboardPage.feature:25:5
});

Then('User should be navigated to the dashboard page', async ({}) => {
  // Step: Then User should be navigated to the dashboard page
  // From: tests\Features\DashboardPage.feature:26:5
});
