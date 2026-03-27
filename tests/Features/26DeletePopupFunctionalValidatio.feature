Feature: Delete pop up - functional validation

Background: After navigating to the My Patient page, the logged-in user clicks the delete icon for a particular patient in the patient table
Given Given User is on the My Patients page after login
When User clicks the Delete icon for a particular patient in the patient table

Scenario: Delete patient – confirm deletion- Navigation check
Given User sees the confirmation alert
When User accepts the alert
Then User should be navigated back to main page

Scenario: Delete patient after confirm deletion
Given User sees the confirmation alert
When User accepts the alert
Then Patient should be removed from the table and a success message displayed

Scenario: Delete patient – cancel deletion Navigation check
Given User sees the confirmation alert
When User dismiss the alert
Then User should be navigated back to main page

Scenario: Delete patient after cancel deletion
Given User sees the confirmation alert
When User dismiss the alert
Then Alert should close and the patient should remain in the table
