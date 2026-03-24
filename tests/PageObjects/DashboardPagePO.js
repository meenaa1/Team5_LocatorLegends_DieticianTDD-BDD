import { expect } from '@playwright/test';
import logger from '../../utils/Logger.js';

class DashboardPagePO {
    constructor(page) {
        this.page = page;
        this.navBar = page.locator('nav');
        this.myPatientsLink = page.getByRole('link', { name: 'My Patients' });
        this.newPatientLink = page.getByRole('link', { name: 'New Patient' });
        this.loginLink = page.getByRole('link', { name: 'Login' });
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.homeIcon = page.locator('//i[contains(@class, "home")]');

    }

    async clickMyPatientslink() {
        await this.myPatientsLink.click();
    }
    async clickNewPatient() {
        await this.newPatientLink.click();
    }

    async clickLogout() {
        await this.logoutLink.click();
    }

    async clickHomeIcon() {
        await this.homeIcon.click();
    }

    async expectNavLinksVisible(expectedLinks) {
        const actualLinks = await this.page.locator('nav a').allTextContents();
        expect(actualLinks).toEqual(expectedLinks);
    }

    async expectRedirectTo(pageName) {
        const url = this.page.url().toLowerCase().replace(/\s/g, '');
        expect(url).toContain(pageName.toLowerCase().replace(/\s/g, ''));
    }

    async expectLoggedOut() {
        await expect(this.page).toHaveURL(/login/);
    }

    async expectDashboardPage() {
        await expect(this.page).toHaveURL(/dashboard/);
    }

    async isInDashboardPage() {
        return await this.myPatientsLink.isVisible();
    }
}


export default DashboardPagePO;