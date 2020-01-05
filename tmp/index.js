let openBrowser=require('../api/openBrowser');

(async () => {
    let page,browser;
    ({page,browser} =await openBrowser());
    //const browser = await puppeteer.launch({headless: false,appMode:true});
   // const page = await browser.newPage();
    //await page.goto('http://toshibadriversdownload.com/satellite-c655-s5514-windows-7-64bit-drivers/');
    //await page.screenshot({path: 'example.png'});
    let str='#menu-item-8055 > a';
    await page.waitFor(3000);
    await page.click(str);
    await page.waitFor(5000);

    await browser.close();
})();
