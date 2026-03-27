Feature: Edit Patient  - Function test case

Background: After navigating to the My Patient page, the logged-in user clicks the edit icon
Given User is on the My Patients page after login
When User clicks Edit icon for the particular patient 
Then User is navigated to the Edit Patient dialog box

Scenario: Presence of place holder in First Name 
Given User is in the edit dialog box
When User clear exisiting value in first name field
Then User should see placeholder "First name"

Scenario: Presence of place holder in  last name
Given User is in the edit dialog box
When User clear exisiting value in last name field
Then User should see placeholder "Last name" for last name

Scenario: Presence of place holder in email
Given User is in the edit dialog box
When User clear exisiting value in email name field
Then User should see placeholder "Email" for Email

Scenario: Presence of place holder in  contact no
Given User is in the edit dialog box
When User clear exisiting value in contact no field
Then User should see placeholder  "Contact Number" for contact Number

Scenario: Edit first name with valid data
Given User is in the edit dialog box
When User clicks submit after editing first name with valid data
Then User should redirected to my patient with edited value in first name

Scenario: Edit first name with numeric data
Given User is in the edit dialog box
When User clicks submit after editing first name with numeric data
Then User should  see error message in Patient name accepts only alphabets

Scenario: Edit first name with spl charac & numeric data
Given User is in the edit dialog box
When User clicks submit after editing first name with spl numeric data
Then User should  see error message in Patient name accepts only alphabets

Scenario: Edit first name with spl charc data
Given User is in the edit dialog box
When User clicks submit after editing first name with spl charc data
Then User should  see error message in Patient name accepts only alphabets

Scenario: Edit last name with valid data
Given User is in the edit dialog box
When User clicks submit after editing the last name with valid data
Then User should be redirected to My Patient page with the edited value in the last name

Scenario: Edit last name with numeric data
Given User is in the edit dialog box
When User clicks submit after editing the last name with numeric data
Then User should see the error message “Patient name accepts only alphabets”

Scenario: Edit last name with special characters & numeric data
Given User is in the edit dialog box
When User clicks submit after editing the last name with special characters and numeric data
Then User should see the error message “Patient name accepts only alphabets”

Scenario: Edit last name with special characters data
Given User is in the edit dialog box
When User clicks submit after editing the last name with special characters
Then User should see the error message “Patient name accepts only alphabets”

Scenario: Edit email with valid data
Given User is in the edit dialog box
When User clicks submit after editing the email with valid data
Then User should be redirected to My Patient page with the edited value in the email field

Scenario: Edit email with invalid format
Given User is in the edit dialog box
When User clicks submit after editing the email with invalid format
Then User should see the error message “Please enter a valid email address”

Scenario: Edit email without @ symbol
Given User is in the edit dialog box
When User clicks submit after editing the email without @ symbol
Then User should see the error message “Please enter a valid email address”

Scenario: Edit email with special characters
Given User is in the edit dialog box
When User clicks submit after editing the email with invalid special characters
Then User should see the error message “Please enter a valid email address”

Scenario: Edit email by removing existing value
Given User is in the edit dialog box
When User  clicks submit after removes the existing email value 
Then User should see the error message “Email field cannot be empty”

Scenario: Edit CTC number with valid data
Given User is in the edit dialog box
When User clicks submit after editing the CTC number with valid data
Then User should be redirected to My Patient page with the edited value in the CTC number field

Scenario: Edit CTC number with alphabets
Given User is in the edit dialog box
When User clicks submit after editing the CTC number with alphabetic data
Then User should see the error message “CTC number accepts only numeric values”

Scenario: Edit CTC number with special characters
Given User is in the edit dialog box
When User clicks submit after editing the CTC number with special characters
Then User should see the error message “CTC number accepts only numeric values”

Scenario: Edit CTC number with less than required digits
Given User is in the edit dialog box
When User clicks submit after entering a CTC number with fewer digits
Then User should see the error message “Please enter a valid CTC number” for fewer Digits

Scenario: Edit CTC number by removing existing value
Given User is in the edit dialog box
When User clicks submit after removing the existing ctc value
Then User should see the error message “CTC number field cannot be empty”

Scenario: Edit weight with valid value
Given User is in the edit dialog box
When User clicks submit after entering a valid value in the weight field
Then User should be redirected to the My Patient page with the updated weight value

Scenario: Presence of updated value for weight 
Given User is in the edit dialog box
When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating weight value
Then User should see new value under vitals column in new record number

Scenario: Edit height with valid value
Given User is in the edit dialog box
When User clicks submit after entering a valid value in the height field
Then User should be redirected to the My Patient page with the updated height value

Scenario: Presence of updated value for height
Given User is in the edit dialog box
When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating height value
Then User should see new value under vitals column in new record number

Scenario: Edit temperature with valid value
Given User is in the edit dialog box
When User clicks submit after entering a valid value in the temperature field
Then User should be redirected to the My Patient page with the updated temperature value

Scenario: Presence of updated value for temperature
Given User is in the edit dialog box
When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating temperature value
Then User should see new value under vitals column in new record number

Scenario: Edit only SP (Systolic Pressure) with valid value
Given User is in the edit dialog box
When User clicks submit after entering a valid value in the SP field only
Then User should recieve error message in DP field

Scenario: Edit SP and DP with valid value
Given User is in the edit dialog box
When User clicks submit after entering a valid value in SP & DP field 
Then User should be redirected to My Patient page

Scenario: Presence of record number for updated value in SP & DP
Given User is in the edit dialog box
When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating the SP & DP value
Then User should see new record number

Scenario: Presence of updated value for SP & DP in record number 
Given User is in the edit dialog box
When User clicks “View Previous Test Report” after being redirected to the My Patient page for updating the SP & DP value
Then User should see new value under vitals column in new record number

Scenario: Edit only DP (Diastolic Pressure) with valid value
Given User is in the edit dialog box
When User clicks submit after entering a valid value in the DP field
Then User should recieve error message in SP field

Scenario: Edit weight with alphabets
Given User is in the edit dialog box
When User clicks submit after entering with alphabets for weight
Then User should see the error message “Please enter a valid weight”

Scenario: Edit weight with special characters
Given User is in the edit dialog box
When User clicks submit after entering with special characters for weight
Then User should see the error message “Please enter a valid weight”

Scenario: Edit height with alphabets
Given User is in the edit dialog box
When User clicks submit after entering with alphabets for height
Then User should see the error message “Please enter a valid height”

Scenario: Edit height with special characters
Given User is in the edit dialog box
When User clicks submit after entering with special characters for height
Then User should see the error message “Please enter a valid height”

Scenario: Edit temperature with alphabets
Given User is in the edit dialog box
When User clicks submit after entering with alphabets for temperature
Then User should see the error message “Please enter a valid temperature”

Scenario: Edit temperature with special characters
Given User is in the edit dialog box
When User clicks submit after entering with special characters for temperature
Then User should see the error message “Please enter a valid temperature”

Scenario: Edit SP with alphabets
Given User is in the edit dialog box
When User clicks submit after entering with alphabets for SP
Then User should see the error message “Please enter a valid SP value”

Scenario: Edit SP with special characters
Given User is in the edit dialog box
When User clicks submit after entering with special characters for SP
Then User should see the error message “Please enter a valid SP value”

Scenario: Edit DP with alphabets
Given User is in the edit dialog box
When User clicks submit after entering with alphabets for DP
Then User should see the error message “Please enter a valid DP value”

Scenario: Edit DP with special characters
Given User is in the edit dialog box
When User clicks submit after entering with special characters for DP
Then User should see the error message “Please enter a valid DP value”

Scenario: Edit date for DOB field               
Given User is in the edit dialog box
When User clicks Date of Birth field for edit
Then User should see calender date picker displayed with Month,Day,Year for edit

Scenario: Edit valid date in DOB field               
Given User is in the edit dialog box
When User clicks Date of Birth field after selects valid date 01/12/2000
Then User should see the selected date 01/12/2000

Scenario: Verify selected date is displayed in MM/DD/YYYY format             
Given User is in the edit dialog box
When User clicks Date of Birth field after selects valid date 01/12/2000
Then User should see the selected date in MM/DD/YYYY format

Scenario: Prevent selection of future date in DOB field
Given User is in the edit dialog box
When User clicks calendar Date of Birth field
Then User should see the future date to be disabled 

Scenario: Selecting current date as DOB
Given User is in the edit dialog box
When User selects current date as DOB
Then User should see an error message "Invalid date ,Please select valid date"

Scenario: Selecting Invalid date
Given User is in the edit dialog box
When User enters invalid date (34/20/2022)
Then User should see an error message "Invalid date ,Please select valid date"

Scenario: User enters non-numeric value in DOB field
Given User is in the edit dialog box
When User enters "ab/cd/efgh" in the DOB field
Then User should see an error message "Invalid date format"

Scenario: Selecting partial date in DOB field
Given User is in the edit dialog box
When User enters "12/05" in the DOB field
Then User should see an error message "Invalid date format"

Scenario: Boundary year Navigation
Given User is in the edit dialog box
When User clicks calendar Date of Birth navigates to 1980 and selects a date
Then User should see the selected date to be populated on DOB field

Scenario: Leap year validation
Given User is in the edit dialog box
When User clicks calendar Date of Birth and selects Feb 29 2024
Then User should see the selected date Feb 29 2024

Scenario: Non Leap year validation
Given User is in the edit dialog box
When User enter Feb 29 2023
Then User should see an error message "Please select valid date"

Scenario: File name after Upload valid file - pdf
Given User is in the edit dialog box
When User uploads health report in pdf  during edit
Then User should see uploaded file name with extension during edit

Scenario: Upload valid file - pdf
Given User is in the edit dialog box
When User clicks submit after uploading a valid file
Then User should be redirected to My Patient page with the uploaded file saved successfully during edit

Scenario: Presence of record number after file upload
Given User is in the edit dialog box
When  User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report
Then User should see new record number in test report page

Scenario: Presence of PDF file in test report after file upload
Given User is in the edit dialog box
When User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report
Then User should see PDF file in test report

Scenario: Presence of upload date info
Given User is in the edit dialog box
When User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report
Then User should see upload date info in test report

Scenario: Presence of health info detected from the health report
Given User is in the edit dialog box
When User clicks “View Previous Test Report” after being redirected to the My Patient page for uploaded  health report
Then User should see health condition as the values in health report

Scenario: Upload invalid file type - docx
Given User is in the edit dialog box
When User clicks submit after uploading a file with an invalid file type - docx
Then User should see the error message “Invalid file type. Please upload a valid file”

Scenario: Upload file exceeding size limit
Given User is in the edit dialog box
When User clicks submit after uploading a file larger than allowed size
Then User should see the error message “File size exceeds the allowed limit”

Scenario: Upload invalid file type - jpeg
Given User is in the edit dialog box
When User clicks submit after  uploading invalid file type - docx
Then User should see the error message “Invalid file type. Please upload a valid file”

Scenario: Upload without selecting file
Given User is in the edit dialog box
When User clicks submit without uploading any file
Then User should see the error message “Please select a file to upload”

Scenario: Close edit dialog using Close button
Given User is in the edit dialog box
When User clicks the Close button
Then User should redirect to My Patient page 

Scenario: Close edit dialog with unsaved changes
Given User is in the edit dialog box 
When User clicks the Close button after entering the value
Then user should redirect on the My Patient page without saving changes