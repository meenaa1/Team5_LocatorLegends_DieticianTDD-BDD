Feature: Reports table data scenarios

  Background:
    Given User logged into the app and patients already exists

  Scenario: Verify that Record number is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Each report should display a record number

  Scenario: Verigying View PDF button display
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Each report should display View PDF button 

  Scenario: Verifying that Uploaded time is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Each report should display uploaded time

  Scenario: Verify that File name is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Each report should display file or report name

  Scenario: Verify that Vitals information is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Each report should display vitals information

  Scenario: Verifying the Vitals order
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Vitals should be displayed in the order Weight → Height → Temperature → SP → DP

  Scenario: Verifying Vitals are displayed in multiline format
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Vitals should be displayed in multilines

  Scenario: Verifying Health conditions is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Each report should display Identified health conditions

  Scenario: Verifying that Health conditions are displayed in multiline format
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Identified health conditions should be displayed in multilines

  
