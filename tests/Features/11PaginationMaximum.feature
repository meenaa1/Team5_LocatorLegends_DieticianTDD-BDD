Feature: Pagination management with maximum record in a page

  Background:
    Given User is logged into the application with maximum of 5 patient records in a page

  Scenario: Verify that Each page should display only 5 records
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then User should see only 5 records in each page

  Scenario: Verify that Newly added record move to the next page when 6th record is added
    Given User is in My Patients page with table displays maximum of 5 record per page
    When User adds 6th record
    Then User should see the newly added record in the next page
