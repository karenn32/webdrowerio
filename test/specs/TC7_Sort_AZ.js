import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js';
import { config } from '../../config.js';

const { username, password } = config.valid_user;

describe('TC7 - Inventory Sort test AZ', async () => {
    before(async () => {
        await loginPage.open()
        await loginPage.login(username, password)
    });

    it('should sort items by name from A to Z', async () => {
        await inventoryPage.sort.selectByAttribute('value', 'az')
        const itemNameTexts = await inventoryPage.allItems.map((item) => item.getText())
        const sortedNames = [...itemNameTexts].sort((a, b) => a.localeCompare(b))
        expect(itemNameTexts).toEqual(sortedNames)
    });
});