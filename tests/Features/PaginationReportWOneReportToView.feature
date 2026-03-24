Feature: Pagination management with only one record(Test Report) to View

  Background:
    Given User is logged into the application and only one patient record already exist in the system for that user

  Scenario: Verify that All pagination arrows disabled when only one page exists
    Given User is in My Patient page
    When User clicks on View Patient Test Reports button
    Then First, previous, next, last arrows should be disabled in the View Test Reports Pop up
