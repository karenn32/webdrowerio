import Page from './page.js';

class InventoryPage extends Page {

    get list() {
        return $('div[data-test="inventory-list"]');
    }

    get item() {
        return $('div[data-test="inventory-item-name"]');
    }

    get cartLink() {
        return $('a[data-test="shopping-cart-link"]');
    }

    get cartBage() {
        return $('span[data-test="shopping-cart-badge"]');
    }

    get burger() {
        return $('button[id="react-burger-menu-btn"]');
    }

    get allItemsBtn() {
        return $('a[data-test="inventory-sidebar-link"]');
    }

    get about() {
        return $('a[data-test="about-sidebar-link"]');
    }

    get logout() {
        return $('a[data-test="logout-sidebar-link"]');
    }

    get reset() {
        return $('a[data-test="reset-sidebar-link"]');
    }

    get itemAddToCartBtn() {
        return $('button[data-test^="add-to-cart"]');
    }

    get sort() {
        return $('select[data-test="product-sort-container"]');
    }

    get allItems() {
        return $$('div[data-test="inventory-item-name"]');
    }

    get twitter() {
        return $('a[data-test="social-twitter"]');
    }

    get facebook() {
        return $('a[data-test="social-facebook"]');
    }

    get linkedin() {
        return $('a[data-test="social-linkedin"]');
    }

    get allPrices() {
        return $$('div[data-test="inventory-item-price"]');
    }

    get removeBtn() {
        return $('button[data-test^="remove"]');
    }

    async clickRemoveBtn() {
        await this.removeBtn.click();
    }

    async clickList() {
        await this.list.click();
    }

    async clickItem() {
        await this.item.click();
    }

    async clickCartLink() {
        await this.cartLink.click();
    }

    async clickCartBadge() {
        await this.cartBage.click();
    }

    async clickBurger() {
        await this.burger.click();
    }

    async clickAllItemsBtn() {
        await this.allItemsBtn.click();
    }

    async clickAbout() {
        await this.about.click();
    }

    async clickLogout() {
        await this.logout.click();
    }

    async clickReset() {
        await this.reset.click();
    }

    async clickItemAddToCartBtn() {
        await this.itemAddToCartBtn.click();
    }

    async clickSort() {
        await this.sort.click();
    }

    async clickTwitter() {
        await this.twitter.click();
    }

    async clickFacebook() {
        await this.facebook.click();
    }

    async clickLinkedIn() {
        await this.linkedin.click();
    }

    open() {
        return super.open('inventory.html');
    }

    async isOpen() {
        const url = await browser.getUrl();
        return url.includes('inventory.html') && await this.list.isDisplayed();
    }
}

export default new InventoryPage();
