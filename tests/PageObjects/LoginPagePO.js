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
}

export default LoginPage;