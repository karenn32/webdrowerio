
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';
import overviewPage from '../pageobjects/overveiw.page.js';
import completePage from '../pageobjects/complete.page.js';
import { config } from '../../config.js';

const { username, password } = config.valid_user;

describe('TC11 - Valid checkout test', () => {
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

    it('should check that user is redirected to the Checkout Complete page', async () => {
        await overviewPage.finishBtn.click()
        const isCompletePageOpen = await completePage.isOpen()
        await expect(isCompletePageOpen).toBe(true)
        await expect(completePage.completeHeader).toBePresent()
    });

    it('should check that user is redirected to the Checkout Complete page', async () => {
        await completePage.backBtn.click()
        const isInventoryPageOpen = await inventoryPage.isOpen()
        await expect(isInventoryPageOpen).toBe(true)
        await expect(inventoryPage.cartLink).not.toHaveChildren()
    });


})