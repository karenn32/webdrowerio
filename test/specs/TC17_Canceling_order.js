
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';
import overviewPage from '../pageobjects/overveiw.page.js';
import completePage from '../pageobjects/complete.page.js';
import { config } from '../../config.js';

const { username, password } = config.valid_user;

describe('TC17 - Canceling order test', () => {
    before(async () => {
        await loginPage.open()
        await loginPage.login(username, password)
    });

    it('should check that item is added to cart', async () => {
        const isInventoryPageOpen = await inventoryPage.isOpen()
        await expect(isInventoryPageOpen).toBe(true)
        await inventoryPage.clickItemAddToCartBtn()
        await expect(inventoryPage.cartBage).toHaveText('1')
    })

    it('should check that cart page is displayed and product is same as added', async () => {
        await inventoryPage.clickCartBadge()
        const isCartPageOpen = await cartPage.isOpen()
        await expect(isCartPageOpen).toBe(true)
        await expect(cartPage.item).toBePresent()
    });

    it('should check that checkout form is opened', async () => {
        await cartPage.clickCheckoutBtn()
        const isCkeckoutPageOpen = await checkoutPage.isOpen()
        await expect(isCkeckoutPageOpen).toBe(true)
        await expect(checkoutPage.checkoutForm).toBePresent()
    });

    it('should check that overview page is opened and price is correct', async () => {
        await checkoutPage.setFirstName('asdasd')
        await checkoutPage.setLastName('sasas')
        await checkoutPage.setPostalCode('asddasd')
        await checkoutPage.clickContinueBtn()
        await overviewPage.assertPageIsOpen();
        await overviewPage.assertItemIsPresent();
        await overviewPage.assertTotalPriceIsCorrect();
    });

    it('should check that user is redirected to the Inventory page when cancel', async () => {
        await overviewPage.clickCancelBtn()
        const isInventoryPageOpen = await inventoryPage.isOpen()
        await expect(isInventoryPageOpen).toBe(true)
    });
})