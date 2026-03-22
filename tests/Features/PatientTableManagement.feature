Feature: Patient table Management

  Background:
    Given User is in dietician dashboard page with patient records already exist in the system for that user

  Scenario: Verify that Patient Id ascending sorting
    Given User is in My Patients page
    When User clicks up arrow in Patient Id column
    Then Patient records should be sorted in ascending order by patient id

  Scenario: Verify that Patient Id descending sorting
    Given User is in My Patients page
    When User clicks down arrow in Patient Id column
    Then Patient records should be sorted in descending order by patient id

  Scenario: Verify that Name ascending sorting
    Given User is in My Patients page
    When User clicks up arrow in Name column
    Then Patient records should be sorted in ascending order by name

  Scenario: Verify that Name descending sorting
    Given User is in My Patients page
    When User clicks down arrow in Name column
    Then Patient records should be sorted in descending order by name

  Scenario: Verify that Search functionality using patient name
    Given User is in My Patients page
    When User searches using patient name
    Then Matching patient details should be displayed

  Scenario: Verify that Search funcionality using patient id
    Given User is in My Patients page
    When User searched using patient id
    Then Matching patient details should be displayed with correct Patient ID

  Scenario: Verify that Search is cleared
    Given User entered the text in search box in My Patients page
    When User clears the search text
    Then All patient records should be displayed again
