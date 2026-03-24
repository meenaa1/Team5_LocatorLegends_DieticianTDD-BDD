import { expect } from '@playwright/test';

class MyPatientsPagePO {
    constructor(page) {
        this.page = page;

        this.myPatientsButton = page.getByRole('link', { name: 'My Patients' });
        this.pageHeader = page.locator('h1, h2', { hasText: 'My Patients' });
        // Search bar
        this.searchBar = page.locator('input[placeholder="Search..."]');
        this.searchIcon = page.locator('input[placeholder="Search..."], .search-icon');
        // Table column headers
        this.tableHeaders = page.locator('table thead th');

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
        const actualHeaders = await this.page.locator('table thead th').allTextContents();
        expect(actualHeaders).toEqual(expectedHeaders);
    }

    async expectSortingIconsPatientId() {
        await expect(this.PatientIdSortIcons).toHaveCount(2);
    }

    async expectSortingIconsName() {
        await expect(this.NameSortIcons).toHaveCount(2);
    }

}

export default MyPatientsPagePO;