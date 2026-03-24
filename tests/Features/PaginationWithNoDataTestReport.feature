Feature: Pagination management when no data exists in the table

  Background:
    Given User logged into the application without patient added to that user to view Reports

  Scenario: Verify Pagination when no patient data exists
    Given User is in My Patient page
    When User clicks on View Patient Test Reports button
    Then "Showing 0 to 0 of 0 patients" should be displayed inside the Test Report Popup

  Scenario: Verify that All pagination arrows disabled when no data exists
    Given User is in My Patient page
    When User clicks on View Patient Test Reports button
    Then First, previous, next, last arrows should be disabled inside the Test Report Popup
