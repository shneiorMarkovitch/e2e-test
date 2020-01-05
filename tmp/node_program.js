// console.log("helo word");
// //throw new Error('This is an Error!');
// // const fs = require('fs');
// // const os = require('os');
// const ob=require('./puppeteer');
// // const homeDirectory = os.homedir();
// // fs.writeFile(`${homeDirectory}/test.txt`, 'Hello World!', (err) => {
// //     if (err) throw err;
// //     console.log('Created file!');
// // });
// // fs.readdir('./', (err, result) => {
// //     console.log(result,"  ++++++++++++++++");
// //});
// let page,browser;
// async function run() {
//
//     ({page,browser}=await ob());
//     browser.closed();
// }
// run().then(console.log(".................."));

const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({headless: false,appMode:true});
    const page = await browser.newPage();
    await page.goto('http://toshibadriversdownload.com/satellite-c655-s5514-windows-7-64bit-drivers/');
    //await page.screenshot({path: 'example.png'});
    let str='#menu-item-8055 > a';
    await page.waitFor(3000);
    await page.click(str);
    await page.waitFor(5000);

    await browser.close();
})();
//ob().then(console.log("*********************************************8"));
