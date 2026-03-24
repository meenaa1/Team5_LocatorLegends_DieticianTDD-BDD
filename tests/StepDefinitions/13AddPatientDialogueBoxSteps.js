import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js"; 
import { expect } from "@playwright/test";
import AddPatientDialogBoxPagePO from "../PageObjects/AddPatientDialogBoxPagePO.js";
import LoginPagePo from "../PageObjects/LoginPagePO.js";
import logger from "../../utils/Logger.js";


const { Given, When, Then } = createBdd(test);
let addPatientPage;
let loginPage;

Given('User is in home page after login', async ({ loginPage, addPatientPage }) => {
    
    await loginPage.navigate();
    await loginPage.login(process.env.username, process.env.password);
    const isHomePageDisplayed = await addPatientPage.isHomePageDisplayed();
    expect(isHomePageDisplayed).toBeTruthy();
    logger.info('User is on the home page after login'); 
});

When('User clicks on New Patient in the header section', async ({ addPatientPage }) => {
    await addPatientPage.clickNewPatient();

    logger.info('User clicked on New Patient in the header section');
});

Then('User should see Add Patient Details on the dialog box', async ({ addPatientPage }) => {
    const title = await addPatientPage.getDialogTitle();
    expect(title).toBe('Add Patient Details');
    logger.info('User sees Add Patient Details on the dialog box');
});

Then('User should see {int} input boxes in the Add Patient Details dialog box', async ({ addPatientPage }, arg)=> {
    const inputCount = await addPatientPage.getInputCount();
    expect(inputCount).toBe(arg);
    logger.info(`User sees ${arg} input boxes in the Add Patient Details dialog box`);
});

Then('User should see {int} dropdowns in the Add Patient Details dialog box', async ({ addPatientPage }, arg) => {
    const dropdownCount = await addPatientPage.getDropdownCount();
    expect(dropdownCount).toBe(arg);   
    logger.info(`User sees ${arg} dropdowns in the Add Patient Details dialog box`);
});

Then('User should see a date picker for DOB field with MM DD YYYY displayed', async ({ addPatientPage }) => {
    const dobPlaceholder = await addPatientPage.getPlaceholder(addPatientPage.dob);
    expect(dobPlaceholder).toBe('MM/DD/YYYY');    
    logger.info('User sees a date picker for DOB field with MM/DD/YYYY displayed');
});

Then('User should see exactly {int} file upload option in Add Patient Details dialog box', async ({ addPatientPage }, arg) => {
    const fileUploadCount = await addPatientPage.getFileUploadCount();
    expect(fileUploadCount).toBe(arg);
    logger.info(`User sees exactly ${arg} file upload option in Add Patient Details dialog box`);
});

Then('User should see one Submit button', async ({ addPatientPage }) => {
  const issummitVisible = await addPatientPage.submitBtn.isVisible();
  expect(issummitVisible).toBeTruthy();
    logger.info('User sees one Submit button');
});

Then('User should see one Submit button in disabled state', async ({ addPatientPage }) => {
  const isSubmitDisabled = await addPatientPage.submitBtn.isDisabled();
  expect(isSubmitDisabled).toBeTruthy();
  logger.info('User sees one Submit button in disabled state');
});

Then('User should see one Close button', async ({ addPatientPage }) => {
    const isCloseVisible = await addPatientPage.closeBtn.isVisible();
    expect(isCloseVisible).toBeTruthy();
    logger.info('User sees one Close button');
});

Then('User should see one Close button in enabled state', async ({ addPatientPage }) => {
    const isCloseEnabled = await addPatientPage.closeBtn.isEnabled();
    expect(isCloseEnabled).toBeTruthy();    
    logger.info('User sees one Close button in enabled state');
}); 

Then('User should see mandatory field with placeholder {string}', async ({ addPatientPage }, arg) => {
  const mandatoryFields = {
    "First name": addPatientPage.firstName,
    "Last name": addPatientPage.lastName,
    "Email": addPatientPage.email,
    "Contact Number": addPatientPage.contactNumber
  };

  const locator = mandatoryFields[arg];

  if (!locator) {
    throw new Error(`Mandatory field not found in mapping: ${arg}`);
  }

  const actual = await locator.getAttribute('placeholder');
  expect(actual).toBe(arg);
  logger.info(`User sees mandatory field with placeholder ${arg}`);
});
      

Then('User should see mandatory dropdown with placeholder {string}', async ({ addPatientPage }, arg) => {
    const mandatoryDropdowns = {
      "Allergies": addPatientPage.allergies,
      "Food Preference": addPatientPage.foodPreference,
      "Cusine Category": addPatientPage.cuisineCategory
    };

    const locator = mandatoryDropdowns[arg];

    if (!locator) {
      throw new Error(`Mandatory dropdown not found in mapping: ${arg}`);
    }
    
    const actual = await locator.getAttribute('placeholder');
    expect(actual).toBe(arg);
    logger.info(`User sees mandatory dropdown with placeholder ${arg}`);
});

Then('User should see mandatory DOB with placeholder {string}', async ({ addPatientPage }, arg) => {
 

    const locator = addPatientPage.dob;

    if (!locator) {
      throw new Error(`Mandatory DOB field not found`);
    }

    const actual = await locator.getAttribute('placeholder');
    expect(actual).toBe(arg);
    logger.info(`User sees mandatory DOB with placeholder ${arg}`);
});

Then('User should see non-manadatory field placeholder with {string}', async ({ addPatientPage }, arg) => {
    const nonMandatoryFields = {
      "Weight": addPatientPage.weight,
      "Height": addPatientPage.height,
      "Temperature": addPatientPage.temperature,
      "SP": addPatientPage.sp,
      "DP": addPatientPage.dp
    };

    const locator = nonMandatoryFields[arg];

    if (!locator) {
      throw new Error(`Non-mandatory field not found in mapping: ${arg}`);
    }

    const actual = await locator.getAttribute('placeholder');
    expect(actual).toBe(arg);
    logger.info(`User sees non-mandatory field with placeholder ${arg}`);
});

Then('User should see text Upload Health Report', async ({ addPatientPage }) => {
    const uploadText = await addPatientPage.getUploadText();
    expect(uploadText).toBe('Upload Health Report');
    logger.info('User sees text Upload Health Report');
});

Then('User should see text No file Chosen', async ({ addPatientPage }) => {
    const noFileChosenText = await addPatientPage.getNoFileText();
    expect(noFileChosenText).toBe('No file chosen');
    logger.info('User sees text No file Chosen');
});

Then('User should see a scroll bar at the right side of dialog box', async ({ addPatientPage}) => {
    const hasScrollBar = await addPatientPage.hasVerticalScrollBar();
    expect(hasScrollBar).toBeTruthy();
    logger.info('User sees a scroll bar at the right side of dialog box');
});




 
                        
