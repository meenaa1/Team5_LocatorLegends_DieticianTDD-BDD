import { test as setup, expect } from '@playwright/test';
import path from 'path';

// Define the path where the session will be saved
const authFile = path.resolve(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  // 1. Navigate to the login page
  
  await page.goto('localhost:4200'); 

  // 2. Perform Login
  // Using credentials from your .env file
  await page.getByPlaceholder('Username').fill(process.env.USER_NAME);
  await page.getByPlaceholder('Password').fill(process.env.PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();

  // 3. Verify successful login (Wait for dashboard or a specific element)
  await page.waitForURL('**/dashboard');
  await expect(page.getByText('Logout')).toBeVisible();

  // 4. Save the storage state (cookies, local storage, etc.)
  await page.context().storageState({ path: authFile });
});