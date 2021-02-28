const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 150 });
    const page = await browser.newPage();
    await page.goto('http://localhost:3001/')
    await page.type("#name", "My name")
    await page.type("#email", "email@mail.com")
    await page.type("#phone", "666555444")
    await page.type("#pwd", "mypassword")
    await page.type("#rpwd", "mypassword")
    await page.click("#enter")

    const result = await page.$eval('#result', element => element.textContent);
    if (result === 'SUCCESS') {
        console.log('form working!!')
    } else {
        console.error('There is some error')
    }

    await page.screenshot({ path: 'test.png' });
    await browser.close();
})();