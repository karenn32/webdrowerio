import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js';
import { config } from '../../config.js';

const { username, password } = config.valid_user;

describe('TC9 - Inventory Sort test hilo', async () => {
    before(async () => {
        await loginPage.open()
        await loginPage.login(username, password)
    });

    it('should sort items by price from high to low', async () => {
        await inventoryPage.sort.selectByAttribute('value', 'hilo')
        const itemPrices = await inventoryPage.allPrices.map(async (item) => {
            const priceText = await item.getText();
            return parseFloat(priceText.replace('$', ''));
        });
        const sortedPrices = [...itemPrices].sort((a, b) => b - a)
        expect(itemPrices).toEqual(sortedPrices)
    });
});