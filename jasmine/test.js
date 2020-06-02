const openBrowser = require('../api/openBrowser');
const conf = require('../conf');
const Login = require('../api/login');

describe('test for login', function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    let page, browser, text, login = {};
    beforeAll(async () => {
        ({page, browser} = await openBrowser());
        login = new Login(page, conf.enjoy);
    });
    afterAll(async () => {
        await browser.close();
        console.log("**********************************************************************ghj\ndfggghhhhhhhhggg");
    });
    it(' login ', async () => {
        await login.clickTo();
        await page.waitFor(8000);
        let url = await page.url();
        expect(url).toBe(conf.ual1);
    });
    it('date ', async () => {
        await page.waitFor(5000);
        await login.utility.date.setText("11112019");
        await page.waitFor(5000);
        expect("shne").toBe("shne");
    });
    xit('name ', async () => {
        await login.utility.name.setText("shneior");
        await page.waitFor(1000);
        expect("shneior").toBe("shneior");
    });
    xit('size  ', async () => {
        await login.utility.size.setText("37");
        await page.waitFor(1000);
        expect("size").toBe("size");
    });
    xit('patient', async () => {
        await page.click(conf.utility.patient);
        await page.waitFor(1000);
    });
    xit('you have coughs today', async () => {
        await page.click(conf.utility.coughs);
        await page.waitFor(1000);
    });
    xit('submit', async () => {
        await page.click(conf.utility.submit);
    });
    
});