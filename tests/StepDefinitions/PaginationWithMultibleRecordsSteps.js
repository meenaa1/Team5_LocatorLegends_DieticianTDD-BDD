import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);


Given('User is in dietician dashboard page with multiple patient records already exist in the system for that user', async ({}) => {
  // Step: Given User is in dietician dashboard page with multiple patient records already exist in the system for that user
  // From: tests\Features\PaginationWithMultipleRecords.feature:4:1
});

Given('User is in My Patients page with multiple pages of patient record', async ({}) => {
  // Step: Given User is in My Patients page with multiple pages of patient record
  // From: tests\Features\PaginationWithMultipleRecords.feature:7:1
});

When('User clicks the next page arrow {string}', async ({}, arg) => {
  // Step: When User clicks the next page arrow '(>)'
  // From: tests\Features\PaginationWithMultipleRecords.feature:8:1
});

Then('Next set of  patient records should be displayed', async ({}) => {
  // Step: Then Next set of  patient records should be displayed
  // From: tests\Features\PaginationWithMultipleRecords.feature:9:1
});

Given('User is in later page of My Patients page', async ({}) => {
  // Step: Given User is in later page of My Patients page
  // From: tests\Features\PaginationWithMultipleRecords.feature:12:1
});

When('User clicks the previous page arrow {string}', async ({}, arg) => {
  // Step: When User clicks the previous page arrow '(<)'
  // From: tests\Features\PaginationWithMultipleRecords.feature:13:1
});

Then('Previous set of patient records should be displayed', async ({}) => {
  // Step: Then Previous set of patient records should be displayed
  // From: tests\Features\PaginationWithMultipleRecords.feature:14:1
});

Given('User is in any page except first page of My Patients page', async ({}) => {
  // Step: Given User is in any page except first page of My Patients page
  // From: tests\Features\PaginationWithMultipleRecords.feature:17:1
});

When('User clicks the first page arrow {string}', async ({}, arg) => {
  // Step: When User clicks the first page arrow '(>>)'
  // From: tests\Features\PaginationWithMultipleRecords.feature:18:1
});

Then('First page of patient records should be displayed', async ({}) => {
  // Step: Then First page of patient records should be displayed
  // From: tests\Features\PaginationWithMultipleRecords.feature:19:1
});

Given('User is in any page except last page of My Patients page', async ({}) => {
  // Step: Given User is in any page except last page of My Patients page
  // From: tests\Features\PaginationWithMultipleRecords.feature:22:1
});

When('User clicks the last page arrow {string}', async ({}, arg) => {
  // Step: When User clicks the last page arrow '(<<)'
  // From: tests\Features\PaginationWithMultipleRecords.feature:23:1
});

Then('Last page of patient records should be displayed', async ({}) => {
  // Step: Then Last page of patient records should be displayed
  // From: tests\Features\PaginationWithMultipleRecords.feature:24:1
});

Given('User is in any page of My Patients page', async ({}) => {
  // Step: Given User is in any page of My Patients page
  // From: tests\Features\PaginationWithMultipleRecords.feature:27:1
});

When('User clicks any page navigation arrow', async ({}) => {
  // Step: When User clicks any page navigation arrow
  // From: tests\Features\PaginationWithMultipleRecords.feature:28:1
});

Then('Pagination text should display the correct range and total number of patients', async ({}) => {
  // Step: Then Pagination text should display the correct range and total number of patients
  // From: tests\Features\PaginationWithMultipleRecords.feature:29:1
});

When('User navigates to any page', async ({}) => {
  // Step: When User navigates to any page
  // From: tests\Features\PaginationWithMultipleRecords.feature:33:1
});

Then('Pagination controls should be displayed', async ({}) => {
  // Step: Then Pagination controls should be displayed
  // From: tests\Features\PaginationWithMultipleRecords.feature:34:1
});

When('User navigates to the first page of patient record', async ({}) => {
  // Step: When User navigates to the first page of patient record
  // From: tests\Features\PaginationWithMultipleRecords.feature:38:1
});

Then('Previous arrow {string} should be disabled', async ({}, arg) => {
  // Step: Then Previous arrow '(<)' should be disabled
  // From: tests\Features\PaginationWithMultipleRecords.feature:39:1
});

Then('First page arrow {string} should be disabled', async ({}, arg) => {
  // Step: Then First page arrow '(<<)' should be disabled
  // From: tests\Features\PaginationWithMultipleRecords.feature:44:1
});

Then('Next arrow {string} should be enabled', async ({}, arg) => {
  // Step: Then Next arrow '(>)' should be enabled
  // From: tests\Features\PaginationWithMultipleRecords.feature:49:1
});

Then('Last page arrow {string} should be enabled', async ({}, arg) => {
  // Step: Then Last page arrow '(>>)' should be enabled
  // From: tests\Features\PaginationWithMultipleRecords.feature:54:1
});

When('User navigates to any page after the first page', async ({}) => {
  // Step: When User navigates to any page after the first page
  // From: tests\Features\PaginationWithMultipleRecords.feature:58:1
});

Then('Previous arrow {string} should be enabled', async ({}, arg) => {
  // Step: Then Previous arrow '(<)' should be enabled
  // From: tests\Features\PaginationWithMultipleRecords.feature:59:1
});

Then('First page arrow {string} should be enabled', async ({}, arg) => {
  // Step: Then First page arrow '(<<)' should be enabled
  // From: tests\Features\PaginationWithMultipleRecords.feature:64:1
});

When('User navigates to any page except the last page', async ({}) => {
  // Step: When User navigates to any page except the last page
  // From: tests\Features\PaginationWithMultipleRecords.feature:68:1
});

When('User navigates to the last page of the patient record', async ({}) => {
  // Step: When User navigates to the last page of the patient record
  // From: tests\Features\PaginationWithMultipleRecords.feature:78:1
});

Then('Next arrow {string} should be disabled', async ({}, arg) => {
  // Step: Then Next arrow '(>)' should be disabled
  // From: tests\Features\PaginationWithMultipleRecords.feature:79:1
});

Then('Last page arrow {string} should be  disabled', async ({}, arg) => {
  // Step: Then Last page arrow '(>>)' should be  disabled
  // From: tests\Features\PaginationWithMultipleRecords.feature:84:1
});