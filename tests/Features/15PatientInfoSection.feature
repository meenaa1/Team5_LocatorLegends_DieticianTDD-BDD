Feature: Patient information section

  Background:
    Given User logged into the app and patients already exists

  Scenario: Verify that Correct report opens for selected record
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Corresponding report for that record should be opened

  Scenario: Verify the Title is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Title " View Patient Test Reports" should be displayed
    
  Scenario: Verify the Patient Id is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Patient id corresponding to the record selected in My Patients page should be displayed

  Scenario: Verify the Name is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Patient name corresponding to the record selected in My Patients page should be displayed

  Scenario: Verify the Email is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Patient email corresponding to the record selected in My Patients page should be displayed

  Scenario: Verify Contact number is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Patient contact number corresponding to the record selected in My Patients page should be displayed

  Scenario: Verify the Close icon is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Close icon "x" should be displayed
