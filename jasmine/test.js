const openBrowser = require('../api/openBrowser');
const conf = require('../conf');
const Login = require('../api/login');

describe('test for login', function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    let page, browser, text, login = {}, email = conf.email, password = conf.password;
    beforeAll(async () => {
        ({page, browser} = await openBrowser());
        login = new Login(page, conf.loginForm);
    });
    afterAll(async () => {
        await browser.close()
    });
    it('is login form exist', async () => {
        let isDialog = await login.isExist();
        expect(isDialog).toBe(true);
    });
    it('Click without text entry', async () => {
        await page.click(conf.utility.login);
        text = await login.utility.warning.getText();
        let color = await login.utility.warning.getColor();
        expect(text).toBe("Email can't be blank, Password can't be blank");
        expect(color).toBe(conf.color);
    });
    it('Enter email and click', async () => {
        await login.utility.email.setText("shneior@gmail.com");
        await page.click(conf.utility.login);
        text = await login.utility.warning.getText();
        expect(text).toBe("Password can't be blank");
    });
    it('Enter password and click', async () => {
        await login.utility.email.clearInput();
        await login.utility.password.setText("770%^&(*d45");
        await page.click(conf.utility.login);
        text = await login.utility.warning.getText();
        expect(text).toBe("Please enter a valid email");
    });
    it('Enter wrong password', async () => {
        await login.utility.email.setText(email);
        await login.utility.password.setText("l;kj");
        await page.click(conf.utility.login);
        text = await login.utility.warning.getText();
        expect(text).toBe("Please enter a valid password");
    });
    it('Enter email & password correct', async () => {
        await login.utility.email.setText(email);
        await login.utility.password.setText(password);
        await page.click(conf.utility.login);
        await page.waitFor(10000);
        let url = await page.url();
        expect(url).toBe(conf.secondUrl)
    });
});