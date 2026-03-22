Feature: Pagination management with only one record

  Background:
    Given User is logged into the application and only one patient record already exist in the system for that user

  Scenario: All pagination arrows disabled when only one page exists
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then First, previous, next, last arrows should be disabled
