import { expect } from "@playwright/test";

class EditPagePom{
    constructor(page){
        this.page = page;
        this.myPatientsButton = page.getByRole('button', { name: 'My Patients' });
        this.myPatientTitle = page.getByRole('heading', { name: 'My Patients' });
        this.PatientsListRows = page.locator("xpath = //table/tbody/tr");
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.closeButton = page.getByRole('button', { name: 'Close' });
        this.inputFields = page.locator('.input-field');
        this.dropdowns = page.locator('select');
        this.fileUploadOption = page.locator('input[type="file"]');
        this.firstNameInput = page.getByLabel('First Name');
        this.lastNameInput = page.getByLabel('Last Name');
        this.emailInput = page.getByLabel('Email');
        this.contactNumberInput = page.getByLabel('Contact Number');
        this.allergyDropdown = page.getByLabel('Allergies');
        this.foodPreferenceDropdown = page.getByLabel('Food Preference');
        this.cuisineCategoryDropdown = page.getByLabel('Cuisine Category');
        this.dateOfBirthInput = page.getByLabel('Date Of Birth');
        this.vitalsTitle = page.getByRole('heading', { name: 'Vitals' });
        this.SPPlaceholder = page.getByPlaceholder('SP');
        this.DPPlaceholder = page.getByPlaceholder('DP');
        this.weightPlaceholder = page.getByPlaceholder('Weight');
        this.heightPlaceholder = page.getByPlaceholder('Height');
        this.temperaturePlaceholder = page.getByPlaceholder('Temperature');
        this.vitalsMandatoryIndicator = page.locator('#vitals-mandatory-indicator');
        this.weightInput = page.getByText('Weight', { exact: true });
        this.heightInpt = page.getByText('Height', { exact: true });
        this.temperatureInput = page.getByText('Temperature', { exact: true });
        this.SPInput = page.getByText('SP', { exact: true });
        this.DPInput = page.getByText('DP', { exact: true });
        this.uploadHealthReportText = page.getByText('Upload Health Report', {exact: true});
        this.noFilesChoosenText = page.getByText('No file chosen', {exact: true});
        this.closeButton = page.getByRole('button', { name: 'Close'});





    }


    async clickMyPatientsButton(){
        await this.myPatientsButton.click();
    }
    async verifyMyPatientsTitleVisible(){
        await expect(this.myPatientTitle).toBeVisible();
    }
    async verifyPatientsListVisible(){
        await expect(this.PatientsListRows).toHaveCountGreaterThan(0);
    }
    async isSubmitButtonVisible(){
        await expect(this.submitButton).toBeVisible();
    }
    async isSubmitButtonEnabled(){
        await expect(this.submitButton).toBeEnabled();
    }
    async iscloseButtonVisible(){
        await expect(this.closeButton).toBeVisible();
    }
    async isCloseButtonEnabled(){
        await expect(this.closeButton).toBeEnabled();
    }
    async VerifyInputFieldCount(expectedCount){
        await expect(await this.inputFields).toHaveCount(expectedCount);
    }
    async VerifyDropdownCount(expectedCount){
        await expect(await this.dropdowns).toHaveCount(expectedCount);
    }
    async VerifyFileUploadOptionCount(expectedCount){
        await expect(await this.fileUploadOption).toHaveCount(expectedCount);
    }
    async getFirstNameFieldValue(){
        return await this.firstNameInput.inputValue();
    }
    async VerifyFirstNameFieldPopulated(expectedFirstName){
        await expect(this.firstNameInput).toHaveValue(expectedFirstName);
    }
    async VerifyLastNameFieldPopulated(expectedLastName){
        await expect(this.lastNameInput).toHaveValue(expectedLastName);
    }
    async VerifyEmailFieldPopulated(expectedEmail){
        await expect(this.emailInput).toHaveValue(expectedEmail);
    }
    async VerifyContactNumberFieldPopulated(expectedContactNumber){
        await expect(this.contactNumberInput).toHaveValue(expectedContactNumber);
    }
    async getdropdownSelectedVisibleText(dropdown){
        const selectedOption = dropdown.locator('option:checked');
        return (await selectedOption.textContent()).trim();
    }
    async getAllergydropdownvisibleText(){
        return await this.getdropdownSelectedVisibleText(this.allergyDropdown);
    }
    async verifyAlleryDropdownPopulated(expectedAllergy){
        const actualText = await this.getAllergydropdownvisibleText();
        await expect(actualText).toBe(expectedAllergy);
    }
    async getFoodPreferenceDropdownVisibleText(){
        return await this.getdropdownSelectedVisibleText(this.foodPreferenceDropdown);
    }
    async verifyFoodPreferenceDropdownPopulated(expectedFoodPreference){
        const actualText = await this.getFoodPreferenceDropdownVisibleText();
        await expect(actualText).toBe(expectedFoodPreference);
    }
    async getCuisineCategoryDropdownVisibleText(){
        return await this.getdropdownSelectedVisibleText(this.cuisineCategoryDropdown);
    }
    async verifyCuisineCategoryDropdownPopulated(expectedCuisineCategory){
        const actualText = await this.getCuisineCategoryDropdownVisibleText();
        await expect(actualText).toBe(expectedCuisineCategory);
    }
    async getDateofBirthFieldValue(){
        return await this.dateOfBirthInput.inputValue();
    }
    async verifyDateOfBirthFieldPopulated(expectedDOB){
        await expect(this.dateOfBirthInput).toHaveValue(expectedDOB);
    }
    async isVitalsTitleAfterDOBField(){
        const dateOfBirthBox = await this.dateOfBirthInput.boundingBox();
        const vitalsTitleBox = await this.vitalsTitle.boundingBox();
        // ensure both elements exists
        expect(dateOfBirthBox).not.toBeNull();
        expect(vitalsTitleBox).not.toBeNull();
        expect(vitalsTitleBox.x).toBeGreaterThan(dateOfBirthBox.x);
    }
    async verifyVitalFieldsAreNotMandatory(){
        await expect(this.weightInput).not.toContainText('*');
        await expect(this.heightInpt).not.toContainText('*');
        await expect(this.temperatureInput).not.toContainText('*');
        await expect(this.SPInput).not.toContainText('*');
        await expect(this.DPInput).not.toContainText('*');
    }
    async verifyUploadBloodReportTextVisible(){
        await expect(this.uploadHealthReportText).toBeVisible();
    }
    async verifyNoFileChosenTextVisible(){
        await expect(this.noFilesChoosenText).toBeVisible();
    }
    async verifyCloseButtonColor(){
        const closeButtonColor = await this.closeButton.evaluate((el) => {
            return window.getComputedStyle(el).color;   
        });
        await expect(closeButtonColor).toBe('rgb(255, 0, 0)');
    }


}

export default EditPagePom;