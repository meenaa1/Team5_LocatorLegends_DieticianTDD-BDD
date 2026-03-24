const { expect } = require('@playwright/test');
const LoginData = require('../TestData/loginTestData.json');

class LoginPagePo {
    constructor(page) {
        this.page = page;

        // Navigation bar
        this.navBarText = page.locator('//span[contains(text(), "Dietitian Project")]');
        this.homeIcon = page.locator('//i[contains(@class, "home")]');
        this.navBar = page.locator('nav');

        // Colors
        this.EXPECTED_COLORS = {
            BLUE_PURPLE: 'rgb(63, 81, 181)',
            WHITE: 'rgb(255, 255, 255)'
        };

        // Login card
        this.heading = page.getByRole('heading', { name: 'Dietician Application' });
        // this.heading = page.locator('h2, .title', { hasText: 'Dietitian Application' })

        // Labels
        this.usernameLabel = page.locator('label', { hasText: 'username' })
        this.passwordLabel = page.locator('label', { hasText: 'password' })

        // Input fields
        this.usernameInput = page.locator('input[name="username"], input[type="text"]')
        this.passwordInput = page.locator('input[name="password"], input[type="password"]')

        // Buttons
        this.loginButton = page.locator('button', { hasText: 'Login' });

        // Error messages
        this.errorMessage = page.locator('.error-message');

    }

    async navigate() {
        await this.page.goto(process.env.url);
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getNavBarBackgroundColor() {
        return await this.navBar.evaluate((el) => {
            return window.getComputedStyle(el).getPropertyValue('background-color');
        });
    }

    async getLoginButtonStyles() {
        return await this.loginButton.evaluate(el => {
            const style = getComputedStyle(el);
            return { backgroundColor: style.backgroundColor, color: style.color };
        });
    }

    async getInputFieldCount() {
        return await this.page.locator('input').count();
    }

    async isLoginButtonEnabled() {
        return await this.loginButton.isEnabled();
    }

    async getLabelAlignment() {
        return await this.usernameLabel.evaluate(el => getComputedStyle(el).textAlign);
    }

    async loginValidUser() {
        const user = LoginData.validUser;
        await this.login(user.username, user.password);
    }

    // Individual methods for invalid scenarios
    async loginNonExistingUser() {
        const user = LoginData.nonExistingUser;
        await this.login(user.username, user.password);
    }

    async loginSpecialCharUsername() {
        const user = LoginData.specialCharUsername;
        await this.login(user.username, user.password);
    }

    async loginShortUsername() {
        const user = LoginData.shortUsername;
        await this.login(user.username, user.password);
    }

    async loginWrongPassword() {
        const user = LoginData.wrongPassword;
        await this.login(user.username, user.password);
    }

    async loginSpecialCharPassword() {
        const user = LoginData.specialCharPassword;
        await this.login(user.username, user.password);
    }

    async loginEmptyUsername() {
        const user = LoginData.emptyUsername;
        await this.login(null, user.password);
    }

    async loginEmptyPassword() {
        const user = LoginData.emptyPassword;
        await this.login(user.username, null);
    }

    // async expectErrorMsg() {
    //     await expect(this.errorMessage).toBeVisible();
    //     await expect(this.errorMessage).toHaveText(LoginData.specialCharPassword.error);
    // }

    async expectErrorMsg(expectedError) {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(expectedError);
    }

    async expectErrorEmptyUsername() {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(LoginData.emptyUsername.error);
    }

    async expectErrorEmptyPassword() {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(LoginData.emptyPassword.error);
    }

    async expectDashboardVisible() {
        await expect(this.page).toHaveURL('https://www.dietician.com/dashboard');
    }


}

export default LoginPagePo;