import { expect } from '@playwright/test';


class AddPatientDetailsPagePO {   
constructor(page) {
    this.page = page;
    this.homeTitle = page.locator('.home-title');
    this.newPatientBtn = page.locator('#new-patient-btn');
     
    this.successToast = page.locator('.toast-success');

    this.errorMessages = page.locator('.error-message');

    this.myPatientPage = page.locator('.my-patient-page');
    this.newPatientRow = page.locator('.patient-row');

   
    this.viewReportBtn = page.locator('.view-report');
    this.recordNumber = page.locator('.record-number');
    this.uploadedPdf = page.locator('.pdf-file');
    this.uploadDate = page.locator('.upload-date');
    this.healthInfo = page.locator('.health-info');

    async clickNewPatient() {
        await this.newPatientBtn.click();   
    }

    async isHomePageDisplayed() {
        return await this.homeTitle.isVisible();
     }

   

}
}