Feature: View patient test reports - table

  Background:
    Given User logged into the app and patients already exists

  Scenario: Verify that Report table is displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Reports table shouldbe displayed

  Scenario: Verify that Table headers column are displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Table headers should have Record Number, File, Uploaded Time,File or Report Name, Vitals, Identified Health Conditions

  Scenario: Verify that Table headers column order
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Record header should be in the exact order Record Number → File → Uploaded Time → File or Report Name → Vitals → Identified Health Conditions should be displayed

  Scenario: Verify that Pagination controls are displayed
    Given User is in My Patients page after logged in
    When User clicks View Previous Test Reports button for a specific record
    Then Pagination controls First, previous, next, last arrows should be displayed
