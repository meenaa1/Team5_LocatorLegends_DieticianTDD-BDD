Feature: Pagination management with maximum record in a page to view the TestReports

  Background:
    Given User is in view patient test report page with multiple records already exist in the system for that user

  Scenario: Verify that Each page should display only 2  records
    Given User is in dietician application dashboard page
    When User clicks on My Patients button and clicks on View Patient Test Reports button
    Then User should see only 2 records in each page inside the View Test report Popup
