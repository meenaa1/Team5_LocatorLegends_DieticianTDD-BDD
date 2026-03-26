import { expect } from '@playwright/test';

class ViewPatientReportsPO {
    constructor(page) {
        this.page = page;

        // Popup container
        this.popup = page.locator('div[role="dialog"]:has-text("View Patient Test Reports")');

        // Patient Info
        this.patientId = this.popup.locator('text=Patient ID:');
        this.patientName = this.popup.locator('text=Name:');
        this.patientEmail = this.popup.locator('text=Email:');
        this.patientContact = this.popup.locator('text=Contact Number:');

        // Table
        this.reportsTable = this.popup.locator('table');
        this.reportRows = this.reportsTable.locator('tbody tr');

        // Table columns
        this.recordNumberColumn = this.popup.locator('td.record-number');
        this.viewPdfBtn = this.popup.locator('button:has-text("View PDF")');
        this.uploadedTimeColumn = this.popup.locator('td.uploaded-time');
        this.reportNameColumn = this.popup.locator('td.report-name');
        this.vitalsColumn = this.popup.locator('td.vitals');
        this.healthConditionColumn = this.popup.locator('td.health-conditions');

        // Pagination controls
        this.rows = this.popup.locator('table tbody tr');
        this.nextArrow = this.popup.locator('.pagination .next');      // (>)
        this.prevArrow = this.popup.locator('.pagination .prev');      // (<)
        this.firstArrow = this.popup.locator('.pagination .first');    // (<<)
        this.lastArrow = this.popup.locator('.pagination .last');      // (>>)
        this.paginationText = this.popup.locator('.pagination-text');
        this.paginationContainer = this.popup.locator('.pagination');


        // Close icon
        this.closeIcon = this.popup.locator('button[aria-label="Close"]');
    }

    async expectPopupVisible() {
        await expect(this.popup).toBeVisible();
    }

    async closePopup() {
        await this.closeIcon.click();
        await expect(this.popup).toBeHidden();
    }

    async clickViewPdf() {
        await this.viewBtn.click();
    }

    async validatePdfOpened() {
        // Assuming PDF opens in new tab
        const [newPage] = await Promise.all([this.page.context().waitForEvent('page')]);
        await newPage.waitForLoadState('load');
        expect(await newPage.url()).toContain('.pdf');
    }



    async validatePaginationVisible() {
        await expect(this.firstArrow).toBeVisible();
        await expect(this.prevArrow).toBeVisible();
        await expect(this.nextArrow).toBeVisible();
        await expect(this.lastArrow).toBeVisible();
        await expect(this.paginationText).toBeVisible();
    }

    async validateAllPaginationArrowsDisabled() {
        await expect(this.firstArrow).toBeDisabled();
        await expect(this.prevArrow).toBeDisabled();
        await expect(this.nextArrow).toBeDisabled();
        await expect(this.lastArrow).toBeDisabled();
    }

    async clickNextPage() {
        await this.nextArrow.click();
    }

    async clickPreviousPage() {
        await this.prevArrow.click();
    }
}

export default ViewPatientReportsPO;