import { expect } from '@playwright/test';

class MyPatientsPagePO {
    constructor(page) {
        this.page = page;

        this.myPatientsButton = page.getByRole('link', { name: 'My Patients' });
        this.pageHeader = page.locator('h1, h2', { hasText: 'My Patients' });
        // Search bar
        this.searchBar = page.locator('input[placeholder="Search..."]');
        this.searchIcon = page.locator('input[placeholder="Search..."]');
        this.clearSearchBtn = page.locator('.search-clear');
        // Table column headers
        this.tableHeaders = page.locator('table thead th');
        this.tableRows = page.locator('table tbody tr');

        // this.PatientId = page.locator('//[id="ColumnHeader"]/tbody/tr[1]/th[1]');
        // this.Name = page.locator('//[id="ColumnHeader"]/tbody/tr[1]/th[2]');
        // this.Deatails = page.locator('//[id="ColumnHeader"]/tbody/tr[1]/th[3]');
        // this.LastVisitDate = page.locator('//[id="ColumnHeader"]/tbody/tr[1]/th[4]');
        // this.Actions = page.locator('//[id="ColumnHeader"]/tbody/tr[1]/th[5]');
        // this.EditorDelete = page.locator('//[id="ColumnHeader"]/tbody/tr[1]/th[6]');

        this.PatientId = page.locator('table thead th', { hasText: 'Patient Id' });
        this.Name = page.locator('table thead th', { hasText: 'Name' });
        this.Details = page.locator('table thead th', { hasText: 'Details' });
        this.LastVisitDate = page.locator('table thead th', { hasText: 'Last Visit Date' });
        this.Actions = page.locator('table thead th', { hasText: 'Actions' });
        this.EditDelete = page.locator('table thead th', { hasText: 'Edit/Delete' });

        // Sorting icons
        this.PatientIdSortIcons = page.locator('table thead th:has-text("Patient Id") i.sort-icon');
        this.NameSortIcons = page.locator('table thead th:has-text("Name") i.sort-icon');

        this.patientIdUpArrow = page.locator('th:has-text("Patient Id") >> .sort-up');
        this.patientIdDownArrow = page.locator('th:has-text("Patient Id") >> .sort-down');
        this.nameUpArrow = page.locator('th:has-text("Name") >> .sort-up');
        this.nameDownArrow = page.locator('th:has-text("Name") >> .sort-down');

        // 15 View Test Report Locators
        this.patientIdCells = page.locator('table tbody tr td:nth-child(1)');
        this.patientNameCells = page.locator('table tbody tr td:nth-child(2)');
        this.detailsCells = page.locator('table tbody tr td:nth-child(3)');

        this.viewReportsBtn = page.getByRole('button', { name: 'View Previous Test Reports' });

        this.reportPopup = page.locator('.report-container');

        this.reportTitle = page.locator('h1, h2', { hasText: 'View Patient Test Reports' });

        this.reportPatientId = page.locator('.patient-id');
        this.reportPatientName = page.locator('.patient-name');
        this.reportPatientEmail = page.locator('.patient-email');
        this.reportPatientPhone = page.locator('.patient-phone');

        this.closeIcon = page.locator('.close');

        this.reportsTable = page.locator('.report-modal table');
        this.reportsHeaders = page.locator('.report-modal table thead th');
        this.reportsRows = page.locator('.report-modal table tbody tr');

        // Columns
        this.recordNumberColumn = page.locator('td.record-number');
        this.viewPdfBtn = page.locator('button:has-text("View PDF")');
        this.uploadedTimeColumn = page.locator('td.uploaded-time');
        this.reportNameColumn = page.locator('td.report-name');
        this.vitalsColumn = page.locator('td.vitals');
        this.healthConditionColumn = page.locator('td.health-conditions');

        // Pagination inside popup
        this.popupPagination = page.locator('.report-popup .pagination');


    }

    async goToMyPatients() {
        await this.myPatientsButton.click();
    }

    async expectHeaderDisplayed(text = 'My Patients') {
        await expect(this.pageHeader).toBeVisible();
        await expect(this.pageHeader).toHaveText(text);
    }

    async expectSearchBarVisible() {
        await expect(this.searchBar).toBeVisible();
    }

    async expectSearchIconVisible() {
        await expect(this.searchIcon).toBeVisible();
    }

    async expectSearchPlaceholder(text = 'Search...') {
        await expect(this.searchBar).toHaveAttribute('placeholder', text);
    }

    async expectTableHeaders(expectedHeaders) {
        const actualHeaders = await this.page.tableHeaders.allTextContents();
        expect(actualHeaders).toEqual(expectedHeaders);
    }

    async expectSortingIconsPatientId() {
        await expect(this.PatientIdSortIcons).toHaveCount(2);
    }

    async expectSortingIconsName() {
        await expect(this.NameSortIcons).toHaveCount(2);
    }
    async validateEmptyTable() {
        await expect(this.tableRows).toHaveCount(0);
    }

    async searchPatient(text) {
        await this.searchBar.fill(text);
        await this.searchBar.press('Enter');
    }

    async clearSearch() {
        await this.clearSearchBtn.click();
    }

    async sortPatientIdAscending() {
        await this.patientIdUpArrow.click();
    }

    async sortPatientIdDescending() {
        await this.patientIdDownArrow.click();
    }

    async sortNameAscending() {
        await this.nameUpArrow.click();
    }

    async sortNameDescending() {
        await this.nameDownArrow.click();
    }

    async validateAscending(columnLocator) {
        const values = await columnLocator.allTextContents();
        const sorted = [...values].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
        expect(values).toEqual(sorted);
    }

    async validateDescending(columnLocator) {
        const values = await columnLocator.allTextContents();
        const sorted = [...values].sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
        expect(values).toEqual(sorted);
    }

    async validateSearchResults(expectedTerm) {
        const rowCount = await this.rows.count();
        expect(rowCount).toBeGreaterThan(0);
        const content = await this.page.locator('table tbody').textContent();
        expect(content).toContain(expectedTerm);
    }

    async validateAllRecordsVisible(expectedCount) {
        await expect(this.tableRows).toHaveCount(expectedCount);
    }

    //ViewTest Reports methods

    async clickViewReports() {
        await this.viewReportsBtn.first().click();
    }

    async validateReportOpened() {
        await expect(this.reportPopup).toBeVisible();
    }

    async validateReportTitle(expected) {
        await expect(this.reportTitle).toHaveText(expected);
    }

    async validatePatientId() {
        await expect(this.reportPatientId).first().toBeVisible();
    }

    async validatePatientName() {
        await expect(this.reportPatientName).first().toBeVisible();
    }

    async validatePatientEmail() {
        await expect(this.reportPatientEmail).first().toBeVisible();
    }

    async validatePatientPhone() {
        await expect(this.reportPatientPhone).first().toBeVisible();
    }

    async validateCloseIcon() {
        await expect(this.closeIcon).first().toBeVisible();
    }

    // Reports Table

    async validateReportsTableVisible() {
        await expect(this.reportsTable).toBeVisible();
    }

    async validateReportHeaders(expectedHeaders) {
        const actual = await this.reportsHeaders.first().allTextContents();
        expect(actual).toEqual(expectedHeaders);
    }

    async validateRecordNumbers() {
        await expect(this.recordNumberColumn).first().toBeVisible();
    }

    async validateViewPdfButtons() {
        await expect(this.viewPdfBtn).first().toBeVisible();
    }

    async validateUploadedTime() {
        await expect(this.uploadedTimeColumn).first().toBeVisible();
    }

    async validateReportNames() {
        await expect(this.reportNameColumn).first().toBeVisible();
    }

    async validateVitals() {
        await expect(this.vitalsColumn).first().toBeVisible();
    }

    async validateHealthConditions() {
        await expect(this.healthConditionColumn).first().toBeVisible();
    }

    // Multiline check
    async validateMultiline(locator) {
        const text = await locator.first().textContent();
        expect(text).toContain('\n');
    }

    async validateVitalsOrder() {
        const text = await this.vitalsColumn.first().textContent();
        const lines = text.split('\n').map(l => l.trim()).filter(l => l);
        expect(lines[0]).toContain('Weight');
        expect(lines[1]).toContain('Height');
        expect(lines[2]).toContain('Temperature');
        expect(lines[3]).toContain('SP');
        expect(lines[4]).toContain('DP');
    }

    // Pagination
    async validatePopupPagination() {
        await expect(this.popupPagination).toBeVisible();
    }


}

export default MyPatientsPagePO;