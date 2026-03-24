Feature: View PDF

  Background:
    Given User is in My Patients page after logged into the app and patients already exists

  Scenario: Verify that Corresponding PDF report opens for a record
    Given User is in View Plan Test Reports page
    When User clicks View PDF button for a particular record
    Then Corresponding report for that record should be opened for that particular record
