import { test as setup, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const authFile = path.resolve(__dirname, '../playwright/.auth/user.json');

// Ensure directory exists
fs.mkdirSync(path.dirname(authFile), { recursive: true });

setup('authenticate', async ({ page }) => {
  if (!process.env.username || !process.env.password) {
    throw new Error('Missing credentials in .env');
  }

  await page.goto('http://localhost:4200');

  await page.getByPlaceholder('Username').fill(process.env.username);
  await page.getByPlaceholder('Password').fill(process.env.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL('**/dashboard');
  await expect(page.getByText('Logout')).toBeVisible();

  await page.context().storageState({ path: authFile });
});