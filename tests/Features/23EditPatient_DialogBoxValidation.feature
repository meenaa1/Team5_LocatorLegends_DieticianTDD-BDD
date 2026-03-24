Feature:Edit Patient -Dialog Box Validation

Background: User logged into the app and patients already exists
Given User is on the dashboard page after login
When User clicks "My patients" button 
Then User should be navigated to the "My Patients" page and should see the list of existing patients

Scenario: Title of the dialoge box
Given User is in my patient page
When User clicks edit icon for the particular patient 
Then User should see  Edit Patient page on the dialog box

Scenario: Presence of Submit button
Given User is in my patient page
When User clicks edit icon for the particular patient 
Then User should see  submit button

Scenario: State of submit button
Given User is in my patient page
When User clicks edit icon for the particular patient 
Then User should see submit button in enable mode

Scenario: Presence of Close button
Given User is in my patient page
When User clicks edit icon for the particular patient 
Then User should see  close button

Scenario: State of  close button
Given User is in my patient page
When User clicks edit icon for the particular patient 
Then User should see close button in enable mode

Scenario: Presence of 9 Input field 
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see 9 input field

Scenario: Presence of 3 drop down
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see 3 drop down

Scenario: Presence of file upload option
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see exactly 1 file upload option

Scenario: Presence of first name of the patient
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see the "First Name" field populated with the value entered during patient creation for first name field.

Scenario: Presence of last name of the patient
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see the "Last Name" field populated with the value entered during patient creation for last name field.

Scenario: Presence of Email of the patient
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see the "Email" field populated with the value entered during patient creation for email field.

Scenario: Presence of Contact Number of the patient
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see the "Contact Number" field populated with the value entered during patient creation for contact number field.

Scenario: Presence of  allergy info of the patient 
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see the "Allergy Info" field populated with the value entered during patient creation for allergy info field.

Scenario: Presence of patients food preference
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see the "Food Preference" field populated with the value entered during patient creation for food preference field.

Scenario: Presence of patients cuisine preference
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see the "Cuisine Preference" field populated with the value entered during patient creation for cuisine preference field.

Scenario: Presence of patients DOB info
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see the "DOB" field populated with the value entered during patient creation for DOB field.

Scenario: Presence of sub titleVitals 
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see vitals title after DOB field

Scenario: Presence of SP field
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see SP place holder in SP field

Scenario: Presence of DP field
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see DP place holder in DP field

Scenario: Presence of Weight field
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see Weight place holder in Weight field

Scenario: Presence of Height field
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see Height place holder in Height field

Scenario: Presence of Tempature field
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see Tempature place holder in Tempature field

Scenario: Vitals information fields shouldn't have mandatory indicator
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should not see mandatory indicators for Vitals Information fields

Scenario: Presence of Label Upload health report 
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see Upload health report : text for Upload button

Scenario: Presence of  No File Choosen text when no files uploaded
Given User is in my patient page
When User clicks edit icon for the particular patient
Then User should see "No File Choosen" text 

Scenario: Close button color        
Given User is in my patient page
When User clicks edit icon for the particular patient
Then Close button should have red color

