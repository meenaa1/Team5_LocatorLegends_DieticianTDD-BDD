Feature: Login page UI verification

  Background: 
    Given User is on the browser

  Scenario: Verify Navigation bar text visibility
    When user enters app url
    Then User should see the text "Dietician Project" on the navigation bar

  Scenario: Navigation bar icon visibility
    When user enters app url
    Then User should see the home icon on left side of the navigation bar

  Scenario: Verify Navigation bar background colour
    When user enters app url
    Then Navigation bar background should have a blue color

  Scenario: Verify Page title visibility
    When user enters app url
    Then Heading "Dietician Application" should be visible

  Scenario: Verify label for first field
    When user enters app url
    Then User should see the label text "username"

  Scenario: Verify label for second field
    When user enters app url
    Then User should see the label text "password"

  Scenario: Verify Username input field presence
    When user enters app url
    Then Username input field should be visible

  Scenario: Verify Password input field presence
    When user enters app url
    Then Password input field should be visible

  Scenario: Verify Login button presence
    When user enters app url
    Then Login button should be visible

  Scenario: Verify Login button color and styling
    When user enters app url
    Then Login button should be displayed with a blue color and white text

  Scenario: Verify Input field label alignment
    When user enters app url
    Then Username and Password labels should be left aligned to the input fields

  Scenario: Verify Total number of input fields
    When user enters app url
    Then User should see exactly two input fields

  Scenario: Verify Login button enabled state
    When user enters app url
    Then User should see login button enabled