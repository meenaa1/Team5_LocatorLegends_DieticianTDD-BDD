Feature: Patient table without record

  Background:
    Given User logged into the application without patient added to that user

  Scenario: Verify that My Patient page loads with empty table
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then My Patients page should display with empty table
