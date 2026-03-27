Feature: Add Patient Details - Functional Test Cases
  Background:
    Given User is in Add Patient Details dialog box

   Scenario: Presence of values in Allergy dropdown
    When User clicks on Allergy dropdown
    Then Values should be present inside Allergy dropdown
    And Allergy dropdown should contain 13 values

  Scenario: Presence of values in Food Preference dropdown
    When User clicks on Food Preference dropdown
    Then Values should be present inside Food Preference dropdown
    And Food Preference dropdown should contain 5 values

  Scenario: Presence of values in Cuisine Category dropdown
    When User clicks on Cuisine Category dropdown
    Then Values should be present inside Cuisine Category dropdown
    And Cuisine Category dropdown should contain 36 values

  Scenario: State of Submit button after adding values in all field
    When User enters valid values in all field
    Then Submit button should be enabled

  Scenario: Success message validation for adding new patient with valid data
    When User clicks Submit after entering valid data in all mandatory fields
    Then User should see Patient successfully created - toast message
     And User is directed to My Patient Page with New Patient Details created

  Scenario Outline: Validate selection from Allergy dropdown
  When User selects "<Values>" from Allergy dropdown
  Then "<Expected>" should be selected in the Allergy field

  Examples:
    | Values        | Expected              |
    | Peanuts       | Peanuts               |
    | Peanuts, Milk | Peanuts, Milk         |
    | Soybean       | No selection          |
    |               | Allergies is required |

  Scenario Outline: Validate Food Preference dropdown selection
  When User selects "<Values>" from Food Preference dropdown
  Then "<Expected>" should be selected in the Food Preference field

  Examples:
    | Values     | Expected                      |
    | Vegan      | Vegan                         |
    | Vegan, Jain| Vegan, Jain                   |
    | Keto       | No selection                  |
    |            | Food Preference is required   |
    
  Scenario Outline: Validate Cuisine Category dropdown selection
  When User selects "<Values>" from Cuisine Category dropdown
  Then "<Expected>" should be selected in the Cuisine Category field

  Examples:
    | Values            | Expected                      |
    | Punjabi           | Punjabi                       |
    | Punjabi, Gujarati | Punjabi, Gujarati             |
    | Italian           | No selection                  |
    |                   | Cusine Category is required   |
    
  Scenario: Selecting date for DOB field
    When User clicks Date of Birth field in the new patient form
    Then User should see calender date picker displayed with Month,Day,Year in the new patient form   

 

  

