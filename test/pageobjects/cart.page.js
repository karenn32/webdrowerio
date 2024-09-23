import Page from './page.js';

class CartPage extends Page {

    get item() {
        return $('div[data-test="inventory-item-name"]');
    }

    get removeBtn() {
        return $('button[data-test^="remove"]');
    }
    get checkoutBtn() {
        return $('button[data-test="checkout"]');
    }

    async clickItem() {
        await this.item.click();
    }

    async clickCheckoutBtn() {
        await this.checkoutBtn.click();
    }

    async clickRemoveBtn() {
        await this.removeBtn.click();
    }

    open() {
        return super.open('cart.html');
    }

    async isOpen() {
        const url = await browser.getUrl();
        return url.includes('cart.html') && await this.item.isDisplayed();
    }

}

export default new CartPage();
