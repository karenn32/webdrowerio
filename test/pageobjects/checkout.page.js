import Page from './page.js';

class CheckoutPage extends Page {

    get checkoutForm() {
        return $('div[data-test="checkout-info-container"]');
    }

    get continueBtn() {
        return $('input[data-test="continue"]');
    }

    get firstName() {
        return $('input[data-test="firstName"]');
    }

    get lastName() {
        return $('input[data-test="lastName"]');
    }

    get postalCode() {
        return $('input[data-test="postalCode"]');
    }

    get cancelBtn() {
        return $('button[data-test="cancel"]');
    }

    get error() {
        return $('h3[data-test="error"]');
    }


    async clickCheckoutForm() {
        await this.checkoutForm.click();
    }

    async clickContinueBtn() {
        await this.continueBtn.click();
    }

    async clickCancelBtn() {
        await this.cancelBtn.click();
    }

    async setFirstName(value) {
        await this.firstName.setValue(value);
    }

    async setLastName(value) {
        await this.lastName.setValue(value);
    }

    async setPostalCode(value) {
        await this.postalCode.setValue(value);
    }


    open() {
        return super.open('checkout-step-one.html');
    }

    async isOpen() {
        const url = await browser.getUrl();
        return url.includes('checkout-step-one.html');
    }
}

export default new CheckoutPage();
