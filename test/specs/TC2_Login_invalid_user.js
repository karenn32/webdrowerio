import loginPage from '../pageobjects/login.page.js'
import { generateRandomString } from '../../utils/random.js'
import { config } from '../../config.js';

const { username, password } = config.valid_user;


describe('TC2 - Login invalid password test', () => {
    it('should check that password is secured', async () => {
        await loginPage.open()
        await expect(loginPage.inputPassword).toHaveAttribute('type', 'password')
    })

    it('should check that "X" icons are displayed', async () => {
        const randomLogin = generateRandomString(10);
        await loginPage.login(randomLogin, password)
        await expect(loginPage.loginErrorIcon).toBePresent()
        await expect(loginPage.loginErrorText).toBePresent()
    })
})