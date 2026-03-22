Feature: Navigation to view patient test reports

  Background:
    Given User is in dietician dashboard page with patient records already exist in the system for that user

  Scenario: Verify that Navigation of View Previous Test Reports
    Given User is in My Patients page
    When User clicks View Previous Test Reports under action column
    Then User should be navigated to "View Patient Test Reports" page
