// const openBrowser = require('../openBrowser');
// const conf=require('../conf');
// const Login = require('../login');
// let page, browser, login={};
// (async () => {
//     ({page, browser} = await openBrowser(page));
//
//     login = new Login(page,conf.screenLoginElements);
//     let r=await login.isExist();
//     console.log(r, "  false_______");
//     await page.click(conf.utility.login);
//     await page.waitFor(2000);
//     let text=await login.utility.warning.getText();
//     console.log(text, "           text");
//     await login.utility.temp.setText("ghfdfgd");
//     await page.waitFor(2000);
//     await browser.close();
// })();
describe('test', function () {
     afterAll(()=>browser.close);
    it('1', async () => {
        console.log("11111111111111111111111111111111");
    })
});