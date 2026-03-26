import { expect } from '@playwright/test';



class AddPatientDetailsPagePO {
    constructor(page) {
        this.page = page;


        this.myPatientPage = page.locator('.my-patient-page');
        this.calendar = page.locator('.calendar');
        this.dropdownOptions = page.locator('.dropdown-menu option');
        this.successToast = page.locator('.toast-success');
        this.errorMessages = page.locator('.error-message');
        this.myPatientPage = page.locator('.my-patient-page');
        this.newPatientRow = page.locator('.patient-row');
        this.viewReportBtn = page.locator('.view-report');
        this.recordNumber = page.locator('.record-number');
        this.uploadedPdf = page.locator('.pdf-file');
        this.uploadDate = page.locator('.upload-date');
        this.healthInfo = page.locator('.health-info');

    }
    async isCalendarDisplayed() {
        return await this.calendar.isVisible();
    }

    async navigateToMyPatientPage() {
        await this.page.click('.my-patient-page-link');
    }

    async getSuccessToastText() {
        return await this.successToast.textContent();
    }
    async getErrorMessages() {
        return await this.errorMessages.allTextContents();
    }
    async isMyPatientPageDisplayed() {
        return await this.myPatientPage.isVisible();
    }
    async getNewPatientRowCount() {
        return await this.newPatientRow.count();
    }
    async clickViewReport() {
        await this.viewReportBtn.click();
    }
    async getRecordNumber() {
        return await this.recordNumber.textContent();
    }
    async getUploadedPdfName() {
        return await this.uploadedPdf.textContent();
    }
    async getUploadDate() {
        return await this.uploadDate.textContent();
    }
    async getHealthInfo() {
        return await this.healthInfo.textContent();
    }


}



  
   

export default AddPatientDetailsPagePO;
