Feature: Pagination management when no data exists in the table

  Background:
    Given User logged into the application without patient added to that user

  Scenario: Verify the Pagination when no patient data exists
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then "Showing 0 to 0 of 0 patients" should be displayed

  Scenario: Verify that All pagination arrows disabled when no data exists
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then First, previous, next, last arrows should be disabled
