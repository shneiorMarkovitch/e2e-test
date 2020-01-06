const puppeteer = require('puppeteer');
const conf = require('../conf');
const openBrowser = async () => {
    const browser = await puppeteer.launch({headless: false, appMode: true, slowMo: conf.slow,});
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(280000);
    await page.goto(conf.url);
    await page.waitFor(5000);
    return {page, browser}
};
module.exports = openBrowser;
