import Page from './page.js';
import { getNumberFromString } from '../../utils/regexToNumber.js';

class OverwiewPage extends Page {

    get item() {
        return $('div[data-test="inventory-item-name"]');
    }

    get allPrices() {
        return $$('div[data-test="inventory-item-price"]');
    }

    get subtotal() {
        return $('div[data-test="subtotal-label"]');
    }

    get tax() {
        return $('div[data-test="tax-label"]');
    }

    get total() {
        return $('div[data-test="total-label"]');
    }

    get finishBtn() {
        return $('button[data-test="finish"]');
    }

    get cancelBtn() {
        return $('button[data-test="cancel"]');
    }

    get continueShopping() {
        return $('button[data-test="continue-shopping"]');
    }

    async clickContinueShopping() {
        await this.continueShopping.click();
    }

    async clickItem() {
        await this.item.click();
    }

    async clickFinishBtn() {
        await this.finishBtn.click();
    }

    async clickCancelBtn() {
        await this.cancelBtn.click();
    }

    async calculateTotal() {
        const prices = await this.allPrices.map(async (item) => {
            const priceText = await item.getText();
            return Number(getNumberFromString(priceText));
        });
        return prices.reduce((sum, price) => sum + price, 0);
    }

    async assertPageIsOpen() {
        const isOpen = await this.isOpen();
        await expect(isOpen).toBe(true);
    }

    async assertItemIsPresent() {
        await expect(this.item).toBePresent();
    }

    async getTotalAmount() {
        const totalAmountText = await this.total.getText();
        return Number(getNumberFromString(totalAmountText));
    }

    async getTaxAmount() {
        const taxAmountText = await this.tax.getText();
        return Number(getNumberFromString(taxAmountText));
    }

    async assertTotalPriceIsCorrect() {
        const actualTotalPrice = await this.getTotalAmount();
        const actualTaxAmount = await this.getTaxAmount();
        const calculatedTotalPrice = await this.calculateTotal() + actualTaxAmount;
        await expect(calculatedTotalPrice).toEqual(actualTotalPrice);
    }

    async isOpen() {
        const url = await browser.getUrl();
        return url.includes('checkout-step-two.html');
    }

    open() {
        return super.open('checkout-step-two.html');
    }
}

export default new OverwiewPage();
