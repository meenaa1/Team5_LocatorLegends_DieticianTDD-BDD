Feature: Pagination management with multiple records

  Background:
    Given User is in dietician dashboard page with multiple patient records already exist in the system for that user

  Scenario: Verifying Navigate to the next page using pagination
    Given User is in My Patients page with multiple pages of patient record
    When User clicks the next page arrow '(>)'
    Then Next set of  patient records should be displayed

  Scenario: Verifying Navigate to the previous page using pagination
    Given User is in later page of My Patients page
    When User clicks the previous page arrow '(<)'
    Then Previous set of patient records should be displayed

  Scenario: Verifying Navigate to the first page using pagination
    Given User is in any page except first page of My Patients page
    When User clicks the first page arrow '(<<)'
    Then First page of patient records should be displayed

  Scenario: Verifying Navigate to the last page using pagination
    Given User is in any page except last page of My Patients page
    When User clicks the last page arrow '(>>)'
    Then Last page of patient records should be displayed

  Scenario: Verifying Pagination count is updated correctly
    Given User is in any page of My Patients page
    When User clicks any page navigation arrow
    Then Pagination text should display the correct range and total number of patients

  Scenario: Verifying Pagination is displayed when patient records exceed one page
    Given User is in My Patients page with multiple pages of patient record
    When User navigates to any page
    Then Pagination controls should be displayed

  Scenario: Verify that Previous page arrow disabled on first page
    Given User is in My Patients page with multiple pages of patient record
    When User navigates to the first page of patient record
    Then Previous arrow '(<)' should be disabled

  Scenario: Verify that First page arrow disabled on first page
    Given User is in My Patients page with multiple pages of patient record
    When User navigates to the first page of patient record
    Then First page arrow '(<<)' should be disabled

  Scenario: Verify that Next page arrow enabled on first page
    Given User is in My Patients page with multiple pages of patient record
    When User navigates to the first page of patient record
    Then Next arrow '(>)' should be enabled

  Scenario: Verify that Last page arrow enabled on first page
    Given User is in My Patients page with multiple pages of patient record
    When User navigates to the first page of patient record
    Then Last page arrow '(>>)' should be enabled

  Scenario: Verify that Previous page arrow is enabled on all pages except the first page
    Given User is in My Patients page with multiple pages of patient record
    When User navigates to any page after the first page
    Then Previous arrow '(<)' should be enabled

  Scenario: Verify that First page arrow is enabled on all pages except the first page
    Given User is in My Patients page with multiple pages of patient record
    When User navigates to any page after the first page
    Then First page arrow '(<<)' should be enabled

  Scenario: Verify that Last page arrow is enabled on all pages except the last page
    Given User is in My Patients page with multiple pages of patient record
    When User navigates to any page except the last page
    Then Last page arrow '(>>)' should be enabled

  Scenario: Verify that Next page arrow is enabled on all pages except the last page
    Given User is in My Patients page with multiple pages of patient record
    When User navigates to any page except the last page
    Then Next arrow '(>)' should be enabled

  Scenario: Verify that Next Page arrow is disabled on last page
    Given User is in My Patients page with multiple pages of patient record
    When User navigates to the last page of the patient record
    Then Next arrow '(>)' should be disabled

  Scenario: Verify that Last page arrow is disabled on last page
    Given User is in My Patients page with multiple pages of patient record
    When User navigates to the last page of the patient record
    Then Last page arrow '(>>)' should be  disabled
