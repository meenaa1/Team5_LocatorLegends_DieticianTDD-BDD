import { expect } from '@playwright/test';

class MyPatientsPaginationPO {
    constructor(page) {
        this.page = page;
        this.tableRows = page.locator('table tbody tr');

        this.nextArrow = page.locator('.pagination .next');      // (>)
        this.prevArrow = page.locator('.pagination .prev');      // (<)
        this.firstArrow = page.locator('.pagination .first');    // (<<)
        this.lastArrow = page.locator('.pagination .last');      // (>>)

        this.paginationText = page.locator('.pagination-text');
        this.paginationContainer = page.locator('.pagination');
    }

    async clickNext() {
        await this.nextArrow.click();
    }

    async clickPrevious() {
        await this.prevArrow.click();
    }

    async clickFirst() {
        await this.firstArrow.click();
    }

    async clickLast() {
        await this.lastArrow.click();
    }

    async verifyRecordsExist() {
        await expect(this.tableRows.first()).toBeVisible();
        const count = await this.tableRows.count();
        expect(count).toBeGreaterThan(0);
    }

    async validatePaginationVisible() {
        await expect(this.paginationContainer).toBeVisible();
    }

    async validatePaginationText() {
        const text = await this.paginationText.textContent();
        expect(text).toMatch(/\d+\s*-\s*\d+\s*of\s*\d+/);
    }

    async storeFirstRow() {
        this.firstRowText = await this.getFirstRowText();
    }

    async getFirstRowText() {
        return await this.tableRows.first().textContent();
    }

    async validatePageChanged() {
        const current = await this.getFirstRowText();
        expect(current).not.toBe(this.firstRowText);
    }

    async validateArrowEnabled(locator) {
        await expect(locator).toBeEnabled();
    }

    async validateArrowDisabled(locator) {
        await expect(locator).toBeDisabled();
    }

    async validateAllPaginationArrowsDisabled() {
        await expect(this.firstArrow).toBeDisabled();
        await expect(this.prevArrow).toBeDisabled();
        await expect(this.nextArrow).toBeDisabled();
        await expect(this.lastArrow).toBeDisabled();
    }

}

export default MyPatientsPaginationPO;