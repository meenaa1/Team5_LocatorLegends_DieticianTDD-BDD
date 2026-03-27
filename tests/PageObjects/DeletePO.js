import { expect } from "@playwright/test";

class DeletePopupPOM{
    constructor(page){
        this.page = page;
        this.deleteIconButton = (identifier) => this.patientRow(identifier).getByRole('button', { name: 'Delete' });
        this.confirmAlertTitle = this.page.getByRole('heading', { name: 'Confirm' });
        this.alertText = this.page.getByText('Are you sure to delete [Patient Name]?');
        this.YesButton = page.getByRole('button', { name: 'Yes'});
        this.NoButton = page.getByRole('button', { name: 'No'});



    }

    async clicDeleteIconForPatient(identifier){
        const row = this.patientRow(identifier);
        await expect(row).toBeVisible();
        const deleteButton = this.deleteIconButton(identifier);
        await expect(deleteButton).toBeVisible();
        await deleteButton.click();
    }
    async verifyConfirmAlertTitleVisible(){
        await expect(this.confirmAlertTitle).toBeVisible();
        await expect(this.confirmAlertTitle).toHaveText('Confirm');

    }
    async verifyDeleteAlertMessage(expectedName){
        const expectedText = `Are you sure to delete ${expectedName}?`;
        await expect(this.alertText).toBeVisible();
        await expect(this.alertText).toHaveText(expectedText);
    }
    async verifyYesButtonVisible(){
        await expect(this.YesButton).toBeVisible();
    }
    async verifyNoButtonVisible(){
        await expect(this.NoButton).toBeVisible();
    }
}