Feature: Delete pop up info validation

Background: Navigating to the My Patient page after logged-in
Given Given User is on the My Patients page after login

Scenario: Delete patient – alert title verification
Given User is on the My Patient page
When User clicks the Delete icon for a particular patient in the patient table
Then Alert title should be “Confirm”

Scenario: Delete patient – alert text verification
Given User is on the My Patient page
When User clicks the Delete icon for a particular patient in the patient table
Then Alert text should be “Are you sure to delete [Patient Name]?”

Scenario: Delete patient – Yes button verification
Given User is on the My Patient page
When User clicks the Delete icon for a particular patient in the patient table
Then Alert should display a Yes button

Scenario: Delete patient – No button verification
Given User is on the My Patient page
When User clicks the Delete icon for a particular patient in the patient table
Then Alert should display a No button