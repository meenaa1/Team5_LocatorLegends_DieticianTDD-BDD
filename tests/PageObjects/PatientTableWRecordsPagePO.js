// MyPatientsTablePO.js
import { expect } from '@playwright/test';

class MyPatientsTablePO {
    constructor(page) {
        this.page = page;

        // Table rows
        this.rows = page.locator('table tbody tr');

        // Columns (by index)
        this.patientIdColumn = page.locator('table tbody tr td:nth-child(1)');
        this.nameColumn = page.locator('table tbody tr td:nth-child(2)');
        this.detailsColumn = page.locator('table tbody tr td:nth-child(3)');
        this.lastVisitDateColumn = page.locator('table tbody tr td:nth-child(4)');
        this.actionsColumn = page.locator('table tbody tr td:nth-child(5)');
        this.editDeleteColumn = page.locator('table tbody tr td:nth-child(6)');

        // Actions buttons
        this.viewReportsBtn = page.locator('text=View Previous Test Reports');
        this.viewPlansBtn = page.locator('text=View Previous Diet Plans');
        this.createReportBtn = page.locator('text=Create New Report/plan');

        // Icons
        this.editIcon = page.locator('i.edit-icon');
        this.deleteIcon = page.locator('i.delete-icon');
    }

   
    async getColumnTexts(locator) {
        return await locator.allTextContents();
    }

    async validateAllColumnsHaveValues() {
        const rowsCount = await this.rows.count();

        for (let i = 0; i < rowsCount; i++) {
            const row = this.rows.nth(i);
            const cells = await row.locator('td').allTextContents();

            cells.forEach(cell => {
                expect(cell.trim().length).toBeGreaterThan(0);
            });
        }
    }

    async validateColumnNotEmpty(locator) {
        const values = await locator.allTextContents();
        values.forEach(val => expect(val.trim().length).toBeGreaterThan(0));
    }

    async validateDetailsContainsAll() {
        const values = await this.detailsColumn.allTextContents();

        values.forEach(val => {
            expect(val.toLowerCase()).toContain('email');
            expect(val.toLowerCase()).toContain('phone');
        });
    }

    async validateMultilineDetails() {
        const values = await this.detailsColumn.allTextContents();

        values.forEach(val => {
            expect(val.includes('\n')).toBeTruthy();
        });
    }

    async validateEmailFormat() {
        const values = await this.detailsColumn.allTextContents();
        const emailRegex = /\S+@\S+\.\S+/;

        values.forEach(val => {
            expect(emailRegex.test(val)).toBeTruthy();
        });
    }

    async validatePhoneFormat() {
        const values = await this.detailsColumn.allTextContents();
        const phoneRegex = /\d{7,}/;

        values.forEach(val => {
            expect(phoneRegex.test(val)).toBeTruthy();
        });
    }

    async validateDateFormat(locator) {
        const values = await locator.allTextContents();
        const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

        values.forEach(val => {
            expect(dateRegex.test(val.trim())).toBeTruthy();
        });
    }

    async validateActionButtons() {
        await expect(this.viewReportsBtn).toBeVisible();
        await expect(this.viewPlansBtn).toBeVisible();
        await expect(this.createReportBtn).toBeVisible();
    }

    async validateEditIcons() {
        const count = await this.editIcon.count();
        expect(count).toBeGreaterThan(0);
    }

    async validateDeleteIcons() {
        const count = await this.deleteIcon.count();
        expect(count).toBeGreaterThan(0);
    }

    async clickViewReports() {
        await this.viewReportsBtn.first().click();
    }
}

export default MyPatientsTablePO;