
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import cartPage from '../pageobjects/cart.page.js'
import { config } from '../../config.js';

const { username, password } = config.valid_user;

describe('TC13 - Add to cart test', () => {
    before(async () => {
        await loginPage.open()
        await loginPage.login(username, password)
    })
    it('should check that cart is empty', async () => {
        await expect(inventoryPage.cartLink).not.toHaveChildren()
    })

    it('should check that item is added to cart', async () => {
        await inventoryPage.clickItemAddToCartBtn()
        await expect(inventoryPage.cartBage).toHaveText('1')
    })

    it('should check that logged out', async () => {
        await inventoryPage.burger.click()
        await browser.pause(1000) //sometimes side menu doesn't open fast enough, this causes the test to fail
        await inventoryPage.clickLogout()
        await expect(loginPage.inputUsername).toHaveValue('')
        await expect(loginPage.inputPassword).toHaveValue('')
    })

    it('should check that logged in and products and cart are displayed', async () => {
        await loginPage.login('standard_user', 'secret_sauce')
        const isInventoryPageOpen = await inventoryPage.isOpen()
        await expect(isInventoryPageOpen).toBe(true)
        await expect(inventoryPage.item).toBePresent()
        await expect(inventoryPage.cartLink).toBePresent()
    })

    it('should check that cart is displayed, product is the same as added', async () => {
        await inventoryPage.clickCartLink()
        await expect(cartPage.item).toBePresent()
    })

})