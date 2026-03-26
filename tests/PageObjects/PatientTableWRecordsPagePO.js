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

        this.viewReportsBtn = page.locator('text=View Previous Test Reports');
        this.viewPlansBtn = page.locator('text=View Previous Diet Plans');
        this.createReportBtn = page.locator('text=Create New Report/plan');

        this.editIcon = page.locator('i.edit-icon');
        this.deleteIcon = page.locator('i.delete-icon');

        this.reportModal = page.locator('div[role="dialog"]');
        this.modalTitle = page.getByText('View Patient Test Reports');
        this.viewPdfBtn = page.getByRole('button', { name: 'View PDF' });
        this.closeModalBtn = page.locator('.close-button, .fa-times');
        this.patientID = page.getByText('PatientID');
        this.patientName= page.getByText('Name');
    }

    async validateColumnNotEmpty(columnLocator) {
        const rowCount = await columnLocator.count();
        for (let i = 0; i < rowCount; i++) {
            const text = (await columnLocator.nth(i).textContent()).trim();
            expect(text.length).toBeGreaterThan(0);
        }
    }
    // async validateDetailsColumn() {
    //     const rowCount = await this.detailsColumn.count();
    //     for (let i = 0; i < rowCount; i++) {
    //         const text = (await this.detailsColumn.nth(i).textContent()).trim();
    //         const lines = text.split('\n').map(s => s.trim()).filter(s => s !== '');
    //         expect(lines.length).toBe(3); // Phone, Email, DOB
    //         expect(lines[0]).toMatch(/\d{10,}/); // Phone number
    //         expect(lines[1]).toMatch(/\S+@\S+\.\S+/); // Email
    //         expect(lines[2]).toMatch(/^\d{2}-\d{2}-\d{4}$/); // DOB
    //     }
    // }

    async validatePhoneNumbers() {
        const rowCount = await this.detailsColumn.count();
        for (let i = 0; i < rowCount; i++) {
            const text = (await this.detailsColumn.nth(i).textContent()).trim();
            const lines = text.split('\n').map(s => s.trim()).filter(s => s !== '');
            const phone = lines[0];
            expect(phone).toMatch(/\d{10,}/);
        }
    }

    async validateEmails() {
        const rowCount = await this.detailsColumn.count();
        for (let i = 0; i < rowCount; i++) {
            const text = (await this.detailsColumn.nth(i).textContent()).trim();
            const lines = text.split('\n').map(s => s.trim()).filter(s => s !== '');
            const email = lines[1];
            expect(email).toMatch(/\S+@\S+\.\S+/);
        }
    }

    async validateDOBs() {
        const rowCount = await this.detailsColumn.count();
        const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
        for (let i = 0; i < count; i++) {
            const text = (await this.detailsColumn.nth(i).textContent()).trim();
            const dob = text.split('\n')[2].trim();
            expect(dob).toMatch(regex);
        }
    }

    async validateDateFormat(columnLocator) {
        const contents = await columnLocator.allTextContents();
        contents.forEach(date => expect(date.trim()).toMatch(/^\d{2}-\d{2}-\d{4}$/));
    }

    async validateLastVisitDates() {
        const count = await this.lastVisitDateColumn.count();
        const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
        for (let i = 0; i < count; i++) {
            const text = (await this.lastVisitDateColumn.nth(i).textContent()).trim();
            expect(text).toMatch(regex);
        }
    }

    async validateActionButtons(buttonNames) {
        for (const name of buttonNames) {
            await expect(this.page.getByRole('button', { name: name }).first()).toBeVisible();
        }
    }

    async validateIcons(iconLocator) {
        const rowCount = await this.rows.count();
        await expect(iconLocator).toHaveCount(rowCount);
    }

    async clickViewReports() {
        await this.viewReportsBtn.first().click();
    }

    async clickViewPlans() {
        await this.viewPlansBtn.first().click();
    }

    async clickCreateReport() {
        await this.createReportBtn.first().click();
    }

    async validateViewTestReportPopup() {
        await expect(this.modalTitle).toBeVisible();
        await expect(this.patientID).toBeVisible();
        await expect(this.patientName).toBeVisible();
    }
}


export default MyPatientsTablePO;