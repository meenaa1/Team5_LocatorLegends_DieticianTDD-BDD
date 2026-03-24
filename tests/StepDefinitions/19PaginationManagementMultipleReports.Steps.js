import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);


Given('User is in View Patient Test Reports page with multiple records already existing in the system for that user', async ({ }) => {
    // Step: Given User is in View Patient Test Reports page with multiple records already existing in the system for that user
    // From: tests\Features\PaginationManagementMultipleReports.feature:4:5
});

Given('User is in View Patient Test Reports page with multiple records for the patient', async ({ }) => {
    // Step: Given User is in View Patient Test Reports page with multiple records for the patient
    // From: tests\Features\PaginationManagementMultipleReports.feature:7:5
});

When('User clicks the next page arrow {string} of the View Test Reports Pop up', async ({ }, arg) => {
    // Step: When User clicks the next page arrow '(>)' of the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:8:5
});

Then('Next set of patient records should be displayed', async ({ }) => {
    // Step: Then Next set of patient records should be displayed
    // From: tests\Features\PaginationManagementMultipleReports.feature:9:5
});

Given('User is in Report table of View Patient Test Reports page', async ({ }) => {
    // Step: Given User is in Report table of View Patient Test Reports page
    // From: tests\Features\PaginationManagementMultipleReports.feature:12:5
});

When('User clicks the previous page arrow {string} of the View Test Reports Pop up', async ({ }, arg) => {
    // Step: When User clicks the previous page arrow '(<)' of the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:13:5
});

Then('Previous set of patient records should be displayed in the View Test Reports Pop up', async ({ }) => {
    // Step: Then Previous set of patient records should be displayed in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:14:5
});

Given('User is in any page except first page of Report table', async ({ }) => {
    // Step: Given User is in any page except first page of Report table
    // From: tests\Features\PaginationManagementMultipleReports.feature:17:5
});

When('User clicks the first page arrow {string} of the View Test Reports Pop up', async ({ }, arg) => {
    // Step: When User clicks the first page arrow '(<<)' of the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:18:5
});

Then('First page of patient records should be displayed in the View Test Reports Pop up', async ({ }) => {
    // Step: Then First page of patient records should be displayed in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:19:5
});

Given('User is in any page except last page of Report table', async ({ }) => {
    // Step: Given User is in any page except last page of Report table
    // From: tests\Features\PaginationManagementMultipleReports.feature:22:5
});

When('User clicks the last page arrow {string} of the View Test Reports Pop up', async ({ }, arg) => {
    // Step: When User clicks the last page arrow '(>>)' of the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:23:5
});

Then('Last page of patient records should be displayed in the View Test Reports Pop up', async ({ }) => {
    // Step: Then Last page of patient records should be displayed in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:24:5
});

Given('User is in any page of Report table', async ({ }) => {
    // Step: Given User is in any page of Report table
    // From: tests\Features\PaginationManagementMultipleReports.feature:27:5
});

When('User clicks any page navigation arrow in the View Test Reports Pop up', async ({ }) => {
    // Step: When User clicks any page navigation arrow in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:28:5
});

Then('Pagination text should display the correct range and total number of patients of the View Test Reports Pop up', async ({ }) => {
    // Step: Then Pagination text should display the correct range and total number of patients of the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:29:5
});

Given('User is in View Patient Test Reports page with multiple pages of records', async ({ }) => {
    // Step: Given User is in View Patient Test Reports page with multiple pages of records
    // From: tests\Features\PaginationManagementMultipleReports.feature:32:5
});

When('User navigates to any page of the View Test Reports Pop up', async ({ }) => {
    // Step: When User navigates to any page of the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:33:5
});

Then('Pagination controls should be displayed in the View Test Reports Pop up', async ({ }) => {
    // Step: Then Pagination controls should be displayed in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:34:5
});

When('User navigates to the first page of patient records', async ({ }) => {
    // Step: When User navigates to the first page of patient records
    // From: tests\Features\PaginationManagementMultipleReports.feature:38:5
});
Then('Previous arrow {string} should be disabled in the View Test Reports Pop up', async ({ }, arg) => {
    // Step: Then Previous arrow '(<)' should be disabled in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:39:5
});

Then('First page arrow {string} should be disabled in the View Test Reports Pop up', async ({ }, arg) => {
    // Step: Then First page arrow '(<<)' should be disabled in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:44:5
});

Then('Next arrow {string} should be enabled in the View Test Reports Pop up', async ({ }, arg) => {
    // Step: Then Next arrow '(>)' should be enabled in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:49:5
});

Then('Last page arrow {string} should be enabled in the View Test Reports Pop up', async ({ }, arg) => {
    // Step: Then Last page arrow '(>>)' should be enabled in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:54:5
});

When('User navigates to any page after the first page of the View Test Reports Pop up', async ({ }) => {
    // Step: When User navigates to any page after the first page of the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:58:5
});

Then('Previous arrow {string} should be enabled in the View Test Reports Pop up', async ({ }, arg) => {
    // Step: Then Previous arrow '(<)' should be enabled in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:59:5
});

Then('First page arrow {string} should be enabled in the View Test Reports Pop up', async ({ }, arg) => {
    // Step: Then First page arrow '(<<)' should be enabled in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:64:5
});

When('User navigates to any page except the last page of the View Test Reports Pop up', async ({ }) => {
    // Step: When User navigates to any page except the last page of the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:68:5
});

When('User navigates to any page except the last page of in the View Test Reports Pop up', async ({ }) => {
    // Step: When User navigates to any page except the last page of in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:73:5
});

When('User navigates to the last page of the patient records', async ({ }) => {
    // Step: When User navigates to the last page of the patient records
    // From: tests\Features\PaginationManagementMultipleReports.feature:78:5
});

Then('Next arrow {string} should be disabled in the View Test Reports Pop up', async ({ }, arg) => {
    // Step: Then Next arrow '(>)' should be disabled in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:79:5
});

Then('Last page arrow {string} should be disabled in the View Test Reports Pop up', async ({ }, arg) => {
    // Step: Then Last page arrow '(>>)' should be disabled in the View Test Reports Pop up
    // From: tests\Features\PaginationManagementMultipleReports.feature:84:5
});