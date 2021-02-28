const puppeteer = require('puppeteer');

(async () => {

    // setup and open a browser 
    const browser = await puppeteer.launch({ headless: false, slowMo: 150 }); //to watch simulation slowly
    // const browser = await puppeteer.launch({ headless: true }); //to do not watch evolution and faster
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/')

    // fill up the form
    await page.type("#name", "My name")
    await page.type("#email", "email@mail.com")
    await page.select('#selectYears', '2')
    await page.$eval('#exampleCheck1', check => check.checked = true)
    await page.type("#phone", "666555444")
    await page.type("#pwd", "mypassword")
    await page.type("#rpwd", "mypassword")
    await page.click("#enter")

    // evaluate result
    const result = await page.$eval('#result', element => element.textContent);
    if (result === 'SUCCESS') {
        console.log('form working!!')
    } else {
        console.error('There is some error')
    }

    // take a screenshot
    await page.screenshot({ path: 'test.png' });

    //closing browser
    await browser.close();
})();