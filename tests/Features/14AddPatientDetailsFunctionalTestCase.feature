Feature: Add Patient Details - Functional Test Cases
  Background:
    Given User is in Add Patient Details dialog box

   Scenario: Presence of values in Allergy dropdown
    When User clicks on Allergy dropdown
    Then Values should be present inside Allergy dropdown
    And Dropdown should contain 13 values

  Scenario: Presence of values in Food Preference dropdown
    When User clicks on Food Preference dropdown
    Then Values should be present inside Food Preference dropdown
    And Dropdown should contain 5 values

  Scenario: Presence of values in Cuisine Category dropdown
    When User clicks on Cuisine Category dropdown
    Then Values should be present inside Cuisine Category dropdown
    And Dropdown should contain 36 values

  Scenario: State of Submit button after adding values in all field
    When User enters valid values in all field
    Then Submit button should be enabled

  Scenario: Success message validation for adding new patient with valid data
    When User clicks Submit after entering valid data in all mandatory fields
    Then User should see Patient successfully created - toast message
     And User is directed to My Patient Page with New Patient Details created

  Scenario Outline: Validate selection from Allergy dropdown
    When User selects Values from Allergy dropdown
    Then Expected Result should be selected in the Allergy field

  Scenario Outline: Validate Food Preference dropdown selection
    When User selects Values from Food Preference dropdown
    Then Expected Result should be selected in Food Preference field

  Scenario Outline: Validate Cuisine Category dropdown selection
    When User selects Values from Cuisine Category dropdown
    Then Expected Result should be selected in Cuisine Category field

  Scenario: Selecting date for DOB field
    When User clicks Date of Birth field
    Then User should see calender date picker displayed with Month,Day,Year    

  Scenario Outline: Validate DOB input scenarios
    When User enters DOB 
    Then System should show Expected Result for DOB field

  
  Scenario Outline: Validate First and Last Name fields
    When User enters values in  field and navigates to next field
    Then User should see error message 


  Scenario Outline: Validate Email field
    When User enters Email and navigates to next field
    Then User should see error message 


  Scenario Outline: Validate Contact Number field
    When User enters values in Contact Number field and navigates to next field
    Then User should see error message 

  Scenario: Add weight with valid data
    When User navigate to next field after entering valid weight
    Then User is directed to My Patient Page with New Patient Details created

  Scenario Outline: Validate Weight field
    When User enters values in Weight field and navigates to next field
    Then User should see error message 

  Scenario: Add height with valid data
    When User navigate to next field after entering valid height
    Then User is directed to My Patient Page with New Patient Details created

  Scenario Outline: Validate Height field
    When User enters values in Height field and navigates to next field
    Then User should see error message 

  Scenario: Add temperature with valid data
    When User clicks Submit after entering valid temperature
    Then User is directed to My Patient Page with New Patient Details created

  Scenario Outline: Validate Temperature field
    When User enters values in Temperature field and navigates to next field
    Then User should see error message 

  Scenario: Add SP,DP with valid data
    When User clicks Submitafter entering valid SP and DP
    Then User is directed to My Patient Page with New Patient Details created

  Scenario Outline: Validate Blood Pressure fields (SP & DP)
    When User enters values in SP and DP fields and navigates to next field
    Then User should see error message 

  Scenario: Upload valid file - pdf
    When User clicks Submit after uploading a valid file
    Then User should be redirected to My Patient page with the uploaded file saved successfully

  Scenario: File name after Upload valid file - pdf
    When User uploads health report in pdf
    Then User should see uploaded file name with extension

  Scenario Outline: Verify uploaded test report details
    When User clicks View Previous Test Report after being redirected to My Patient page for newly created patient
    Then User should see Verification in test report

  Scenario Outline: Validate file upload behavior
    When User uploads files
    Then User should see Expected Result

  Scenario: Close add dialog using Close button
    When User clicks Close button after submit
    Then Add dialog should close and user should be on my patient page without new patient created







