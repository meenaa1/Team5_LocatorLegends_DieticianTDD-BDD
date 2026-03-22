Feature: My Patients Page UI

Background: 
Given User is logged into the application

Scenario: Verify the Title is displayed
Given User is in dietician application dashboard page
When User clicks on My Patients button
Then Page header "My Patients" should be displayed

Scenario: Verify the Search bar display
Given User is in dietician application dashboard page
When User clicks on My Patients button
Then Search bar should be displayed 

Scenario: Verify the Search icon
Given User is in dietician application dashboard page
When User clicks on My Patients button
Then Search icon should be displayed inside the search bar

Scenario: Verify the Search placeholder text
Given User is in dietician application dashboard page
When User clicks on My Patients button
Then Placeholder text "Search..." should be displayed

Scenario: Verify the Table column header
Given User is in dietician application dashboard page
When User clicks on My Patients button
Then "Patient Id", "Name", "Details" , "Last Visit Date", "Actions" , " Edit/Delete" should be displayed

Scenario: Verify the Patient Id column sorting icon
Given User is in dietician application dashboard page
When User clicks on My Patients button
Then Up and down arrow icons should be displayed in the Patient Id column header

Scenario: Verify the Name column sorting icon
Given User is in dietician application dashboard page
When User clicks on My Patients button
Then Up and down arrow icons should be displayed in the Name column header



