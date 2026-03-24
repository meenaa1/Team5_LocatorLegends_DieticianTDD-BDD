Feature: Pagination management with multiple records

  Background:
    Given User is in View Patient Test Reports page with multiple records already existing in the system for that user

  Scenario: Navigate to the next page using pagination
    Given User is in View Patient Test Reports page with multiple records for the patient
    When User clicks the next page arrow '(>)' of the View Test Reports Pop up
    Then Next set of patient records should be displayed

  Scenario: Navigate to the previous page using pagination
    Given User is in Report table of View Patient Test Reports page
    When User clicks the previous page arrow '(<)' of the View Test Reports Pop up
    Then Previous set of patient records should be displayed in the View Test Reports Pop up

  Scenario: Navigate to the first page using pagination
    Given User is in any page except first page of Report table
    When User clicks the first page arrow '(<<)' of the View Test Reports Pop up
    Then First page of patient records should be displayed in the View Test Reports Pop up

  Scenario: Navigate to the last page using pagination
    Given User is in any page except last page of Report table
    When User clicks the last page arrow '(>>)' of the View Test Reports Pop up
    Then Last page of patient records should be displayed in the View Test Reports Pop up

  Scenario: Pagination count is updated correctly
    Given User is in any page of Report table
    When User clicks any page navigation arrow in the View Test Reports Pop up
    Then Pagination text should display the correct range and total number of patients of the View Test Reports Pop up

  Scenario: Pagination is displayed when patient records exceed one page
    Given User is in View Patient Test Reports page with multiple pages of records
    When User navigates to any page of the View Test Reports Pop up
    Then Pagination controls should be displayed in the View Test Reports Pop up

  Scenario: Previous page arrow disabled on first page
    Given User is in View Patient Test Reports page with multiple pages of records
    When User navigates to the first page of patient records
    Then Previous arrow '(<)' should be disabled in the View Test Reports Pop up

  Scenario: First page arrow disabled on first page
    Given User is in View Patient Test Reports page with multiple pages of records
    When User navigates to the first page of patient records
    Then First page arrow '(<<)' should be disabled in the View Test Reports Pop up

  Scenario: Next page arrow enabled on first page
    Given User is in View Patient Test Reports page with multiple pages of records
    When User navigates to the first page of patient records
    Then Next arrow '(>)' should be enabled in the View Test Reports Pop up

  Scenario: Last page arrow enabled on first page
    Given User is in View Patient Test Reports page with multiple pages of records
    When User navigates to the first page of patient records
    Then Last page arrow '(>>)' should be enabled in the View Test Reports Pop up

  Scenario: Previous page arrow is enabled on all pages except the first page
    Given User is in View Patient Test Reports page with multiple pages of records
    When User navigates to any page after the first page of the View Test Reports Pop up
    Then Previous arrow '(<)' should be enabled in the View Test Reports Pop up

  Scenario: First page arrow is enabled on all pages except the first page
    Given User is in View Patient Test Reports page with multiple pages of records
    When User navigates to any page after the first page of the View Test Reports Pop up
    Then First page arrow '(<<)' should be enabled in the View Test Reports Pop up

  Scenario: Last page arrow is enabled on all pages except the last page
    Given User is in View Patient Test Reports page with multiple pages of records
    When User navigates to any page except the last page of the View Test Reports Pop up
    Then Last page arrow '(>>)' should be enabled in the View Test Reports Pop up

  Scenario: Next page arrow is enabled on all pages except the last page
    Given User is in View Patient Test Reports page with multiple pages of records
    When User navigates to any page except the last page of in the View Test Reports Pop up
    Then Next arrow '(>)' should be enabled in the View Test Reports Pop up

  Scenario: Next page arrow is disabled on last page
    Given User is in View Patient Test Reports page with multiple pages of records
    When User navigates to the last page of the patient records
    Then Next arrow '(>)' should be disabled in the View Test Reports Pop up

  Scenario: Last page arrow is disabled on last page
    Given User is in View Patient Test Reports page with multiple pages of records
    When User navigates to the last page of the patient records
    Then Last page arrow '(>>)' should be disabled in the View Test Reports Pop up