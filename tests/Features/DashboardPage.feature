Feature: Dashboard page

  Scenario: Verify Navigation bar links presence
    Given User is on the login page to login
    When User clicks login button after entering with valid credentials
    Then Navigation bar should display exactly four links "My Patients", "New Patient", "Login", and "Logout"

  Scenario: Verify "My Patients" navigation link is clickable
    Given User is on the Dashboard page
    When User clicks the My Patients link in the navigation bar
    Then User should be redirected to the "My Patients" page

  Scenario: Verify "New Patient" navigation link is clickable
    Given User is on the Dashboard page
    When User clicks the New Patient link in the navigation bar
    Then User should be redirected to the "New Patient" page

  Scenario: Verify "Logout" navigation link is clickable
    Given User is on the Dashboard page
    When User clicks the Logout link in the navigation bar
    Then User should be logged out of the application

  Scenario: Verify Home icon is clickable
    Given User is on the Dashboard page
    When User clicks the Home icon on the navigation bar
    Then User should be navigated to the dashboard page
