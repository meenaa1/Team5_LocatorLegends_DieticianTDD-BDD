import { expect } from "@playwright/test";
const EditTestData = require('../TestData/EditTestData.json');

class EditPagePom{
    constructor(page){
        this.page = page;
        this.myPatientsButton = page.getByRole('button', {name:'My Patients'});
        this.myPatientTitle = page.getByRole('heading', {name:'My Patients'});
        this.PatientsListRows = page.locator("xpath = //table/tbody/tr");
        this.submitButton = page.getByRole('button', {name:'Submit'});
        this.closeButton = page.getByRole('button', {name:'Close'});
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
        this.patientRow = (identifier) => this.page.locator('table tbody tr', { has: this.page.getByText(identifier) });
        this.editIconButton = (identifier) => this.patientRow(identifier).getByRole('button', { name: 'Edit' });
        this.editPageTitle = page.getByRole('heading', { name:'Edit Patient'});
        this.firstNamePlaceholder = page.getByPlaceholder('First Name');
        this.lastNamePlaceholder = page.getByPlaceholder('Last Name');
        this.emailPlaceholder = page.getByPlaceholder('Email');
        this.contactNumberPlaceholder = page.getByPlaceholder('Contact Number');
        this.patientNameErrorMessage = page.getByText('Patient name accepts only alphabets');
        this.emailErrorMessage = page.getByText('Please enter a valid email address');
        this.emptyEmailErrorMesage = page.getByText('Email field cannot be empty');
        this.contactNumberErrorMessage = page.getByText('Contact number accepts only numeric values');
        this.contactNumberErrorMsgFewerDigits = page.getByText('Please enter a valid contact number');
        this.emptyContactNumberErrorMessage = page.getByText('Contact number field cannot be empty');
        this.viewPreviousTestReportsButton = page.getByRole('button', { name:'View Previous Test Reports'});
        this.NewRecordTable = page.locator('table tbody tr');
        this.DPErrorMessage = page.getByText('DP value is required');
        this.SPErrorMessage = page.getByText('SP value is required');
        this.recordNumberCell = (row) => row.locator('td').first();
        this.weightErrorMessage = page.getByText('Please enter a valid weight');
        this.heightErrorMessage = page.getByText('Please enter a valid height');
        this.temperatureErrorMessage = page.getByText('Please enter a valid temperature');
        this.SPInvalidDataErrorMessage = page.getByText('Please enter a valid SP value');
        this.DPInvalidDataErrorMessage = page.getByText('Please enter a valid DP value');
        this.datePicker = page.locator("//p-calendar//input");
        this.datePickerMonth = page.locator("//span[contains(@class, 'p-datepicker-year')]");
        this.datePickerYear = page.locator("//span[contains(@class, 'p-datepicker-year')]");
        this.datePickerDay = page.getByRole('gridcell');
        this.uploadHelthReportInput = page.locator('input[type="file"]');
        this.uploadHealthReportFileName = page.getByText('BllodReport.pdf');
        this.uploadedTime = (row) => row.locator('td').nth(2);
        this.healthConditionsCell = (row) => row.locator('td').nth(5);
        this.uploadInvalidFileErrorMessage = page.getByText('Invalid file type. Please upload a valid file');
        this.uploadExceedingFileSizeErrorMessage = page.getByText('File size exceeds the allowed limit');
        this.uploadJpegFileErrorMessage = page.getByText('Invalid file type. Please upload a valid file');
        this.withoutUploadFileErrorMessage = page.getByText('Please select a file to upload');




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
    async clickEditIconForPatient(identifier){
        const row = this.patientRow(identifier);
        await expect(row).toBeVisible();
        const editButton = this.editIconButton(identifier);
        await expect(editButton).toBeVisible();
        await editButton.click();
    }
    async verifyEditPageTitleVisible(){
        await expect(this.editPageTitle).toBeVisible();
    }
    async clearFirstNameField(){
        await this.firstNameInput.clear();
    }
    async verifyFirstNamePlaceholdervisible(){
        await expect(this.firstNameInput).toHaveAttribute('placeholder', 'First Name');
    }
    async clearLastNameField(){
        await this.lastNameInput.clear();
    }
    async verifyLastNamePlaceholdervisible(){
        await expect(this.lastNameInput).toHaveAttribute('placeholder', 'Last Name');
    }
    async clearEmailField(){
        await this.emailInput.clear();
    }
    async verifyEmailPlaceholdervisible(){
        await expect(this.emailInput).toHaveAttribute('placeholder', 'Email');
    }
    async clearContactNumberField(){
        await this.contactNumberInput.clear();
    }
    async verifyContactNumberPlaceholdervisible(){
        await expect(this.contactNumberInput).toHaveAttribute('placeholder', 'Contact Number');
    }
    async editFirstNameWithValidData(){
        await this.clearFirstNameField();
        const editFirstName = EditTestData.ValidEditData;
        await this.firstNameInput.fill(editFirstName.newFirstName);
        return editFirstName.newFirstName;
    }
    async clickSubmitButton(){
        await this.submitButton.click();
    }
    async verifyeditedFirstNameVisible(expectedName){
        const row = this.page.locator('table tbody tr', {has: this.page.getByText(expectedName)});
        await expect(row).toBeVisible();

    }
    async editLastNameWithValidData(){
        await this.clearLastNameField();
        const editLastName = EditTestData.ValidEditData;
        await this.lastNameInput.fill(editLastName.newLastName);
        return editLastName.newLastName;
    }
    async verifyeditedLastNameVisible(expectedName){
        const row = this.page.locator('table tbody tr', {has: this.page.getByText(expectedName)});
        await expect(row).toBeVisible();

    }
    async editFirstNameWithNumericData(){
        await this.clearFirstNameField();
        const editFirstName = EditTestData.NumericData;
        await this.firstNameInput.fill(editFirstName.FirstName);
        return editFirstName.FirstName;
    }
    async editLastNameWithNumericData(){
        await this.clearLastNameField();
        const editLastName = EditTestData.NumericData;
        await this.lastNameInput.fill(editLastName.LastName);
        return editLastName.LastName;
    }
    async editFirstNameWithSplCharNumericData(){
        await this.clearFirstNameField();
        const editFirstName = EditTestData.specCharaNumericData;
        await this.firstNameInput.fill(editFirstName.FirstName);
        return editFirstName.FirstName;
    }
    async editLastNameWithSplCharNumericData(){
        await this.clearLastNameField();
        const editLastName = EditTestData.specCharaNumericData;
        await this.lastNameInput.fill(editLastName.LastName);
        return editLastName.LastName;
    }
    async editFirstNameWithSplCharData(){
        await this.clearFirstNameField();
        const editFirstName = EditTestData.SpecialCharacterData;
        await this.firstNameInput.fill(editFirstName.FirstName);
        return editFirstName.FirstName;
    }
    async editLastNameWithSplCharData(){
        await this.clearLastNameField();
        const editLastName = EditTestData.SpecialCharacterData;
        await this.lastNameInput.fill(editLastName.LastName);
        return editLastName.LastName;
    }
    async verifyPatientNameErrorMessage(expectedMessage){
        await expect(this.patientNameErrorMessage).toHaveText(expectedMessage);
    }
    
    async editEmailWithValidData(){
        await this.clearEmailField();
        const editEmail = EditTestData.ValidEditData;
        await this.emailInput.fill(editEmail.newEmail);
        return editEmail.newEmail;
    }
    async verifyeditedEmailVisible(expectedEmail){
        const row = this.page.locator('table tbody tr', {has: this.page.getByText(expectedEmail)});
        await expect(row).toBeVisible();
    }
    async editEmailWithInvalidFormat(){
        await this.clearEmailField();
        const editEmail = EditTestData.InvalidEmailFormat;
        await this.emailInput.fill(editEmail.email);
        return editEmail.email;
    }
    async editEmailWithoutAtSymbol(){
        await this.clearEmailField();
        const editEmail = EditTestData.InvalidEmailWithoutAt;
        await this.emailInput.fill(editEmail.email);
        return editEmail.email;
    }
    async editEmailWithSpecCharacters(){
        await this.clearEmailField();
        const editEmail = EditTestData.SpecialCharacterData;
        await this.emailInput.fill(editEmail.email);
        return editEmail.email;
    }
    async verifyEmailErrorMessage(expectedMessage){
        await expect(this.emailErrorMessage).toHaveText(expectedMessage);
    }
    async verifyEmptyEmailErrorMesage(expectedMessage){
        await expect(this.emptyEmailErrorMesage).toHaveText(expectedMessage)
    };
    async editContactNumberWithValidData(){
        await this.clearContactNumberField();
        const editContactNumber = EditTestData.ValidEditData;
        await this.contactNumberInput.fill(editContactNumber.newContactNumber);
        return editContactNumber.newContactNumber;
    }
    async verifyeditedCTCNumberVisible(expectedCTC){
        const row = this.page.locator('table tbody tr', {has: this.page.getByText(expectedCTC)});
        await expect(row).toBeVisible();
    }
    async editContactNumberWithAlphabets(){
        await this.clearContactNumberField();
        const editContactNumber = EditTestData.ContactNumberWithAlphabets;
        await this.contactNumberInput.fill(editContactNumber.ContactNumber);
        return editContactNumber.ContactNumber;
    }
    async verifyContactNumberErrorMessage(expectedMessage){
        await expect(this.contactNumberErrorMessage).toHaveText(expectedMessage);
    }
    async editContactWithSpecChar(){
        await this.clearContactNumberField();
        const editContactNumber = EditTestData.SpecialCharacterData;
        await this.contactNumberInput.fill(editContactNumber.ContactNumber);
        return editContactNumber.ContactNumber; 
    }
    async editContactNumberWithFewerDigits(){
        await this.clearContactNumberField();
        const editContactNumber = EditTestData.ContactNumberWithFewerDigits;
        await this.contactNumberInput.fill(editContactNumber.ContactNumber);
        return editContactNumber.ContactNumber;
    }
    async verifycontactNumberErrorMsgFewerDigitsVisible(expectedMessage){
        await expect(this.contactNumberErrorMsgFewerDigits).toHaveText(expectedMessage);
    }
    async verifyemptyContactNumberErrorMessageVisible(expectedMessage){
        await expect(this.emptyContactNumberErrorMessage).toHaveText(expectedMessage)
    }
    async clearWeightField(){
        await this.weightInput.clear();
    }
    async editWeightWithValidData(){
        await this.clearWeightField();
        const editWeight = EditTestData.VitalsValidData;
        await this.weightInput.fill(editWeight.Weight);
        return editWeight.weight;
    }
    async verifyeditedWeightVisible(expectedWeight){
        const row = this.page.locator('table tbody tr', {has: this.page.getByText(expectedWeight)});
        await expect(row).toBeVisible();
    }
    async clickPreviousTestReportsButton(){
        await this.viewPreviousTestReportsButton.click();
    }
    async verifyNewRecordWeightValue(expectedWeight){
        const newRecord = this.NewRecordTable.first();
        const vitalscell = newRecord.locator('td').nth(5);
        await expect(vitalscell).toContainText(`weight: ${expectedWeight}`);
    }
    async clearHeightField(){
        await this.heightInpt.clear();
    }
    async editHeightWithValidData(){
        await this.clearHeightField();
        const editHeight = EditTestData.VitalsValidData;
        await this.heightInpt.fill(editHeight.Height);
        return editHeight.height;
    }
    async verifyeditedHeightVisible(expectedHeight){
        const row = this.page.locator('table tbody tr', {has: this.page.getByText(expectedHeight)});
        await expect(row).toBeVisible();
    }
    async verifyNewRecordHeightValue(expectedHeight){
        const newRecord = this.NewRecordTable.first();
        const vitalscell = newRecord.locator('td').nth(5);
        await expect(vitalscell).toContainText(`height: ${expectedHeight}`);
    }
    async clearTemperatureField(){
        await this.temperatureInput.clear();
    }
    async editTemperatureWithValidData(){
        await this.clearTemperatureField();
        const editTemperature = EditTestData.VitalsValidData;
        await this.temperatureInput.fill(editTemperature.Temperature);
        return editTemperature.Temperature;
    }
    async verifyeditedTemperatureVisible(expectedTemperature){
        const row = this.page.locator('table tbody tr', {has: this.page.getByText(expectedTemperature)});
        await expect(row).toBeVisible();
    }
    async verifyNewRecordTemperatureValue(expectedTemperature){
        const newRecord = this.NewRecordTable.first();
        const vitalscell = newRecord.locator('td').nth(5);
        await expect(vitalscell).toContainText(`temperature: ${expectedTemperature}`);
    }
    async clearSPField(){
        await this.SPInput.clear();
    }
    async editOnlySPWithValidData(){
        await this.clearSPField();
        const editSP = EditTestData.VitalsValidData;
        await this.SPInput.fill(editSP.SP);
        return editSP.SP;
    }
    async clearDPField(){
        await this.DPInput.clear();
    }
    async editOnlyDPWithValidData(){
        await this.clearDPField();
        const editDP = EditTestData.VitalsValidData;
        await this.DPInput.fill(editDP.DP);
        return editDP.DP;
    }
    async verifyNewRecordSPValue(expectedSP){
        const newRecord = this.NewRecordTable.first();
        const vitalscell = newRecord.locator('td').nth(5);
        await expect(vitalscell).toContainText(`SP: ${expectedSP}`);
    }
    async verifyNewRecordDPValue(expectedDP){
        const newRecord = this.NewRecordTable.first();
        const vitalscell = newRecord.locator('td').nth(5);
        await expect(vitalscell).toContainText(`DP: ${expectedDP}`);
    }
    async verifySPErrorMessage(expectedMessage){
        await expect(this.SPErrorMessage).toHaveText(expectedMessage);
    }
    async verifyDPErrorMessage(expectedMessage){
        await expect(this.SPErrorMessage).toHaveText(expectedMessage);
    }
    async verifyNewRecordNumber(){
        const newRow = this.NewRecordTable.first();
        const recordNumber = this.recordNumberCell(newRow).innerText();
        await expect(recordNumber).toBe('1');
    }
    async editWeightWithAlphabets(){
        await this.clearWeightField();
        const editWeight = EditTestData.VitalsDataWithAlphabets;
        await this.weightInput.fill(editWeight.Weight);
        return editWeight.Weight;
    }
    async editHeightWithAlphabets(){
        await this.clearHeightField();
        const editHeight = EditTestData.VitalsDataWithAlphabets;
        await this.heightInpt.fill(editHeight.Hieght);
        return editHeight.Hieght;
    }
    async editWeightWithSpecialCharacters(){
        await this.clearWeightField();
        const editWeight = EditTestData.VitalsDataWithSpeChar;
        await this.weightInput.fill(editWeight.Weight);
        return editWeight.Weight;
    }
    async editHeightWithSpecialCharacters(){
        await this.clearHeightField();
        const editHeight = EditTestData.VitalsDataWithSpeChar;
        await this.heightInpt.fill(editHeight.Hieght);
        return editHeight.Hieght;
    }
    async verifyWeightErrorMessage(expectedMessage){
        await expect(this.weightErrorMessage).toHaveText(expectedMessage);
    }
    async verifyHeightErrorMessage(expectedMessage){
        await expect(this.heightErrorMessage).toHaveText(expectedMessage);
    }
    async editTemperaturetWithAlphabets(){
        await this.clearTemperatureField();
        const editTemperature = EditTestData.VitalsDataWithAlphabets;
        await this.temperatureInput.fill(editTemperature.Temperature);
        return editTemperature.Temperature;
    }
    async editTemperatureWithSpecialCharacters(){
        await this.clearTemperatureField();
        const editTemperature = EditTestData.VitalsDataWithSpeChar;
        await this.temperatureInput.fill(editTemperature.Temperature);
        return editTemperature.Temperature;
    }
    async verifyTemperatureErrorMessage(expectedMessage){
        await expect(this.temperatureErrorMessage).toHaveText(expectedMessage);
    }
    async editSPWithAlphabets(){
        await this.clearSPField();
        const editSP = EditTestData.VitalsDataWithAlphabets;
        await this.SPInput.fill(editSP.SP);
        return editSP.SP;
    }
    async editSPWithSpecialCharacters(){
        await this.clearSPField();
        const editSP = EditTestData.VitalsDataWithSpeChar;
        await this.SPInput.fill(editSP.SP);
        return editSP.SP;
    }
    async editDPWithAlphabets(){
        await this.clearDPField();
        const editDP = EditTestData.VitalsDataWithAlphabets;
        await this.DPInput.fill(editDP.DPP);
        return editDP.DP;
    }
    async editDPWithSpecialCharacters(){
        await this.clearDPField();
        const editDP = EditTestData.VitalsDataWithSpeChar;
        await this.DPInput.fill(editDP.DP);
        return editDP.DP;
    }
    async verifySPInvalidDataErrorMessage(expectedMessage){
        await expect(this.SPInvalidDataErrorMessage).toHaveText(expectedMessage);
    }
    async verifyDPInvalidDataErrorMessage(expectedMessage){
        await expect(this.DPInvalidDataErrorMessage).toHaveText(expectedMessage);
    }
    async openDateOfBirthCalenderPicker(){
        await this.dateOfBirthInput.click();
    }
    async verifyDateMonthAndYearVisible(){
        await expect(this.datePickerYear).toBeVisible();
        await expect(this.datePickerMonth).toBeVisible();
        await expect(this.datePickerDay).first().toBeVisible();
    }
    async uploadHealthReportFile(){
        await this.uploadHelthReportInput.setInputFiles(`tests/TestData/`);
    }
    async verifyUploadedFileName(){
        await expect(this.uploadHealthReportFileName).toBeVisible();
    }
    async verifyPdfFileNameVisible(){
        await expect(this.uploadHealthReportFileName).toBeVisible();
    }
    async verifyPdfFileVisible(){
         const newRow = this.NewRecordTable.first();
        const recordNumber = this.recordNumberCell(newRow);
        await expect(recordNumber).toContainText('View PDF');
    }
    async verifyUpoadedTimeVisible(){
        const newRow = this.NewRecordTable.first();
        const uploadedTimecell = await this.uploadedTime(newRow);
        await expect(uploadedTimecell).toBeVisible();
        const uploadedTimeText = (await uploadedTimeCell.innerText()).trim();
        expect(uploadedTimeText.length).toBeGreaterThan(0);
    }
    async verifyHealthConditionValuesVisible(){
        const newRow = this.NewRecordTable.first();
        const healthConditionscell = await this.healthConditionsCell(newRow);
        await expect(healthConditionscell).toBeVisible();
        const healthText = (await healthCell.innerText()).trim();
        expect(healthText.length).toBeGreaterThan(0);
    }
    async verifyInvalidFileUpload(){
        await this.uploadHelthReportInput.setInputFiles(`tests/TestData/`);
    }
    async verifyUploadInvalidFileErrorMessage(expectedMessage){
        await expect(this.uploadInvalidFileErrorMessage).toHaveText(expectedMessage);
    }
    async verifyExceedingFileSizeFileUpload(){
        await this.uploadHelthReportInput.setInputFiles(`tests/TestData/`);
    }
    async verifyuploadExceedingFileSizeErrorMessageVisible(expectedMessage){
        await this.uploadExceedingFileSizeErrorMessage(expectedMessage);
    }
    async verifyJpegFileUpload(){
        await this.uploadHelthReportInput.setInputFiles(`tests/TestData/`);
    } 
    async verifyUploadJpegFileErrorMessage(expectedMessage){
        await expect(this.uploadJpegFileErrorMessage).toHaveText(expectedMessage);
    }
    async clickCloseButton(){
        await this.closeButton.click();
    }
    async editFirstName(value){
        await this.firstNameInput.fill(value);
    }
    async verifyFirstNameNotUpdated(changedValue) {
    const table = this.page.locator('table tbody');
    await expect(table).not.toContainText(changedValue);
}

    



}

export default EditPagePom;