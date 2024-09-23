import Page from './page.js';

class CompletePage extends Page {

    get completeContainer() {
        return $('div[data-test="checkout-complete-container"]');
    }

    get completeHeader() {
        return $('h2[data-test="complete-header"]');
    }

    get completeText() {
        return $('div[data-test="complete-text"]');
    }

    get backBtn() {
        return $('button[data-test="back-to-products"]');
    }


    async clickCompleteContainer() {
        await this.completeContainer.click();
    }

    async clickCompleteHeader() {
        await this.completeHeader.click();
    }

    async clickCompleteText() {
        await this.completeText.click();
    }

    async clickBackBtn() {
        await this.backBtn.click();
    }

    async isOpen() {
        const url = await browser.getUrl();
        return url.includes('checkout-complete.html');
    }

    open() {
        return super.open('checkout-complete.html');
    }
}

export default new CompletePage();
