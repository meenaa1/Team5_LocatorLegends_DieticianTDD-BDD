import { test as base } from 'playwright-bdd';
import LoginPagePO from '../PageObjects/LoginPagePO.js';
import { EditPage } from '../PageObjects/EditPagePom.js';
import AddPatientDialogBoxPagePO from '../PageObjects/AddPatientDialogBoxPagePO.js'
import DashboardPagePO from '../PageObjects/DashboardPagePO.js';
import MyPatientsPagePO from '../PageObjects/MyPatientsPagePO.js';


export const test = base.extend({

  loginPage: async ({ page }, use) => {
    await use(new LoginPagePO(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPagePO(page));
  },

  myPatientsPage: async ({ page }, use) => {
    await use(new MyPatientsPagePO(page));
  },

  addPatientPage : async ({ page }, use) => {
    await use(new AddPatientDialogBoxPagePO(page));
  },

  loggedInPage: async ({ loginPage }, use) => {
    await loginPage.navigate();
    await loginPage.login(process.env.username, process.env.password);
    await use(loginPage);
  },
  editPage: async ({ page}, use) => {
    const editPage = new EditPage(page);
    await use(editPage);
  }

});

export { expect } from '@playwright/test';