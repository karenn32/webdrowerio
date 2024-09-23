import Page from './page.js';

class LoginPage extends Page {
    
    get inputUsername() {
        return $('input[data-test="username"]');
    }

    get inputPassword() {
        return $('input[data-test="password"]');
    }

    get btnSubmit() {
        return $('input[data-test="login-button"]');
    }

    get loginErrorIcon() {
        return $('svg[xmlns="http://www.w3.org/2000/svg"]');
    }

    get loginErrorText() {
        return $('h3[data-test="error"]');
    }

    async clickInputUsername() {
        await this.inputUsername.click();
    }

    async clickInputPassword() {
        await this.inputPassword.click();
    }

    async clickBtnSubmit() {
        await this.btnSubmit.click();
    }

    async clickLoginErrorIcon() {
        await this.loginErrorIcon.click();
    }

    async clickLoginErrorText() {
        await this.loginErrorText.click();
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async isOpen() {
        const url = await browser.getUrl();
        return url.includes('login');
    }

    open() {
        return super.open('');
    }
}

export default new LoginPage();
