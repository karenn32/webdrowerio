
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import { config } from '../../config.js';

const { username, password } = config.valid_user;

describe('TC1 - Login valid user test', () => {
    it('should check that password is secured', async () => {
        await loginPage.open()
        await expect(loginPage.inputPassword).toHaveAttribute('type', 'password')
    })

    it('should check that user is logged in', async () => {
        await loginPage.login(username, password)
        const isInventoryPageOpen = await inventoryPage.isOpen()
        await expect(isInventoryPageOpen).toBe(true)
        await expect(inventoryPage.item).toBePresent()
        await expect(inventoryPage.cartLink).toBePresent()
    })
})