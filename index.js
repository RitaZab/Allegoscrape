const playwright = require('playwright');
(async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://allegro.pl/kategoria/sluchawki-66887');
    await page.waitForTimeout(1000);
    await page.locator('button:text("OK, ZGADZAM SIĘ")').click();
    await page.waitForTimeout(5000);
    for (let i = 1; i < 69; i++) {
        const title = await page.textContent(`//article[${i}]/div/div/div[2]/div[1]/h2/a`)
        const price = await page.textContent(`//article[${i}]/div/div/div[2]/div[2]/div/div/span`)
        const hrefElement = await page.$(`//article[${i}]/div/div/div[2]/div[1]/h2/a`);
        const href = await hrefElement.getAttribute('href');
        console.log(title, price, href, i)
    }

        await page.waitForTimeout(10000)
        await page.locator('//*[@id="search-results"]/div[2]/div[4]/div/div/div/a').click();
        await page.waitForTimeout(5000);
    
    for (let y = 1; y < 10; y++) {
        for (let i = 1; i < 69; i++) {
            const title = await page.textContent(`//article[${i}]/div/div/div[2]/div[1]/h2/a`)
            const price = await page.textContent(`//article[${i}]/div/div/div[2]/div[2]/div/div/span`)
            const hrefElement = await page.$(`//article[${i}]/div/div/div[2]/div[1]/h2/a`);
            const href = await hrefElement.getAttribute('href');
            console.log(`nr:${y*68+i},name:${title},\nprice: ${price},\nurl: ${href}`)
        }
        await page.waitForTimeout(10000)
        console.log(`${y+1} site is done`)
            await page.locator('//*[@id="search-results"]/div[2]/div[4]/div/div/div/a[2]').click();
            await page.waitForTimeout(5000);
        
    }
    }) (); 
