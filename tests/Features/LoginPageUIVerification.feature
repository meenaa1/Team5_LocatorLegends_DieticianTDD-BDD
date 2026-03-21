Feature: Login Page UI Verification

  Scenario: Verify navigation bar text
    Given User is on the browser
    When User enters the application URL
    Then User should see the text "Dietician Project" on the left side of the navigation bar

  Scenario: Verify navigation bar icon
    Given User is on the login page
    Then User should see the home icon on the left side of the navigation bar

  Scenario: Verify navigation bar background color
    Given User is on the login page
    Then Navigation bar background should be blue-purple in color

  Scenario: Verify page title in login card
    Given User is on the login page
    Then User should see the heading "Dietician Application" inside the login card

  Scenario: Verify username label
    Given User is on the login page
    Then User should see the label text "username"

  Scenario: Verify password label
    Given User is on the login page
    Then User should see the label text "password"

  Scenario: Verify username input field presence
    Given User is on the login page
    Then Username input field should be visible

  Scenario: Verify password input field presence
    Given User is on the login page
    Then Password input field should be visible

  Scenario: Verify login button presence
    Given User is on the login page
    Then Login button should be visible

  Scenario: Verify login button styling
    Given User is on the login page
    Then Login button should have blue-purple background
    And Login button text color should be white

  Scenario: Verify input field label alignment
    Given User is on the login page
    Then Username label should be left-aligned above the username input field
    And Password label should be left-aligned above the password input field

  Scenario: Verify total number of input fields
    Given User is on the login page
    Then User should see exactly 2 input fields

  Scenario: Verify login button enabled state
    Given User is on the login page
    Then Login button should be enabled