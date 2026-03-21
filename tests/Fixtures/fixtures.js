import{test as base, createBdd} from 'playwright-bdd'


export const test = base.extend({  
  
   loginpage: async ({ page }, use) => {
    await use(new loginpage(page));
  },
   

  });

export const { Given, When, Then } = createBdd(test);