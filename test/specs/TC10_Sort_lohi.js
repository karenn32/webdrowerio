import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js';
import { config } from '../../config.js';

const { username, password } = config.valid_user;

describe('TC10 - Inventory Sort test lohi', async () => {
    before(async () => {
        await loginPage.open()
        await loginPage.login(username, password)
    });

    it('should sort items by price from low to high', async () => {
        await inventoryPage.sort.selectByAttribute('value', 'lohi')
        const itemPrices = await inventoryPage.allPrices.map(async (item) => {
            const priceText = await item.getText();
            return parseFloat(priceText.replace('$', ''));
        });
        const sortedPrices = [...itemPrices].sort((a, b) => a - b)
        expect(itemPrices).toEqual(sortedPrices)
    });

});