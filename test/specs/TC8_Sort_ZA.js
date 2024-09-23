import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js';
import { config } from '../../config.js';

const { username, password } = config.valid_user;

describe('TC8 - Inventory Sort test ZA', async () => {
    before(async () => {
        await loginPage.open()
        await loginPage.login(username, password)
    });

    it('should sort items by name from Z to A', async () => {
        await inventoryPage.sort.selectByAttribute('value', 'za')
        const itemNameTexts = await inventoryPage.allItems.map((item) => item.getText())
        const sortedNames = [...itemNameTexts].sort((a, b) => b.localeCompare(a))
        expect(itemNameTexts).toEqual(sortedNames)
    });
});