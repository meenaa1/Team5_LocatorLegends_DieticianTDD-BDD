import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/testFixtures.js";


const { Given, Then } = createBdd(test);


Given('User logged into the application without patient added to that user to check the Pagination', async ({loginPage}) => {
await loginPage.loginwithNoPatients();
  logger.info('User logged in with No patient record');
    
  });

Then('{string} should be displayed', async ({paginationPage}, expectedText) => {
   const text = await paginationPage.paginationText.textContent();
    expect(text.trim()).toBe(expectedText);
    await paginationPage.validateAllPaginationArrowsDisabled();
});
