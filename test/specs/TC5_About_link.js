import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import { config } from '../../config.js';
const { username, password } = config.valid_user;

describe('TC5 - About link test', () => {
    before(async () => {
        await loginPage.open()
        await loginPage.login(username, password)
    });

    it('should check that About link opens', async () => {
        await inventoryPage.clickBurger()
        await browser.pause(1000)
        await inventoryPage.clickAbout();
        const url = await browser.getUrl();
        await expect(url).toContain('https://saucelabs.com/')
    });
})