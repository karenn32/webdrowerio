
import loginPage from '../pageobjects/login.page.js'
import { generateRandomString } from '../../utils/random.js'
import { config } from '../../config.js';

const { username, password } = config.valid_user;



describe('TC3 - Login invalid password test', () => {
    it('should check that password is secured', async () => {
        await loginPage.open()
        //await browser.pause(2000)
        await expect(loginPage.inputPassword).toHaveAttribute('type', 'password')
    })

    it('should check that "X" icons are displayed', async () => {
        const randomPassword = generateRandomString(10);
        await loginPage.login(username, randomPassword)
        await expect(loginPage.loginErrorIcon).toBePresent()
        await expect(loginPage.loginErrorText).toBePresent()
    })
})