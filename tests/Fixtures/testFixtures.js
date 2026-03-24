import { test as base } from 'playwright-bdd';
import LoginPagePO from '../PageObjects/LoginPagePO.js';
import { EditPage } from '../PageObjects/EditPagePom.js';
// import DashboardPagePO from '../PageObjects/DashboardPO.js';
// import MyPatientsPagePO from '../PageObjects/MyPatientPagePO.js';

export const test = base.extend({

  loginPage: async ({ page }, use) => {
    await use(new LoginPagePO(page));
  },

//   dashboardPage: async ({ page }, use) => {
//     await use(new DashboardPagePO(page));
//   },

//   myPatientsPage: async ({ page }, use) => {
//     await use(new MyPatientsPagePO(page));
//   },

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