
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import { config } from '../../config.js';

const { username, password } = config.valid_user;


describe('TC4 - Logout test', () => {
    it('should check that burger is present', async () => {
        await loginPage.open()
        await loginPage.login(username, password)
        await expect(inventoryPage.burger).toBePresent()
    })

    it('should check that 4 items in sidebar are present', async () => {
        await inventoryPage.clickBurger()
        await browser.pause(1000)
        await expect(inventoryPage.allItemsBtn).toBePresent()
        await expect(inventoryPage.about).toBePresent()
        await expect(inventoryPage.logout).toBePresent()
        await expect(inventoryPage.reset).toBePresent()
    })

    it('should check that user is redirected and fields are empty', async () => {
        await inventoryPage.clickLogout()
        await expect(loginPage.inputUsername).toHaveValue('')
        await expect(loginPage.inputPassword).toHaveValue('')
    })
})