Feature: :Add Patient Details - Functional TestCase

Background: 
Given User is in Add Patient Details Dialogue Box, creating New Patient Details

Scenario: Presence of dropdown values in Allergy
  When User clicks on Allergry dropdown
  Then Values should be present inside Allergy dropdown

Scenario: Number of values in Allergy dropdown
  When User clicks on Allergry dropdown
  Then Dropdown should contain 13 values

Scenario: Specific values in Allergy dropdown
  When User clicks on Allergry dropdown
  Then Dropdown should contain values "Egg", "Milk", "Soy", "Almond", "Peanuts", "Walnut", "Pistachio", "Sesame", "Hazelnut", "Pecan", "Cashew", "NONE"

Scenario: Presence of dropdown values in food presence
  When User clicks on Food Preference dropdown
  Then Values should be present inside Food preference dropdown

Scenario: Number of values in Food Preference dropdown
  When User clicks on Food Preference dropdown
  Then Dropdown should contain 5 values

Scenario: Specific values in food presence dropdown
  When User clicks on Food Preference dropdown
  Then Dropdown should contain values "Vegan", "Vegetarian", "Jain", "Eggitarian", "NonVeg"

Scenario: Presence of dropdown values in cuisine
  When User clicks on cuisine dropdown
  Then Values should be present inside Cuisine dropdown

Scenario: Number of values in Cuisine dropdown
  When User clicks on cuisine dropdown
  Then Dropdown should contain 36 values

Scenario: Specific values in cuisine dropdown
  When User clicks on cuisine dropdown
  Then Dropdown should contain values "Indian", "South Indian", "Rajasthani", "Punjabi", "Bengali", "Orissa", "Gujarati", "Maharashtrian", "Andhra", "Kerala", "Goan", "Kashmiri", "Himachali", "Tamil Nadu", "Karnataka", "Sindhi", "Chhattisgarhi", "Madhya Pradesh", "Assamese", "Manipuri", "Tripuri", "Sikkimese", "Mizo", "Arunachali", "Uttarakhand", "Haryanvi", "Awadhi", "Bihari", "Uttar Pradesh", "Delhi", "North Indian"

Scenario: State of Submit button after adding values in all field
  When User enters valid values in all field
  Then Submit button should be enabled

Scenario: Success message validation for adding new patient with valid data
  When User clicks Submit after entering valid data in all mandatory fields
  Then User should see Patient successfully created - toast message

Scenario: Navigation to My patient after adding new patient with valid data
  When User clicks Submit after entering valid data in all mandatory fields
  Then User is directed to My Patient Page with New Patient Details created

Scenario: Select a single value from Allergy dropdown
  When User selects "Peanuts" from Allergy dropdown
  Then "Peanuts" should be selected in the Allergy field

Scenario: Select multiple values from Allergy dropdown
  When User selects "Peanuts" and "Milk" from Allergy dropdown
  Then "Milk" should be selected in the Allergy field

Scenario: selecting a value not present in Allergy dropdown
  When User select "Soybean" from Allergy dropdown
  Then No selection should occur

Scenario: Select a single value from Food Preference dropdown
  When User selects "Vegan" from Food Preference dropdown
  Then "Vegan" should be selected in the Food Preference field

Scenario: Select multiple values from Food Preference dropdown
  When User selects "Vegan" and "Jain" from Food Preference dropdown
  Then "Jain" should be selected in the Food Preference field

Scenario: selecting a value not present in Food Preference dropdown
  When User tries to select "Keto" from Food Preference dropdown
  Then No selection should occur

Scenario: Select a single value from Cuisine Category dropdown
  When User selects "Punjabi" from Cuisine Category dropdown
  Then "Punjabi" should be selected in the Cuisine Category field

Scenario: Select multiple values from Cuisine Category dropdown
  When User selects "Punjabi" and "Gujarati" from Cuisine Category dropdown
  Then "Gujarati" should be selected in the Cuisine Category field

Scenario: selecting a value not present in Cuisine Category dropdown
  When User tries to select "Italian" from Cuisine Category dropdown
  Then No selection should occur

Scenario: Selecting date for DOB field
  When User clicks Date of Birth field
  Then User should see calender date picker displayed with Month,Day,Year

Scenario: Selecting valid date in DOB field
  When User clicks Date of Birth field, selects valid date 01/12/2000
  Then User should see the selected date 01/12/2000

Scenario: Verify selected date is displayed in MM/DD/YYYY format
  When User clicks Date of Birth field, selects valid date
  Then User should see the selected date in MM/DD/YYYY format

Scenario: Prevent selection of future date in DOB field
  When User clicks calendar Date of Birth field
  Then User should see the future date to be disabled

Scenario: Selecting current date as DOB
  When User selects current date as DOB
  Then User should see an error message "Invalid date ,Please select valid date"

Scenario: Selecting Invalid date
  When User enters invalid date (34/20/2022)
  Then User should see an error message "Invalid date ,Please select valid date"

Scenario: User enters non-numeric value in DOB field
  When User enters "ab/cd/efgh" in the DOB field
  Then User should see an error message "Invalid date format"

Scenario: Selecting partial date in DOB field
  When User enters "12/05" in the DOB field
  Then User should see an error message "Invalid date format"

Scenario: Boundary year Navigation
  When User selects date 1780 in calendar
  Then Years older than 100 years from today should be disabled

Scenario: Leap year validation
  When User enters Feb 29 2024 in DOB
  Then User should see the selected date Feb 29 2024

Scenario: Non Leap year validation
  When User enters Feb 29 2023
  Then User should see an error message "Please select valid date"

Scenario: Add first name field with numeric data
  When User navigate to next field after entering numeric data in First name field
  Then User should see error message in Patient first name accepts only alphabets

Scenario: Add first name field with special character data
  When User navigate to next field after entering special characters in First name field
  Then User should see error message in Patient first name accepts only alphabets

Scenario: Mandatory field check for firstname field
  When User navigate to next field leaving First name field empty
  Then User should see error message "Firstname field is required"

Scenario: Add last name field with numeric data
  When User navigate to next field after entering numeric data in Last name field
  Then User should see error message in Patient last name accepts only alphabets

Scenario: Add last name field with special character data
  When User navigate to next field after entering special characters in Last name field
  Then User should see error message in Patient last name accepts only alphabets

Scenario: Mandatory field check for lastname field
  When User navigate to next field leaving Last name field empty
  Then User should see error message "Lastname field is required"

Scenario: Add email with starts with number
  When User navigate to next field after entering email starting with number
  Then User should see the error message “Please enter a valid email address”

Scenario: Add email without @ symbol
  When User navigate to next field after entering email without @
  Then User should see the error message “Please enter a valid email address”

Scenario: Add email with special characters
  When User navigate to next field after entering email with special characters other than @
  Then User should see the error message “Please enter a valid email address”

Scenario: Add email without .com
  When User navigate to next field after entering email without .com
  Then User should see the error message “Please enter a valid email address”

Scenario: Existing email id
  When User navigate to next field after entering existing email id
  Then User should see the error message “Email id already exists”

Scenario: Mandatory field check for email field
  When User navigate to next field after entering all mandatory fields except email field
  Then User should see error message "Email field is required"

Scenario: Add contact number with alphabets
  When User navigate to next field after entering alphabets in contact number with valid data in other mandatory fields
  Then User should see the error message “Contact number accepts only numeric values”

Scenario: Add contact number with special characters
  When User navigate to next field after entering special characters in contact number with valid data in other mandatory fields
  Then User should see the error message “Contact number accepts only numeric values”

Scenario: Add contact number with less than required digits
  When User navigate to next field after entering contact number with less than required digits with valid data in other mandatory fields
  Then User should see the error message “Please enter a valid contact number”

Scenario: Add contact number with greater than required digits
  When User navigate to next field after entering contact number with greater than required digits with valid data in other mandatory fields
  Then User should see the error message “Please enter a valid contact number”

Scenario: Existing contact number
  When User navigate to next field after entering existing contact number
  Then User should see the error message “Contact number already exists”

Scenario: Mandatory field check for contact num field
  When User navigate to next field after entering all mandatory fields except contact number field
  Then User should see error message "Contact Num is required"

Scenario: Leaving Allergies field empty
  When User navigate to next field after entering all mandatory fields without selecting Allergies
  Then User should see error message "Allergies is required"

Scenario: Leaving Food Preference field empty
  When User navigate to next field after entering all mandatory fields without selecting Food Preference
  Then User should see error message "Food Preference is required"

Scenario: Leaving Cusine Category field empty
  When User navigate to next field after entering all mandatory fields without selecting Cuisine Category
  Then User should see error message "Cusine Category is required"

Scenario: Leaving DOB field empty
  When User navigate to next field after entering all mandatory fields without selecting DOB
  Then User should see error message "Date is required"