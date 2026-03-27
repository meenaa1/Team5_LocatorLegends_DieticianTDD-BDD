import { test as base } from 'playwright-bdd';
import LoginPagePO from '../PageObjects/LoginPagePO.js';
import EditPagePom from '../PageObjects/EditPagePom.js';
import AddPatientDialogBoxPagePO from '../PageObjects/AddPatientDialogBoxPagePO.js'
import DashboardPagePO from '../PageObjects/DashboardPagePO.js';
import MyPatientsPagePO from '../PageObjects/MyPatientsPagePO.js';
import PatientTableWRecordsPagePO from '../PageObjects/PatientTableWRecordsPagePO.js';
import MyPatientsPaginationPO from '../PageObjects/MyPatientPaginationPO.js';
import ViewPDFPagePO from '../PageObjects/ViewPDFPagePO.js';
import DeletePO from '../PageObjects/DeletePO.js';



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

  patientTablePage: async ({ page }, use) => {
    await use(new PatientTableWRecordsPagePO(page));
  },

  addPatientPage: async ({ page }, use) => {
    await use(new AddPatientDialogBoxPagePO(page));
  },

  loggedInPage: async ({ loginPage }, use) => {
    await loginPage.navigate();
    await loginPage.login(process.env.username, process.env.password);
    await use(loginPage);
  },

  editPage: async ({ page }, use) => {
    await use(new EditPagePom(page));
  },

  paginationPage: async ({ page }, use) => {
    await use(new MyPatientsPaginationPO(page));
  },

  viewPDFPage: async ({ page }, use) => {
    await use(new ViewPDFPagePO(page));
  },

  DeletePopup: async ({ page }, use) => {
    await use(new DeletePO(page));
  },

});

