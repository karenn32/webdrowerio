
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import { config } from '../../config.js';
const { username, password } = config.valid_user;

describe('TC6 - Footer link test', () => {
    before(async () => {
        await loginPage.open()
        await loginPage.login(username, password)
    });

    it('should check that Twitter opens in new tab', async () => {
        const isInventoryPageOpen = await inventoryPage.isOpen()
        await expect(isInventoryPageOpen).toBe(true)
        const originalWindowHandle = await browser.getWindowHandle();
        await inventoryPage.clickTwitter();
        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length === 2,
            {
                timeout: 5000,
                timeoutMsg: 'Expected a new tab to open after clicking Twitter icon'
            }
        );

        const windowHandles = await browser.getWindowHandles();
        const newWindowHandle = windowHandles.find(handle => handle !== originalWindowHandle);
        await browser.switchToWindow(newWindowHandle);
        const url = await browser.getUrl();
        expect(url).toContain('x.com/saucelabs');
        await browser.closeWindow();
        await browser.switchToWindow(originalWindowHandle);
    });

    it('should check that Facebook opens in new tab', async () => {
        const isInventoryPageOpen = await inventoryPage.isOpen()
        await expect(isInventoryPageOpen).toBe(true)
        const originalWindowHandle = await browser.getWindowHandle();
        await inventoryPage.clickFacebook();

        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length === 2,
            {
                timeout: 5000,
                timeoutMsg: 'Expected a new tab to open after clicking Facebook icon'
            }
        );

        const windowHandles = await browser.getWindowHandles();
        const newWindowHandle = windowHandles.find(handle => handle !== originalWindowHandle);
        await browser.switchToWindow(newWindowHandle);
        const url = await browser.getUrl();
        expect(url).toContain('facebook.com/saucelabs');
        await browser.closeWindow();
        await browser.switchToWindow(originalWindowHandle);
    });

    it('should check that LinkedIn opens in new tab', async () => {
        const isInventoryPageOpen = await inventoryPage.isOpen()
        await expect(isInventoryPageOpen).toBe(true)
        const originalWindowHandle = await browser.getWindowHandle();
        await inventoryPage.clickLinkedIn();

        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length === 2,
            {
                timeout: 5000,
                timeoutMsg: 'Expected a new tab to open after clicking LinkedIn icon'
            }
        );

        const windowHandles = await browser.getWindowHandles();
        const newWindowHandle = windowHandles.find(handle => handle !== originalWindowHandle);
        await browser.switchToWindow(newWindowHandle);
        const url = await browser.getUrl();
        expect(url).toContain('linkedin.com/company/sauce-labs/');
        await browser.closeWindow();
        await browser.switchToWindow(originalWindowHandle);
    });



})