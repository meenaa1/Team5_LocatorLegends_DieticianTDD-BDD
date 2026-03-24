Feature: Patient Table details with record

  Background: User is logged into the application and patient records already exist in the system for that User

  Scenario: Verify the Patient list display
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then All columns should have values

  Scenario: Verify the Patient Id displayed for each row
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then Patient Id should be displayed for each patient record

  Scenario: Verify the Patient name displayed for each row
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then Patient name should be displayed for each patient record

  Scenario: Verify the Details column displays patient information
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then Details column should display "phone number", email", " date of birth" for each patient record

  Scenario: Verify the Details are displayed in multiline format
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then Phone number, email , date of birth should be displayed on separate lines for each patient record

  Scenario: Verify the Email format in details column
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then Email should be displayed in valid email format for each patient record

  Scenario: Verify the Phone number format in details column
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then Phone number displayed in details column should contain valid digits for each patient record

  Scenario: Verify the DOB format in details column
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then Date of birth should be displayed in "dd-mm-yyyy" format for each patient record

  Scenario: Verify the Last visit date displayed for each row
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then Last visit date should be displayed for each patient record

  Scenario: Verify the Last visit date format
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then Last visit date should be displayed in 'dd-mm-yyyy" format for each patient record

  Scenario: Verify the 3 button under Actions column for each row
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then "View Previous Test Reports", "View Previous Diet Plans", "Create New Report/plan" should be displayed for each patient record

  Scenario: Verify the Edit icon displayed for each row
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then Edit icon should be displayed for each patient record

  Scenario: Verify the Delete icon displayed for each row
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then Delete icon should be displayed for each patient record
